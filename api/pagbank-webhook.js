import { createHash, timingSafeEqual } from "node:crypto";
import { supabase } from "./_lib/supabase.js";

export const config = { api: { bodyParser: false } };
const API = "https://sandbox.api.pagseguro.com";
async function readRaw(req) {
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > 256_000) throw new Error("Payload muito grande");
    chunks.push(chunk);
  }
  return Buffer.concat(chunks);
}
function verifiedSignature(raw, received, token) {
  if (typeof received !== "string" || !/^[0-9a-f]{64}$/i.test(received)) return false;
  const expected = createHash("sha256").update(token + "-").update(raw).digest();
  return timingSafeEqual(expected, Buffer.from(received, "hex"));
}
export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") return res.status(405).json({ error: "Método não permitido" });
  const token = process.env.PAGBANK_TOKEN;
  if (!token) return res.status(503).json({ error: "PagBank não configurado" });
  try {
    const raw = await readRaw(req);
    // Checkout legacy signature; do not accept unsigned or unknown signature formats.
    if (!verifiedSignature(raw, req.headers["x-authenticity-token"], token)) {
      return res.status(401).json({ error: "Assinatura inválida" });
    }
    const event = JSON.parse(raw.toString("utf8"));
    // A notification is never sufficient to publish: fetch the authoritative order.
    const orderId = event?.reference_id;
    if (typeof orderId !== "string" || !/^[0-9a-f-]{36}$/i.test(orderId)) {
      return res.status(202).json({ received: true });
    }
    const records = await supabase("love_orders?id=eq." + encodeURIComponent(orderId) + "&select=id,plan,amount_cents,status,provider_order_id");
    const order = records?.[0];
    if (!order || order.status !== "pending" || !order.provider_order_id) {
      return res.status(200).json({ received: true });
    }
    // Checkout notification can refer to a checkout; payment notification may
    // include a separate order ID. Only a matching, paid order is accepted.
    const providerOrderId = event?.order_id || (typeof event?.id === "string" && event.id.startsWith("ORDE_") ? event.id : null);
    if (!providerOrderId || !/^ORDE_[A-Za-z0-9-]+$/.test(providerOrderId)) {
      return res.status(202).json({ received: true });
    }
    const response = await fetch(API + "/orders/" + encodeURIComponent(providerOrderId), {
      headers: { Authorization: "Bearer " + token, Accept: "application/json" },
    });
    if (!response.ok) throw new Error("Falha ao consultar pedido PagBank");
    const paid = await response.json();
    const charges = Array.isArray(paid.charges) ? paid.charges : [];
    const validCharge = charges.find(c =>
      c.status === "PAID" &&
      c.amount?.currency === "BRL" &&
      c.amount?.value === order.amount_cents
    );
    if (paid.reference_id !== orderId || !validCharge) {
      return res.status(202).json({ received: true });
    }
    // Atomic, idempotent function handles paid order + page publication.
    await supabase("rpc/publish_paid_love_order", {
      method: "POST", body: { p_order_id: orderId }, prefer: "return=minimal",
    });
    return res.status(200).json({ received: true });
  } catch {
    // Retryable failure; never acknowledge a failed verification as paid.
    return res.status(500).json({ error: "Não foi possível validar a notificação" });
  }
}

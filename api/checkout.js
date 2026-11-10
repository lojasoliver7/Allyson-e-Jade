import { createHash } from "node:crypto";
import { getPlan, normalizeSlug, assertCheckoutConfig } from "./_lib/commerce.js";
import { supabase } from "./_lib/supabase.js";

const BASE = "https://sandbox.api.pagseguro.com";
export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Método não permitido" });
  }
  try {
    if (!process.env.PAGBANK_TOKEN) return res.status(503).json({ error: "PagBank não configurado" });
    const origin = process.env.PUBLIC_SITE_URL;
    if (!origin || !/^https:\/\/[^/]+$/.test(origin)) {
      return res.status(503).json({ error: "PUBLIC_SITE_URL não configurada" });
    }
    const { plan: planKey, config, upload_session: uploadToken } = req.body || {};
    const refs = [config?.hero?.photo?.src, ...(config?.timeline || []).map(x => x?.photo?.src), ...(config?.gallery || []).map(x => x?.src), config?.music?.audioUrl].filter(x => typeof x === "string" && x.startsWith("pending/"));
    if (refs.length && (typeof uploadToken !== "string" || !/^[a-f0-9]{64}$/.test(uploadToken))) return res.status(400).json({ error: "Sessão de mídia ausente" });
    const plan = getPlan(planKey);
    assertCheckoutConfig(config);
    const slugBase = normalizeSlug(config.couple.myName + "-e-" + config.couple.herName);
    const pageId = crypto.randomUUID();
    const orderId = crypto.randomUUID();
    const slug = slugBase.slice(0, 60) + "-" + pageId.slice(0, 8);
    await supabase("love_pages", {
      method: "POST",
      body: { id: pageId, slug, plan: planKey, config, status: "draft" },
      prefer: "return=minimal",
    });
    await supabase("love_orders", {
      method: "POST",
      body: { id: orderId, page_id: pageId, plan: planKey, amount_cents: plan.amountCents },
      prefer: "return=minimal",
    });
    if (refs.length) {
      const hash = createHash("sha256").update(uploadToken).digest("hex");
      const sessions = await supabase("love_upload_sessions?token_hash=eq." + hash + "&select=id,files_reserved,order_id,expires_at");
      const session = sessions?.[0];
      if (!session || session.order_id || Date.parse(session.expires_at) <= Date.now() || refs.length > session.files_reserved) {
        return res.status(400).json({ error: "Sessão de arquivos inválida ou expirada" });
      }
      const prefix = "pending/" + session.id + "/";
      if (new Set(refs).size !== refs.length || refs.some(path => !path.startsWith(prefix) || !/^pending\/[0-9a-f-]{36}\/[0-9a-f-]{36}\.(?:jpg|png|webp|mp3)$/.test(path))) {
        return res.status(400).json({ error: "Referências de arquivos inválidas" });
      }
      const base = process.env.SUPABASE_URL.replace(/\/$/, "");
      for (const path of refs) {
        const response = await fetch(base + "/storage/v1/object/info/love-media/" + path, {
          headers: { apikey: process.env.SUPABASE_SERVICE_ROLE_KEY, Authorization: "Bearer " + process.env.SUPABASE_SERVICE_ROLE_KEY },
        });
        if (!response.ok) return res.status(400).json({ error: "Um dos arquivos não foi enviado corretamente" });
      }
      await supabase("rpc/claim_love_upload_session", {
        method: "POST", body: { p_token_hash: hash, p_order_id: orderId },
      });
    }
    const checkout = await fetch(BASE + "/checkouts", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + process.env.PAGBANK_TOKEN,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        reference_id: orderId,
        items: [{ reference_id: planKey, name: "Página romântica " + planKey, quantity: 1, unit_amount: plan.amountCents }],
        payment_methods: [{ type: "PIX" }, { type: "CREDIT_CARD" }, { type: "DEBIT_CARD" }],
        return_url: origin + "/vendas.html?checkout=retorno",
        payment_notification_urls: [origin + "/api/pagbank-webhook"],
      }),
    });
    const data = await checkout.json().catch(() => ({}));
    if (!checkout.ok || !data.id) {
      return res.status(502).json({ error: "Checkout não autorizado pelo PagBank. Verifique a habilitação dos meios de pagamento no Sandbox." });
    }
    await supabase("love_orders?id=eq." + orderId + "&status=eq.pending", {
      method: "PATCH", body: { provider_order_id: data.id }, prefer: "return=minimal",
    });
    const payUrl = data.links?.find(link => link.rel === "PAY")?.href;
    if (!payUrl || !/^https:\/\/(?:[a-z0-9-]+\.)*(?:pagseguro\.uol\.com\.br|pagbank\.com\.br)\//i.test(payUrl)) {
      return res.status(502).json({ error: "Link de pagamento inválido" });
    }
    return res.status(200).setHeader("Cache-Control", "no-store").json({ checkout_url: payUrl, order_id: orderId });
  } catch (err) {
    const status = /Plano inválido|Personalização inválida|Informe os nomes|Envie os arquivos|Nome inválido/.test(err.message) ? 400 : 500;
    return res.status(status).json({ error: status === 400 ? err.message : "Não foi possível iniciar o pagamento" });
  }
}

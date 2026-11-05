import { getPlan, normalizeSlug, assertCheckoutConfig } from "./_lib/commerce.js";
import { supabase } from "./_lib/supabase.js";

const BASE = "https://sandbox.api.pagseguro.com";
const noStore = { "Cache-Control": "no-store" };
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
    const { plan: planKey, config } = req.body || {};
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
        redirect_url: origin + "/vendas.html?checkout=retorno",
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
    if (!payUrl || !/^https:\/\/[^/]*pagseguro\.uol\.com\.br\//.test(payUrl)) {
      return res.status(502).json({ error: "Link de pagamento inválido" });
    }
    return res.status(200).setHeader("Cache-Control", "no-store").json({ checkout_url: payUrl, order_id: orderId });
  } catch (err) {
    const status = /Plano inválido|Personalização inválida|Informe os nomes|Envie os arquivos|Nome inválido/.test(err.message) ? 400 : 500;
    return res.status(status).json({ error: status === 400 ? err.message : "Não foi possível iniciar o pagamento" });
  }
}

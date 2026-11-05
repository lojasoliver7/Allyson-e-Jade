// Shared server-only commerce rules. Never import this file in browser scripts.
export const PLANS = Object.freeze({
  "24h": Object.freeze({ amountCents: 1499, durationHours: 24 }),
  "1ano": Object.freeze({ amountCents: 2499, durationHours: 365 * 24 }),
  definitivo: Object.freeze({ amountCents: 3999, durationHours: null }),
});

export function getPlan(plan) {
  if (typeof plan !== "string" || !Object.hasOwn(PLANS, plan)) {
    throw new Error("Plano inválido");
  }
  return PLANS[plan];
}

export function normalizeSlug(value) {
  const slug = String(value ?? "")
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
    .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  if (!slug || slug.length > 80) throw new Error("Nome inválido para URL");
  return slug;
}

export function assertCheckoutConfig(config) {
  if (!config || typeof config !== "object" || Array.isArray(config)) {
    throw new Error("Personalização inválida");
  }
  const a = config.couple?.myName;
  const b = config.couple?.herName;
  if (typeof a !== "string" || typeof b !== "string" ||
      !a.trim() || !b.trim() || a.length > 100 || b.length > 100) {
    throw new Error("Informe os nomes do casal");
  }
  // Embedded base64 images and blob: audio URLs are local preview-only.
  // The upload-to-private-storage flow must run before creating a checkout.
  const serialized = JSON.stringify(config);
  if (serialized.length > 250_000 || /(?:data:image\/|blob:)/i.test(serialized)) {
    throw new Error("Envie os arquivos para o armazenamento antes do pagamento");
  }
  return config;
}

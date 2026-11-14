export default function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "GET") return res.status(405).json({ error: "Método não permitido" });
  const key = process.env.TURNSTILE_SITE_KEY;
  if (!key || !/^[a-zA-Z0-9_-]{8,128}$/.test(key)) return res.status(503).json({ error: "Turnstile não configurado" });
  return res.status(200).json({ site_key: key });
}

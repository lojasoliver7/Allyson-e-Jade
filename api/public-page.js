import { supabase } from "./_lib/supabase.js";

const MEDIA_RE = /^pending\/[0-9a-f-]{36}\/[0-9a-f-]{36}\.(?:jpg|png|webp|mp3)$/i;
async function signMedia(path) {
  if (typeof path !== "string" || !MEDIA_RE.test(path)) return path;
  const base = process.env.SUPABASE_URL?.replace(/\/$/, "");
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!base || !key) throw new Error("Storage indisponível");
  const response = await fetch(base + "/storage/v1/object/sign/love-media/" + path, {
    method: "POST",
    headers: { apikey: key, Authorization: "Bearer " + key, "Content-Type": "application/json" },
    body: JSON.stringify({ expiresIn: 300 }),
  });
  const result = await response.json();
  if (!response.ok || !result.signedURL) throw new Error("Assinatura indisponível");
  return new URL(result.signedURL, base).toString();
}
export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, max-age=0");
  if (req.method !== "GET") return res.status(405).json({ error: "Método não permitido" });
  const slug = typeof req.query.slug === "string" ? req.query.slug : "";
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) || slug.length > 120) {
    return res.status(404).json({ error: "Página não encontrada" });
  }
  try {
    const rows = await supabase("love_pages?slug=eq." + encodeURIComponent(slug) + "&select=config,status,expires_at");
    const page = rows?.[0];
    if (!page || page.status !== "published" || (page.expires_at && Date.parse(page.expires_at) <= Date.now())) {
      return res.status(404).json({ error: "Página indisponível ou expirada" });
    }
    const config = structuredClone(page.config);
    if (config.hero?.photo) config.hero.photo.src = await signMedia(config.hero.photo.src);
    for (const item of config.timeline || []) if (item.photo) item.photo.src = await signMedia(item.photo.src);
    for (const item of config.gallery || []) item.src = await signMedia(item.src);
    if (config.music) config.music.audioUrl = await signMedia(config.music.audioUrl);
    return res.status(200).json({ config });
  } catch {
    return res.status(503).json({ error: "Não foi possível carregar a página" });
  }
}

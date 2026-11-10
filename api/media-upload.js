import { createHash, randomUUID } from "node:crypto";
import { supabase } from "./_lib/supabase.js";

const MIME = Object.freeze({ "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp", "audio/mpeg": "mp3" });
const MAX_BYTES = 10 * 1024 * 1024;
const MAX_FILES = 12;
const bucket = "love-media";

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Método não permitido" });
  }
  const { upload_session: token, mime_type: mime, file_size: size } = req.body || {};
  if (typeof token !== "string" || !/^[a-f0-9]{64}$/.test(token)) {
    return res.status(401).json({ error: "Sessão de upload inválida" });
  }
  if (!Object.hasOwn(MIME, mime) || !Number.isSafeInteger(size) || size < 1 || size > MAX_BYTES) {
    return res.status(400).json({ error: "Arquivo inválido (máximo de 10 MB; JPG, PNG, WEBP ou MP3)" });
  }
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return res.status(503).json({ error: "Armazenamento indisponível" });
  }
  try {
    const hash = createHash("sha256").update(token).digest("hex");
    const sessionRows = await supabase("rpc/reserve_love_upload", {
      method: "POST", body: { p_token_hash: hash, p_bytes: size },
    });
    const sessionId = sessionRows;
    if (typeof sessionId !== "string" || !/^[a-f0-9-]{36}$/i.test(sessionId)) {
      throw new Error("Reserva inválida");
    }
    const path = `pending/${sessionId}/${randomUUID()}.${MIME[mime]}`;
    const base = process.env.SUPABASE_URL.replace(/\/$/, "");
    const response = await fetch(`${base}/storage/v1/object/upload/sign/${bucket}/${path}`, {
      method: "POST",
      headers: {
        apikey: process.env.SUPABASE_SERVICE_ROLE_KEY,
        Authorization: "Bearer " + process.env.SUPABASE_SERVICE_ROLE_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
    const data = await response.json().catch(() => ({}));
    if (!response.ok || !data.token) throw new Error("Falha ao gerar URL assinada");
    const uploadUrl = new URL(`${base}/storage/v1/object/upload/sign/${bucket}/${path}`);
    uploadUrl.searchParams.set("token", data.token);
    return res.status(200).json({
      upload_url: uploadUrl.toString(),
      storage_path: path,
      mime_type: mime,
      max_file_bytes: MAX_BYTES,
      max_files: MAX_FILES,
    });
  } catch {
    return res.status(429).json({ error: "Sessão expirada, limite atingido ou upload indisponível" });
  }
}

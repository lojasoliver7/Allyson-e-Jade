import { randomUUID } from "node:crypto";

const MIME = { "image/jpeg": "jpg", "image/png": "png", "image/webp": "webp", "audio/mpeg": "mp3" };
const MAX_BYTES = 10 * 1024 * 1024;
const MAX_FILES = 12;

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") return res.status(405).json({ error: "Método não permitido" });
  // This endpoint is deliberately disabled until per-session upload quotas,
  // abuse prevention, and cleanup for abandoned checkouts are implemented.
  // Anonymous signed upload URLs without these protections enable storage abuse.
  return res.status(503).json({
    error: "Upload temporariamente indisponível. Configuração de segurança pendente.",
    allowed_types: Object.keys(MIME),
    max_file_bytes: MAX_BYTES,
    max_files: MAX_FILES,
  });
}

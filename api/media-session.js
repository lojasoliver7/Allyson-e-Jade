import { createHash, randomBytes } from "node:crypto";
import { supabase } from "./_lib/supabase.js";

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  if (req.method !== "POST") return res.status(405).json({ error: "Método não permitido" });
  const secret = process.env.TURNSTILE_SECRET_KEY;
  const proof = req.body?.turnstile_token;
  if (!secret || typeof proof !== "string" || proof.length > 2048) {
    return res.status(503).json({ error: "Proteção antiabuso não configurada" });
  }
  try {
    const form = new URLSearchParams({ secret, response: proof });
    const verify = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST", body: form,
    });
    const result = await verify.json();
    if (!verify.ok || !result.success) return res.status(403).json({ error: "Verificação de segurança inválida" });
    const token = randomBytes(32).toString("hex");
    const tokenHash = createHash("sha256").update(token).digest("hex");
    const rows = await supabase("love_upload_sessions", {
      method: "POST", body: { token_hash: tokenHash },
      prefer: "return=representation",
    });
    if (!rows?.[0]?.id) throw new Error("Sessão não criada");
    return res.status(201).json({ upload_session: token, expires_in_seconds: 7200 });
  } catch {
    return res.status(500).json({ error: "Não foi possível iniciar o envio de arquivos" });
  }
}

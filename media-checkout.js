/* Pré-checkout: uploads privados. Sem expor a service role no navegador. */
(() => {
  const ALLOWED = new Set(["image/jpeg", "image/png", "image/webp", "audio/mpeg"]);
  const MAX_BYTES = 10 * 1024 * 1024;
  let widgetId = null;
  let proof = "";
  let siteKey = "";
  let session = "";
  let busy = false;

  async function api(path, payload) {
    const response = await fetch(path, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(result.error || "Falha de comunicação");
    return result;
  }

  async function loadWidget() {
    if (siteKey) return;
    const response = await fetch("/api/turnstile-config", { cache: "no-store" });
    const config = await response.json();
    if (!response.ok || !config.site_key) throw new Error("Turnstile indisponível");
    siteKey = config.site_key;
    let container = document.getElementById("love-turnstile");
    if (!container) {
      container = document.createElement("div");
      container.id = "love-turnstile";
      container.style.margin = "14px 0";
      const pay = document.getElementById("btn-pay-pagbank");
      pay?.parentElement?.insertBefore(container, pay);
    }
    for (let i = 0; i < 40 && !window.turnstile; i++) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    if (!window.turnstile) throw new Error("Não foi possível carregar a verificação");
    widgetId = window.turnstile.render(container, {
      sitekey: siteKey,
      callback: token => { proof = token; },
      "expired-callback": () => { proof = ""; },
      "error-callback": () => { proof = ""; },
    });
  }

  function filesFromForm() {
    const files = [];
    const hero = document.getElementById("file-hero")?.files?.[0];
    if (hero) files.push({ file: hero, target: ["hero", "photo", "src"] });
    for (let i = 0; i < 5; i++) {
      const timeline = document.getElementById(`file-t-${i}`)?.files?.[0];
      const gallery = document.getElementById(`file-g-${i}`)?.files?.[0];
      if (timeline) files.push({ file: timeline, target: ["timeline", i, "photo", "src"] });
      if (gallery) files.push({ file: gallery, target: ["gallery", i, "src"] });
    }
    if (document.querySelector('input[name="music-option"]:checked')?.value === "custom-file") {
      const music = document.getElementById("file-music")?.files?.[0];
      if (music) files.push({ file: music, target: ["music", "audioUrl"] });
    }
    return files;
  }

  function setAtPath(obj, path, value) {
    let node = obj;
    for (let i = 0; i < path.length - 1; i++) node = node[path[i]];
    node[path[path.length - 1]] = value;
  }

  async function uploadFiles(files) {
    if (!files.length) return [];
    if (files.length > 12) throw new Error("Limite de 12 arquivos por pedido");
    for (const { file } of files) {
      if (!ALLOWED.has(file.type) || file.size < 1 || file.size > MAX_BYTES) {
        throw new Error("Use JPG, PNG, WEBP ou MP3, até 10 MB por arquivo");
      }
    }
    if (!session) {
      if (!proof) throw new Error("Conclua a verificação de segurança antes de continuar");
      const response = await api("/api/media-session", { turnstile_token: proof });
      session = response.upload_session;
      proof = "";
      if (widgetId !== null) window.turnstile?.reset(widgetId);
    }
    const uploaded = [];
    for (const entry of files) {
      const signed = await api("/api/media-upload", {
        upload_session: session, mime_type: entry.file.type, file_size: entry.file.size,
      });
      const put = await fetch(signed.upload_url, {
        method: "PUT",
        headers: { "Content-Type": entry.file.type },
        body: entry.file,
      });
      if (!put.ok) throw new Error("Não foi possível enviar " + entry.file.name);
      uploaded.push({ path: signed.storage_path, target: entry.target });
    }
    return uploaded;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const open = document.getElementById("btn-open-checkout");
    open?.addEventListener("click", () => { loadWidget().catch(e => alert(e.message)); });
    const pay = document.getElementById("btn-pay-pagbank");
    if (!pay) return;
    // Capture antes do handler legado: garante que não haja pagamento com URLs blob/data.
    pay.addEventListener("click", async event => {
      event.stopImmediatePropagation();
      event.preventDefault();
      if (busy) return;
      busy = true;
      const old = pay.textContent;
      pay.disabled = true;
      try {
        await loadWidget();
        if (filesFromForm().length && !session && !proof) throw new Error("Marque a verificação de segurança");
        const config = structuredClone(currentConfig);
        const files = filesFromForm();
        const uploaded = await uploadFiles(files);
        for (const { path, target } of uploaded) setAtPath(config, target, path);
        if (/data:image\/|blob:/i.test(JSON.stringify(config))) {
          throw new Error("Selecione novamente as fotos arrastadas para os campos de arquivo");
        }
        const checkout = await api("/api/checkout", {
          plan: selectedPlanKey, config, ...(uploaded.length ? { upload_session: session } : {}),
        });
        if (!checkout.checkout_url) throw new Error("Pagamento indisponível");
        // Ainda não redirecionar: a rota pública e o webhook precisam de validação ponta a ponta.
        throw new Error("Pedido preparado no Sandbox. Pagamento bloqueado até a publicação automática estar pronta.");
      } catch (error) {
        alert(error.message || "Não foi possível preparar os arquivos");
      } finally {
        busy = false;
        pay.disabled = false;
        pay.textContent = old;
      }
    }, true);
  });
})();

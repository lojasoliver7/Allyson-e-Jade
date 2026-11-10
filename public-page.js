(() => {
  const match = location.pathname.match(/^\/p\/([a-z0-9]+(?:-[a-z0-9]+)*)\/?$/);
  if (!match) return;
  document.documentElement.classList.add("in-preview-mode");
  const showUnavailable = () => {
    document.body.replaceChildren();
    const main = document.createElement("main");
    main.style.cssText = "min-height:100vh;display:grid;place-content:center;text-align:center;padding:24px;font-family:sans-serif";
    const heading = document.createElement("h1");
    heading.textContent = "Esta página não está disponível";
    const description = document.createElement("p");
    description.textContent = "O link pode estar incorreto, ainda não ter sido publicado ou já ter expirado.";
    main.append(heading, description);
    document.body.append(main);
    document.title = "Página indisponível";
  };
  fetch("/api/public-page?slug=" + encodeURIComponent(match[1]), { cache: "no-store" })
    .then(async response => {
      if (!response.ok) throw new Error("Página indisponível");
      return response.json();
    })
    .then(({ config }) => {
      if (!config || typeof window.reRenderPage !== "function") throw new Error("Configuração inválida");
      window.reRenderPage(config);
      document.title = (config.couple?.myName || "Nossa") + " & " + (config.couple?.herName || "História");
      document.getElementById("sales-cta-topbar")?.remove();
    })
    .catch(showUnavailable);
})();

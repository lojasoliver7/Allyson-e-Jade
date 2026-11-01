/**
 * ============================================================================
 * VENDAS.JS — CONFIGURADOR EM TEMPO REAL ESTILO LOVE PANDA & CHECKOUT
 * ============================================================================
 */

// Estado inicial da configuração (baseado no projeto romântico)
const DEFAULT_CONFIG = {
  couple: {
    myName: "Allyson",
    herName: "Jade Jai",
    groomInitial: "A",
    brideInitial: "J",
    startDateISO: "2025-10-21T06:30:00-03:00",
    anniversaryDateDisplay: "21/10/2026",
    shortDates: "21.10.25 — 21.10.26"
  },
  music: {
    audioUrl: "musica/nossa-musica.mp3",
    buttonLabelIdle: "Tocar Nossa Música",
    buttonLabelPlaying: "Panda — Eu Te Seguro • Pausar"
  },
  hero: {
    badge: "365 dias ao seu lado • 1 ano juntos",
    subtitle:
      "Desde aquele 21 de outubro às 06h30 da manhã, o meu lugar favorito no mundo passou a ter o seu abraço, o seu riso e a paz de caminhar com você.",
    photo: {
      slotId: "Foto Principal (Hero)",
      src: "fotos/01-hero-destaque.jpg",
      alt: "Foto principal do casal",
      caption: "Nós dois, onde tudo faz sentido",
      date: "Allyson & Jade Jai • Nosso Amor",
      aspect: "portrait"
    }
  },
  counter: {
    subtitle:
      "O relógio nunca para, e a cada instante que passa eu tenho ainda mais certeza de que escolher você foi a decisão mais bonita da minha vida."
  },
  timeline: [
    {
      slotId: "Momento 01",
      date: "Nosso Primeiro Encontro • Trilha",
      title: "Onde nossos caminhos se encontraram",
      description:
        "Lá no alto, entre a natureza, o vento no rosto e o seu sorriso iluminando tudo, eu já sentia que a melhor aventura da minha vida seria caminhar ao seu lado.",
      photo: {
        src: "fotos/02-primeiro-encontro-trilha.jpg",
        alt: "Momento 1",
        caption: "Nossa primeira trilha e o começo de tudo",
        aspect: "landscape"
      }
    },
    {
      slotId: "Momento 02",
      date: "21 de Outubro de 2025 • 06:30",
      title: "Nosso primeiro dia como namorados",
      description:
        "Eram 06h30 da manhã quando oficializamos o que o coração já sabia. Nossas mãos entrelaçadas e nossas alianças marcando o início da promessa mais bonita que já fiz.",
      photo: {
        src: "fotos/03-primeiro-dia-namorados.jpg",
        alt: "Momento 2",
        caption: "21/10/2025 às 06h30 — para sempre nosso sim",
        aspect: "portrait"
      }
    },
    {
      slotId: "Momento 03",
      date: "Nossa Aventura nas Alturas",
      title: "Nosso passeio e rapel juntos",
      description:
        "Com o céu dourado e o Rio inteiro lá embaixo, descobrimos que qualquer frio na barriga vira coragem e alegria quando estamos juntos vivendo cada segundo.",
      photo: {
        src: "fotos/04-passeio-rapel.jpg",
        alt: "Momento 3",
        caption: "Aventuras lá no alto com você",
        aspect: "portrait"
      }
    },
    {
      slotId: "Momento 04",
      date: "Dezembro de 2025 • Nosso Dia a Dia",
      title: "Nosso primeiro Natal e nossa rotina",
      description:
        "Dos momentos mais simples em casa até a alegria do nosso Natal de gorrinhos vermelhos: meu abrigo favorito sempre vai ser a nossa cumplicidade diária.",
      photo: {
        src: "fotos/05-natal-dia-a-dia.jpg",
        alt: "Momento 4",
        caption: "Nosso Natal e a leveza de todo dia",
        aspect: "portrait"
      }
    },
    {
      slotId: "Momento 05",
      date: "21 de Outubro de 2026",
      title: "Nosso Primeiro Ano Juntos",
      description:
        "365 dias depois daquela manhã das 06h30, olho para trás com gratidão e para frente com os olhos brilhando por tudo o que ainda vamos viver.",
      photo: {
        src: "fotos/01-hero-destaque.jpg",
        alt: "Momento 5",
        caption: "Feliz 1º ano, meu amor!",
        aspect: "portrait"
      }
    }
  ],
  gallery: [
    {
      slotId: "Galeria 01",
      src: "fotos/galeria-01-cachoeira.jpg",
      alt: "Galeria 1",
      caption: "Dias de sol, natureza e o seu sorriso",
      date: "Nossos Dias de Sol",
      aspect: "landscape"
    },
    {
      slotId: "Galeria 02",
      src: "fotos/galeria-02-cuidado.jpg",
      alt: "Galeria 2",
      caption: "Na alegria e nos dias difíceis, sempre segurando a sua mão",
      date: "Cuidado & Parceria",
      aspect: "portrait"
    },
    {
      slotId: "Galeria 03",
      src: "fotos/galeria-03-familia.jpg",
      alt: "Galeria 3",
      caption: "Sorrisos que aquecem o coração",
      date: "Momentos Especiais",
      aspect: "landscape"
    },
    {
      slotId: "Galeria 04",
      src: "fotos/galeria-04-colagem.jpg",
      alt: "Galeria 4",
      caption: "Nosso dengo e sintonia em cada detalhe",
      date: "Nosso Abrigo",
      aspect: "portrait"
    },
    {
      slotId: "Galeria 05",
      src: "fotos/galeria-05-show.jpg",
      alt: "Galeria 5",
      caption: "Cantando a vida bem pertinho de você",
      date: "Nossa Sintonia",
      aspect: "portrait"
    }
  ],
  reasons: [
    {
      number: "01",
      title: "A leveza do seu riso",
      text: "Você tem o dom de transformar o dia mais pesado em algo leve em questão de segundos, só pelo jeito espontâneo como sorri para mim."
    },
    {
      number: "02",
      title: "O seu coração generoso",
      text: "Admiro a doçura e a verdade com que você cuida de quem ama. Estar perto de você me inspira a ser alguém melhor todos os dias."
    },
    {
      number: "03",
      title: "Nossa sintonia sem esforço",
      text: "Com você eu não preciso fingir nada. A gente se entende no olhar, na conversa longa de madrugada e até quando fica em silêncio."
    },
    {
      number: "04",
      title: "O aconchego do seu abraço",
      text: "Toda vez que te abraço, parece que o barulho do mundo lá fora diminui. É onde eu encontro a minha calma."
    },
    {
      number: "05",
      title: "Os seus detalhes únicos",
      text: "Cada mania sua, o brilho nos seus olhos quando fala do que gosta e o jeito carinhoso como me chama fazem eu me apaixonar de novo."
    },
    {
      number: "06",
      title: "A parceria que construímos",
      text: "Porque somos time. Celebramos as conquistas um do outro e seguramos firme quando o caminho pede paciência e coragem."
    }
  ],
  letter: {
    datePlace: "21 de Outubro de 2026 • Nosso 1º Ano",
    greeting: "Minha querida Jade Jai,",
    paragraphs: [
      "Se alguém me dissesse, antes de você chegar, o quanto a minha vida ficaria mais bonita, mais calma e mais cheia de sentido ao seu lado, talvez eu achasse que era exagero. Mas aí veio aquele 21 de outubro de 2025, às 06h30 da manhã, e desde então cada dia com você tem sido a prova de que o amor verdadeiro é tranquilo, presente e transformador.",
      "Olhar para este nosso primeiro ano juntos me enche de um orgulho sereno. Não foram apenas 365 dias no calendário: foram centenas de conversas sinceras, risadas até perder o fôlego, planos compartilhados e a certeza diária de que na sua companhia eu estou exatamente onde deveria estar.",
      "Obrigado por ser minha namorada, minha melhor amiga e minha confidente. Obrigado pela paciência, pelo carinho nos pequenos gestos e por dividir a sua vida comigo de um jeito tão inteiro e bonito.",
      "Que este primeiro aniversário seja apenas o começo de uma vida inteira caminhando lado a lado. Eu te amo mais do que consigo colocar em palavras, Jade Jai."
    ],
    closing: "Com todo o meu amor, hoje e sempre,",
    signature: "Allyson"
  },
  promise: {
    title: "Minha promessa para o nosso próximo ano",
    text:
      "Que este primeiro ano seja apenas o prólogo da nossa história. Eu prometo continuar segurando a sua mão nos dias de sol e sendo o seu abrigo nos dias de chuva. Prometo ouvir os seus sonhos, rir das nossas bobeiras, aprender com você e te amar com a mesma ternura das 06h30 daquela manhã em que tudo começou."
  }
};

// Cópia viva de trabalho
let currentConfig = JSON.parse(JSON.stringify(DEFAULT_CONFIG));

// Tabela de planos e valores solicitados
const PLANS_INFO = {
  "24h": {
    name: "24 Horas no Ar",
    priceText: "R$ 14,99",
    priceNum: 14.99,
    savingsText: null
  },
  "1ano": {
    name: "1 Ano no Ar (365 Dias)",
    priceText: "R$ 24,99",
    priceNum: 24.99,
    savingsText: null
  },
  "definitivo": {
    name: "Definitivo / Vitalício (Para Sempre)",
    priceText: "R$ 39,99",
    priceNum: 39.99,
    oldPriceText: "R$ 54,99",
    savingsText: "R$ 15,00 (De R$ 54,99 por R$ 39,99)"
  }
};

let selectedPlanKey = "definitivo";

/* ============================================================================
   INICIALIZAÇÃO QUANDO O DOM ESTIVER PRONTO
   ============================================================================ */
document.addEventListener("DOMContentLoaded", () => {
  initTabsNavigation();
  initFormInputsSync();
  initFileUploads();
  initPlanSelectors();
  initModalCheckout();
  initFullscreenPreview();
  initMobilePreviewToggle();
  initQuickActionButtons();

  // Envia a configuração inicial para o iframe assim que carregar
  const iframe = document.getElementById("live-preview-iframe");
  if (iframe) {
    iframe.addEventListener("load", () => {
      sendConfigToIframe();
    });
  }
});

// Listener para quando o iframe avisar que está pronto
window.addEventListener("message", (event) => {
  if (event.data && event.data.type === "PREVIEW_READY") {
    sendConfigToIframe();
  }
});

/**
 * Envia a configuração atualizada para o iframe de preview (debounced)
 */
let debounceTimer = null;
function sendConfigToIframe() {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    const liveIframe = document.getElementById("live-preview-iframe");
    if (liveIframe && liveIframe.contentWindow) {
      liveIframe.contentWindow.postMessage(
        { type: "UPDATE_CONFIG", config: currentConfig },
        "*"
      );
    }

    const fsIframe = document.getElementById("fullscreen-iframe");
    if (fsIframe && fsIframe.contentWindow) {
      fsIframe.contentWindow.postMessage(
        { type: "UPDATE_CONFIG", config: currentConfig },
        "*"
      );
    }
  }, 100);
}

/* ============================================================================
   1. NAVEGAÇÃO ENTRE ABAS DO CONFIGURADOR (ESTILO LOVE PANDA)
   ============================================================================ */
function initTabsNavigation() {
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  function switchTab(targetTabId) {
    tabButtons.forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-tab") === targetTabId);
    });

    tabPanes.forEach((pane) => {
      pane.classList.toggle("active", pane.id === targetTabId);
    });

    // Se estiver no mobile, rola até o topo do configurador
    const configSection = document.getElementById("configurador");
    if (window.innerWidth <= 768 && configSection) {
      configSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const tabId = btn.getAttribute("data-tab");
      switchTab(tabId);
    });
  });

  // Botões "Próximo" e "Voltar" dentro das abas
  document.querySelectorAll(".btn-next-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      const nextTabId = btn.getAttribute("data-next");
      if (nextTabId) switchTab(nextTabId);
    });
  });

  document.querySelectorAll(".btn-prev-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      const prevTabId = btn.getAttribute("data-prev");
      if (prevTabId) switchTab(prevTabId);
    });
  });
}

/* ============================================================================
   2. SINCRONIZAÇÃO DE CAMPOS DO FORMULÁRIO COM O ESTADO
   ============================================================================ */
function initFormInputsSync() {
  // Aba 1: Casal e Data
  const inputMyName = document.getElementById("cfg-my-name");
  const inputHerName = document.getElementById("cfg-her-name");
  const inputStartDate = document.getElementById("cfg-start-date");
  const inputShortDates = document.getElementById("cfg-short-dates");
  const inputHeroBadge = document.getElementById("cfg-hero-badge");
  const inputHeroSubtitle = document.getElementById("cfg-hero-subtitle");

  function updateCoupleData() {
    const myName = inputMyName ? inputMyName.value.trim() : "Allyson";
    const herName = inputHerName ? inputHerName.value.trim() : "Jade Jai";

    currentConfig.couple.myName = myName || "Allyson";
    currentConfig.couple.herName = herName || "Jade Jai";
    currentConfig.couple.groomInitial = (myName[0] || "A").toUpperCase();
    currentConfig.couple.brideInitial = (herName[0] || "J").toUpperCase();

    if (inputShortDates) {
      currentConfig.couple.shortDates = inputShortDates.value.trim();
    }

    if (inputStartDate && inputStartDate.value) {
      // Ex: 2025-10-21T06:30 -> ISO string
      currentConfig.couple.startDateISO = new Date(inputStartDate.value).toISOString();
    }

    if (inputHeroBadge) {
      currentConfig.hero.badge = inputHeroBadge.value.trim();
    }

    if (inputHeroSubtitle) {
      currentConfig.hero.subtitle = inputHeroSubtitle.value.trim();
    }

    sendConfigToIframe();
  }

  [inputMyName, inputHerName, inputStartDate, inputShortDates, inputHeroBadge, inputHeroSubtitle].forEach((el) => {
    if (el) {
      el.addEventListener("input", updateCoupleData);
    }
  });

  // Aba 2: Foto Hero Legendas
  const inputHeroCaption = document.getElementById("cfg-hero-caption");
  const inputHeroDate = document.getElementById("cfg-hero-date");

  if (inputHeroCaption) {
    inputHeroCaption.addEventListener("input", () => {
      currentConfig.hero.photo.caption = inputHeroCaption.value.trim();
      sendConfigToIframe();
    });
  }

  if (inputHeroDate) {
    inputHeroDate.addEventListener("input", () => {
      currentConfig.hero.photo.date = inputHeroDate.value.trim();
      sendConfigToIframe();
    });
  }

  // Aba 3: Linha do Tempo (5 momentos)
  for (let i = 0; i < 5; i++) {
    const dateEl = document.getElementById(`t-date-0`.replace("0", i));
    const titleEl = document.getElementById(`t-title-0`.replace("0", i));
    const descEl = document.getElementById(`t-desc-0`.replace("0", i));
    const capEl = document.getElementById(`t-caption-0`.replace("0", i));
    const previewTitle = document.getElementById(`preview-t-title-0`.replace("0", i));

    const syncTimelineItem = () => {
      if (!currentConfig.timeline[i]) return;
      if (dateEl) currentConfig.timeline[i].date = dateEl.value;
      if (titleEl) {
        currentConfig.timeline[i].title = titleEl.value;
        if (previewTitle) previewTitle.textContent = titleEl.value || `Momento ${i + 1}`;
      }
      if (descEl) currentConfig.timeline[i].description = descEl.value;
      if (capEl) currentConfig.timeline[i].photo.caption = capEl.value;

      sendConfigToIframe();
    };

    [dateEl, titleEl, descEl, capEl].forEach((el) => {
      if (el) el.addEventListener("input", syncTimelineItem);
    });
  }

  // Aba 4: Galeria de Memórias (5 polaroids)
  for (let i = 0; i < 5; i++) {
    const dateEl = document.getElementById(`g-date-0`.replace("0", i));
    const capEl = document.getElementById(`g-caption-0`.replace("0", i));

    const syncGalleryItem = () => {
      if (!currentConfig.gallery[i]) return;
      if (dateEl) currentConfig.gallery[i].date = dateEl.value;
      if (capEl) currentConfig.gallery[i].caption = capEl.value;

      sendConfigToIframe();
    };

    [dateEl, capEl].forEach((el) => {
      if (el) el.addEventListener("input", syncGalleryItem);
    });
  }

  // Aba 5: Motivos Pelos Quais Te Amo (6 motivos)
  for (let i = 0; i < 6; i++) {
    const titleEl = document.getElementById(`r-title-0`.replace("0", i));
    const textEl = document.getElementById(`r-text-0`.replace("0", i));

    const syncReasonItem = () => {
      if (!currentConfig.reasons[i]) return;
      if (titleEl) currentConfig.reasons[i].title = titleEl.value;
      if (textEl) currentConfig.reasons[i].text = textEl.value;

      sendConfigToIframe();
    };

    [titleEl, textEl].forEach((el) => {
      if (el) el.addEventListener("input", syncReasonItem);
    });
  }

  // Aba 6: Carta e Promessa
  const letDateEl = document.getElementById("cfg-letter-date");
  const letGreetEl = document.getElementById("cfg-letter-greeting");
  const letBodyEl = document.getElementById("cfg-letter-paragraphs");
  const letCloseEl = document.getElementById("cfg-letter-closing");
  const letSigEl = document.getElementById("cfg-letter-signature");
  const promTitleEl = document.getElementById("cfg-promise-title");
  const promTextEl = document.getElementById("cfg-promise-text");

  function syncLetterAndPromise() {
    if (letDateEl) currentConfig.letter.datePlace = letDateEl.value;
    if (letGreetEl) currentConfig.letter.greeting = letGreetEl.value;
    if (letCloseEl) currentConfig.letter.closing = letCloseEl.value;
    if (letSigEl) currentConfig.letter.signature = letSigEl.value;

    if (letBodyEl) {
      // Divide por quebras de linha duplas para gerar os parágrafos
      const paras = letBodyEl.value
        .split(/\n\s*\n/)
        .map((p) => p.trim())
        .filter((p) => p.length > 0);
      currentConfig.letter.paragraphs = paras.length ? paras : ["Com todo o meu amor."];
    }

    if (promTitleEl) currentConfig.promise.title = promTitleEl.value;
    if (promTextEl) currentConfig.promise.text = promTextEl.value;

    sendConfigToIframe();
  }

  [letDateEl, letGreetEl, letBodyEl, letCloseEl, letSigEl, promTitleEl, promTextEl].forEach((el) => {
    if (el) el.addEventListener("input", syncLetterAndPromise);
  });

  // Aba 7: Música
  const musicRadios = document.querySelectorAll('input[name="music-option"]');
  const customFileWrap = document.getElementById("custom-music-file-wrap");
  const customUrlWrap = document.getElementById("custom-music-url-wrap");
  const inputMusicUrl = document.getElementById("cfg-music-url");
  const inputMusicIdle = document.getElementById("cfg-music-btn-idle");
  const inputMusicPlay = document.getElementById("cfg-music-btn-playing");

  musicRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
      if (customFileWrap) customFileWrap.style.display = radio.value === "custom-file" ? "block" : "none";
      if (customUrlWrap) customUrlWrap.style.display = radio.value === "custom-url" ? "block" : "none";

      if (radio.value === "default") {
        currentConfig.music.audioUrl = "musica/nossa-musica.mp3";
        sendConfigToIframe();
      }
    });
  });

  if (inputMusicUrl) {
    inputMusicUrl.addEventListener("input", () => {
      currentConfig.music.audioUrl = inputMusicUrl.value.trim();
      sendConfigToIframe();
    });
  }

  if (inputMusicIdle) {
    inputMusicIdle.addEventListener("input", () => {
      currentConfig.music.buttonLabelIdle = inputMusicIdle.value.trim();
      sendConfigToIframe();
    });
  }

  if (inputMusicPlay) {
    inputMusicPlay.addEventListener("input", () => {
      currentConfig.music.buttonLabelPlaying = inputMusicPlay.value.trim();
      sendConfigToIframe();
    });
  }
}

/* ============================================================================
   3. UPLOAD INSTANTÂNEO DE FOTOS VIA FILEREADER (BASE64)
   ============================================================================ */
function initFileUploads() {
  function handleFileRead(file, callback) {
    if (!file || !file.type.startsWith("image/")) {
      alert("Por favor selecione um arquivo de imagem válido (JPG, PNG, WEBP).");
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      callback(e.target.result);
    };
    reader.readAsDataURL(file);
  }

  // 1. Foto Hero
  const fileHero = document.getElementById("file-hero");
  const imgPreviewHero = document.getElementById("img-preview-hero");
  const heroDropBox = document.getElementById("preview-box-hero");

  if (fileHero && imgPreviewHero) {
    fileHero.addEventListener("change", (e) => {
      const file = e.target.files[0];
      handleFileRead(file, (dataUrl) => {
        imgPreviewHero.src = dataUrl;
        currentConfig.hero.photo.src = dataUrl;
        sendConfigToIframe();
      });
    });

    if (heroDropBox) {
      heroDropBox.addEventListener("click", () => fileHero.click());
      heroDropBox.addEventListener("dragover", (e) => {
        e.preventDefault();
        heroDropBox.style.borderColor = "var(--accent-wine)";
      });
      heroDropBox.addEventListener("dragleave", () => {
        heroDropBox.style.borderColor = "";
      });
      heroDropBox.addEventListener("drop", (e) => {
        e.preventDefault();
        heroDropBox.style.borderColor = "";
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
          handleFileRead(e.dataTransfer.files[0], (dataUrl) => {
            imgPreviewHero.src = dataUrl;
            currentConfig.hero.photo.src = dataUrl;
            sendConfigToIframe();
          });
        }
      });
    }
  }

  // 2. Fotos da Linha do Tempo (5 momentos)
  for (let i = 0; i < 5; i++) {
    const fileEl = document.getElementById(`file-t-0`.replace("0", i));
    const thumbEl = document.getElementById(`img-thumb-t-0`.replace("0", i));

    if (fileEl && thumbEl) {
      fileEl.addEventListener("change", (e) => {
        const file = e.target.files[0];
        handleFileRead(file, (dataUrl) => {
          thumbEl.src = dataUrl;
          if (currentConfig.timeline[i]) {
            currentConfig.timeline[i].photo.src = dataUrl;
          }
          sendConfigToIframe();
        });
      });
    }
  }

  // 3. Fotos da Galeria Polaroid (5 fotos)
  for (let i = 0; i < 5; i++) {
    const fileEl = document.getElementById(`file-g-0`.replace("0", i));
    const thumbEl = document.getElementById(`img-thumb-g-0`.replace("0", i));

    if (fileEl && thumbEl) {
      fileEl.addEventListener("change", (e) => {
        const file = e.target.files[0];
        handleFileRead(file, (dataUrl) => {
          thumbEl.src = dataUrl;
          if (currentConfig.gallery[i]) {
            currentConfig.gallery[i].src = dataUrl;
          }
          sendConfigToIframe();
        });
      });
    }
  }

  // 4. Arquivo de Áudio Personalizado (MP3)
  const fileMusic = document.getElementById("file-music");
  if (fileMusic) {
    fileMusic.addEventListener("change", (e) => {
      const file = e.target.files[0];
      if (file) {
        const audioUrl = URL.createObjectURL(file);
        currentConfig.music.audioUrl = audioUrl;
        sendConfigToIframe();
      }
    });
  }
}

/* ============================================================================
   4. SELETOR DE PLANOS (24H - 14,99 / 1 ANO - 24,99 / DEFINITIVO - 39,99)
   ============================================================================ */
function initPlanSelectors() {
  const planRadios = document.querySelectorAll('input[name="chosen-plan"]');
  const summaryPlanName = document.getElementById("summary-plan-name");
  const summaryPlanPrice = document.getElementById("summary-plan-price");

  function updateSelectedPlan(planKey) {
    selectedPlanKey = planKey;
    const info = PLANS_INFO[planKey] || PLANS_INFO["definitivo"];

    if (summaryPlanName) summaryPlanName.textContent = info.name;
    if (summaryPlanPrice) summaryPlanPrice.textContent = info.priceText;

    // Atualiza radio button correspondente
    planRadios.forEach((r) => {
      r.checked = r.value === planKey;
    });
  }

  planRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
      updateSelectedPlan(radio.value);
    });
  });

  // Botões nas cartas da tabela de planos na página de vendas
  document.querySelectorAll("[data-choose-plan]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const plan = btn.getAttribute("data-choose-plan");
      updateSelectedPlan(plan);

      // Abre a aba de planos no configurador
      const tabBtn = document.querySelector('.tab-btn[data-tab="tab-plan"]');
      if (tabBtn) tabBtn.click();
    });
  });
}

/* ============================================================================
   5. MODAL DE CHECKOUT, PIX E WHATSAPP
   ============================================================================ */
function initModalCheckout() {
  const modal = document.getElementById("checkout-modal");
  const openBtn = document.getElementById("btn-open-checkout");
  const closeBtn = document.getElementById("btn-close-checkout");

  const modalCoupleNames = document.getElementById("modal-couple-names");
  const modalPlanTitle = document.getElementById("modal-plan-title");
  const modalPlanPrice = document.getElementById("modal-plan-price");
  const modalSavingsLine = document.getElementById("modal-savings-line");
  const modalGeneratedUrl = document.getElementById("modal-generated-url");

  const btnCopyLink = document.getElementById("btn-copy-link");
  const btnCopyPix = document.getElementById("btn-copy-pix");
  const btnWhatsapp = document.getElementById("btn-whatsapp-order");

  function sanitizeSlug(str) {
    return str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "");
  }

  function openCheckout() {
    const info = PLANS_INFO[selectedPlanKey] || PLANS_INFO["definitivo"];
    const coupleText = `${currentConfig.couple.myName} & ${currentConfig.couple.herName}`;

    if (modalCoupleNames) modalCoupleNames.textContent = coupleText;
    if (modalPlanTitle) modalPlanTitle.textContent = info.name;
    if (modalPlanPrice) modalPlanPrice.textContent = info.priceText;

    if (modalSavingsLine) {
      if (info.savingsText) {
        modalSavingsLine.style.display = "flex";
        const strong = modalSavingsLine.querySelector("strong");
        if (strong) strong.textContent = info.savingsText;
      } else {
        modalSavingsLine.style.display = "none";
      }
    }

    // Gera URL limpa e amigável
    const slug1 = sanitizeSlug(currentConfig.couple.myName);
    const slug2 = sanitizeSlug(currentConfig.couple.herName);
    const cleanUrl = `https://nossoamor.digital/${slug1}-e-${slug2}`;
    if (modalGeneratedUrl) modalGeneratedUrl.value = cleanUrl;

    // Desenha o QR Code ilustrativo
    drawQrCodeCanvas(cleanUrl);

    modal.classList.add("active");
  }

  function closeCheckout() {
    modal.classList.remove("active");
  }

  if (openBtn) openBtn.addEventListener("click", openCheckout);
  if (closeBtn) closeBtn.addEventListener("click", closeCheckout);

  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeCheckout();
    });
  }

  // Copiar link exclusivo
  if (btnCopyLink && modalGeneratedUrl) {
    btnCopyLink.addEventListener("click", () => {
      navigator.clipboard.writeText(modalGeneratedUrl.value).then(() => {
        const originalText = btnCopyLink.textContent;
        btnCopyLink.textContent = "Copiado! ✓";
        btnCopyLink.style.background = "#2E7D32";
        setTimeout(() => {
          btnCopyLink.textContent = originalText;
          btnCopyLink.style.background = "";
        }, 2000);
      });
    });
  }

  // Copiar chave Pix
  if (btnCopyPix) {
    btnCopyPix.addEventListener("click", () => {
      const codeEl = document.getElementById("pix-copy-paste-code");
      if (codeEl) {
        navigator.clipboard.writeText(codeEl.textContent.trim()).then(() => {
          const originalText = btnCopyPix.textContent;
          btnCopyPix.textContent = "Chave Copiada! ✓";
          btnCopyPix.style.background = "#2E7D32";
          setTimeout(() => {
            btnCopyPix.textContent = originalText;
            btnCopyPix.style.background = "";
          }, 2000);
        });
      }
    });
  }

  // Enviar pedido para o WhatsApp com mensagem formatada
  if (btnWhatsapp) {
    btnWhatsapp.addEventListener("click", () => {
      const info = PLANS_INFO[selectedPlanKey] || PLANS_INFO["definitivo"];
      const couple = `${currentConfig.couple.myName} & ${currentConfig.couple.herName}`;
      const url = modalGeneratedUrl ? modalGeneratedUrl.value : "";

      const message = `Olá! Quero ativar a minha Página Romântica personalizada:
💑 *Casal:* ${couple}
📋 *Plano:* ${info.name} (${info.priceText})
🔗 *Link Desejado:* ${url}
💖 Já preenchi minhas fotos e mensagens no site!`;

      const encodedMsg = encodeURIComponent(message);
      // Abre o WhatsApp
      window.open(`https://wa.me/?text=${encodedMsg}`, "_blank");
    });
  }

  // Baixar arquivo HTML completo da página
  const downloadBtn = document.getElementById("btn-download-html");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", downloadStandaloneHtml);
  }
}

/**
 * Desenha um QR Code ilustrativo de alta definição no Canvas
 */
function drawQrCodeCanvas(url) {
  const canvas = document.getElementById("qr-code-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const size = canvas.width;
  ctx.clearRect(0, 0, size, size);

  // Fundo branco
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(0, 0, size, size);

  // Moldura externa
  ctx.strokeStyle = "#8C3B45";
  ctx.lineWidth = 4;
  ctx.strokeRect(4, 4, size - 8, size - 8);

  // Padrão de cantos estilo QR Code
  function drawFinderPattern(x, y) {
    ctx.fillStyle = "#8C3B45";
    ctx.fillRect(x, y, 28, 28);
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(x + 4, y + 4, 20, 20);
    ctx.fillStyle = "#8C3B45";
    ctx.fillRect(x + 8, y + 8, 12, 12);
  }

  drawFinderPattern(12, 12);
  drawFinderPattern(size - 40, 12);
  drawFinderPattern(12, size - 40);

  // Pontos e matriz simulada
  ctx.fillStyle = "#2D2220";
  const step = 6;
  for (let x = 16; x < size - 16; x += step) {
    for (let y = 16; y < size - 16; y += step) {
      // Pula cantos dos localizadores
      if ((x < 46 && y < 46) || (x > size - 46 && y < 46) || (x < 46 && y > size - 46)) {
        continue;
      }
      // Pseudo-random estável baseado na posição
      const pseudoHash = (x * 13 + y * 29 + url.length * 7) % 10;
      if (pseudoHash > 4) {
        ctx.fillRect(x, y, 4, 4);
      }
    }
  }

  // Coração no centro do QR Code
  const cx = size / 2;
  const cy = size / 2;
  ctx.fillStyle = "#FFFFFF";
  ctx.beginPath();
  ctx.arc(cx, cy, 14, 0, Math.PI * 2);
  ctx.fill();

  ctx.fillStyle = "#8C3B45";
  ctx.font = "16px serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("♥", cx, cy);
}

/* ============================================================================
   6. VISUALIZAÇÃO EM TELA CHEIA (FULLSCREEN MODAL)
   ============================================================================ */
function initFullscreenPreview() {
  const fsModal = document.getElementById("fullscreen-modal");
  const openFsBtn = document.getElementById("btn-fullscreen-preview");
  const closeFsBtn = document.getElementById("btn-close-fullscreen");
  const refreshBtn = document.getElementById("btn-refresh-preview");

  if (openFsBtn && fsModal) {
    openFsBtn.addEventListener("click", () => {
      fsModal.classList.add("active");
      const fsIframe = document.getElementById("fullscreen-iframe");
      if (fsIframe && fsIframe.contentWindow) {
        fsIframe.contentWindow.postMessage(
          { type: "UPDATE_CONFIG", config: currentConfig },
          "*"
        );
      }
    });
  }

  if (closeFsBtn && fsModal) {
    closeFsBtn.addEventListener("click", () => {
      fsModal.classList.remove("active");
    });
  }

  if (refreshBtn) {
    refreshBtn.addEventListener("click", () => {
      const liveIframe = document.getElementById("live-preview-iframe");
      if (liveIframe) {
        liveIframe.src = "index.html?preview=true&r=" + Date.now();
      }
    });
  }
}

/* ============================================================================
   7. VISUALIZAÇÃO NO CELULAR (DRAWER MODAL MOBILE)
   ============================================================================ */
function initMobilePreviewToggle() {
  const toggleBtn = document.getElementById("btn-toggle-mobile-preview");
  const closeBtn = document.getElementById("btn-close-mobile-preview");
  const previewPanel = document.getElementById("preview-panel");

  if (toggleBtn && previewPanel) {
    toggleBtn.addEventListener("click", () => {
      previewPanel.classList.add("mobile-open");
    });
  }

  if (closeBtn && previewPanel) {
    closeBtn.addEventListener("click", () => {
      previewPanel.classList.remove("mobile-open");
    });
  }
}

/* ============================================================================
   8. AÇÕES RÁPIDAS: CARREGAR EXEMPLO & LIMPAR CAMPOS
   ============================================================================ */
function initQuickActionButtons() {
  const loadDemoBtn = document.getElementById("btn-load-demo");
  const clearBtn = document.getElementById("btn-clear-fields");

  if (loadDemoBtn) {
    loadDemoBtn.addEventListener("click", () => {
      currentConfig = JSON.parse(JSON.stringify(DEFAULT_CONFIG));
      fillFormFromConfig(currentConfig);
      sendConfigToIframe();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (confirm("Deseja realmente limpar os campos para começar do zero?")) {
        currentConfig.couple.myName = "Meu Nome";
        currentConfig.couple.herName = "Meu Amor";
        currentConfig.couple.groomInitial = "M";
        currentConfig.couple.brideInitial = "A";
        currentConfig.hero.badge = "Nossa História de Amor";
        currentConfig.hero.subtitle = "Escreva aqui a declaração que abre a página de vocês...";
        currentConfig.hero.photo.caption = "Nosso melhor momento";
        currentConfig.hero.photo.date = "Para Sempre";

        fillFormFromConfig(currentConfig);
        sendConfigToIframe();
      }
    });
  }
}

function fillFormFromConfig(cfg) {
  const myNameEl = document.getElementById("cfg-my-name");
  const herNameEl = document.getElementById("cfg-her-name");
  const shortDatesEl = document.getElementById("cfg-short-dates");
  const heroBadgeEl = document.getElementById("cfg-hero-badge");
  const heroSubEl = document.getElementById("cfg-hero-subtitle");
  const heroCapEl = document.getElementById("cfg-hero-caption");
  const heroDateEl = document.getElementById("cfg-hero-date");

  if (myNameEl) myNameEl.value = cfg.couple.myName;
  if (herNameEl) herNameEl.value = cfg.couple.herName;
  if (shortDatesEl) shortDatesEl.value = cfg.couple.shortDates;
  if (heroBadgeEl) heroBadgeEl.value = cfg.hero.badge;
  if (heroSubEl) heroSubEl.value = cfg.hero.subtitle;
  if (heroCapEl) heroCapEl.value = cfg.hero.photo.caption;
  if (heroDateEl) heroDateEl.value = cfg.hero.photo.date;
}

/* ============================================================================
   9. GERADOR E DOWNLOAD DE PÁGINA STANDALONE (.HTML)
   ============================================================================ */
function downloadStandaloneHtml() {
  const configString = JSON.stringify(currentConfig, null, 2);

  // Baixa o index.html atual com a configuração injetada
  fetch("index.html")
    .then((res) => res.text())
    .then((html) => {
      // Injeta o CONFIG customizado diretamente no topo do script
      const scriptInjection = `
  <script>
    // Configuração personalizada gerada pelo NossoAmor.digital
    window.PRELOADED_CONFIG = ${configString};
    document.addEventListener("DOMContentLoaded", () => {
      if (window.reRenderPage && window.PRELOADED_CONFIG) {
        window.reRenderPage(window.PRELOADED_CONFIG);
      }
    });
  </script>
`;
      const modifiedHtml = html.replace("</body>", `${scriptInjection}\n</body>`);

      const blob = new Blob([modifiedHtml], { type: "text/html;charset=utf-8" });
      const a = document.createElement("a");
      const filename = `pagina-romantica-${currentConfig.couple.myName.toLowerCase()}-e-${currentConfig.couple.herName.toLowerCase()}.html`;
      a.href = URL.createObjectURL(blob);
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    })
    .catch((err) => {
      console.warn("fetch('index.html') em ambiente restrito, gerando arquivo de configuração de backup:", err);
      const configBlob = new Blob([configString], { type: "application/json;charset=utf-8" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(configBlob);
      a.download = `configuracao-${currentConfig.couple.myName.toLowerCase()}-e-${currentConfig.couple.herName.toLowerCase()}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      alert("Configuração salva com sucesso! Você também pode copiar o link exclusivo ou enviar os dados diretamente pelo WhatsApp no botão verde.");
    });
}

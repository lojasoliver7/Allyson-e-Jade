/**
 * ============================================================================
 * CONFIGURAÇÃO CENTRAL — EDITE SEUS TEXTOS, DATAS, MÚSICA E FOTOS AQUI!
 * ============================================================================
 * Dica: Para adicionar suas fotos reais, basta colocar os arquivos de imagem
 * na pasta do projeto (ex: "fotos/foto1.jpg") e preencher o campo `src` de
 * cada item abaixo. Enquanto `src` estiver vazio (""), a página exibe um
 * placeholder estilo Polaroid editorial elegante, nunca uma imagem quebrada.
 */

const CONFIG = {
  // 1. DADOS DO CASAL & DATAS
  couple: {
    myName: "Allyson",
    herName: "Jade Jai",
    groomInitial: "A",
    brideInitial: "J",
    // Data exata de início do namoro: 21/10/2025 às 06:30 (Horário de Brasília)
    startDateISO: "2025-10-21T06:30:00-03:00",
    // Data de 1 ano de namoro: 21/10/2026
    anniversaryDateDisplay: "21/10/2026",
    shortDates: "21.10.25 — 21.10.26"
  },

  // 2. MÚSICA DE FUNDO (Opcional — sem autoplay)
  music: {
    // Arquivo MP3 configurado na pasta musica/
    audioUrl: "musica/nossa-musica.mp3",
    buttonLabelIdle: "Tocar Nossa Música",
    buttonLabelPlaying: "Panda — Eu Te Seguro • Pausar"
  },

  // 3. HERO (TOPO DA PÁGINA)
  hero: {
    badge: "365 dias ao seu lado • 1 ano juntos",
    subtitle:
      "Desde aquele 21 de outubro às 06h30 da manhã, o meu lugar favorito no mundo passou a ter o seu abraço, o seu riso e a paz de caminhar com você.",
    photo: {
      slotId: "Foto Principal (Hero)",
      src: "fotos/01-hero-destaque.jpg",
      alt: "Allyson e Jade Jai sorrindo juntos",
      caption: "Nós dois, onde tudo faz sentido",
      date: "Allyson & Jade Jai • Nosso Amor",
      aspect: "portrait" // "portrait" (4:5), "square" (1:1) ou "landscape" (4:3)
    }
  },

  // 4. CONTADOR AO VIVO
  counter: {
    subtitle:
      "O relógio nunca para, e a cada instante que passa eu tenho ainda mais certeza de que escolher você foi a decisão mais bonita da minha vida."
  },

  // 5. LINHA DO TEMPO DA NOSSA HISTÓRIA (Momentos marcantes)
  timeline: [
    {
      slotId: "Momento 01",
      date: "Nosso Primeiro Encontro • Trilha",
      title: "Onde nossos caminhos se encontraram",
      description:
        "Lá no alto, entre a natureza, o vento no rosto e o seu sorriso iluminando tudo, eu já sentia que a melhor aventura da minha vida seria caminhar ao seu lado.",
      photo: {
        src: "fotos/02-primeiro-encontro-trilha.jpg",
        alt: "Allyson e Jade Jai sorrindo juntos na trilha do primeiro encontro",
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
        alt: "Mãos dadas de Allyson e Jade Jai com as alianças no primeiro dia de namoro",
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
        alt: "Rapel nas montanhas com vista incrível ao amanhecer",
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
        alt: "Allyson e Jade Jai sorrindo com gorros de Papai Noel no Natal",
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
        src: "", // Adicione aqui depois: Ex: "fotos/06-um-ano.jpg"
        alt: "Comemorando 1 ano de namoro",
        caption: "Feliz 1º ano, meu amor! (Em breve nossa foto de 1 ano)",
        aspect: "portrait"
      }
    }
  ],

  // 6. GALERIA DE MEMÓRIAS (Polaroids clicáveis com Lightbox)
  gallery: [
    {
      slotId: "Galeria 01",
      src: "fotos/galeria-01-cachoeira.jpg",
      alt: "Allyson e Jade Jai sorrindo juntos nas pedras à beira da água",
      caption: "Dias de sol, natureza e o seu sorriso",
      date: "Nossos Dias de Sol",
      aspect: "landscape"
    },
    {
      slotId: "Galeria 02",
      src: "fotos/galeria-02-cuidado.jpg",
      alt: "Allyson segurando a mão de Jade Jai com carinho no hospital",
      caption: "Na alegria e nos dias difíceis, sempre segurando a sua mão",
      date: "Cuidado & Parceria",
      aspect: "portrait"
    },
    {
      slotId: "Galeria 03",
      src: "fotos/galeria-03-familia.jpg",
      alt: "Allyson e Jade Jai sorrindo em momento especial em família",
      caption: "Sorrisos que aquecem o coração",
      date: "Momentos Especiais",
      aspect: "landscape"
    },
    {
      slotId: "Galeria 04",
      src: "fotos/galeria-04-colagem.jpg",
      alt: "Colagem de fotos de Allyson e Jade Jai com rosto coladinho",
      caption: "Nosso dengo e sintonia em cada detalhe",
      date: "Nosso Abrigo",
      aspect: "portrait"
    },
    {
      slotId: "Galeria 05",
      src: "fotos/galeria-05-show.jpg",
      alt: "Allyson e Jade Jai juntos na grade curtindo um show",
      caption: "Cantando a vida bem pertinho de você",
      date: "Nossa Sintonia",
      aspect: "portrait"
    }
  ],

  // 7. MOTIVOS PELOS QUAIS EU TE AMO
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

  // 8. CARTA DE AMOR
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

  // 9. PROMESSA PARA O PRÓXIMO ANO
  promise: {
    title: "Minha promessa para o nosso próximo ano",
    text:
      "Que este primeiro ano seja apenas o prólogo da nossa história. Eu prometo continuar segurando a sua mão nos dias de sol e sendo o seu abrigo nos dias de chuva. Prometo ouvir os seus sonhos, rir das nossas bobeiras, aprender com você e te amar com a mesma ternura das 06h30 daquela manhã em que tudo começou."
  }
};

/* ============================================================================
   LÓGICA DA PÁGINA (Renderização, Contador, Lightbox, Carta, Pétalas e Áudio)
   ============================================================================ */

document.addEventListener("DOMContentLoaded", () => {
  bindStaticTexts();
  renderHeroPhoto();
  renderTimeline();
  renderGallery();
  renderReasons();
  renderLetter(false);
  initLiveCounter();
  initScrollReveal();
  initLightbox();
  initInteractiveHeart();
  initMusicPlayer();
  initPetalsCanvas();
});

// Lista unificada de fotos para navegação no Lightbox
let allPolaroidItems = [];

/**
 * 1. Preenche os textos configurados via atributo [data-bind]
 */
function bindStaticTexts() {
  const map = {
    myName: CONFIG.couple.myName,
    herName: CONFIG.couple.herName,
    groomInitial: CONFIG.couple.groomInitial,
    brideInitial: CONFIG.couple.brideInitial,
    shortDates: CONFIG.couple.shortDates,
    heroBadge: CONFIG.hero.badge,
    heroSubtitle: CONFIG.hero.subtitle,
    counterSubtitle: CONFIG.counter.subtitle,
    letterDatePlace: CONFIG.letter.datePlace,
    letterGreeting: CONFIG.letter.greeting,
    letterClosing: CONFIG.letter.closing,
    letterSignature: CONFIG.letter.signature,
    promiseTitle: CONFIG.promise.title,
    promiseText: CONFIG.promise.text
  };

  document.querySelectorAll("[data-bind]").forEach((el) => {
    const key = el.getAttribute("data-bind");
    if (map[key] !== undefined) {
      el.textContent = map[key];
    }
  });
}

/**
 * 2. Cria um componente Polaroid seguro (com fallback elegante caso sem foto)
 */
function createPolaroidElement(photoData, indexInLightbox) {
  const aspectClass =
    photoData.aspect === "landscape"
      ? "aspect-landscape"
      : photoData.aspect === "square"
      ? "aspect-square"
      : "";

  const card = document.createElement("figure");
  card.className = "polaroid-card";
  card.setAttribute("tabindex", "0");
  card.setAttribute("role", "button");
  card.setAttribute(
    "aria-label",
    `Ampliar memória: ${photoData.caption || photoData.slotId}`
  );

  const frame = document.createElement("div");
  frame.className = `polaroid-frame ${aspectClass}`.trim();

  const renderPlaceholder = () => {
    frame.innerHTML = `
      <div class="photo-placeholder">
        <span class="placeholder-icon" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
            <circle cx="12" cy="13" r="4"/>
          </svg>
        </span>
        <span class="placeholder-slot-tag">${escapeHtml(photoData.slotId || "Nossa Foto")}</span>
        <span class="placeholder-hint">${escapeHtml(photoData.caption || "Espaço reservado para nossa foto")}</span>
      </div>
    `;
  };

  if (photoData.src && photoData.src.trim() !== "") {
    const img = document.createElement("img");
    img.className = "polaroid-img";
    img.src = photoData.src;
    img.alt = photoData.alt || photoData.caption || "Foto de Allyson e Jade Jai";
    img.loading = "lazy";
    img.decoding = "async";
    img.addEventListener("error", renderPlaceholder);
    frame.appendChild(img);
  } else {
    renderPlaceholder();
  }

  const meta = document.createElement("figcaption");
  meta.className = "polaroid-meta";
  meta.innerHTML = `
    <p class="polaroid-caption">${escapeHtml(photoData.caption || "")}</p>
    ${photoData.date ? `<span class="polaroid-date">${escapeHtml(photoData.date)}</span>` : ""}
  `;

  card.appendChild(frame);
  card.appendChild(meta);

  const openHandler = () => openLightbox(indexInLightbox);
  card.addEventListener("click", openHandler);
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openHandler();
    }
  });

  return card;
}

function renderHeroPhoto() {
  const container = document.getElementById("hero-photo-slot");
  if (!container) return;
  const idx = allPolaroidItems.push(CONFIG.hero.photo) - 1;
  container.innerHTML = "";
  container.appendChild(createPolaroidElement(CONFIG.hero.photo, idx));
}

function renderTimeline() {
  const container = document.getElementById("timeline-container");
  if (!container) return;
  container.innerHTML = "";

  CONFIG.timeline.forEach((item) => {
    const photoItem = {
      slotId: item.slotId,
      src: item.photo.src,
      alt: item.photo.alt,
      caption: item.photo.caption,
      date: item.date,
      aspect: item.photo.aspect
    };
    const idx = allPolaroidItems.push(photoItem) - 1;

    const row = document.createElement("article");
    row.className = "timeline-item reveal-up";

    const dot = document.createElement("span");
    dot.className = "timeline-dot";
    dot.setAttribute("aria-hidden", "true");

    const textCard = document.createElement("div");
    textCard.className = "timeline-content-card";
    textCard.innerHTML = `
      <span class="timeline-badge-date">${escapeHtml(item.date)}</span>
      <h3 class="timeline-item-title">${escapeHtml(item.title)}</h3>
      <p class="timeline-item-desc">${escapeHtml(item.description)}</p>
    `;

    const polaroidWrap = document.createElement("div");
    polaroidWrap.className = "timeline-polaroid-wrap";
    polaroidWrap.appendChild(createPolaroidElement(photoItem, idx));

    row.appendChild(dot);
    row.appendChild(textCard);
    row.appendChild(polaroidWrap);
    container.appendChild(row);
  });
}

function renderGallery() {
  const container = document.getElementById("gallery-container");
  if (!container) return;
  container.innerHTML = "";

  CONFIG.gallery.forEach((photo, i) => {
    const idx = allPolaroidItems.push(photo) - 1;
    const el = createPolaroidElement(photo, idx);
    el.classList.add("reveal-up");
    el.style.setProperty("--delay", `${(i % 3) * 0.1}s`);
    container.appendChild(el);
  });
}

function renderReasons() {
  const container = document.getElementById("reasons-container");
  if (!container) return;
  container.innerHTML = "";

  CONFIG.reasons.forEach((reason, i) => {
    const card = document.createElement("article");
    card.className = "reason-card reveal-up";
    card.style.setProperty("--delay", `${(i % 3) * 0.08}s`);
    card.innerHTML = `
      <span class="reason-number" aria-hidden="true">${escapeHtml(reason.number)}</span>
      <h3 class="reason-title">${escapeHtml(reason.title)}</h3>
      <p class="reason-text">${escapeHtml(reason.text)}</p>
    `;
    container.appendChild(card);
  });
}

/**
 * 3. Carta de Amor com modo leitura completa imediata + opção de efeito de escrita suave
 */
let letterTypingTimeouts = [];

function renderLetter(animateTyping = false) {
  const bodyEl = document.getElementById("letter-body");
  const labelEl = document.getElementById("letter-toggle-label");
  if (!bodyEl) return;

  letterTypingTimeouts.forEach((t) => clearTimeout(t));
  letterTypingTimeouts = [];
  bodyEl.innerHTML = "";

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!animateTyping || prefersReduced) {
    CONFIG.letter.paragraphs.forEach((pText) => {
      const p = document.createElement("p");
      p.textContent = pText;
      bodyEl.appendChild(p);
    });
    if (labelEl) labelEl.textContent = "Ver efeito de escrita";
    return;
  }

  if (labelEl) labelEl.textContent = "Mostrar texto completo";

  let cumulativeDelay = 0;
  CONFIG.letter.paragraphs.forEach((pText) => {
    const p = document.createElement("p");
    bodyEl.appendChild(p);

    const words = pText.split(" ");
    words.forEach((word, wIndex) => {
      const t = setTimeout(() => {
        p.textContent += (wIndex === 0 ? "" : " ") + word;
      }, cumulativeDelay);
      letterTypingTimeouts.push(t);
      cumulativeDelay += 38;
    });
    cumulativeDelay += 320;
  });

  const endTimer = setTimeout(() => {
    if (labelEl) labelEl.textContent = "Repetir efeito de escrita";
  }, cumulativeDelay);
  letterTypingTimeouts.push(endTimer);
}

const replayBtn = document.getElementById("btn-replay-letter");
let isAnimatingLetter = false;
if (replayBtn) {
  replayBtn.addEventListener("click", () => {
    isAnimatingLetter = !isAnimatingLetter;
    renderLetter(isAnimatingLetter);
  });
}

/**
 * 4. Contador ao vivo preciso (Meses, Dias, Horas, Minutos e Segundos desde 21/10/2025 06:30)
 */
function initLiveCounter() {
  const startDate = new Date(CONFIG.couple.startDateISO);

  const elMonths = document.getElementById("cnt-months");
  const elDays = document.getElementById("cnt-days");
  const elHours = document.getElementById("cnt-hours");
  const elMinutes = document.getElementById("cnt-minutes");
  const elSeconds = document.getElementById("cnt-seconds");

  const lblMonths = document.getElementById("lbl-months");
  const lblDays = document.getElementById("lbl-days");
  const lblHours = document.getElementById("lbl-hours");
  const lblMinutes = document.getElementById("lbl-minutes");
  const lblSeconds = document.getElementById("lbl-seconds");
  const summaryEl = document.getElementById("total-summary-text");

  function updateCounter() {
    const now = new Date();
    if (now < startDate) {
      elMonths.textContent = "00";
      elDays.textContent = "00";
      elHours.textContent = "00";
      elMinutes.textContent = "00";
      elSeconds.textContent = "00";
      return;
    }

    // Cálculo exato de meses de calendário + dias remanescentes + horas/min/seg
    let months =
      (now.getFullYear() - startDate.getFullYear()) * 12 +
      (now.getMonth() - startDate.getMonth());

    let anchor = new Date(startDate);
    anchor.setMonth(startDate.getMonth() + months);

    if (anchor > now) {
      months -= 1;
      anchor = new Date(startDate);
      anchor.setMonth(startDate.getMonth() + months);
    }

    const diffMs = now - anchor;
    const totalSecondsRem = Math.floor(diffMs / 1000);
    const days = Math.floor(totalSecondsRem / 86400);
    const hours = Math.floor((totalSecondsRem % 86400) / 3600);
    const minutes = Math.floor((totalSecondsRem % 3600) / 60);
    const seconds = totalSecondsRem % 60;

    // Total corrido em dias e horas para a pílula resumo
    const totalMsAll = now - startDate;
    const totalDaysAll = Math.floor(totalMsAll / (1000 * 60 * 60 * 24));
    const totalHoursAll = Math.floor(totalMsAll / (1000 * 60 * 60));

    elMonths.textContent = String(months).padStart(2, "0");
    elDays.textContent = String(days).padStart(2, "0");
    elHours.textContent = String(hours).padStart(2, "0");
    elMinutes.textContent = String(minutes).padStart(2, "0");
    elSeconds.textContent = String(seconds).padStart(2, "0");

    lblMonths.textContent = months === 1 ? "Mês" : "Meses";
    lblDays.textContent = days === 1 ? "Dia" : "Dias";
    lblHours.textContent = hours === 1 ? "Hora" : "Horas";
    lblMinutes.textContent = minutes === 1 ? "Minuto" : "Minutos";
    lblSeconds.textContent = seconds === 1 ? "Segundo" : "Segundos";

    if (summaryEl) {
      summaryEl.textContent = `${totalDaysAll.toLocaleString("pt-BR")} dias (${totalHoursAll.toLocaleString("pt-BR")} horas) compartilhando a vida com você`;
    }
  }

  updateCounter();
  setInterval(updateCounter, 1000);
}

/**
 * 5. Scroll Reveal Suave com IntersectionObserver
 */
function initScrollReveal() {
  const elements = document.querySelectorAll(".reveal-up");
  if (!("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  elements.forEach((el) => observer.observe(el));
}

/**
 * 6. Lightbox Modal para visualizar Polaroids
 */
let currentLightboxIndex = 0;

function initLightbox() {
  const modal = document.getElementById("lightbox");
  const backdrop = document.getElementById("lightbox-backdrop");
  const closeBtn = document.getElementById("lightbox-close");
  const prevBtn = document.getElementById("lightbox-prev");
  const nextBtn = document.getElementById("lightbox-next");

  if (!modal) return;

  closeBtn.addEventListener("click", closeLightbox);
  backdrop.addEventListener("click", closeLightbox);
  prevBtn.addEventListener("click", () => stepLightbox(-1));
  nextBtn.addEventListener("click", () => stepLightbox(1));

  document.addEventListener("keydown", (e) => {
    if (modal.getAttribute("aria-hidden") === "false") {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") stepLightbox(-1);
      if (e.key === "ArrowRight") stepLightbox(1);
    }
  });
}

function openLightbox(index) {
  currentLightboxIndex = index;
  updateLightboxSlide();
  const modal = document.getElementById("lightbox");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.getElementById("lightbox-close").focus();
}

function closeLightbox() {
  const modal = document.getElementById("lightbox");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function stepLightbox(direction) {
  if (allPolaroidItems.length === 0) return;
  currentLightboxIndex =
    (currentLightboxIndex + direction + allPolaroidItems.length) %
    allPolaroidItems.length;
  updateLightboxSlide();
}

function updateLightboxSlide() {
  const item = allPolaroidItems[currentLightboxIndex];
  if (!item) return;

  const stage = document.getElementById("lightbox-stage");
  const dateEl = document.getElementById("lightbox-date");
  const captionEl = document.getElementById("lightbox-caption");

  dateEl.textContent = item.date || item.slotId || "";
  captionEl.textContent = item.caption || "";

  const showFallback = () => {
    stage.innerHTML = `
      <div class="photo-placeholder">
        <span class="placeholder-icon" aria-hidden="true">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
            <circle cx="12" cy="13" r="4"/>
          </svg>
        </span>
        <span class="placeholder-slot-tag">${escapeHtml(item.slotId || "Slot de Foto")}</span>
        <span class="placeholder-hint">${escapeHtml(item.caption || "Pronto para receber nossa foto")}</span>
      </div>
    `;
  };

  if (item.src && item.src.trim() !== "") {
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt || item.caption || "Foto ampliada";
    img.addEventListener("error", showFallback);
    stage.innerHTML = "";
    stage.appendChild(img);
  } else {
    showFallback();
  }
}

/**
 * 7. Coração Interativo na Seção de Promessa
 */
function initInteractiveHeart() {
  const btn = document.getElementById("heart-pulse-btn");
  const hint = document.getElementById("heart-counter-hint");
  if (!btn) return;

  let clicks = 0;

  btn.addEventListener("click", (e) => {
    clicks++;
    if (hint) {
      hint.textContent =
        clicks === 1
          ? "Te amo hoje, amanhã e sempre ♥"
          : `Te amo infinito ♥ (${clicks}x)`;
    }

    const rect = btn.getBoundingClientRect();
    const centerX = e.clientX || rect.left + rect.width / 2;
    const centerY = e.clientY || rect.top + rect.height / 2;

    for (let i = 0; i < 6; i++) {
      spawnFloatingHeart(centerX, centerY);
    }
  });
}

function spawnFloatingHeart(x, y) {
  const heart = document.createElement("span");
  heart.className = "floating-burst-heart";
  heart.innerHTML = `
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  `;
  const tx = (Math.random() - 0.5) * 140;
  const rot = (Math.random() - 0.5) * 50;
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  heart.style.setProperty("--tx", `${tx}px`);
  heart.style.setProperty("--rot", `${rot}deg`);
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1400);
}

/**
 * 8. Player de Música Discreto (Suporta MP3 em CONFIG.music.audioUrl ou Caixinha de Música WebAudio)
 */
function initMusicPlayer() {
  const btn = document.getElementById("music-toggle-btn");
  const label = document.getElementById("music-btn-text");
  const audioEl = document.getElementById("bg-audio");
  if (!btn || !audioEl) return;

  let isPlaying = false;
  let synthTimer = null;
  let audioCtx = null;

  if (CONFIG.music.audioUrl && CONFIG.music.audioUrl.trim() !== "") {
    audioEl.src = CONFIG.music.audioUrl;
  }

  // Melodia suave estilo caixinha de música caso nenhum arquivo MP3 externo esteja configurado
  const melodyNotes = [
    523.25, 659.25, 783.99, 1046.5, 783.99, 659.25,
    587.33, 698.46, 880.0, 1174.66, 880.0, 698.46,
    493.88, 659.25, 783.99, 987.77, 783.99, 659.25,
    523.25, 659.25, 783.99, 1046.5, 783.99, 523.25
  ];
  let noteIdx = 0;

  function playSoftNote(freq) {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (!AudioContextClass) return;
      audioCtx = new AudioContextClass();
    }
    if (audioCtx.state === "suspended") {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    gain.gain.setValueAtTime(0.001, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.045, audioCtx.currentTime + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0008, audioCtx.currentTime + 1.4);

    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 1.45);
  }

  btn.addEventListener("click", () => {
    isPlaying = !isPlaying;
    btn.classList.toggle("is-playing", isPlaying);
    btn.setAttribute("aria-pressed", String(isPlaying));
    label.textContent = isPlaying
      ? CONFIG.music.buttonLabelPlaying
      : CONFIG.music.buttonLabelIdle;

    const hasCustomTrack = CONFIG.music.audioUrl && CONFIG.music.audioUrl.trim() !== "";

    if (isPlaying) {
      if (hasCustomTrack) {
        audioEl.play().catch(() => {
          // Fallback para o sintetizador se o arquivo não for encontrado
          startSynthLoop();
        });
      } else {
        startSynthLoop();
      }
    } else {
      audioEl.pause();
      stopSynthLoop();
    }
  });

  function startSynthLoop() {
    stopSynthLoop();
    playSoftNote(melodyNotes[noteIdx % melodyNotes.length]);
    noteIdx++;
    synthTimer = setInterval(() => {
      playSoftNote(melodyNotes[noteIdx % melodyNotes.length]);
      noteIdx++;
    }, 650);
  }

  function stopSynthLoop() {
    if (synthTimer) {
      clearInterval(synthTimer);
      synthTimer = null;
    }
  }
}

/**
 * 9. Pétalas / Corações Flutuando Sutilmente ao Fundo (Canvas Leve)
 */
function initPetalsCanvas() {
  const canvas = document.getElementById("petals-canvas");
  if (!canvas) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const ctx = canvas.getContext("2d");
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener("resize", () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const count = window.innerWidth < 768 ? 14 : 24;
  const petals = Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    size: 5 + Math.random() * 7,
    speedY: 0.28 + Math.random() * 0.45,
    speedX: (Math.random() - 0.5) * 0.35,
    angle: Math.random() * Math.PI * 2,
    spin: (Math.random() - 0.5) * 0.012,
    opacity: 0.16 + Math.random() * 0.22
  }));

  function drawPetal(p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.angle);
    ctx.beginPath();
    // Formato delicado de pétala orgânica
    ctx.moveTo(0, -p.size);
    ctx.bezierCurveTo(
      p.size * 0.9,
      -p.size * 0.6,
      p.size * 0.9,
      p.size * 0.6,
      0,
      p.size
    );
    ctx.bezierCurveTo(
      -p.size * 0.9,
      p.size * 0.6,
      -p.size * 0.9,
      -p.size * 0.6,
      0,
      -p.size
    );
    ctx.fillStyle = `rgba(186, 104, 114, ${p.opacity})`;
    ctx.fill();
    ctx.restore();
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);
    for (const p of petals) {
      p.y += p.speedY;
      p.x += p.speedX + Math.sin(p.y * 0.012) * 0.2;
      p.angle += p.spin;

      if (p.y > height + 20) {
        p.y = -20;
        p.x = Math.random() * width;
      }
      if (p.x > width + 20) p.x = -20;
      if (p.x < -20) p.x = width + 20;

      drawPetal(p);
    }
    requestAnimationFrame(animate);
  }

  animate();
}

/**
 * Utilitário simples contra injeção de HTML
 */
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

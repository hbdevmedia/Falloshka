/* ==================================================
   GLOBAL TRANSLATIONS – NO COLLISIONS
   ================================================== */
console.log("MAIN.JS YÜKLENDİ");
const translations = {
  en: {
    /* NAV */
    navHome: "Home",
    navTarot: "Tarot Reading",
    navAstro: "Astrological Reading",
    navAbout: "About",

    /* HOME (index.html) */
    homeHeroTitle: "Unveil Your Inner Mysteries",
    homeHeroText:
      "Step into a sanctuary of intuitive reflection designed for curiosity and inspiration.",
    homeHeroButton: "Draw Your Cards",

    homeExpTitle: "The Experience",
    homeExpText:
      "This journey is created for reflection, not prediction.",
    homeExpNote: "Entertainment purposes only.",
    homeExpButton: "Begin Reading",

    homeResultTitle: "Your Celestial Narrative",
    homeResultText:
      "Your reading will appear here once the cards are drawn.",

    /* READING (reading.html) */
    readingHeroTitle: "Reveal Your Path",
    readingHeroText:
      "Begin your mystical journey by sharing your details. The cards will guide you toward your next revelation.",

    readingFormTitle: "Mystical Tarot Reading",
    readingFormSubtitle:
      "Connect with the universe and seek guidance through the cards.",

    readingLabelName: "Name",
    readingPhName: "Enter your name (optional)",

    readingLabelDob: "Date of Birth",
    readingPhDay: "Day",
    readingPhMonth: "Month",
    readingPhYear: "Year",

    readingLabelTopic: "Selected Life Topic",
    readingTopicLove: "Love",
    readingTopicCareer: "Career",
    readingTopicMoney: "Money",
    readingTopicSpiritual: "Spirituality",

    readingLabelMessage: "Message for the Reader",
    readingPhMessage: "What would you like to ask the cards?",

    readingBtnDraw: "Draw Your Cards",

    readingResultTitle: "Your Celestial Narrative",
    readingResultText:
      "The energy of the drawn card suggests a time of inner transformation and gentle clarity.",
    readingResultNote:
      "Remember, this reading reflects possibilities, not certainties.",

    tarotShuffleBtn: "Shuffle Cards",
    /* FOOTER */
    footerText:
      "This content is for entertainment purposes only."
  },

  de: {
  /* NAV */
  navHome: "Start",
  navTarot: "Tarot-Lesung",
  navAstro: "Astrologische Lesung",
  navAbout: "Über",

  /* HOME (index.html) */
  homeHeroTitle: "Enthülle Deine Inneren Geheimnisse",
  homeHeroText:
    "Betritt einen Raum intuitiver Reflexion, geschaffen für Neugier und Inspiration.",
  homeHeroButton: "Karten Ziehen",

  homeExpTitle: "Das Erlebnis",
  homeExpText:
    "Diese Reise dient der Reflexion, nicht der Vorhersage.",
  homeExpNote: "Nur zu Unterhaltungszwecken.",
  homeExpButton: "Lesung Starten",

  homeResultTitle: "Deine Himmlische Geschichte",
  homeResultText:
    "Deine Legung erscheint hier, sobald die Karten gezogen wurden.",

  /* READING (reading.html) */
  readingHeroTitle: "Enthülle Deinen Weg",
  readingHeroText:
    "Beginne deine mystische Reise, indem du deine Informationen teilst. Die Karten zeigen mögliche Wege auf.",

  readingFormTitle: "Mystische Tarot-Lesung",
  readingFormSubtitle:
    "Verbinde dich mit dem Universum und suche Führung durch die Karten.",

  readingLabelName: "Name",
  readingPhName: "Name (optional)",

  readingLabelDob: "Geburtsdatum",
  readingPhDay: "Tag",
  readingPhMonth: "Monat",
  readingPhYear: "Jahr",

  readingLabelTopic: "Lebensbereich",
  readingTopicLove: "Liebe",
  readingTopicCareer: "Karriere",
  readingTopicMoney: "Geld",
  readingTopicSpiritual: "Spiritualität",

  readingLabelMessage: "Nachricht an die Karten",
  readingPhMessage: "Was möchtest du die Karten fragen?",

  readingBtnDraw: "Karten Ziehen",

  readingResultTitle: "Deine Himmlische Erzählung",
  readingResultText:
    "Die gezogene Karte weist auf eine Phase innerer Wandlung und sanfter Klarheit hin.",
  readingResultNote:
    "Diese Lesung zeigt Möglichkeiten, keine Gewissheiten.",
  
  tarotShuffleBtn: "Karten mischen",
  /* FOOTER */
  footerText:
    "Dieser Inhalt dient ausschließlich zu Unterhaltungszwecken."
},
sr: {
  /* NAV */
  navHome: "Početna",
  navTarot: "Tarot tumačenje",
  navAstro: "Astrološko tumačenje",
  navAbout: "O nama",

  /* HOME (index.html) */
  homeHeroTitle: "Otkrij Svoje Unutrašnje Misterije",
  homeHeroText:
    "Uđi u prostor intuitivne refleksije, stvoren za radoznalost i inspiraciju.",
  homeHeroButton: "Izvuci Karte",

  homeExpTitle: "Iskustvo",
  homeExpText:
    "Ovo putovanje služi razmišljanju, a ne predviđanju.",
  homeExpNote: "Samo u zabavne svrhe.",
  homeExpButton: "Započni Tumačenje",

  homeResultTitle: "Tvoja Nebeska Priča",
  homeResultText:
    "Tvoje tumačenje će se pojaviti kada karte budu izvučene.",

  /* READING (reading.html) */
  readingHeroTitle: "Otkrij Svoj Put",
  readingHeroText:
    "Započni svoje mistično putovanje deleći svoje informacije. Karte ukazuju na moguće pravce.",

  readingFormTitle: "Mistično Tarot Tumačenje",
  readingFormSubtitle:
    "Poveži se sa univerzumom i potraži smernice kroz karte.",

  readingLabelName: "Ime",
  readingPhName: "Ime (opciono)",

  readingLabelDob: "Datum rođenja",
  readingPhDay: "Dan",
  readingPhMonth: "Mesec",
  readingPhYear: "Godina",

  readingLabelTopic: "Životna oblast",
  readingTopicLove: "Ljubav",
  readingTopicCareer: "Karijera",
  readingTopicMoney: "Novac",
  readingTopicSpiritual: "Duhovnost",

  readingLabelMessage: "Poruka za karte",
  readingPhMessage: "Šta želiš da pitaš karte?",

  readingBtnDraw: "Izvuci Karte",

  readingResultTitle: "Tvoja Nebeska Priča",
  readingResultText:
    "Izvučena karta ukazuje na period unutrašnje transformacije i blage jasnoće.",
  readingResultNote:
    "Ovo tumačenje prikazuje mogućnosti, ne sigurnosti.",
  
  tarotShuffleBtn: "Promešaj karte",
  /* FOOTER */
  footerText:
    "Ovaj sadržaj je namenjen isključivo zabavi."
},
sk: {
  /* NAV */
  navHome: "Domov",
  navTarot: "Tarotový výklad",
  navAstro: "Astrologický výklad",
  navAbout: "O nás",

  /* HOME (index.html) */
  homeHeroTitle: "Odhaľ Svoje Vnútorné Tajomstvá",
  homeHeroText:
    "Vstúp do priestoru intuitívneho zamyslenia, vytvoreného pre zvedavosť a inšpiráciu.",
  homeHeroButton: "Vybrať Karty",

  homeExpTitle: "Zážitok",
  homeExpText:
    "Táto cesta slúži na reflexiu, nie na predpovedanie.",
  homeExpNote: "Len na zábavné účely.",
  homeExpButton: "Začať Výklad",

  homeResultTitle: "Tvoj Nebeský Príbeh",
  homeResultText:
    "Tvoj výklad sa zobrazí po výbere kariet.",

  /* READING (reading.html) */
  readingHeroTitle: "Odhaľ Svoju Cestu",
  readingHeroText:
    "Začni svoju mystickú cestu zdieľaním svojich údajov. Karty naznačia možné smery.",

  readingFormTitle: "Mystický Tarotový Výklad",
  readingFormSubtitle:
    "Spoj sa s vesmírom a nájdi vedenie prostredníctvom kariet.",

  readingLabelName: "Meno",
  readingPhName: "Meno (nepovinné)",

  readingLabelDob: "Dátum narodenia",
  readingPhDay: "Deň",
  readingPhMonth: "Mesiac",
  readingPhYear: "Rok",

  readingLabelTopic: "Životná oblasť",
  readingTopicLove: "Láska",
  readingTopicCareer: "Kariéra",
  readingTopicMoney: "Peniaze",
  readingTopicSpiritual: "Duchovno",

  readingLabelMessage: "Správa pre karty",
  readingPhMessage: "Čo sa chceš kariet opýtať?",

  readingBtnDraw: "Vybrať Karty",

  readingResultTitle: "Tvoj Nebeský Príbeh",
  readingResultText:
    "Vybraná karta naznačuje obdobie vnútornej premeny a jemnej jasnosti.",
  readingResultNote:
    "Tento výklad zobrazuje možnosti, nie istoty.",

  tarotShuffleBtn: "Zamiešať karty",
  /* FOOTER */
  footerText:
    "Tento obsah slúži len na zábavné účely."
},

  tr: {
    navHome: "Ana Sayfa",
    navReading: "Tarot Falın",
    navAbout: "Hakkında",

    homeHeroTitle: "İçsel Gizemlerini Keşfet",
    homeHeroText:
      "Merak ve ilham için tasarlanmış sezgisel bir alana adım at.",
    homeHeroButton: "Kartlarını Çek",

    homeExpTitle: "Deneyim",
    homeExpText:
      "Bu yolculuk kehanet değil, yansıma içindir.",
    homeExpNote: "Sadece eğlence amaçlıdır.",
    homeExpButton: "Fala Başla",

    homeResultTitle: "Göksel Hikayen",
    homeResultText:
      "Kartlar çekildiğinde falın burada görünecek.",

    readingHeroTitle: "Yolunu Keşfet",
    readingHeroText:
      "Bilgilerini paylaşarak sezgisel yolculuğuna başla.",

    readingFormTitle: "Mistik Tarot Falı",
    readingFormSubtitle:
      "Kartlar aracılığıyla evrenle bağlantı kur.",

    readingLabelName: "Ad",
    readingPhName: "Adın (isteğe bağlı)",

    readingLabelDob: "Doğum Tarihi",
    readingPhDay: "Gün",
    readingPhMonth: "Ay",
    readingPhYear: "Yıl",

    readingLabelTopic: "Hayat Konusu",
    readingTopicLove: "Aşk",
    readingTopicCareer: "Kariyer",
    readingTopicMoney: "Para",
    readingTopicSpiritual: "Ruhsallık",

    readingLabelMessage: "Sorun",
    readingPhMessage: "Kartlara ne sormak istersin?",

    readingBtnDraw: "Kartları Çek",

    readingResultTitle: "Göksel Hikayen",
    readingResultText:
      "Bu kart içsel dönüşüm ve berraklık dönemini işaret ediyor.",
    readingResultNote:
      "Bu fal ihtimalleri yansıtır.",

    tarotShuffleBtn: "Kartları Karıştır",

    footerText: "Bu içerik eğlence amaçlıdır."
  }

  // de, sr, sk aynı mantıkla devam eder
};

/* ==================================================
   LANGUAGE ENGINE
   ================================================== */

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    // ✅ Dinamik olarak yazdığımız fal metnini dil değişiminde ezme
    if (el.dataset.dynamic === "true") return;

    const key = el.dataset.i18n;
    if (translations[lang]?.[key]) {
      el.textContent = translations[lang][key];
    }
  });


  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[lang]?.[key]) {
      el.placeholder = translations[lang][key];
    }
  });
}

function initLanguage() {
  const lang = localStorage.getItem("lang") || "en";
  applyLanguage(lang);

  const selector = document.getElementById("languageSelector");
  if (selector) {
    selector.value = lang;
    selector.addEventListener("change", () => {
      localStorage.setItem("lang", selector.value);
      applyLanguage(selector.value);
      // ✅ DİL DEĞİŞİNCE AÇIK KART ADLARINI GÜNCELLE
      updateOpenedCardNames();
    
      if (opened.every(v => v) && combinationData) {
        showCombinationReading();
      }
    });

  }
}


/* ==================================================
   TAROT ENGINE
================================================== */

let tarotDeck = [];
let selectedCards = [];
let opened = [false, false, false];
// JSON yükle
async function loadTarotCards() {
  const res = await fetch("./tarot-cards.json");
  tarotDeck = await res.json();
}

// Rastgele kart seç
function drawCards(count = 3) {
  const shuffled = [...tarotDeck].sort(() => 0.5 - Math.random());
  selectedCards = shuffled.slice(0, count);
}

function renderCards() {
  const cardElements = document.querySelectorAll(".tarot-card");
  const nameButtons = document.querySelectorAll(".card-name-btn");
  const lang = localStorage.getItem("lang") || "en";

  cardElements.forEach((cardEl, index) => {
    // ✅ 1) KARTI KLONLA → ESKİ EVENT’LER SİLİNİR
    const cleanCard = cardEl.cloneNode(true);
    cardEl.replaceWith(cleanCard);

    const card = selectedCards[index];
    if (!card) return;

    // ✅ 2) YENİ VE TEMİZ KARTA EVENT EKLE
    cleanCard.addEventListener("click", () => {
      if (cleanCard.classList.contains("open")) return;
      
      // 🔮 Duman efekti
      cleanCard.classList.add("smoke");
      setTimeout(() => {
        cleanCard.classList.remove("smoke");
      }, 800);

      // Ön yüzü hazırla
      const front = cleanCard.querySelector(".card-front");
      if (front) {
        front.style.backgroundImage = `url(${card.image})`;
      }

      cleanCard.classList.add("open");

      // Açılma takibi
      opened[index] = true;
      if (opened.every(v => v)) {
        showCombinationReading();
      }

      // Alt butonu güncelle
      const btn = nameButtons[index];
      btn.textContent = card.name[lang] || card.name.en;
      btn.classList.remove("hidden");
      btn.onclick = () => openModal(card);
    });
  });
}


function updateOpenedCardNames() {
  const lang = localStorage.getItem("lang") || "en";
  const buttons = document.querySelectorAll(".card-name-btn");

  buttons.forEach((btn, index) => {
    if (btn.classList.contains("hidden")) return;

    const card = selectedCards[index];
    if (!card) return;

    btn.textContent = card.name[lang] || card.name.en;
  });
}

// Sonuç üret
function updateResult(card) {
  const lang = localStorage.getItem("lang") || "en";
  const resultBox = document.querySelector(".result-box p");

  if (!resultBox) return;

  const cardName = card.name[lang] || card.name.en;

  resultBox.textContent =
    `${cardName} kartı, şu anda içsel bir farkındalık sürecinde olduğunu fısıldıyor. 
     Bu kart acele değil, dikkat ister. Önünde şekillenen durum netleşmeye başlıyor.`;
}



let tarotMeanings = [];

// Meaning JSON yükle
async function loadTarotMeanings() {
  const res = await fetch("./tarot-meanings.json");
  tarotMeanings = await res.json();
}

// İlgili kartın anlamını bul
function getCardMeaning(cardId, lang) {
  const item = tarotMeanings.find(m => m.id === cardId);
  return item?.meaning[lang] || item?.meaning.en || "";
}

function openModal(card) {
  const lang = localStorage.getItem("lang") || "en";

  document.getElementById("modalTitle").textContent =
    card.name[lang] || card.name.en;

  document.getElementById("modalText").textContent =
    getCardMeaning(card.id, lang);

  document.getElementById("cardModal").classList.remove("hidden");
}

// document.getElementById("closeModal")?.addEventListener("click", () => {
//   document.getElementById("cardModal").classList.add("hidden");
// });

// document.getElementById("cardModal")?.addEventListener("click", e => {
//   if (e.target.id === "cardModal") {
//     e.currentTarget.classList.add("hidden");
//   }
// });

function pad2(n) {
  return String(n).padStart(2, "0");
}

let combinationData = null;
let comboFileId = null;

async function loadCombinationFile(firstCardId) {
  // Aynı dosyayı tekrar tekrar indirmeyelim
  if (combinationData && comboFileId === firstCardId) return;

  const fileName = `combinations-${pad2(firstCardId)}.json`;

  // ✅ SENİN SORDUĞUN SATIR TAM OLARAK BURADA:
  const res = await fetch(`./combinations/${fileName}`);
  combinationData = await res.json();
  comboFileId = firstCardId;
}

function getComboText(entry, lang) {
  // reading çok dilli obje ise
  if (entry?.reading && typeof entry.reading === "object") {
    return entry.reading[lang] || entry.reading.en || "";
  }
  // eski format (string) destek
  if (typeof entry?.reading === "string") return entry.reading;
  return "";
}

function writeNarrative(text) {
  // ✅ result-box içindeki ilk <p> = readingResultText
  const p = document.querySelector(".result-box p");
  if (!p) return;

  p.dataset.dynamic = "true";
  p.textContent = text;
}

function showCombinationReading() {
  const lang = localStorage.getItem("lang") || "en";

  // 3 kart da seçilmiş olmalı
  if (!selectedCards[0] || !selectedCards[1] || !selectedCards[2]) return;
  if (!combinationData?.combinations) return;

  // Anahtar: soldaki kart her zaman referans (index 0)
  const key = `${selectedCards[0].id}-${selectedCards[1].id}-${selectedCards[2].id}`;
  const entry = combinationData.combinations[key];

  // ✅ İSTEDİĞİN FALLBACK
  if (!entry) {
    writeNarrative("Yorum Henüz mevcut değil");
    return;
  }

  const text = getComboText(entry, lang);
  writeNarrative(text || "Yorum Henüz mevcut değil");
}

function shakeCardsThenReset() {
  const cards = document.querySelectorAll(".tarot-card");

  // 1️⃣ Shake class ekle
  cards.forEach(card => card.classList.add("shaking"));

  // 2️⃣ Animasyon bitince reset yap
  setTimeout(() => {
    cards.forEach(card => card.classList.remove("shaking"));
    resetTarot();
  }, 450); // animation süresiyle aynı
}

function resetTarot() {
  // 1️⃣ Kart container’ı al
  const spread = document.querySelector(".tarot-spread");
  if (!spread) return;

  // 2️⃣ Kartları klonlayarak event’leri temizle
  const cards = [...spread.children];
  spread.innerHTML = "";

  cards.forEach(oldCard => {
    const newCard = oldCard.cloneNode(true);

    // open class temizliği (görsel güvence)
    newCard.classList.remove("open");

    const front = newCard.querySelector(".card-front");
    if (front) front.style.backgroundImage = "";

    spread.appendChild(newCard);
  });

  // 3️⃣ Kart isimlerini gizle
  document.querySelectorAll(".card-name-btn").forEach(btn => {
    btn.classList.add("hidden");
    btn.textContent = "";
  });

  // 4️⃣ Sonucu sıfırla
  const resultP = document.querySelector(".result-box p");
  if (resultP) {
    delete resultP.dataset.dynamic;
    const lang = localStorage.getItem("lang") || "en";
    resultP.textContent = translations[lang].readingResultText;
  }

  // 5️⃣ State sıfırla
  opened = [false, false, false];
  combinationData = null;
  comboFileId = null;

  // 6️⃣ ✅ YENİ kartları GERÇEKTEN karıştır
  drawCards(3);

  // 7️⃣ ✅ YENİ kombinasyon dosyasını yükle
  loadCombinationFile(selectedCards[0].id);

  // 8️⃣ ✅ SADECE TEK KEZ event bağlanır
  renderCards();
}


/* ==================================================
   INIT
================================================== */

document.addEventListener("DOMContentLoaded", async () => {
  initLanguage();

  /* ===============================
     MODAL KAPATMA
  =============================== */

  const modal = document.getElementById("cardModal");
  const closeBtn = document.getElementById("closeModal");

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.classList.add("hidden");
    });
  }

  if (modal) {
    modal.addEventListener("click", e => {
      if (e.target === modal) {
        modal.classList.add("hidden");
      }
    });
  }

  /* ===============================
     TAROT OKUMA
  =============================== */

  if (document.querySelector(".tarot-spread")) {
    await loadTarotCards();
    await loadTarotMeanings();
    drawCards(3);
    opened = [false, false, false]
    await loadCombinationFile(selectedCards[0].id);

    renderCards();
  }

  // ✅ Shuffle / Reset burada bağlanıyor
  document.getElementById("drawBtn")?.addEventListener("click", () => {
    shakeCardsThenReset();
  });

  /* ===============================
   ASTRO READING – GROQ CONNECT
   =============================== */

  if (document.body.classList.contains("page-astro")) {
  const astroBtn = document.getElementById("astroSubmit");
  const resultEl = document.getElementById("astroResult");

  if (astroBtn && resultEl) {
    astroBtn.addEventListener("click", async (e) => {
      e.preventDefault();

      resultEl.dataset.dynamic = "true";
      resultEl.textContent = "Reading the cosmic currents...";

      const name = document.getElementById("userName")?.value.trim() || "";
      const day = document.getElementById("birthDay")?.value.trim() || "";
      const month = document.getElementById("birthMonth")?.value.trim() || "";
      const year = document.getElementById("birthYear")?.value.trim() || "";
      const birth = `${day}.${month}.${year}`;

      const topic = document.querySelector(
        'input[name="topic"]:checked'
      )?.value;

      const message =
        document.getElementById("userMessage")?.value.trim() || "";

      const lang = localStorage.getItem("lang") || "en";

      if (!name || !topic) {
        resultEl.textContent =
          "Please enter your name and select a life topic.";
        return;
      }

      try {
        const res = await fetch(
          "https://damp-cherry-e7a4.falloshka.workers.dev",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name,
              birth,
              topic,
              message,
              lang, // ✅ DİL BURADA GİDİYOR
            }),
          }
        );

        if (!res.ok) {
          throw new Error("Worker error");
        }

        const data = await res.json();
        resultEl.textContent = data.result;
      } catch (err) {
        resultEl.textContent =
          "The astral connection is momentarily unclear. Please try again.";
        console.error(err);
      }
    });
  }
}
});

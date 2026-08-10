/* ============ i18n ============ */
const STRINGS = {
  tr: {
    nav_services: "Hizmetler",
    nav_stack: "Teknolojiler",
    nav_contact: "İletişim",
    hero_available: "Yeni projelere açık",
    hero_sub:
      "Backend'den arayüze web uygulamaları, on-prem AI ajanları ve mobil uygulamalar geliştiriyorum. " +
      "Fikri; test edilmiş, ölçeklenebilir ve zamanında teslim edilen ürüne dönüştürürüm.",
    hero_cta: "Proje konuşalım",
    hero_cta2: "Neler yapıyorum",
    services_eyebrow: "hizmetler",
    services_title: "Neler yapıyorum",
    s1_title: "Backend & API",
    s1_body:
      "Node.js ve TypeScript ile servisler; AWS üzerinde serverless mimari (Lambda, SQS, DynamoDB). " +
      "Bildirim altyapıları, entegrasyonlar, ölçeklenen API'lar.",
    s2_title: "Frontend & Web",
    s2_body:
      "React ve modern web araçlarıyla hızlı, erişilebilir arayüzler. " +
      "Tasarımdan canlıya, uçtan uca web uygulamaları.",
    s3_title: "AI Ajanları & LLM",
    s3_body:
      "Kurum içinde (on-prem) çalışan AI ajanları ve LLM destekli özellikler. " +
      "Veriniz dışarı çıkmadan, işinize göre kurgulanmış otomasyon.",
    s4_title: "Mobil Uygulama",
    s4_body:
      "React Native ile iOS ve Android. Bildirimler, offline veri, store süreçleri dahil uçtan uca teslim.",
    stack_eyebrow: "teknolojiler",
    stack_title: "Gündelik araç setim",
    contact_eyebrow: "iletisim",
    contact_title: "Bir fikriniz mi var?",
    contact_sub: "Projeni kısaca anlat, 24 saat içinde dönüş yaparım.",
    meta_description:
      "Backend'den arayüze web uygulamaları, on-prem AI ajanları ve mobil uygulamalar geliştiren yazılım mühendisi. " +
      "Node.js, TypeScript, React, AWS, React Native.",
  },
  en: {
    nav_services: "Services",
    nav_stack: "Stack",
    nav_contact: "Contact",
    hero_available: "Open to new projects",
    hero_sub:
      "I build web apps from backend to UI, on-prem AI agents and mobile apps — " +
      "turning ideas into tested, scalable products, delivered on time.",
    hero_cta: "Let's talk",
    hero_cta2: "What I do",
    services_eyebrow: "services",
    services_title: "What I do",
    s1_title: "Backend & APIs",
    s1_body:
      "Services built with Node.js and TypeScript; serverless architecture on AWS (Lambda, SQS, DynamoDB). " +
      "Notification pipelines, integrations, APIs that scale.",
    s2_title: "Frontend & Web",
    s2_body:
      "Fast, accessible interfaces with React and modern web tooling. " +
      "End-to-end web apps, from design to production.",
    s3_title: "AI Agents & LLMs",
    s3_body:
      "On-prem AI agents and LLM-powered features. " +
      "Automation tailored to your business — your data never leaves your infrastructure.",
    s4_title: "Mobile Apps",
    s4_body:
      "iOS and Android with React Native. End-to-end delivery: push notifications, offline data, store submissions.",
    stack_eyebrow: "stack",
    stack_title: "Everyday toolkit",
    contact_eyebrow: "contact",
    contact_title: "Have an idea?",
    contact_sub: "Tell me briefly about your project — I reply within 24 hours.",
    meta_description:
      "Software engineer building web apps from backend to UI, on-prem AI agents and mobile apps. " +
      "Node.js, TypeScript, React, AWS, React Native.",
  },
};

function setLang(lang) {
  const dict = STRINGS[lang] || STRINGS.tr;

  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });

  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", dict.meta_description);

  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
  });
}

const saved = localStorage.getItem("lang");
const initial = saved || (navigator.language.toLowerCase().startsWith("tr") ? "tr" : "en");
setLang(initial);

document.querySelectorAll(".lang-switch button").forEach((btn) => {
  btn.addEventListener("click", () => setLang(btn.dataset.lang));
});

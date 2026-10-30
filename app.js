/* ============ i18n ============ */
const STRINGS = {
  tr: {
    nav_services: "Hizmetler",
    nav_experience: "Deneyim",
    nav_stack: "Teknolojiler",
    nav_contact: "İletişim",
    hero_available: "Freelance projelere açık",
    hero_sub:
      "Ölçeklenebilir web ve mobil uygulamalar ile kurum içi araçlar geliştiren full-stack yazılım mühendisiyim. " +
      "C2B Technology'de Enterprise Agent Operations Tools projesini yönetiyor; backend'den arayüze, " +
      "planlamadan teslimata ürün sorumluluğu alıyorum.",
    hero_cta: "Proje konuşalım",
    hero_cta2: "Neler yapıyorum",
    services_eyebrow: "hizmetler",
    services_title: "Neler yapıyorum",
    s1_title: "Backend & API",
    s1_body:
      "Node.js ve TypeScript ile REST API'lar; AWS üzerinde serverless mimari (Lambda, SQS, DynamoDB). " +
      "Sistem entegrasyonları ve otomasyon dahil.",
    s2_title: "Frontend & Web",
    s2_body:
      "React ve modern web araçlarıyla hızlı, erişilebilir arayüzler. " +
      "Tasarımdan canlıya, uçtan uca web uygulamaları.",
    s3_title: "AI Ajanları & Otomasyon",
    s3_body:
      "Kurum içi AI ajanları, ajan operasyon araçları ve LLM destekli özellikler. " +
      "Doğrulama ve sınırlar baştan tasarlanır; veriniz altyapınızın dışına çıkmaz.",
    s4_title: "Mobil Uygulama",
    s4_body:
      "React Native ile iOS ve Android. Bildirimler, offline veri, store süreçleri dahil uçtan uca teslim.",
    exp_eyebrow: "deneyim",
    exp_title: "Deneyim & eğitim",
    exp1_date: "Haz 2026 — günümüz",
    exp1_role: "Software Engineer · Project Lead",
    exp1_org: "C2B Technology · Uzaktan",
    exp1_desc:
      "Enterprise Agent Operations Tools projesini yönetiyorum: teknik öncelikleri, görev sahipliğini ve " +
      "kilometre taşlarını belirliyor; web ve mobil ürünlerde full-stack geliştirmeye katkı veriyor; " +
      "entegrasyonları, bağımlılıkları ve teslimat kalitesini koordine ediyorum.",
    exp2_date: "2023 — 2027",
    exp2_role: "Bilgisayar Programcılığı",
    stack_eyebrow: "teknolojiler",
    stack_title: "Gündelik araç setim",
    posts_eyebrow: "yazilar",
    posts_title: "LinkedIn'de yazıyorum",
    posts_sub: "AI ajanları, doğrulama ve yazılım disiplini üzerine notlar.",
    p1_date: "27 Eki 2026",
    p2_date: "20 Eki 2026",
    p3_date: "5 Eki 2026",
    posts_more: "Tüm yazılar",
    contact_eyebrow: "iletisim",
    contact_title: "Bir fikriniz mi var?",
    contact_sub: "Projeni kısaca anlat, 24 saat içinde dönüş yaparım.",
    meta_description:
      "İstanbul merkezli full-stack yazılım mühendisi ve proje lideri. Web, mobil ve kurum içi araçlar; " +
      "AI ajan operasyon araçları; Node.js, TypeScript, React, React Native, AWS.",
  },
  en: {
    nav_services: "Services",
    nav_experience: "Experience",
    nav_stack: "Stack",
    nav_contact: "Contact",
    hero_available: "Open to freelance projects",
    hero_sub:
      "Full-stack software engineer building scalable web and mobile apps and internal enterprise tools. " +
      "At C2B Technology I lead the Enterprise Agent Operations Tools project — owning delivery " +
      "from planning to production, backend to UI.",
    hero_cta: "Let's talk",
    hero_cta2: "What I do",
    services_eyebrow: "services",
    services_title: "What I do",
    s1_title: "Backend & APIs",
    s1_body:
      "REST APIs with Node.js and TypeScript; serverless architecture on AWS (Lambda, SQS, DynamoDB). " +
      "System integrations and automation included.",
    s2_title: "Frontend & Web",
    s2_body:
      "Fast, accessible interfaces with React and modern web tooling. " +
      "End-to-end web apps, from design to production.",
    s3_title: "AI Agents & Automation",
    s3_body:
      "Enterprise AI agents, agent operations tooling and LLM-powered features — " +
      "designed with verification and boundaries built in; your data stays on your infrastructure.",
    s4_title: "Mobile Apps",
    s4_body:
      "iOS and Android with React Native. End-to-end delivery: push notifications, offline data, store submissions.",
    exp_eyebrow: "experience",
    exp_title: "Experience & education",
    exp1_date: "Jun 2026 — present",
    exp1_role: "Software Engineer · Project Lead",
    exp1_org: "C2B Technology · Remote",
    exp1_desc:
      "Leading the Enterprise Agent Operations Tools project: setting technical priorities, task ownership " +
      "and milestones; contributing full-stack development across web and mobile products; " +
      "coordinating integrations, dependencies and delivery quality.",
    exp2_date: "2023 — 2027",
    exp2_role: "Computer Programming",
    stack_eyebrow: "stack",
    stack_title: "Everyday toolkit",
    posts_eyebrow: "writing",
    posts_title: "Writing on LinkedIn",
    posts_sub: "Notes on AI agents, verification and engineering discipline.",
    p1_date: "Oct 27, 2026",
    p2_date: "Oct 20, 2026",
    p3_date: "Oct 5, 2026",
    posts_more: "All posts",
    contact_eyebrow: "contact",
    contact_title: "Have an idea?",
    contact_sub: "Tell me briefly about your project — I reply within 24 hours.",
    meta_description:
      "Istanbul-based full-stack software engineer and project lead. Web, mobile and internal enterprise tools; " +
      "AI agent operations tooling; Node.js, TypeScript, React, React Native, AWS.",
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

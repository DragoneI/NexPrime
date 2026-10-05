const WHATSAPP_NUMBER = '212644006421';

const translations = {
  fr: {
    nav_home: "Accueil", nav_services: "Services", nav_monet: "Monétisation", nav_contact: "Contact",
    hero_label: "Agence digitale",
    hero_title: "Marketing digital,<br><span>applications & croissance</span>",
    hero_sub: "Communication, acquisition de clients, partenariats et solutions numériques : nous accompagnons votre développement en ligne.",
    hero_cta: "Découvrir nos services", hero_sec: "Nous contacter",
    stat1: "Approche digitale", stat2: "Solutions sur mesure", stat3: "Modèles de revenus",
    b1: "Marketing digital & communication", b2: "Génération de prospects", b3: "Affiliation & partenariats", b4: "Applications mobiles & web",
    sv_label: "Nos activités", sv_title: "Ce que nous faisons", sv_sub: "Du marketing à la technologie, une offre complète autour de votre présence digitale.",
    s1t: "Marketing digital & communication", s1d: "Communication, publicité et promotion de vos produits et services.",
    s2t: "Publicité & génération de prospects", s2d: "Campagnes d'acquisition pour attirer des prospects qualifiés.",
    s3t: "Affiliation & apport d'affaires", s3d: "Mise en relation commerciale et introduction de clients.",
    s4t: "Partenariats commerciaux", s4d: "Conclusion et gestion de programmes d'affiliation avec des plateformes et prestataires en ligne.",
    s5t: "Conseil & stratégie digitale", s5d: "Accompagnement en marketing, communication et stratégie digitale.",
    s6t: "Services informatiques & web", s6d: "Prestations informatiques, numériques et web adaptées à vos besoins.",
    s7t: "Applications & logiciels", s7d: "Conception, développement et édition d'applications mobiles, de logiciels et de plateformes.",
    s8t: "Déploiement & maintenance", s8d: "Mise en ligne, exploitation et maintenance de vos solutions numériques.",
    mo_label: "Revenus numériques", mo_title: "Monétisation d'applications et de plateformes",
    mo_sub: "Nous mettons en place les modèles de revenus adaptés à votre solution numérique, dans le respect de la réglementation en vigueur.",
    m1: "Publicité intégrée", m2: "Affiliation", m3: "Abonnements", m4: "Commissions", m5: "Achats intégrés",
    p1t: "Analyse & stratégie", p1d: "Nous définissons vos objectifs et la meilleure approche digitale.",
    p2t: "Conception & déploiement", p2d: "Nous développons et mettons en ligne vos solutions et vos campagnes.",
    p3t: "Suivi & optimisation", p3d: "Nous exploitons, maintenons et améliorons vos résultats dans la durée.",
    ct_label: "Contact", ct_title: "Parlons de votre projet", ct_sub: "Décrivez votre besoin, nous revenons vers vous rapidement.",
    f_name: "Nom complet", f_email: "Email", f_phone: "Téléphone", f_message: "Votre message", f_submit: "Envoyer le message",
    err_required: "Champ requis", err_email: "Email invalide",
    ok_title: "Merci !", ok_text: "Votre message est prêt à être envoyé sur WhatsApp.",
    ft_desc: "Marketing digital, partenariats et solutions numériques pour accélérer votre croissance en ligne.",
    ft_explore: "Explorer", fl1: "Marketing digital", fl2: "Affiliation & partenariats", fl3: "Applications & web",
    ft_legal: "Légal", ft_notice: "Mentions légales", ft_privacy: "Confidentialité", ft_terms: "CGU", ft_rights: "Tous droits réservés."
  },
  en: {
    nav_home: "Home", nav_services: "Services", nav_monet: "Monetization", nav_contact: "Contact",
    hero_label: "Digital agency",
    hero_title: "Digital marketing,<br><span>apps & growth</span>",
    hero_sub: "Communication, customer acquisition, partnerships and digital solutions: we support your online growth.",
    hero_cta: "Discover our services", hero_sec: "Contact us",
    stat1: "Digital approach", stat2: "Tailor-made solutions", stat3: "Revenue models",
    b1: "Digital marketing & communication", b2: "Lead generation", b3: "Affiliation & partnerships", b4: "Mobile & web apps",
    sv_label: "Our activities", sv_title: "What we do", sv_sub: "From marketing to technology, a complete offer around your digital presence.",
    s1t: "Digital marketing & communication", s1d: "Communication, advertising and promotion of your products and services.",
    s2t: "Advertising & lead generation", s2d: "Acquisition campaigns to attract qualified leads.",
    s3t: "Affiliation & business referral", s3d: "Business introductions and customer referrals.",
    s4t: "Business partnerships", s4d: "Setting up and managing affiliate programs with online platforms and service providers.",
    s5t: "Digital consulting & strategy", s5d: "Support in marketing, communication and digital strategy.",
    s6t: "IT & web services", s6d: "IT, digital and web services tailored to your needs.",
    s7t: "Apps & software", s7d: "Design, development and publishing of mobile apps, software and platforms.",
    s8t: "Deployment & maintenance", s8d: "Launch, operation and maintenance of your digital solutions.",
    mo_label: "Digital revenue", mo_title: "Monetizing apps and platforms",
    mo_sub: "We set up the revenue models that fit your digital solution, in compliance with applicable regulations.",
    m1: "In-app advertising", m2: "Affiliation", m3: "Subscriptions", m4: "Commissions", m5: "In-app purchases",
    p1t: "Analysis & strategy", p1d: "We define your goals and the best digital approach.",
    p2t: "Design & deployment", p2d: "We build and launch your solutions and campaigns.",
    p3t: "Monitoring & optimization", p3d: "We operate, maintain and improve your results over time.",
    ct_label: "Contact", ct_title: "Let's talk about your project", ct_sub: "Describe your needs and we'll get back to you shortly.",
    f_name: "Full name", f_email: "Email", f_phone: "Phone", f_message: "Your message", f_submit: "Send message",
    err_required: "Required field", err_email: "Invalid email",
    ok_title: "Thank you!", ok_text: "Your message is ready to be sent on WhatsApp.",
    ft_desc: "Digital marketing, partnerships and digital solutions to accelerate your online growth.",
    ft_explore: "Explore", fl1: "Digital marketing", fl2: "Affiliation & partnerships", fl3: "Apps & web",
    ft_legal: "Legal", ft_notice: "Legal notice", ft_privacy: "Privacy", ft_terms: "Terms", ft_rights: "All rights reserved."
  },
  ar: {
    nav_home: "الرئيسية", nav_services: "خدماتنا", nav_monet: "تحقيق الدخل", nav_contact: "اتصل بنا",
    hero_label: "وكالة رقمية",
    hero_title: "التسويق الرقمي،<br><span>التطبيقات والنمو</span>",
    hero_sub: "التواصل، اكتساب العملاء، الشراكات والحلول الرقمية: نرافق نموّك عبر الإنترنت.",
    hero_cta: "اكتشف خدماتنا", hero_sec: "تواصل معنا",
    stat1: "مقاربة رقمية", stat2: "حلول مخصصة", stat3: "نماذج للدخل",
    b1: "التسويق الرقمي والتواصل", b2: "استقطاب العملاء المحتملين", b3: "التسويق بالعمولة والشراكات", b4: "تطبيقات الجوال والويب",
    sv_label: "أنشطتنا", sv_title: "ما نقدمه", sv_sub: "من التسويق إلى التقنية، عرض متكامل حول حضورك الرقمي.",
    s1t: "التسويق الرقمي والتواصل", s1d: "التواصل والإعلان والترويج لمنتجاتك وخدماتك.",
    s2t: "الإعلان واستقطاب العملاء", s2d: "حملات اكتساب لجذب عملاء محتملين مؤهلين.",
    s3t: "التسويق بالعمولة وجلب الأعمال", s3d: "الربط التجاري وتقديم العملاء.",
    s4t: "الشراكات التجارية", s4d: "إبرام وإدارة برامج التسويق بالعمولة مع المنصات ومقدمي الخدمات عبر الإنترنت.",
    s5t: "الاستشارات والاستراتيجية الرقمية", s5d: "مرافقة في التسويق والتواصل والاستراتيجية الرقمية.",
    s6t: "خدمات المعلوميات والويب", s6d: "خدمات معلوماتية ورقمية وويب مناسبة لاحتياجاتك.",
    s7t: "التطبيقات والبرمجيات", s7d: "تصميم وتطوير ونشر تطبيقات الجوال والبرمجيات والمنصات.",
    s8t: "النشر والصيانة", s8d: "إطلاق حلولك الرقمية وتشغيلها وصيانتها.",
    mo_label: "عائدات رقمية", mo_title: "تحقيق الدخل من التطبيقات والمنصات",
    mo_sub: "نضع نماذج الدخل المناسبة لحلّك الرقمي، مع احترام التشريعات الجاري بها العمل.",
    m1: "إعلانات مدمجة", m2: "التسويق بالعمولة", m3: "الاشتراكات", m4: "العمولات", m5: "المشتريات داخل التطبيق",
    p1t: "التحليل والاستراتيجية", p1d: "نحدد أهدافك وأفضل مقاربة رقمية.",
    p2t: "التصميم والنشر", p2d: "نطوّر حلولك وحملاتك ونطلقها عبر الإنترنت.",
    p3t: "المتابعة والتحسين", p3d: "نشغّل ونصون ونحسّن نتائجك على المدى الطويل.",
    ct_label: "تواصل", ct_title: "لنتحدث عن مشروعك", ct_sub: "صف احتياجك وسنعود إليك قريباً.",
    f_name: "الاسم الكامل", f_email: "البريد الإلكتروني", f_phone: "الهاتف", f_message: "رسالتك", f_submit: "إرسال الرسالة",
    err_required: "حقل مطلوب", err_email: "بريد إلكتروني غير صالح",
    ok_title: "شكراً!", ok_text: "رسالتك جاهزة للإرسال عبر واتساب.",
    ft_desc: "التسويق الرقمي والشراكات والحلول الرقمية لتسريع نموّك عبر الإنترنت.",
    ft_explore: "استكشف", fl1: "التسويق الرقمي", fl2: "التسويق بالعمولة والشراكات", fl3: "التطبيقات والويب",
    ft_legal: "قانوني", ft_notice: "إشعار قانوني", ft_privacy: "الخصوصية", ft_terms: "الشروط", ft_rights: "جميع الحقوق محفوظة."
  }
};

let currentLang = 'fr';
const t = (key, lang = currentLang) => (translations[lang] && translations[lang][key]) || key;

function applyTranslations(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  document.documentElement.lang = lang;
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
  document.getElementById('currentLangLabel').textContent = lang.toUpperCase();
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n, lang); });
  document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml, lang); });
}

function showNotification(title, msg, type = 'success') {
  const el = document.getElementById('notification');
  document.getElementById('notifTitle').textContent = title;
  document.getElementById('notifText').textContent = msg;
  el.querySelector('.notif-icon i').className = type === 'success' ? 'fas fa-check' : 'fas fa-exclamation';
  el.className = 'notification ' + type; void el.offsetWidth; el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 3500);
}

function toggleMobileMenu() { document.getElementById('mobileMenu').classList.toggle('active'); }

function setError(inputId, errId, bad) {
  document.getElementById(inputId).classList.toggle('error', bad);
  document.getElementById(errId).classList.toggle('show', bad);
  return !bad;
}

function submitContact() {
  const name = document.getElementById('fieldName').value.trim();
  const email = document.getElementById('fieldEmail').value.trim();
  const phone = document.getElementById('fieldPhone').value.trim();
  const message = document.getElementById('fieldMessage').value.trim();
  const okName = setError('fieldName', 'errName', !name);
  const okEmail = setError('fieldEmail', 'errEmail', !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email));
  const okMsg = setError('fieldMessage', 'errMessage', !message);
  if (!(okName && okEmail && okMsg)) return;

  const text = ['*Nex Prime*', '', `👤 ${name}`, `✉️ ${email}`, phone ? `📞 ${phone}` : '', '', `💬 ${message}`].filter((l, i) => l !== '' || i === 1 || i === 5).join('\n');
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
  showNotification(t('ok_title'), t('ok_text'), 'success');
  ['fieldName', 'fieldEmail', 'fieldPhone', 'fieldMessage'].forEach(id => { document.getElementById(id).value = ''; });
}

document.addEventListener('DOMContentLoaded', () => {
  // Dupliquer la bannière pour un défilement continu
  const track = document.getElementById('bannerTrack');
  if (track) Array.from(track.children).forEach(c => track.appendChild(c.cloneNode(true)));

  document.getElementById('mobileMenuBtn').addEventListener('click', toggleMobileMenu);
  document.getElementById('closeMobileMenuBtn').addEventListener('click', toggleMobileMenu);
  document.querySelectorAll('#mobileMenu .mobile-nav a').forEach(a => a.addEventListener('click', toggleMobileMenu));
  document.querySelectorAll('.lang-option').forEach(o => o.addEventListener('click', () => applyTranslations(o.dataset.lang)));
  document.getElementById('submitBtn').addEventListener('click', submitContact);
  window.addEventListener('scroll', () => {
    document.querySelector('header').style.boxShadow = window.pageYOffset > 60 ? '0 2px 20px rgba(0,0,0,.08)' : 'none';
  });
  applyTranslations('fr');
});

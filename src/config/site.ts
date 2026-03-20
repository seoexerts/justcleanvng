/**
 * ╔═══════════════════════════════════════════════════════╗
 * ║  CONFIGURACIÓN CENTRAL DEL SITIO — src/config/site.ts ║
 * ║  Generado automáticamente · 20/3/2026             ║
 * ╚═══════════════════════════════════════════════════════╝
 */

export const siteConfig = {

  // ── Identidad del negocio ──────────────────────────────
  businessName:      'JUSTCLEAN VNG',
  businessNameLegal: 'JUSTCLEAN VNG',
  cif:   'B12345678',
  logo:  '/logo.png',

  // ── Servicio y área ────────────────────────────────────
  serviceType:  'Vaciado de pisos y locales',
  area:         'Vilanova i la Geltrú, municipios cercanos y todo Catalunya',
  mainCity:     'Vilanova i la Geltrú',
  comarca:      'Garraf, Alt Penedès, Baix Penedès, Baix Llobregat y Tarragonès',
  foundingYear: '2018',

  // ── Contacto ──────────────────────────────────────────
  phone:    '602365996',
  email:    'info@justclean.es',
  whatsapp: '34602365996',
  web:      'https://www.justclean.es/vaciado-de-pisos-en-vilanova-i-la-geltru/',

  // ── Horario ───────────────────────────────────────────
  horario:      'Mo-Sa 09:00-20:00',
  horarioTexto: 'Lunes a Sábado, 9:00–20:00',
  horarioDias:  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'] as string[],
  horarioAbre:  '09:00',
  horarioCierra:'20:00',

  // ── SEO ───────────────────────────────────────────────
  description: 'Vaciado rápido y profesional de pisos y locales en Vilanova i la Geltrú. ¡Gestionamos todo! Libera espacios con JUSTCLEAN VNG. Presupuesto gratuito. | 602365996',
  priceRange:  '€€',
  aggregateRating: {
    ratingValue:  4.9,
    reviewCount:  23,
    bestRating:   4,
    worstRating:  1,
  },

  // ── Colores corporativos ──────────────────────────────
  colorPrimary: '#fb00ff',
  colorText:    '#00030a',

  // ── Diseño visual ─────────────────────────────────────
  fontFamily:  'Outfit',
  designStyle: 'pill',
  brandIcon:   '◉',
  mapZoom:     15,

  // ── SEO avanzado ──────────────────────────────────────
  titleFormula: 4,
  schemaType:  'MovingCompany',
  // sectionOrder: orden y visibilidad de secciones en la home
  sectionOrder: ["servicios","proceso","zona","precios","beneficios","faq","testimonios"] as string[],

  // ── Navegación ────────────────────────────────────────
  navAbout:    'Sobre nosotros',
  navFaq:      'Preguntas frecuentes',
  navCta:      'LLAMAR AHORA',
  navCtaShort: 'LLAMAR',
  navCtaEmoji: '💬',

  // ── Enlaces externos ──────────────────────────────────
  externalLink1: { url: 'https://maps.app.goo.gl/9u5tMrCJgCBKFeMU8', anchor: 'Profesionales en vaciado de pisos y locales', rel: 'follow' },
  externalLink2: { url: 'https://www.justclean.es/vaciado-de-pisos-en-vilanova-i-la-geltru/', anchor: '© 2026 JustClean Tarragona', rel: 'follow' },

  // ── Redes sociales ────────────────────────────────────
  social: {
    facebook:  '',
    instagram: '',
    linkedin:  '',
  },

  // ── Verificación de sitio ─────────────────────────────
  googleVerification: '"VecKxVtQt7zzzW_RNZbxeAsYQ66Ih20xCXJu00z2fAA" />',
  bingVerification:   '',

} as const;

export type SiteConfig = typeof siteConfig;

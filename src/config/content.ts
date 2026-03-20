/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║  CONTENIDO DEL SITIO — src/config/content.ts                ║
 * ║                                                              ║
 * ║  Todos los textos editables de la web están aquí.           ║
 * ║  Usa {{city}} donde quieras que aparezca la ciudad principal ║
 * ║  (se reemplaza automáticamente en tiempo de build).         ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

export const content = {

  // ── Hero ──────────────────────────────────────────────────────
  hero: {
    eyebrow:     'Empresa de vaciados en {{city}}',
    h1main:      'Vaciado de Pisos y Locales Profesionales',
    h1accent:    'en {{city}} y comarca: Garraf, Alt Penedès, Baix Penedès, Baix Llobregat y Tarragonès',
    description: 'JUSTCLEAN VNG es tu solución integral para el vaciado profesional de viviendas, oficinas y locales comerciales en {{city}}. Ofrecemos un servicio rápido, eficiente y respetuoso con el medio ambiente, facilitando la limpieza y preparación para nuevos proyectos.',
    badge1:      'Tasación Gratuita Online',
    badge2:      'Más de 8 Años de Experiencia',
    badge3:      'Gestión Responsable de Residuos',
    badge4:      'Servicio a Domicilio en toda la zona',
    cardStat:    '+500',
    cardLabel:   'Viviendas Vaciadas en {{city}}',
  },

  // ── Beneficios (6 tarjetas) ────────────────────────────────────
  benefits: [
    {
      icon: 'users',
      title:       'Más de 10 años de experiencia especializada en desalojos completos',
      description: 'Contamos con un equipo experimentado con más de una década gestionando desalojos complejos en {{city}} y alrededores. Hemos realizado más de 500 vaciados, lo que nos permite ofrecer soluciones eficientes y discretas.',
    },
    {
      icon: 'clock',
      title:       'Servicio rápido en 24-48 horas en {{city}}',
      description: 'Recogemos muebles y vaciamos pisos en 24-48 horas desde la confirmación. Nuestro equipo trabaja de forma ágil para minimizar las molestias en {{city}} y la comarca del Garraf.',
    },
    {
      icon: 'check',
      title:       'Gestión certificada de residuos',
      description: 'Separamos y reciclamos todos los materiales según normativa vigente. Trabajamos con gestores autorizados para una correcta eliminación de residuos en {{city}} y el Baix Penedès.',
    },
    {
      icon: 'box',
      title:       'Servicio integral llave en mano',
      description: 'Nos encargamos de todo el proceso: desmontaje, carga, transporte y limpieza básica. Un servicio completo que le libera de preocupaciones en {{city}}, Sitges, Cubelles y alrededores.',
    },
    {
      icon: 'heart',
      title:       'Trato cercano y confidencial',
      description: 'Actuamos con máxima discreción en situaciones delicadas como herencias o separaciones. Adaptamos el servicio a su disponibilidad y necesidades en {{city}} y comarca.',
    },
    {
      icon: 'shield',
      title:       'Seguro de responsabilidad civil incluido',
      description: 'Todos nuestros trabajos están cubiertos por seguro de responsabilidad civil. Su tranquilidad está garantizada ante cualquier incidencia durante el vaciado en {{city}}.',
    }
  ],

  // ── Servicios (tarjetas del inicio) ───────────────────────────
  serviceSummaries: [
    {
      slug:        'vaciado-pisos',
      nombre:      'Vaciado de pisos',
      description: 'JUSTCLEAN VNG ofrece servicios profesionales de retirada de enseres y mobiliario antiguo en {{city}}.  Nos encargamos del desalojo integral de viviendas, apartamentos y estudios en Vilanova i la Geltrú para facilitar sus trámites.',
      features:    ['Gestión integral de residuos', 'Desmontaje y retirada de muebles a domicilio', 'Servicio rápido y eficiente', 'Reciclaje responsable de materiales', 'Cobertura en {{city}} y comarca del Garraf, Alt Penedès, Baix Penedès, Baix Llobregat y Tarragonès.  Colaboramos con el Ajuntament de Vilanova i la Geltrú para un servicio sostenible.', 'Personal cualificado y seguro'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'vaciado-locales',
      nombre:      'Vaciado de locales',
      description: 'JUSTCLEAN VNG se especializa en el vaciado profesional de locales comerciales, oficinas e industriales en {{city}}.  Ofrecemos soluciones integrales para dejar sus espacios listos para su nuevo uso o venta en la zona de Vilanova i la Geltrú.',
      features:    ['Desalojo completo de comercios', 'Retirada de maquinaria y mobiliario comercial', 'Limpieza profunda post-vaciado opcional', 'Certificación de reciclaje de residuos', 'Cobertura en {{city}} y comarca, incluyendo municipios como Cubelles y Cunit.', 'Cumplimiento normativo vigente según la Generalitat de Catalunya'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'recogida-muebles',
      nombre:      'Recogida de muebles',
      description: '¿Necesita deshacerse de muebles viejos en {{city}}? JUSTCLEAN VNG le ofrece un servicio de recogida profesional y responsable, cubriendo toda la zona del Baix Penedès.  Nos encargamos de recoger sus muebles usados sin coste adicional para usted.',
      features:    ['Recogida a domicilio programada', 'Desmontaje previo opcional', 'Transporte seguro de los muebles', 'Entrega en puntos de reciclaje autorizados', 'Cobertura amplia: {{city}}, Sant Pere de Riudabons, y alrededores.', 'Colaboramos con asociaciones benéficas locales para donaciones'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'limpieza-diogenes',
      nombre:      'Limpieza síndrome de Diógenes',
      description: 'JUSTCLEAN VNG ofrece servicios especializados de limpieza integral en casos de síndrome de Diógenes en {{city}}.  Comprendemos la sensibilidad del tema y ofrecemos un servicio discreto, profesional y eficaz para restaurar el orden y la higiene.',
      features:    ['Desinfección completa de la vivienda', 'Retirada segura de objetos acumulados', 'Limpieza profunda con productos específicos', 'Asesoramiento en organización y gestión de residuos', 'Cobertura en {{city}} y áreas cercanas.', 'Trabajamos bajo estrictas medidas sanitarias del Servei Català de la Salut'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'limpieza-post-vaciado',
      nombre:      'Limpieza post vaciado',
      description: 'Después de un vaciado, JUSTCLEAN VNG le ofrece un servicio de limpieza profunda en {{city}} para dejar su propiedad lista para ser utilizada o vendida.  Nos encargamos de la eliminación de polvo, suciedad y malos olores, cumpliendo con las regulaciones del Consorci Garraf-Penedès.',
      features:    ['Limpieza integral de suelos, paredes y techos', 'Desinfección y desodorización profesional', 'Retirada de residuos incrustados', 'Preparación para la venta o alquiler', 'Cobertura completa en {{city}} y su entorno.', 'Utilizamos productos ecológicos certificados'],
      featured:    true,
      ctaPage:     true,
    },
    {
      slug:        'pintura-express',
      nombre:      'Pintura express',
      description: 'JUSTCLEAN VNG ofrece servicios de pintura rápida y eficiente en {{city}}, ideales para dejar sus espacios renovados después de un vaciado.  Realizamos trabajos de pintura profesional con rapidez, calidad y precios competitivos en la comarca del Alt Penedès.',
      features:    ['Preparación previa de superficies', 'Aplicación profesional de pinturas', 'Trabajos rápidos y eficientes', 'Amplia gama de colores y acabados', 'Cobertura en {{city}}, Vendrell y zonas aledañas.', 'Cumplimos con las normativas de seguridad laboral de la Diputació de Barcelona'],
      featured:    true,
      ctaPage:     true,
    }
  ],

  // ── Textos de secciones ───────────────────────────────────────
  sections: {
    beneficiosH2:   '¿Por qué elegirnos en {{city}}?',
    beneficiosSub:  'Más de 10 años de experiencia. Equipo propio, sin subcontratas y con gestión de residuos certificada.',
    serviciosH2:    'Nuestros servicios en {{city}}',
    serviciosSub:   'Todo lo que necesitas para dejar el inmueble listo.',
    zonaH2:         'Zona de actuación: {{city}} y alrededores',
    procesoH2:      'Cómo trabajamos: 4 pasos sin complicaciones',
    testimoniosH2:  'Lo que dicen nuestros clientes en {{city}}',
    testimoniosSub: 'Más de 500 familias y empresas han confiado en nosotros.',
    preciosH2:      'Precios orientativos en {{city}}',
    preciosSub:     'Presupuesto final gratuito y sin compromiso. Estos precios son orientativos — el coste real depende del volumen y accesibilidad.',
    faqH2:          'Preguntas frecuentes en {{city}}',
    faqSub:         'Resolvemos las dudas más habituales antes de contratar el servicio.',
    zonaComarca:    'de la comarca',
    zonaBarrios:    'También en los barrios de {{city}}:',
    preciosNota:    'Precios orientativos para {{city}}. El presupuesto definitivo se calcula según el volumen real, accesibilidad y distancia al punto limpio. Siempre gratuito y sin compromiso.',
    ctaH2:          'Vaciado Rápido de Pisos en Vilanova i la Geltrú',
    ctaSub:         'Gestionamos todo el proceso de forma profesional y discreta. ¡Solicite su presupuesto sin compromiso!',
    ctaBoton:       'Pedir Presupuesto Ya',
  },

  // ── Testimonios (4) ───────────────────────────────────────────
  testimonials: [
    {
      initials: 'MC',
      name:     'María C.',
      location: 'Vilanova i la Geltrú',
      service:  'Vaciado integral de piso con retirada de muebles',
      quote:    'Nos recomendaron Vaciados Vilanova para vaciar el piso que heredamos en Bellnou. Fueron súper profesionales, desmontaron los muebles pesados y se llevaron todo sin darnos problemas. ¡Muy contenta con el servicio! La limpieza posterior fue impecable.',
    },
    {
      initials: 'JR',
      name:     'Jordi R.',
      location: 'Vilanova i la Geltrú',
      service:  'Limpieza profunda tras vaciado de local comercial',
      quote:    'Necesitábamos dejar un local en perfecto estado en El Vendrell después de que una tienda cerrara. Vaciados Vilanova nos hicieron un presupuesto claro y cumplieron todo lo acordado: retiraron escombros, limpiamos a fondo y organizamos la salida del mobiliario voluminoso. Excelente comunicación y trabajo.',
    },
    {
      initials: 'AL',
      name:     'Ana L.',
      location: 'Vilanova i la Geltrú',
      service:  'Desalojo de vivienda con gestión de residuos',
      quote:    'Tenía un problema con una vivienda en La Farella que necesitaba vaciar urgentemente. Vaciados Vilanova fueron muy rápidos y eficientes, gestionaron los residuos correctamente y me ofrecieron un precio muy competitivo. ¡Muy recomendable!.',
    },
    {
      initials: 'PG',
      name:     'Pedro G.',
      location: 'Vilanova i la Geltrú',
      service:  'Retirada de trastos y escombros tras reforma en Sant Antoni',
      quote:    'Llevamos varios años utilizando los servicios de Vaciados Vilanova para diferentes trabajos, desde vaciados de pisos hasta retirada de muebles viejos después de reformas. Siempre nos han demostrado ser profesionales, puntuales y con un trato excelente. ¡Volveremos a contratarles sin dudarlo!',
    }
  ],

  // ── Precios (3 tramos) ────────────────────────────────────────
  pricing: [
    {
      tipo:      'Limpieza Básica de Estancia Individual',
      precio:    'desde 150 €',
      highlight: false,
      features:  ['Retirada de mobiliario pequeño (hasta 5m3)', 'Limpieza inicial estándar (polvo, fregado)', 'Desinfección básica', 'Servicio en el centro y casco histórico de Vilanova i la Geltrú'],
    },
    {
      tipo:      'Vaciado Integral de Vivienda Habitada',
      precio:    'desde 380 €',
      highlight: true,
      badge:     'Más solicitado',
      features:  ['Retirada completa de mobiliario (hasta 15m3)', 'Clasificación de residuos (envases, papel, orgánico, resto)', 'Limpieza profunda con productos profesionales', 'Preparación para la nueva ocupación', 'Elaboración de inventario fotográfico', 'Servicio en Vilanova i la Geltrú y alrededores'],
    },
    {
      tipo:      'Gestión Integral de Liquidaciones Inmobiliarias',
      precio:    'Presupuesto personalizado',
      highlight: false,
      features:  ['Retirada total de contenido (más de 15m3)', 'Desmontaje de muebles grandes', 'Coordinación con gestorías e inmobiliarias', 'Almacenamiento temporal opcional (consultar precios)', 'Certificación de limpieza y entrega de llaves', 'Garantía de cumplimiento de plazos', 'Servicio en toda la comarca del Garraf'],
    }
  ],

  // ── Preguntas frecuentes (6) ──────────────────────────────────
  faqs: [
    {
      pregunta:  '¿Cuánto cuesta el vaciado integral de pisos y locales en Vilanova i la Geltrú?',
      respuesta: 'El precio para un servicio de limpieza profunda y retirada de mobiliario en {{city}} varía según el tamaño de la vivienda, la cantidad de objetos a retirar y el estado general del inmueble.  Generalmente, los precios oscilan entre 150€ para una buhardilla pequeña hasta 800€ o más para un local comercial con gran volumen de enseres. Ofrecemos presupuestos personalizados sin compromiso, considerando factores como la gestión de residuos y la demolición menor si fuera necesario; contacte con nosotros para una tasación ajustada a sus necesidades de limpieza y desatrasto en {{city}}.',
    },
    {
      pregunta:  '¿Cuánto tarda el servicio de vaciado de viviendas y comercios en Vilanova i la Geltrú?',
      respuesta: 'La duración del proceso de limpieza profunda y retirada de pertenencias en {{city}} depende directamente de la superficie a tratar y la cantidad de objetos que haya. Un piso pequeño puede tardar entre 2 y 4 horas, mientras que un local comercial grande con muebles pesados podría requerir uno o varios días.  Nuestro equipo trabaja de forma eficiente para minimizar las molestias, optimizando tiempos y coordinando la posterior gestión de trastos.',
    },
    {
      pregunta:  '¿Qué incluye el servicio profesional de limpieza y desatrasto en Vilanova i la Geltrú?',
      respuesta: 'Nuestro servicio integral de vaciado en {{city}} abarca desde la retirada de muebles, electrodomésticos y objetos personales hasta la limpieza a fondo del inmueble. Incluimos la desmontaje de muebles voluminosos, el embalaje básico (si es necesario), la carga y transporte de los residuos a vertederos autorizados, la limpieza profunda con productos desinfectantes y, opcionalmente, la donación de enseres reusables a organizaciones benéficas.  Nos encargamos de todo para que usted no tenga que preocuparse por nada.',
    },
    {
      pregunta:  '¿Ofrecen sus servicios de vaciado y retirada de trastos en toda la comarca de Vilanova i la Geltrú?',
      respuesta: 'Sí, cubrimos toda el área de {{city}} y sus alrededores.  Nuestros equipos operan en municipios del Garraf, Alt Penedès, Baix Penedès, Baix Llobregat y Tarragonès.  Servimos a poblaciones como Cubelles, Cunit, Sant Pere de Riudabons, Bellamarí, o incluso localidades más alejadas dentro de estas comarcas; consulte la disponibilidad para su zona específica.',
    },
    {
      pregunta:  '¿Qué debo preparar antes de que lleguen los profesionales a realizar el vaciado en mi piso o local en {{city}}?',
      respuesta: 'Para agilizar el proceso de limpieza y desatrasto, le recomendamos que retire objetos de valor personal (joyas, documentos importantes) y despeje las zonas de acceso.  No es necesario hacer una clasificación exhaustiva; nuestros profesionales se encargarán de identificar los elementos a desechar, donar o vender. Facilitar el acceso a enchufes y tomas de agua puede optimizar la limpieza profunda posterior al vaciado en {{city}}.',
    },
    {
      pregunta:  '¿Qué garantías ofrecen respecto a la gestión legal y responsable de los residuos retirados durante un servicio de vaciado en {{city}}?',
      respuesta: 'Cumplimos estrictamente con todas las normativas vigentes para la recogida y transporte de residuos.  Contamos con el permiso municipal correspondiente, realizamos la correcta clasificación de los trastos y nos aseguramos de que se depositen en vertederos autorizados por la Generalitat de Catalunya. Además, disponemos de seguro de responsabilidad civil y ofrecemos un certificado de gestión ambiental como prueba del cumplimiento legal y responsable del servicio en {{city}}.',
    }
  ],

  // ── Proceso de trabajo (4 pasos) ──────────────────────────────
  proceso: [
    {
      titulo:      '1. Contacto y Presupuesto Gratuito en Vilanova i la Geltrú',
      descripcion: 'Contacte con JUSTCLEAN VNG por teléfono o a través de nuestro formulario online para solicitar un presupuesto sin compromiso para su vaciado de pisos, locales o solares en {{city}}. Le responderemos en menos de 2 horas y le ofreceremos una valoración ajustada a sus necesidades específicas, incluyendo la retirada de muebles viejos y escombros.',
    },
    {
      titulo:      '2. Evaluación del Inmueble y Planificación Logística',
      descripcion: 'Nuestro equipo técnico especializado visitará el inmueble en {{city}} para evaluar el volumen de trabajo, identificar los objetos a retirar (en residuos no peligrosos) y planificar la logística del transporte y la gestión de restos. Esto incluye determinar la maquinaria adecuada – camiones grúas, contenedores– y el destino final de los materiales según normativa vigente.',
    },
    {
      titulo:      '3. Ejecución Profesional del Vaciado Integral',
      descripcion: 'JUSTCLEAN VNG realizará un vaciado integral profesional en {{city}}, desmontando y retirando muebles, electrodomésticos, objetos personales y cualquier otro elemento presente en el inmueble. Nos aseguramos de realizar una limpieza profunda posterior para dejar la propiedad lista para su próxima utilización o venta, cumpliendo con las normativas municipales sobre gestión de residuos.',
    },
    {
      titulo:      '4. Entrega de Documentación y Garantía de Satisfacción',
      descripcion: 'Una vez finalizado el vaciado en {{city}}, le entregaremos toda la documentación necesaria – justificantes de retirada, certificado de destrucción (si aplica) – y un informe detallado del trabajo realizado. En JUSTCLEAN VNG ofrecemos garantía de satisfacción y estamos a su disposición para cualquier consulta o necesidad post-servicio.',
    }
  ],

} as const;

export type Content = typeof content;

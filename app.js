/* ═══════════════════════════════════════════════════════
   UNILEVER CAREERS — app.js
   Separado del HTML para facilitar integración con PHP.
   Los datos de SOLICITUDES son mock; en producción
   se reemplazarán por fetch() al backend PHP.
═══════════════════════════════════════════════════════ */

/* ── Inline SVG paths for job icons ── */
const SVG = {
  broom:      `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M2 20h20"/><path d="M5 20V8l7-6 7 6v12"/><path d="M9 20v-5h6v5"/></svg>`,
  shield:     `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>`,
  clipboard:  `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg>`,
  monitor:    `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>`,
  books:      `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/><line x1="10" y1="7" x2="16" y2="7"/><line x1="10" y1="11" x2="14" y2="11"/></svg>`,
  palette:    `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r="1" fill="currentColor"/><circle cx="17.5" cy="10.5" r="1" fill="currentColor"/><circle cx="8.5" cy="7.5" r="1" fill="currentColor"/><circle cx="6.5" cy="12.5" r="1" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`,
  microscope: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="18" r="2"/><path d="M19 18H5"/><path d="M9 10.4V5a2 2 0 114 0v5.4a4 4 0 11-4 0z"/></svg>`,
  calculator: `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="8.01" y2="10"/><line x1="12" y1="10" x2="12.01" y2="10"/><line x1="16" y1="10" x2="16.01" y2="10"/><line x1="8" y1="14" x2="8.01" y2="14"/><line x1="12" y1="14" x2="12.01" y2="14"/><line x1="16" y1="14" x2="16.01" y2="14"/><line x1="8" y1="18" x2="12" y2="18"/></svg>`,
  medical:    `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>`,
  scale:      `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="3" x2="12" y2="21"/><polyline points="7 21 12 21 17 21"/><path d="M4 7l4 8H4l4-8z"/><path d="M20 7l-4 8h8l-4-8z"/></svg>`,
  code:       `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>`,
  gradcap:    `<svg viewBox="0 0 24 24" fill="none" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
};

/* ── Job listings data ── */
const JOBS = [
  {
    id: 1, ico: 'broom', title: 'Operador(a) de Saneamiento',
    dept: 'Supply Chain · Planta de Manufactura Vallejo',
    type: 'Tiempo completo', level: 'Operativo', cat: 'Operaciones',
    salary: '$8,500/mes', loc: 'Planta CDMX', sched: 'Lun–Sáb · 6am–2pm', isNew: true,
    desc: 'Responsable de mantener los estándares de limpieza e higiene en las líneas de producción y áreas comunes de la planta, garantizando el cumplimiento de normativas GMP.',
    reqs: ['Secundaria concluida', 'Experiencia en limpieza industrial deseable', 'Disponibilidad de turno matutino', 'Actitud proactiva y sentido de responsabilidad'],
    bens: ['IMSS + fondo de ahorro 5%', 'Vales de despensa mensuales', 'Uniformes y EPP incluidos', 'Transporte de personal desde Metro Vallejo'],
  },
  {
    id: 2, ico: 'shield', title: 'Guardia de Seguridad Industrial',
    dept: 'HSE · Health, Safety & Environment',
    type: 'Tiempo completo', level: 'Operativo', cat: 'Operaciones',
    salary: '$10,200/mes', loc: 'Planta CDMX', sched: 'Turnos 12×12',
    desc: 'Control de accesos, rondas de vigilancia y atención a incidentes en instalaciones de manufactura bajo estándares de seguridad industrial Unilever.',
    reqs: ['Preparatoria concluida', 'Certificado de guardia privado vigente', 'Mínimo 1 año en industria', 'Sin antecedentes penales'],
    bens: ['IMSS', 'Horas extras al 100%', 'Seguro de vida institucional', 'Bono de puntualidad'],
  },
  {
    id: 3, ico: 'clipboard', title: 'Asistente Administrativo(a)',
    dept: 'Corporate Affairs · Oficinas Corporativas',
    type: 'Tiempo completo', level: 'Administrativo', cat: 'Administración',
    salary: '$13,500/mes', loc: 'Santa Fe, CDMX', sched: 'Lun–Vie · 9am–6pm', isNew: true,
    desc: 'Soporte integral a la dirección de operaciones: gestión de agenda, coordinación de juntas, elaboración de reportes y control documental.',
    reqs: ['Licenciatura en Administración o afín', 'Office 365 y SharePoint avanzado', 'Inglés intermedio–avanzado', '1 año de experiencia en corporativo'],
    bens: ['Seguro de gastos médicos mayores', 'Seguro de vida', 'Estacionamiento corporativo', 'Comedor subsidiado al 70%'],
  },
  {
    id: 4, ico: 'monitor', title: 'Técnico(a) en Soporte IT',
    dept: 'Information Technology · IT Operations',
    type: 'Tiempo completo', level: 'Técnico', cat: 'Tecnología',
    salary: '$16,000/mes', loc: 'Santa Fe, CDMX', sched: 'Lun–Vie · 9am–6pm',
    desc: 'Soporte técnico de nivel 1 y 2, administración de estaciones de trabajo, impresoras y VPN corporativa en el entorno Microsoft/SAP de Unilever.',
    reqs: ['Técnico o Lic. en Informática', 'Windows 11, O365, Active Directory', '1–2 años de experiencia', 'Inglés técnico básico'],
    bens: ['IMSS', 'Seguro médico mayor', 'Acceso a plataformas de e-learning', 'Certificaciones Microsoft financiadas'],
  },
  {
    id: 5, ico: 'books', title: 'Analista de Cumplimiento Legal',
    dept: 'Legal & Compliance · Affairs',
    type: 'Tiempo completo', level: 'Técnico', cat: 'Legal',
    salary: '$18,000/mes', loc: 'Santa Fe, CDMX', sched: 'Lun–Vie · 9am–6pm',
    desc: 'Gestión de documentación legal corporativa, seguimiento de contratos con proveedores, y apoyo en auditorías de cumplimiento regulatorio.',
    reqs: ['Lic. Derecho o Administración', 'Conocimiento de normativa mercantil', 'Manejo de sistemas de gestión documental', 'Inglés intermedio'],
    bens: ['IMSS', 'Seguro de vida', 'Acceso a biblioteca legal digital', 'Cursos de actualización normativa'],
  },
  {
    id: 6, ico: 'palette', title: 'Diseñador(a) de Marca',
    dept: 'Marketing · Brand & Communications',
    type: 'Tiempo completo', level: 'Profesional', cat: 'Marketing',
    salary: '$24,000/mes', loc: 'Santa Fe, CDMX', sched: 'Lun–Vie · 9am–6pm', isNew: true,
    desc: 'Diseño de materiales de comunicación para marcas del portafolio Unilever (Dove, Axe, Hellmann\'s): packaging, POSM, redes sociales y campañas.',
    reqs: ['Lic. Diseño Gráfico o afín', 'Adobe Creative Suite + Figma', 'Portafolio con marcas de consumo', '2+ años de experiencia'],
    bens: ['IMSS', 'Seguro médico mayor', 'MacBook Pro proporcionado', 'Budget de herramientas creativas'],
  },
  {
    id: 7, ico: 'microscope', title: 'Analista de Control de Calidad',
    dept: 'Quality Assurance · Operations',
    type: 'Tiempo completo', level: 'Técnico', cat: 'Operaciones',
    salary: '$17,500/mes', loc: 'Planta Lerma', sched: 'Lun–Vie · 7am–4pm',
    desc: 'Análisis fisicoquímico y microbiológico de materias primas y producto terminado. Garantizar cumplimiento de especificaciones Unilever y normativas NOM.',
    reqs: ['Lic. Química, Biología o QFB', 'Buenas Prácticas de Manufactura', 'Equipos analíticos y LIMS', '1–3 años experiencia en consumo'],
    bens: ['IMSS', 'Seguro de vida', 'EPP de categoría premium', 'Acceso al programa de innovación interna'],
  },
  {
    id: 8, ico: 'calculator', title: 'Analista Financiero Sr.',
    dept: 'Finance & Controlling · FP&A',
    type: 'Tiempo completo', level: 'Profesional', cat: 'Finanzas',
    salary: '$32,000/mes', loc: 'Santa Fe, CDMX', sched: 'Lun–Vie · 9am–6pm',
    desc: 'Planeación financiera, análisis de variaciones, cierre mensual en SAP y elaboración de reportes para dirección y casa matriz.',
    reqs: ['Lic. Contaduría o Finanzas titulado', 'SAP FI/CO + Excel avanzado', '3–5 años FP&A en multinacional', 'Inglés avanzado'],
    bens: ['IMSS', 'Seguro médico familiar', 'Bono de desempeño trimestral', 'Plan de desarrollo internacional'],
  },
  {
    id: 9, ico: 'medical', title: 'Médico Ocupacional',
    dept: 'Human Resources · Well-being & HSE',
    type: 'Tiempo completo', level: 'Profesional', cat: 'RRHH',
    salary: '$34,000/mes', loc: 'Planta CDMX', sched: 'Lun–Vie · 8am–4pm', isNew: true,
    desc: 'Atención de urgencias menores, exámenes de ingreso y periódicos, programas de bienestar y coordinación con el IMSS para la comunidad laboral.',
    reqs: ['Médico Cirujano con cédula', 'Especialidad en Medicina del Trabajo o SST', '2+ años en industria', 'Trato humanístico y empático'],
    bens: ['IMSS', 'Seguro médico complementario', 'Guardias con diferencial', 'Acceso a programas de bienestar ejecutivo'],
  },
  {
    id: 10, ico: 'scale', title: 'Abogado(a) Corporativo',
    dept: 'Legal & Compliance · Corporate',
    type: 'Tiempo completo', level: 'Profesional', cat: 'Legal',
    salary: '$38,000/mes', loc: 'Santa Fe, CDMX', sched: 'Lun–Vie · 9am–6pm',
    desc: 'Asesoría jurídica integral: contratos comerciales, litigios laborales, protección de propiedad intelectual y cumplimiento regulatorio ante COFEPRIS.',
    reqs: ['Lic. Derecho con cédula', 'Derecho corporativo y laboral', '3+ años en firma o multinacional', 'Inglés avanzado indispensable'],
    bens: ['IMSS', 'Seguro médico mayor', 'Gastos de representación', 'Membresías a colegios de abogados'],
  },
  {
    id: 11, ico: 'code', title: 'Desarrollador(a) Full Stack',
    dept: 'Information Technology · Digital & Data',
    type: 'Tiempo completo', level: 'Senior', cat: 'Tecnología',
    salary: '$42,000/mes', loc: 'Híbrido · Santa Fe', sched: 'Lun–Vie · Flexible', isNew: true,
    desc: 'Desarrollo de plataformas de e-commerce, herramientas de data analytics y automatización de procesos internos en el ecosistema digital de Unilever LATAM.',
    reqs: ['Lic. Ing. en Sistemas o afín', 'React, Node.js, Python, GCP/Azure', '3+ años full stack', 'Metodologías ágiles y DevOps'],
    bens: ['IMSS', 'Home office 3 días/semana', 'Laptop última generación', 'Certificaciones cloud financiadas'],
  },
  {
    id: 12, ico: 'gradcap', title: 'Director(a) de Planta',
    dept: 'Supply Chain · Manufacturing Leadership',
    type: 'Tiempo completo', level: 'Directivo', cat: 'Operaciones',
    salary: '$110,000/mes', loc: 'Planta Lerma', sched: 'Disponibilidad total',
    desc: 'Dirigir estratégicamente las operaciones de manufactura de la planta: productividad, calidad, seguridad y cumplimiento de objetivos WCM de Unilever.',
    reqs: ['Ing. Industrial, Químico o afín (Maestría deseable)', '15+ años en manufactura FMCG', 'Inglés avanzado', 'Experiencia en WCM / TPM'],
    bens: ['IMSS + seguro ejecutivo', 'Auto de empresa', 'Bono anual por KPIs de planta', 'Programa de expatriación disponible'],
  },
];

/* ═══════════════════════════════════════════════
   MOCK SOLICITUDES
   En producción: reemplazar con fetch('api/solicitudes.php')
═══════════════════════════════════════════════ */
let SOLICITUDES = [
  {
    id: 1, nombres: 'Ana Sofía', apellidos: 'García López',
    correo: 'ana.garcia@email.com', telefono: '55 1234 5678', ciudad: 'Ciudad de México',
    fecha_nacimiento: '1995-03-15', curp: 'GALA950315MDFXXX01',
    genero: 'Femenino', estado_civil: 'Soltera',
    nivel: 'Licenciatura', institucion: 'UNAM', carrera: 'Ing. en Sistemas Computacionales', anio: '2018',
    exp_anios: '3-5 años', ultimo_puesto: 'Desarrolladora Frontend', empresa: 'Startup Tech MX',
    disponibilidad: 'Inmediata',
    descripcion: 'Desarrolladora con 4 años construyendo aplicaciones React y Node.js para empresas de e-commerce. Apasionada por la UX y las buenas prácticas de código.',
    puesto_vacante: 'Desarrollador(a) Full Stack', vacante_id: 11,
    estado: 'En revisión', fecha_solicitud: '2026-03-09',
  },
  {
    id: 2, nombres: 'Carlos Eduardo', apellidos: 'Mendoza Ríos',
    correo: 'c.mendoza@gmail.com', telefono: '81 9876 5432', ciudad: 'Monterrey, NL',
    fecha_nacimiento: '1990-07-22', curp: 'MERC900722HNLXXX02',
    genero: 'Masculino', estado_civil: 'Casado',
    nivel: 'Licenciatura', institucion: 'Tec de Monterrey', carrera: 'Finanzas', anio: '2013',
    exp_anios: '6-10 años', ultimo_puesto: 'Gerente FP&A', empresa: 'Nestlé México',
    disponibilidad: '2 semanas',
    descripcion: 'Más de 8 años en planeación financiera para empresas de consumo masivo. Experiencia directa con SAP, Oracle Hyperion y cierres USGAAP.',
    puesto_vacante: 'Analista Financiero Sr.', vacante_id: 8,
    estado: 'Entrevista programada', fecha_solicitud: '2026-03-07',
  },
  {
    id: 3, nombres: 'Valentina', apellidos: 'Torres Herrera',
    correo: 'val.torres@outlook.com', telefono: '33 2345 6789', ciudad: 'Guadalajara, Jalisco',
    fecha_nacimiento: '1998-11-05', curp: 'TOHV981105MJCXXX03',
    genero: 'Femenino', estado_civil: 'Soltera',
    nivel: 'Licenciatura', institucion: 'ITESO', carrera: 'Diseño de Comunicación Visual', anio: '2021',
    exp_anios: '1-2 años', ultimo_puesto: 'Diseñadora Jr.', empresa: 'Agencia Creativa',
    disponibilidad: 'Inmediata',
    descripcion: 'Diseñadora con portafolio en branding, packaging y redes sociales para marcas de consumo. Manejo avanzado de Adobe Suite y Figma.',
    puesto_vacante: 'Diseñador(a) de Marca', vacante_id: 6,
    estado: 'Pendiente', fecha_solicitud: '2026-03-10',
  },
  {
    id: 4, nombres: 'Roberto', apellidos: 'Sánchez Villanueva',
    correo: 'r.sanchez@live.com', telefono: '55 6543 2109', ciudad: 'Ciudad de México',
    fecha_nacimiento: '1985-01-30', curp: 'SAVR850130HDFXXX04',
    genero: 'Masculino', estado_civil: 'Divorciado',
    nivel: 'Maestría', institucion: 'UNAM', carrera: 'Medicina del Trabajo', anio: '2014',
    exp_anios: '6-10 años', ultimo_puesto: 'Médico Ocupacional Sr.', empresa: 'Grupo Bimbo',
    disponibilidad: '1 mes',
    descripcion: 'Médico con especialidad en Salud Ocupacional. Amplia experiencia en programas de bienestar corporativo, vigilancia epidemiológica y cumplimiento NOM-030.',
    puesto_vacante: 'Médico Ocupacional', vacante_id: 9,
    estado: 'Aprobado', fecha_solicitud: '2026-03-05',
  },
  {
    id: 5, nombres: 'Lucía Fernanda', apellidos: 'Ramírez Castillo',
    correo: 'lucia.rc@email.mx', telefono: '22 8765 4321', ciudad: 'Puebla, Pue.',
    fecha_nacimiento: '1993-09-12', curp: 'RACL930912MPLXXX05',
    genero: 'Femenino', estado_civil: 'Casada',
    nivel: 'Licenciatura', institucion: 'BUAP', carrera: 'Ingeniería Química', anio: '2016',
    exp_anios: '3-5 años', ultimo_puesto: 'Analista QA', empresa: 'Procter & Gamble',
    disponibilidad: '2 semanas',
    descripcion: 'QA con experiencia en análisis fisicoquímico, microbiología y auditorías internas en planta de cuidado personal. Certificada en GMP y FSSC 22000.',
    puesto_vacante: 'Analista de Control de Calidad', vacante_id: 7,
    estado: 'Pendiente', fecha_solicitud: '2026-03-10',
  },
  {
    id: 6, nombres: 'Jorge Alejandro', apellidos: 'Peña Morales',
    correo: 'jpenam@corporativo.net', telefono: '55 1111 2222', ciudad: 'Ciudad de México',
    fecha_nacimiento: '1980-06-18', curp: 'PEMJ800618HDFXXX06',
    genero: 'Masculino', estado_civil: 'Casado',
    nivel: 'Doctorado', institucion: 'IPN', carrera: 'Ing. Industrial', anio: '2010',
    exp_anios: 'Más de 10 años', ultimo_puesto: 'Gerente de Planta', empresa: 'Colgate-Palmolive',
    disponibilidad: '1 mes',
    descripcion: 'Más de 15 años liderando plantas de manufactura FMCG con implementación exitosa de WCM, Six Sigma Black Belt y gestión de equipos de +300 personas.',
    puesto_vacante: 'Director(a) de Planta', vacante_id: 12,
    estado: 'Entrevista programada', fecha_solicitud: '2026-03-06',
  },
  {
    id: 7, nombres: 'Mariana', apellidos: 'López Guzmán',
    correo: 'marianalopezg@email.com', telefono: '33 5555 6666', ciudad: 'Guadalajara, Jalisco',
    fecha_nacimiento: '1997-04-25', curp: 'LOGM970425MJCXXX07',
    genero: 'Femenino', estado_civil: 'Soltera',
    nivel: 'Licenciatura', institucion: 'Universidad de Guadalajara', carrera: 'Derecho', anio: '2020',
    exp_anios: '1-2 años', ultimo_puesto: 'Abogada Jr.', empresa: 'Despacho Notarial',
    disponibilidad: 'Inmediata',
    descripcion: 'Abogada con experiencia en derecho corporativo y mercantil. Actualmente certificándome en derecho de propiedad intelectual. Inglés B2.',
    puesto_vacante: 'Analista de Cumplimiento Legal', vacante_id: 5,
    estado: 'Rechazado', fecha_solicitud: '2026-03-04',
  },
  {
    id: 8, nombres: 'David Emilio', apellidos: 'Castro Núñez',
    correo: 'd.castro.n@gmail.com', telefono: '55 9999 0000', ciudad: 'Estado de México',
    fecha_nacimiento: '1999-12-01', curp: 'CAND991201HMCXXX08',
    genero: 'Masculino', estado_civil: 'Soltero',
    nivel: 'Técnico', institucion: 'CONALEP', carrera: 'Técnico en Redes y Telecomunicaciones', anio: '2019',
    exp_anios: '1-2 años', ultimo_puesto: 'Soporte TI Jr.', empresa: 'Empresa de servicios',
    disponibilidad: 'Inmediata',
    descripcion: 'Técnico con conocimientos en redes, soporte de equipos Windows y herramientas Microsoft 365. Interesado en crecer en entornos corporativos.',
    puesto_vacante: 'Técnico(a) en Soporte IT', vacante_id: 4,
    estado: 'En revisión', fecha_solicitud: '2026-03-08',
  },
];

/* ═══════════════════════════════════════════════
   STATE
═══════════════════════════════════════════════ */
let currentJob      = null;
let adminFilterStatus = '';
let adminSearchQ    = '';

const lvlTag = {
  Operativo:     't-sage',
  Administrativo:'t-navy',
  Técnico:       't-navy',
  Profesional:   't-gold',
  Senior:        't-crim',
  Directivo:     't-crim',
};

const statusConfig = {
  'Pendiente':             { cls: 'badge-pending',   label: 'Pendiente' },
  'En revisión':           { cls: 'badge-review',    label: 'En revisión' },
  'Entrevista programada': { cls: 'badge-interview', label: 'Entrevista' },
  'Aprobado':              { cls: 'badge-approved',  label: 'Aprobado' },
  'Rechazado':             { cls: 'badge-rejected',  label: 'Rechazado' },
};

/* ═══════════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════════ */
function iconBox(id, lg = false) {
  const cls    = lg ? 'icon-box-lg' : 'icon-box';
  const markup = SVG[id] || SVG.clipboard;
  return `<div class="${cls}">${markup.replace('<svg', '<svg style="width:100%;height:100%"')}</div>`;
}

function badgeHTML(status) {
  const cfg = statusConfig[status] || { cls: 'badge-pending', label: status };
  return `<span class="badge ${cfg.cls}">
    <svg viewBox="0 0 10 10"><circle cx="5" cy="5" r="4"/></svg>
    ${cfg.label}
  </span>`;
}

function initials(nombres, apellidos) {
  return ((nombres[0] || '') + (apellidos[0] || '')).toUpperCase();
}

function formatDate(dateStr) {
  if (!dateStr) return '—';
  const [y, m, d] = dateStr.split('-');
  const months = ['Ene','Feb','Mar','Abr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic'];
  return `${parseInt(d)} ${months[parseInt(m)-1]} ${y}`;
}

/* ═══════════════════════════════════════════════
   VIEW ROUTER
═══════════════════════════════════════════════ */
function showView(name) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById('view-' + name).classList.add('active');
  // update nav active state
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const navMap = { list: 0, admin: 1 };
  const links  = document.querySelectorAll('.nav-link');
  if (navMap[name] !== undefined) links[navMap[name]].classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ═══════════════════════════════════════════════
   JOB LISTING
═══════════════════════════════════════════════ */
function renderGrid(list) {
  const g   = document.getElementById('jobGrid');
  const cnt = document.getElementById('results-count');
  cnt.textContent = `Mostrando ${list.length} puesto${list.length !== 1 ? 's' : ''}`;

  if (!list.length) {
    g.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:80px 0">
      <div style="font-family:'Playfair Display',serif;font-size:1.6rem;color:#c8c0b4;margin-bottom:10px">Sin resultados</div>
      <p style="color:#7a7060">Intenta con otro criterio de búsqueda.</p></div>`;
    return;
  }

  g.innerHTML = list.map(j => `
    <div class="job-card" onclick="openDetail(${j.id})">
      <div class="jc-accent"></div>
      <div class="jc-body">
        <div class="jc-top">
          ${iconBox(j.ico)}
          <div class="jc-tags">
            <span class="tag ${lvlTag[j.level] || 't-sage'}">${j.level}</span>
            ${j.isNew ? `<span class="tag t-crim"><span class="t-new">
              <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              Nuevo</span></span>` : ''}
          </div>
        </div>
        <div class="jc-title">${j.title}</div>
        <div class="jc-dept">${j.dept}</div>
        <div class="jc-meta">
          <div class="jc-row"><div class="meta-box"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg></div>${j.loc}</div>
          <div class="jc-row"><div class="meta-box"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>${j.sched}</div>
          <div class="jc-row"><div class="meta-box"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg></div>${j.cat} · ${j.type}</div>
        </div>
      </div>
      <div class="jc-foot">
        <div class="jc-salary">${j.salary}</div>
        <button class="jc-cta"><svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></button>
      </div>
    </div>`).join('');
}

function openDetail(id) {
  currentJob = JOBS.find(j => j.id === id);
  const j = currentJob;

  document.getElementById('detail-top').innerHTML = `
    <div class="dh-top">
      ${iconBox(j.ico, true)}
      <div>
        <div class="dh-title">${j.title}</div>
        <div class="dh-dept">${j.dept}</div>
        <div class="dh-tags">
          <span class="dh-tag"><svg viewBox="0 0 24 24"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>${j.type}</span>
          <span class="dh-tag"><svg viewBox="0 0 24 24"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>${j.level}</span>
          <span class="dh-tag"><svg viewBox="0 0 24 24"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>${j.cat}</span>
          ${j.isNew ? `<span class="dh-tag gold"><svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>Nueva vacante</span>` : ''}
        </div>
      </div>
    </div>`;

  document.getElementById('detail-metrics').innerHTML = `
    <div class="det-metrics">
      <div class="dm-cell"><div class="dm-lbl"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1110.34 18"/><path d="M7 6h1v4"/></svg>Compensación</div><div class="dm-val g">${j.salary}</div></div>
      <div class="dm-cell"><div class="dm-lbl"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>Ubicación</div><div class="dm-val">${j.loc}</div></div>
      <div class="dm-cell"><div class="dm-lbl"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>Horario</div><div class="dm-val">${j.sched}</div></div>
      <div class="dm-cell"><div class="dm-lbl"><svg viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>Área</div><div class="dm-val">${j.cat}</div></div>
    </div>`;

  document.getElementById('detail-body').innerHTML = `
    <div class="det-body">
      <div class="det-main">
        <div class="det-sec"><div class="ds-head">Descripción del rol</div><p class="ds-text">${j.desc}</p></div>
        <div class="det-sec"><div class="ds-head">Perfil requerido</div><ul class="ds-list">${j.reqs.map(r => `<li><svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2l10 10-10 10L2 12z"/></svg>${r}</li>`).join('')}</ul></div>
      </div>
      <div class="det-side">
        <div class="side-card">
          <div class="sc-title"><svg viewBox="0 0 24 24"><polyline points="20 12 20 22 4 22 4 12"/><rect x="2" y="7" width="20" height="5"/><line x1="12" y1="22" x2="12" y2="7"/><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7z"/><path d="M12 7h4.5a2.5 2.5 0 000-5C13 2 12 7 12 7z"/></svg>Beneficios</div>
          ${j.bens.map(b => `<div class="ben-row"><div class="ben-dot"></div>${b}</div>`).join('')}
        </div>
        <div class="side-card" style="background:var(--navy);box-shadow:none">
          <div class="sc-title" style="color:var(--gold-ll)"><svg viewBox="0 0 24 24" style="stroke:var(--gold-ll)"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>Datos clave</div>
          <div class="ben-row" style="color:rgba(255,255,255,.75);border-color:rgba(255,255,255,.1)"><div class="ben-dot"></div>Modalidad: ${j.type}</div>
          <div class="ben-row" style="color:rgba(255,255,255,.75);border-color:rgba(255,255,255,.1)"><div class="ben-dot"></div>Nivel: ${j.level}</div>
          <div class="ben-row" style="color:rgba(255,255,255,.75);border-color:rgba(255,255,255,.1)"><div class="ben-dot"></div>Área: ${j.cat}</div>
        </div>
        <div class="btn-apply-wrap">
          <button class="btn-apply" onclick="openForm()">
            <svg viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4 12.5-12.5z"/></svg>
            Aplicar a esta posición
          </button>
        </div>
      </div>
    </div>`;

  showView('detail');
}

function filterCat(el, cat) {
  document.querySelectorAll('.cat-pill').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  activeCat = cat;
  applyFilters();
}
let activeCat = '';

function setFilter(el, val) {
  document.querySelectorAll('.ftag').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  activeFilter = val;
  applyFilters();
}
let activeFilter = 'Todos';

function applyFilters() {
  const q = (document.getElementById('searchInput').value || '').toLowerCase();
  renderGrid(JOBS.filter(j => {
    const mQ = !q || j.title.toLowerCase().includes(q) || j.dept.toLowerCase().includes(q) || j.cat.toLowerCase().includes(q);
    const mC = !activeCat || j.cat === activeCat;
    const mT = activeFilter === 'Todos' || j.type === activeFilter || (activeFilter === 'Remoto' && j.loc.toLowerCase().includes('híbrido'));
    return mQ && mC && mT;
  }));
}

/* ═══════════════════════════════════════════════
   FORM
═══════════════════════════════════════════════ */
function openForm() {
  if (currentJob) {
    document.getElementById('form-job-title').textContent = currentJob.title;
    document.getElementById('form-job-dept').textContent  = currentJob.dept;
    const s = SVG[currentJob.ico] || SVG.clipboard;
    document.getElementById('form-icon').innerHTML = s.replace('<svg', '<svg style="width:26px;height:26px"');
  }
  showView('form');
}

function submitForm() {
  const datos = new FormData();
  const fields = [
    ['nombres','inp-nombres'], ['apellidos','inp-apellidos'],
    ['fecha_nacimiento','inp-fecha'], ['curp','inp-curp'],
    ['genero','inp-genero'], ['estado_civil','inp-estado-civil'],
    ['correo','inp-correo'], ['telefono','inp-telefono'], ['ciudad','inp-ciudad'],
    ['nivel','inp-nivel'], ['institucion','inp-institucion'],
    ['carrera','inp-carrera'], ['anio','inp-anio'],
    ['exp_anios','inp-experiencia'], ['ultimo_puesto','inp-ultimo-puesto'],
    ['empresa','inp-empresa'], ['disponibilidad','inp-disponibilidad'],
    ['descripcion','inp-descripcion'],
  ];
  fields.forEach(([key, elId]) => {
    const el = document.getElementById(elId);
    datos.append(key, el ? el.value : '');
  });
  datos.append('puesto_vacante', currentJob ? currentJob.title : '');
  datos.append('vacante_id',     currentJob ? currentJob.id    : '');

  /* ── Enviar a PHP ──────────────────────────────────────────
     fetch('guardar_aspirante.php', { method: 'POST', body: datos })
       .then(r  => r.json())
       .then(data => {
         if (data.ok) document.getElementById('successOverlay').classList.add('show');
         else         alert('Error: ' + data.error);
       })
       .catch(() => alert('No se pudo conectar con el servidor.'));
  ─────────────────────────────────────────────────────────── */

  // Simulación sin PHP (remover cuando el backend esté listo)
  document.getElementById('successOverlay').classList.add('show');
}

function closeSuccess() {
  document.getElementById('successOverlay').classList.remove('show');
  showView('list');
}

/* ═══════════════════════════════════════════════
   ADMIN PANEL
═══════════════════════════════════════════════ */
function openAdmin() {
  renderAdmin();
  showView('admin');
}

function renderAdmin() {
  updateKPIs();
  renderAdminTable();
}

function updateKPIs() {
  const total    = SOLICITUDES.length;
  const pending  = SOLICITUDES.filter(s => s.estado === 'Pendiente').length;
  const review   = SOLICITUDES.filter(s => s.estado === 'En revisión').length;
  const interview= SOLICITUDES.filter(s => s.estado === 'Entrevista programada').length;
  const approved = SOLICITUDES.filter(s => s.estado === 'Aprobado').length;

  document.getElementById('kpi-total').textContent    = total;
  document.getElementById('kpi-pending').textContent  = pending;
  document.getElementById('kpi-review').textContent   = review;
  document.getElementById('kpi-interv').textContent   = interview;
  document.getElementById('kpi-approv').textContent   = approved;
}

function filterAdmin(el, status) {
  document.querySelectorAll('.stab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  adminFilterStatus = status;
  renderAdminTable();
}

function searchAdmin() {
  adminSearchQ = (document.getElementById('adminSearch').value || '').toLowerCase();
  renderAdminTable();
}

function renderAdminTable() {
  const tbody = document.getElementById('adminTableBody');
  const list  = SOLICITUDES.filter(s => {
    const mStatus = !adminFilterStatus || s.estado === adminFilterStatus;
    const q = adminSearchQ;
    const mQ = !q ||
      (s.nombres + ' ' + s.apellidos).toLowerCase().includes(q) ||
      s.puesto_vacante.toLowerCase().includes(q) ||
      s.correo.toLowerCase().includes(q) ||
      s.ciudad.toLowerCase().includes(q);
    return mStatus && mQ;
  });

  if (!list.length) {
    tbody.innerHTML = `<tr><td colspan="7">
      <div class="admin-empty">
        <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>
        <div class="admin-empty-title">Sin solicitudes</div>
        <div class="admin-empty-sub">No hay registros que coincidan con el filtro seleccionado.</div>
      </div>
    </td></tr>`;
    return;
  }

  tbody.innerHTML = list.map((s, idx) => `
    <tr>
      <td>${String(s.id).padStart(3, '0')}</td>
      <td>
        <div class="td-candidate">
          <div class="td-avatar">${initials(s.nombres, s.apellidos)}</div>
          <div>
            <div class="td-name">${s.nombres} ${s.apellidos}</div>
            <div class="td-email">${s.correo}</div>
          </div>
        </div>
      </td>
      <td>
        <div class="td-vacancy">${s.puesto_vacante}</div>
        <div class="td-dept">${s.ciudad}</div>
      </td>
      <td class="td-date">${formatDate(s.fecha_solicitud)}</td>
      <td class="td-exp">${s.exp_anios}</td>
      <td>${badgeHTML(s.estado)}</td>
      <td>
        <div class="td-actions">
          <button class="btn-view" onclick="openDetailModal(${s.id})">
            <svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
            Ver
          </button>
        </div>
      </td>
    </tr>`).join('');
}

/* ── Detail Modal ── */
function openDetailModal(solicitudId) {
  const s = SOLICITUDES.find(x => x.id === solicitudId);
  if (!s) return;

  document.getElementById('modal-content').innerHTML = `
    <div class="modal-header">
      <div>
        <div class="modal-header-title">${s.nombres} ${s.apellidos}</div>
        <div class="modal-header-sub">${s.puesto_vacante} · Solicitud #${String(s.id).padStart(3,'0')}</div>
      </div>
      <button class="modal-close" onclick="closeModal()">
        <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>

    <div class="modal-body">

      <!-- Estado actual -->
      <div class="modal-section">
        <div class="modal-sec-title">
          <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          Estado de la solicitud
        </div>
        <div class="modal-status-row">
          <span class="msr-label">Estado actual: ${badgeHTML(s.estado)}</span>
          <select class="msr-select" id="modal-status-sel">
            ${Object.keys(statusConfig).map(k => `<option value="${k}" ${k === s.estado ? 'selected' : ''}>${k}</option>`).join('')}
          </select>
          <button class="btn-save-status" onclick="saveStatus(${s.id})">Guardar</button>
        </div>
      </div>

      <!-- Datos personales -->
      <div class="modal-section">
        <div class="modal-sec-title">
          <svg viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          Datos personales
        </div>
        <div class="modal-grid">
          <div class="modal-field"><div class="modal-field-lbl">Nombre completo</div><div class="modal-field-val">${s.nombres} ${s.apellidos}</div></div>
          <div class="modal-field"><div class="modal-field-lbl">Fecha de nacimiento</div><div class="modal-field-val">${formatDate(s.fecha_nacimiento)}</div></div>
          <div class="modal-field"><div class="modal-field-lbl">CURP</div><div class="modal-field-val">${s.curp || '—'}</div></div>
          <div class="modal-field"><div class="modal-field-lbl">Género</div><div class="modal-field-val">${s.genero}</div></div>
          <div class="modal-field"><div class="modal-field-lbl">Estado civil</div><div class="modal-field-val">${s.estado_civil}</div></div>
          <div class="modal-field"><div class="modal-field-lbl">Ciudad</div><div class="modal-field-val">${s.ciudad}</div></div>
        </div>
      </div>

      <!-- Contacto -->
      <div class="modal-section">
        <div class="modal-sec-title">
          <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22 6 12 13 2 6"/></svg>
          Contacto
        </div>
        <div class="modal-grid">
          <div class="modal-field"><div class="modal-field-lbl">Correo</div><div class="modal-field-val">${s.correo}</div></div>
          <div class="modal-field"><div class="modal-field-lbl">Teléfono</div><div class="modal-field-val">${s.telefono}</div></div>
        </div>
      </div>

      <!-- Formación -->
      <div class="modal-section">
        <div class="modal-sec-title">
          <svg viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
          Formación académica
        </div>
        <div class="modal-grid">
          <div class="modal-field"><div class="modal-field-lbl">Nivel</div><div class="modal-field-val">${s.nivel}</div></div>
          <div class="modal-field"><div class="modal-field-lbl">Institución</div><div class="modal-field-val">${s.institucion}</div></div>
          <div class="modal-field"><div class="modal-field-lbl">Carrera</div><div class="modal-field-val">${s.carrera}</div></div>
          <div class="modal-field"><div class="modal-field-lbl">Año de graduación</div><div class="modal-field-val">${s.anio}</div></div>
        </div>
      </div>

      <!-- Experiencia -->
      <div class="modal-section">
        <div class="modal-sec-title">
          <svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>
          Experiencia laboral
        </div>
        <div class="modal-grid">
          <div class="modal-field"><div class="modal-field-lbl">Años de experiencia</div><div class="modal-field-val">${s.exp_anios}</div></div>
          <div class="modal-field"><div class="modal-field-lbl">Disponibilidad</div><div class="modal-field-val">${s.disponibilidad}</div></div>
          <div class="modal-field"><div class="modal-field-lbl">Último puesto</div><div class="modal-field-val">${s.ultimo_puesto}</div></div>
          <div class="modal-field"><div class="modal-field-lbl">Última empresa</div><div class="modal-field-val">${s.empresa}</div></div>
        </div>
        <div style="margin-top:12px">
          <div class="modal-field-lbl" style="margin-bottom:6px">Descripción de experiencia</div>
          <div class="modal-desc-box">${s.descripcion}</div>
        </div>
      </div>

      <!-- Vacante -->
      <div class="modal-section">
        <div class="modal-sec-title">
          <svg viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/></svg>
          Vacante solicitada
        </div>
        <div class="modal-grid">
          <div class="modal-field"><div class="modal-field-lbl">Posición</div><div class="modal-field-val">${s.puesto_vacante}</div></div>
          <div class="modal-field"><div class="modal-field-lbl">Fecha de solicitud</div><div class="modal-field-val">${formatDate(s.fecha_solicitud)}</div></div>
        </div>
      </div>

    </div>`;

  document.getElementById('detailModal').classList.add('show');
}

function closeModal() {
  document.getElementById('detailModal').classList.remove('show');
}

function saveStatus(solicitudId) {
  const sel      = document.getElementById('modal-status-sel');
  const newStatus = sel.value;
  const idx      = SOLICITUDES.findIndex(s => s.id === solicitudId);
  if (idx === -1) return;

  /* En producción: fetch para actualizar en BD
     fetch('actualizar_estado.php', {
       method: 'POST',
       body: JSON.stringify({ id: solicitudId, estado: newStatus }),
       headers: { 'Content-Type': 'application/json' }
     }).then(...) */

  SOLICITUDES[idx].estado = newStatus;
  closeModal();
  renderAdmin();
}

/* ═══════════════════════════════════════════════
   INIT
═══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  renderGrid(JOBS);
});

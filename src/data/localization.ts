import { resumeData, type SkillGroupData } from './resume'

export type Locale = 'pt' | 'en' | 'es'

export const localeOptions: Array<{ code: Locale; label: string; icon: string }> = [
  { code: 'en', label: 'English', icon: '/flags/language-en.png' },
  { code: 'es', label: 'Español', icon: '/flags/language-es.png' },
  { code: 'pt', label: 'Português', icon: '/flags/language-pt.png' },
]

export const interfaceCopy = {
  pt: {
    home: 'Voltar ao início',
    sections: 'Seções do currículo',
    professionalNetworks: 'Redes profissionais',
    lightMode: 'Ativar modo claro',
    darkMode: 'Ativar modo escuro',
    language: 'Idioma do portfólio',
    backToTop: 'Voltar ao topo',
    summary: 'Resumo profissional',
    skills: 'Competências técnicas',
    experience: 'Experiência profissional',
    projects: 'Projetos',
    education: 'Formação acadêmica',
    languages: 'Idiomas',
    projectLabels: {
      overview: 'Visão do projeto',
      stack: 'Stack principal',
      differentiators: 'Diferenciais implementados',
    },
    sectionLabels: ['Resumo', 'Experiência', 'Formação', 'Projetos', 'Competências'],
  },
  en: {
    home: 'Back to home',
    sections: 'Resume sections',
    professionalNetworks: 'Professional networks',
    lightMode: 'Activate light mode',
    darkMode: 'Activate dark mode',
    language: 'Portfolio language',
    backToTop: 'Back to top',
    summary: 'Professional summary',
    skills: 'Technical skills',
    experience: 'Professional experience',
    projects: 'Projects',
    education: 'Education',
    languages: 'Languages',
    projectLabels: {
      overview: 'Project overview',
      stack: 'Main stack',
      differentiators: 'Implemented differentiators',
    },
    sectionLabels: ['Summary', 'Experience', 'Education', 'Projects', 'Skills'],
  },
  es: {
    home: 'Volver al inicio',
    sections: 'Secciones del currículum',
    professionalNetworks: 'Redes profesionales',
    lightMode: 'Activar modo claro',
    darkMode: 'Activar modo oscuro',
    language: 'Idioma del portafolio',
    backToTop: 'Volver arriba',
    summary: 'Resumen profesional',
    skills: 'Competencias técnicas',
    experience: 'Experiencia profesional',
    projects: 'Proyectos',
    education: 'Formación académica',
    languages: 'Idiomas',
    projectLabels: {
      overview: 'Visión del proyecto',
      stack: 'Stack principal',
      differentiators: 'Diferenciadores implementados',
    },
    sectionLabels: ['Resumen', 'Experiencia', 'Formación', 'Proyectos', 'Competencias'],
  },
} as const

const translatedSkills: Record<Exclude<Locale, 'pt'>, SkillGroupData[]> = {
  en: [
    {
      title: 'Front-end',
      items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Vite', 'HTML5', 'CSS3', 'Tailwind CSS'],
    },
    {
      title: 'Back-end and architecture',
      items: ['Node.js', 'Express', 'Next.js App Router'],
    },
    {
      title: 'Databases',
      items: ['PostgreSQL', 'Neon', 'Prisma'],
    },
    {
      title: 'AI-assisted software engineering',
      items: [
        'Context engineering',
        'Prompt engineering',
        'Agent orchestration',
        'Superpowers',
        'SDD',
      ],
    },
  ],
  es: [
    {
      title: 'Front-end',
      items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Vite', 'HTML5', 'CSS3', 'Tailwind CSS'],
    },
    {
      title: 'Back-end y arquitectura',
      items: ['Node.js', 'Express', 'Next.js App Router'],
    },
    {
      title: 'Bases de datos',
      items: ['PostgreSQL', 'Neon', 'Prisma'],
    },
    {
      title: 'Ingeniería de software asistida por IA',
      items: [
        'Ingeniería de contexto',
        'Prompt engineering',
        'Orquestación de agentes',
        'Superpowers',
        'SDD',
      ],
    },
  ],
}

export function getLocalizedResumeData(locale: Locale) {
  if (locale === 'pt') return resumeData

  if (locale === 'en') {
    return {
      ...resumeData,
      title: 'Full Stack Developer | TypeScript | React | Next.js | Node.js | PostgreSQL | AI-assisted Software Engineering',
      location: 'São Paulo, Brazil',
      summary:
        'Full Stack Developer transitioning into software development, currently pursuing a degree in Systems Analysis and Development. I build responsive web applications and APIs with experience in authentication, authorization, permission management, multi-tenant architecture, relational modeling, and automated testing. My previous technical support experience strengthened my ability to investigate issues, validate workflows, and turn user needs into product improvements.',
      aiSummary:
        'I use artificial intelligence as structured support for the software engineering process, including context engineering, specification-driven development, specialized agents, workflow automation, critical code review, and validation through tests and evidence.',
      sections: resumeData.sections.map((section, index) => ({ ...section, label: interfaceCopy.en.sectionLabels[index] })),
      skills: translatedSkills.en,
      projects: [
        {
          ...resumeData.projects[0],
          description:
            'Full-stack operational management system for restaurants and pizzerias, with a multi-tenant architecture for tables, menus, orders, payments, inventory, and recipe management.',
          technologySummary:
            'Built with TypeScript, React, and Next.js, using Server Actions and SSE on the back end, PostgreSQL hosted on Neon with Drizzle ORM, and tested with Vitest, Testing Library, and Playwright.',
          highlights: [
            'Multi-tenant isolation with referential integrity through tenant_id.',
            'Custom authentication, HTTP-only sessions, and role-based permissions.',
            'Workflows for administration, waiters, kitchen staff, and cashiers.',
            'Ingredient management, minimum stock levels, auditable movements, and recipe management.',
            'Inventory deduction linked to orders, with idempotency and history preservation.',
            'Kitchen Kanban and real-time operational updates with SSE and polling.',
            'Business rules for tabs, item cancellation, payments, and historical pricing.',
            'Unit, integration, and end-to-end testing.',
          ],
        },
      ],
      experiences: [
        {
          ...resumeData.experiences[0],
          role: 'Technical Support Analyst',
          company: 'Hospital Israelita Albert Einstein — Escala.app',
          period: 'July 2021 — January 2025',
          highlights: [
            'Supported users of a workforce scheduling platform used in hospital operations.',
            'Investigated customer-reported issues by reproducing scenarios and collecting evidence for the development team.',
            'Identified, documented, and tracked bugs with technical teams.',
            'Performed manual testing and validated features before and after releases.',
            'Created and organized a Help Center that helped reduce after-hours requests by more than 80%.',
            'Helped maintain customer satisfaction scores above 90%.',
            'Translated operational needs into actionable information for product and technology teams.',
            'Tracked metrics, participated in improvement meetings, and developed practical knowledge of business rules, root-cause analysis, and user experience.',
          ],
        },
      ],
      education: [
        {
          ...resumeData.education[0],
          course: 'Systems Analysis and Development',
          institution: 'Anhembi Morumbi University',
          period: 'Started: July 2025 — Expected graduation: January 2028',
        },
      ],
      languages: [
        { name: 'English', level: 'Advanced — reading, writing, and conversation' },
        { name: 'Spanish', level: 'Intermediate — reading, writing, and conversation' },
      ],
    } as typeof resumeData
  }

  return {
    ...resumeData,
    title: 'Desarrollador Full Stack | TypeScript | React | Next.js | Node.js | PostgreSQL | Ingeniería de Software con IA',
    location: 'São Paulo, Brasil',
    summary:
      'Desarrollador Full Stack en transición hacia el desarrollo de software, actualmente cursando Análisis y Desarrollo de Sistemas. Desarrollo aplicaciones web responsivas y APIs con experiencia en autenticación, autorización, control de permisos, arquitectura multi-tenant, modelado relacional y pruebas automatizadas. Mi experiencia previa en soporte técnico fortaleció mi capacidad para investigar problemas, validar flujos y transformar las necesidades de los usuarios en mejoras de producto.',
    aiSummary:
      'Utilizo la inteligencia artificial como apoyo estructurado al proceso de ingeniería de software, incluyendo ingeniería de contexto, desarrollo orientado por especificaciones, agentes especializados, automatización de workflows, revisión crítica de código y validación mediante pruebas y evidencias.',
    sections: resumeData.sections.map((section, index) => ({ ...section, label: interfaceCopy.es.sectionLabels[index] })),
    skills: translatedSkills.es,
    projects: [
      {
        ...resumeData.projects[0],
        description:
          'Sistema full-stack de gestión operativa para restaurantes y pizzerías, con arquitectura multi-tenant para mesas, menús, pedidos, pagos, inventario y fichas técnicas.',
        technologySummary:
          'Desarrollado con TypeScript, React y Next.js, utilizando Server Actions y SSE en el back end, PostgreSQL alojado en Neon con Drizzle ORM y pruebas con Vitest, Testing Library y Playwright.',
        highlights: [
          'Aislamiento multi-tenant con integridad referencial mediante tenant_id.',
          'Autenticación propia, sesiones HTTP-only y permisos por rol.',
          'Flujos para administración, camareros, cocina y caja.',
          'Gestión de insumos, stock mínimo, movimientos auditables y fichas técnicas.',
          'Descuento de inventario vinculado a pedidos, con idempotencia y preservación del historial.',
          'Kanban de cocina y actualizaciones operativas en tiempo real con SSE y polling.',
          'Reglas de negocio para comandas, cancelación de artículos, pagos y precio histórico.',
          'Pruebas unitarias, de integración y end-to-end.',
        ],
      },
    ],
    experiences: [
      {
        ...resumeData.experiences[0],
        role: 'Analista de Soporte Técnico',
        company: 'Hospital Israelita Albert Einstein — Escala.app',
        period: 'Julio de 2021 — Enero de 2025',
        highlights: [
          'Presté soporte a los usuarios de una plataforma de gestión de turnos utilizada en operaciones hospitalarias.',
          'Investigué problemas reportados por clientes, reproduciendo escenarios y recopilando evidencias para el equipo de desarrollo.',
          'Identifiqué, documenté y acompañé bugs junto a los equipos técnicos.',
          'Realicé pruebas manuales y validé funcionalidades antes y después de los lanzamientos.',
          'Creé y organicé un Centro de Ayuda que contribuyó a reducir en más del 80% las solicitudes fuera del horario comercial.',
          'Contribuí al mantenimiento de índices de satisfacción de clientes superiores al 90%.',
          'Transformé necesidades operativas en información accionable para los equipos de producto y tecnología.',
          'Acompañé métricas, participé en reuniones de mejora y desarrollé conocimientos prácticos sobre reglas de negocio, causa raíz y experiencia del usuario.',
        ],
      },
    ],
    education: [
      {
        ...resumeData.education[0],
        course: 'Análisis y Desarrollo de Sistemas',
        institution: 'Universidade Anhembi Morumbi',
        period: 'Inicio: julio de 2025 — Conclusión prevista: enero de 2028',
      },
    ],
    languages: [
      { name: 'Inglés', level: 'Avanzado — lectura, escritura y conversación' },
      { name: 'Español', level: 'Intermedio — lectura, escritura y conversación' },
    ],
  } as typeof resumeData
}


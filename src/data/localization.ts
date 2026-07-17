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
    sectionLabels: ['Resumo', 'Competências', 'Experiência', 'Projetos', 'Formação'],
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
    sectionLabels: ['Summary', 'Skills', 'Experience', 'Projects', 'Education'],
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
    sectionLabels: ['Resumen', 'Competencias', 'Experiencia', 'Proyectos', 'Formación'],
  },
} as const

const translatedSkills: Record<Exclude<Locale, 'pt'>, SkillGroupData[]> = {
  en: [
    {
      title: 'Front-end',
      items: [...resumeData.skills[0].items.slice(0, 13), 'Responsive design', 'Mobile-first', 'Accessibility and WCAG'],
    },
    {
      title: 'Back-end and architecture',
      items: [
        ...resumeData.skills[1].items.slice(0, 7),
        'Authentication and authorization',
        'HTTP-only sessions',
        'Role-based access control',
        'Multi-tenant architecture',
        'Separation of concerns',
      ],
    },
    {
      title: 'Databases and ORMs',
      items: [...resumeData.skills[2].items.slice(0, 7), 'Relational modeling', 'Migrations and seeds'],
    },
    {
      title: 'Testing and quality',
      items: [
        ...resumeData.skills[3].items.slice(0, 3),
        'Unit testing',
        'Integration testing',
        'End-to-end testing',
        ...resumeData.skills[3].items.slice(7),
      ],
    },
    {
      title: 'AI-assisted software engineering',
      items: [
        'Context engineering',
        'Prompt engineering',
        'Agent orchestration',
        'Specialized sub-agents',
        'Agent Teams',
        'Multi-agent workflows',
        'Reusable skills',
        'Superpowers',
        'Model Context Protocol',
        'Engram',
        'Persistent memory',
        'Spec-Driven Development',
        'Human-in-the-loop',
        'Automated code review',
        'Systematic debugging',
        'RED, GREEN, and REFACTOR cycle',
      ],
    },
  ],
  es: [
    {
      title: 'Front-end',
      items: [...resumeData.skills[0].items.slice(0, 13), 'Diseño responsivo', 'Mobile-first', 'Accesibilidad y WCAG'],
    },
    {
      title: 'Back-end y arquitectura',
      items: [
        ...resumeData.skills[1].items.slice(0, 7),
        'Autenticación y autorización',
        'Sesiones HTTP-only',
        'Control de acceso basado en roles',
        'Arquitectura multi-tenant',
        'Separación de responsabilidades',
      ],
    },
    {
      title: 'Bases de datos y ORMs',
      items: [...resumeData.skills[2].items.slice(0, 7), 'Modelado relacional', 'Migraciones y seeds'],
    },
    {
      title: 'Pruebas y calidad',
      items: [
        ...resumeData.skills[3].items.slice(0, 3),
        'Pruebas unitarias',
        'Pruebas de integración',
        'Pruebas end-to-end',
        ...resumeData.skills[3].items.slice(7),
      ],
    },
    {
      title: 'Ingeniería de software asistida por IA',
      items: [
        'Ingeniería de contexto',
        'Prompt engineering',
        'Orquestación de agentes',
        'Subagentes especializados',
        'Agent Teams',
        'Workflows multiagente',
        'Skills reutilizables',
        'Superpowers',
        'Model Context Protocol',
        'Engram',
        'Memoria persistente',
        'Spec-Driven Development',
        'Human-in-the-loop',
        'Revisión de código automatizada',
        'Debugging sistemático',
        'Ciclo RED, GREEN y REFACTOR',
      ],
    },
  ],
}

export function getLocalizedResumeData(locale: Locale) {
  if (locale === 'pt') return resumeData

  if (locale === 'en') {
    return {
      ...resumeData,
      title: 'Junior Full Stack Developer | TypeScript | React | Next.js | Node.js | PostgreSQL | AI-assisted Software Engineering',
      location: 'São Paulo, Brazil',
      summary:
        'Junior Full Stack Developer transitioning into software development, currently pursuing a degree in Systems Analysis and Development. I build responsive web applications and APIs with experience in authentication, authorization, permission management, multi-tenant architecture, relational modeling, and automated testing. My previous technical support experience strengthened my ability to investigate issues, validate workflows, and turn user needs into product improvements.',
      aiSummary:
        'I use artificial intelligence as structured support for the software engineering process, including context engineering, specification-driven development, specialized agents, workflow automation, critical code review, and validation through tests and evidence.',
      sections: resumeData.sections.map((section, index) => ({ ...section, label: interfaceCopy.en.sectionLabels[index] })),
      skills: translatedSkills.en,
      projects: [
        {
          ...resumeData.projects[0],
          description:
            'Full stack operational management system for restaurants and pizzerias, with multi-tenant workflows for users, tables, products, orders, payments, and reports.',
          highlights: [
            'Multi-tenant architecture to isolate each establishment’s data.',
            'Custom authentication, secure sessions, and role-based permission control.',
            'Dedicated workflows for owners, administrators, waiters, kitchen staff, and cashiers.',
            'Kanban dashboard for kitchen order tracking.',
            'Order updates using Server-Sent Events, Socket.IO, and polling.',
            'Business rules for tabs, item cancellation, totals, and historical price preservation.',
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
    title: 'Desarrollador Full Stack Jr | TypeScript | React | Next.js | Node.js | PostgreSQL | Ingeniería de Software con IA',
    location: 'São Paulo, Brasil',
    summary:
      'Desarrollador Full Stack Junior en transición hacia el desarrollo de software, actualmente cursando Análisis y Desarrollo de Sistemas. Desarrollo aplicaciones web responsivas y APIs con experiencia en autenticación, autorización, control de permisos, arquitectura multi-tenant, modelado relacional y pruebas automatizadas. Mi experiencia previa en soporte técnico fortaleció mi capacidad para investigar problemas, validar flujos y transformar las necesidades de los usuarios en mejoras de producto.',
    aiSummary:
      'Utilizo la inteligencia artificial como apoyo estructurado al proceso de ingeniería de software, incluyendo ingeniería de contexto, desarrollo orientado por especificaciones, agentes especializados, automatización de workflows, revisión crítica de código y validación mediante pruebas y evidencias.',
    sections: resumeData.sections.map((section, index) => ({ ...section, label: interfaceCopy.es.sectionLabels[index] })),
    skills: translatedSkills.es,
    projects: [
      {
        ...resumeData.projects[0],
        description:
          'Sistema full stack de gestión operativa para restaurantes y pizzerías, con flujos multi-tenant para usuarios, mesas, productos, pedidos, pagos e informes.',
        highlights: [
          'Arquitectura multi-tenant para aislar los datos de cada establecimiento.',
          'Autenticación propia, sesiones seguras y control de permisos por roles.',
          'Flujos específicos para propietarios, administradores, camareros, cocina y caja.',
          'Dashboard Kanban para el seguimiento de pedidos en la cocina.',
          'Actualizaciones de pedidos mediante Server-Sent Events, Socket.IO y polling.',
          'Reglas de negocio para comandas, cancelación de artículos, totales y conservación del precio histórico.',
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

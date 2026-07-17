export type ResumeLink = {
  label: string
  href: string
  kind: 'github' | 'linkedin'
  variant: 'secondary'
  external?: boolean
  trackType: string
  section?: string
  ariaLabel?: string
}

export type SkillGroupData = {
  title: string
  items: string[]
}

export type Project = {
  name: string
  description: string
  technologies: string[]
  highlights: string[]
  repoUrl?: string
  deployUrl?: string
}

export type Experience = {
  role: string
  company: string
  period: string
  highlights: string[]
}

export type Education = {
  course: string
  institution: string
  period: string
}

export type Language = {
  name: string
  level: string
}

export const resumeData = {
  name: 'Guilherme Faccioli Crescencio',
  title:
    'Desenvolvedor Full Stack Jr | TypeScript | React | Next.js | Node.js | PostgreSQL | Engenharia de Software com IA',
  location: 'São Paulo, SP',
  phone: '(11) 95269-5934',
  email: 'guifacciolic@gmail.com',
  summary:
    'Desenvolvedor Full Stack Júnior em transição de carreira para desenvolvimento de software, cursando Análise e Desenvolvimento de Sistemas. Desenvolvo aplicações web responsivas e APIs, com experiência em autenticação, autorização, controle de permissões, arquitetura multi-tenant, modelagem relacional e testes automatizados. Minha experiência anterior em suporte técnico fortaleceu minha capacidade de investigar problemas, validar fluxos e transformar necessidades de usuários em melhorias de produto.',
  aiSummary:
    'Utilizo inteligência artificial como apoio estruturado ao processo de engenharia de software, incluindo engenharia de contexto, desenvolvimento orientado por especificações, agentes especializados, automação de workflows, revisão crítica de código e validação por testes e evidências.',
  links: [
    {
      label: 'GitHub',
      href: 'https://github.com/GuiFaccioli',
      kind: 'github',
      variant: 'secondary',
      external: true,
      trackType: 'github',
      section: 'header',
      ariaLabel: 'Abrir o GitHub de Guilherme Faccioli em nova aba',
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/guilherme-faccioli-b8a46611a',
      kind: 'linkedin',
      variant: 'secondary',
      external: true,
      trackType: 'linkedin',
      section: 'header',
      ariaLabel: 'Abrir o LinkedIn de Guilherme Faccioli em nova aba',
    },
  ] as ResumeLink[],
  sections: [
    { label: 'Resumo', href: '#resumo' },
    { label: 'Competências', href: '#competencias' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Projetos', href: '#projetos' },
    { label: 'Formação', href: '#formacao' },
  ],
  skills: [
    {
      title: 'Front-end',
      items: [
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'Vite',
        'HTML5',
        'CSS3',
        'Tailwind CSS',
        'shadcn/ui',
        'Radix UI',
        'React Hook Form',
        'Zod',
        'Zustand',
        'Design responsivo',
        'Mobile-first',
        'Acessibilidade e WCAG',
      ],
    },
    {
      title: 'Back-end e arquitetura',
      items: [
        'Node.js',
        'Express',
        'Next.js App Router',
        'Server Actions',
        'APIs REST',
        'APIs Serverless',
        'Server-Sent Events',
        'Socket.IO',
        'Autenticação e autorização',
        'Sessões HTTP-only',
        'Controle de acesso baseado em papéis',
        'Arquitetura multi-tenant',
        'Separação de responsabilidades',
      ],
    },
    {
      title: 'Bancos de dados e ORMs',
      items: [
        'PostgreSQL',
        'Neon PostgreSQL',
        'MySQL',
        'SQLite',
        'Prisma',
        'Drizzle ORM',
        'better-sqlite3',
        'Modelagem relacional',
        'Migrações e seeds',
      ],
    },
    {
      title: 'Testes e qualidade',
      items: [
        'Vitest',
        'Testing Library',
        'Playwright',
        'Testes unitários',
        'Testes de integração',
        'Testes end-to-end',
        'TDD',
        'ESLint',
        'TypeScript Strict Mode',
        'Git',
        'GitHub',
        'Conventional Commits',
      ],
    },
    {
      title: 'Engenharia de software assistida por IA',
      items: [
        'Engenharia de contexto',
        'Prompt engineering',
        'Orquestração de agentes',
        'Subagentes especializados',
        'Agent Teams',
        'Workflows multiagente',
        'Skills reutilizáveis',
        'Superpowers',
        'Model Context Protocol',
        'Engram',
        'Memória persistente',
        'Spec-Driven Development',
        'Human-in-the-loop',
        'Code review automatizado',
        'Debugging sistemático',
        'Ciclo RED, GREEN e REFACTOR',
      ],
    },
  ] as SkillGroupData[],
  projects: [
    {
      name: 'Restaurante Comandas',
      description:
        'Sistema full stack de gestão operacional para restaurantes e pizzarias, com fluxos multi-tenant para usuários, mesas, produtos, pedidos, pagamentos e relatórios.',
      technologies: [
        'TypeScript',
        'React',
        'Next.js',
        'Node.js',
        'PostgreSQL',
        'Neon',
        'Drizzle ORM',
        'Prisma',
        'SQLite',
        'Server Actions',
        'SSE',
        'Socket.IO',
        'Vitest',
        'Testing Library',
        'Playwright',
      ],
      highlights: [
        'Arquitetura multi-tenant para isolamento dos dados de cada estabelecimento.',
        'Autenticação própria, sessões seguras e controle de permissões por perfil.',
        'Fluxos específicos para proprietário, administrador, garçom, cozinha e caixa.',
        'Dashboard Kanban para acompanhamento dos pedidos pela cozinha.',
        'Atualizações de pedidos com Server-Sent Events, Socket.IO e polling.',
        'Regras para comandas, cancelamento de itens, totais e preservação de preço histórico.',
        'Testes unitários, de integração e end-to-end.',
      ],
    },
  ] as Project[],
  experiences: [
    {
      role: 'Analista de Suporte Técnico',
      company: 'Hospital Israelita Albert Einstein — Escala.app',
      period: 'Julho de 2021 — Janeiro de 2025',
      highlights: [
        'Prestei suporte aos usuários de uma plataforma de gestão de escalas utilizada em operações hospitalares.',
        'Analisei problemas relatados por clientes, reproduzindo cenários e coletando evidências para apoiar a equipe de desenvolvimento.',
        'Identifiquei, documentei e acompanhei bugs junto às equipes técnicas.',
        'Realizei testes manuais e validei funcionalidades antes e depois de publicações.',
        'Criei e organizei uma Central de Ajuda que contribuiu para reduzir em mais de 80% os chamados realizados fora do horário comercial.',
        'Contribuí para a manutenção de índices de satisfação dos clientes superiores a 90%.',
        'Traduzi relatos e necessidades operacionais em informações acionáveis para produto e tecnologia.',
        'Acompanhei métricas, participei de reuniões de melhoria e desenvolvi conhecimento em regras de negócio, causa raiz e experiência do usuário.',
      ],
    },
  ] as Experience[],
  education: [
    {
      course: 'Tecnologia em Análise e Desenvolvimento de Sistemas',
      institution: 'Universidade Anhembi Morumbi',
      period: 'Início: Julho de 2025 — Previsão de conclusão: Janeiro de 2028',
    },
  ] as Education[],
  languages: [{ name: 'Inglês', level: 'Avançado — leitura, escrita e conversação' }] as Language[],
}

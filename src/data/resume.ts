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
  technologySummary?: string
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
  name: 'Guilherme Faccioli',
  title:
    'Desenvolvedor Full Stack | TypeScript | React | Next.js | Node.js | PostgreSQL | Engenharia de Software com IA',
  location: 'São Paulo, SP',
  phone: '(11) 95269-5934',
  email: 'guifacciolic@gmail.com',
  summary:
    'Desenvolvedor Full Stack em transição de carreira para desenvolvimento de software, cursando Análise e Desenvolvimento de Sistemas. Desenvolvo aplicações web responsivas e APIs, com experiência em autenticação, autorização, controle de permissões, arquitetura multi-tenant, modelagem relacional e testes automatizados. Minha experiência anterior em suporte técnico fortaleceu minha capacidade de investigar problemas, validar fluxos e transformar necessidades de usuários em melhorias de produto.',
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
      items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Vite', 'HTML5', 'CSS3', 'Tailwind CSS'],
    },
    {
      title: 'Back-end e arquitetura',
      items: ['Node.js', 'Express', 'Next.js App Router'],
    },
    {
      title: 'Bancos de dados',
      items: ['PostgreSQL', 'Neon', 'Prisma'],
    },
    {
      title: 'Engenharia de software assistida por IA',
      items: ['Engenharia de contexto', 'Prompt engineering', 'Orquestração de agentes', 'Superpowers', 'SDD'],
    },
  ] as SkillGroupData[],
  projects: [
    {
      name: 'Restaurante Comandas',
      description:
        'Sistema full-stack para gestão operacional de restaurantes e pizzarias, com arquitetura multi-tenant para mesas, cardápio, pedidos, pagamentos, estoque e ficha técnica.',
      technologies: [
        'TypeScript',
        'React',
        'Next.js',
        'Node.js',
        'PostgreSQL',
        'Neon',
        'Drizzle ORM',
        'Server Actions',
        'SSE',
        'Vitest',
        'Testing Library',
        'Playwright',
      ],
      technologySummary:
        'Desenvolvido com TypeScript, React e Next.js, utilizando Server Actions e SSE no back-end, PostgreSQL hospedado no Neon com Drizzle ORM e testes com Vitest, Testing Library e Playwright.',
      deployUrl: 'https://restaurante-comandas.vercel.app/',
      highlights: [
        'Isolamento multi-tenant com integridade referencial por tenant_id.',
        'Autenticação própria, sessões HTTP-only e permissões por perfil.',
        'Fluxos para administração, garçom, cozinha e caixa.',
        'Gestão de insumos, estoque mínimo, movimentações auditáveis e fichas técnicas.',
        'Baixa de estoque vinculada aos pedidos, com idempotência e preservação de histórico.',
        'Kanban da cozinha e atualizações operacionais em tempo real com SSE e polling.',
        'Regras de comandas, cancelamento de itens, pagamentos e preço histórico.',
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
      period: 'Início: Julho de 2025 — Previsão de conclusão: Setembro de 2027',
    },
  ] as Education[],
  languages: [
    { name: 'Inglês', level: 'Avançado — leitura, escrita e conversação' },
    { name: 'Espanhol', level: 'Intermediário — leitura, escrita e conversação' },
  ] as Language[],
}


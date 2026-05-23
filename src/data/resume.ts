export type ResumeLink = {
  label: string
  href: string
}

export type SkillGroupData = {
  title: string
  items: string[]
}

export type Project = {
  name: string
  description: string
  technologies: string[]
  highlights?: string[]
  link?: string
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

export type Certification = {
  name: string
  issuer: string
  issued: string
  credentialId?: string
  link?: string
}

export type Language = {
  name: string
  level: string
}

export const resumeData = {
  name: 'Guilherme Faccioli',
  title: 'Desenvolvedor Web',
  subtitle:
    'Construo aplicações web com JavaScript, Node.js, React e MySQL, conectando frontend, backend e banco de dados para resolver problemas reais.',
  heroIntro:
    'Tenho experiência anterior em suporte técnico e operação imobiliária, o que me ajuda a entender dores de usuários, processos e regras de negócio antes de transformar isso em sistema.',
  links: [
    { label: 'GitHub', href: 'https://github.com/GuiFaccioli' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/guilherme-faccioli-b8a46611a/',
    },
    { label: 'E-mail', href: 'mailto:guifacciolic@gmail.com' },
  ] as ResumeLink[],
  about:
    'Sou estudante de Análise e Desenvolvimento de Sistemas na Universidade Anhembi Morumbi. Venho construindo projetos práticos para consolidar conhecimentos em JavaScript, Node.js, Express, React, MySQL e APIs REST.\n\nMinha experiência anterior em suporte técnico e gestão de processos imobiliários me trouxe uma base forte em investigação de problemas, atendimento a usuários, análise de erros, testes e organização de fluxos operacionais. Hoje busco aplicar essa experiência na construção de sistemas web úteis, organizados e próximos de problemas reais.',
  skills: [
    {
      title: 'Frontend',
      items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React','APIs REST'],
    },
    {
      title: 'Backend',
      items: [
  'Node.js',
  'Express',
  'MySQL',
  'APIs REST',
  'Autenticação com bcrypt',
  'Integração frontend/backend',
],
    },
    {
      title: 'Ferramentas',
      items: ['Git', 'GitHub', 'VS Code', 'Insomnia/Postman', 'MySQL Workbench', 'Vite'],
    },
    {
      title: 'Conceitos',
      items: [
        'CRUD',
        'Validação de formulários',
        'Consumo de API',
        'Banco de dados relacional',
        'Organização de código',
        'Importação de dados',
      ],
    },
  ] as SkillGroupData[],
  projects: [
    {
      name: 'ImobCheck',
      description:
        'Sistema de gestão para imobiliárias criado para centralizar informações de proprietários, imóveis, inquilinos, contratos e importações.\n\nO projeto nasceu a partir de dores reais de uma operação imobiliária, como uso de planilhas, dados descentralizados, retrabalho e dificuldade de acompanhar vínculos entre pessoas, imóveis e contratos.\n\nDesenvolvido com JavaScript, Node.js, Express e MySQL, o sistema possui importação de planilhas, cadastro de proprietários, dados cadastrais e bancários, páginas individuais e integração entre frontend, API e banco de dados.',
      technologies: ['JavaScript', 'Node.js', 'Express', 'MySQL', 'HTML', 'CSS', 'REST APIs'],
      highlights: [
        'Importação de arquivos .xlsx, .xls e .csv',
        'Cadastro e edição de proprietários',
        'Dados cadastrais e bancários',
        'Páginas individuais por entidade',
        'Backend com Node.js, Express e MySQL',
        'Projeto baseado em dores reais do setor imobiliário',
      ],
    },
    {
      name: 'FlowLogin',
      link: 'https://github.com/GuiFaccioli/FlowLogin',
      description:
        'Projeto full-stack de login e cadastro criado para praticar autenticação, validação de formulários e integração entre frontend, backend e banco de dados.\n\nA aplicação possui fluxo de cadastro de usuários, login com verificação de credenciais, rotas REST com Node.js e Express, persistência em MySQL e armazenamento seguro de senhas com hash usando bcrypt.\n\nO objetivo do projeto foi entender, na prática, como uma tela de login se conecta com uma API, como os dados são validados e como as informações são salvas e consultadas no banco.',
      technologies: [
        'HTML',
        'CSS',
        'JavaScript',
        'Node.js',
        'Express',
        'MySQL',
        'bcrypt',
        'REST APIs',
      ],
      highlights: [
        'Cadastro e login de usuários',
        'Hash de senhas com bcrypt',
        'Validação de formulários no frontend',
        'Rotas REST com Node.js e Express',
        'Persistência de usuários em MySQL',
        'Integração entre frontend, API e banco de dados',
        'Tratamento de respostas de sucesso e erro',
      ],
    },
  ] as Project[],
  experiences: [
    {
      role: 'Technical Support Specialist',
      company: 'Hospital Israelita Albert Einstein / Escala.app',
      period: 'Jul/2021 - Jan/2025',
      highlights: [
        'Criação da Central de Ajuda, reduzindo chamados sem resolução fora do horário comercial em mais de 80%.',
        'Aumento do nível de satisfação dos clientes com os atendimentos em mais de 90%.',
        'Execução de testes manuais e validação de fluxos da aplicação.',
        'Identificação, registro e acompanhamento de bugs junto ao time técnico.',
        'Apoio na criação de relatórios e acompanhamento de métricas para suporte à decisão.',
        'Contribuição para melhorias no produto com base em feedbacks, erros recorrentes e problemas identificados pelos usuários.',
      ],
    },
    {
      role: 'Gerente de Locação / Preposto',
      company: 'Orel Imobiliária',
      period: 'Jan/2015 - Jun/2021',
      highlights: [
        'Gestão da rotina operacional do setor de locação.',
        'Atendimento a proprietários, inquilinos e interessados.',
        'Organização de documentos, contratos, prazos e pendências.',
        'Atuação como preposto em casos relacionados à área de locação.',
        'Melhoria de processos internos e acompanhamento de fluxos operacionais.',
      ],
    },
  ] as Experience[],
  education: [
    {
      course: 'Análise e Desenvolvimento de Sistemas',
      institution: 'Universidade Anhembi Morumbi',
      period: 'Jun/2025 - Jun/2028',
    },
    
  ] as Education[],
  certifications: [
    {
      name: 'EF SET English Certificate — B2 Upper Intermediate',
      issuer: 'EF SET',
      issued: 'Maio de 2026',
      link: 'https://cert.efset.org/en/SNLqQd',
    },
    {
      name: 'Claude 101',
      issuer: 'Anthropic',
      issued: 'Maio de 2026',
      credentialId: '7irn4psqmv2w',
      link: 'https://verify.skilljar.com/c/7irn4psqmv2w',
    },
  ] as Certification[],
  languages: [
    { name: 'Português', level: 'Nativo' },
    { name: 'Inglês', level: 'Avançado' },
    { name: 'Espanhol', level: 'Intermediário' },
  ] as Language[],
 
}

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
    'Sou estudante de Análise e Desenvolvimento de Sistemas e construo aplicações web com JavaScript, React, Node.js e MySQL. Minha experiência em suporte técnico fortaleceu minha capacidade de investigar problemas, analisar erros, testar funcionalidades e entender necessidades de usuários para criar soluções mais claras e funcionais.',
  heroIntro: '',
  links: [
    { label: 'GitHub', href: 'https://github.com/GuiFaccioli' },
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/guilherme-faccioli-b8a46611a/',
    },
    { label: 'E-mail', href: 'mailto:guifacciolic@gmail.com' },
  ] as ResumeLink[],
  about: '',
  skills: [
    {
      title: 'Frontend',
      items: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Consumo de APIs'],
    },
    {
      title: 'Backend',
      items: [
        'Node.js',
        'Express',
        'MySQL',
        'APIs REST',
        'Autenticação com bcrypt',
        'Integração com banco de dados',
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
        'Modelagem relacional',
        'Organização de código',
        'Importação de dados',
        'Regras de negócio',
      ],
    },
  ] as SkillGroupData[],
  projects: [
    {
      name: 'ImobCheck',
      description:
        'Sistema de gestão para imobiliárias criado para organizar dados de proprietários, imóveis, inquilinos, contratos, importações e relatórios em um único ambiente.\n\nO projeto nasceu da experiência prática com rotinas de locação, onde informações costumam ficar espalhadas em planilhas, documentos e controles manuais.\n\nA aplicação possui importação de arquivos, cadastro e edição de proprietários, armazenamento de dados cadastrais e bancários, páginas individuais por entidade e comunicação entre interface, API e banco MySQL.',
      technologies: ['JavaScript', 'Node.js', 'Express', 'MySQL', 'HTML', 'CSS', 'REST APIs'],
      highlights: [
        'Importação de arquivos .xlsx, .xls e .csv',
        'Cadastro e edição de proprietários',
        'Dados cadastrais e bancários',
        'Páginas individuais por entidade',
        'Relatórios operacionais',
        'Modelagem baseada em rotinas reais de locação',
      ],
    },
    {
      name: 'FlowLogin',
      link: 'https://github.com/GuiFaccioli/FlowLogin',
      description:
        'Projeto full-stack de login e cadastro desenvolvido para praticar autenticação, validação de formulários e persistência de usuários.\n\nA aplicação possui cadastro, login com verificação de credenciais, rotas com Node.js e Express, banco MySQL e armazenamento de senhas com hash usando bcrypt.\n\nO foco do projeto foi entender o fluxo completo entre formulário, API, regra de validação e consulta ao banco.',
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
        'Validação de formulários',
        'Rotas com Node.js e Express',
        'Persistência em MySQL',
        'Tratamento de respostas da API',
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
        'Criação de relatórios e acompanhamento de métricas para apoio à decisão.',
        'Contribuição para melhorias no produto a partir de feedbacks, erros recorrentes e dificuldades relatadas pelos usuários.',
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
        'Acompanhamento de demandas administrativas e melhoria de fluxos internos.',
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

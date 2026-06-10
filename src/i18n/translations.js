export const translations = {
  pt: {
    nav: {
      experience: 'Experiência',
      stack: 'Stack',
      education: 'Formação',
      contact: 'Contato',
      downloadCv: 'Baixar CV',
    },
    hero: {
      eyebrow: 'Brasil · Disponível para realocação internacional / remoto',
      name: 'Kauan Felipe',
      role: 'Desenvolvedor Full Stack',
      typed: ['.NET 9', 'C#', 'React', 'SignalR', 'SQL Server', 'Docker'],
      ctaCv: 'Baixar CV',
      ctaExperience: 'Ver experiência',
    },
    experience: {
      title: 'Experiência',
      location: 'Localização',
      items: [
        {
          company: 'Aquativa Golf Resort',
          location: 'Cornélio Procópio, Brasil',
          roles: [
            { title: 'Analista de Desenvolvimento', period: 'Março de 2026 – Presente' },
            { title: 'Desenvolvedor Full Stack', period: 'Janeiro de 2025 – Março de 2026' },
          ],
          bullets: [
            'Atua de forma independente em todos os projetos que recebe, como desenvolvedor full-stack e arquiteto, responsável por back-end, front-end e banco de dados de ponta a ponta e pelas decisões de arquitetura de cada aplicação.',
            'Projetou e construiu um gateway de pagamento próprio integrando três bancos, cartão de crédito e Pix, processando mais de 1.000 transações mensais com 99,5% de taxa de sucesso.',
            'Desenvolveu uma API de integração de pagamentos consumida por agências parceiras, oferecendo uma interface padronizada para processar pagamentos pela plataforma.',
            'Construiu uma aplicação completa de gestão para o restaurante, com reserva de mesas e organização de atividades, incluindo um dashboard em tempo real para a cozinha usando .NET SignalR.',
            'Integrou sistemas corporativos (TOTVS ERP) para automatizar a sincronização de dados bancários e operacionais, reduzindo a entrada manual de dados em ~80% e eliminando inconsistências.',
            'Modernizou APIs REST e aplicações MVC legadas em .NET seguindo DDD, SOLID e Clean Code, melhorando o tempo de resposta das APIs em ~35%, reduzindo taxas de erro em ~25% e corrigindo mais de 50 bugs críticos.',
            'Atende ordens de serviço de outros setores como suporte técnico N2 e supervisiona e mentora o auxiliar de desenvolvimento da equipe.',
          ],
        },
        {
          company: 'Bono Energia',
          location: 'Londrina, Brasil',
          roles: [
            { title: 'Analista de Sistemas (Pleno)', period: 'Julho de 2023 – Dezembro de 2023' },
          ],
          bullets: [
            'Desenvolveu APIs RESTful em .NET Core com integração via WebService, permitindo a comunicação entre mais de 5 sistemas internos e externos.',
            'Projetou e manteve bancos de dados SQL (15+ tabelas, 20+ stored procedures otimizadas), reduzindo o tempo de execução de consultas em ~40%.',
            'Implementou políticas de autenticação, autorização e proteção de dados em conformidade com padrões de segurança da informação.',
            'Entregou deploys sem downtime em staging e produção (99,8% de disponibilidade) e contribuiu para mais de 12 entregas de sprint em equipe Scrum.',
          ],
        },
        {
          company: 'Dribion Software',
          location: 'Cornélio Procópio, Brasil',
          roles: [
            { title: 'Suporte Técnico', period: 'Janeiro de 2021 – Abril de 2022' },
          ],
          bullets: [
            'Resolveu mais de 200 problemas técnicos por mês com 95% de resolução no primeiro contato; treinou 50+ clientes e 10+ novos funcionários, reduzindo tickets de suporte em ~30%.',
            'Realizou consultas em SQL Server e testes de QA, documentando mais de 100 bugs e apoiando 30+ implantações de software bem-sucedidas em clientes.',
            'Gerenciou a emissão de notas fiscais eletrônicas (NF-e, NFC-e, MDF-e, CT-e, CC-e) com 100% de conformidade fiscal.',
          ],
        },
      ],
    },
    stack: {
      title: 'Stack',
      categories: [
        { key: 'backend', label: 'Back-end', items: ['.NET 9 (C#)', 'ASP.NET', 'APIs RESTful', 'EF Core', 'Dapper'] },
        { key: 'frontend', label: 'Front-end', items: ['React', 'Vite', 'Tailwind CSS', 'Razor (MVC)'] },
        { key: 'realtime', label: 'Tempo real', items: ['SignalR'] },
        { key: 'databases', label: 'Bancos de Dados', items: ['SQL Server', 'stored procedures', 'triggers'] },
        { key: 'devops', label: 'DevOps', items: ['GitHub Actions (CI/CD)', 'Docker', 'Portainer'] },
        { key: 'practices', label: 'Práticas', items: ['DDD', 'SOLID', 'Clean Code', 'Arquitetura de Software', 'Scrum'] },
      ],
    },
    education: {
      title: 'Formação',
      items: [
        {
          degree: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
          status: 'em andamento, 6º semestre',
          institution: 'Universidade Tecnológica Federal do Paraná (UTFPR)',
          location: 'Cornélio Procópio, Brasil',
          period: '2016 – Presente',
        },
      ],
      languagesTitle: 'Idiomas',
      languages: 'Português — Nativo · Inglês — Proficiência profissional (apto para entrevistas e reuniões)',
    },
    contact: {
      title: 'Contato',
      intro: 'Disponível para realocação internacional ou trabalho remoto. Sinta-se à vontade para entrar em contato.',
      emailLabel: 'E-mail',
      phoneLabel: 'Telefone',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      email: 'kauan_falima@hotmail.com',
      phone: '+55 43 99979-6321',
      linkedin: 'linkedin.com/in/kauan-felipe-fullstack',
      github: 'github.com/kauanfelipe96',
    },
    footer: {
      copyright: '© 2026 Kauan Felipe',
      sourceLabel: 'Código fonte',
    },
  },
  en: {
    nav: {
      experience: 'Experience',
      stack: 'Stack',
      education: 'Education',
      contact: 'Contact',
      downloadCv: 'Download CV',
    },
    hero: {
      eyebrow: 'Brazil · Open to international relocation / remote',
      name: 'Kauan Felipe',
      role: 'Full Stack Software Engineer',
      typed: ['.NET 9', 'C#', 'React', 'SignalR', 'SQL Server', 'Docker'],
      ctaCv: 'Download CV',
      ctaExperience: 'View experience',
    },
    experience: {
      title: 'Experience',
      location: 'Location',
      items: [
        {
          company: 'Aquativa Golf Resort',
          location: 'Cornélio Procópio, Brazil',
          roles: [
            { title: 'Development Analyst', period: 'March 2026 – Present' },
            { title: 'Full Stack Developer', period: 'January 2025 – March 2026' },
          ],
          bullets: [
            'Independently own every assigned project end-to-end as full-stack developer and architect, covering back end, front end, and database and making the architecture decisions for each application.',
            'Architected and built an in-house payment gateway integrating three banks plus credit card and Pix, processing 1,000+ monthly transactions at a 99.5% success rate.',
            'Designed and delivered a payment-integration API consumed by partner agencies, providing them a standardized interface to process payments through the platform.',
            'Built a complete restaurant management application for table reservations and activity scheduling, featuring a real-time kitchen dashboard powered by .NET SignalR to coordinate orders live.',
            'Integrated corporate systems (TOTVS ERP) to automate banking and operational data sync, cutting manual data entry by ~80% and eliminating data inconsistencies.',
            'Modernized legacy .NET REST APIs and MVC apps following DDD, SOLID, and Clean Code, improving API response times ~35%, reducing error rates ~25%, and resolving 50+ critical bugs.',
            "Resolve cross-department service requests as N2 technical support and supervise and mentor the team's junior developer.",
          ],
        },
        {
          company: 'Bono Energia',
          location: 'Londrina, Brazil',
          roles: [
            { title: 'Systems Analyst (Mid-level)', period: 'July 2023 – December 2023' },
          ],
          bullets: [
            'Built RESTful APIs in .NET Core with WebService integration, enabling communication across 5+ internal and external systems.',
            'Designed and maintained SQL databases (15+ tables, 20+ optimized stored procedures), cutting query execution time ~40%.',
            'Implemented authentication, authorization, and data-protection policies meeting information-security standards.',
            'Delivered zero-downtime releases to staging and production (99.8% uptime) and contributed to 12+ sprint deliveries in a Scrum team.',
          ],
        },
        {
          company: 'Dribion Software',
          location: 'Cornélio Procópio, Brazil',
          roles: [
            { title: 'Technical Support', period: 'January 2021 – April 2022' },
          ],
          bullets: [
            'Resolved 200+ technical issues monthly with a 95% first-contact resolution rate; trained 50+ clients and 10+ new hires, reducing support tickets ~30%.',
            'Ran SQL Server queries and QA testing, documenting 100+ bugs and supporting 30+ successful client software deployments.',
            'Managed electronic fiscal invoicing (NF-e, NFC-e, MDF-e, CT-e, CC-e) at 100% compliance.',
          ],
        },
      ],
    },
    stack: {
      title: 'Stack',
      categories: [
        { key: 'backend', label: 'Backend', items: ['.NET 9 (C#)', 'ASP.NET', 'RESTful APIs', 'EF Core', 'Dapper'] },
        { key: 'frontend', label: 'Frontend', items: ['React', 'Vite', 'Tailwind CSS', 'Razor (MVC)'] },
        { key: 'realtime', label: 'Real-time', items: ['SignalR'] },
        { key: 'databases', label: 'Databases', items: ['SQL Server', 'stored procedures', 'triggers'] },
        { key: 'devops', label: 'DevOps', items: ['GitHub Actions (CI/CD)', 'Docker', 'Portainer'] },
        { key: 'practices', label: 'Practices', items: ['DDD', 'SOLID', 'Clean Code', 'Software Architecture', 'Scrum'] },
      ],
    },
    education: {
      title: 'Education',
      items: [
        {
          degree: 'Technologist in Systems Analysis and Development',
          status: 'in progress, 6th semester',
          institution: 'Federal University of Technology – Paraná (UTFPR)',
          location: 'Cornélio Procópio, Brazil',
          period: '2016 – Present',
        },
      ],
      languagesTitle: 'Languages',
      languages: 'Portuguese — Native · English — Professional working proficiency (comfortable in interviews and meetings)',
    },
    contact: {
      title: 'Contact',
      intro: 'Open to international relocation or remote work. Feel free to reach out.',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub',
      email: 'kauan_falima@hotmail.com',
      phone: '+55 43 99979-6321',
      linkedin: 'linkedin.com/in/kauan-felipe-fullstack',
      github: 'github.com/kauanfelipe96',
    },
    footer: {
      copyright: '© 2026 Kauan Felipe',
      sourceLabel: 'Source code',
    },
  },
};

export function getByPath(obj, path) {
  return path.split('.').reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
}

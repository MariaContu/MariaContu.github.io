export type Language = 'pt' | 'en';

const sharedLinks = {
  linkedin: 'https://www.linkedin.com/in/mecontudo/',
  github: 'https://github.com/MariaContu',
  email: 'mariaescontu@gmail.com',
};

export const portfolioContent = {
  pt: {
    ui: {
      nav: { about: 'Sobre', experience: 'Experiência', projects: 'Projetos', skills: 'Habilidades', contact: 'Contato' },
      languageButton: 'EN', languageLabel: 'Mudar para inglês',
      greeting: 'Oi, eu sou a', viewProjects: 'Ver projetos', contactButton: 'Entrar em contato',
      professionalLinks: 'Links profissionais', professionalSummary: 'Resumo profissional',
      technologiesUsed: 'Tecnologias utilizadas', linksSoon: 'Links em breve',
      academicEducation: 'Formação acadêmica', certificates: 'Certificados e cursos', languages: 'Idiomas',
      contactHeading: 'Entre em contato', contactText: 'Você pode me chamar por e-mail, acessar meu LinkedIn ou acompanhar meus projetos pelo GitHub.',
      sendEmail: 'Enviar e-mail', viewLinkedin: 'Ver LinkedIn', phone: 'Telefone', location: 'Localização', footerLinks: 'Links do rodapé',
      footerRole: 'Desenvolvedora Full Stack · Porto Alegre, RS', developedBy: 'Desenvolvido por Maria Eduarda Contu.'
    },
    profile: {
      name: 'Maria Eduarda Contu', shortName: 'Maria Contu', headline: 'Desenvolvedora Full Stack',
      location: 'Porto Alegre, RS', email: sharedLinks.email, phone: '(51) 99936-3825', phoneHref: '+5551999363825',
      linkedin: sharedLinks.linkedin, github: sharedLinks.github,
      summary: 'Desenvolvedora Full Stack com experiência profissional na Dell Technologies, atuando no desenvolvimento de aplicações corporativas com Angular e C#/.NET. Tenho experiência com APIs REST, testes automatizados em BDD, debugging e manutenção evolutiva de sistemas.',
      focus: 'Também desenvolvo projetos próprios envolvendo aplicações web, APIs e inteligência artificial.',
      availableText: 'Disponível para novas oportunidades',
      stack: ['Angular', 'C#/.NET', 'APIs REST', 'Python', 'Machine Learning', 'BDD']
    },
    about: {
      eyebrow: 'Sobre mim', title: 'Construindo soluções entre front-end, back-end e inteligência artificial.',
      description: 'Minha trajetória combina experiência profissional em desenvolvimento de software, formação em Ciência da Computação e projetos próprios.',
      cards: [
        { title: 'Perfil profissional', featured: true, paragraphs: [
          'Sou estudante de Ciência da Computação na PUCRS e estagiária de desenvolvimento de software na Dell Technologies, com atuação prática em aplicações corporativas usando Angular e C#/.NET.',
          'Tenho experiência com desenvolvimento e manutenção de APIs REST, testes automatizados com BDD e SpecFlow, debugging, code reviews e colaboração em ambiente Scrum.',
          'Em paralelo, desenvolvo projetos próprios de aplicações web, back-end, jogos e inteligência artificial.'
        ]},
        { title: 'O que eu busco', featured: false, paragraphs: ['Quero evoluir como desenvolvedora full stack, construindo sistemas bem estruturados, testáveis e úteis para pessoas reais.'] },
        { title: 'Como trabalho', featured: false, paragraphs: ['Gosto de entender o problema, organizar a solução em etapas e escrever código claro, pensando em manutenção e colaboração com o time.'] }
      ]
    },
    experience: {
      eyebrow: 'Experiência', title: 'Atuação prática em desenvolvimento corporativo.',
      description: 'Experiência com Angular, C#/.NET, APIs REST, testes automatizados e colaboração em times ágeis.',
      items: [{
        company: 'Dell Technologies', role: 'Estagiária de Desenvolvimento de Software', period: 'Jun/2025 — Atual',
        summary: 'Atuação no desenvolvimento e evolução de aplicações corporativas, contribuindo em funcionalidades de front-end, serviços back-end, integração entre sistemas e qualidade de software.',
        responsibilities: [
          'Desenvolvimento e evolução de aplicações corporativas utilizando Angular e C#/.NET.',
          'Implementação e manutenção de serviços back-end e APIs REST em arquitetura em camadas.',
          'Criação e manutenção de testes automatizados utilizando BDD e SpecFlow.',
          'Investigação e correção de falhas por meio de debugging e análise do comportamento das aplicações.',
          'Participação em code reviews e desenvolvimento colaborativo em ambiente Scrum, utilizando Git no fluxo de versionamento.'
        ],
        technologies: ['Angular', 'C#', '.NET', 'APIs REST', 'BDD', 'SpecFlow', 'Git', 'Scrum']
      }]
    },
    projects: {
      eyebrow: 'Projetos', title: 'Projetos publicados e em desenvolvimento.',
      description: 'Uma seleção de projetos web, back-end, jogos e inteligência artificial, incluindo trabalhos em andamento.',
      items: [
        { name: 'AdaptiveTrials — Sistema de Recomendação Híbrido para Jogos', type: 'TCC · IA · Back-end · Game Dev', status: 'Em desenvolvimento', development: true, featured: true,
          description: 'Solução para adaptação dinâmica de missões com base no perfil e comportamento do jogador. Inclui API REST em C#/.NET para sessões, eventos e recomendações, pipeline de dados e experimentação com modelos de Machine Learning, além da integração com um jogo desenvolvido em Godot.',
          technologies: ['C#', '.NET', 'APIs REST', 'Python', 'Machine Learning', 'Godot'], links: [] },
        { name: 'Portfólio Pessoal', type: 'Front-end · Angular', status: 'Publicado', development: false, featured: true,
          description: 'Portfólio responsivo em Angular para apresentação de projetos, experiência e habilidades técnicas, com conteúdo desacoplado da interface, suporte a português e inglês e publicação pelo GitHub Pages.',
          technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'GitHub Pages'], links: [
            { label: 'Ver projeto', url: 'https://mariacontu.github.io/MariaContu.github.io/' }, { label: 'Repositório', url: 'https://github.com/MariaContu/MariaContu.github.io' }
          ] },
        { name: 'Tarot Insight', type: 'Front-end · Angular', status: 'Publicado', development: false, featured: true,
          description: 'Aplicação interativa em Angular para exploração e estudo de cartas de tarot, com navegação por arcanos e naipes, sorteio de cartas, exibição dinâmica de dados e modo de autoavaliação.',
          technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'GitHub Pages'], links: [
            { label: 'Ver projeto', url: 'https://mariacontu.github.io/TarotInsight/' }, { label: 'Repositório', url: 'https://github.com/MariaContu/TarotInsight' }
          ] },
        { name: "Brioche's Away", type: 'Game Dev · Godot', status: 'Publicado', development: false, featured: false,
          description: 'Jogo 2D de puzzle desenvolvido em Godot durante a faculdade. A aventura acompanha Agatha em uma busca por seu gato de pelúcia desaparecido, combinando exploração e pequenos quebra-cabeças.',
          technologies: ['Godot', 'Game Design', '2D', 'Puzzle', 'Pixel Art'], links: [{ label: 'Ver no itch.io', url: 'https://mecontudo.itch.io/brioches-away' }] },
        { name: 'Chronicles Hub', type: 'Full Stack · RPG · VTT', status: 'Em desenvolvimento', development: true, featured: true,
          description: 'Plataforma web para gerenciamento de RPG de mesa, com fichas de personagem, rolagem de dados, painel do mestre e recursos de sessão em uma aplicação responsiva.',
          technologies: ['Full Stack', 'Web App', 'RPG', 'VTT', 'Realtime', 'PWA'], links: [] },
        { name: 'Sistema de Monitoramento de APIs', type: 'Back-end · .NET', status: 'Em desenvolvimento', development: true, featured: false,
          description: 'Aplicação back-end em .NET para monitoramento de endpoints, coleta de status HTTP e tempo de resposta, além da persistência do histórico de requisições.',
          technologies: ['.NET', 'C#', 'APIs REST', 'PostgreSQL', 'Monitoramento'], links: [] }
      ]
    },
    skillsEducation: {
      skills: { eyebrow: 'Habilidades', title: 'Tecnologias e ferramentas que uso no desenvolvimento.', description: 'Experiência em desenvolvimento full stack, APIs, testes, bancos de dados e projetos de inteligência artificial.', groups: [
        { title: 'Linguagens', items: ['C#', 'Python', 'Java', 'TypeScript', 'JavaScript'] },
        { title: 'Front-end', items: ['Angular', 'HTML', 'CSS'] },
        { title: 'Back-end', items: ['.NET', 'APIs REST', 'Arquitetura em camadas'] },
        { title: 'Banco de dados', items: ['PostgreSQL', 'MySQL', 'SQLite'] },
        { title: 'Testes', items: ['BDD', 'SpecFlow', 'Testes unitários'] },
        { title: 'Ferramentas e metodologias', items: ['Git', 'GitHub', 'GitLab', 'Postman', 'Scrum', 'Kanban'] },
        { title: 'IA e dados', items: ['Machine Learning', 'Preparação de dados', 'Classificação'] }
      ]},
      education: { eyebrow: 'Formação', title: 'Formação acadêmica, certificações e idiomas.', description: 'Base acadêmica em Ciência da Computação, complementada por certificação e experiência prática.',
        items: [{ title: 'Bacharelado em Ciência da Computação', institution: 'PUCRS', period: '2022 — 2026', status: 'Previsão de conclusão: dezembro de 2026' }],
        certificates: [{ title: 'Scrum Foundation Professional Certification (SFPC)', institution: 'CertiProf' }],
        languages: [{ language: 'Português', level: 'Nativo' }, { language: 'Inglês', level: 'Avançado' }, { language: 'Espanhol', level: 'Básico' }]
      }
    },
    contact: { eyebrow: 'Contato', title: 'Vamos conversar?', description: 'Estou aberta a oportunidades, conexões profissionais e conversas sobre desenvolvimento, tecnologia e projetos.', email: sharedLinks.email, phone: '(51) 99936-3825', phoneHref: '+5551999363825', location: 'Porto Alegre, RS — Brasil', links: [
      { label: 'LinkedIn', url: sharedLinks.linkedin }, { label: 'GitHub', url: sharedLinks.github }, { label: 'E-mail', url: `mailto:${sharedLinks.email}` }
    ]}
  },
  en: {
    ui: {
      nav: { about: 'About', experience: 'Experience', projects: 'Projects', skills: 'Skills', contact: 'Contact' },
      languageButton: 'PT', languageLabel: 'Switch to Portuguese', greeting: "Hi, I'm", viewProjects: 'View projects', contactButton: 'Get in touch',
      professionalLinks: 'Professional links', professionalSummary: 'Professional summary', technologiesUsed: 'Technologies used', linksSoon: 'Links coming soon',
      academicEducation: 'Academic background', certificates: 'Certifications and courses', languages: 'Languages',
      contactHeading: 'Get in touch', contactText: 'You can contact me by email, visit my LinkedIn profile, or follow my projects on GitHub.',
      sendEmail: 'Send email', viewLinkedin: 'View LinkedIn', phone: 'Phone', location: 'Location', footerLinks: 'Footer links',
      footerRole: 'Full Stack Developer · Porto Alegre, Brazil', developedBy: 'Developed by Maria Eduarda Contu.'
    },
    profile: {
      name: 'Maria Eduarda Contu', shortName: 'Maria Contu', headline: 'Full Stack Developer', location: 'Porto Alegre, Brazil',
      email: sharedLinks.email, phone: '(51) 99936-3825', phoneHref: '+5551999363825', linkedin: sharedLinks.linkedin, github: sharedLinks.github,
      summary: 'Full Stack Developer with professional experience at Dell Technologies, working on corporate applications using Angular and C#/.NET. I have hands-on experience with REST APIs, BDD automated testing, debugging, and application maintenance and enhancement.',
      focus: 'I also develop personal projects involving web applications, APIs, and artificial intelligence.',
      availableText: 'Open to new opportunities', stack: ['Angular', 'C#/.NET', 'REST APIs', 'Python', 'Machine Learning', 'BDD']
    },
    about: {
      eyebrow: 'About me', title: 'Building solutions across front-end, back-end, and artificial intelligence.',
      description: 'My background combines professional software development experience, a Computer Science degree, and personal projects.',
      cards: [
        { title: 'Professional profile', featured: true, paragraphs: [
          'I am a Computer Science student at PUCRS and a Software Development Intern at Dell Technologies, with hands-on experience in corporate applications using Angular and C#/.NET.',
          'I have experience developing and maintaining REST APIs, creating automated tests with BDD and SpecFlow, debugging, participating in code reviews, and collaborating in a Scrum environment.',
          'Alongside my professional work, I develop personal projects involving web applications, back-end systems, games, and artificial intelligence.'
        ]},
        { title: 'What I am looking for', featured: false, paragraphs: ['I want to grow as a full stack developer by building well-structured, testable systems that solve real problems.'] },
        { title: 'How I work', featured: false, paragraphs: ['I like to understand the problem, organize the solution into clear steps, and write maintainable code with team collaboration in mind.'] }
      ]
    },
    experience: {
      eyebrow: 'Experience', title: 'Hands-on corporate software development experience.',
      description: 'Experience with Angular, C#/.NET, REST APIs, automated testing, and agile teamwork.',
      items: [{ company: 'Dell Technologies', role: 'Software Development Intern', period: 'Jun 2025 — Present',
        summary: 'Development and enhancement of corporate applications, contributing to front-end features, back-end services, systems integration, and software quality.',
        responsibilities: [
          'Development and enhancement of corporate applications using Angular and C#/.NET.',
          'Implementation and maintenance of back-end services and REST APIs following layered architecture principles.',
          'Development and maintenance of automated tests using BDD and SpecFlow.',
          'Investigation and resolution of application issues through debugging and behavior analysis.',
          'Participation in code reviews and collaborative development in a Scrum environment, using Git for version control.'
        ], technologies: ['Angular', 'C#', '.NET', 'REST APIs', 'BDD', 'SpecFlow', 'Git', 'Scrum']
      }]
    },
    projects: {
      eyebrow: 'Projects', title: 'Published projects and work in progress.',
      description: 'A selection of web, back-end, game development, and artificial intelligence projects, including ongoing work.',
      items: [
        { name: 'AdaptiveTrials — Hybrid Recommendation System for Games', type: 'Thesis · AI · Back-end · Game Dev', status: 'In development', development: true, featured: true,
          description: 'A solution for dynamically adapting missions based on player profile and behavior. It includes a C#/.NET REST API for sessions, events, and recommendations, a data preparation and Machine Learning experimentation pipeline, and integration with a game developed in Godot.',
          technologies: ['C#', '.NET', 'REST APIs', 'Python', 'Machine Learning', 'Godot'], links: [] },
        { name: 'Personal Portfolio', type: 'Front-end · Angular', status: 'Published', development: false, featured: true,
          description: 'A responsive Angular portfolio for showcasing projects, professional experience, and technical skills, with content separated from the interface, Portuguese and English support, and deployment through GitHub Pages.',
          technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'GitHub Pages'], links: [
            { label: 'View project', url: 'https://mariacontu.github.io/MariaContu.github.io/' }, { label: 'Repository', url: 'https://github.com/MariaContu/MariaContu.github.io' }
          ] },
        { name: 'Tarot Insight', type: 'Front-end · Angular', status: 'Published', development: false, featured: true,
          description: 'An interactive Angular application for exploring and studying tarot cards, featuring arcana and suit navigation, card draws, dynamic data rendering, and a self-assessment mode.',
          technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'GitHub Pages'], links: [
            { label: 'View project', url: 'https://mariacontu.github.io/TarotInsight/' }, { label: 'Repository', url: 'https://github.com/MariaContu/TarotInsight' }
          ] },
        { name: "Brioche's Away", type: 'Game Dev · Godot', status: 'Published', development: false, featured: false,
          description: 'A 2D puzzle game developed in Godot during college. The story follows Agatha as she searches for her missing plush cat through exploration and small puzzles.',
          technologies: ['Godot', 'Game Design', '2D', 'Puzzle', 'Pixel Art'], links: [{ label: 'View on itch.io', url: 'https://mecontudo.itch.io/brioches-away' }] },
        { name: 'Chronicles Hub', type: 'Full Stack · RPG · VTT', status: 'In development', development: true, featured: true,
          description: 'A web platform for tabletop RPG management, featuring character sheets, dice rolling, a game master dashboard, and session resources in a responsive application.',
          technologies: ['Full Stack', 'Web App', 'RPG', 'VTT', 'Realtime', 'PWA'], links: [] },
        { name: 'API Monitoring System', type: 'Back-end · .NET', status: 'In development', development: true, featured: false,
          description: 'A .NET back-end application for monitoring endpoints, collecting HTTP status codes and response times, and storing request history.',
          technologies: ['.NET', 'C#', 'REST APIs', 'PostgreSQL', 'Monitoring'], links: [] }
      ]
    },
    skillsEducation: {
      skills: { eyebrow: 'Skills', title: 'Technologies and tools I use in software development.', description: 'Experience in full stack development, APIs, testing, databases, and artificial intelligence projects.', groups: [
        { title: 'Programming languages', items: ['C#', 'Python', 'Java', 'TypeScript', 'JavaScript'] },
        { title: 'Front-end', items: ['Angular', 'HTML', 'CSS'] },
        { title: 'Back-end', items: ['.NET', 'REST APIs', 'Layered architecture'] },
        { title: 'Databases', items: ['PostgreSQL', 'MySQL', 'SQLite'] },
        { title: 'Testing', items: ['BDD', 'SpecFlow', 'Unit testing'] },
        { title: 'Tools and methodologies', items: ['Git', 'GitHub', 'GitLab', 'Postman', 'Scrum', 'Kanban'] },
        { title: 'AI and data', items: ['Machine Learning', 'Data preparation', 'Classification'] }
      ]},
      education: { eyebrow: 'Education', title: 'Academic background, certification, and languages.', description: 'A Computer Science academic foundation complemented by certification and hands-on experience.',
        items: [{ title: "Bachelor's Degree in Computer Science", institution: 'PUCRS', period: '2022 — 2026', status: 'Expected graduation: December 2026' }],
        certificates: [{ title: 'Scrum Foundation Professional Certification (SFPC)', institution: 'CertiProf' }],
        languages: [{ language: 'Portuguese', level: 'Native' }, { language: 'English', level: 'Advanced' }, { language: 'Spanish', level: 'Basic' }]
      }
    },
    contact: { eyebrow: 'Contact', title: "Let's connect", description: 'I am open to opportunities, professional connections, and conversations about software development, technology, and projects.', email: sharedLinks.email, phone: '(51) 99936-3825', phoneHref: '+5551999363825', location: 'Porto Alegre, Brazil', links: [
      { label: 'LinkedIn', url: sharedLinks.linkedin }, { label: 'GitHub', url: sharedLinks.github }, { label: 'Email', url: `mailto:${sharedLinks.email}` }
    ]}
  }
} as const;

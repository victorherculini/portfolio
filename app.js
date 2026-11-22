/* ==========================================================================
   VICTOR HERCULINI — EDITORIAL INTERACTIVE & AUTOMATED PORTFOLIO ENGINE
   ========================================================================== */

(() => {
  'use strict';

  const CONFIG = {
    githubUser: 'victorherculini',
    email: 'vrherculini@gmail.com',
    whatsappNumber: '5516997858363',
    snapshotUrl: 'data/github-snapshot.json',
    cacheKey: 'vh_github_cache_v2',
    cacheTtlMs: 30 * 60 * 1000,
    initialRepoLimit: 6,
  };

  const THEME_META_COLORS = {
    noir: '#0d0b08',
    aurora: '#07090e',
    paper: '#f5f2eb',
  };

  const LANG_COLORS = {
    Kotlin: '#a97bff',
    Java: '#e08b3e',
    JavaScript: '#f1e05a',
    TypeScript: '#3178c6',
    Python: '#4b8bbe',
    C: '#8b95ad',
    CSS: '#818cf8',
    HTML: '#e34c26',
    PLSQL: '#34d399',
    Shell: '#89e051',
  };

  /* ── Translations (PT-BR & EN) ─────────────────────────────────────────── */
  const I18N = {
    pt: {
      'nav.about': 'Sobre',
      'nav.focus': 'Atuação',
      'nav.workflow': 'Processo',
      'nav.work': 'Trabalhos',
      'nav.vision': 'Visão',
      'nav.contact': 'Contato',
      'nav.cta': 'Disponível',

      'hero.status': 'Shipping · Aberto a oportunidades',
      'hero.rolePrefix': 'Foco',
      'hero.role0': 'Software · Web & Mobile',
      'hero.role1': 'AI Developer & Operator',
      'hero.role2': 'E-Commerce & Paid Traffic',
      'hero.role3': 'Founder · AI-Native',
      'hero.line1': 'Desenvolvedor',
      'hero.line2': 'de software & IA,',
      'hero.line3': '<em>obcecado</em> por lançar.',
      'hero.intro':
        '<strong>Victor Rodrigues Herculini</strong> — estudante de ADS no IFSP Araraquara, desenvolvedor Web &amp; Mobile, operador de IA, e-commerce, tráfego pago e fundador. <strong>AI-native e stack-agnostic</strong>: construo arquitetura limpa e produtos completos com a ferramenta certa para cada problema.',
      'hero.ctaWork': 'Ver projetos',
      'hero.ctaContact': 'Me chama',

      'stats.repos': 'Repositórios GitHub',
      'stats.pillars': 'Pilares de atuação',
      'stats.years': 'Anos construindo',

      'kicker.about': 'Sobre',
      'kicker.focus': 'Áreas de Atuação',
      'kicker.workflow': 'Processo de Execução',
      'kicker.work': 'Trabalhos selecionados',
      'kicker.vision': 'Visão',
      'kicker.contact': 'Vamos conversar',

      'about.bio': [
        'Construo', 'software', '*robusto*', 'e', 'produtos', 'orientados', 'a', 'resultados.',
        'Foco', 'em', 'arquitetura,', '*clean code*,', '*inteligência artificial*', 'e',
        'execução', 'ponta', 'a', 'ponta', '—', 'código', 'legível,', 'escalável', 'e',
        'centrado', 'em', 'quem', 'usa.'
      ],
      'about.sub':
        'Sem stack fixa: uso engenharia sólida e Inteligência Artificial para ir da ideia ao produto rodando em produção — unindo código limpo, automação e visão real de crescimento.',

      'fact.nameL': 'Nome',
      'fact.ageL': 'Idade',
      'fact.ageV': '21 anos',
      'fact.locL': 'Local',
      'fact.eduL': 'Formação',
      'fact.eduV': 'ADS · IFSP Araraquara',
      'fact.mindsetL': 'Mindset',
      'fact.mindsetV': 'AI-Native · Stack-Agnostic · Outcome First',
      'fact.focusL': 'Atuação',
      'fact.focusV': 'Web & Mobile · AI · E-Commerce · Paid Traffic · Ventures',
      'fact.statusL': 'Status',
      'fact.statusV': 'Shipping · Aberto a oportunidades ●',

      'focus.heading': 'Engenharia, <em>IA</em><br>&amp; crescimento real.',
      'focus.lead':
        'Atuo ponta a ponta: do código e arquitetura de software até agentes de IA, lojas de alta conversão, tráfego pago e criação de produtos próprios.',
      'focus.web': 'Sites, web apps, dashboards e plataformas completas — entregues com arquitetura limpa e velocidade usando IA.',
      'focus.mobile': 'Aplicativos mobile nativos e modernos pensados da primeira ideia ao lançamento, centrados em quem usa.',
      'focus.ai': 'Agentes inteligentes, chatbots, integrações e workflows automatizados que executam o trabalho pesado em escala.',
      'focus.ecommerce': 'Lojas online de alta conversão, landing pages, funis de vendas, CRO e operações digitais completas.',
      'focus.traffic': 'Campanhas orientadas a dados, aquisição estratégica e ROAS escalável operando Meta Ads e Google Ads.',
      'focus.ventures': 'Transformando ideias em produtos digitais, MVPs e ferramentas internas com mentalidade de fundador.',

      'skills.title': 'O que <em>levo</em><br>pro time.',
      'skills.lead': 'Mais que sintaxe: visão de produto, comunicação clara, execução assistida por IA e obsessão por entregar bem feito.',
      'skills.s1': 'Engenharia AI-Native & Automação',
      'skills.s2': 'Trabalho em Equipe & Comunicação',
      'skills.s3': 'Criatividade & Visão de Produto',
      'skills.s4': 'Aprendizado Prático & Adaptabilidade',
      'skills.s5': 'Lógica, Arquitetura & Resolução de Problemas',

      'wf.heading': 'Da ideia ao <em>lançamento</em>.',
      'wf.lead': 'Sem burocracia ou apego a stack: foco no problema real, direção precisa com IA e iteração rápida em produção.',
      'wf.s1': 'Comece por um problema real.',
      'wf.s2': 'Direcione a IA com clareza.',
      'wf.s3': 'A IA faz o trabalho pesado.',
      'wf.s4': 'Lance, aprenda e itere.',
      'wf.d1': 'Antes de escrever uma linha de código, mapeio o problema real, o fluxo de quem usa e o resultado esperado para o negócio.',
      'wf.d2': 'Arquitetura clara, restrições explícitas e contexto preciso transformam IA em alavanca de engenharia.',
      'wf.d3': 'Sem stack fixa: escolho a melhor ferramenta para cada desafio e acelero a construção sem abrir mão de qualidade.',
      'wf.d4': 'Software só gera valor em produção. Publico rápido, acompanho métricas reais e evoluo em ciclos curtos.',

      'builds.kicker': 'O QUE CONSTRUO & OPERO',

      'work.heading': 'Projetos em <em>destaque</em>.',
      'filter.all': 'Todos',
      'filter.systems': 'Sistemas',
      'work.viewGallery': 'Explorar galeria',
      'work.viewDetails': 'Ver detalhes',
      'work.viewGithub': 'Ver no GitHub',

      'gh.title': 'Todos os repositórios, atualizados automaticamente.',
      'gh.refresh': 'Sincronizar',
      'gh.showMore': 'Ver mais repositórios',
      'gh.showLess': 'Mostrar menos',
      'gh.searchPlaceholder': 'Buscar repositório...',
      'gh.noResults': 'Nenhum repositório encontrado para esse filtro.',
      'gh.noDesc': 'Projeto público no GitHub @victorherculini.',

      'vision.quote':
        'Construo software, produtos e operações<br>que conectam <em>pessoas</em>, criam <em>comunidades</em><br>e geram impacto real em escala.',
      'pillar.p1k': 'Inovação',
      'pillar.p1t': 'Soluções que transformam.',
      'pillar.p1d': 'Combinar engenharia limpa e IA para criar produtos que resolvem dores reais — e tiram peso do dia a dia.',
      'pillar.p2k': 'Conexão',
      'pillar.p2t': 'Plataformas com propósito.',
      'pillar.p2d': 'Aproximar pessoas e comunidades reais — não métricas vazias, mas relações e produtos que realmente importam.',
      'pillar.p3k': 'Execução',
      'pillar.p3t': 'Always learning. Always shipping.',
      'pillar.p3d': 'Do primeiro prompt ao lançamento e à aquisição de usuários: aprender rápido, construir sem barreiras e escalar resultados.',

      'contact.big': 'Tem um<br>projeto? <em>Me chama.</em>',
      'common.copy': 'Copiar',
      'form.topicOpp': 'Oportunidade',
      'form.name': 'Nome',
      'form.subject': 'Assunto',
      'form.message': 'Mensagem',
      'form.sendEmail': 'Enviar por Email',
      'form.sendWa': 'WhatsApp ↗',
      'form.errEmpty': 'Preencha seu nome e mensagem para continuar.',
      'form.errEmail': 'Informe um email válido.',
      'form.okEmail': 'Abrindo seu cliente de email...',
      'form.okWa': 'Abrindo WhatsApp com a mensagem pronta...',

      'footer.top': 'Topo ↑',
      'cmd.nav': 'navegar',
      'cmd.run': 'abrir',
      'cmd.close': 'fechar',
      'cmd.placeholder': 'Ir para seção, buscar projeto, repositório ou ação...',
    },
    en: {
      'nav.about': 'About',
      'nav.focus': 'Focus',
      'nav.workflow': 'Workflow',
      'nav.work': 'Work',
      'nav.vision': 'Vision',
      'nav.contact': 'Contact',
      'nav.cta': 'Available',

      'hero.status': 'Shipping · Open to opportunities',
      'hero.rolePrefix': 'Focus',
      'hero.role0': 'Software · Web & Mobile',
      'hero.role1': 'AI Developer & Operator',
      'hero.role2': 'E-Commerce & Paid Traffic',
      'hero.role3': 'Founder · AI-Native',
      'hero.line1': 'Software & AI',
      'hero.line2': 'developer,',
      'hero.line3': '<em>obsessed</em> with shipping.',
      'hero.intro':
        '<strong>Victor Rodrigues Herculini</strong> — Systems Analysis &amp; Development student at IFSP Araraquara, Web &amp; Mobile developer, AI operator, e-commerce, paid traffic strategist, and founder. <strong>AI-native &amp; stack-agnostic</strong>: clean architecture built with whatever the problem needs.',
      'hero.ctaWork': 'View work',
      'hero.ctaContact': 'Get in touch',

      'stats.repos': 'GitHub Repositories',
      'stats.pillars': 'Focus Pillars',
      'stats.years': 'Years Building',

      'kicker.about': 'About',
      'kicker.focus': 'Focus Areas',
      'kicker.workflow': 'Execution Workflow',
      'kicker.work': 'Selected Work',
      'kicker.vision': 'Vision',
      'kicker.contact': 'Let’s Talk',

      'about.bio': [
        'I', 'build', '*robust*', 'software', 'and', 'outcome-driven', 'digital', 'products.',
        'Focused', 'on', 'architecture,', '*clean code*,', '*artificial intelligence*', 'and',
        'end-to-end', 'execution', '—', 'readable,', 'scalable', 'systems', 'crafted', 'around',
        'the', 'people', 'using', 'them.'
      ],
      'about.sub':
        'No fixed stack: I combine solid engineering fundamentals and AI to take ideas from zero to production — bridging clean code, automation, and real business growth.',

      'fact.nameL': 'Name',
      'fact.ageL': 'Age',
      'fact.ageV': '20 years old',
      'fact.locL': 'Location',
      'fact.eduL': 'Education',
      'fact.eduV': 'ADS @ IFSP Araraquara',
      'fact.mindsetL': 'Mindset',
      'fact.mindsetV': 'AI-Native · Stack-Agnostic · Outcome First',
      'fact.focusL': 'Focus',
      'fact.focusV': 'Web & Mobile · AI · E-Commerce · Paid Traffic · Ventures',
      'fact.statusL': 'Status',
      'fact.statusV': 'Shipping · Open to opportunities ●',

      'focus.heading': 'Engineering, <em>AI</em><br>&amp; real growth.',
      'focus.lead':
        'End-to-end execution: from software engineering and mobile apps to AI agents, high-converting e-commerce, paid traffic, and founder ventures.',
      'focus.web': 'Sites, web apps, dashboards and platforms — shipped fast with clean architecture and AI leverage.',
      'focus.mobile': 'Mobile apps crafted from the first idea to launch, engineered for smooth everyday experiences.',
      'focus.ai': 'Intelligent agents, chatbots, integrations and automated workflows that do the heavy lifting.',
      'focus.ecommerce': 'High-converting online stores, landing pages, sales funnels, CRO and digital operations.',
      'focus.traffic': 'Data-driven ad campaigns, acquisition systems and scalable ROAS across Meta and Google Ads.',
      'focus.ventures': 'Turning ideas into real digital products, MVPs and internal tools with a founder’s mindset.',

      'skills.title': 'What I <em>bring</em><br>to the team.',
      'skills.lead': 'More than syntax: product sense, crisp communication, AI-native velocity, and obsession with craft.',
      'skills.s1': 'AI-Native Engineering & Automation',
      'skills.s2': 'Teamwork & Clear Communication',
      'skills.s3': 'Creativity & Product Thinking',
      'skills.s4': 'Hands-on Learning & Adaptability',
      'skills.s5': 'Logic, Architecture & Problem Solving',

      'wf.heading': 'From idea to <em>launch</em>.',
      'wf.lead': 'No bureaucracy or rigid stack attachment: start with a real problem, direct AI with clarity, and iterate fast in production.',
      'wf.s1': 'Start with a real problem.',
      'wf.s2': 'Direct the AI with clarity.',
      'wf.s3': 'AI does the heavy lifting.',
      'wf.s4': 'Launch, learn, iterate.',
      'wf.d1': 'Before writing a single line of code, I map the real problem, the user journey, and the target business outcome.',
      'wf.d2': 'Clear architecture, explicit constraints, and sharp context turn AI into genuine engineering leverage.',
      'wf.d3': 'No fixed stack: I choose the best tool for the problem and ship cleanly at high velocity.',
      'wf.d4': 'Software only creates value once shipped. Launch fast, read real metrics, and iterate in tight loops.',

      'builds.kicker': 'WHAT I BUILD & OPERATE',

      'work.heading': 'Featured <em>projects</em>.',
      'filter.all': 'All',
      'filter.systems': 'Systems',
      'work.viewGallery': 'Open gallery',
      'work.viewDetails': 'View details',
      'work.viewGithub': 'View on GitHub',

      'gh.title': 'All repositories, synced automatically.',
      'gh.refresh': 'Sync now',
      'gh.showMore': 'Load more repositories',
      'gh.showLess': 'Show fewer',
      'gh.searchPlaceholder': 'Search repositories...',
      'gh.noResults': 'No repositories found for this filter.',
      'gh.noDesc': 'Public repository on GitHub @victorherculini.',

      'vision.quote':
        'I build software, products and operations<br>that connect <em>people</em>, empower <em>communities</em><br>and create real impact at scale.',
      'pillar.p1k': 'Innovation',
      'pillar.p1t': 'Solutions that transform.',
      'pillar.p1d': 'Pairing clean engineering with AI to build products that solve real friction and lighten everyday work.',
      'pillar.p2k': 'Connection',
      'pillar.p2t': 'Platforms with purpose.',
      'pillar.p2d': 'Bringing real communities together — not empty vanity metrics, but genuine relationships and value.',
      'pillar.p3k': 'Execution',
      'pillar.p3t': 'Always learning. Always shipping.',
      'pillar.p3d': 'From first prompt to launch and user acquisition: learn fast, build without boundaries, and scale results.',

      'contact.big': 'Have a<br>project? <em>Let’s talk.</em>',
      'common.copy': 'Copy',
      'form.topicOpp': 'Opportunity',
      'form.name': 'Name',
      'form.subject': 'Subject',
      'form.message': 'Message',
      'form.sendEmail': 'Send via Email',
      'form.sendWa': 'WhatsApp ↗',
      'form.errEmpty': 'Please enter your name and message to continue.',
      'form.errEmail': 'Please provide a valid email address.',
      'form.okEmail': 'Opening your email client...',
      'form.okWa': 'Opening WhatsApp with your draft...',

      'footer.top': 'Top ↑',
      'cmd.nav': 'navigate',
      'cmd.run': 'open',
      'cmd.close': 'close',
      'cmd.placeholder': 'Jump to section, search projects, repos or actions...',
    },
  };

  /* ── Featured Projects (Curated + Live GitHub Enrichment) ──────────────── */
  const FEATURED_PROJECTS = [
    {
      id: 'postly-mobile',
      repoName: 'postly-mobile',
      index: '01',
      category: 'mobile',
      year: '2026',
      type: 'phone',
      urlLabel: 'postly.app',
      cover: 'pictures/postly/feed.jpg',
      gallery: [
        { src: 'pictures/postly/feed.jpg', captionPt: 'Feed dinâmico em tempo real com localização', captionEn: 'Real-time feed with location tags' },
        { src: 'pictures/postly/new_post.jpg', captionPt: 'Publicação rápida com foto e texto', captionEn: 'Quick image & text post creation' },
        { src: 'pictures/postly/profile.jpg', captionPt: 'Perfil e gerenciamento de conta', captionEn: 'Profile & account management' },
      ],
      title: 'Postly Mobile',
      catPt: 'Rede social mobile',
      catEn: 'Mobile social network',
      descPt: 'Rede social mobile nativa para publicação de conteúdo com imagem, texto e localização — com integração em tempo real via Firebase e funções acionadas por sensores de movimento.',
      descEn: 'Native mobile social network for quick image, text, and location posts — powered by real-time Firebase sync, dynamic feeds, profiles, and motion-sensor gestures.',
      highlightsPt: [
        'Sincronização em tempo real com Firebase',
        'Feed dinâmico com busca por cidade, descrição ou usuário',
        'Sensores de movimento para gestos interativos',
        'Arquitetura Android nativa em Kotlin',
      ],
      highlightsEn: [
        'Real-time Firebase integration',
        'Dynamic feed searchable by city, description or user',
        'Mobile motion sensors for gesture functions',
        'Native Android architecture in Kotlin',
      ],
      tags: ['Kotlin', 'Mobile', 'Firebase', 'Sensors'],
      repoUrl: 'https://github.com/victorherculini/postly-mobile',
    },
    {
      id: 'guia-pocket',
      repoName: 'guia-pocket-app',
      index: '02',
      category: 'mobile',
      year: '2025',
      type: 'phone',
      urlLabel: 'guiapocket.app',
      cover: 'pictures/guiapocket/tema-escuro(en).png',
      coverLight: 'pictures/guiapocket/tema-claro(pt-BR).png',
      gallery: [
        { src: 'pictures/guiapocket/tema-escuro(en).png', captionPt: 'Tema escuro + idioma inglês (EN)', captionEn: 'Dark mode + English interface' },
        { src: 'pictures/guiapocket/tema-claro(pt-BR).png', captionPt: 'Tema claro + idioma português (PT-BR)', captionEn: 'Light mode + Portuguese interface' },
      ],
      title: 'Guia Pocket',
      catPt: 'Aplicativo mobile',
      catEn: 'Mobile fitness app',
      descPt: 'Aplicativo Android para musculação com guias práticos e detalhados de exercícios por grupo muscular, navegação intuitiva, acesso offline e alternância nativa de tema e idioma.',
      descEn: 'Bodybuilding Android app with practical exercise guides organized by main muscle groups, offline consultation, and native dark/light theme & language switching.',
      highlightsPt: [
        'Catálogo visual por grupo muscular',
        'Alternância instantânea de tema claro e escuro',
        'Suporte nativo bilíngue PT-BR e EN',
        'Consulta rápida e 100% offline',
      ],
      highlightsEn: [
        'Visual catalog grouped by muscles',
        'Instant light & dark theme toggle',
        'Native PT-BR and English localization',
        'Fast offline access at the gym',
      ],
      tags: ['Kotlin', 'Mobile', 'XML', 'i18n'],
      repoUrl: 'https://github.com/victorherculini/guia-pocket-app',
    },
    {
      id: 'postly-web',
      repoName: 'postly-web',
      index: '03',
      category: 'web',
      year: '2026',
      type: 'arch',
      arch: {
        header: 'POSTLY WEB · LAYERED SoC',
        layers: [
          { title: 'Controller', sub: 'HTTP / Auth' },
          { title: 'Service', sub: 'Tx / Rules' },
          { title: 'Repository', sub: 'Pool / SQL' },
        ],
        footLeft: '● Shared DB · Paginated Feed',
        footRight: 'Java Web',
      },
      gallery: [],
      title: 'Postly Web',
      catPt: 'Plataforma social web',
      catEn: 'Web social platform',
      descPt: 'Versão web do ecossistema Postly construída com arquitetura em camadas (Separation of Concerns), feed paginado, upload de fotos, perfis, connection pooling e gestão transacional.',
      descEn: 'Web social app for image, text, and location posts built with layered Separation of Concerns (SoC), paginated feed, photo uploads, connection pooling, and transaction management.',
      highlightsPt: [
        'Arquitetura em camadas (Separation of Concerns)',
        'Connection pooling e controle transacional',
        'Feed paginado, upload de fotos e seguidores',
        'Banco de dados compartilhado e consistente',
      ],
      highlightsEn: [
        'Layered Separation of Concerns (SoC)',
        'Connection pooling & transaction management',
        'Paginated feed, photo uploads & profiles',
        'Shared relational database layer',
      ],
      tags: ['Java', 'SoC', 'Connection Pool', 'SQL'],
      repoUrl: 'https://github.com/victorherculini/postly-web',
    },
    {
      id: 'task-manager',
      repoName: 'task-manager',
      index: '04',
      category: 'web',
      year: '2025',
      type: 'window',
      urlLabel: 'localhost/task-manager',
      cover: 'pictures/task/tarefas.png',
      gallery: [
        { src: 'pictures/task/tarefas.png', captionPt: 'Lista de tarefas com prioridade, status e comentários', captionEn: 'Task board with priority, status & comments' },
        { src: 'pictures/task/menu.png', captionPt: 'Menu principal autenticado', captionEn: 'Authenticated navigation menu' },
        { src: 'pictures/task/add-tarefa.png', captionPt: 'Cadastro de nova tarefa', captionEn: 'New task creation form' },
        { src: 'pictures/task/categorias.png', captionPt: 'Categorias personalizadas', captionEn: 'Custom categories' },
        { src: 'pictures/task/registrar.png', captionPt: 'Registro de conta', captionEn: 'Account sign-up' },
      ],
      title: 'Task Manager',
      catPt: 'Sistema web completo',
      catEn: 'Full-stack web system',
      descPt: 'Sistema web para gerenciamento de tarefas com CRUD completo, categorias, prioridades, prazos e comentários — foco em produtividade e back-end estruturado com MySQL.',
      descEn: 'Complete task management web system with full CRUD, custom categories, priorities, deadlines, and comments — built with Java Web, JSP, and MySQL.',
      highlightsPt: [
        'CRUD completo de tarefas, categorias e comentários',
        'Prioridade, status, dificuldade e vencimento',
        'Autenticação e edição de conta',
        'Back-end Java Web com MySQL',
      ],
      highlightsEn: [
        'Full CRUD for tasks, categories & comments',
        'Priority, status, difficulty & due dates',
        'Authentication & account editing',
        'Java Web backend with MySQL',
      ],
      tags: ['Java', 'JSP', 'MySQL', 'HTML/CSS'],
      repoUrl: 'https://github.com/victorherculini/task-manager',
    },
    {
      id: 'rededevs',
      repoName: 'rededevs',
      index: '05',
      category: 'web',
      year: '2025',
      type: 'window',
      urlLabel: 'rededevs.social',
      cover: 'pictures/rededevs/home.png',
      gallery: [
        { src: 'pictures/rededevs/home.png', captionPt: 'Feed interativo com curtidas e comentários', captionEn: 'Interactive feed with likes & comments' },
        { src: 'pictures/rededevs/post.png', captionPt: 'Criação e edição de publicações', captionEn: 'Post publishing & editing' },
        { src: 'pictures/rededevs/perfil.png', captionPt: 'Perfil customizável com avatar', captionEn: 'Customizable profile & avatar' },
        { src: 'pictures/rededevs/cadastro.png', captionPt: 'Fluxo de cadastro', captionEn: 'Sign-up flow' },
      ],
      title: 'RedeDevs',
      catPt: 'Plataforma social',
      catEn: 'Developer social network',
      descPt: 'Plataforma social para conectar desenvolvedores, incentivar interação e fortalecer comunidades técnicas — com posts, curtidas, comentários, busca e perfis.',
      descEn: 'Modern social platform built to connect developers and strengthen technical communities — featuring posts, likes, comments, search, and profiles.',
      highlightsPt: [
        'Feed responsivo com curtidas, comentários e busca',
        'Publicação, edição e exclusão em tempo real',
        'Perfis customizáveis com upload de foto',
        'Performance pura em HTML, CSS e JavaScript',
      ],
      highlightsEn: [
        'Responsive feed with likes, comments & search',
        'Instant post creation, editing & removal',
        'Customizable profiles with avatar upload',
        'Fast zero-dependency HTML, CSS & JS',
      ],
      tags: ['JavaScript', 'HTML', 'CSS', 'LocalStorage'],
      repoUrl: 'https://github.com/victorherculini/rededevs',
    },
    {
      id: 'pokemon-showdown',
      repoName: 'pokemon-showdown',
      index: '06',
      category: 'systems',
      year: '2025',
      type: 'window',
      urlLabel: 'PokemonShowdown.jar',
      cover: 'pictures/pokemon/batalha.png',
      gallery: [
        { src: 'pictures/pokemon/batalha.png', captionPt: 'Batalha em turnos Player vs Server', captionEn: 'Turn-based Player vs Server battle' },
        { src: 'pictures/pokemon/menu.png', captionPt: 'Menu principal — local e online', captionEn: 'Main menu — local & online' },
        { src: 'pictures/pokemon/select-pkm.png', captionPt: 'Seleção estratégica de Pokémon', captionEn: 'Pokémon selection screen' },
        { src: 'pictures/pokemon/vencedor.png', captionPt: 'Tela de vitória', captionEn: 'Victory screen' },
      ],
      title: 'Pokémon Showdown',
      catPt: 'Interface & lógica',
      catEn: 'Java desktop & multiplayer',
      descPt: 'Jogo de batalha Pokémon desenvolvido em Java com interface gráfica Swing, oferecendo combates estratégicos em turnos tanto localmente quanto online em arquitetura cliente-servidor.',
      descEn: 'Turn-based Pokémon battle game built in Java with a Swing GUI and client-server architecture for both local and online multiplayer matches.',
      highlightsPt: [
        'Combates locais e online (cliente-servidor)',
        'Motor de turnos com barra de HP e golpes',
        'Interface gráfica desktop em Java Swing',
        'Modelagem orientada a objetos',
      ],
      highlightsEn: [
        'Local & online multiplayer (client-server)',
        'Turn-based engine with dynamic HP & moves',
        'Desktop GUI crafted in Java Swing',
        'Object-oriented game state architecture',
      ],
      tags: ['Java', 'Swing', 'Sockets', 'OOP'],
      repoUrl: 'https://github.com/victorherculini/pokemon-showdown',
    },
  ];

  /* ── State ─────────────────────────────────────────────────────────────── */
  const state = {
    theme: document.documentElement.getAttribute('data-theme') || 'noir',
    lang: (() => {
      try {
        return localStorage.getItem('vh_lang') === 'en' ? 'en' : 'pt';
      } catch (e) {
        return 'pt';
      }
    })(),
    activeRole: 0,
    activeWorkflow: 0,
    projectFilter: 'all',
    projectLayout: 'grid',
    ghData: null,
    ghLangFilter: 'all',
    ghSearch: '',
    ghExpanded: false,
    modalProject: null,
    modalImgIdx: 0,
    cmdItems: [],
    cmdSelectedIdx: 0,
  };

  /* ── Helpers ───────────────────────────────────────────────────────────── */
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
  const t = (key) => I18N[state.lang]?.[key] ?? I18N.pt[key] ?? key;

  const escapeHtml = (str = '') =>
    String(str).replace(/[&<>"']/g, (ch) => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
    }[ch]));

  const formatRelativeTime = (iso) => {
    if (!iso) return '';
    const diff = Date.now() - new Date(iso).getTime();
    if (Number.isNaN(diff) || diff < 0) return state.lang === 'pt' ? 'agora' : 'just now';
    const mins = Math.floor(diff / 60000);
    const hrs = Math.floor(mins / 60);
    const days = Math.floor(hrs / 24);
    const months = Math.floor(days / 30);

    if (state.lang === 'pt') {
      if (mins < 5) return 'agora';
      if (mins < 60) return `há ${mins}m`;
      if (hrs < 24) return `há ${hrs}h`;
      if (days < 30) return `há ${days}d`;
      return `há ${months} ${months === 1 ? 'mês' : 'meses'}`;
    }
    if (mins < 5) return 'just now';
    if (mins < 60) return `${mins}m ago`;
    if (hrs < 24) return `${hrs}h ago`;
    if (days < 30) return `${days}d ago`;
    return `${months}mo ago`;
  };

  let toastTimer = null;
  const showToast = (msg) => {
    const el = $('#toast');
    if (!el) return;
    el.textContent = msg;
    el.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove('is-visible'), 2500);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONFIG.email);
      showToast(state.lang === 'pt' ? `Email copiado: ${CONFIG.email}` : `Email copied: ${CONFIG.email}`);
    } catch (e) {
      window.location.href = `mailto:${CONFIG.email}`;
    }
  };

  /* ── Theme Switcher (Noir · Aurora · Paper) ────────────────────────────── */
  const applyTheme = (theme, announce = false) => {
    const valid = THEME_META_COLORS[theme] ? theme : 'noir';
    state.theme = valid;

    // Disable CSS transitions for 1 frame so custom properties repaint crisply everywhere
    document.documentElement.classList.add('theme-switching');
    document.documentElement.setAttribute('data-theme', valid);
    $('#metaThemeColor')?.setAttribute('content', THEME_META_COLORS[valid]);
    void document.documentElement.offsetHeight;
    requestAnimationFrame(() => {
      document.documentElement.classList.remove('theme-switching');
    });

    try {
      localStorage.setItem('vh_editorial_theme', valid);
    } catch (e) {}

    $$('[data-set-theme]').forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.setTheme === valid);
    });

    // Update theme-aware project covers in place (no DOM thrash / image flicker)
    $$('[data-cover-dark][data-cover-light]').forEach((img) => {
      const next = valid === 'paper' ? img.dataset.coverLight : img.dataset.coverDark;
      if (img.getAttribute('src') !== next) img.setAttribute('src', next);
    });

    if (announce) {
      const names = { noir: 'Noir Editorial', aurora: 'Aurora Ink', paper: 'Paper Claro' };
      showToast(state.lang === 'pt' ? `Tema: ${names[valid]}` : `Theme: ${valid.toUpperCase()}`);
    }
  };

  const initTheme = () => {
    $$('[data-set-theme]').forEach((btn) => {
      btn.addEventListener('click', () => applyTheme(btn.dataset.setTheme, true));
    });
    applyTheme(state.theme, false);
  };

  /* ── Bilingual Engine (PT-BR / EN) ─────────────────────────────────────── */
  const renderAboutBio = () => {
    const bioEl = $('#aboutBio');
    if (!bioEl) return;
    const words = t('about.bio');
    if (!Array.isArray(words)) return;

    bioEl.innerHTML = words
      .map((w, idx) => {
        const match = w.match(/^\*(.+)\*([.,;:!?]*)$/);
        const isHighlight = Boolean(match);
        const clean = match ? match[1] : w;
        const trailing = match ? match[2] : '';
        const delay = Math.min(idx * 24, 650);
        if (isHighlight) {
          return `<span class="bio-word" style="transition-delay:${delay}ms"><span class="about__bio__highlight">${escapeHtml(clean)}</span>${escapeHtml(trailing)}</span>`;
        }
        return `<span class="bio-word" style="transition-delay:${delay}ms">${escapeHtml(clean)}</span>`;
      })
      .join('');
  };

  const applyLanguage = (lang, announce = false) => {
    state.lang = lang === 'en' ? 'en' : 'pt';
    document.documentElement.lang = state.lang === 'en' ? 'en' : 'pt-BR';
    try {
      localStorage.setItem('vh_lang', state.lang);
    } catch (e) {}

    const langBtn = $('#langToggle');
    if (langBtn) langBtn.textContent = state.lang.toUpperCase();

    $$('[data-i18n]').forEach((el) => {
      const val = t(el.getAttribute('data-i18n'));
      if (typeof val === 'string') el.textContent = val;
    });

    $$('[data-i18n-html]').forEach((el) => {
      const val = t(el.getAttribute('data-i18n-html'));
      if (typeof val === 'string') el.innerHTML = val;
    });

    renderAboutBio();

    const ghInput = $('#ghSearchInput');
    if (ghInput) ghInput.placeholder = t('gh.searchPlaceholder');
    const cmdInput = $('#cmdInput');
    if (cmdInput) cmdInput.placeholder = t('cmd.placeholder');

    const subjectInput = $('#subject');
    if (subjectInput && !subjectInput.dataset.userEdited) {
      const activeChip = $('.topic-pill.is-active');
      const topic = activeChip ? activeChip.textContent.trim() : 'Web / Mobile';
      subjectInput.value = `${state.lang === 'pt' ? 'Projeto' : 'Project'} — ${topic}`;
    }

    updateWorkflowDetail(state.activeWorkflow);
    renderProjects();
    renderGitHubLanguages();
    renderGitHubRepos();
    updateGitHubTelemetry();

    if (announce) {
      showToast(state.lang === 'pt' ? 'Idioma: Português' : 'Language: English');
    }
  };

  const initLanguage = () => {
    $('#langToggle')?.addEventListener('click', () => {
      applyLanguage(state.lang === 'pt' ? 'en' : 'pt', true);
    });
  };

  /* ── Clock & Dynamic Year ──────────────────────────────────────────────── */
  const initTime = () => {
    const year = String(new Date().getFullYear());
    $$('[data-current-year]').forEach((el) => { el.textContent = year; });

    const updateClock = () => {
      let timeStr = '';
      try {
        timeStr = new Intl.DateTimeFormat('pt-BR', {
          timeZone: 'America/Sao_Paulo',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }).format(new Date());
      } catch (e) {
        const d = new Date();
        timeStr = `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
      }
      const c1 = $('#liveClock');
      const c2 = $('#aboutClock');
      if (c1) c1.textContent = `${timeStr} BRT`;
      if (c2) c2.textContent = timeStr;
    };
    updateClock();
    setInterval(updateClock, 30000);
  };

  /* ── Scroll Progress, Sticky Nav, Scroll Spy & Mobile Drawer ───────────── */
  const initNavAndScroll = () => {
    const nav = $('#nav');
    const progress = $('#progress');
    const navLinks = $$('.nav__link');
    const sectionIds = ['about', 'focus', 'workflow', 'work', 'vision', 'contact'];
    const sections = sectionIds.map((id) => document.getElementById(id));

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        nav?.classList.toggle('scrolled', y > 28);

        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const ratio = maxScroll > 0 ? Math.min(1, Math.max(0, y / maxScroll)) : 0;
        if (progress) progress.style.transform = `scaleX(${ratio})`;

        const probe = y + window.innerHeight * 0.34;
        let currentId = '';
        sections.forEach((sec, idx) => {
          if (sec && sec.offsetTop <= probe) currentId = sectionIds[idx];
        });
        navLinks.forEach((l) => l.classList.toggle('active', l.dataset.nav === currentId));

        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Mobile drawer
    const drawer = $('#mobileDrawer');
    const openBtn = $('#mobileMenuToggle');
    const closeBtn = $('#mobileMenuClose');
    const setDrawer = (open) => {
      if (!drawer) return;
      drawer.classList.toggle('is-open', open);
      drawer.setAttribute('aria-hidden', String(!open));
      openBtn?.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    };

    openBtn?.addEventListener('click', () => setDrawer(true));
    closeBtn?.addEventListener('click', () => setDrawer(false));
    drawer?.addEventListener('click', (e) => { if (e.target === drawer) setDrawer(false); });
    $$('.mobile-drawer__link').forEach((l) => l.addEventListener('click', () => setDrawer(false)));
    $('#mobileCmdBtn')?.addEventListener('click', () => { setDrawer(false); openCmdPalette(); });
  };

  /* ── Hero Title Reveal, Role Rotator & Counters ────────────────────────── */
  const animateCounter = (el, target, suffix = '') => {
    if (!el || !Number.isFinite(target)) return;
    const dur = 1100;
    const start = performance.now();
    const pad = target < 10 && !suffix;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = Math.round(target * eased);
      el.textContent = (pad && val < 10 ? `0${val}` : String(val)) + suffix;
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const initHero = () => {
    setTimeout(() => {
      $('#heroTitle')?.classList.add('in');
    }, 160);

    $$('.hero__side__stat__num').forEach((el) => {
      const target = Number(el.dataset.target);
      const suffix = el.dataset.suffix || '';
      if (Number.isFinite(target)) {
        setTimeout(() => animateCounter(el, target, suffix), 480);
      }
    });

    const roles = $$('.hero__role-item');
    if (roles.length > 1) {
      setInterval(() => {
        state.activeRole = (state.activeRole + 1) % roles.length;
        roles.forEach((r, i) => r.classList.toggle('is-active', i === state.activeRole));
      }, 3600);
    }
  };

  /* ── Intersection Observer Reveals & Parallax Vision Pillars ───────────── */
  const initRevealsAndParallax = () => {
    const targets = $$('.reveal, [data-stagger], .skill, .about__bio');
    if (!('IntersectionObserver' in window)) {
      targets.forEach((el) => el.classList.add('in'));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
      );
      targets.forEach((el) => io.observe(el));
    }

    // Subtle parallax on vision pillars (desktop only)
    const pillars = $$('.pillar');
    if (!pillars.length || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let pTicking = false;
    window.addEventListener(
      'scroll',
      () => {
        if (pTicking || window.innerWidth <= 780) return;
        pTicking = true;
        requestAnimationFrame(() => {
          pillars.forEach((p, i) => {
            const r = p.getBoundingClientRect();
            if (r.top > window.innerHeight || r.bottom < 0) return;
            const offset = (r.top + r.bottom) / 2 - window.innerHeight / 2;
            p.style.transform = `translateY(${offset * 0.025 * (i - 1)}px)`;
          });
          pTicking = false;
        });
      },
      { passive: true }
    );
  };

  /* ── Custom Cursor, Spotlight & Magnetic Buttons ───────────────────────── */
  const initPointerFX = () => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!finePointer) return;

    // Spotlight tracking
    document.addEventListener(
      'pointermove',
      (e) => {
        const card = e.target.closest('.spotlight');
        if (!card) return;
        const r = card.getBoundingClientRect();
        card.style.setProperty('--mx', `${e.clientX - r.left}px`);
        card.style.setProperty('--my', `${e.clientY - r.top}px`);
      },
      { passive: true }
    );

    // Magnetic buttons
    $$('.magnetic').forEach((el) => {
      el.addEventListener('pointermove', (e) => {
        const r = el.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.16;
        const y = (e.clientY - r.top - r.height / 2) * 0.16;
        el.style.transform = `translate(${x}px, ${y}px)`;
      });
      el.addEventListener('pointerleave', () => { el.style.transform = ''; });
    });

    // Custom cursor
    const cursor = $('#cursor');
    const cursorLabel = $('#cursorLabel');
    if (!cursor) return;

    let cx = 0, cy = 0, tx = 0, ty = 0, raf = null, ready = false;

    const step = () => {
      cx += (tx - cx) * 0.22;
      cy += (ty - cy) * 0.22;
      cursor.style.transform = `translate(${cx}px, ${cy}px) translate(-50%, -50%)`;
      if (Math.abs(tx - cx) > 0.12 || Math.abs(ty - cy) > 0.12) {
        raf = requestAnimationFrame(step);
      } else {
        raf = null;
      }
    };

    window.addEventListener('pointermove', (e) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!ready) {
        cx = tx;
        cy = ty;
        ready = true;
        cursor.classList.add('is-ready');
      }
      if (!raf) raf = requestAnimationFrame(step);
    }, { passive: true });

    document.addEventListener('pointerover', (e) => {
      const target = e.target;
      const isText = target.matches('input, textarea');
      const projectCard = target.closest('.project') && !target.closest('a');
      const isHover = target.closest('a, button, [data-cursor="hover"]');

      cursor.classList.toggle('cursor--text', isText);
      cursor.classList.toggle('cursor--view', !!projectCard && !isText);
      cursor.classList.toggle('cursor--hover', !!isHover && !projectCard && !isText);

      if (cursorLabel && projectCard) {
        cursorLabel.textContent = state.lang === 'pt' ? 'Ver' : 'View';
      }
    });

    document.addEventListener('pointerleave', () => cursor.classList.remove('is-ready'));
  };

  /* ── Interactive Workflow Pipeline ─────────────────────────────────────── */
  const WF_META = [
    { tag: '01 · IDEA', key: 'wf.d1' },
    { tag: '02 · PROMPT', key: 'wf.d2' },
    { tag: '03 · BUILD', key: 'wf.d3' },
    { tag: '04 · SHIP', key: 'wf.d4' },
  ];

  const updateWorkflowDetail = (idx) => {
    state.activeWorkflow = idx;
    $$('.wf-step').forEach((el, i) => el.classList.toggle('is-active', i === idx));
    const meta = WF_META[idx] || WF_META[0];
    const tagEl = $('#wfTag');
    const textEl = $('#wfText');
    if (tagEl) tagEl.textContent = meta.tag;
    if (textEl) textEl.textContent = t(meta.key);
  };

  const initWorkflow = () => {
    const steps = $$('.wf-step');
    if (!steps.length) return;
    let interacting = false;

    steps.forEach((step) => {
      const idx = Number(step.dataset.step);
      step.addEventListener('click', () => { interacting = true; updateWorkflowDetail(idx); });
      step.addEventListener('mouseenter', () => { interacting = true; updateWorkflowDetail(idx); });
    });

    $('#workflowTrack')?.addEventListener('mouseleave', () => { interacting = false; });

    const pulseNode = (idx) => {
      const el = steps[idx];
      if (!el) return;
      el.classList.remove('is-pulsing');
      void el.offsetWidth;
      el.classList.add('is-pulsing');
      if (!interacting) updateWorkflowDetail(idx);
    };

    const runWave = () => {
      setTimeout(() => pulseNode(0), 150);
      setTimeout(() => pulseNode(1), 2450);
      setTimeout(() => pulseNode(2), 4800);
      setTimeout(() => pulseNode(3), 7100);
    };

    runWave();
    setInterval(runWave, 8500);
  };

  /* ── Featured Projects Grid / Strip + Showcase Modal ───────────────────── */
  const findLiveRepo = (name) =>
    state.ghData?.repos?.find((r) => r.name.toLowerCase() === name.toLowerCase()) || null;

  const renderProjects = () => {
    const grid = $('#projectsGrid');
    if (!grid) return;

    grid.setAttribute('data-view', state.projectLayout);
    const stripNav = $('#projectsStripNav');
    if (stripNav) stripNav.hidden = state.projectLayout !== 'carousel';

    const list = FEATURED_PROJECTS.filter(
      (p) => state.projectFilter === 'all' || p.category === state.projectFilter
    );

    grid.innerHTML = list
      .map((p) => {
        const live = findLiveRepo(p.repoName);
        const stars = live?.stargazers_count ?? 0;
        const updated = live?.pushed_at ? formatRelativeTime(live.pushed_at) : p.year;
        const cat = state.lang === 'pt' ? p.catPt : p.catEn;
        const desc = state.lang === 'pt' ? p.descPt : p.descEn;
        const cover = p.coverLight && state.theme === 'paper' ? p.coverLight : p.cover;
        const hint = p.gallery.length ? `${t('work.viewGallery')} (${p.gallery.length})` : t('work.viewDetails');

        let visualHtml = '';
        if (p.type === 'phone') {
          const themeAttrs = p.coverLight
            ? ` data-cover-dark="${encodeURI(p.cover)}" data-cover-light="${encodeURI(p.coverLight)}"`
            : '';
          visualHtml = `
            <div class="phone-mock">
              <span class="phone-mock__notch" aria-hidden="true"></span>
              <div class="phone-mock__screen">
                <img src="${encodeURI(cover)}"${themeAttrs} alt="${escapeHtml(p.title)}">
              </div>
            </div>`;
        } else if (p.type === 'window') {
          visualHtml = `
            <div class="window-mock">
              <div class="window-mock__bar">
                <span class="window-mock__dots"><span></span><span></span><span></span></span>
                <span class="window-mock__url">${escapeHtml(p.urlLabel)}</span>
              </div>
              <div class="window-mock__viewport">
                <img src="${encodeURI(cover)}" alt="${escapeHtml(p.title)}">
              </div>
            </div>`;
        } else if (p.type === 'arch' && p.arch) {
          visualHtml = `
            <div class="arch-mock">
              <div class="arch-mock__head">
                <span>${escapeHtml(p.arch.header)}</span>
                <span>SoC</span>
              </div>
              <div class="arch-mock__layers">
                ${p.arch.layers.map((l) => `<div class="arch-layer"><strong>${escapeHtml(l.title)}</strong><span>${escapeHtml(l.sub)}</span></div>`).join('')}
              </div>
              <div class="arch-mock__foot">
                <span>${escapeHtml(p.arch.footLeft)}</span>
                <span>${escapeHtml(p.arch.footRight)}</span>
              </div>
            </div>`;
        }

        return `
          <article class="project spotlight" data-project-id="${escapeHtml(p.id)}" tabindex="0" role="button" aria-label="${escapeHtml(p.title)}">
            <div class="project__cover">
              <span class="project__cover__label">${escapeHtml(p.index)} · ${escapeHtml(p.category)}</span>
              <span class="project__cover__year">${escapeHtml(p.year)}</span>
              ${visualHtml}
            </div>
            <div class="project__body">
              <div class="project__meta-row">
                <span class="project__cat">${escapeHtml(cat)}</span>
                <span class="project__live">
                  ${stars > 0 ? `<span>★ ${stars}</span>` : ''}
                  <span>${escapeHtml(updated)}</span>
                </span>
              </div>
              <h3 class="project__title">${escapeHtml(p.title)}</h3>
              <p class="project__desc">${escapeHtml(desc)}</p>
              <div class="project__tags">
                ${p.tags.map((tag) => `<span class="project__tag">${escapeHtml(tag)}</span>`).join('')}
              </div>
              <div class="project__foot">
                <span class="project__gallery-hint">${escapeHtml(hint)}</span>
                <a href="${escapeHtml(p.repoUrl)}" target="_blank" rel="noopener noreferrer" class="project__link" data-cursor="hover" onclick="event.stopPropagation()">
                  GitHub
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></svg>
                </a>
              </div>
            </div>
          </article>`;
      })
      .join('');

    $$('.project', grid).forEach((card) => {
      const open = () => openProjectModal(card.dataset.projectId);
      card.addEventListener('click', open);
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          open();
        }
      });
    });
  };

  const initProjectControls = () => {
    $$('[data-project-filter]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.projectFilter = btn.dataset.projectFilter;
        $$('[data-project-filter]').forEach((b) => b.classList.toggle('is-active', b === btn));
        renderProjects();
      });
    });

    $$('[data-layout]').forEach((btn) => {
      btn.addEventListener('click', () => {
        state.projectLayout = btn.dataset.layout;
        $$('[data-layout]').forEach((b) => b.classList.toggle('is-active', b === btn));
        renderProjects();
      });
    });

    const scrollStrip = (dir) => {
      const grid = $('#projectsGrid');
      if (!grid) return;
      const card = grid.querySelector('.project');
      const step = card ? card.getBoundingClientRect().width + 24 : 420;
      grid.scrollBy({ left: dir * step, behavior: 'smooth' });
    };

    $('#prjPrev')?.addEventListener('click', () => scrollStrip(-1));
    $('#prjNext')?.addEventListener('click', () => scrollStrip(1));
  };

  /* ── Project Showcase Modal ────────────────────────────────────────────── */
  const renderModalSlide = () => {
    const p = state.modalProject;
    if (!p) return;
    const gallery = $('#pmGallery');
    if (!p.gallery.length) {
      gallery.hidden = true;
      return;
    }

    gallery.hidden = false;
    const slide = p.gallery[state.modalImgIdx] || p.gallery[0];
    $('#pmImage').src = slide.src;
    $('#pmImage').alt = `${p.title} — ${state.lang === 'pt' ? slide.captionPt : slide.captionEn}`;
    $('#pmCaption').textContent = `${state.modalImgIdx + 1}/${p.gallery.length} · ${state.lang === 'pt' ? slide.captionPt : slide.captionEn}`;

    $('#pmNav').hidden = p.gallery.length <= 1;
    const thumbs = $('#pmThumbs');
    thumbs.hidden = p.gallery.length <= 1;
    thumbs.innerHTML = p.gallery
      .map((g, idx) => `<button type="button" class="pm-thumb ${idx === state.modalImgIdx ? 'is-active' : ''}" data-thumb="${idx}"><img src="${escapeHtml(g.src)}" alt="" loading="lazy"></button>`)
      .join('');

    $$('.pm-thumb', thumbs).forEach((btn) => {
      btn.addEventListener('click', () => {
        state.modalImgIdx = Number(btn.dataset.thumb);
        renderModalSlide();
      });
    });
  };

  const openProjectModal = (id) => {
    const p = FEATURED_PROJECTS.find((item) => item.id === id);
    if (!p) return;
    state.modalProject = p;
    state.modalImgIdx = 0;

    const live = findLiveRepo(p.repoName);
    const stars = live?.stargazers_count ?? 0;

    $('#pmBadge').textContent = `${p.index} · ${(state.lang === 'pt' ? p.catPt : p.catEn).toUpperCase()}`;
    $('#pmTitle').textContent = p.title;
    $('#pmDesc').textContent = state.lang === 'pt' ? p.descPt : p.descEn;
    $('#pmHighlights').innerHTML = (state.lang === 'pt' ? p.highlightsPt : p.highlightsEn)
      .map((h) => `<li>${escapeHtml(h)}</li>`)
      .join('');
    $('#pmTags').innerHTML = p.tags.map((tag) => `<span class="project__tag">${escapeHtml(tag)}</span>`).join('');
    $('#pmMeta').textContent = `${p.repoName} · ${p.year}${stars > 0 ? ` · ★ ${stars}` : ''}`;
    $('#pmRepoLink').href = p.repoUrl;

    renderModalSlide();
    const bd = $('#projectBackdrop');
    bd.classList.add('is-open');
    bd.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    const bd = $('#projectBackdrop');
    if (!bd?.classList.contains('is-open')) return;
    bd.classList.remove('is-open');
    bd.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    state.modalProject = null;
  };

  const initProjectModal = () => {
    $('#pmClose')?.addEventListener('click', closeProjectModal);
    $('#projectBackdrop')?.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) closeProjectModal();
    });
    $('#pmPrev')?.addEventListener('click', () => {
      if (!state.modalProject?.gallery.length) return;
      const n = state.modalProject.gallery.length;
      state.modalImgIdx = (state.modalImgIdx - 1 + n) % n;
      renderModalSlide();
    });
    $('#pmNext')?.addEventListener('click', () => {
      if (!state.modalProject?.gallery.length) return;
      const n = state.modalProject.gallery.length;
      state.modalImgIdx = (state.modalImgIdx + 1) % n;
      renderModalSlide();
    });
  };

  /* ── Automated Live GitHub Sync ────────────────────────────────────────── */
  const updateGitHubTelemetry = () => {
    if (!state.ghData) return;
    const { profile, last_push: lastPush, synced_at: syncedAt } = state.ghData;

    const statRepos = $('#statRepos');
    if (statRepos && profile?.public_repos != null) {
      statRepos.dataset.target = String(profile.public_repos);
      statRepos.textContent = `${profile.public_repos}+`;
    }

    const heroLive = $('#heroLiveText');
    if (heroLive && profile) {
      const pushAgo = lastPush?.created_at ? ` · push ${formatRelativeTime(lastPush.created_at)}` : '';
      heroLive.textContent = `GitHub Live · ${profile.public_repos} repos${pushAgo}`;
    }

    const statusEl = $('#ghSyncStatus');
    if (statusEl && profile) {
      const stars = profile.total_stars ?? 0;
      const ago = syncedAt ? formatRelativeTime(syncedAt) : '';
      statusEl.textContent =
        state.lang === 'pt'
          ? `@${CONFIG.githubUser} · ${profile.public_repos} repositórios públicos · ★ ${stars}${ago ? ` · sincronizado ${ago}` : ''}`
          : `@${CONFIG.githubUser} · ${profile.public_repos} public repos · ★ ${stars}${ago ? ` · synced ${ago}` : ''}`;
    }
  };

  const renderGitHubLanguages = () => {
    const barEl = $('#ghLangBar');
    const legendEl = $('#ghLangLegend');
    const filtersEl = $('#ghLangFilters');
    if (!barEl || !legendEl || !filtersEl || !state.ghData?.languages) return;

    const entries = Object.entries(state.ghData.languages).sort((a, b) => b[1] - a[1]);
    const total = entries.reduce((sum, [, c]) => sum + c, 0);
    if (!total) return;

    barEl.innerHTML = entries
      .map(([lang, count]) => `<span class="gh-lang-seg" style="width:${((count / total) * 100).toFixed(1)}%; background:${LANG_COLORS[lang] || 'var(--accent)'};"></span>`)
      .join('');

    legendEl.innerHTML = entries
      .slice(0, 6)
      .map(([lang, count]) => `<span class="gh-lang-item"><span class="gh-lang-dot" style="background:${LANG_COLORS[lang] || 'var(--accent)'};"></span>${escapeHtml(lang)} ${Math.round((count / total) * 100)}%</span>`)
      .join('');

    const top = entries.slice(0, 5).map(([l]) => l);
    filtersEl.innerHTML = ['all', ...top]
      .map((lang) => {
        const label = lang === 'all' ? t('filter.all') : lang;
        return `<button type="button" class="filter-btn ${state.ghLangFilter === lang ? 'is-active' : ''}" data-gh-lang="${escapeHtml(lang)}">${escapeHtml(label)}</button>`;
      })
      .join('');

    $$('[data-gh-lang]', filtersEl).forEach((btn) => {
      btn.addEventListener('click', () => {
        state.ghLangFilter = btn.dataset.ghLang;
        state.ghExpanded = false;
        renderGitHubLanguages();
        renderGitHubRepos();
      });
    });
  };

  const renderGitHubRepos = () => {
    const grid = $('#ghReposGrid');
    const moreBtn = $('#ghToggleMoreBtn');
    if (!grid || !state.ghData?.repos) return;

    const q = state.ghSearch.trim().toLowerCase();
    const filtered = state.ghData.repos.filter((repo) => {
      if (repo.name.toLowerCase() === CONFIG.githubUser.toLowerCase()) return false;
      if (state.ghLangFilter !== 'all' && repo.language !== state.ghLangFilter) return false;
      if (!q) return true;
      return (
        repo.name.toLowerCase().includes(q) ||
        (repo.description || '').toLowerCase().includes(q) ||
        (repo.language || '').toLowerCase().includes(q)
      );
    });

    if (!filtered.length) {
      grid.innerHTML = `<div class="gh-empty">${escapeHtml(t('gh.noResults'))}</div>`;
      if (moreBtn) moreBtn.hidden = true;
      return;
    }

    const visible = state.ghExpanded ? filtered : filtered.slice(0, CONFIG.initialRepoLimit);
    grid.innerHTML = visible
      .map((repo) => {
        const lang = repo.language || 'Code';
        const color = LANG_COLORS[lang] || 'var(--accent)';
        const desc = repo.description || t('gh.noDesc');
        const updated = formatRelativeTime(repo.pushed_at || repo.updated_at);
        return `
          <a href="${escapeHtml(repo.html_url)}" target="_blank" rel="noopener noreferrer" class="repo-card" data-cursor="hover">
            <div class="repo-card__top">
              <span class="repo-card__name">${escapeHtml(repo.name)}</span>
              <span class="repo-card__arrow" aria-hidden="true">↗</span>
            </div>
            <p class="repo-card__desc">${escapeHtml(desc)}</p>
            <div class="repo-card__foot">
              <span class="repo-card__lang"><span class="gh-lang-dot" style="background:${color};"></span>${escapeHtml(lang)}</span>
              <span>${repo.stargazers_count > 0 ? `★ ${repo.stargazers_count} · ` : ''}${escapeHtml(updated)}</span>
            </div>
          </a>`;
      })
      .join('');

    if (moreBtn) {
      if (filtered.length > CONFIG.initialRepoLimit) {
        moreBtn.hidden = false;
        const rest = filtered.length - CONFIG.initialRepoLimit;
        moreBtn.querySelector('span').textContent = state.ghExpanded ? t('gh.showLess') : `${t('gh.showMore')} (+${rest})`;
      } else {
        moreBtn.hidden = true;
      }
    }
  };

  const updateProjectLiveBadges = () => {
    $$('#projectsGrid .project').forEach((card) => {
      const p = FEATURED_PROJECTS.find((item) => item.id === card.dataset.projectId);
      if (!p) return;
      const live = findLiveRepo(p.repoName);
      const stars = live?.stargazers_count ?? 0;
      const updated = live?.pushed_at ? formatRelativeTime(live.pushed_at) : p.year;
      const liveEl = $('.project__live', card);
      if (liveEl) {
        liveEl.innerHTML = `${stars > 0 ? `<span>★ ${stars}</span>` : ''}<span>${escapeHtml(updated)}</span>`;
      }
    });
  };

  const hydrateGitHub = (data) => {
    state.ghData = data;
    updateGitHubTelemetry();
    renderGitHubLanguages();
    renderGitHubRepos();
    updateProjectLiveBadges();
  };

  const fetchLiveGitHub = async (force = false) => {
    const btn = $('#ghRefreshBtn');
    if (force) btn?.classList.add('is-spinning');

    try {
      if (!force) {
        const cachedRaw = localStorage.getItem(CONFIG.cacheKey);
        if (cachedRaw) {
          const cached = JSON.parse(cachedRaw);
          if (cached?.synced_at && Date.now() - new Date(cached.synced_at).getTime() < CONFIG.cacheTtlMs) {
            hydrateGitHub(cached);
            return;
          }
        }
      }

      const headers = { Accept: 'application/vnd.github+json' };
      const [uRes, rRes, eRes] = await Promise.all([
        fetch(`https://api.github.com/users/${CONFIG.githubUser}`, { headers }),
        fetch(`https://api.github.com/users/${CONFIG.githubUser}/repos?per_page=100&sort=updated`, { headers }),
        fetch(`https://api.github.com/users/${CONFIG.githubUser}/events/public?per_page=15`, { headers }),
      ]);
      if (!uRes.ok || !rRes.ok) throw new Error('rate limit');

      const [user, repos, events] = await Promise.all([
        uRes.json(),
        rRes.json(),
        eRes.ok ? eRes.json() : [],
      ]);

      const owned = repos.filter((r) => !r.fork);
      const totalStars = owned.reduce((acc, r) => acc + (r.stargazers_count || 0), 0);
      const languages = {};
      owned.forEach((r) => { if (r.language) languages[r.language] = (languages[r.language] || 0) + 1; });
      const lastPush = Array.isArray(events) ? events.find((e) => e.type === 'PushEvent') : null;

      const fresh = {
        synced_at: new Date().toISOString(),
        profile: {
          login: user.login,
          name: user.name,
          public_repos: user.public_repos,
          followers: user.followers,
          total_stars: totalStars,
        },
        last_push: lastPush ? { repo: lastPush.repo?.name, created_at: lastPush.created_at } : state.ghData?.last_push || null,
        languages,
        repos: owned.map((r) => ({
          name: r.name,
          description: r.description,
          language: r.language,
          stargazers_count: r.stargazers_count,
          html_url: r.html_url,
          updated_at: r.updated_at,
          pushed_at: r.pushed_at,
        })),
      };

      try { localStorage.setItem(CONFIG.cacheKey, JSON.stringify(fresh)); } catch (e) {}
      hydrateGitHub(fresh);
      if (force) showToast(state.lang === 'pt' ? 'GitHub sincronizado ao vivo!' : 'GitHub synced live!');
    } catch (err) {
      if (force) showToast(state.lang === 'pt' ? 'Usando snapshot local atualizado.' : 'Using updated local snapshot.');
    } finally {
      btn?.classList.remove('is-spinning');
    }
  };

  const initGitHub = async () => {
    try {
      const res = await fetch(CONFIG.snapshotUrl);
      if (res.ok) hydrateGitHub(await res.json());
    } catch (e) {}

    $('#ghSearchInput')?.addEventListener('input', (e) => {
      state.ghSearch = e.target.value;
      state.ghExpanded = false;
      renderGitHubRepos();
    });
    $('#ghToggleMoreBtn')?.addEventListener('click', () => {
      state.ghExpanded = !state.ghExpanded;
      renderGitHubRepos();
    });
    $('#ghRefreshBtn')?.addEventListener('click', () => fetchLiveGitHub(true));

    fetchLiveGitHub(false);
  };

  /* ── Command Palette (⌘K / Ctrl+K) ─────────────────────────────────────── */
  const buildCmdItems = (query) => {
    const q = query.trim().toLowerCase();
    const isPt = state.lang === 'pt';

    const actions = [
      { group: isPt ? 'Ações' : 'Actions', title: isPt ? 'Tema: Noir (Editorial quente)' : 'Theme: Noir (Warm Editorial)', meta: 'Theme', run: () => applyTheme('noir', true) },
      { group: isPt ? 'Ações' : 'Actions', title: isPt ? 'Tema: Aurora (Deep Ink)' : 'Theme: Aurora (Deep Ink)', meta: 'Theme', run: () => applyTheme('aurora', true) },
      { group: isPt ? 'Ações' : 'Actions', title: isPt ? 'Tema: Paper (Claro)' : 'Theme: Paper (Light)', meta: 'Theme', run: () => applyTheme('paper', true) },
      { group: isPt ? 'Ações' : 'Actions', title: isPt ? 'Alternar idioma (PT / EN)' : 'Switch language (PT / EN)', meta: state.lang === 'pt' ? '→ EN' : '→ PT', run: () => applyLanguage(state.lang === 'pt' ? 'en' : 'pt', true) },
      { group: isPt ? 'Ações' : 'Actions', title: isPt ? `Copiar email (${CONFIG.email})` : `Copy email (${CONFIG.email})`, meta: 'Copy', run: copyEmail },
      { group: isPt ? 'Ações' : 'Actions', title: isPt ? 'Sincronizar GitHub agora' : 'Sync GitHub live now', meta: 'API', run: () => fetchLiveGitHub(true) },
    ];

    const sections = [
      { id: '#about', label: `01 · ${t('nav.about')}` },
      { id: '#focus', label: `02 · ${t('nav.focus')}` },
      { id: '#workflow', label: `03 · ${t('nav.workflow')}` },
      { id: '#work', label: `04 · ${t('nav.work')}` },
      { id: '#vision', label: `05 · ${t('nav.vision')}` },
      { id: '#contact', label: `06 · ${t('nav.contact')}` },
    ].map((s) => ({
      group: isPt ? 'Seções' : 'Sections',
      title: s.label,
      meta: s.id,
      run: () => document.querySelector(s.id)?.scrollIntoView({ behavior: 'smooth' }),
    }));

    const featured = FEATURED_PROJECTS.map((p) => ({
      group: isPt ? 'Projetos' : 'Projects',
      title: p.title,
      meta: p.tags.slice(0, 2).join(' · '),
      run: () => openProjectModal(p.id),
    }));

    const repos = (state.ghData?.repos || [])
      .filter((r) => r.name.toLowerCase() !== CONFIG.githubUser.toLowerCase())
      .map((r) => ({
        group: 'GitHub',
        title: r.name,
        meta: r.language || 'Repo',
        run: () => window.open(r.html_url, '_blank', 'noopener,noreferrer'),
      }));

    const all = [...actions, ...sections, ...featured, ...repos];
    return q
      ? all.filter((i) => i.title.toLowerCase().includes(q) || i.meta.toLowerCase().includes(q) || i.group.toLowerCase().includes(q))
      : [...actions.slice(0, 4), ...sections, ...featured.slice(0, 4), ...repos.slice(0, 5)];
  };

  const setCmdSelection = (idx) => {
    if (!state.cmdItems.length) return;
    state.cmdSelectedIdx = (idx + state.cmdItems.length) % state.cmdItems.length;
    $$('.cmd-item', $('#cmdList')).forEach((el, i) => {
      const sel = i === state.cmdSelectedIdx;
      el.classList.toggle('is-selected', sel);
      el.setAttribute('aria-selected', String(sel));
      if (sel) el.scrollIntoView({ block: 'nearest' });
    });
  };

  const renderCmdList = (query = '') => {
    const listEl = $('#cmdList');
    if (!listEl) return;
    state.cmdItems = buildCmdItems(query);
    state.cmdSelectedIdx = 0;

    if (!state.cmdItems.length) {
      listEl.innerHTML = `<div class="gh-empty">${escapeHtml(t('gh.noResults'))}</div>`;
      return;
    }

    let html = '';
    let lastGroup = '';
    state.cmdItems.forEach((item, idx) => {
      if (item.group !== lastGroup) {
        lastGroup = item.group;
        html += `<div class="cmd-group">${escapeHtml(item.group)}</div>`;
      }
      html += `
        <button type="button" class="cmd-item ${idx === 0 ? 'is-selected' : ''}" data-cmd-idx="${idx}" role="option">
          <span class="cmd-item__title">${escapeHtml(item.title)}</span>
          <span class="cmd-item__meta">${escapeHtml(item.meta)}</span>
        </button>`;
    });

    listEl.innerHTML = html;
    $$('.cmd-item', listEl).forEach((btn) => {
      btn.addEventListener('click', () => {
        const item = state.cmdItems[Number(btn.dataset.cmdIdx)];
        closeCmdPalette();
        item?.run?.();
      });
      btn.addEventListener('mouseenter', () => setCmdSelection(Number(btn.dataset.cmdIdx)));
    });
  };

  const openCmdPalette = () => {
    const bd = $('#cmdBackdrop');
    const inp = $('#cmdInput');
    if (!bd || !inp) return;
    bd.classList.add('is-open');
    bd.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    inp.value = '';
    renderCmdList('');
    setTimeout(() => inp.focus(), 40);
  };

  const closeCmdPalette = () => {
    const bd = $('#cmdBackdrop');
    if (!bd?.classList.contains('is-open')) return;
    bd.classList.remove('is-open');
    bd.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  const initCmdPalette = () => {
    $('#openCmdPalette')?.addEventListener('click', openCmdPalette);
    $('#footerCmdBtn')?.addEventListener('click', openCmdPalette);
    $('#cmdBackdrop')?.addEventListener('click', (e) => {
      if (e.target === e.currentTarget) closeCmdPalette();
    });
    $('#cmdInput')?.addEventListener('input', (e) => renderCmdList(e.target.value));

    document.addEventListener('keydown', (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        $('#cmdBackdrop')?.classList.contains('is-open') ? closeCmdPalette() : openCmdPalette();
        return;
      }
      if (e.key === 'Escape') {
        closeCmdPalette();
        closeProjectModal();
        return;
      }
      if ($('#cmdBackdrop')?.classList.contains('is-open')) {
        if (e.key === 'ArrowDown') { e.preventDefault(); setCmdSelection(state.cmdSelectedIdx + 1); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); setCmdSelection(state.cmdSelectedIdx - 1); }
        else if (e.key === 'Enter') {
          e.preventDefault();
          const item = state.cmdItems[state.cmdSelectedIdx];
          closeCmdPalette();
          item?.run?.();
        }
        return;
      }
      if ($('#projectBackdrop')?.classList.contains('is-open')) {
        if (e.key === 'ArrowRight') $('#pmNext')?.click();
        if (e.key === 'ArrowLeft') $('#pmPrev')?.click();
      }
    });
  };

  /* ── Contact Form & Quick Copy ─────────────────────────────────────────── */
  const initContact = () => {
    $$('[data-copy-email]').forEach((btn) => btn.addEventListener('click', copyEmail));

    const subjectInput = $('#subject');
    subjectInput?.addEventListener('input', () => { subjectInput.dataset.userEdited = 'true'; });

    $$('.topic-pill').forEach((chip) => {
      chip.addEventListener('click', () => {
        $$('.topic-pill').forEach((c) => c.classList.remove('is-active'));
        chip.classList.add('is-active');
        if (subjectInput) {
          delete subjectInput.dataset.userEdited;
          subjectInput.value = `${state.lang === 'pt' ? 'Projeto' : 'Project'} — ${chip.textContent.trim()}`;
        }
      });
    });

    const form = $('#contactForm');
    const feedback = $('#formFeedback');
    const readData = () => ({
      name: $('#name')?.value.trim() || '',
      email: $('#email')?.value.trim() || '',
      subject: $('#subject')?.value.trim() || 'Contato via Portfolio',
      message: $('#message')?.value.trim() || '',
    });
    const setFeedback = (msg, ok = false) => {
      if (!feedback) return;
      feedback.textContent = msg;
      feedback.classList.toggle('is-ok', ok);
    };

    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const d = readData();
      if (!d.name || !d.message) return setFeedback(t('form.errEmpty'), false);
      if (!d.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)) return setFeedback(t('form.errEmail'), false);
      setFeedback(t('form.okEmail'), true);
      const subject = encodeURIComponent(d.subject);
      const body = encodeURIComponent(
        `Olá Victor!\n\nNome: ${d.name}\nEmail: ${d.email}\n\nMensagem:\n${d.message}\n\n— Via victorherculini.vercel.app`
      );
      window.location.href = `mailto:${CONFIG.email}?subject=${subject}&body=${body}`;
    });

    $('#sendWhatsappBtn')?.addEventListener('click', () => {
      const d = readData();
      if (!d.name || !d.message) return setFeedback(t('form.errEmpty'), false);
      setFeedback(t('form.okWa'), true);
      const text = encodeURIComponent(
        `Olá Victor! Meu nome é ${d.name}.\nAssunto: ${d.subject}\n\n${d.message}${d.email ? `\n\nEmail: ${d.email}` : ''}`
      );
      window.open(`https://wa.me/${CONFIG.whatsappNumber}?text=${text}`, '_blank', 'noopener,noreferrer');
    });
  };

  /* ── Boot ──────────────────────────────────────────────────────────────── */
  const init = () => {
    initTime();
    initTheme();
    initLanguage();
    initNavAndScroll();
    initHero();
    initRevealsAndParallax();
    initPointerFX();
    initWorkflow();
    initProjectControls();
    initProjectModal();
    initCmdPalette();
    initContact();

    applyLanguage(state.lang, false);
    initGitHub();
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

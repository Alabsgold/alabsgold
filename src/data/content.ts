import {
  ServiceItem,
  CaseStudy,
  SelectedWorkItem,
  DesignBrandItem,
  ExperimentItem,
  ExperienceItem,
  CertificationItem,
  TechCategory,
  FaqItem,
  PricingTier,
  ProductItem,
} from '../types';

export const STUDIO_DATA = {
  name: 'ALABSGOLD',
  domain: 'alabsgold.com.ng',
  tagline: 'Production-grade digital infrastructure for businesses serving international clients.',
  shortDescription:
    'ALABSGOLD engineers custom web platforms, backend systems, and AI-driven tools for exporters, real estate operators, and diaspora businesses that need to establish instant trust and convert high-value leads — no templates, no page builders, no shortcuts.',
  locationInfo: 'Lagos, Nigeria — serving West Africa, the UK, the US, and global diaspora markets',
  email: 'alabsgold31@gmail.com',
  secondaryEmail: 'emmaalabi31@gmail.com',
  leadEmail: 'alabsgold31@gmail.com',
  directEmail: 'alabsgold31@gmail.com',
  phone: '+234 703 996 0964',
  whatsappNumber: '+234 703 996 0964',
  whatsappLink: "https://wa.me/2347039960964?text=Hi%20Emmanuel,%20I%20saw%20the%20ALABSGOLD%20site%20and%20I'd%20like%20to%20discuss%20a%20project.",
  availabilityBadge: 'ACCEPTING SELECT DIGITAL INFRASTRUCTURE INTAKES',
  status: {
    statusText: 'All Systems Operational',
    uptime: '99.99%',
    avgLatency: 'Sub-1s Mobile Target',
    activeDeployments: 'Live in Production',
  },
  proofHighlights: [
    {
      title: 'Kadie Fresh Live Export Platform',
      metric: 'B2B Production',
      desc: 'Custom quote wizard, export compliance showcase, and bespoke Studio CMS running on self-managed VPS.',
    },
    {
      title: '1st Place Nationally — NIRA-XT Hackathon II',
      metric: 'National Winner',
      desc: 'AI-assisted DNS threat-protection platform for Nigeria’s internet infrastructure built by Team X-CODERS.',
    },
    {
      title: 'Enterprise Payment Integrity',
      metric: 'Zero-Defect Standard',
      desc: 'Paystack webhook verification, idempotency guards, and audit-grade transaction logging.',
    },
  ],
};

export const THREE_SERVICE_PILLARS: ServiceItem[] = [
  {
    id: 'trust-infrastructure',
    tag: 'PILLAR 01 · TRUST INFRASTRUCTURE',
    title: 'Trust Infrastructure',
    shortDesc:
      'For businesses whose customers are vetting them from another country. Compliance showcases, verified quotation systems, and lead-capture flows engineered to convert scrutiny into signed deals — not just look credible, but hold up under it.',
    fullDesc:
      'Nigerian businesses serving international buyers face a structural credibility gap that has nothing to do with product quality. An agro-produce or commodity exporter with verified international certifications can lose deals to slow response times or absent digital proof. We engineer trust layers: verified regulatory showcases, multi-step commercial quotation wizards (/quote) with automated reference codes (e.g. KF-Q-XXXXXX), and direct sales-desk routing.',
    metrics: 'Automated Reference Codes · WhatsApp Sales Desk Routing · Sub-second Diligence Handoff',
    architectureHighlights: [
      'Interactive Commercial Quotation Wizard (/quote) with volume and packaging spec selectors',
      'Compliance and export certification verification showcase for international buyers',
      'Hand-rolled Studio Admin Panel (/studio) for zero-code non-technical client team management',
      'Direct WhatsApp and email sales-desk routing with zero dropped lead state',
      'Single-server lean VPS engineering with PM2 clustering, Nginx reverse proxy, and swap memory',
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Prisma ORM', 'PostgreSQL', 'Nginx', 'AWS Lightsail'],
    icon: 'ShieldCheck',
  },
  {
    id: 'ai-automation',
    tag: 'PILLAR 02 · AI & AUTOMATION',
    title: 'AI & Automation',
    shortDesc:
      'LLM-powered tools that do real work: document-to-quiz generation, informal-ledger parsing, diagnostic study systems, AI support agents scoped to read-only diagnostics so they never touch your data without permission.',
    fullDesc:
      'We reject generative AI gimmicks. We engineer AI capabilities with deterministic, structured outputs and strict safety boundaries. From LangChain-orchestrated retrieval pipelines (PrepAI) that convert raw PDF course packs into structured exams, to informal ledger parsers that convert unstructured WhatsApp transaction text into reconciled financial records, our AI solutions are hardened for enterprise utility.',
    metrics: 'Deterministic JSON Output · Read-Only Guardrails · Zero Unvetted Data Mutations',
    architectureHighlights: [
      'Informal business intelligence: unstructured WhatsApp ledger text converted to structured accounting JSON',
      'Retrieval-Augmented Generation (RAG) pipelines for academic and technical document comprehension',
      'Read-only diagnostic AI support agents: investigate and triage without modifying customer records',
      'Adaptive study companions with diagnostic testing and comprehension pathways (Project Aegis)',
      'Atlassian Forge Rovo AI agent integrations for enterprise Confluence freshness audits',
    ],
    techStack: ['Python', 'FastAPI', 'LangChain', 'OpenAI / Claude APIs', 'Vector Stores', 'PostgreSQL'],
    icon: 'Terminal',
  },
  {
    id: 'secure-backend',
    tag: 'PILLAR 03 · SECURE BACKEND',
    title: 'Secure Backend Engineering',
    shortDesc:
      'REST APIs, payment-gateway integrations, and database architecture built with webhook security, idempotency, and Decimal-based currency handling treated as non-negotiable — not an afterthought bolted on after a security review.',
    fullDesc:
      'Anyone can copy a payment tutorial. We engineer transactional systems that catch payment vulnerabilities before they reach production: webhook HMAC signature verification with zero silent default fallbacks, distributed idempotency guards to prevent double billing, float-free Decimal currency arithmetic, and raw payload audit logs for instant dispute resolution.',
    metrics: 'Webhook HMAC Verification · Idempotency Guaranteed · Decimal Currency Precision',
    architectureHighlights: [
      'Multi-rail payment gateway integrations: Paystack, Flutterwave, Stripe, and PayPal',
      'Transaction audit logging preserving raw incoming webhook payloads for dispute resolution',
      'API-contract-first development (API_CONTRACT.md) for unblocked multi-engineer execution',
      'Role-based access control (RBAC) across multi-tenant admin, faculty, and student boundaries',
      'PostgreSQL data architecture with strict constraints, advisory locks, and Prisma / DRF ORMs',
    ],
    techStack: ['Python', 'Django REST Framework', 'FastAPI', 'PostgreSQL', 'Paystack API', 'Docker'],
    icon: 'CreditCard',
  },
];

export const FLAGSHIP_CASE_STUDIES: CaseStudy[] = [
  {
    id: 'kadie-fresh',
    client: 'Kadie Fresh',
    sector: 'B2B Agro-Produce & Commodity Export',
    region: 'Lagos, Nigeria → International Buyer Corridors',
    timeline: 'Full Architectural Build & VPS Migration',
    headline: 'Enterprise export infrastructure for a business that had none.',
    challenge:
      'Kadie Fresh is an exporter of cashew, ginger, sesame, hibiscus, charcoal, and shea butter selling into international buyer markets. Before this build, the business ran on manual, ad-hoc communication with no digital trust layer for overseas buyers conducting due diligence. International buyers vetting a Nigerian export business need verified certifications, real product specs, and a quotation process that doesn’t stall when time zones shift.',
    solution:
      'ALABSGOLD architected and built a complete enterprise platform: a public buyer-facing portal with a multi-step Commercial Quotation Wizard (/quote) generating unique tracking references (KF-Q-XXXXXX) with direct WhatsApp sales-desk routing, an international compliance verification layer, a custom water-bloom preloader animation, and a hand-rolled Studio Admin Panel (/studio). To eliminate third-party SaaS fees, we migrated the platform from Vercel/Supabase to a single self-managed AWS Lightsail VPS running Nginx, PM2, and custom swap memory.',
    impactMetrics: [
      { label: 'Platform Status', value: 'Live in Prod', sublabel: 'kadiefreshh.com' },
      { label: 'Hosting Overhead', value: '1 Lean VPS', sublabel: 'Zero recurring CMS licensing' },
      { label: 'Quotation Engine', value: '/quote Flow', sublabel: 'Automated KF-Q reference codes' },
    ],
    architecturePoints: [
      'Interactive Commercial Quotation Wizard with automated reference generation & direct WhatsApp routing',
      'Compliance & export verification layer shortening international buyer due diligence',
      'Bespoke Studio CMS (/studio) managing products, certifications, testimonials, and enquiries with zero code',
      'Production VPS engineering: Nginx reverse-proxy, PM2 cluster management, and 2GB swap memory',
    ],
    tags: ['Next.js', 'React', 'TypeScript', 'Prisma ORM', 'PostgreSQL', 'AWS Lightsail', 'Nginx', 'PM2'],
    liveUrl: 'https://kadiefreshh.com',
    role: 'Lead Systems Architect & Full-Stack Engineer',
    whatMadeThisSpecial:
      'Most agencies reach for WordPress or Sanity. Building the Studio admin panel from scratch gave Kadie Fresh complete data sovereignty with zero recurring CMS costs. Migrating a Next.js/Prisma/Postgres stack off serverless onto a self-managed Lightsail instance with PM2 clustering and custom Nginx reverse proxying delivered an ultra-lean, reliable operational footprint.',
    statusBadge: 'FLAGSHIP 01 · LIVE PRODUCTION',
  },
  {
    id: 'nira-xt-guardian',
    client: 'Team X-CODERS / NKF NiRA-XT Hackathon II',
    sector: 'National Cybersecurity & Internet Infrastructure',
    region: 'Nigeria Internet Ecosystem',
    timeline: 'Compressed Hackathon Build Window',
    headline: '1st place nationally, built under a hackathon clock, engineered like production security software.',
    challenge:
      'At the NKF NiRA-XT Hackathon II, the brief called for domain-level threat protection tools for Nigeria’s internet ecosystem. Malicious domains—phishing, malware, scam, gambling, and typosquatting—must be detected and intercepted before a user’s browser resolves them, without degrading legitimate DNS query latency and without retaining sensitive user browsing history.',
    solution:
      'ALABSGOLD’s founder led Team X-CODERS to 1st place nationwide by architecting an AI-assisted DNS threat-protection platform. It combined real-time DNS packet interception with heuristic and machine-learning reputation scoring, delivering a live threat-intelligence dashboard with category-based filtering, policy control, and parental profiles—built strictly to avoid unnecessary retention of browsing history.',
    impactMetrics: [
      { label: 'Hackathon Result', value: '1st Place', sublabel: 'National Cybersecurity Champions' },
      { label: 'Threat Scoring', value: '0 – 100 Scale', sublabel: 'Phishing, malware & scam classification' },
      { label: 'Leadership', value: 'Solo Defense', sublabel: 'Delivered final presentation & live architecture' },
    ],
    architecturePoints: [
      'Real-time DNS query interception with asynchronous ML-inference scoring',
      'Comprehensive risk classification: phishing, malware, scams, adult, gambling, typosquatting',
      'Live threat analytics dashboard with real-time domain traffic tables and security logs',
      'Privacy-conscious zero-unnecessary-retention policy for consumer and family protection',
    ],
    tags: ['Python', 'FastAPI', 'Machine Learning', 'DNS Analysis', 'Docker', 'Cybersecurity'],
    role: 'Technical Lead & Presenter (Team X-CODERS)',
    whatMadeThisSpecial:
      'Carried system architecture, backend, substantial frontend, and the live competition presentation solo under a tight hackathon clock. Stacks four disciplines rarely seen in a single prototype: DNS network engineering, applied ML classification, cybersecurity threat modeling, and a refined security control dashboard.',
    awardBadge: '1ST PLACE NATIONAL WINNER',
    statusBadge: 'FLAGSHIP 02 · AWARD WINNING',
  },
  {
    id: 'departmental-payment-system',
    client: 'Visionary Coders / NACOS National Build Challenge',
    sector: 'Fintech & Academic Treasury Infrastructure',
    region: 'Higher Education Ecosystem',
    timeline: '2-Week Synchronized Build Sprint',
    headline: 'Caught the payment bugs that would have shipped — before they shipped.',
    challenge:
      'Departmental dues and event fees were tracked manually with screenshot receipts and spreadsheets—trivially fakeable and prone to loss. The team needed a production-grade payment flow with Paystack gateway integration, server-side verification, and audit-grade transaction logging, while 5 developers built concurrently under a two-week deadline.',
    solution:
      'ALABSGOLD architected a Django REST Framework backend centered on an explicit API_CONTRACT.md that enabled parallel frontend and backend development. We integrated Paystack with strict webhook verification, implemented a Transaction audit model storing raw payloads for dispute resolution, and conducted rigorous security code reviews before PR merges.',
    impactMetrics: [
      { label: 'Security Review', value: '7 Critical Catches', sublabel: 'Webhook blanks, float math, missing idempotency' },
      { label: 'Architecture', value: 'Contract-First', sublabel: 'Zero-blocking 5-developer parallel workflow' },
      { label: 'Audit Trail', value: '100% Raw Logs', sublabel: 'Full dispute resolution payload records' },
    ],
    architecturePoints: [
      'REST API covering authentication, contributions management, Paystack processing, and notifications',
      'Transaction model logging raw webhook payloads for indisputable transaction audits',
      'Rigorous security review catching blank secret key defaults, missing idempotency, and float currency math',
      'API-contract-first scaffolding allowing teammates to build against deterministic endpoints',
    ],
    tags: ['Python 3.11', 'Django REST Framework', 'PostgreSQL', 'Paystack API', 'DRF Token Auth'],
    role: 'Backend Systems Engineer & Security Reviewer',
    whatMadeThisSpecial:
      'Anyone can copy a payment tutorial. Catching a webhook HMAC signature check that silently accepted a blank secret key, a missing idempotency guard, and float-based currency math in a teammate’s PR—under hackathon pressure—is the hallmark of an engineer who understands why financial systems fail in production.',
    statusBadge: 'FLAGSHIP 03 · FINTECH GRADE',
  },
];

export const SELECTED_WORKS: SelectedWorkItem[] = [
  {
    id: 'alabsgold-platform',
    title: 'ALABSGOLD Portfolio & Studio Platform',
    oneLiner: 'Self-built developer portfolio with a hand-rolled, password-protected content Studio — no CMS dependency, ever.',
    description:
      'Engineered with modern typography, Three.js WebGL lighting, interactive architecture simulations, and a bespoke administrative backoffice for updating portfolio records without third-party subscriptions.',
    tags: ['Next.js', 'TypeScript', 'Three.js', 'Tailwind CSS', 'Supabase'],
    status: 'Live',
    category: 'Enterprise Platform',
  },
  {
    id: 'prepai',
    title: 'PrepAI',
    oneLiner: 'AI study platform that turns uploaded documents into structured quizzes via LangChain-orchestrated retrieval pipelines.',
    description:
      'Ingests syllabi and lecture materials, generates diagnostic assessments, and provides contextual rationale for every question with deterministic JSON output.',
    tags: ['Python', 'FastAPI', 'LangChain', 'LLM APIs', 'Next.js'],
    status: 'In Development',
    category: 'AI & LLM',
  },
  {
    id: 'prepcbt',
    title: 'PrepCBT',
    oneLiner: 'Timed computer-based-test platform with automated grading and full session-state persistence during live exams.',
    description:
      'Built to simulate standardized exam environments with robust server-side timer enforcement, randomized question banks, and instant performance breakdowns.',
    tags: ['Django', 'Python', 'Bootstrap', 'SQL', 'Render'],
    status: 'Completed',
    category: 'Academic & CBT',
  },
  {
    id: 'ex-digital',
    title: 'EX-DIGITAL',
    oneLiner: 'Enterprise academic management system with role-based access control across faculty, admin, and student roles.',
    description:
      'Engineered by Team EX-CODERS to streamline grading records, student enrolment, and departmental announcements under strict role-based access controls.',
    tags: ['Django REST Framework', 'FastAPI', 'PostgreSQL', 'TypeScript'],
    status: 'Completed',
    category: 'Enterprise Platform',
  },
  {
    id: 'atlassian-forge-apps',
    title: 'Atlassian Forge Apps (Jira & Confluence)',
    oneLiner: 'Two Forge-native tools — an in-issue Jira checklist and an AI-assisted Confluence content-freshness agent.',
    description:
      'Built during an Apps Engineering rotation at Alluvium. Utilized Atlassian Forge UI Kit and Rovo AI to audit out-of-date documentation spaces and manage micro-tasks within Jira issues.',
    tags: ['Atlassian Forge', 'JavaScript', 'Forge UI Kit', 'Rovo AI', 'Jira / Confluence APIs'],
    status: 'Completed',
    category: 'Atlassian Ecosystem',
  },
  {
    id: 'project-aegis',
    title: 'Project Aegis',
    oneLiner: 'Adaptive AI study companion architecture — diagnostic testing and comprehension-based review pathways.',
    description:
      'Architecture combining vector stores and dynamic difficulty adjustment to reinforce weak learning concepts based on student response patterns.',
    tags: ['Python', 'FastAPI', 'Vector Stores', 'LLM APIs'],
    status: 'In Development',
    category: 'AI & LLM',
  },
  {
    id: 'gcims',
    title: 'GCIMS (Guidance & Counseling Info System)',
    oneLiner: 'Confidential casework and appointment system for university counseling centers with strict data privacy boundaries.',
    description:
      'Designed to protect student mental health disclosures with zero-knowledge data isolation, counselor appointment scheduling, and automated casework logs.',
    tags: ['Python', 'SQL', 'REST API Design', 'Privacy Engineering'],
    status: 'In Development',
    category: 'Enterprise Platform',
  },
  {
    id: 'ai-informal-bi',
    title: 'AI Informal Business Intelligence Platform',
    oneLiner: 'Parses informal ledgers and WhatsApp transaction text into structured financial data with deterministic JSON output.',
    description:
      'Bridges the gap between informal African commerce and structured bookkeeping by extracting date, amount, customer, and product entities from casual chat logs.',
    tags: ['Python', 'FastAPI', 'LLM Prompt Engineering', 'PostgreSQL'],
    status: 'In Development',
    category: 'Data & Financial',
  },
];

export const DESIGN_BRAND_WORKS: DesignBrandItem[] = [
  {
    id: 'freshvena',
    name: 'Freshvena',
    category: 'Brand Identity Suite',
    description: 'Complete brand identity for an international agro-export venture: 3D leaf emblem, commercial flyer templates, and print-ready color profiles.',
    tools: ['Figma', 'Canva', 'Photoshop', 'AI Imagery'],
    status: 'Completed',
  },
  {
    id: 'mysteries-cakes',
    name: 'Mysteries Cake’s',
    category: 'Commercial Visual Identity',
    description: 'Visual identity system for a boutique bakery and catering brand: promotional event flyers, social media templates, and food retouching.',
    tools: ['Canva', 'Photoshop'],
    status: 'Completed',
  },
  {
    id: 'goldx-news',
    name: 'GoldX News',
    category: 'Digital Motion Concept',
    description: 'High-tempo 9-second digital news intro sequence featuring audio-visual beat synchronization and dynamic typography.',
    tools: ['CapCut', 'Photoshop', 'Figma'],
    status: 'Completed',
  },
  {
    id: 'khadie-afro-foods',
    name: 'Khadie Afro Foods (Design Evolution)',
    category: '3D Brand Prototyping',
    description: 'Exploratory 3D visual concepts (rotating yam, plantain, and cassava crates) that laid the foundation for the final Kadie Fresh production brand.',
    tools: ['Three.js', 'Blender Concepts', 'Figma'],
    status: 'Integrated into Kadie Fresh',
  },
];

export const EXPERIMENTS_RESEARCH: ExperimentItem[] = [
  {
    id: '3d-crypto-webgl',
    title: '3D Crypto/Bitcoin WebGL Experiment',
    description: 'Three.js exploration solving dark rendering artifacts through precise lighting, emissive materials, and roughness/metalness calibrations.',
    tech: ['Three.js', 'WebGL', 'JavaScript'],
  },
  {
    id: 'oex-lite-arbitrage',
    title: 'OEx Lite (Crypto Arbitrage Prototype)',
    description: 'FastAPI microservice comparing real-time crypto prices across Binance, CoinGecko, Kraken, and OKX APIs with spread calculations.',
    tech: ['Python', 'FastAPI', 'REST APIs'],
  },
  {
    id: 'whatsapp-trivia-bot',
    title: 'WhatsApp AI & Bible Trivia Bot',
    description: 'Node.js WhatsApp automation engine delivering automated trivia quizzes, scripture engagement, and conversational state tracking.',
    tech: ['Node.js', 'Baileys / WhatsApp API', 'JavaScript'],
  },
  {
    id: 'church-geofence-attendance',
    title: 'Geofenced Attendance & Church Registry',
    description: 'Flask application using the Haversine distance formula to enforce strict physical geofences for event check-ins and member records.',
    tech: ['Flask', 'SQLAlchemy', 'Haversine Algorithm', 'Firebase'],
  },
  {
    id: 'plumbing-facade-system',
    title: 'Plumbing Management System (C#)',
    description: 'Coursework software architected around the Facade design pattern with simulated telemetry metrics and service scheduling.',
    tech: ['C#', '.NET', 'Software Architecture Patterns'],
  },
  {
    id: 'ferrari-3d-web',
    title: 'Ferrari-Style 3D Web Experiments',
    description: 'R&D into React Three Fiber, GSAP scroll synchronization, and asset optimization that directly informed the Kadie Fresh visual pipeline.',
    tech: ['React Three Fiber', 'GSAP', 'WebGL'],
  },
];

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    id: 'alluvium-siwes',
    role: 'SIWES Industrial Training Intern',
    organization: 'Alluvium (Atlassian Gold Solution Partner)',
    period: '6-Month Placement · 2026',
    description:
      'Rotated between Cloud Upgrade and AI-in-Software engineering teams, working directly on enterprise Atlassian instances.',
    highlights: [
      'Executed JSM/ITSM setup on live Atlassian sites: request types, queues, JQL, SLAs, automation rules, and Assets/CMDB schemas',
      'Conducted deep REST API audits across Jira Cloud and Confluence Cloud: authentication, pagination, and multi-resource reports',
      'Engineered two Atlassian Forge apps (Jira Micro-Checklist and Confluence Freshness Agent with Rovo AI)',
    ],
    badge: 'Enterprise Partner Experience',
  },
  {
    id: 'lets-learn-py',
    role: 'Founder & Lead Instructor',
    organization: '"Let’s Learn Py" Community',
    period: 'July – September 2026',
    description:
      'Founded a peer-to-peer technical education initiative teaching Python fundamentals, algorithms, and modular software design.',
    highlights: [
      'Authored weekly coding challenges, interactive debugging sessions, and syntax quizzes',
      'Mentored aspiring developers on clean architecture, object-oriented principles, and API integration',
    ],
    badge: 'Community Leadership',
  },
  {
    id: 'jabu-digitech',
    role: 'Technical Speaker & Workshop Presenter',
    organization: 'JABU DIGITECH 2.0 Technical Workshop',
    period: 'March 2026',
    description:
      'Delivered a technical presentation to students and faculty on modern backend architectures, resilient API development, and sustainable software career entry.',
    highlights: [
      'Deconstructed REST API design contracts and webhook reliability standards',
      'Demonstrated production deployment patterns using VPS, Nginx, and PM2',
    ],
    badge: 'Technical Speaker',
  },
  {
    id: 'hackathon-leadership',
    role: 'Technical Lead (Multiple National Hackathons)',
    organization: 'Team X-CODERS / Team EX-CODERS / Visionary Coders',
    period: '2025 – 2026',
    description:
      'Led teams across three hackathons, owning system architecture, backend implementation, integration, and competition defenses.',
    highlights: [
      '1st Place Nationwide at NKF NiRA-XT Hackathon II with NIRA-XT Guardian 2',
      'Delivered EX-DIGITAL academic platform under compressed build windows',
      'Architected Paystack integration and conducted security PR reviews for NACOS National Build Challenge',
    ],
    badge: '1st Place Champion',
  },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    name: 'Atlassian Cloud Fundamentals',
    issuer: 'Atlassian University',
    date: 'August 2026',
    status: 'Practice Assessment Completed',
  },
  {
    name: 'Jira Service Management (JSM) with AI Fundamentals',
    issuer: 'Atlassian University',
    date: 'August 2026',
    status: 'Practice Assessment Completed',
  },
  {
    name: 'Loom Fundamentals',
    issuer: 'Loom / Atlassian',
    date: 'August 2026',
    status: 'Completed',
  },
  {
    name: 'Claude Student Ambassador Program',
    issuer: 'Anthropic (Representing JABU)',
    date: 'September 2026',
    status: 'Applied / Mentorship Portfolio',
  },
];

export const PROCESS_PHASES = [
  {
    step: '01',
    name: 'Discovery',
    timeline: 'Days 1 – 2',
    summary: 'Requirements gathering, scope lock, contract execution, and 50% commitment deposit confirmation.',
    deliverables: [
      'Technical Scope Lock & PRD',
      'System Invariant Checklist',
      'Deposit & Timeline Guarantee',
    ],
  },
  {
    step: '02',
    name: 'Architecture',
    timeline: 'Days 3 – 4',
    summary: 'System topology design, API contracts (API_CONTRACT.md), UI/UX wireframing, and component planning from our proprietary alabsgold-core base framework.',
    deliverables: [
      'Deterministic API Contract Specs',
      'Database Schema & Data Model',
      'Figma / Wireframe Prototype',
    ],
  },
  {
    step: '03',
    name: 'Build',
    timeline: 'Days 5 – 8',
    summary: 'Parallel execution of frontend interfaces, backend logic, interactive quotation wizards, and hand-rolled Studio admin CMS.',
    deliverables: [
      'Complete Responsive Web Interfaces',
      'Hardened Backend API & Webhook Ingestors',
      'Custom Studio Admin Backoffice (/studio)',
    ],
  },
  {
    step: '04',
    name: 'Launch',
    timeline: 'Days 9 – 10',
    summary: 'Core Web Vitals tuning (sub-second mobile target), security audit, cross-browser QA, production VPS deployment, and DNS handover upon final payment.',
    deliverables: [
      'Core Web Vitals Optimization',
      'Production Deployment (VPS/Nginx/PM2)',
      '100% IP & Private Repo Handover',
    ],
  },
  {
    step: '05',
    name: 'Support',
    timeline: 'Post-Launch',
    summary: '30-day included warranty with bug fixes and telemetry monitoring, plus ongoing SLA retainers for continuous optimization.',
    deliverables: [
      '30-Day Included Warranty',
      'Operational Runbook & Documentation',
      'Ongoing Monthly SLA Retainer Option',
    ],
  },
];

export const AUTHENTIC_PRICING_TIERS: PricingTier[] = [
  {
    id: 'starter-platform',
    name: 'Starter Platform Build',
    badge: 'ESSENTIAL FOUNDATION',
    priceNGN: '₦350,000 – ₦650,000',
    priceIntl: '$500 – $800',
    billingPeriod: 'milestone engagement (50% upfront / 50% on QA)',
    shortDesc: 'Essential production-grade digital infrastructure for emerging local businesses needing credibility and lead capture.',
    idealFor: 'Local businesses, consulting practices, and growing ventures upgrading from WhatsApp-only operations to a credible digital footprint.',
    features: [
      'Bespoke, hand-coded frontend (no WordPress, no page-builder bloat)',
      'High-conversion lead capture engine with automated email notifications',
      'Sub-second mobile performance optimization and clean typography',
      'Technical SEO infrastructure (Open Graph, sitemaps, JSON-LD schema)',
      'Single-server production VPS configuration with SSL and automated backups',
      'Full source code access and 100% IP ownership in your private repository',
      '30-day post-launch warranty included',
    ],
    deliverables: [
      'Production Web Platform on your domain',
      'Private GitHub Repository Handover',
      '30-Day Post-Launch Technical Warranty',
    ],
    turnaround: '10 – 14 Business Days',
    highlighted: false,
  },
  {
    id: 'professional-infrastructure',
    name: 'Professional Infrastructure',
    badge: 'MOST POPULAR',
    priceNGN: '₦650,000 – ₦1,300,000',
    priceIntl: '£800 – £1,200 ($1,000 – $1,600)',
    billingPeriod: 'milestone engagement (50% upfront / 50% on QA)',
    shortDesc: 'Engineered for real estate operators, specialized firms, and diaspora brands requiring dynamic filtering and custom backoffice controls.',
    idealFor: 'Luxury real estate operators, shortlet portals, and diaspora-owned businesses serving European and North American buyers.',
    features: [
      'Everything in Starter Platform, plus:',
      'Custom Studio Admin Backoffice (/studio) — manage listings, content, and inquiries without code',
      'Dynamic property / catalog filtering with WhatsApp inspection booking',
      'Multi-step lead qualification and inquiry routing workflows',
      'Custom preloader animation and brand motion engineering',
      'Advanced server-side hardening, rate-limiting, and error telemetry',
      '30-day post-launch warranty included',
    ],
    deliverables: [
      'Complete Platform + Hand-Rolled Studio CMS',
      'Custom Deployment on Nginx / VPS / Cloud',
      'Video Admin Walkthrough for your team',
      '30-Day Post-Launch Technical Warranty',
    ],
    turnaround: '2 – 3 Weeks',
    highlighted: true,
  },
  {
    id: 'premium-enterprise',
    name: 'Premium Enterprise Build',
    badge: 'FLAGSHIP EXPORT GRADE',
    priceNGN: '₦900,000 – ₦2,200,000+',
    priceIntl: '£1,200 – £1,800+ ($1,500 – $2,500)',
    billingPeriod: 'milestone engagement (50% upfront / 50% on QA)',
    shortDesc: 'B2B export trust infrastructure, interactive commercial quotation engines (/quote), compliance verification, and international payment gateways.',
    idealFor: 'Agro-exporters, commodity merchants, and high-concurrency platforms where international buyers conduct rigorous due diligence.',
    features: [
      'Everything in Professional, plus:',
      'Interactive Commercial Quotation Wizard (/quote) with volume pricing & spec selectors',
      'Automated reference code generation (e.g. KF-Q-XXXXXX) with WhatsApp sales-desk routing',
      'International Compliance & Export Verification Showcase (shortens buyer due diligence)',
      'Multi-currency payment integration (Paystack / Stripe / PayPal) with webhook HMAC security',
      'Self-managed VPS architecture (Nginx, PM2, swap memory) eliminating SaaS recurring fees',
      'Zero-defect payment standard with idempotency and audit transaction logging',
      'Priority 45-day post-launch warranty included',
    ],
    deliverables: [
      'B2B Enterprise Portal + Custom Quotation Wizard',
      'Full Studio Backoffice for products, specs & leads',
      'Architecture Decision Records (ADRs) & Runbook',
      '45-Day Post-Launch Priority Support',
    ],
    turnaround: '3 – 5 Weeks',
    highlighted: false,
  },
  {
    id: 'monthly-retainer-sla',
    name: 'Monthly Retainer (SLA)',
    badge: 'CONTINUOUS OPTIMIZATION',
    priceNGN: '₦300,000 – ₦600,000/mo',
    priceIntl: '$350 – $700/mo (£280 – £560/mo)',
    billingPeriod: 'monthly retainer · cancel anytime',
    shortDesc: 'Dedicated engineering oversight, monthly performance tuning, security patching, and prioritized feature sprints.',
    idealFor: 'Active businesses and exporters that require continuous system availability, server monitoring, and ongoing updates without full-time hires.',
    features: [
      'Direct WhatsApp & asynchronous engineering channel access',
      'Proactive server telemetry, uptime monitoring, and security patch updates',
      'Database query optimization, backup verification, and SSL renewals',
      'Up to 15 hours/month of feature iterations or UI refinements',
      'Emergency production incident response (under 4 hours SLA)',
      'Monthly performance and search optimization report',
    ],
    deliverables: [
      'Monthly Engineering Scorecard & Telemetry Report',
      'Continuous Pull Request & Feature Deployments',
      'Dedicated On-Call Technical Retainer',
    ],
    turnaround: 'Ongoing Monthly SLA',
    highlighted: false,
  },
];

export const NICHE_PRICING_BANDS = [
  {
    niche: 'Agro-Exporters & Commodity Merchants',
    priceNGN: '₦900,000 – ₦2,200,000',
    priceIntl: '$1,000 – $2,500',
    focus: 'B2B export trust infrastructure with international certificate verification, bulk-volume quotation wizards (/quote), and dynamic spec sheets.',
  },
  {
    niche: 'Luxury Real Estate & Shortlet Portals',
    priceNGN: '₦650,000 – ₦1,300,000',
    priceIntl: '£800 – £1,200',
    focus: 'High-conversion property portals with virtual tour embeds, dynamic filtering, WhatsApp inspection booking, and custom listings backoffice.',
  },
  {
    niche: 'Diaspora-Owned Businesses (UK/US/Canada)',
    priceNGN: '₦650,000 – ₦1,600,000',
    priceIntl: '£800 – £1,600 ($1,000 – $2,200)',
    focus: 'World-class engineering at competitive studio rates with seamless international payment integration and multi-currency checkouts.',
  },
];

export const WHAT_WE_DONT_DO = [
  {
    title: 'No WordPress or Page-Builder Platforms',
    desc: 'We do not build on Elementor, Wix, or bloated WordPress stacks. Every deliverable is hand-coded in modern TypeScript, React/Next.js, and Python for speed and longevity.',
  },
  {
    title: 'No Projects Without a Discovery Phase',
    desc: 'Scope gets locked and system invariants get defined before a single line of production code is written. We don’t guess your requirements.',
  },
  {
    title: 'No “Hand Over and Disappear”',
    desc: 'Every build includes a 30-day technical warranty. Ongoing feature work and server maintenance runs on a clear retainer, not an ad-hoc favor.',
  },
  {
    title: 'No Skipping Security to Meet a Deadline',
    desc: 'Payment logic, webhook HMAC signatures, and authentication guards get audited before shipping—every single time.',
  },
];

export const FOUNDER_DATA = {
  name: 'Alabi Emmanuel',
  displayName: 'Alabi Emmanuel (Alabsgold)',
  role: 'Founder & Full-Stack Systems Engineer',
  institution: '300-Level Computer Science Student & Studio Lead',
  location: 'Lagos, Nigeria',
  email: 'alabsgold31@gmail.com',
  personalEmail: 'emmaalabi31@gmail.com',
  title: 'Engineering production-grade digital infrastructure for international trust.',
  bio: [
    'Alabi Emmanuel is a 300-level Computer Science student and full-stack engineer building ALABSGOLD as a boutique web engineering and digital infrastructure studio out of Lagos, Nigeria.',
    'His flagship proof of work, Kadie Fresh (kadiefreshh.com), is a live production B2B export platform featuring a custom commercial quotation wizard, an international compliance showcase, and a hand-rolled Studio backoffice—architected and self-hosted on a lean production VPS.',
    'Emmanuel led Team X-CODERS to a 1st-place national finish at the NKF NiRA-XT Hackathon II with NIRA-XT Guardian 2, an AI-assisted DNS threat-protection platform for Nigeria’s internet infrastructure. He also completed a six-month SIWES industrial training placement at Alluvium (an Atlassian Gold Solution Partner), working across Cloud Upgrade and AI-in-Software teams.',
  ],
  quote:
    'Nigerian businesses serving international buyers face a structural credibility gap that has nothing to do with product quality. A cashew exporter with top certifications can still lose a deal to a slow site, a broken quote flow, or a missing compliance page. ALABSGOLD exists to close that gap with engineering: verified compliance showcases, fast and reliable platforms, and lead systems that convert scrutiny into signed deals.',
  principles: [
    {
      title: 'Zero Boilerplate Bloat',
      description: 'No page builders, no unvetted plugins. Every line of code is written with intent for longevity and sub-second execution.',
    },
    {
      title: 'Performance as a Business Metric',
      description: 'Load latency is treated as a conversion KPI. International buyers leave within 3 seconds of friction.',
    },
    {
      title: 'Uncompromising Client Ownership',
      description: 'Clients get 100% intellectual property ownership, clean documentation, and full source code access upon final payment.',
    },
    {
      title: 'Security from Day One',
      description: 'Validation, webhook HMAC verification, and authorization guards are built into the first commit—never bolted on after an incident.',
    },
  ],
  credentials: [
    { label: 'Flagship Live Platform', value: 'Kadie Fresh' },
    { label: 'National Hackathon Honor', value: '1st Place NiRA-XT' },
    { label: 'Enterprise Experience', value: 'Alluvium (Atlassian Partner)' },
    { label: 'Community Leadership', value: 'Founder, "Let’s Learn Py"' },
  ],
};

export const ABOUT_DATA = {
  mission:
    'We build digital infrastructure for businesses whose next customer is on another continent, doesn’t know them yet, and is deciding—in the first 30 seconds on the site—whether to trust them with money. That infrastructure has to be fast, secure, and genuinely owned by the client, not rented from a page-builder or a CMS vendor.',
  theTrustGap:
    'Nigerian businesses serving international buyers face a structural credibility gap that has nothing to do with the quality of their product. A cashew exporter with excellent product and certifications can still lose a deal to a slow site, a broken quote flow, or a compliance page that doesn’t exist. ALABSGOLD exists to close that gap with engineering — verified compliance showcases, fast and reliable platforms, and lead systems that convert scrutiny into signed deals instead of losing buyers to friction.',
  foundingStory:
    'ALABSGOLD was founded by Alabi Emmanuel out of a clear realization: Nigerian exporters and specialized ventures lose high-value international contracts because their digital presence does not reflect the standard of their physical operations. By replacing brittle website builders with bespoke, type-safe architectures and self-hosted infrastructure, we give high-integrity businesses the digital presence required to close six-figure deals.',
  pillars: [
    {
      title: 'Zero Boilerplate Bloat',
      desc: 'No page builders, no unvetted WordPress plugins; every line of code is written with intent.',
    },
    {
      title: 'Performance as a Business Metric',
      desc: 'Load latency is treated as a conversion KPI, not a nice-to-have.',
    },
    {
      title: 'Uncompromising Ownership',
      desc: 'Clients get 100% IP, clean documentation, and full source access on final payment.',
    },
    {
      title: 'Security From Day One',
      desc: 'Validation, environment-variable protection, and authorization guards built in from the first commit.',
    },
  ],
  markets: [
    { region: 'Lagos & West Africa', focus: 'Agro-produce exporters, commodity merchants, academic systems & local enterprises' },
    { region: 'United Kingdom', focus: 'Diaspora-owned businesses, cross-border commerce & consulting practices' },
    { region: 'North America & Global', focus: 'International buyers vetting Nigerian suppliers & specialized digital platforms' },
  ],
};

export const FAQS: FaqItem[] = [
  // --- ENGAGEMENT MODELS ---
  {
    id: 'faq-engagement-models',
    category: 'Engagement Models',
    tag: 'Core Delivery',
    question: 'What engagement models does ALABSGOLD offer for client partnerships?',
    answer:
      'We work with clients across three primary models: (1) Fixed-Scope Milestone Engagements — our flagship model for new platform builds, redesigns, and export quotation systems with a firmly defined scope, timeline, and deliverables; (2) Monthly Technical Retainers (SLA) — for established operations requiring ongoing feature development, cloud infrastructure monitoring, database tuning, and emergency incident response; and (3) Dedicated Architecture Sprints — 1 to 2-week technical audits and system feasibility studies for clients evaluating high-risk software decisions or pre-investment due diligence.',
  },
  {
    id: 'faq-discovery-scope-lock',
    category: 'Engagement Models',
    tag: 'Process Invariant',
    question: 'Why is the Discovery Phase mandatory before writing production code?',
    answer:
      'We do not guess requirements or bill by the vague hour. Every build begins with Phase 1: Discovery & Scope Definition, where we map user conversion funnels, data schemas, API contracts, third-party webhook integrations, and non-functional requirements. Once the Architecture Decision Record (ADR) and functional specification are signed off, scope is firmly locked. This protects you from mid-sprint budget inflation and guarantees that we deliver the exact system you commissioned on time.',
  },
  {
    id: 'faq-what-we-dont-do',
    category: 'Engagement Models',
    tag: 'Studio Boundaries',
    question: 'What types of projects or technical requests does ALABSGOLD decline?',
    answer:
      'To maintain engineering integrity, we enforce four strict boundaries: We do not build on WordPress, Elementor, Wix, or page-builder platforms; we do not accept projects without a Discovery phase; we do not work on hourly, undefined retainers without clear deliverables; and we do not patch undocumented legacy spaghetti code without a formal architectural replatforming plan. Every platform we release must hold up under international buyer scrutiny.',
  },

  // --- PROJECT TIMELINES ---
  {
    id: 'faq-typical-timelines',
    category: 'Project Timelines',
    tag: 'Turnaround SLAs',
    question: 'What are the typical project turnaround timelines across different tiers?',
    answer:
      'Our turnaround is tied directly to architectural complexity: Starter Corporate Platforms deliver in 7 to 10 working days; Professional Infrastructure builds (including bespoke Studio Admin CMS, multi-step lead funnels, and automated WhatsApp sales desk routing) complete in 2 to 3 weeks; and Flagship Enterprise Platforms (custom volume quotation engines, international compliance showcases, and multi-currency payment integrations) complete in 3 to 5 weeks. Retainers operate on continuous monthly sprint cycles.',
  },
  {
    id: 'faq-speed-and-velocity',
    category: 'Project Timelines',
    tag: 'Engineering Velocity',
    question: 'How does ALABSGOLD deliver custom software in weeks rather than months?',
    answer:
      'We achieve rapid velocity without sacrificing quality by leveraging our proprietary alabsgold-core internal base framework. We have battle-tested, pre-hardened libraries for RBAC authentication, HMAC webhook validation, SQLite/PostgreSQL schema scaffolding, and Nginx reverse proxy configs. We never start from an empty text editor for standard plumbing, which allows 100% of sprint time to focus on your unique business logic, quotation math, and brand credibility.',
  },
  {
    id: 'faq-change-requests-timelines',
    category: 'Project Timelines',
    tag: 'Scope Governance',
    question: 'How are client feedback loops and mid-project revision requests managed?',
    answer:
      'Transparency is continuous. You receive private staging environment deployments with every sprint milestone, accompanied by loom video walk-throughs. Revisions directly related to the agreed architectural specification are resolved during our dedicated QA and validation window. If your team requests net-new features mid-sprint, we isolate them into a structured Phase 2 sprint backlog so that your core platform launch date is never compromised.',
  },

  // --- PAYMENT STRUCTURES ---
  {
    id: 'faq-payment-structure-milestones',
    category: 'Payment Structures',
    tag: 'Commercial Terms',
    question: 'What is your payment structure, deposit requirement, and milestone schedule?',
    answer:
      'We operate on a transparent 50/50 milestone payment structure. A 50% commitment deposit is paid upon proposal sign-off to reserve your dedicated engineering sprint calendar and initiate the Discovery phase. The remaining 50% balance is invoiced only after you review and approve the fully functioning system on our private staging server during QA, prior to production DNS propagation and source code repository transfer.',
  },
  {
    id: 'faq-accepted-currencies-methods',
    category: 'Payment Structures',
    tag: 'Dual Currency Settlement',
    question: 'What payment currencies and international settlement rails do you accept?',
    answer:
      'We offer dual-currency pricing to accommodate both domestic and international enterprises. Nigerian corporate entities settle in Nigerian Naira (NGN) via direct commercial bank transfer with full VAT/invoicing documentation. International clients across the UK, North America, Europe, and the African diaspora settle in British Pounds (GBP), US Dollars (USD), or Euros (EUR) through Geegpay, Grey, Wise, or Payoneer with zero cross-border friction.',
  },
  {
    id: 'faq-hidden-fees-and-licensing',
    category: 'Payment Structures',
    tag: 'Total Cost of Ownership',
    question: 'Are there hidden costs, recurring CMS plugin subscriptions, or software licenses?',
    answer:
      'None. Unlike agency setups that quietly require hundreds of dollars in monthly subscriptions for CMS add-ons, Elementor licenses, or cloud vendor locks, ALABSGOLD builds self-contained, high-performance software. Our production builds deploy on lean, self-managed Ubuntu VPS instances (typically $6 to $12/month paid directly to DigitalOcean, Linode, or Hetzner). You pay only for raw server compute and domain registration.',
  },
  {
    id: 'faq-warranty-and-guarantees',
    category: 'Payment Structures',
    tag: 'Post-Launch Warranty',
    question: 'What post-launch technical warranty and guarantees are included with each build?',
    answer:
      'Every project includes a comprehensive 30-day (Starter & Professional) or 45-day (Enterprise) post-launch warranty at zero extra charge. This covers bug remediation, server telemetry checks, SSL certificate validation, and configuration tuning. In addition, you receive complete Architecture Decision Records (ADRs), environment configuration runbooks, and a recorded video training session for your staff.',
  },

  // --- TECHNICAL ARCHITECTURE & IP ---
  {
    id: 'faq-code-ip-ownership',
    category: 'Security & Ownership',
    tag: 'Full Intellectual Property',
    question: 'Who owns the intellectual property and source code once the project is finished?',
    answer:
      'You own 100% of all intellectual property, source code, database schemas, design assets, and server configurations the moment final milestone settlement is complete. We transfer repository ownership directly to your organization’s private GitHub or GitLab account. We never hold code hostage, and there are zero licensing royalties or vendor traps.',
  },
  {
    id: 'faq-studio-admin-cms',
    category: 'Technical Architecture',
    tag: 'Custom Studio Backoffice',
    question: 'How does your custom Studio Admin CMS work for non-technical team members?',
    answer:
      'Instead of subjecting your staff to the bloat and security hazards of WordPress wp-admin, we engineer a bespoke, lightweight Studio backoffice (/studio) tailored specifically to your data models. Your operations team can easily publish commodity updates, adjust export volume pricing, post laboratory certifications, and manage inbound quotation requests with zero technical knowledge required.',
  },
];

export const TECH_STACK: TechCategory[] = [
  {
    category: 'Frontend & UI Engineering',
    description: 'Bespoke, type-safe interfaces built for sub-second mobile latency and international trust.',
    technologies: [
      { name: 'TypeScript', role: 'Strict compile-time type safety across all frontend and API modules' },
      { name: 'Next.js / React 18+', role: 'Server components, client transitions, and optimized bundle delivery' },
      { name: 'Tailwind CSS', role: 'Zero-runtime styling and responsive container hierarchies' },
      { name: 'Three.js / WebGL', role: 'Interactive 3D shaders, brand identity visualizers, and canvas graphics' },
      { name: 'Framer Motion', role: 'Predictable UI state transitions and scroll progress engineering' },
    ],
  },
  {
    category: 'Backend & Data Systems',
    description: 'Deterministic APIs, transactional databases, and resilient application servers.',
    technologies: [
      { name: 'Python & Django / DRF', role: 'Robust ORM, academic grading systems, and enterprise permissions' },
      { name: 'FastAPI', role: 'High-throughput async endpoints, vector search APIs, and LLM orchestration' },
      { name: 'Node.js & Express', role: 'Payment ingress routing, webhook verification, and reverse proxies' },
      { name: 'PostgreSQL & Supabase', role: 'ACID-compliant relational schema, Row Level Security, and migrations' },
      { name: 'Redis', role: 'In-memory caching, idempotency keys, and session-state persistence' },
    ],
  },
  {
    category: 'DevOps & Cloud Infrastructure',
    description: 'Self-hosted, cost-effective infrastructure eliminating recurring third-party vendor lock-in.',
    technologies: [
      { name: 'Linux / Ubuntu VPS', role: 'Lean, self-managed production servers with automated backup routines' },
      { name: 'Nginx', role: 'Reverse proxying, TLS 1.3 encryption, gzip/brotli compression, and rate limiting' },
      { name: 'PM2 & Systemd', role: 'High-availability daemon monitoring and automated process resurrection' },
      { name: 'Docker', role: 'Isolated microservices and standardized CI/CD deployment pipelines' },
      { name: 'Cloudflare', role: 'Global edge CDN caching, DDoS mitigation, and DNS routing' },
    ],
  },
  {
    category: 'Specialized Ecosystems & AI',
    description: 'Bespoke backoffices, international payments, and intelligence pipelines.',
    technologies: [
      { name: 'Atlassian Forge', role: 'Enterprise Jira and Confluence app architecture with Forge UI Kit' },
      { name: 'Paystack & Stripe SDKs', role: 'Dual-rail local and international currency checkout flows' },
      { name: 'LangChain & Vector Stores', role: 'RAG retrieval engines for automated quiz generation (PrepAI)' },
      { name: 'Bespoke Studio CMS', role: 'Zero-dependency administrative backoffice built directly into each platform' },
    ],
  },
];


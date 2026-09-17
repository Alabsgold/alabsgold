import { ProjectTimelineStage } from '../types';

export interface TimelineTier {
  id: 'starter' | 'professional' | 'enterprise';
  name: string;
  badge: string;
  totalDuration: string;
  targetProfile: string;
  typicalInvestment: string;
  sprintPace: string;
}

export const TIMELINE_TIERS: TimelineTier[] = [
  {
    id: 'starter',
    name: 'Starter Platform',
    badge: 'RAPID SPRINT',
    totalDuration: '7 – 10 Days',
    targetProfile: 'Corporate brands, diaspora consulting & boutique exporters needing instant digital credibility.',
    typicalInvestment: '₦350,000 – ₦650,000 · $500 – $800',
    sprintPace: '1.5-Week Compressed Sprint',
  },
  {
    id: 'professional',
    name: 'Professional Infrastructure',
    badge: 'STANDARD SPRINT · RECOMMENDED',
    totalDuration: '10 – 15 Days',
    targetProfile: 'Active exporters, multi-step lead funnels, bespoke Studio Admin CMS, and WhatsApp routing.',
    typicalInvestment: '₦650,000 – ₦1,300,000 · £800 – £1,200',
    sprintPace: '2-Week Structured Sprint',
  },
  {
    id: 'enterprise',
    name: 'Flagship Enterprise',
    badge: 'EXPORT-GRADE COMPREHENSIVE',
    totalDuration: '3 – 5 Weeks',
    targetProfile: 'B2B agro-exporters, commodity merchants, volume quotation wizards (/quote), and compliance vaults.',
    typicalInvestment: '₦900,000 – ₦2,200,000+ · £1,200 – £1,800+',
    sprintPace: '3 to 5-Week Multi-Milestone Sprint',
  },
];

export const TIMELINE_STAGES: ProjectTimelineStage[] = [
  {
    id: 'stage-discovery',
    stepNumber: '01',
    name: 'Discovery & Scope Lock',
    subtitle: 'Deterministic Requirements, Invariant Boundary Mapping & Sprint Reservation',
    durations: {
      starter: 'Days 1 – 2',
      professional: 'Days 1 – 2',
      enterprise: 'Days 1 – 3',
    },
    summary:
      'We eliminate ambiguity before writing code. We map international buyer conversion funnels, formalize system invariants, establish API bounds, and confirm the 50% commitment deposit to lock your dedicated engineering sprint calendar.',
    alabsRule:
      'Zero production code is written before data schemas, conversion invariants, and non-functional requirements are signed into an Architecture Decision Record (ADR).',
    coreFocus: 'Eliminating guesswork, preventing mid-sprint budget inflation, and aligning on commercial conversion objectives.',
    deliverables: [
      {
        title: 'Technical Scope Lock & PRD',
        description: 'Comprehensive functional breakdown outlining user personas, quotation steps, and compliance requirements.',
        status: 'Deterministic',
      },
      {
        title: 'System Invariants Checklist',
        description: 'Hard architectural constraints the system must never violate (e.g., sub-second load, type-safe API, zero page-builder bloat).',
        status: 'Required',
      },
      {
        title: 'Architecture Decision Record (ADR-001)',
        description: 'Formal technical documentation explaining core stack selection, database modeling choices, and hosting strategy.',
        status: 'Production-Ready',
      },
      {
        title: 'Dedicated Sprint Calendar Lock',
        description: 'Official schedule reservation for Lead Systems Engineer Alabi Emmanuel with guaranteed delivery SLA.',
        status: 'Required',
      },
    ],
    architecturalHighlights: [
      'Scope Lock Invariant: Mid-sprint changes are isolated into a structured Phase 2 backlog so launch dates never slip.',
      'Non-Functional Performance Baseline: Mobile target <1.2s on 3G/4G African and UK mobile connections.',
      'Corridor Assessment: Evaluation of target buyer jurisdictions (UK, Europe, North America) and compliance criteria.',
    ],
    clientTouchpoint: {
      channel: '25-Minute Discovery Video Call & Private WhatsApp Channel',
      action: 'Review and co-sign the functional specification & invariant checklist with Alabi Emmanuel.',
      governanceGate: '50% commitment deposit confirmation officially locks the sprint calendar.',
    },
    paymentMilestone: {
      percentage: '50% Upfront Commitment',
      label: 'Sprint Lock Deposit',
      condition: 'Initiates Discovery, PRD formulation, and reserves dedicated engineering time.',
    },
    artifact: {
      fileName: 'docs/ADR-001-scope-and-invariants.md',
      language: 'markdown',
      code: `# ADR-001: Architecture Decision Record & Invariant Lock
Status: ACCEPTED (Signed off by Client & ALABSGOLD Lead Architect)
Date: Sprint Day 01
System Target: International B2B Trust Platform

## 1. Context & Business Invariant
The platform serves international buyers vetting Nigerian export suppliers.
A 3-second delay or broken quotation wizard causes instant abandonment.

## 2. Decision Rules (The Non-Negotiable Invariants)
- INVARIANT 1: Zero WordPress, Elementor, or bloated page builders.
- INVARIANT 2: Sub-second First Contentful Paint (<1.0s) on mobile.
- INVARIANT 3: Strict TypeScript schemas across all quotation payloads.
- INVARIANT 4: Self-managed VPS deployment (Ubuntu 24.04 LTS + Nginx)
  eliminating recurring $100+/mo SaaS CMS subscription fees.

## 3. Commercial Scope Boundary
Any feature not specified in Appendix A is deferred to Phase 2 backlog.
Guaranteed Milestone Delivery Window: Locked.`,
      explanation: 'Official Architecture Decision Record locking scope and establishing technical invariants before execution.',
    },
  },
  {
    id: 'stage-architecture',
    stepNumber: '02',
    name: 'Deterministic Architecture',
    subtitle: 'Relational Schemas, Type-Safe API Contracts & Hosting Topology',
    durations: {
      starter: 'Days 2 – 3',
      professional: 'Days 3 – 4',
      enterprise: 'Days 4 – 7',
    },
    summary:
      'We architect the system topology before touching interface components. We specify type-safe API contracts (API_CONTRACT.md), relational database schemas, VPS server topologies, and interactive wireframes for high-conversion quotation funnels.',
    alabsRule:
      'Type-safe schemas and deterministic API contracts precede UI components. The backend defines truth; the frontend renders state.',
    coreFocus: 'Establishing rigid data contracts, ensuring zero payload mismatches, and designing lean self-hosted hosting topologies.',
    deliverables: [
      {
        title: 'Deterministic API Contract (API_CONTRACT.md)',
        description: 'Complete specification of all REST endpoints, request payloads, response envelopes, and error codes.',
        status: 'Deterministic',
      },
      {
        title: 'Relational Database Schema (Drizzle / Postgres / SQLite)',
        description: 'Normalized data models for products, commodity volume specs, laboratory certificates, and quote leads.',
        status: 'Production-Ready',
      },
      {
        title: 'Self-Managed VPS Hosting Blueprint',
        description: 'Specification for Ubuntu LTS, Nginx reverse proxy, PM2 process management, and swap memory configurations.',
        status: 'Production-Ready',
      },
      {
        title: 'Interactive Wireframe & User Flow Prototype',
        description: 'Figma wireframes demonstrating the quotation wizard (/quote) and mobile-responsive navigation hierarchy.',
        status: 'Required',
      },
    ],
    architecturalHighlights: [
      'Zero-Drift Contracts: Frontend and backend integrate with zero ambiguous payloads or breaking runtime assumptions.',
      'Lean Self-Hosted Hosting: Configured for $6 – $12/mo VPS (DigitalOcean / Linode / Hetzner), saving thousands in agency retainers.',
      'Cryptographic Idempotency: Quotation requests and payments use unique idempotency tokens to prevent duplicate submissions.',
    ],
    clientTouchpoint: {
      channel: 'Loom Video Architecture Walkthrough + Figma Review',
      action: 'Client inspects data models, commodity spec selectors, and confirms quotation funnel flow.',
      governanceGate: 'Architectural approval triggers parallel build sprints.',
    },
    artifact: {
      fileName: 'contracts/quote-api.contract.ts',
      language: 'typescript',
      code: `import { z } from 'zod';

// Strict schema for International Export Quotation Requests
export const QuotationRequestSchema = z.object({
  idempotencyKey: z.string().uuid(),
  commodityCode: z.enum(['CASHEW-RAW', 'SESAME-EXPORT', 'GINGER-DRIED', 'CUSTOM']),
  targetVolumeMetricTons: z.number().positive().min(1),
  destinationPort: z.string().min(3),
  incoterm: z.enum(['FOB', 'CIF', 'CFR']),
  buyerOrg: z.object({
    companyName: z.string().min(2),
    contactEmail: z.string().email(),
    countryCode: z.string().length(2), // ISO-3166
    whatsappPhone: z.string().optional(),
  }),
});

export type QuotationRequest = z.infer<typeof QuotationRequestSchema>;

export interface QuotationResponse {
  referenceCode: string; // e.g. "KF-Q-2026-0814"
  estimatedFobRangeUsd: { min: number; max: number };
  routingDestination: 'WHATSAPP_DESK' | 'INTERNAL_CRM';
  issuedAt: string;
}`,
      explanation: 'Deterministic type-safe API contract governing export quotation requests and webhook dispatches.',
    },
  },
  {
    id: 'stage-build',
    stepNumber: '03',
    name: 'Parallel Sprints & Core Scaffolding',
    subtitle: 'Interface Assembly, Bespoke Studio Backoffice (/studio) & Quotation Engine',
    durations: {
      starter: 'Days 4 – 7',
      professional: 'Days 5 – 8',
      enterprise: 'Days 8 – 16',
    },
    summary:
      'We execute in parallel using our battle-tested alabsgold-core internal framework. We bypass repetitive boilerplate for auth and RBAC, focusing 100% of sprint energy on responsive frontend engineering, custom quotation wizards, and your custom Studio Admin backoffice.',
    alabsRule:
      'Zero reliance on unvetted third-party plugins. Every component is hand-crafted in modern TypeScript, React, Tailwind CSS, and Python/Django.',
    coreFocus: 'Rapid implementation, custom commercial wizards, frictionless backoffice CMS controls, and real-time staging deployment.',
    deliverables: [
      {
        title: 'Responsive Frontend Architecture',
        description: 'Precision-crafted responsive views with sub-second paint times, mobile ergonomics, and dark mode palette.',
        status: 'Production-Ready',
      },
      {
        title: 'Bespoke Studio Admin Backoffice (/studio)',
        description: 'Lightweight, tailor-made CMS for non-technical team members to edit products, prices, and review leads.',
        status: 'Deterministic',
      },
      {
        title: 'Commercial Quotation Engine (/quote)',
        description: 'Multi-step volume calculator with automated reference generation (e.g. KF-Q-XXXXXX) and WhatsApp routing.',
        status: 'Production-Ready',
      },
      {
        title: 'Webhook Security & HMAC Verification',
        description: 'Cryptographic SHA-256 HMAC signature verification protecting all inbound webhook notifications.',
        status: 'Required',
      },
    ],
    architecturalHighlights: [
      'The alabsgold-core Advantage: Pre-hardened authentication, RBAC, and telemetry save 60–80 hours of standard plumbing.',
      'No SaaS CMS Fees: Replaces $99/mo Sanity/Contentful subscriptions with an owned, zero-dependency custom backoffice.',
      'Dual Currency & Automated Routing: Instant price estimation in USD/GBP/EUR with automated routing to the client’s WhatsApp desk.',
    ],
    clientTouchpoint: {
      channel: 'Private Staging Environment (staging.client.alabsgold.com.ng)',
      action: 'Client test-drives the staging platform on phone and desktop, testing the backoffice and quote engine.',
      governanceGate: 'Mid-sprint checkpoint walkthrough and feedback consolidation.',
    },
    artifact: {
      fileName: 'src/lib/quote-engine.ts',
      language: 'typescript',
      code: `/**
 * alabsgold-core · Commercial Quotation & Reference Engine
 * Generates human-auditable, tamper-resistant quote identifiers.
 */
export function generateQuoteReference(prefix = 'ALABS'): string {
  const year = new Date().getFullYear();
  const randomHex = Math.random().toString(36).substring(2, 8).toUpperCase();
  return \`\${prefix}-Q-\${year}-\${randomHex}\`;
}

export function formatWhatsAppRoutingMessage(quote: {
  reference: string;
  commodity: string;
  volumeTons: number;
  country: string;
  buyer: string;
}): string {
  return [
    \`*NEW VERIFIED QUOTATION INQUIRY*\`,
    \`Ref: \${quote.reference}\`,
    \`Buyer: \${quote.buyer} (\${quote.country})\`,
    \`Commodity: \${quote.commodity}\`,
    \`Volume: \${quote.volumeTons} Metric Tons\`,
    \`Status: PENDING REVIEW · Verified via ALABSGOLD Engine\`,
  ].join('\\n');
}`,
      explanation: 'Production quote generator showing reference code formatting and automated sales-desk routing.',
    },
  },
  {
    id: 'stage-launch',
    stepNumber: '04',
    name: 'Production Hardening & DNS Handover',
    subtitle: 'Core Web Vitals Tuning, VPS Deployment, Final Settlement & IP Transfer',
    durations: {
      starter: 'Days 8 – 10',
      professional: 'Days 9 – 10',
      enterprise: 'Days 17 – 20',
    },
    summary:
      'We run rigorous audits: Core Web Vitals optimization, mobile viewport testing, Nginx reverse proxy tuning, SSL hardening, and staging acceptance QA. Upon final 50% milestone settlement, we execute seamless DNS cutover and transfer 100% repository and IP ownership.',
    alabsRule:
      'Zero DNS propagation until staging QA sign-off, sub-second latency verification, and complete source code repository handover.',
    coreFocus: 'Sub-second performance benchmarking, production infrastructure hardening, zero-downtime cutover, and clean IP handover.',
    deliverables: [
      {
        title: 'Sub-Second Core Web Vitals Tuning',
        description: 'Lighthouse 95+ score optimization, inlined critical CSS, lazy asset hydration, and mobile bandwidth tuning.',
        status: 'Production-Ready',
      },
      {
        title: 'Production VPS Server Hardening',
        description: 'Configured Nginx reverse proxy, PM2 clustering with auto-restart on crash, UFW firewall, and fail2ban rules.',
        status: 'Deterministic',
      },
      {
        title: 'Zero-Downtime DNS Handover',
        description: 'DNS propagation to production domain, automated Let’s Encrypt SSL provisioning, and HTTP/2 enforcement.',
        status: 'Required',
      },
      {
        title: '100% Source Code & IP Handover',
        description: 'Full transfer of private GitHub repository, commit history, deployment credentials, and asset licenses.',
        status: 'Required',
      },
    ],
    architecturalHighlights: [
      'Zero Technical Hostage: You receive 100% intellectual property ownership in your private organization repository.',
      'Enterprise Hardening: Automated TLS 1.3 encryption, CSP headers, rate-limiting against scrapers, and gzip/brotli compression.',
      'Zero-Downtime Deployment: Blue-green or atomic symlink zero-downtime releases via PM2.',
    ],
    clientTouchpoint: {
      channel: 'Synchronous Staging Sign-Off Call & Live DNS Handover',
      action: 'Client verifies staging acceptance; remaining 50% balance is settled; production DNS points live.',
      governanceGate: 'Final QA sign-off triggers production launch and complete repository transfer.',
    },
    paymentMilestone: {
      percentage: '50% Final Settlement',
      label: 'Production Handover Balance',
      condition: 'Paid upon staging QA sign-off, immediately prior to DNS propagation and repository transfer.',
    },
    artifact: {
      fileName: 'deploy/nginx-production.conf',
      language: 'nginx',
      code: `server {
    listen 443 ssl http2;
    server_name yourdomain.com.ng www.yourdomain.com.ng;

    # Automated Let's Encrypt TLS 1.3 Hardening
    ssl_certificate /etc/letsencrypt/live/yourdomain.com.ng/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/yourdomain.com.ng/privkey.pem;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    # Security Headers & Anti-Clickjacking
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    # Reverse Proxy to Internal PM2 Cluster
    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}`,
      explanation: 'Production Nginx configuration with TLS 1.3, security headers, and reverse proxy routing to PM2.',
    },
  },
  {
    id: 'stage-support',
    stepNumber: '05',
    name: '30-Day Warranty & SLA Retainer',
    subtitle: 'Proactive Telemetry, Operational Runbooks & Continuous Optimization',
    durations: {
      starter: '30-Day Included',
      professional: '30-Day Included',
      enterprise: '45-Day Priority',
    },
    summary:
      'We do not hand over code and disappear. Every project includes a 30-day written engineering warranty for bug remediation and server monitoring. For active businesses, our monthly SLA retainers provide continuous feature sprints and emergency on-call response.',
    alabsRule:
      'No "hand over and disappear". Every build includes written warranty protection and complete operational runbooks.',
    coreFocus: 'Post-launch stability, operational empowerment for client teams, server telemetry monitoring, and continuous scaling.',
    deliverables: [
      {
        title: '30-Day Included Technical Warranty',
        description: 'Zero-charge bug remediation, telemetry health monitoring, and server configuration tuning post-launch.',
        status: 'Deterministic',
      },
      {
        title: 'Operational Runbook & Documentation',
        description: 'Step-by-step guides detailing backup restoration, database migration commands, and environment variable rotation.',
        status: 'Required',
      },
      {
        title: 'Staff Backoffice Video Training',
        description: 'Recorded Loom tutorial training non-technical staff how to publish products, edit specs, and manage quotation leads.',
        status: 'Production-Ready',
      },
      {
        title: 'Continuous Monthly SLA Option',
        description: 'Optional monthly retainer for feature development sprints, uptime monitoring, and <4-hour emergency SLA response.',
        status: 'Production-Ready',
      },
    ],
    architecturalHighlights: [
      'Proactive Telemetry Monitoring: Automated monitors check memory pressure, disk utilization, and SSL validity.',
      'Zero-Cost Bug Remediation: Any defect traceable to the original specification is resolved free of charge during warranty.',
      'SLA Retainer Flexibility: Monthly retainers operate without long-term vendor lock-in and can be canceled anytime.',
    ],
    clientTouchpoint: {
      channel: 'Dedicated WhatsApp Engineering Channel & Monthly Telemetry Report',
      action: 'Client staff completes backoffice onboarding; monthly performance scorecards delivered regularly.',
      governanceGate: 'Smooth transition into steady-state operations or monthly retainer continuation.',
    },
    artifact: {
      fileName: 'ops/telemetry-monitor.sh',
      language: 'bash',
      code: `#!/usr/bin/env bash
# ALABSGOLD Production Telemetry & Heartbeat Daemon
HEALTH_ENDPOINT="https://yourdomain.com.ng/api/health"
STATUS_CODE=$(curl -s -o /dev/null -w "%{http_code}" "$HEALTH_ENDPOINT")

if [ "$STATUS_CODE" -ne 200 ]; then
    echo "[ALERT] Health check failed with code: $STATUS_CODE at $(date)"
    # Dispatch instant alert via Telegram / WhatsApp Webhook
    curl -s -X POST https://api.alabsgold.com.ng/v1/alerts \\
        -H "Content-Type: application/json" \\
        -d '{"system":"Production Node 01","severity":"CRITICAL","code":"'$STATUS_CODE'"}'
else
    echo "[OK] Digital infrastructure operational. HTTP 200 at $(date)"
fi`,
      explanation: 'Production telemetry daemon monitoring application uptime and dispatching emergency alerts.',
    },
  },
];

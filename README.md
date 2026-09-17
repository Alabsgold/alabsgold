# ALABSGOLD — Boutique Web Engineering & Digital Infrastructure Studio

[![TypeScript](https://img.shields.io/badge/TypeScript-5.5+-3178c6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3+-61dafb?logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0+-646cff?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0+-06b6d4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0+-ff0055?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-amber.svg)](LICENSE)

> **"We engineer digital infrastructure for businesses whose next customer is on another continent, doesn't know them yet, and is deciding—in the first 30 seconds on the site—whether to trust them with money."**

---

## 🏛️ About ALABSGOLD

Headquartered in Lagos, Nigeria (WAT / GMT+1) and operating globally, **ALABSGOLD** is an engineering studio founded by **Alabi Emmanuel (Alabsgold)**. The studio designs, fortifies, and ships production-grade web platforms, custom quotation systems, AI retrieval engines, and high-concurrency backends for exporters, luxury real estate operators, and diaspora businesses.

### The Problem We Solve: The Structural Credibility Gap
African businesses serving foreign buyers face a structural credibility gap that has nothing to do with product quality. A premium cashew or ginger exporter with international phytosanitary certificates can lose a six-figure contract because of a sluggish page-builder site, broken quotation flows, or an unbranded email address. 

ALABSGOLD closes this gap with high-performance engineering: verified compliance showcases, instant page responsiveness, transparent milestone pricing, and hand-rolled Studio backoffices.

---

## ⚡ Core Architectural Invariants

* **Zero Page-Builders or Disposable Templates:** No WordPress, Elementor, or bloated CMS plugins. Every platform is hand-crafted in type-safe React, Next.js, and Python.
* **Performance as a Conversion Metric:** Optimized for sub-second mobile rendering across international latency profiles.
* **Uncompromising Ownership:** Clients receive 100% intellectual property ownership, clear documentation, and private Git repository transfer upon milestone completion.
* **Security from First Commit:** Webhook HMAC authentication, rate limiting, and parameter validation guards built into the core architecture.
* **Lean, Self-Managed VPS Hosting:** Configured on Ubuntu VPS with Nginx reverse proxying, systemd/PM2 process supervision, and automated backup routines—eliminating recurring third-party platform fees.

---

## 🗺️ Multi-Page Application Architecture

| Route | Page | Description |
| :--- | :--- | :--- |
| `/` | **Home** | Comprehensive studio overview, interactive Architecture Simulator, featured case studies (*Kadie Fresh*, *NIRA-XT Guardian 2*, *Atlassian Forge Apps*), process overview, and client testimonials. |
| `/services` | **Services & Pricing** | Three core engineering pillars, authentic milestone pricing tiers with an interactive **NGN / International** currency toggle, niche industry solution bands, and "What We Don't Do" rules. |
| `/products` | **Products & Labs** | Categorized portfolio featuring live production platforms, brand identity systems, and R&D lab experiments (*PrepAI*, *PrepCBT*, *EX-DIGITAL*, *Project Aegis*). |
| `/founder` | **Founder Profile** | Profile of Founder & Lead Systems Engineer **Alabi Emmanuel**, 1st place NiRA-XT Hackathon award, Alluvium enterprise SIWES experience, and verified certifications. |
| `/about` | **About Studio** | Mission statement, the structural credibility gap analysis, 4 studio quality pillars, global operating corridors, and regulatory compliance standards. |
| `/contact` | **Contact & Intake** | Authentic project intake scoping form, guaranteed 24-hour response SLA (Mon–Sat), direct WhatsApp link (`+234 810 034 5062`), and categorized FAQs. |

---

## 🔍 SEO & Social Sharing Engine (`useSEO` Hook)

The application features a custom React hook (`src/hooks/useSEO.ts`) that dynamically configures search engine metadata, Open Graph cards, Twitter cards, canonical tags, and Schema.org JSON-LD on every page transition:

* **Dynamic Titles & Descriptions:** Tailored per-route for high search click-through rates.
* **Rich Social Cards:** Open Graph (`og:title`, `og:description`, `og:url`, `og:site_name`) and Twitter Card (`summary_large_image`) tags for Slack, Discord, LinkedIn, X, and WhatsApp link previews.
* **Canonical URL Resolution:** Automatically keeps canonical links in sync with client-side history navigation.
* **Schema.org Structured Data:** Dynamic JSON-LD schema injection supporting `ProfessionalService`, `Service`, `CollectionPage`, `Person`, `AboutPage`, and `ContactPage` schemas.

---

## 🛠️ Technology Stack

* **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict compiler flags)
* **Frontend Framework:** [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
* **Routing:** [React Router DOM v6](https://reactrouter.com/)
* **Styling & Layout:** [Tailwind CSS v4](https://tailwindcss.com/)
* **Motion & Interactions:** [Framer Motion](https://www.framer.com/motion/) (Scroll progress indicator, staggered reveals, smooth tab transitions)
* **Headless UI Primitives:** [@radix-ui/react-dialog](https://www.radix-ui.com/)
* **Iconography:** [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

### Prerequisites
* Node.js `18.x` or higher
* npm `9.x` or higher

### 1. Clone the Repository
```bash
git clone https://github.com/alabsgold/alabsgold-studio.git
cd alabsgold-studio
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
The application will launch at `http://localhost:3000`.

### 4. Code Quality & Linting
```bash
npm run lint
```

### 5. Production Build
```bash
npm run build
```
Generates optimized, treeshaken static assets in the `dist/` directory.

---

## 📁 Directory Structure

```text
├── index.html                  # HTML entry point with baseline meta & font definitions
├── metadata.json               # Platform configuration and permissions
├── package.json                # Project dependencies and script runner
├── README.md                   # Project documentation
├── src/
│   ├── App.tsx                 # Main application shell, routing configuration, layout
│   ├── main.tsx                # React DOM root mounting
│   ├── index.css               # Global Tailwind CSS import
│   ├── types.ts                # Centralized TypeScript models and domain interfaces
│   ├── components/             # Reusable UI modules
│   │   ├── ArchitectureSimulator.tsx  # Interactive visual dataflow simulator
│   │   ├── CaseStudiesSection.tsx     # Deep-dive engineering breakdowns
│   │   ├── FaqSection.tsx             # Collapsible FAQ accordion with category filter
│   │   ├── Footer.tsx                 # Studio navigation, presence hub, direct desks
│   │   ├── Hero.tsx                   # Studio headline, verified metrics, proof badges
│   │   ├── IntakeModal.tsx            # Floating modal for fast project intake scoping
│   │   ├── Navbar.tsx                 # Responsive header with route links and CTA
│   │   ├── ProcessSection.tsx         # 5-phase delivery breakdown & boundary rules
│   │   ├── ScrollProgressBar.tsx      # Fixed 2px gold scroll progress indicator
│   │   ├── ServicesSection.tsx        # 3 service pillars overview
│   │   └── TechStackSection.tsx       # Filterable battle-tested primitives
│   ├── data/
│   │   └── content.ts          # Authentic single-source-of-truth content and records
│   ├── hooks/
│   │   └── useSEO.ts           # Dynamic SEO, Open Graph & JSON-LD hook
│   └── pages/                  # Route-level page components
│       ├── AboutPage.tsx       # Studio mission, philosophy & invariants
│       ├── ContactPage.tsx     # Scoping intake form, WhatsApp link & FAQs
│       ├── FounderPage.tsx     # Alabi Emmanuel profile, experience & credentials
│       ├── HomePage.tsx        # Core landing overview
│       ├── ProductsPage.tsx    # Selected works, platforms, and R&D labs
│       └── ServicesPage.tsx    # Detailed service pillars & dual-currency pricing
```

---

## 📬 Contact & Studio Desks

* **Founder & Lead Engineer:** Alabi Emmanuel (Alabsgold)
* **Direct Studio Email:** [hello@alabsgold.com.ng](mailto:hello@alabsgold.com.ng)
* **Personal / Secondary Email:** [emmaalabi31@gmail.com](mailto:emmaalabi31@gmail.com)
* **WhatsApp Intake:** [+234 703 996 0964 (07039960964)](https://wa.me/2347039960964?text=Hi%20Emmanuel,%20I%20saw%20the%20ALABSGOLD%20site%20and%20I'd%20like%20to%20discuss%20a%20project.)
* **Studio Base:** Lagos, Nigeria (WAT / GMT+1) · Available for worldwide client engagements

---

## ⚖️ License

Distributed under the MIT License. See `LICENSE` for more information.

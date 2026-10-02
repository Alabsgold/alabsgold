import React from 'react';
import { Link } from 'react-router-dom';
import { useSEO } from '../hooks/useSEO';
import { Hero } from '../components/Hero';
import {
  ShieldCheck,
  Cpu,
  ArrowRight,
  Award,
  Zap,
  CheckCircle2,
  MessageSquare,
  ArrowUpRight,
} from 'lucide-react';
import { THREE_SERVICE_PILLARS, FLAGSHIP_CASE_STUDIES, STUDIO_DATA } from '../data/content';

interface HomePageProps {
  onOpenIntake: (serviceTitle?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenIntake }) => {
  useSEO({
    title: 'ALABSGOLD — Boutique Web Engineering Studio',
    description:
      'Boutique web engineering studio based in Lagos, Nigeria. We build high-speed web platforms, export compliance systems, and secure backend architectures for businesses operating across borders.',
    canonicalPath: '/',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'ALABSGOLD',
      alternateName: 'ALABSGOLD Engineering Studio',
      url: 'https://alabsgold.vercel.app',
      logo: 'https://alabsgold.vercel.app/favicon.svg',
      image: 'https://alabsgold.vercel.app/og-image.png',
      telephone: '+2347039960964',
      email: 'alabsgold31@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Lagos',
        addressCountry: 'NG',
      },
      founder: {
        '@type': 'Person',
        name: 'Alabi Emmanuel',
        jobTitle: 'Lead Systems Architect & Founder',
      },
    },
  });

  return (
    <div className="space-y-0">
      {/* 1. Hero: One clear value proposition + primary consultation CTA */}
      <Hero onOpenIntake={() => onOpenIntake('Hero Consultation')} />

      {/* Quick Dedicated Route Navigation Tiles: OS 26 Liquid Glass */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-amber-600 dark:text-amber-400 font-bold">
            DEDICATED STUDIO ARCHITECTURE
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1">
            Explore Dedicated Studio Pages
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
          {[
            {
              title: 'Services & Pricing',
              subtitle: '3 Pillars & Milestones',
              path: '/services',
              icon: <Zap className="w-4 h-4 text-amber-500" />,
            },
            {
              title: 'Work & Labs',
              subtitle: 'Production Platforms',
              path: '/products',
              icon: <Cpu className="w-4 h-4 text-amber-500" />,
            },
            {
              title: 'Founder Profile',
              subtitle: 'Alabi Emmanuel',
              path: '/founder',
              icon: <Award className="w-4 h-4 text-amber-500" />,
            },
            {
              title: 'About Us',
              subtitle: 'Studio Philosophy',
              path: '/about',
              icon: <ShieldCheck className="w-4 h-4 text-amber-500" />,
            },
            {
              title: 'Contact Desk',
              subtitle: '24h Response SLA',
              path: '/contact',
              icon: <MessageSquare className="w-4 h-4 text-amber-500" />,
            },
          ].map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="group p-4 rounded-2xl bg-white/45 dark:bg-white/[0.04] backdrop-blur-xl border border-white/50 dark:border-white/10 hover:border-amber-500/40 dark:hover:border-amber-400/30 hover:bg-white/70 dark:hover:bg-white/[0.08] transition-all shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col justify-between cursor-pointer"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-xl bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/20">
                  {item.icon}
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-500 transition-colors" />
              </div>
              <div>
                <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                  {item.title}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-zinc-400 mt-0.5 font-normal">
                  {item.subtitle}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 2. Services Overview: Transparent OS 26 Liquid Glass Cards with link to Dedicated Services Page */}
      <section className="py-20 border-t border-white/20 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-600 dark:text-amber-400 mb-3 backdrop-blur-md">
                <Zap className="w-3.5 h-3.5" />
                <span>CORE ENGINEERING DISCIPLINES</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                What We Build For You
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-xl">
                Three specialized engineering pillars engineered for overseas trust, high performance, and total code ownership.
              </p>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/60 dark:bg-white/10 hover:bg-white/90 dark:hover:bg-white/20 border border-white/50 dark:border-white/15 text-xs font-semibold text-slate-900 dark:text-white backdrop-blur-xl shadow-sm transition-all whitespace-nowrap self-start md:self-auto group cursor-pointer"
            >
              <span>Explore All Services & Pricing</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-500 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {THREE_SERVICE_PILLARS.map((pillar, idx) => (
              <div
                key={pillar.id}
                className="p-7 rounded-3xl bg-white/50 dark:bg-zinc-900/40 backdrop-blur-2xl border border-white/50 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.06)] flex flex-col justify-between hover:border-amber-400/50 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono tracking-wider uppercase text-amber-600 dark:text-amber-400 font-semibold px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                      PILLAR 0{idx + 1}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      {pillar.techStack[0]}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                    {pillar.shortDesc}
                  </p>

                  <div className="mt-5 space-y-2">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                      Key Capabilities:
                    </div>
                    {pillar.architectureHighlights.slice(0, 3).map((item, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-7 pt-4 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-500 dark:text-zinc-400">
                    {pillar.metrics.split('·')[0]}
                  </span>
                  <Link
                    to="/services"
                    className="text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>View Scope</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Flagship Selected Work: Kadie Fresh & Team X-Coders Proof */}
      <section className="py-20 border-t border-white/20 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-600 dark:text-amber-400 mb-3 backdrop-blur-md">
                <Award className="w-3.5 h-3.5" />
                <span>SELECTED WORK & PRODUCTION PROOFS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
                Systems That Deliver Real Business Results
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-xl">
                Verified systems built for export compliance, cybersecurity hackathons, and high-performance financial workflows.
              </p>
            </div>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/60 dark:bg-white/10 hover:bg-white/90 dark:hover:bg-white/20 border border-white/50 dark:border-white/15 text-xs font-semibold text-slate-900 dark:text-white backdrop-blur-xl shadow-sm transition-all whitespace-nowrap self-start md:self-auto group cursor-pointer"
            >
              <span>Explore All Systems & Labs</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-500 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {FLAGSHIP_CASE_STUDIES.slice(0, 2).map((study) => (
              <div
                key={study.id}
                className="p-8 rounded-3xl bg-white/50 dark:bg-zinc-900/40 backdrop-blur-2xl border border-white/50 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.06)] flex flex-col justify-between hover:border-amber-400/40 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-semibold px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20">
                      {study.sector}
                    </span>
                    <span className="text-xs text-emerald-600 dark:text-emerald-400 font-mono font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <span>{study.statusBadge}</span>
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                    {study.client}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-amber-600 dark:text-amber-400">
                    {study.headline}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed line-clamp-3">
                    {study.challenge}
                  </p>

                  {/* Quantitative Metric Grid */}
                  <div className="mt-6 p-4 rounded-2xl bg-slate-100/60 dark:bg-white/[0.03] border border-white/50 dark:border-white/10 grid grid-cols-3 gap-4 text-center">
                    {study.impactMetrics.map((m, i) => (
                      <div key={i}>
                        <div className="text-base sm:text-lg font-black text-amber-500">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-slate-500 dark:text-zinc-400 uppercase tracking-wider font-mono mt-0.5">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200/60 dark:border-white/10 flex items-center justify-between">
                  <div className="text-xs text-slate-500 dark:text-zinc-400 font-mono">
                    Timeline: <span className="font-semibold text-slate-800 dark:text-zinc-200">{study.timeline}</span>
                  </div>
                  <Link
                    to="/products"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline cursor-pointer"
                  >
                    <span>Read Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Founder & Trust Highlights: Transparent OS 26 Liquid Glass */}
      <section className="py-20 border-t border-white/20 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-white/50 dark:bg-zinc-900/40 backdrop-blur-2xl border border-white/50 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.06)] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-600 dark:text-amber-400 backdrop-blur-md">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>FOUNDER & ARCHITECTURAL INVARIANTS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                Direct Engineering Accountability With Founder Alabi Emmanuel
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                When you hire ALABSGOLD, your system is not outsourced to junior freelancers. Founder Alabi Emmanuel — 1st Place NiRA-XT National Hackathon Winner and Lead Architect — personally designs and oversees every database schema, API security gate, and deployment pipeline.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {[
                  { title: 'Zero Vendor Lock-in', desc: 'Full Git repo handoff with CI/CD scripts' },
                  { title: '50/50 Milestone Contract', desc: 'Final 50% tied exclusively to approved QA' },
                  { title: 'Sub-Second Global Latency', desc: 'Edge CDN and lightweight DOM architecture' },
                  { title: '24h Response SLA', desc: 'Direct founder WhatsApp & email corridor' },
                ].map((inv, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/50 dark:bg-white/[0.02] border border-white/40 dark:border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-xs font-bold text-slate-900 dark:text-white">{inv.title}</strong>
                      <span className="text-[11px] text-slate-500 dark:text-zinc-400">{inv.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-3 flex flex-wrap items-center gap-3">
                <Link
                  to="/founder"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs uppercase tracking-wider transition-all shadow-md active:scale-95 cursor-pointer"
                >
                  <span>View Founder Profile & Track Record</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/60 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20 border border-white/50 dark:border-white/10 text-xs font-semibold text-slate-800 dark:text-zinc-200 transition-all cursor-pointer"
                >
                  <span>Studio Philosophy</span>
                </Link>
              </div>
            </div>

            {/* Founder Visual Card */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-gradient-to-br from-amber-500/10 via-amber-400/5 to-transparent border border-amber-500/20 backdrop-blur-xl">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-amber-700 flex items-center justify-center text-black font-black text-xl shadow-[0_0_20px_rgba(245,158,11,0.4)]">
                  AE
                </div>
                <div>
                  <div className="text-base font-bold text-slate-900 dark:text-white">
                    Alabi Emmanuel
                  </div>
                  <div className="text-xs text-amber-600 dark:text-amber-400 font-mono">
                    Lead Systems Architect & Founder
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-zinc-300 italic leading-relaxed">
                "Our business is not selling websites; it is engineering the digital evidence that allows a foreign executive to wire $100k+ with complete confidence."
              </p>

              <div className="mt-5 pt-4 border-t border-amber-500/20 space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-600 dark:text-zinc-400">
                  <span>Location:</span>
                  <span className="font-semibold text-slate-900 dark:text-white">Lagos, Nigeria (GMT+1)</span>
                </div>
                <div className="flex items-center justify-between text-slate-600 dark:text-zinc-400">
                  <span>National Honor:</span>
                  <span className="font-semibold text-amber-600 dark:text-amber-400">1st Place NiRA-XT Hackathon</span>
                </div>
                <div className="flex items-center justify-between text-slate-600 dark:text-zinc-400">
                  <span>Direct Desk:</span>
                  <a href={`mailto:${STUDIO_DATA.email}`} className="font-mono text-amber-600 dark:text-amber-400 hover:underline">
                    {STUDIO_DATA.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Consultation & Intake Desk Banner: Clear CTA to Dedicated Contact Page */}
      <section className="py-20 border-t border-white/20 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-r from-amber-500/15 via-amber-400/10 to-amber-600/10 backdrop-blur-3xl border border-amber-500/30 text-center space-y-6 relative overflow-hidden shadow-[0_8px_32px_0_rgba(245,158,11,0.12)]">
            <div className="max-w-2xl mx-auto space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-xs font-mono text-amber-700 dark:text-amber-300 font-semibold">
                ACCEPTING Q4/Q1 CLIENT ENGAGEMENTS
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                Ready to engineer your international trust platform?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 max-w-lg mx-auto leading-relaxed">
                Direct consultation with Founder Alabi Emmanuel. Initial technical review and fixed milestone quote delivered within 24 hours.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
              <button
                onClick={() => onOpenIntake('Homepage Bottom CTA')}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs uppercase tracking-wider transition-all shadow-[0_4px_25px_rgba(245,158,11,0.35)] active:scale-95 cursor-pointer"
              >
                Request a Consultation
              </button>
              <Link
                to="/contact"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white/70 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 border border-white/60 dark:border-white/15 text-xs font-semibold text-slate-900 dark:text-white backdrop-blur-xl transition-all shadow-sm cursor-pointer"
              >
                Go to Project Intake Desk
              </Link>
              <a
                href={STUDIO_DATA.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl border border-emerald-500/30 hover:border-emerald-500/50 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp: {STUDIO_DATA.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

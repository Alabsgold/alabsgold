import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { ArchitectureSimulator } from '../components/ArchitectureSimulator';
import { ServicesSection } from '../components/ServicesSection';
import { CaseStudiesSection } from '../components/CaseStudiesSection';
import { ProcessSection } from '../components/ProcessSection';
import { TechStackSection } from '../components/TechStackSection';
import { FaqSection } from '../components/FaqSection';
import { SELECTED_WORKS, FOUNDER_DATA, AUTHENTIC_PRICING_TIERS, STUDIO_DATA } from '../data/content';
import { ArrowRight, Sparkles, Shield, Cpu, Package, Check, User, Terminal, ExternalLink, Quote, Award } from 'lucide-react';

interface HomePageProps {
  onOpenIntake: (serviceTitle?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenIntake }) => {
  // Top 6 featured works from the 8 selected works
  const topFeaturedWorks = SELECTED_WORKS.slice(0, 6);

  return (
    <div className="space-y-0">
      {/* Hero Section with Telemetry & Proof Highlights */}
      <Hero onOpenIntake={() => onOpenIntake()} />

      {/* Flagship Case Studies & Engineering Logs (Kadie Fresh, NIRA-XT Guardian 2, Payment System) */}
      <CaseStudiesSection />

      {/* Live Interactive Architecture Simulator */}
      <ArchitectureSimulator />

      {/* 3 Core Service Pillars (Trust Infrastructure, AI & Automation, Secure Backend) */}
      <ServicesSection onSelectServiceForIntake={(title) => onOpenIntake(title)} />

      {/* Structured Delivery Process & alabsgold-core */}
      <ProcessSection />

      {/* Top 6 Featured Selected Works Grid */}
      <section className="py-24 bg-[#0c0c0e] border-t border-b border-[#27272a] relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400 mb-3">
                <Package className="w-3.5 h-3.5" />
                <span>SELECTED WORK & PLATFORMS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Engineered for real operational utility.
              </h2>
              <p className="mt-2 text-zinc-400 text-sm max-w-xl">
                From self-hosted portfolio CMS engines to AI study retrieval pipelines and enterprise Atlassian Forge apps.
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 hover:text-amber-300 font-semibold px-4 py-2.5 rounded-xl bg-[#18181b] border border-[#27272a] hover:border-amber-500/40 transition-colors w-fit"
            >
              <span>Explore All Works & Labs</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topFeaturedWorks.map((work) => (
              <motion.div
                key={work.id}
                whileHover={{ y: -4, borderColor: 'rgba(245,158,11,0.4)' }}
                className="p-6 rounded-2xl bg-[#111114] border border-[#27272a] flex flex-col justify-between transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-amber-400 border border-zinc-700">
                      {work.category}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                      {work.status}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {work.title}
                  </h3>
                  <p className="mt-2 text-xs text-amber-300/80 font-mono font-medium">
                    {work.oneLiner}
                  </p>
                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed font-normal">
                    {work.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800/80">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {work.tags.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <Link
                      to="/products"
                      className="text-xs font-mono text-amber-400 hover:underline flex items-center gap-1"
                    >
                      Technical Review <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / Client Proof Quote */}
      <section className="py-20 bg-[#09090b] relative border-b border-[#27272a]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 mb-6">
            <Quote className="w-6 h-6" />
          </div>
          <blockquote className="text-lg sm:text-2xl font-medium text-zinc-200 leading-relaxed italic">
            "Before ALABSGOLD built our platform, international buyers had to wait for manual email quotes and had no way to verify our export compliance in real time. The custom quotation wizard and self-hosted VPS platform shortened our sales cycle instantly."
          </blockquote>
          <div className="mt-6 flex items-center justify-center gap-3">
            <div className="w-9 h-9 rounded-full bg-amber-400 text-black font-bold font-mono text-sm flex items-center justify-center">
              KF
            </div>
            <div className="text-left">
              <div className="text-sm font-bold text-white">Kadie Fresh Export Operations</div>
              <div className="text-xs font-mono text-zinc-400">kadiefreshh.com · Prepared Agro-Produce Exporter</div>
            </div>
          </div>
        </div>
      </section>

      {/* Authentic Budget Pricing Preview */}
      <section className="py-20 bg-[#09090b] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#18181b] border border-[#27272a] text-xs font-mono text-zinc-300 mb-3">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>TRANSPARENT BUDGET PRICING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Predictable, milestone-based investment.
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              Honest studio rates with 50% upfront commitment and 50% on QA approval before DNS handover. Direct Nigerian bank transfer or Geegpay / Grey / Wise / Payoneer for international.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {AUTHENTIC_PRICING_TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`p-6 rounded-2xl border flex flex-col justify-between transition-all ${
                  tier.highlighted
                    ? 'bg-[#141418] border-amber-500/60 shadow-[0_0_25px_rgba(245,158,11,0.15)] ring-1 ring-amber-500/30'
                    : 'bg-[#111114] border-[#27272a]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-800 text-amber-400 border border-zinc-700">
                      {tier.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{tier.name}</h3>
                  <div className="mt-3">
                    <div className="text-xl font-extrabold font-mono text-amber-400">{tier.priceNGN}</div>
                    <div className="text-xs font-mono text-zinc-400 mt-0.5">{tier.priceIntl}</div>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500 block mt-1">{tier.billingPeriod}</span>
                  <p className="mt-3 text-xs text-zinc-400 leading-relaxed font-normal">{tier.shortDesc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800">
                  <button
                    onClick={() => onOpenIntake(tier.name)}
                    className={`w-full py-2.5 px-3 rounded-xl text-xs font-semibold font-mono tracking-wide transition-all cursor-pointer ${
                      tier.highlighted
                        ? 'bg-amber-400 hover:bg-amber-300 text-black shadow-md'
                        : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200'
                    }`}
                  >
                    Select Plan
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-amber-400 transition-colors"
            >
              <span>View full deliverables and niche industry bands on our Services page</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Founder Spotlight Banner */}
      <section className="py-20 bg-[#0c0c0f] border-t border-b border-[#27272a] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-[#111114] border border-[#27272a] p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400">
                  <User className="w-3.5 h-3.5" />
                  <span>FOUNDER & PRINCIPAL ARCHITECT</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  Meet {FOUNDER_DATA.displayName}
                </h3>
                <p className="text-xs font-mono text-amber-400/90 font-semibold">
                  {FOUNDER_DATA.institution} · {FOUNDER_DATA.location}
                </p>
                <p className="text-sm text-zinc-300 leading-relaxed max-w-2xl font-normal">
                  "{FOUNDER_DATA.quote}"
                </p>
                <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    Kadie Fresh Live Production Exporter
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    1st Place National Cybersecurity Champion
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                    Alluvium (Atlassian Partner) SIWES
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
                <Link
                  to="/founder"
                  className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs tracking-wider uppercase transition-all shadow-md text-center"
                >
                  Read Founder Profile & Ethos
                </Link>
                <button
                  onClick={() => onOpenIntake('Direct Consultation with Alabi Emmanuel')}
                  className="px-6 py-3.5 rounded-xl bg-[#18181b] hover:bg-zinc-800 text-zinc-200 border border-[#27272a] hover:border-amber-500/40 text-xs font-semibold tracking-wider uppercase transition-all text-center cursor-pointer"
                >
                  Schedule Technical Review
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proven Tech Stack */}
      <TechStackSection />

      {/* Frequently Answered Questions */}
      <FaqSection onOpenIntake={() => onOpenIntake()} />

      {/* Bottom Final CTA Section from Section 7 of verified document */}
      <section className="py-24 bg-gradient-to-b from-[#09090b] to-[#111114] border-t border-[#27272a] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>START A PROJECT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Ready to build something that holds up under scrutiny?
          </h2>
          <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed font-normal">
            Tell us about your business and what your customers need to see before they trust you with a deal. We'll scope it, quote it, and build it — fast.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenIntake('Homepage Bottom CTA')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-black bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 rounded-xl transition-all shadow-[0_0_25px_rgba(245,158,11,0.35)] cursor-pointer"
            >
              <span>Start a Project →</span>
            </button>
            <a
              href={STUDIO_DATA.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-medium text-zinc-200 hover:text-white bg-[#18181b] border border-[#27272a] hover:border-amber-500/40 rounded-xl transition-all"
            >
              <span>Chat on WhatsApp</span>
            </a>
          </div>
          <p className="text-xs font-mono text-zinc-500">
            Direct Founder response within 24 hours (Monday through Saturday)
          </p>
        </div>
      </section>
    </div>
  );
};

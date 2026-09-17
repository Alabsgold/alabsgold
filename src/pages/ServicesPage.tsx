import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';
import {
  THREE_SERVICE_PILLARS,
  AUTHENTIC_PRICING_TIERS,
  NICHE_PRICING_BANDS,
  STUDIO_DATA,
} from '../data/content';
import {
  ShieldCheck,
  Terminal,
  CreditCard,
  CheckCircle2,
  Check,
  ArrowRight,
  Sparkles,
  Zap,
  Cpu,
  Clock,
  Layers,
  Building2,
  Wheat,
  Globe2,
  Landmark,
} from 'lucide-react';

interface ServicesPageProps {
  onOpenIntake: (serviceTitle?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenIntake }) => {
  useSEO({
    title: 'Services & Transparent Pricing | ALABSGOLD',
    description:
      'Engineering services and realistic milestone pricing for custom web platforms, export trust infrastructure, AI retrieval systems, and secure cloud backends.',
    keywords: [
      'Web Development Services',
      'Export Platform Pricing',
      'Custom Software Development Lagos',
      'Studio Admin CMS',
      'ALABSGOLD Pricing',
      'Nigeria Web Engineering',
    ],
    canonicalPath: '/services',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Digital Infrastructure & Web Engineering',
      provider: {
        '@type': 'Organization',
        name: 'ALABSGOLD',
        url: 'https://alabsgold.com.ng',
      },
      offers: AUTHENTIC_PRICING_TIERS.map((tier) => ({
        '@type': 'Offer',
        name: tier.name,
        description: tier.shortDesc,
        priceCurrency: 'NGN',
        price: tier.priceNGN,
      })),
    },
  });

  const [selectedPillarId, setSelectedPillarId] = useState<string>(THREE_SERVICE_PILLARS[0].id);
  const [currencyMode, setCurrencyMode] = useState<'NGN' | 'INTL'>('NGN');

  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-amber-400" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-amber-400" />;
      case 'CreditCard':
        return <CreditCard className="w-5 h-5 text-amber-400" />;
      default:
        return <Layers className="w-5 h-5 text-amber-400" />;
    }
  };

  const currentPillar = THREE_SERVICE_PILLARS.find((s) => s.id === selectedPillarId) || THREE_SERVICE_PILLARS[0];

  return (
    <div className="pt-28 pb-24 bg-[#09090b] text-[#f4f4f5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400 mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>PRODUCTION INFRASTRUCTURE & PRICING</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Services & Engineering Pillars
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            We build digital infrastructure for businesses whose next customer is on another continent, doesn't know them yet, and is deciding in the first 30 seconds whether to trust them with money.
          </p>
        </motion.div>

        {/* 3 Pillars Tabs */}
        <div className="mt-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {THREE_SERVICE_PILLARS.map((pillar, index) => {
              const isSelected = selectedPillarId === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setSelectedPillarId(pillar.id)}
                  className={`p-5 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#18181b] border-amber-500 text-white shadow-[0_0_20px_rgba(245,158,11,0.2)] ring-1 ring-amber-500/40'
                      : 'bg-[#111114] border-[#27272a] text-zinc-400 hover:text-white hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-[#09090b] border border-zinc-800">
                      {getPillarIcon(pillar.icon)}
                    </div>
                    <span className="text-[10px] font-mono tracking-wider uppercase text-amber-400 font-semibold px-2 py-0.5 rounded bg-zinc-800">
                      PILLAR 0{index + 1}
                    </span>
                  </div>
                  <h2 className="text-base font-bold text-white leading-tight">
                    {pillar.title}
                  </h2>
                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed font-normal">
                    {pillar.shortDesc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Detailed Pillar Deep-Dive View */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPillar.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="mt-6 p-8 sm:p-10 rounded-3xl bg-[#111114] border border-[#27272a] shadow-xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
                      {currentPillar.tag}
                    </span>
                    <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">
                      {currentPillar.title}
                    </h3>
                    <p className="mt-4 text-sm text-zinc-300 leading-relaxed font-normal">
                      {currentPillar.fullDesc}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-[#09090b] border border-[#27272a] font-mono text-xs text-amber-300 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 flex-shrink-0 text-amber-400" />
                    <span>BENCHMARK: {currentPillar.metrics}</span>
                  </div>

                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 font-semibold mb-3">
                      Key Technical Implementations:
                    </h4>
                    <div className="space-y-2.5">
                      {currentPillar.architectureHighlights.map((hl, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#09090b] border border-[#27272a]">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-zinc-500 block mb-3 font-semibold">
                      Primary Tech Stack
                    </span>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {currentPillar.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg text-xs font-mono bg-zinc-800 text-zinc-200 border border-zinc-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="p-4 rounded-xl bg-[#141418] border border-zinc-800 text-xs text-zinc-400 space-y-2">
                      <div className="text-zinc-200 font-semibold font-mono">Our Quality Invariants:</div>
                      <div>• Hand-coded TypeScript & Python (Zero page-builders)</div>
                      <div>• Custom Studio Admin Backoffice (/studio) for your team</div>
                      <div>• 100% intellectual property ownership in private repository</div>
                      <div>• 30-day post-launch technical warranty included</div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-zinc-800">
                    <button
                      onClick={() => onOpenIntake(currentPillar.title)}
                      className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-semibold text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] cursor-pointer flex items-center justify-center gap-2"
                    >
                      <span>Scope This Service</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* AUTHENTIC PRICING TIERS SECTION */}
        <div id="pricing" className="mt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400 mb-3">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>OFFICIAL STUDIO PRICING</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Authentic, Milestone-Based Budgets
              </h2>
              <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                Simple terms: 50% upfront commitment deposit, 50% on QA approval prior to DNS handover. No surprise invoices, ever.
              </p>
            </div>

            {/* Currency Switcher */}
            <div className="inline-flex p-1 rounded-xl bg-[#18181b] border border-[#27272a] self-start sm:self-auto font-mono text-xs">
              <button
                onClick={() => setCurrencyMode('NGN')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  currencyMode === 'NGN'
                    ? 'bg-amber-400 text-black font-bold shadow'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                NGN (₦)
              </button>
              <button
                onClick={() => setCurrencyMode('INTL')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  currencyMode === 'INTL'
                    ? 'bg-amber-400 text-black font-bold shadow'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                USD / GBP ($ / £)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {AUTHENTIC_PRICING_TIERS.map((tier) => (
              <motion.div
                key={tier.id}
                whileHover={{ y: -4 }}
                className={`p-6 sm:p-7 rounded-3xl border flex flex-col justify-between transition-all relative ${
                  tier.highlighted
                    ? 'bg-[#141418] border-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.2)] ring-1 ring-amber-500/40'
                    : 'bg-[#111114] border-[#27272a] hover:border-zinc-700'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-amber-400 text-black font-mono text-[10px] font-bold uppercase tracking-wider shadow">
                    Most Popular
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-800 text-amber-400 border border-zinc-700 font-semibold">
                      {tier.badge}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-400 flex items-center gap-1">
                      <Clock className="w-3 h-3 text-zinc-500" />
                      {tier.turnaround}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                  <div className="mt-4">
                    <div className="text-2xl sm:text-3xl font-extrabold font-mono text-amber-400">
                      {currencyMode === 'NGN' ? tier.priceNGN : tier.priceIntl}
                    </div>
                    <div className="text-xs font-mono text-zinc-500 mt-1">
                      {currencyMode === 'NGN' ? tier.priceIntl : tier.priceNGN}
                    </div>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 block mt-1">
                    {tier.billingPeriod}
                  </span>

                  <p className="mt-4 text-xs text-zinc-400 leading-relaxed font-normal">
                    {tier.shortDesc}
                  </p>

                  <div className="mt-6 pt-5 border-t border-zinc-800/80">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block mb-3 font-semibold">
                      Included Scope:
                    </span>
                    <ul className="space-y-2">
                      {tier.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                          <Check className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5 pt-4 border-t border-zinc-800/60">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-2 font-semibold">
                      Deliverables:
                    </span>
                    <div className="space-y-1 text-[11px] text-zinc-400 font-mono">
                      {tier.deliverables.map((deliv, idx) => (
                        <div key={idx}>› {deliv}</div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-zinc-800">
                  <button
                    onClick={() => onOpenIntake(tier.name)}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-semibold font-mono uppercase tracking-wider transition-all cursor-pointer ${
                      tier.highlighted
                        ? 'bg-amber-400 hover:bg-amber-300 text-black shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                        : 'bg-zinc-800 hover:bg-zinc-700 text-white'
                    }`}
                  >
                    Select & Scope Project
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* SPECIFIC NICHE PRICING BANDS FROM AUTHENTIC DOCUMENT */}
        <div className="mt-20">
          <div className="mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
              TARGET VERTICALS
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
              Specialized Industry Solution Bands
            </h3>
            <p className="text-sm text-zinc-400 mt-2">
              Calibrated specifically for the operational workflows and compliance requirements of these sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {NICHE_PRICING_BANDS.map((niche, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-3xl bg-[#111114] border border-[#27272a] hover:border-amber-500/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-amber-400 mb-3">
                    {idx === 0 ? <Wheat className="w-5 h-5" /> : idx === 1 ? <Building2 className="w-5 h-5" /> : <Globe2 className="w-5 h-5" />}
                    <span className="text-xs font-mono uppercase tracking-wider font-semibold">Band 0{idx + 1}</span>
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    {niche.niche}
                  </h4>
                  <div className="mt-3">
                    <div className="text-xl font-extrabold font-mono text-amber-400">
                      {currencyMode === 'NGN' ? niche.priceNGN : niche.priceIntl}
                    </div>
                    <div className="text-xs font-mono text-zinc-500">
                      {currencyMode === 'NGN' ? niche.priceIntl : niche.priceNGN}
                    </div>
                  </div>
                  <p className="mt-4 text-xs text-zinc-300 leading-relaxed font-normal">
                    {niche.focus}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-zinc-800">
                  <button
                    onClick={() => onOpenIntake(`${niche.niche} Specialization`)}
                    className="w-full py-2.5 px-3 rounded-xl bg-[#18181b] hover:bg-zinc-800 text-zinc-200 border border-[#27272a] hover:border-amber-500/40 text-xs font-mono font-semibold transition-colors cursor-pointer"
                  >
                    Inquire About This Band
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PAYMENT TERMS & SETTLEMENT RAILS */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl bg-[#111114] border border-[#27272a]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 font-bold">
                <Landmark className="w-4 h-4" />
                <span>PAYMENT TERMS & INTERNATIONAL SETTLEMENT</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                Straightforward Milestone Terms
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                Every project begins with a <strong>50% upfront commitment deposit</strong> upon contract execution, locking your engineering sprint and securing immediate architecture work. The remaining <strong>50% is due upon QA approval prior to DNS handover</strong> and domain launch.
              </p>
              <div className="pt-2 text-xs font-mono text-zinc-400 space-y-1">
                <div>• <strong className="text-zinc-200">Nigerian Clients:</strong> Direct bank transfer to studio corporate accounts.</div>
                <div>• <strong className="text-zinc-200">International Clients:</strong> Geegpay, Grey, Wise, or Payoneer (USD, GBP, EUR).</div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={() => onOpenIntake('Custom Project Ingestion')}
                className="w-full py-3.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs tracking-wider uppercase transition-all shadow-md text-center cursor-pointer"
              >
                Request Scoping Proposal
              </button>
              <a
                href={STUDIO_DATA.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-[#18181b] hover:bg-zinc-800 text-zinc-200 border border-[#27272a] hover:border-amber-500/40 text-xs font-semibold tracking-wider uppercase transition-all text-center"
              >
                Discuss via WhatsApp
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

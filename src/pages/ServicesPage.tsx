import React, { useState } from 'react';
import { useSEO } from '../hooks/useSEO';
import {
  THREE_SERVICE_PILLARS,
  AUTHENTIC_PRICING_TIERS,
  NICHE_PRICING_BANDS,
  STUDIO_DATA,
} from '../data/content';
import { InteractiveProjectTimeline } from '../components/InteractiveProjectTimeline';
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
    canonicalPath: '/services',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Digital Infrastructure & Web Engineering',
      provider: {
        '@type': 'Organization',
        name: 'ALABSGOLD',
        url: 'https://alabsgold.vercel.app',
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
        return <ShieldCheck className="w-5 h-5 text-amber-500" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-amber-500" />;
      case 'CreditCard':
        return <CreditCard className="w-5 h-5 text-amber-500" />;
      default:
        return <Layers className="w-5 h-5 text-amber-500" />;
    }
  };

  const currentPillar = THREE_SERVICE_PILLARS.find((s) => s.id === selectedPillarId) || THREE_SERVICE_PILLARS[0];

  return (
    <div className="pt-24 pb-24 bg-white/40 dark:bg-[#09090b]/40 backdrop-blur-md text-slate-900 dark:text-zinc-100 min-h-screen transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-600 dark:text-amber-400 mb-4 backdrop-blur-md">
            <Zap className="w-3.5 h-3.5" />
            <span>PRODUCTION INFRASTRUCTURE & PRICING</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Our Services & Engineering Pillars
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            We build digital infrastructure for businesses whose next customer is on another continent, doesn't know them yet, and is deciding in the first 30 seconds whether to trust them with money.
          </p>
        </div>

        {/* 3 Pillars Tabs: OS 26 Liquid Glass */}
        <div className="mt-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {THREE_SERVICE_PILLARS.map((pillar, index) => {
              const isSelected = selectedPillarId === pillar.id;
              return (
                <button
                  key={pillar.id}
                  onClick={() => setSelectedPillarId(pillar.id)}
                  className={`p-6 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between backdrop-blur-xl ${
                    isSelected
                      ? 'bg-white/80 dark:bg-white/10 border-amber-500 text-slate-900 dark:text-white shadow-[0_4px_25px_rgba(245,158,11,0.2)] ring-1 ring-amber-500/40'
                      : 'bg-white/50 dark:bg-zinc-900/40 border-white/40 dark:border-white/10 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white hover:border-amber-400/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-xl bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/20">
                      {getPillarIcon(pillar.icon)}
                    </div>
                    <span className="text-[10px] font-mono tracking-wider uppercase text-amber-600 dark:text-amber-400 font-semibold px-2 py-0.5 rounded-full bg-slate-200/50 dark:bg-white/5 border border-white/40 dark:border-white/10">
                      PILLAR 0{index + 1}
                    </span>
                  </div>
                  <h2 className="text-base font-bold text-slate-900 dark:text-white leading-tight">
                    {pillar.title}
                  </h2>
                  <p className="mt-2 text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                    {pillar.shortDesc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Active Pillar Detailed Spotlight Panel: Liquid Glass */}
          <div className="mt-6 p-8 sm:p-10 rounded-3xl bg-white/60 dark:bg-zinc-900/40 backdrop-blur-2xl border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.06)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-600 dark:text-amber-400">
                  <span>{currentPillar.tag}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                  {currentPillar.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {currentPillar.fullDesc}
                </p>

                <div className="pt-3">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-3 font-mono">
                    Architectural Deliverables
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentPillar.architectureHighlights.map((highlight, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl bg-white/70 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 flex items-start gap-2.5 text-xs text-slate-700 dark:text-zinc-300 backdrop-blur-md">
                        <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-2 font-mono">
                    Core Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2 text-xs font-mono">
                    {currentPillar.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-full bg-slate-200/50 dark:bg-white/5 border border-slate-300/80 dark:border-white/10 text-slate-700 dark:text-zinc-300 backdrop-blur-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Sidebar */}
              <div className="lg:col-span-4 p-6 rounded-2xl bg-white/80 dark:bg-black/30 backdrop-blur-xl border border-white/50 dark:border-white/10 space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-semibold">
                  Deliverable Standard
                </div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  Zero-Defect Milestone SLA
                </div>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                  Includes full discovery document, deterministic API contract, private GitHub repo handover, and 30-day post-launch technical warranty.
                </p>
                <div className="pt-2 border-t border-slate-200/60 dark:border-white/5">
                  <button
                    onClick={() => onOpenIntake(currentPillar.title)}
                    className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-semibold text-xs font-mono uppercase tracking-wider transition-all shadow-md cursor-pointer"
                  >
                    Scope {currentPillar.title}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Realistic Transparent Pricing Tiers */}
        <div className="mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-600 dark:text-amber-400 mb-2">
                <Clock className="w-3.5 h-3.5" />
                <span>MILESTONE-BASED INVESTMENT</span>
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Authentic Studio Pricing Bands
              </h2>
              <p className="mt-1 text-sm text-slate-600 dark:text-zinc-400">
                50% upfront commitment deposit, 50% only upon verified staging QA before DNS handover.
              </p>
            </div>

            {/* Currency Mode Switcher */}
            <div className="flex items-center gap-1 p-1 bg-slate-200/50 dark:bg-white/[0.05] backdrop-blur-xl rounded-full border border-white/40 dark:border-white/10 self-start sm:self-auto text-xs font-mono">
              <button
                onClick={() => setCurrencyMode('NGN')}
                className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                  currencyMode === 'NGN'
                    ? 'bg-white dark:bg-white/20 text-slate-900 dark:text-white font-bold shadow-sm'
                    : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                NGN (₦)
              </button>
              <button
                onClick={() => setCurrencyMode('INTL')}
                className={`px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                  currencyMode === 'INTL'
                    ? 'bg-white dark:bg-white/20 text-slate-900 dark:text-white font-bold shadow-sm'
                    : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                USD / GBP ($/£)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {AUTHENTIC_PRICING_TIERS.map((tier) => (
              <div
                key={tier.id}
                className={`p-6 rounded-3xl border flex flex-col justify-between backdrop-blur-xl transition-all ${
                  tier.highlighted
                    ? 'bg-white/80 dark:bg-white/10 border-amber-500 shadow-[0_8px_32px_rgba(245,158,11,0.2)] ring-1 ring-amber-500/40'
                    : 'bg-white/55 dark:bg-zinc-900/40 border-white/40 dark:border-white/10 shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 font-semibold">
                      {tier.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{tier.name}</h3>
                  <div className="mt-3">
                    <div className="text-xl font-extrabold font-mono text-amber-600 dark:text-amber-400">
                      {currencyMode === 'NGN' ? tier.priceNGN : tier.priceIntl}
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-400 block mt-1">{tier.billingPeriod}</span>
                  <p className="mt-3 text-xs text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">{tier.shortDesc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-white/5 space-y-3">
                  <div className="space-y-1.5 text-xs text-slate-600 dark:text-zinc-400">
                    {tier.features.slice(0, 3).map((f, i) => (
                      <div key={i} className="flex items-start gap-1.5">
                        <Check className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => onOpenIntake(tier.name)}
                    className={`w-full py-2.5 px-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                      tier.highlighted
                        ? 'bg-amber-400 hover:bg-amber-300 text-black shadow-md'
                        : 'bg-slate-200/70 hover:bg-slate-300/70 dark:bg-white/10 dark:hover:bg-white/20 text-slate-900 dark:text-white'
                    }`}
                  >
                    Select Plan
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

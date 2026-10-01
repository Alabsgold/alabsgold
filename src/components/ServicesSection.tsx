import React from 'react';
import { ShieldCheck, Cpu, Database, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { THREE_SERVICE_PILLARS } from '../data/content';

interface ServicesSectionProps {
  onSelectServiceForIntake: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForIntake,
}) => {
  const pillarIcons: Record<string, React.ReactNode> = {
    'trust-infrastructure': <ShieldCheck className="w-6 h-6 text-amber-500" />,
    'ai-automation': <Cpu className="w-6 h-6 text-amber-500" />,
    'secure-backend': <Database className="w-6 h-6 text-amber-500" />,
  };

  return (
    <section className="relative py-20 sm:py-28 bg-slate-50/40 dark:bg-[#0c0c0f]/40 backdrop-blur-md border-b border-white/20 dark:border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2">
              01 · Engineering Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Bespoke Systems Engineered For Cross-Border Credibility.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
              We do not build on templates or page builders. We architect custom digital infrastructure designed around your operational bottlenecks and international client due diligence.
            </p>
          </div>

          <Link
            to="/services"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/70 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 text-xs font-semibold text-slate-900 dark:text-white border border-slate-200/80 dark:border-white/15 backdrop-blur-lg transition-all shadow-sm self-start md:self-auto"
          >
            <span>View All Deliverables & Pricing</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 3 Core Service Pillars: OS 26 Liquid Glass Translucent Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {THREE_SERVICE_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="group relative p-8 rounded-2xl bg-white/55 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/40 dark:border-white/10 flex flex-col justify-between hover:border-amber-500/50 hover:shadow-[0_8px_30px_rgba(245,158,11,0.15)] transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.04)]"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 rounded-xl bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/20 shadow-inner">
                    {pillarIcons[pillar.id] || <ShieldCheck className="w-6 h-6 text-amber-500" />}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400 dark:text-zinc-500">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
                  {pillar.title}
                </h3>

                <p className="mt-3 text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {pillar.shortDesc}
                </p>

                <div className="mt-6 pt-6 border-t border-slate-200/60 dark:border-white/5">
                  <h4 className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-400 mb-3 font-mono">
                    Architecture Highlights
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-600 dark:text-zinc-400">
                    {pillar.architectureHighlights.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-amber-500 font-bold shrink-0">·</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectServiceForIntake(pillar.title)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors cursor-pointer"
                >
                  <span>Scope This Pillar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <Link
                  to="/services"
                  className="text-xs text-slate-400 dark:text-zinc-500 hover:text-slate-900 dark:hover:text-zinc-200 transition-colors"
                >
                  Pricing Bands →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Section Callout Footer */}
        <div className="mt-14 p-6 rounded-2xl bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl border border-white/40 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              Looking for our structured pricing tiers (Starter, Professional, Enterprise, Retainer)?
            </h4>
            <p className="text-xs text-slate-500 dark:text-zinc-400 mt-1">
              Transparent milestone-based investment with deliverables and turnaround timelines clearly defined.
            </p>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-amber-400 hover:bg-amber-300 transition-colors whitespace-nowrap shadow-sm"
          >
            <span>Open Dedicated Services Page</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

      </div>
    </section>
  );
};

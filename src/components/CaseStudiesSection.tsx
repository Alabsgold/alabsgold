import React, { useState } from 'react';
import { ExternalLink, ArrowRight, ShieldCheck, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FLAGSHIP_CASE_STUDIES } from '../data/content';

interface CaseStudiesSectionProps {
  onOpenIntake?: (context?: string) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenIntake }) => {
  const [selectedStudy, setSelectedStudy] = useState(0);
  const current = FLAGSHIP_CASE_STUDIES[selectedStudy] || FLAGSHIP_CASE_STUDIES[0];

  return (
    <section className="relative py-20 sm:py-28 bg-white/40 dark:bg-[#09090b]/40 backdrop-blur-md border-b border-white/20 dark:border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2">
              02 · Flagship Case Studies
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Real Systems Operating Under Production Scrutiny.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
              Every system we build is designed to withstand rigorous international commercial vetting. Here are three verified deployments demonstrating our engineering standard.
            </p>
          </div>

          {/* Liquid Glass Segmented Tab Controls */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-200/50 dark:bg-white/[0.05] backdrop-blur-xl rounded-full border border-white/40 dark:border-white/10 self-start md:self-auto">
            {FLAGSHIP_CASE_STUDIES.map((study, idx) => (
              <button
                key={study.id}
                onClick={() => setSelectedStudy(idx)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all cursor-pointer ${
                  selectedStudy === idx
                    ? 'bg-white dark:bg-white/20 text-slate-900 dark:text-white shadow-sm font-semibold border border-black/5 dark:border-white/20 backdrop-blur-md'
                    : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {study.client.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Case Study Detailed Spotlight Card: OS 26 Liquid Glass */}
        <div className="rounded-3xl border border-white/40 dark:border-white/10 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-2xl p-8 sm:p-10 lg:p-12 shadow-[0_8px_32px_0_rgba(0,0,0,0.06)] transition-all">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Context & Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-zinc-400">
                <span className="font-semibold text-slate-900 dark:text-white">{current.client}</span>
                <span aria-hidden="true">·</span>
                <span>{current.sector}</span>
                <span aria-hidden="true">·</span>
                <span>{current.region}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white leading-snug">
                {current.headline}
              </h3>

              <div className="space-y-4 text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-zinc-200 mb-1 font-mono">
                    The Business Challenge:
                  </h4>
                  <p>{current.challenge}</p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-zinc-200 mb-1 font-mono">
                    The Engineered Solution:
                  </h4>
                  <p>{current.solution}</p>
                </div>
              </div>

              <div className="pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-2 font-mono">
                  Stack & Architecture
                </h4>
                <div className="flex flex-wrap gap-2 text-xs font-mono">
                  {current.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-lg bg-white/70 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-zinc-300 backdrop-blur-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Verified Metrics & Actions */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full bg-white/80 dark:bg-black/30 backdrop-blur-xl p-6 sm:p-8 rounded-2xl border border-white/50 dark:border-white/10 shadow-sm">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-4 font-mono">
                  Verified Outcome Metrics
                </h4>

                <div className="space-y-4">
                  {current.impactMetrics.map((metric, i) => (
                    <div key={i} className="pb-4 border-b border-slate-200/60 dark:border-white/5 last:border-0">
                      <div className="text-2xl font-extrabold font-mono text-slate-900 dark:text-white">
                        {metric.value}
                      </div>
                      <div className="text-xs font-semibold text-slate-700 dark:text-zinc-300 mt-0.5">
                        {metric.label}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-zinc-500 mt-0.5">
                        {metric.sublabel}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-white/5 space-y-3">
                {current.liveUrl && (
                  <a
                    href={current.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white bg-slate-100/80 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 transition-all backdrop-blur-md"
                  >
                    <span>Visit Live Platform ({current.liveUrl.replace('https://', '')})</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                <button
                  onClick={() => onOpenIntake?.(`Case Study: ${current.client}`)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all cursor-pointer shadow-md"
                >
                  <span>Build A Similar Solution</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Section Next Step linking to dedicated /products page */}
        <div className="mt-12 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/70 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white border border-slate-200/80 dark:border-white/15 backdrop-blur-xl transition-all shadow-sm"
          >
            <span>Explore Full Works, Labs & Technical Catalog</span>
            <ArrowRight className="w-4 h-4 text-amber-500" />
          </Link>
        </div>

      </div>
    </section>
  );
};

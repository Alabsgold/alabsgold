import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, CheckCircle2, TrendingUp, ShieldCheck, Clock, MapPin, ArrowRight, X, Award, Sparkles } from 'lucide-react';
import { FLAGSHIP_CASE_STUDIES } from '../data/content';
import { CaseStudy } from '../types';

export const CaseStudiesSection: React.FC = () => {
  const [activeModalStudy, setActiveModalStudy] = useState<CaseStudy | null>(null);

  return (
    <section id="flagship-work" className="py-28 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#18181b] border border-[#27272a] text-xs font-mono text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
              <span>FLAGSHIP PROOF OF WORK</span>
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Three flagship systems engineered for trust, security, and scale.
            </h2>
            <p className="mt-2 text-base text-zinc-400">
              Real platforms in production and competition-winning security software — no mockups or fictitious case studies.
            </p>
          </div>
        </div>

        {/* Flagship Case Studies List */}
        <div className="mt-12 space-y-12">
          {FLAGSHIP_CASE_STUDIES.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{
                borderColor: 'rgba(245, 158, 11, 0.4)',
                boxShadow: '0 0 35px rgba(245, 158, 11, 0.12)',
              }}
              className="rounded-3xl bg-[#111114] border border-[#27272a] p-6 sm:p-8 lg:p-10 transition-all duration-300 relative overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Meta & Headline Info */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 text-xs font-mono text-zinc-400 mb-3">
                      <span className="px-2.5 py-0.5 rounded bg-amber-400/10 text-amber-400 border border-amber-400/20 font-bold">
                        {study.statusBadge || study.sector}
                      </span>
                      {study.awardBadge && (
                        <span className="px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold flex items-center gap-1">
                          <Award className="w-3.5 h-3.5" />
                          {study.awardBadge}
                        </span>
                      )}
                      <span className="flex items-center gap-1 text-zinc-500">
                        <MapPin className="w-3.5 h-3.5" />
                        {study.region}
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                          {study.headline}
                        </h3>
                        <div className="text-sm font-semibold text-zinc-400 mt-1">
                          Entity: <span className="text-white">{study.client}</span> · {study.sector}
                        </div>
                      </div>
                      {study.liveUrl && (
                        <a
                          href={study.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 text-amber-300 font-mono text-xs font-semibold transition-colors flex-shrink-0"
                        >
                          <span>Live Site</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Challenge & Solution */}
                  <div className="space-y-4 text-sm leading-relaxed">
                    <div className="p-4 rounded-xl bg-[#18181b]/80 border border-red-500/20">
                      <span className="text-xs font-mono uppercase tracking-wider text-red-400 font-bold block mb-1">
                        The Core Challenge & Trust Bottleneck:
                      </span>
                      <p className="text-zinc-300 font-normal">{study.challenge}</p>
                    </div>

                    <div className="p-4 rounded-xl bg-[#18181b]/80 border border-emerald-500/20">
                      <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold block mb-1">
                        Engineered Solution Architecture:
                      </span>
                      <p className="text-zinc-300 font-normal">{study.solution}</p>
                    </div>
                  </div>

                  {/* What Made This Special Callout */}
                  {study.whatMadeThisSpecial && (
                    <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20">
                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-amber-400 mb-1">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>WHAT MADE THIS SPECIAL:</span>
                      </div>
                      <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                        {study.whatMadeThisSpecial}
                      </p>
                    </div>
                  )}

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {study.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-[#18181b] border border-[#27272a] text-xs font-mono text-zinc-400"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div>
                    <button
                      onClick={() => setActiveModalStudy(study)}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors cursor-pointer group"
                    >
                      <span>Read Technical Dossier & Invariants</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>

                {/* Right Column: Impact Metrics & Blueprints */}
                <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:border-l lg:border-[#27272a] lg:pl-8">
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4 flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-amber-400" />
                      <span>PRODUCTION BENCHMARKS</span>
                    </div>

                    <div className="space-y-4">
                      {study.impactMetrics.map((metric, mIdx) => (
                        <div
                          key={mIdx}
                          className="p-4 rounded-xl bg-[#09090b] border border-[#27272a] hover:border-amber-500/40 transition-colors"
                        >
                          <div className="text-3xl font-extrabold text-white font-mono tracking-tight">
                            {metric.value}
                          </div>
                          <div className="text-sm font-semibold text-zinc-200 mt-1">
                            {metric.label}
                          </div>
                          <div className="text-xs text-zinc-500 mt-0.5 font-mono">
                            {metric.sublabel}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Architectural Blueprint Notes */}
                  <div className="p-4 rounded-xl bg-[#18181b]/50 border border-[#27272a] text-xs space-y-2">
                    <span className="font-mono text-[11px] text-amber-400 block uppercase font-semibold">
                      Architectural Invariants & Capabilities:
                    </span>
                    {study.architecturePoints.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-zinc-400">
                        <span className="text-amber-400">›</span>
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>

                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Deep-Dive Case Study Modal with AnimatePresence */}
      <AnimatePresence>
        {activeModalStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#111114] border border-amber-500/50 p-6 sm:p-8 text-zinc-200 shadow-[0_0_50px_rgba(245,158,11,0.2)] space-y-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <div>
                  <span className="text-xs font-mono uppercase text-amber-400 font-semibold tracking-wider">
                    {activeModalStudy.statusBadge || 'Technical Specification'}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                    {activeModalStudy.headline}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveModalStudy(null)}
                  className="p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-sm text-zinc-300 leading-relaxed">
                <div className="grid grid-cols-2 gap-3 text-xs font-mono p-3.5 rounded-xl bg-zinc-900 border border-zinc-800">
                  <div>Project / Client: <span className="text-white font-semibold">{activeModalStudy.client}</span></div>
                  <div>Sector: <span className="text-white font-semibold">{activeModalStudy.sector}</span></div>
                  <div>Lead Role: <span className="text-white font-semibold">{activeModalStudy.role || 'Lead Engineer'}</span></div>
                  <div>Status: <span className="text-amber-400 font-semibold">{activeModalStudy.timeline}</span></div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Detailed Technical Context</h4>
                  <p className="font-normal text-zinc-300">{activeModalStudy.challenge}</p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Architecture & Implementation Blueprint</h4>
                  <p className="font-normal text-zinc-300">{activeModalStudy.solution}</p>
                </div>

                {activeModalStudy.whatMadeThisSpecial && (
                  <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30">
                    <h4 className="text-xs font-mono font-bold text-amber-400 uppercase mb-1">
                      Engineering Distinction:
                    </h4>
                    <p className="text-xs text-zinc-200">{activeModalStudy.whatMadeThisSpecial}</p>
                  </div>
                )}

                <div>
                  <h4 className="text-sm font-bold text-white mb-2">Key Engineering Invariants</h4>
                  <ul className="list-disc pl-5 space-y-1.5">
                    {activeModalStudy.architecturePoints.map((pt, idx) => (
                      <li key={idx} className="text-zinc-300">{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                {activeModalStudy.liveUrl ? (
                  <a
                    href={activeModalStudy.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 hover:underline"
                  >
                    <span>Visit Live Production System</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : <span />}
                <button
                  onClick={() => setActiveModalStudy(null)}
                  className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs font-mono tracking-wider uppercase transition-colors cursor-pointer"
                >
                  Close Specification
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

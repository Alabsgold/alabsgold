import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROCESS_PHASES, WHAT_WE_DONT_DO } from '../data/content';
import { InteractiveProjectTimeline } from './InteractiveProjectTimeline';
import {
  Check,
  ShieldCheck,
  Zap,
  Code2,
  AlertTriangle,
  Layers,
  Sparkles,
} from 'lucide-react';

interface ProcessSectionProps {
  onOpenIntake?: (serviceOrPhase?: string) => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenIntake }) => {
  const [viewMode, setViewMode] = useState<'timeline' | 'grid'>('timeline');

  return (
    <section id="process" className="bg-[#09090b] relative text-[#f4f4f5]">
      {/* Primary Interactive Project Timeline Component */}
      <InteractiveProjectTimeline
        id="timeline-interactive"
        onOpenIntake={onOpenIntake}
        className="border-t-0"
      />

      {/* Additional Studio Methodology & Boundaries */}
      <div className="pb-28 bg-[#09090b] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Quick Matrix Grid Toggle Banner */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#111114] border border-[#27272a] mb-8">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-amber-400">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                  Methodology View Configuration
                </div>
                <div className="text-xs text-zinc-400">
                  Switch between interactive stage-by-stage walkthrough and 5-phase comparative summary grid.
                </div>
              </div>
            </div>

            <div className="inline-flex p-1 rounded-xl bg-[#18181b] border border-[#27272a] font-mono text-xs">
              <button
                onClick={() => setViewMode('timeline')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'timeline'
                    ? 'bg-amber-400 text-black font-bold shadow'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Interactive Timeline
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-amber-400 text-black font-bold shadow'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                5-Phase Grid Matrix
              </button>
            </div>
          </div>

          {/* Conditional 5-Phase Comparative Summary Grid */}
          {viewMode === 'grid' && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-14"
            >
              <div className="mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                  5 COMPRESSED PHASES · SUMMARY MATRIX
                </span>
                <h3 className="text-2xl font-extrabold text-white mt-1">
                  At-a-Glance Delivery Overview
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {PROCESS_PHASES.map((phase, index) => (
                  <motion.div
                    key={phase.step}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    whileHover={{
                      y: -4,
                      borderColor: 'rgba(245, 158, 11, 0.4)',
                      boxShadow: '0 0 25px rgba(245, 158, 11, 0.1)',
                    }}
                    className="rounded-2xl bg-[#111114] border border-[#27272a] p-5 flex flex-col justify-between transition-all group"
                  >
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
                        <span className="text-2xl font-extrabold font-mono text-zinc-600 group-hover:text-amber-400 transition-colors">
                          {phase.step}
                        </span>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-zinc-800 text-amber-400 border border-zinc-700">
                          {phase.timeline}
                        </span>
                      </div>

                      <h4 className="mt-4 text-base font-bold text-white leading-snug">
                        Phase {phase.step}: {phase.name}
                      </h4>
                      <p className="mt-2 text-xs text-zinc-400 leading-relaxed font-normal">
                        {phase.summary}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-zinc-800/80">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-2 font-semibold">
                        Deliverables:
                      </span>
                      <div className="space-y-1.5">
                        {phase.deliverables.map((deliv, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                            <Check className="w-3.5 h-3.5 text-amber-400 flex-shrink-0 mt-0.5" />
                            <span className="leading-snug">{deliv}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Proprietary Framework Callout Banner */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-gradient-to-r from-[#111114] via-[#16161a] to-[#111114] border border-amber-500/30 p-6 sm:p-8 relative overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 rounded-full blur-2xl pointer-events-none" />
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8 space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 font-bold">
                  <Code2 className="w-4 h-4" />
                  <span>ACCELERATED EXECUTION ARCHITECTURE</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  The <code className="text-amber-400">alabsgold-core</code> Framework Advantage
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                  Because we reuse our vetted base scaffolding for auth, role-based access control (RBAC), and transactional logging, projects move from concept to working prototype in days, not months. We don't spend your budget writing standard boilerplate.
                </p>
              </div>
              <div className="md:col-span-4 flex flex-col sm:flex-row md:flex-col gap-2.5 text-xs font-mono">
                <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-300 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Zero-Depreciation Scaffolding</span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-900/90 border border-zinc-800 text-zinc-300 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>10 – 20 Day Typical Turnaround</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* What We Don't Do Section from Section 6 */}
          <div className="mt-14">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span>EXPLICIT BOUNDARIES · WHAT WE NEVER DO</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {WHAT_WE_DONT_DO.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#111114] border border-[#27272a] hover:border-red-500/30 transition-colors"
                >
                  <div className="text-xs font-mono font-bold text-red-400 mb-2">
                    0{idx + 1} · RULE
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

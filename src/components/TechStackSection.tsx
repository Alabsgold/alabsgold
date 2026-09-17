import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TECH_STACK } from '../data/content';
import { Layers, CheckCircle2, Shield, Terminal, Cpu } from 'lucide-react';

export const TechStackSection: React.FC = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);

  return (
    <section id="stack" className="py-28 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#18181b] border border-[#27272a] text-xs font-mono text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span>PROVEN ENGINEERING STACK</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Battle-tested primitives for high-stress infrastructure.
          </h2>
          <p className="mt-2 text-base text-zinc-400">
            We avoid trendy hype and brittle dependencies. Our stack is curated for strict type safety, 
            low operating overhead, and high international resilience.
          </p>
        </motion.div>

        {/* Category Selector Tabs with Motion */}
        <div className="mt-10 flex flex-wrap gap-2">
          {TECH_STACK.map((cat, idx) => (
            <motion.button
              key={cat.category}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setSelectedCategoryIndex(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer border ${
                selectedCategoryIndex === idx
                  ? 'bg-[#18181b] border-amber-500 text-amber-400 font-semibold shadow-[0_0_20px_rgba(245,158,11,0.2)] ring-1 ring-amber-500/40'
                  : 'bg-[#111114] border-[#27272a] text-zinc-400 hover:text-white hover:border-zinc-700'
              }`}
            >
              {cat.category}
            </motion.button>
          ))}
        </div>

        {/* Active Category Display with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={TECH_STACK[selectedCategoryIndex].category}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-8 rounded-2xl bg-[#111114] border border-[#27272a] hover:border-amber-500/30 p-6 sm:p-8 shadow-xl transition-colors"
          >
            <div className="pb-4 border-b border-zinc-800">
              <h3 className="text-xl font-bold text-white">
                {TECH_STACK[selectedCategoryIndex].category}
              </h3>
              <p className="text-xs text-zinc-400 mt-1">
                {TECH_STACK[selectedCategoryIndex].description}
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              {TECH_STACK[selectedCategoryIndex].technologies.map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{
                    scale: 1.02,
                    borderColor: 'rgba(245, 158, 11, 0.4)',
                    boxShadow: '0 0 20px rgba(245, 158, 11, 0.1)',
                  }}
                  className="p-4 rounded-xl bg-[#09090b] border border-[#27272a] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono font-bold text-white text-base">
                        {tech.name}
                      </span>
                      {tech.badge && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-amber-400 border border-zinc-700">
                          {tech.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                      {tech.role}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-zinc-800/80 flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
                    <CheckCircle2 className="w-3 h-3 text-amber-400" />
                    <span>Production Ready</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Global Standards Compliance strip */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 rounded-xl bg-[#18181b]/50 border border-[#27272a] p-4 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-400"
        >
          <span className="flex items-center gap-2 text-zinc-200">
            <Shield className="w-4 h-4 text-amber-400" />
            <span>International Compliance Standard Alignments:</span>
          </span>
          <div className="flex flex-wrap items-center gap-3 text-zinc-300">
            <span className="px-2.5 py-1 rounded bg-zinc-800 border border-zinc-700 hover:border-amber-500/40 transition-colors">PCI-DSS Level 1 Ready</span>
            <span className="px-2.5 py-1 rounded bg-zinc-800 border border-zinc-700 hover:border-amber-500/40 transition-colors">GDPR & NDPR Compliant</span>
            <span className="px-2.5 py-1 rounded bg-zinc-800 border border-zinc-700 hover:border-amber-500/40 transition-colors">ISO 27001 Patterns</span>
            <span className="px-2.5 py-1 rounded bg-zinc-800 border border-zinc-700 hover:border-amber-500/40 transition-colors">SOC2 Type II Aligned</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

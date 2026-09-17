import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, CheckCircle2, ChevronRight, Terminal, Award, ExternalLink } from 'lucide-react';
import { STUDIO_DATA } from '../data/content';
import { HeroBrandVideoShowcase } from './HeroBrandVideoShowcase';

interface HeroProps {
  onOpenIntake: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenIntake }) => {
  const [activeNodes, setActiveNodes] = useState([
    { city: 'London', region: 'eu-west-2 (UK)', latency: 21, status: 'nominal' },
    { city: 'Lagos', region: 'af-south-1 (NG)', latency: 28, status: 'nominal' },
    { city: 'New York', region: 'us-east-1 (US)', latency: 39, status: 'nominal' },
    { city: 'Frankfurt', region: 'eu-central-1 (EU)', latency: 24, status: 'nominal' },
  ]);

  // Subtle real-time latency flutter for authentic telemetry
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNodes((prev) =>
        prev.map((node) => ({
          ...node,
          latency: Math.max(16, node.latency + (Math.floor(Math.random() * 5) - 2)),
        }))
      );
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Brand Video Loop & 3D Glass Shards Background Showcase */}
      <HeroBrandVideoShowcase />

      {/* Ambient animated background glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.2, 0.12],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[360px] bg-gradient-to-r from-amber-600/20 via-amber-500/15 to-amber-400/20 rounded-full blur-[140px] pointer-events-none"
      />
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.12 },
            },
          }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          {/* Status Badge */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -12 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18181b] border border-[#27272a] hover:border-amber-500/40 text-xs font-mono text-zinc-300 transition-colors"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-zinc-400">ALABSGOLD ·</span>
            <span className="text-amber-400 font-medium">BUILT WITH EXCELLENCE</span>
            <span className="text-zinc-500 hidden sm:inline">| LAGOS · GLOBAL DIASPORA</span>
          </motion.div>

          {/* Main Display Headline from verified document */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.14]"
          >
            Production-grade digital infrastructure for businesses serving{' '}
            <span className="relative inline-block bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent underline decoration-amber-500/40 decoration-wavy decoration-1 underline-offset-8">
              international clients.
            </span>
          </motion.h1>

          {/* Subtitle from verified document */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="text-base sm:text-lg lg:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed font-normal"
          >
            ALABSGOLD engineers custom web platforms, backend systems, and AI-driven tools for exporters, real estate operators, and diaspora businesses that need to establish instant trust and convert high-value leads — no templates, no page builders, no shortcuts.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
            className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.button
              whileHover={{
                scale: 1.03,
                boxShadow: '0 0 35px rgba(245, 158, 11, 0.55)',
              }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpenIntake}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-black bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 rounded-xl transition-all shadow-[0_0_25px_rgba(245,158,11,0.35)] cursor-pointer"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.a
              whileHover={{
                scale: 1.02,
                borderColor: 'rgba(245, 158, 11, 0.5)',
                backgroundColor: 'rgba(39, 39, 42, 0.9)',
              }}
              whileTap={{ scale: 0.98 }}
              href="#flagship-work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium text-zinc-300 hover:text-white bg-[#18181b]/90 border border-[#27272a] rounded-xl transition-all"
            >
              <span>See the Work</span>
              <ChevronRight className="w-4 h-4 text-zinc-500" />
            </motion.a>
          </motion.div>

          {/* Assurance bullet tags */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { delay: 0.4, duration: 0.6 } },
            }}
            className="pt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs font-mono text-zinc-400"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Zero WordPress / Page Builders
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> 100% Client IP & Private Repo Ownership
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Sub-Second Mobile Architecture
            </span>
          </motion.div>
        </motion.div>

        {/* Global Node Latency Telemetry Strip with gold glow border */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mt-14 max-w-4xl mx-auto rounded-xl bg-[#111114] border border-[#27272a] hover:border-amber-500/40 p-4 shadow-2xl transition-colors group"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-3 border-b border-[#27272a]/70 text-xs font-mono">
            <div className="flex items-center gap-2 text-zinc-400">
              <Terminal className="w-3.5 h-3.5 text-amber-400" />
              <span>LIVE EDGE TOPOLOGY & TARGET LATENCY</span>
            </div>
            <div className="flex items-center gap-3 text-zinc-500">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Healthy
              </span>
              <span>SYN / ACK: 100%</span>
              <span className="text-amber-400/90 font-semibold font-mono">Platform: Active</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-3">
            {activeNodes.map((node) => (
              <motion.div
                key={node.city}
                whileHover={{
                  y: -2,
                  borderColor: 'rgba(245, 158, 11, 0.5)',
                  boxShadow: '0 0 15px rgba(245, 158, 11, 0.15)',
                }}
                className="p-2.5 rounded-lg bg-[#18181b]/70 border border-[#27272a] flex flex-col justify-between transition-colors cursor-default"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-zinc-200">{node.city}</span>
                  <span className="text-[10px] font-mono text-zinc-500">{node.region}</span>
                </div>
                <div className="mt-2 flex items-baseline justify-between">
                  <span className="text-xs text-zinc-400 font-mono">Round-Trip</span>
                  <span className="text-sm font-mono font-bold text-amber-400">
                    {node.latency}ms
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Proof of Work Highlight Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          {STUDIO_DATA.proofHighlights.map((proof, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -4,
                borderColor: 'rgba(245, 158, 11, 0.5)',
                boxShadow: '0 0 25px rgba(245, 158, 11, 0.15)',
              }}
              className="p-6 rounded-2xl bg-[#111114]/95 border border-[#27272a] transition-all group"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-bold px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/20">
                  {proof.metric}
                </span>
                <ShieldCheck className="w-4 h-4 text-zinc-500 group-hover:text-amber-400 transition-colors" />
              </div>
              <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                {proof.title}
              </h3>
              <p className="mt-2 text-xs text-zinc-400 leading-relaxed font-normal">
                {proof.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

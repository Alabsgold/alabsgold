import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { HeroBrandVideoShowcase } from './HeroBrandVideoShowcase';

interface HeroProps {
  onOpenIntake: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenIntake }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-grid-pattern min-h-[85vh] flex items-center justify-center">
      {/* Brand Video Loop & 3D Glass Shards Background Showcase */}
      <HeroBrandVideoShowcase />

      {/* Ambient animated warm gold backdrop lighting */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.15, 0.22, 0.15],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[340px] bg-gradient-to-r from-amber-600/20 via-amber-500/15 to-amber-400/20 rounded-full blur-[140px] pointer-events-none"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="max-w-3xl mx-auto space-y-6"
        >
          {/* Minimal Sleek Status Pill */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
            }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#18181b]/90 border border-white/10 backdrop-blur-md text-[11px] font-mono text-zinc-300 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-zinc-400">ALABSGOLD ·</span>
            <span className="text-amber-400 font-semibold tracking-wider uppercase">Bespoke Engineering</span>
            <span className="text-zinc-500 hidden sm:inline">| Lagos · Worldwide</span>
          </motion.div>

          {/* Direct, Bold Display Headline */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.12]"
          >
            Custom Web Platforms &{' '}
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              Digital Infrastructure
            </span>
          </motion.h1>

          {/* Simple, Direct 1-Sentence Description */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
            }}
            className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed font-normal"
          >
            We engineer high-speed web platforms, scalable backends, and custom software for businesses serving international clients. Zero templates. Zero shortcuts. 100% bespoke code.
          </motion.p>

          {/* Streamlined Call to Actions */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 15 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3.5"
          >
            <motion.button
              whileHover={{
                scale: 1.02,
                boxShadow: '0 0 30px rgba(245, 158, 11, 0.45)',
              }}
              whileTap={{ scale: 0.98 }}
              onClick={onOpenIntake}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-black bg-gradient-to-r from-amber-400 to-amber-500 rounded-xl transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] cursor-pointer active:scale-95"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.a
              whileHover={{
                scale: 1.02,
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
              }}
              whileTap={{ scale: 0.98 }}
              href="#flagship-work"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-zinc-300 hover:text-white bg-white/5 border border-white/10 hover:border-white/20 rounded-xl transition-all backdrop-blur-md"
            >
              <span>Explore Flagship Work</span>
              <ChevronRight className="w-4 h-4 text-zinc-500" />
            </motion.a>
          </motion.div>

          {/* Minimalist 3-Point Liquid Glass Stat Strip */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { delay: 0.3, duration: 0.6 } },
            }}
            className="pt-6 sm:pt-8"
          >
            <div className="inline-grid grid-cols-3 gap-4 sm:gap-8 px-5 py-3 sm:px-8 sm:py-3.5 rounded-2xl bg-[#111114]/70 border border-white/10 backdrop-blur-xl shadow-xl">
              <div className="text-center">
                <div className="text-base sm:text-xl font-mono font-bold text-amber-400 tracking-tight">
                  &lt; 1.0s
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono text-zinc-400 tracking-wide uppercase">
                  Sub-Second Speed
                </div>
              </div>

              <div className="text-center border-x border-white/10 px-2 sm:px-6">
                <div className="text-base sm:text-xl font-mono font-bold text-white tracking-tight">
                  100%
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono text-zinc-400 tracking-wide uppercase">
                  Client IP Ownership
                </div>
              </div>

              <div className="text-center">
                <div className="text-base sm:text-xl font-mono font-bold text-emerald-400 tracking-tight">
                  0%
                </div>
                <div className="text-[10px] sm:text-[11px] font-mono text-zinc-400 tracking-wide uppercase">
                  Zero Page Builders
                </div>
              </div>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

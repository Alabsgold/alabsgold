import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlabsgoldLogo } from './AlabsgoldLogo';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [activeTelemetry, setActiveTelemetry] = useState('INITIALIZING_CORE_MESH');

  useEffect(() => {
    // Prevent scrolling while preloader is active
    document.body.style.overflow = 'hidden';

    // Telemetry sequence stages
    const telemetryStages = [
      { at: 15, text: 'SYNCHRONIZING_MULTI_REGION_NODES' },
      { at: 45, text: 'ESTABLISHING_ZERO_TRUST_MTLS' },
      { at: 75, text: 'VALIDATING_HIGH_CONCURRENCY_RAILS' },
      { at: 95, text: 'ALL_SYSTEMS_OPERATIONAL' },
    ];

    // Smooth counter progress
    const startTime = Date.now();
    const duration = 2400; // 2.4s total intro experience

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(currentProgress);

      const stage = telemetryStages.slice().reverse().find((s) => currentProgress >= s.at);
      if (stage) {
        setActiveTelemetry(stage.text);
      }

      if (currentProgress >= 100) {
        clearInterval(interval);
        // Begin exit transition
        setIsExiting(true);
        setTimeout(() => {
          document.body.style.overflow = '';
          onComplete();
        }, 850); // Matches scale-out exit animation duration
      }
    }, 28);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = '';
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting ? (
        <motion.div
          key="preloader-active"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.1,
            filter: 'blur(12px)',
            transition: {
              duration: 0.85,
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          className="fixed inset-0 z-[9999] bg-[#050507] flex flex-col items-center justify-center p-6 select-none cursor-default"
        >
          {/* Subtle Ambient Radial Gold Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.35, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-amber-500/20 via-amber-400/10 to-transparent blur-[120px] pointer-events-none"
          />

          {/* Blueprint Grid Overlay */}
          <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

          {/* Central Branded Content */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-md w-full">
            
            {/* Geometric Insignia Emblem - The Alabsgold A */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: -10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-6"
            >
              <AlabsgoldLogo variant="mark" size="xl" withStatus={true} className="shadow-[0_0_40px_rgba(245,158,11,0.3)] rounded-2xl" />
            </motion.div>

            {/* ALABSGOLD Wordmark with Gold Shimmer */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[0.22em] uppercase font-sans animate-gold-shimmer">
                ALABSGOLD
              </h1>

              {/* Sub-label */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-3 flex items-center gap-2"
              >
                <span className="h-px w-6 bg-gradient-to-r from-transparent to-zinc-600" />
                <span className="text-[11px] font-mono tracking-[0.25em] text-zinc-400 uppercase">
                  Digital Infrastructure Studio
                </span>
                <span className="h-px w-6 bg-gradient-to-l from-transparent to-zinc-600" />
              </motion.div>
            </motion.div>

            {/* Telemetry Progress & Gauge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-10 w-full max-w-xs flex flex-col items-center"
            >
              {/* Progress Bar with Gold Highlight */}
              <div className="w-full h-1 rounded-full bg-zinc-900 border border-zinc-800/80 overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-300 shadow-[0_0_10px_rgba(245,158,11,0.6)]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'linear' }}
                />
              </div>

              {/* Numerical Counter & Status Ticker */}
              <div className="mt-3 w-full flex items-center justify-between text-[10px] font-mono text-zinc-500">
                <span className="text-zinc-400 font-semibold tracking-wider">
                  {activeTelemetry}
                </span>
                <span className="text-amber-400 font-bold font-mono tracking-widest">
                  {progress.toString().padStart(2, '0')}%
                </span>
              </div>
            </motion.div>

          </div>

          {/* Bottom Security / Sovereign Invariant Stamp */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="absolute bottom-8 text-[10px] font-mono text-zinc-600 tracking-widest uppercase flex items-center gap-3"
          >
            <span>LONDON</span>
            <span>·</span>
            <span>LAGOS</span>
            <span>·</span>
            <span>NEW YORK</span>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

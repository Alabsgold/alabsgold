import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroProps {
  onOpenIntake: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenIntake }) => {
  return (
    <section className="relative py-20 sm:py-28 lg:py-36 bg-white/40 dark:bg-[#09090b]/40 backdrop-blur-md border-b border-white/20 dark:border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          
          {/* OS 26 Liquid Glass Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/60 dark:bg-white/10 backdrop-blur-xl border border-white/40 dark:border-white/15 text-xs font-semibold text-slate-800 dark:text-zinc-200 shadow-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            <span className="text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider text-[11px]">ALABSGOLD</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-zinc-600">|</span>
            <span>Boutique Web Engineering · Lagos, Nigeria</span>
          </div>

          {/* Exactly ONE H1 per page: crisp, authoritative, text-balanced */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.12] text-balance">
            We engineer web platforms for businesses that need to win{' '}
            <span className="bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 bg-clip-text text-transparent">
              international trust.
            </span>
          </h1>

          {/* Business-first copy with transparent depth */}
          <p className="mt-6 text-lg sm:text-xl text-slate-600 dark:text-zinc-300 leading-relaxed max-w-2xl font-normal">
            When overseas buyers or corporate procurement teams evaluate your business online, they make a decision in seconds. ALABSGOLD builds fast, audit-ready web applications, export compliance systems, and secure backend architectures that turn diligence into signed contracts.
          </p>

          {/* Liquid Glass Interactive Action Cluster */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
            <button
              onClick={onOpenIntake}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-400 rounded-xl transition-all shadow-[0_4px_25px_rgba(245,158,11,0.35)] hover:shadow-[0_6px_30px_rgba(245,158,11,0.5)] active:scale-95 cursor-pointer"
            >
              <span>Request a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-6 py-3.5 text-sm font-medium text-slate-700 dark:text-zinc-200 hover:text-slate-900 dark:hover:text-white bg-white/50 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 border border-slate-300/80 dark:border-white/10 rounded-xl backdrop-blur-xl transition-all shadow-sm"
            >
              Explore Our Services
            </Link>

            <a
              href="https://wa.me/2347039960964?text=Hi%20Emmanuel,%20I%20am%20interested%20in%20a%20web%20engineering%20consultation%20with%20ALABSGOLD."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-3.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              WhatsApp (+234 703 996 0964)
            </a>
          </div>

          {/* OS 26 Liquid Glass Stat Strip: Translucent, showing the logo watermark through */}
          <div className="mt-12 p-5 rounded-2xl bg-white/40 dark:bg-white/[0.04] backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.06)] grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <strong className="block text-slate-900 dark:text-white font-bold text-sm">100% Client IP Ownership</strong>
                <span className="text-slate-500 dark:text-zinc-400">Zero templates · Full private code repository</span>
              </div>
            </div>

            <div className="flex items-start gap-3 sm:border-x sm:border-slate-200/60 dark:sm:border-white/10 sm:px-4">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <strong className="block text-slate-900 dark:text-white font-bold text-sm">Sub-Second Target Latency</strong>
                <span className="text-slate-500 dark:text-zinc-400">Optimized for overseas buyers on mobile</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <strong className="block text-slate-900 dark:text-white font-bold text-sm">50/50 Milestone Contract</strong>
                <span className="text-slate-500 dark:text-zinc-400">50% upfront · 50% only on approved QA</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

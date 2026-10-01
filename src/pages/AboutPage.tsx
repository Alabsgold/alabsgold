import React from 'react';
import { useSEO } from '../hooks/useSEO';
import { ABOUT_DATA, STUDIO_DATA, WHAT_WE_DONT_DO } from '../data/content';
import {
  Building,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ShieldCheck,
  Globe,
  Compass,
  Cpu,
  Lock,
} from 'lucide-react';

interface AboutPageProps {
  onOpenIntake: (context?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenIntake }) => {
  useSEO({
    title: 'About ALABSGOLD — Digital Infrastructure & Trust Engineering',
    description:
      'The mission, philosophy, and architectural invariants behind ALABSGOLD. We engineer trust-critical digital platforms for African and diaspora enterprises.',
    canonicalPath: '/about',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About ALABSGOLD Studio',
      description: ABOUT_DATA.mission,
      url: 'https://alabsgold.vercel.app/about',
    },
  });

  return (
    <div className="pt-24 pb-24 bg-white/40 dark:bg-[#09090b]/40 backdrop-blur-md text-slate-900 dark:text-zinc-100 min-h-screen transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-600 dark:text-amber-400 mb-4 backdrop-blur-md">
            <Building className="w-3.5 h-3.5" />
            <span>STUDIO IDENTITY & PHILOSOPHY</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            About ALABSGOLD
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A boutique web engineering and digital infrastructure studio based in Lagos, Nigeria. We engineer trust-critical platforms for businesses operating across borders.
          </p>
        </div>

        {/* The Core Problem & Founding Mandate: OS 26 Liquid Glass Card */}
        <div className="mt-14 p-8 sm:p-12 rounded-3xl bg-white/60 dark:bg-zinc-900/40 backdrop-blur-2xl border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.06)]">
          <div className="max-w-3xl space-y-5">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 font-semibold">
              THE STRUCTURAL CREDIBILITY GAP
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
              Why ALABSGOLD exists
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              {ABOUT_DATA.mission}
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              {ABOUT_DATA.foundingStory}
            </p>
            <p className="text-sm sm:text-base text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
              A serious buyer vetting a $50,000 shipment or a high-net-worth diaspora investor won't trust a business using an unbranded WhatsApp link, a generic template with missing meta tags, or a slow shared-hosting site. We bridge this gap by writing production code that signals technical competence from the first 50 milliseconds.
            </p>
          </div>
        </div>

        {/* The 4 Studio Pillars */}
        <div className="mt-20">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 font-semibold">
              OUR INVARIANTS
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-2">
              The Four Studio Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT_DATA.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/40 dark:border-white/10 flex flex-col justify-between shadow-sm hover:border-amber-500/50 transition-colors"
              >
                <div>
                  <span className="text-xs font-mono text-amber-500 font-bold block mb-2">
                    0{idx + 1}.
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{pillar.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Explicit Boundaries - What We Don't Do */}
        <div className="mt-20">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-600 dark:text-amber-400 font-semibold">
              QUALITY BOUNDARIES
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white mt-2">
              What We Don't Do
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {WHAT_WE_DONT_DO.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/40 dark:border-white/10 flex items-start gap-4 shadow-sm"
              >
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-500 shrink-0">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section CTA */}
        <div className="mt-20 text-center">
          <button
            onClick={() => onOpenIntake('About Page Inquiry')}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 transition-all shadow-md cursor-pointer"
          >
            <span>Discuss A Project With ALABSGOLD</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};

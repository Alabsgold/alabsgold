import React from 'react';
import { motion } from 'framer-motion';
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
  return (
    <div className="pt-28 pb-24 bg-[#09090b] text-[#f4f4f5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400 mb-4">
            <Building className="w-3.5 h-3.5" />
            <span>STUDIO IDENTITY & PHILOSOPHY</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            About ALABSGOLD
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            A boutique web engineering and digital infrastructure studio based in Lagos, Nigeria. We engineer trust-critical platforms for businesses operating across borders.
          </p>
        </motion.div>

        {/* The Core Problem & Founding Mandate */}
        <div className="mt-14 p-8 sm:p-12 rounded-3xl bg-[#111114] border border-[#27272a] shadow-xl">
          <div className="max-w-3xl space-y-5">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
              THE STRUCTURAL CREDIBILITY GAP
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Why ALABSGOLD exists
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
              {ABOUT_DATA.mission}
            </p>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
              {ABOUT_DATA.foundingStory}
            </p>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
              A serious buyer vetting a $50,000 shipment or a high-net-worth diaspora investor won't trust a business using an unbranded WhatsApp link, a generic template with missing meta tags, or a slow shared-hosting site. We bridge this gap by writing production code that signals technical competence from the first 50 milliseconds.
            </p>
          </div>
        </div>

        {/* The 4 Studio Pillars */}
        <div className="mt-20">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
              OUR INVARIANTS
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-2">
              The Four Studio Pillars
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ABOUT_DATA.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#111114] border border-[#27272a] flex flex-col justify-between hover:border-amber-500/40 transition-colors"
              >
                <div>
                  <span className="text-xs font-mono text-amber-400 font-bold block mb-2">
                    0{idx + 1}.
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                  <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Explicit Boundaries - What We Don't Do */}
        <div className="mt-20">
          <div className="max-w-2xl mb-8">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 font-semibold mb-2">
              <AlertTriangle className="w-4 h-4" />
              <span>EXPLICIT PROFESSIONAL BOUNDARIES</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white">
              What We Don't Do
            </h2>
            <p className="text-sm text-zinc-400 mt-2">
              Clear boundaries guarantee that our engineering standards remain uncompromising.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {WHAT_WE_DONT_DO.map((rule, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#111114] border border-[#27272a] hover:border-red-500/30 transition-colors"
              >
                <div className="text-xs font-mono font-bold text-red-400 mb-2">
                  RULE 0{idx + 1}
                </div>
                <h4 className="text-sm font-bold text-white mb-2">
                  {rule.title}
                </h4>
                <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                  {rule.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Target Markets Served */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl bg-[#111114] border border-[#27272a]">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
              MARKETS & CORRIDORS
            </span>
            <h3 className="text-2xl font-bold text-white mt-1">
              Geographic Focus & Client Corridors
            </h3>
            <p className="mt-2 text-sm text-zinc-400">
              ALABSGOLD serves clients where cross-border technical credibility is directly tied to transaction closing:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-5 rounded-2xl bg-[#09090b] border border-zinc-800">
              <div className="text-xs font-mono text-amber-400 font-bold mb-1">CORRIDOR 01</div>
              <h4 className="text-base font-bold text-white">Nigerian Exporters</h4>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Agricultural producers, solid mineral suppliers, and finished goods exporters selling into the UK, Europe, US, and Middle East.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#09090b] border border-zinc-800">
              <div className="text-xs font-mono text-amber-400 font-bold mb-1">CORRIDOR 02</div>
              <h4 className="text-base font-bold text-white">Diaspora-Owned Businesses</h4>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Founders based in London, Manchester, Atlanta, Houston, and Toronto who need engineering teams with direct cultural and market fluency.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#09090b] border border-zinc-800">
              <div className="text-xs font-mono text-amber-400 font-bold mb-1">CORRIDOR 03</div>
              <h4 className="text-base font-bold text-white">High-Trust Domestic Enterprises</h4>
              <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                Luxury real estate brokerages, educational academies, and professional service firms in Lagos and Abuja serving institutional clientele.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center py-12 px-6 rounded-3xl bg-[#0e0e12] border border-amber-500/30">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Ready to build with ALABSGOLD?
          </h3>
          <p className="mt-2 text-sm text-zinc-400 max-w-xl mx-auto">
            Get in touch to review your technical requirements with our engineering leads.
          </p>
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => onOpenIntake('Studio Discovery Consultation')}
              className="px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs tracking-wider uppercase transition-all shadow-md cursor-pointer"
            >
              Start a Project
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

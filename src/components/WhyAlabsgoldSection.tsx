import React from 'react';
import { ShieldCheck, KeyRound, Clock, Scale, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

interface WhyAlabsgoldSectionProps {
  onOpenIntake?: (context?: string) => void;
}

export const WhyAlabsgoldSection: React.FC<WhyAlabsgoldSectionProps> = ({ onOpenIntake }) => {
  const trustPillars = [
    {
      icon: <KeyRound className="w-5 h-5 text-amber-500" />,
      title: '100% Intellectual Property Ownership',
      description:
        'You own every line of source code, database migration, and design asset upon final handover. No proprietary CMS vendor lock-in, no hostage fees, and no recurring website builder licenses.',
    },
    {
      icon: <Clock className="w-5 h-5 text-amber-500" />,
      title: 'Sub-Second Global Mobile Speed',
      description:
        'International buyers and enterprise procurement teams leave sites that take longer than 3 seconds to load. We engineer zero-boilerplate architectures with target LCP under 2.0s on real mobile networks.',
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-amber-500" />,
      title: 'Audited Financial & Webhook Security',
      description:
        'We enforce bank-grade invariants: HMAC signature validation on payment webhooks to prevent spoofing, distributed idempotency keys to stop double billing, and float-free Decimal currency math.',
    },
    {
      icon: <Scale className="w-5 h-5 text-amber-500" />,
      title: 'Predictable Milestone Billing',
      description:
        'Every project operates on a clear contract: 50% initial commitment deposit, with the remaining 50% due only after you test and approve the completed platform in staging before DNS launch.',
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 bg-white/40 dark:bg-[#09090b]/40 backdrop-blur-md border-b border-white/20 dark:border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2">
              04 · Trust Foundations
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Built For Organizations That Cannot Afford Amateur Mistakes.
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
              Whether you are closing overseas buyers or processing mission-critical payments, credibility is an engineering problem. Here is why enterprise procurement teams and business owners trust our studio.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/founder"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/70 dark:bg-white/10 hover:bg-white dark:hover:bg-white/20 text-xs font-semibold text-slate-900 dark:text-white border border-slate-200/80 dark:border-white/15 backdrop-blur-lg transition-all shadow-sm"
            >
              <span>Meet Founder (Alabi Emmanuel)</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-500" />
            </Link>
          </div>
        </div>

        {/* 4 Trust Pillars Grid: OS 26 Liquid Glass Translucent Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {trustPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white/55 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/40 dark:border-white/10 flex gap-5 items-start shadow-[0_8px_32px_0_rgba(0,0,0,0.04)]"
            >
              <div className="p-3 rounded-xl bg-amber-500/10 dark:bg-amber-400/10 border border-amber-500/20 shrink-0">
                {pillar.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verified Client Testimonial / Proof with Liquid Glass Backdrop */}
        <div className="rounded-3xl border border-white/40 dark:border-white/10 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-2xl p-8 sm:p-10 shadow-sm">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 text-amber-500 mb-4">
              <Quote className="w-5 h-5" />
              <span className="text-xs font-semibold uppercase tracking-wider font-mono">
                Verified Production Impact
              </span>
            </div>
            <blockquote className="text-base sm:text-xl font-medium text-slate-800 dark:text-zinc-200 leading-relaxed italic">
              "Before ALABSGOLD built our platform, international buyers had to wait for manual email quotes and had no way to verify our export compliance in real time. The custom quotation wizard and self-hosted VPS platform shortened our sales cycle instantly."
            </blockquote>
            <div className="mt-6 pt-6 border-t border-slate-200/60 dark:border-white/5 flex items-center justify-between flex-wrap gap-4">
              <div>
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  Kadie Fresh Export Operations
                </div>
                <div className="text-xs text-slate-500 dark:text-zinc-400 font-mono">
                  kadiefreshh.com · Prepared Agro-Produce Exporter · Lagos, Nigeria
                </div>
              </div>
              <div className="flex items-center gap-4 text-xs font-semibold">
                <Link to="/about" className="text-slate-600 dark:text-zinc-300 hover:text-amber-500 transition-colors">
                  Our Engineering Manifesto →
                </Link>
                <a
                  href="https://kadiefreshh.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-1"
                >
                  <span>Visit kadiefreshh.com</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProcessSectionProps {
  onOpenIntake?: (phase?: string) => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenIntake }) => {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Scope Lock',
      timeline: 'Days 1 – 2',
      description:
        'We map your operational workflows, define system invariants, and establish a fixed-price specification. Scope is locked in writing with a 50% milestone commitment—protecting you from surprise costs.',
      deliverables: ['Functional PRD & Invariants', 'Fixed Timeline & Milestone Guarantee', 'Zero Budget Drift Contract'],
    },
    {
      number: '02',
      title: 'Architecture & Specifications',
      timeline: 'Days 3 – 4',
      description:
        'We design database schemas, API contracts (API_CONTRACT.md), and wireframes. We resolve edge cases on paper before touching production code, ensuring swift and unblocked execution.',
      deliverables: ['Database Schema & Invariants', 'API Contract Specification', 'Interface Wireframe Review'],
    },
    {
      number: '03',
      title: 'Sprint Build & Security Review',
      timeline: 'Days 5 – 8',
      description:
        'We build your bespoke system without bloated page builders. Includes custom quotation wizards, payment webhook HMAC audits, idempotency guards, and your private backoffice CMS.',
      deliverables: ['100% Bespoke Codebase', 'HMAC Webhook Verification', 'Private Admin Backoffice (/studio)'],
    },
    {
      number: '04',
      title: 'Production QA & Handover',
      timeline: 'Days 9 – 10',
      description:
        'We tune Core Web Vitals for sub-second mobile delivery, deploy to lean production servers, and conduct client QA. Full source code and IP are transferred upon final sign-off.',
      deliverables: ['Core Web Vitals Optimization', 'VPS / Cloud Server Setup', '100% IP & Private Git Handover'],
    },
  ];

  return (
    <section className="relative py-20 sm:py-28 bg-slate-50/40 dark:bg-[#0c0c0f]/40 backdrop-blur-md border-b border-white/20 dark:border-white/5 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2">
            03 · How We Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            A Disciplined Delivery Process With Zero Surprises.
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
            We operate on fixed milestones, transparent timelines, and deterministic deliverables. You know exactly what is being built, when it will ship, and what it costs.
          </p>
        </div>

        {/* 4 Steps Grid: OS 26 Liquid Glass Translucent Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="p-6 rounded-2xl bg-white/55 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/40 dark:border-white/10 flex flex-col justify-between shadow-[0_8px_32px_0_rgba(0,0,0,0.04)] hover:border-amber-500/50 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-200/60 dark:border-white/5">
                  <span className="text-2xl font-black font-mono text-amber-500">
                    {step.number}
                  </span>
                  <span className="text-xs font-mono font-medium text-slate-600 dark:text-zinc-400 px-2.5 py-0.5 rounded-full bg-slate-200/50 dark:bg-white/5 border border-white/40 dark:border-white/10 backdrop-blur-md">
                    {step.timeline}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h3>

                <p className="mt-2.5 text-xs text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {step.description}
                </p>

                <div className="mt-5 pt-4 border-t border-slate-200/60 dark:border-white/5">
                  <h4 className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-2 font-mono">
                    Key Outputs:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-zinc-400">
                    {step.deliverables.map((d, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-white/5">
                <button
                  onClick={() => onOpenIntake?.(`Process Step ${step.number}: ${step.title}`)}
                  className="w-full text-center text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-zinc-300 hover:text-amber-500 dark:hover:text-amber-400 transition-colors py-1 cursor-pointer"
                >
                  Start at Step {step.number} →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Section Next Step */}
        <div className="mt-12 p-6 rounded-2xl bg-white/60 dark:bg-white/[0.04] backdrop-blur-xl border border-white/40 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">
              Ready to lock your scope and reserve a delivery sprint?
            </h4>
            <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
              We take on a limited number of client engagements each month to maintain zero-defect standards.
            </p>
          </div>
          <button
            onClick={() => onOpenIntake?.('Sprint Reservation')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-amber-400 hover:bg-amber-300 transition-colors cursor-pointer shadow-sm whitespace-nowrap"
          >
            <span>Reserve Engineering Sprint</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};

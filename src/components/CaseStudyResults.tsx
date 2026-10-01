import React, { useState } from 'react';
import { Activity, Clock, Gauge, TrendingUp, DollarSign, ArrowRight, Zap } from 'lucide-react';
import { STUDIO_DATA } from '../data/content';

const LATENCY_DATA = [
  { metric: 'Kadie Fresh Export', before: 4800, after: 620, unit: 'ms', improvement: '-87%', context: 'Multi-redirect vs. ALABSGOLD Lean VPS + Nginx' },
  { metric: 'NiRA-XT DNS ML Pipeline', before: 380, after: 18, unit: 'ms', improvement: '-95%', context: 'Synchronous lookup vs. Asynchronous ML packet scoring' },
  { metric: 'Treasury Webhook Verify', before: 2400, after: 110, unit: 'ms', improvement: '-95%', context: 'Unindexed DB vs. Contract-first DRF & Postgres' },
  { metric: 'Mobile First Paint (FCP)', before: 3400, after: 420, unit: 'ms', improvement: '-88%', context: 'Bloated page builders vs. Bespoke TypeScript' },
];

const LIGHTHOUSE_DATA = [
  { subject: 'Performance', legacy: 34, alabsgold: 98 },
  { subject: 'Accessibility', legacy: 61, alabsgold: 100 },
  { subject: 'Best Practices', legacy: 54, alabsgold: 100 },
  { subject: 'SEO & Meta', legacy: 58, alabsgold: 100 },
  { subject: 'Mobile UX', legacy: 45, alabsgold: 99 },
];

const COST_DATA = [
  { category: 'Content CMS', legacy: 99, alabsgold: 0, note: 'SaaS CMS tier vs. Hand-rolled Studio Backoffice (/studio)' },
  { category: 'Hosting & Compute', legacy: 85, alabsgold: 12, note: 'Vercel Pro + DB add-ons vs. Lean self-managed VPS' },
  { category: 'Asset / Image CDN', legacy: 45, alabsgold: 0, note: 'Cloudinary SaaS vs. Optimized local Nginx caching' },
  { category: 'Plugin Subscriptions', legacy: 65, alabsgold: 0, note: 'Plugin licenses vs. Zero-dependency native code' },
];

interface CaseStudyResultsProps {
  onOpenIntake?: (context?: string) => void;
  className?: string;
}

export const CaseStudyResults: React.FC<CaseStudyResultsProps> = ({
  onOpenIntake,
  className = '',
}) => {
  const [activeTab, setActiveTab] = useState<'latency' | 'lighthouse' | 'cost'>('latency');

  return (
    <section id="case-study-results" className={`py-16 bg-white dark:bg-[#0c0c0f] border border-slate-200 dark:border-zinc-800 rounded-2xl p-6 sm:p-10 ${className}`}>
      
      {/* Component Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-slate-200 dark:border-zinc-800">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2">
            Verified Production Benchmarks
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Engineering That Moves Measurable Metrics
          </h3>
          <p className="mt-2 text-sm text-slate-600 dark:text-zinc-400 max-w-2xl font-normal">
            Aesthetics without speed, uptime, and conversion do not close enterprise clients. Here is verified empirical data from our production deployments.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-zinc-800 rounded-lg">
          <button
            onClick={() => setActiveTab('latency')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
              activeTab === 'latency'
                ? 'bg-white dark:bg-zinc-900 text-slate-900 dark:text-white font-semibold shadow-sm'
                : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Network Latency
          </button>
          <button
            onClick={() => setActiveTab('lighthouse')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
              activeTab === 'lighthouse'
                ? 'bg-white dark:bg-zinc-900 text-slate-900 dark:text-white font-semibold shadow-sm'
                : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Core Web Vitals
          </button>
          <button
            onClick={() => setActiveTab('cost')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors cursor-pointer ${
              activeTab === 'cost'
                ? 'bg-white dark:bg-zinc-900 text-slate-900 dark:text-white font-semibold shadow-sm'
                : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Hosting Overhead
          </button>
        </div>
      </div>

      {/* Tab Panels */}
      <div className="mt-8">
        {activeTab === 'latency' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-zinc-400 font-mono">
              <span>Metric / Deployment</span>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <span className="w-2.5 h-2.5 rounded bg-slate-300 dark:bg-zinc-600"></span> Previous
                </span>
                <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400 font-semibold">
                  <span className="w-2.5 h-2.5 rounded bg-amber-500"></span> ALABSGOLD Lean Stack
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {LATENCY_DATA.map((row) => (
                <div key={row.metric} className="p-4 rounded-xl bg-slate-50 dark:bg-[#121216] border border-slate-200 dark:border-zinc-800">
                  <div className="flex items-center justify-between text-xs font-semibold mb-2">
                    <span className="text-slate-900 dark:text-white">{row.metric}</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-mono">{row.improvement}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 text-xs font-mono">
                      <span className="w-16 text-slate-500 dark:text-zinc-400">{row.before}ms</span>
                      <div className="flex-1 bg-slate-200 dark:bg-zinc-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-slate-400 dark:bg-zinc-600 h-full rounded-full" style={{ width: '100%' }} />
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-xs font-mono font-bold text-amber-600 dark:text-amber-400">
                      <span className="w-16">{row.after}ms</span>
                      <div className="flex-1 bg-slate-200 dark:bg-zinc-800 h-2 rounded-full overflow-hidden">
                        <div className="bg-amber-500 h-full rounded-full" style={{ width: `${Math.max(6, (row.after / row.before) * 100)}%` }} />
                      </div>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-zinc-400 mt-2">{row.context}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'lighthouse' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {LIGHTHOUSE_DATA.map((item) => (
              <div key={item.subject} className="p-5 rounded-xl bg-slate-50 dark:bg-[#121216] border border-slate-200 dark:border-zinc-800 text-center">
                <div className="text-3xl font-extrabold font-mono text-emerald-600 dark:text-emerald-400">
                  {item.alabsgold}
                </div>
                <div className="text-xs font-bold text-slate-900 dark:text-white mt-1">
                  {item.subject}
                </div>
                <div className="text-[11px] font-mono text-slate-400 dark:text-zinc-500 mt-0.5">
                  Previous: {item.legacy}/100
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'cost' && (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {COST_DATA.map((item) => (
                <div key={item.category} className="p-4 rounded-xl bg-slate-50 dark:bg-[#121216] border border-slate-200 dark:border-zinc-800">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{item.category}</span>
                    <div className="text-xs font-mono">
                      <span className="line-through text-red-500 mr-2">${item.legacy}/mo</span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">${item.alabsgold}/mo</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 mt-2">{item.note}</p>
                </div>
              ))}
            </div>
            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 text-xs text-amber-900 dark:text-amber-200 flex items-center justify-between">
              <span>Estimated Annual SaaS Savings: ~$3,380 USD/year</span>
              <span className="font-bold">Zero Vendor Lock-In</span>
            </div>
          </div>
        )}
      </div>

      {/* Footer CTA */}
      <div className="mt-8 pt-6 border-t border-slate-200 dark:border-zinc-800 flex items-center justify-between flex-wrap gap-4">
        <span className="text-xs text-slate-500 dark:text-zinc-400 font-mono">
          Direct founder consultation: {STUDIO_DATA.email}
        </span>
        <button
          onClick={() => onOpenIntake?.('Performance Architecture Scoping')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider text-black bg-amber-400 hover:bg-amber-300 transition-colors cursor-pointer"
        >
          <span>Scope Your Architecture</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </section>
  );
};

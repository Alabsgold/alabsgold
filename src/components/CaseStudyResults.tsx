import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  AreaChart,
  Area,
  Line,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
} from 'recharts';
import {
  Zap,
  TrendingUp,
  ShieldCheck,
  DollarSign,
  Gauge,
  Activity,
  ArrowRight,
  ExternalLink,
  Award,
  CheckCircle2,
  Sparkles,
  Server,
  Cpu,
  Clock,
} from 'lucide-react';
import { STUDIO_DATA } from '../data/content';

// 1. Latency & Response Times Data (ms) - Lower is better
const LATENCY_DATA = [
  {
    metric: 'Kadie Fresh Export',
    before: 4800,
    after: 620,
    unit: 'ms',
    improvement: '-87%',
    context: 'Ad-hoc multi-redirect vs. ALABSGOLD Lean VPS + Nginx + Next.js',
  },
  {
    metric: 'NiRA-XT DNS ML Pipeline',
    before: 380,
    after: 18,
    unit: 'ms',
    improvement: '-95%',
    context: 'Standard synchronous lookup vs. Asynchronous ML packet scoring',
  },
  {
    metric: 'Treasury Webhook Verify',
    before: 2400,
    after: 110,
    unit: 'ms',
    improvement: '-95%',
    context: 'Unindexed DB + blocking sync vs. Contract-first DRF & Postgres',
  },
  {
    metric: 'Mobile First Paint (FCP)',
    before: 3400,
    after: 420,
    unit: 'ms',
    improvement: '-88%',
    context: 'Bloated page builders vs. Zero-boilerplate custom TypeScript',
  },
  {
    metric: 'Database Query Time',
    before: 850,
    after: 42,
    unit: 'ms',
    improvement: '-95%',
    context: 'Ad-hoc ORM queries vs. Indexed relational schemas & Prisma tuning',
  },
];

// 2. Google Core Web Vitals & Lighthouse Scores (0-100) - Higher is better
const LIGHTHOUSE_DATA = [
  { subject: 'Performance', legacy: 34, alabsgold: 98, fullMark: 100 },
  { subject: 'Accessibility', legacy: 61, alabsgold: 100, fullMark: 100 },
  { subject: 'Best Practices', legacy: 54, alabsgold: 100, fullMark: 100 },
  { subject: 'SEO & Meta', legacy: 58, alabsgold: 100, fullMark: 100 },
  { subject: 'Mobile UX', legacy: 45, alabsgold: 99, fullMark: 100 },
];

// 3. Lead Conversion & Quote Inquiries MoM
const CONVERSION_DATA = [
  { month: 'Pre-Launch', inquiries: 3, conversionRate: 4, label: 'Ad-hoc WhatsApp' },
  { month: 'Month 1', inquiries: 14, conversionRate: 12, label: '/quote wizard launch' },
  { month: 'Month 2', inquiries: 29, conversionRate: 19, label: 'Export compliance layer' },
  { month: 'Month 3', inquiries: 48, conversionRate: 24, label: 'Sub-second mobile speed' },
  { month: 'Month 4', inquiries: 64, conversionRate: 27, label: 'Global buyer trust proof' },
  { month: 'Month 5', inquiries: 82, conversionRate: 29, label: 'Organic diaspora referrals' },
];

// 4. Infrastructure & Maintenance Overhead Cost ($ / month) - Lower is better
const COST_DATA = [
  {
    category: 'Content CMS',
    legacy: 99,
    alabsgold: 0,
    note: 'Sanity/Contentful tier vs. Hand-rolled Studio Backoffice (/studio)',
  },
  {
    category: 'Hosting & Compute',
    legacy: 85,
    alabsgold: 12,
    note: 'Vercel Pro + DB add-ons vs. Lean self-managed Lightsail/Hetzner VPS',
  },
  {
    category: 'Asset / Image CDN',
    legacy: 45,
    alabsgold: 0,
    note: 'Cloudinary SaaS vs. Optimized local Nginx caching + WebP builds',
  },
  {
    category: 'Plugin Subscriptions',
    legacy: 65,
    alabsgold: 0,
    note: 'Form, security & SEO plugins vs. Zero-dependency native code',
  },
];

interface CaseStudyResultsProps {
  onOpenIntake?: (context?: string) => void;
  className?: string;
}

export const CaseStudyResults: React.FC<CaseStudyResultsProps> = ({
  onOpenIntake,
  className = '',
}) => {
  const [activeTab, setActiveTab] = useState<'latency' | 'lighthouse' | 'conversion' | 'cost'>(
    'latency'
  );

  // Custom Dark Tooltip for Bar & Area charts
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-xl bg-[#18181b] border border-[#3f3f46] p-3 text-xs shadow-2xl font-mono">
          <div className="font-bold text-white mb-1.5">{label}</div>
          {payload.map((entry: any, index: number) => (
            <div key={`item-${index}`} className="flex items-center justify-between gap-4 py-0.5">
              <span className="flex items-center gap-1.5" style={{ color: entry.color || entry.fill }}>
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: entry.color || entry.fill }}
                />
                <span className="text-zinc-300">{entry.name}:</span>
              </span>
              <span className="font-bold text-white">
                {entry.value}
                {entry.unit || ''}
              </span>
            </div>
          ))}
          {payload[0]?.payload?.improvement && (
            <div className="mt-2 pt-1.5 border-t border-zinc-800 text-emerald-400 font-bold flex items-center justify-between">
              <span>Improvement:</span>
              <span>{payload[0].payload.improvement}</span>
            </div>
          )}
          {payload[0]?.payload?.note && (
            <div className="mt-1.5 text-[11px] text-zinc-400 font-sans leading-tight">
              {payload[0].payload.note}
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <section id="case-study-results" className={`py-24 bg-[#09090b] relative text-zinc-100 ${className}`}>
      {/* Background Decorative Atmosphere */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Component Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[#27272a]">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400 mb-3">
              <Activity className="w-3.5 h-3.5" />
              <span>MEASURABLE OUTCOMES · PRODUCTION BENCHMARKS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Engineering That Moves Key Business Metrics
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-400 leading-relaxed font-normal">
              High aesthetics mean nothing without speed, uptime, and conversion. Here is the verified empirical data from ALABSGOLD production deployments.
            </p>
          </div>

          {/* Quick Stat Pill */}
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#111114] border border-[#27272a] self-start lg:self-auto font-mono text-xs">
            <div className="p-2 rounded-xl bg-amber-400/10 text-amber-400 border border-amber-400/20">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <div className="text-white font-bold">Sub-1s Target Latency</div>
              <div className="text-zinc-400 text-[11px]">Enforced across all network conditions</div>
            </div>
          </div>
        </div>

        {/* Metric Selector Tabs */}
        <div className="mt-8 flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#111114] border border-[#27272a] max-w-fit">
          <button
            onClick={() => setActiveTab('latency')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'latency'
                ? 'bg-amber-400 text-black font-bold shadow-md shadow-amber-400/20'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Network Latency (ms)</span>
          </button>

          <button
            onClick={() => setActiveTab('lighthouse')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'lighthouse'
                ? 'bg-amber-400 text-black font-bold shadow-md shadow-amber-400/20'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
            }`}
          >
            <Gauge className="w-3.5 h-3.5" />
            <span>Core Web Vitals</span>
          </button>

          <button
            onClick={() => setActiveTab('conversion')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'conversion'
                ? 'bg-amber-400 text-black font-bold shadow-md shadow-amber-400/20'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5" />
            <span>RFP & Lead Growth</span>
          </button>

          <button
            onClick={() => setActiveTab('cost')}
            className={`px-4 py-2 rounded-xl text-xs font-mono transition-all flex items-center gap-2 cursor-pointer ${
              activeTab === 'cost'
                ? 'bg-amber-400 text-black font-bold shadow-md shadow-amber-400/20'
                : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
            }`}
          >
            <DollarSign className="w-3.5 h-3.5" />
            <span>Overhead Reduction</span>
          </button>
        </div>

        {/* Visual Chart Container */}
        <div className="mt-8 rounded-3xl bg-[#111114] border border-[#27272a] p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {/* TAB 1: LATENCY & RESPONSE TIME */}
            {activeTab === 'latency' && (
              <motion.div
                key="latency"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                      EXECUTION TIME & NETWORK TTFB
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                      Drastic Latency Compression (ms)
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      Comparing standard industry benchmarks vs. ALABSGOLD zero-boilerplate production stack.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-mono">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded bg-zinc-600 inline-block" />
                      <span className="text-zinc-400">Previous / Industry Standard</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded bg-amber-400 inline-block" />
                      <span className="text-amber-400 font-bold">ALABSGOLD Solution</span>
                    </div>
                  </div>
                </div>

                {/* Recharts Bar Chart */}
                <div className="h-[340px] w-full pt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={LATENCY_DATA}
                      margin={{ top: 20, right: 20, left: -10, bottom: 20 }}
                      barGap={8}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                      <XAxis
                        dataKey="metric"
                        stroke="#71717a"
                        fontSize={11}
                        tickLine={false}
                        axisLine={{ stroke: '#27272a' }}
                      />
                      <YAxis
                        stroke="#71717a"
                        fontSize={11}
                        tickLine={false}
                        axisLine={{ stroke: '#27272a' }}
                        tickFormatter={(val) => `${val}ms`}
                      />
                      <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255, 255, 255, 0.03)' }} />
                      <Bar
                        dataKey="before"
                        name="Industry Standard"
                        fill="#52525b"
                        radius={[6, 6, 0, 0]}
                        maxBarSize={45}
                      />
                      <Bar
                        dataKey="after"
                        name="ALABSGOLD Solution"
                        fill="#fbbf24"
                        radius={[6, 6, 0, 0]}
                        maxBarSize={45}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                {/* Granular Insights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-4 border-t border-zinc-800">
                  <div className="p-3.5 rounded-xl bg-[#09090b] border border-zinc-800">
                    <div className="text-xs font-mono text-emerald-400 font-bold">
                      -87% Latency · Kadie Fresh
                    </div>
                    <div className="text-xs text-zinc-300 mt-1">
                      Cut full mobile load time from 4.8s down to 620ms via custom Nginx caching and VPS optimization.
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#09090b] border border-zinc-800">
                    <div className="text-xs font-mono text-emerald-400 font-bold">
                      18ms DNS Packet Scoring
                    </div>
                    <div className="text-xs text-zinc-300 mt-1">
                      Asynchronous ML classification intercepting phishing domains with zero resolution stalls.
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#09090b] border border-zinc-800">
                    <div className="text-xs font-mono text-emerald-400 font-bold">
                      110ms Webhook Idempotency
                    </div>
                    <div className="text-xs text-zinc-300 mt-1">
                      Raw payload audit logging & immediate HTTP 200 dispatch preventing double payment billing.
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: GOOGLE LIGHTHOUSE & CORE WEB VITALS */}
            {activeTab === 'lighthouse' && (
              <motion.div
                key="lighthouse"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                      GOOGLE LIGHTHOUSE ACCREDITATION
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                      Perfection Across All 5 Audit Categories
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      Verified mobile scores. Zero template bloat enables perfect 95+ scores on real devices.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-mono">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded bg-zinc-600 inline-block" />
                      <span className="text-zinc-400">Typical Agency Build (Avg 51)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded bg-amber-400 inline-block" />
                      <span className="text-amber-400 font-bold">ALABSGOLD (Avg 99.4)</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
                  {/* Radar Visualization */}
                  <div className="lg:col-span-6 h-[320px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart outerRadius="75%" data={LIGHTHOUSE_DATA}>
                        <PolarGrid stroke="#27272a" />
                        <PolarAngleAxis dataKey="subject" stroke="#a1a1aa" fontSize={11} />
                        <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#3f3f46" fontSize={10} />
                        <Radar
                          name="Typical Agency Build"
                          dataKey="legacy"
                          stroke="#71717a"
                          fill="#71717a"
                          fillOpacity={0.25}
                        />
                        <Radar
                          name="ALABSGOLD Architecture"
                          dataKey="alabsgold"
                          stroke="#fbbf24"
                          fill="#fbbf24"
                          fillOpacity={0.45}
                        />
                        <Legend
                          wrapperStyle={{ fontSize: '11px', fontFamily: 'monospace', paddingTop: '10px' }}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>

                  {/* Scoreboard List */}
                  <div className="lg:col-span-6 space-y-3">
                    {LIGHTHOUSE_DATA.map((item) => (
                      <div
                        key={item.subject}
                        className="p-3 rounded-2xl bg-[#09090b] border border-zinc-800 flex items-center justify-between"
                      >
                        <div>
                          <div className="text-xs font-mono font-bold text-white">{item.subject}</div>
                          <div className="text-[11px] text-zinc-500 font-mono">
                            Previous: {item.legacy}/100
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-32 bg-zinc-800 h-2 rounded-full overflow-hidden hidden sm:block">
                            <div
                              className="bg-amber-400 h-full rounded-full transition-all duration-1000"
                              style={{ width: `${item.alabsgold}%` }}
                            />
                          </div>
                          <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-xs font-mono font-bold">
                            {item.alabsgold} / 100
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 3: CONVERSION & LEAD GROWTH */}
            {activeTab === 'conversion' && (
              <motion.div
                key="conversion"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                      BUSINESS RESULTS · QUALIFIED RFPs
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                      International Inquiries & Quote Volume Growth
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      Live tracking after launching custom /quote engine and trust-first compliance architecture.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 font-mono text-xs">
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold">
                      +2,600% Inquiries MoM
                    </span>
                  </div>
                </div>

                <div className="h-[340px] w-full pt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={CONVERSION_DATA}
                      margin={{ top: 20, right: 20, left: -10, bottom: 20 }}
                    >
                      <defs>
                        <linearGradient id="colorInquiries" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#fbbf24" stopOpacity={0.4} />
                          <stop offset="95%" stopColor="#fbbf24" stopOpacity={0.0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                      <XAxis
                        dataKey="month"
                        stroke="#71717a"
                        fontSize={11}
                        tickLine={false}
                        axisLine={{ stroke: '#27272a' }}
                      />
                      <YAxis
                        stroke="#71717a"
                        fontSize={11}
                        tickLine={false}
                        axisLine={{ stroke: '#27272a' }}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Area
                        type="monotone"
                        dataKey="inquiries"
                        name="Monthly RFPs Received"
                        stroke="#fbbf24"
                        strokeWidth={2.5}
                        fillOpacity={1}
                        fill="url(#colorInquiries)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-zinc-800 text-xs font-mono">
                  <div className="p-3.5 rounded-xl bg-[#09090b] border border-zinc-800">
                    <div className="text-zinc-400 text-[11px]">Quote Reference Engine</div>
                    <div className="text-white font-bold text-sm mt-0.5">KF-Q-XXXXXX Tracking</div>
                    <div className="text-zinc-500 text-[10px] mt-1">Automatic buyer spec logging</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#09090b] border border-zinc-800">
                    <div className="text-zinc-400 text-[11px]">Direct WhatsApp Routing</div>
                    <div className="text-white font-bold text-sm mt-0.5">&lt;30s Lead Handoff</div>
                    <div className="text-zinc-500 text-[10px] mt-1">Bypasses stagnant email threads</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#09090b] border border-zinc-800">
                    <div className="text-zinc-400 text-[11px]">Conversion Rate Lift</div>
                    <div className="text-emerald-400 font-bold text-sm mt-0.5">4% → 29% Deal Win Rate</div>
                    <div className="text-zinc-500 text-[10px] mt-1">High-trust international audits</div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 4: COST OF OWNERSHIP & TECH DEBT */}
            {activeTab === 'cost' && (
              <motion.div
                key="cost"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                      OPERATIONAL EXCELLENCE · ZERO SAAS TAX
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                      Monthly Infrastructure Overhead ($ / mo)
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      Eliminating recurring third-party CMS and plugin subscriptions via lean self-managed VPS hosting.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-mono">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded bg-red-400/80 inline-block" />
                      <span className="text-zinc-400">Typical Agency SaaS Bloat ($294/mo)</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded bg-emerald-400 inline-block" />
                      <span className="text-emerald-400 font-bold">ALABSGOLD Architecture ($12/mo)</span>
                    </div>
                  </div>
                </div>

                <div className="h-[340px] w-full pt-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={COST_DATA}
                      margin={{ top: 20, right: 20, left: -10, bottom: 20 }}
                      barGap={8}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                      <XAxis
                        dataKey="category"
                        stroke="#71717a"
                        fontSize={11}
                        tickLine={false}
                        axisLine={{ stroke: '#27272a' }}
                      />
                      <YAxis
                        stroke="#71717a"
                        fontSize={11}
                        tickLine={false}
                        axisLine={{ stroke: '#27272a' }}
                        tickFormatter={(val) => `$${val}`}
                      />
                      <Tooltip content={<CustomTooltip />} />
                      <Bar
                        dataKey="legacy"
                        name="Bloated Agency Setup"
                        fill="#f87171"
                        radius={[6, 6, 0, 0]}
                        maxBarSize={45}
                      />
                      <Bar
                        dataKey="alabsgold"
                        name="ALABSGOLD Lean Stack"
                        fill="#34d399"
                        radius={[6, 6, 0, 0]}
                        maxBarSize={45}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="p-4 rounded-2xl bg-[#09090b] border border-amber-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="text-xs font-mono font-bold text-amber-400">
                      Annual Savings: ~$3,380 USD Every Year
                    </div>
                    <div className="text-xs text-zinc-300">
                      You own 100% of your source code and data. No proprietary site builder vendor lock-in.
                    </div>
                  </div>
                  <div className="text-xs font-mono px-3 py-1.5 rounded-xl bg-zinc-800 text-zinc-200 border border-zinc-700 whitespace-nowrap">
                    100% Data Sovereignty
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom Action Footer */}
          <div className="mt-8 pt-6 border-t border-[#27272a] flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-zinc-400 font-mono text-center sm:text-left">
              Direct scoping dispatch to founder: <span className="text-amber-400">{STUDIO_DATA.email}</span>
            </div>

            <button
              onClick={() => onOpenIntake?.('Performance Infrastructure Scoping')}
              className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs font-mono uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(245,158,11,0.25)] flex items-center gap-2 cursor-pointer"
            >
              <span>Scope Your High-Performance Build</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

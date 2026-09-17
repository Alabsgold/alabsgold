import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Terminal, CreditCard, Check, ArrowRight, Server, Cpu, Layers } from 'lucide-react';
import { THREE_SERVICE_PILLARS } from '../data/content';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectServiceForIntake: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForIntake }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(THREE_SERVICE_PILLARS[0].id);

  const activeService = THREE_SERVICE_PILLARS.find((s) => s.id === activeServiceId) || THREE_SERVICE_PILLARS[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5" />;
      case 'CreditCard':
        return <CreditCard className="w-5 h-5" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-28 bg-[#09090b] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#18181b] border border-[#27272a] text-xs font-mono text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            <span>THREE CORE SERVICE PILLARS</span>
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            High-performance digital infrastructure for international trust.
          </h2>
          <p className="mt-3 text-base text-zinc-400 leading-relaxed">
            We don't build superficial marketing templates or unvetted WordPress stacks. We engineer verified trust layers, deterministic AI tools, and secure payment backends built to hold up under scrutiny.
          </p>
        </motion.div>

        {/* Three Pillar Tabs */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {THREE_SERVICE_PILLARS.map((service, index) => {
            const isActive = service.id === activeServiceId;
            return (
              <motion.button
                key={service.id}
                onClick={() => setActiveServiceId(service.id)}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
                className={`relative text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between overflow-hidden ${
                  isActive
                    ? 'bg-[#18181b] border-amber-500 shadow-[0_0_24px_rgba(245,158,11,0.2)] ring-1 ring-amber-500/50'
                    : 'bg-[#111114] border-[#27272a] hover:border-amber-500/30 hover:bg-[#151518]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pillar-gold-indicator"
                    className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-amber-500/5 pointer-events-none"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <span
                      className={`p-2.5 rounded-xl transition-colors ${
                        isActive ? 'bg-amber-400 text-black shadow-[0_0_12px_rgba(245,158,11,0.5)]' : 'bg-zinc-800 text-zinc-400'
                      }`}
                    >
                      {getIcon(service.icon)}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400/90 font-semibold px-2 py-0.5 rounded bg-zinc-800/80 border border-zinc-700">
                      PILLAR 0{index + 1}
                    </span>
                  </div>
                  <h3 className={`mt-4 text-base font-bold leading-snug ${isActive ? 'text-white' : 'text-zinc-300'}`}>
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs text-zinc-400 leading-relaxed font-normal">
                    {service.shortDesc}
                  </p>
                </div>
                
                <div className="relative z-10 mt-5 pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs font-mono">
                  <span className={isActive ? 'text-amber-400 font-semibold' : 'text-zinc-500'}>
                    {isActive ? 'Reviewing Architecture' : 'Examine Specification'}
                  </span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isActive ? 'translate-x-1 text-amber-400' : 'text-zinc-600'}`} />
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Deep-Dive Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 rounded-3xl bg-[#111114] border border-[#27272a] hover:border-amber-500/40 p-6 sm:p-8 lg:p-10 shadow-2xl transition-colors"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-amber-400/10 text-amber-400 border border-amber-400/20 text-xs font-mono">
                    {activeService.tag}
                  </div>
                  <h3 className="mt-2 text-2xl sm:text-3xl font-extrabold text-white">
                    {activeService.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed font-normal">
                    {activeService.fullDesc}
                  </p>
                </div>

                {/* Benchmark Metric Pill */}
                <div className="p-3.5 rounded-xl bg-[#18181b] border border-[#27272a] text-xs font-mono text-amber-300/90 flex items-center gap-2 shadow-[0_0_15px_rgba(245,158,11,0.08)]">
                  <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse flex-shrink-0" />
                  <span className="text-zinc-400">BENCHMARK STANDARDS:</span>
                  <span className="text-zinc-200 font-semibold">{activeService.metrics}</span>
                </div>

                {/* Architecture Highlights */}
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 font-semibold">
                    Core Technical Deliverables & Safeguards:
                  </h4>
                  <div className="space-y-2.5">
                    {activeService.architectureHighlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="mt-1 w-4 h-4 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center flex-shrink-0">
                          <Check className="w-2.5 h-2.5 text-amber-400" />
                        </div>
                        <span className="text-sm text-zinc-300 leading-normal">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack & CTA */}
                <div className="pt-4 border-t border-[#27272a] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider mb-1.5">
                      Production Stack:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {activeService.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300 border border-zinc-700 font-mono text-xs hover:border-amber-500/40 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(245,158,11,0.4)' }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => onSelectServiceForIntake(activeService.title)}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs tracking-wider uppercase transition-all shadow-md cursor-pointer flex-shrink-0"
                  >
                    <span>Scope This Pillar</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </motion.button>
                </div>
              </div>

              {/* Right Architectural Schematic Visual */}
              <div className="lg:col-span-5 rounded-2xl bg-[#09090b] border border-[#27272a] p-6 font-mono text-xs space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-800 text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-amber-400" />
                    SYSTEM BLUEPRINT
                  </span>
                  <span className="text-[10px] text-zinc-500">PILLAR: {activeService.id.toUpperCase()}</span>
                </div>

                {/* Simulated Blueprint Flowchart */}
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-[#141417] border border-zinc-800 text-zinc-300 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-zinc-500">CLIENT DILIGENCE & ENTRY</div>
                      <div className="font-semibold text-white">
                        {activeService.id === 'trust-infrastructure'
                          ? 'Commercial Quotation Wizard (/quote)'
                          : activeService.id === 'ai-automation'
                          ? 'Document & WhatsApp Ingest Stream'
                          : 'Client Checkout & API Requests'}
                      </div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      Sub-1s Target
                    </span>
                  </div>

                  <div className="flex justify-center text-zinc-600">
                    <div className="h-4 w-px bg-zinc-700" />
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#18181b] border border-amber-500/40 text-zinc-200 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] text-amber-400">SECURITY & VALIDATION CORE</span>
                      <span className="text-[10px] text-zinc-500">Immutable Rules</span>
                    </div>
                    <div className="font-semibold text-white">
                      {activeService.id === 'trust-infrastructure'
                        ? 'Compliance Showcase & Unique Reference Code'
                        : activeService.id === 'ai-automation'
                        ? 'Deterministic JSON Parser & Read-Only Guard'
                        : 'Webhook HMAC Verification & Idempotency Key'}
                    </div>
                    <div className="mt-1 text-[10px] text-zinc-400">
                      {activeService.id === 'trust-infrastructure'
                        ? 'KF-Q-XXXXXX format · Instant WhatsApp sales routing'
                        : activeService.id === 'ai-automation'
                        ? 'No unvetted mutations · LangChain retrieval pipeline'
                        : 'Decimal currency math · Raw webhook payload audit'}
                    </div>
                  </div>

                  <div className="flex justify-center text-zinc-600">
                    <div className="h-4 w-px bg-zinc-700" />
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#141417] border border-zinc-800 text-zinc-300 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-zinc-500">DATA SOVEREIGNTY & STORAGE</div>
                      <div className="font-semibold text-white">
                        {activeService.id === 'trust-infrastructure'
                          ? 'Self-Hosted Postgres + Custom Studio CMS'
                          : activeService.id === 'ai-automation'
                          ? 'Vector Store Embeddings + Postgres'
                          : 'Postgres Transaction Log (Dispute Ready)'}
                      </div>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/30">
                      100% Client Owned
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-800 text-[11px] text-zinc-500 flex items-center justify-between">
                  <span>Architecture Model: Proprietary Base</span>
                  <span className="text-emerald-400">Zero Third-Party Lock-in</span>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

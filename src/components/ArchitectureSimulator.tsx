import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, RotateCcw, CheckCircle2, ShieldCheck, Database, Server, Cpu, ArrowRight, Zap, Layers, RefreshCw } from 'lucide-react';

interface Scenario {
  id: string;
  name: string;
  tag: string;
  description: string;
  initialPayload: Record<string, any>;
  steps: {
    node: string;
    action: string;
    protocol: string;
    latency: number;
    log: string;
  }[];
}

const SCENARIOS: Scenario[] = [
  {
    id: 'payment-routing',
    name: 'Cross-Border Multi-Rail Payment Routing',
    tag: 'FINANCIAL SETTLEMENT',
    description: 'Inbound GBP payment routed to Nigerian banking switch with automated ledger lock & real-time FX hedging.',
    initialPayload: {
      transaction_id: 'tx_99a812b0c4',
      sender_currency: 'GBP',
      recipient_currency: 'NGN',
      amount_minor: 145000,
      idempotency_key: 'idemp_live_77e912',
      risk_score: 0.02,
    },
    steps: [
      {
        node: 'Edge API Gateway (London eu-west-2)',
        action: 'TLS 1.3 Termination & Token Authentication',
        protocol: 'HTTP/3 + mTLS',
        latency: 4,
        log: 'Verified HMAC signature. Validated idempotency key against distributed Valkey ring.',
      },
      {
        node: 'Risk & FX Quoting Engine',
        action: 'Dynamic Spread & Liquidity Reservation',
        protocol: 'gRPC Internal',
        latency: 9,
        log: 'Locked exchange rate at £1 = ₦1,980.50. Reserved pool liquidity via Redis transactional multi-exec.',
      },
      {
        node: 'Intelligent Gateway Dispatcher',
        action: 'Multi-Rail Health Check & Dispatch',
        protocol: 'HTTPS / ISO 8583',
        latency: 18,
        log: 'Primary bank switch response latency high (120ms); auto-diverted to low-latency fallback gateway.',
      },
      {
        node: 'Double-Entry Core Ledger (PostgreSQL)',
        action: 'Immutable Balance Movement & Audit Log',
        protocol: 'ACID PostgreSQL Row-Lock',
        latency: 7,
        log: 'Created paired DEBIT [customer_custody] and CREDIT [settlement_transit] entries. Zero discrepancy.',
      },
      {
        node: 'Kafka Event Stream & Webhook Dispatcher',
        action: 'Signed Webhook Broadcast with DLQ fallback',
        protocol: 'Apache Kafka v3.4',
        latency: 5,
        log: 'Published topic payment.settled. Emitted customer webhook with SHA-256 HMAC payload.',
      },
    ],
  },
  {
    id: 'cloud-failover',
    name: 'Multi-Region Cloud Failover & Disaster Recovery',
    tag: 'CLOUD RESILIENCE',
    description: 'Simulates automatic datacenter outage in eu-west-1 with seamless DNS traffic migration to eu-central-1 in <30 seconds.',
    initialPayload: {
      active_cluster: 'aws-eu-west-1',
      standby_cluster: 'aws-eu-central-1',
      health_ping_interval_ms: 500,
      degraded_threshold_consecutive: 3,
    },
    steps: [
      {
        node: 'Synthetic Heartbeat Probe',
        action: 'Detect Cluster Degradation in eu-west-1',
        protocol: 'TCP Health Probe',
        latency: 5,
        log: 'Cluster eu-west-1 failed 3 consecutive SYN checks. Packet loss: 82%. Flagged unhealthy.',
      },
      {
        node: 'Global Anycast DNS / Cloudflare Route',
        action: 'Reroute Traffic Ingress to Standby Region',
        protocol: 'BGP Anycast Routing',
        latency: 12,
        log: 'Cloudflare load balancer flipped primary origin to aws-eu-central-1. Zero dropped TCP sockets.',
      },
      {
        node: 'Kubernetes Horizontal Pod Autoscaler',
        action: 'Elastic Scale-Up on Target Cluster',
        protocol: 'Kubelet Pod Scheduling',
        latency: 16,
        log: 'Scaled microservice replicas from 8 to 24 in 14 seconds to absorb transferred traffic burst.',
      },
      {
        node: 'PostgreSQL Read-Replica Promotion',
        action: 'Promote Read Replica to Master Primary',
        protocol: 'Patroni / Raft Consensus',
        latency: 8,
        log: 'Raft election verified replica lag < 10ms. Promoted replica to read/write primary leader.',
      },
      {
        node: 'Telemetry & PagerDuty Alerting',
        action: 'Post-Mortem Metrics Snapshot & Slack Sync',
        protocol: 'OpenTelemetry + Webhooks',
        latency: 4,
        log: 'Incident ticket automatically generated with full flamegraphs and memory dumps for post-mortem.',
      },
    ],
  },
];

export const ArchitectureSimulator: React.FC = () => {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState<number>(-1);
  const [isRunning, setIsRunning] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const scenario = SCENARIOS[selectedScenarioIndex];

  const handleStart = () => {
    setCurrentStepIndex(0);
    setIsRunning(true);
    setIsCompleted(false);

    let step = 0;
    const interval = setInterval(() => {
      step++;
      if (step < scenario.steps.length) {
        setCurrentStepIndex(step);
      } else {
        clearInterval(interval);
        setIsRunning(false);
        setIsCompleted(true);
      }
    }, 900);
  };

  const handleReset = () => {
    setCurrentStepIndex(-1);
    setIsRunning(false);
    setIsCompleted(false);
  };

  const totalSimulatedLatency = scenario.steps.reduce((sum, s) => sum + s.latency, 0);

  return (
    <section id="simulator" className="py-24 bg-[#09090b] relative border-t border-b border-[#27272a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400">
            <Zap className="w-3.5 h-3.5" />
            <span>INTERACTIVE ARCHITECTURE RUNTIME</span>
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Simulate our fault-tolerant digital pipelines in action.
          </h2>
          <p className="mt-2 text-base text-zinc-400">
            Inspect how ALABSGOLD coordinates distributed state, idempotency locks, and multi-rail 
            fallbacks with microsecond precision.
          </p>
        </motion.div>

        {/* Scenario Selectors with motion */}
        <div className="mt-8 flex flex-wrap gap-3">
          {SCENARIOS.map((sc, idx) => (
            <motion.button
              key={sc.id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setSelectedScenarioIndex(idx);
                handleReset();
              }}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all cursor-pointer flex items-center gap-2 border ${
                selectedScenarioIndex === idx
                  ? 'bg-[#18181b] border-amber-500 text-white shadow-[0_0_20px_rgba(245,158,11,0.25)] ring-1 ring-amber-500/40'
                  : 'bg-[#111114] border-[#27272a] text-zinc-400 hover:text-zinc-200 hover:border-zinc-700'
              }`}
            >
              <span className={`w-2 h-2 rounded-full ${selectedScenarioIndex === idx ? 'bg-amber-400 animate-pulse' : 'bg-zinc-600'}`} />
              <span>{sc.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Simulator Workbench */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Visual Pipeline Flow */}
          <div className="lg:col-span-7 rounded-2xl bg-[#111114] border border-[#27272a] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[#27272a]">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-semibold">
                    {scenario.tag}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-0.5">{scenario.name}</h3>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleReset}
                    disabled={isRunning || currentStepIndex === -1}
                    className="p-2 rounded-lg bg-[#18181b] border border-[#27272a] text-zinc-400 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed"
                    title="Reset Simulator"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>

                  <button
                    onClick={handleStart}
                    disabled={isRunning}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs tracking-wide transition-all shadow-md disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isRunning ? (
                      <>
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>Running Pipeline...</span>
                      </>
                    ) : isCompleted ? (
                      <>
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Rerun Simulation</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Execute Pipeline</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Pipeline Steps List */}
              <div className="mt-6 space-y-4">
                {scenario.steps.map((step, idx) => {
                  const isPast = currentStepIndex > idx;
                  const isCurrent = currentStepIndex === idx;
                  const isWaiting = currentStepIndex < idx;

                  return (
                    <motion.div
                      key={idx}
                      animate={{
                        scale: isCurrent ? 1.015 : 1,
                      }}
                      transition={{ duration: 0.25 }}
                      className={`relative p-4 rounded-xl border transition-all duration-300 ${
                        isCurrent
                          ? 'bg-[#18181b] border-amber-500 shadow-[0_0_25px_rgba(245,158,11,0.25)] ring-1 ring-amber-500/50'
                          : isPast
                          ? 'bg-[#141417] border-emerald-500/40 text-zinc-300'
                          : 'bg-[#111114]/60 border-[#27272a]/60 text-zinc-500 opacity-60'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-7 h-7 rounded-full flex items-center justify-center font-mono text-xs font-bold transition-colors ${
                              isCurrent
                                ? 'bg-amber-400 text-black shadow-[0_0_12px_rgba(245,158,11,0.6)] animate-pulse'
                                : isPast
                                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                                : 'bg-zinc-800 text-zinc-500'
                            }`}
                          >
                            {isPast ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                          </div>

                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                                {step.protocol}
                              </span>
                              <span className="text-xs font-semibold text-zinc-200">{step.node}</span>
                            </div>
                            <div className="text-sm font-medium text-white mt-1">
                              {step.action}
                            </div>
                          </div>
                        </div>

                        <div className="text-right flex-shrink-0">
                          <span
                            className={`text-xs font-mono font-bold ${
                              isCurrent ? 'text-amber-400' : isPast ? 'text-emerald-400' : 'text-zinc-600'
                            }`}
                          >
                            +{step.latency}ms
                          </span>
                        </div>
                      </div>

                      {/* Log output when active or completed */}
                      {(isCurrent || isPast) && (
                        <div className="mt-3 pt-2.5 border-t border-zinc-800/80 text-xs font-mono text-zinc-400">
                          <span className="text-amber-400 mr-1.5">›</span>
                          {step.log}
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Performance Summary Banner */}
            <div className="mt-6 pt-4 border-t border-[#27272a] flex items-center justify-between text-xs font-mono">
              <span className="text-zinc-400">Total Pipeline RTT:</span>
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 font-bold text-sm">{totalSimulatedLatency}ms</span>
                <span className="text-zinc-500">· 100% In-spec SLA</span>
              </div>
            </div>
          </div>

          {/* Right Column: Code & State Inspector */}
          <div className="lg:col-span-5 rounded-2xl bg-[#111114] border border-[#27272a] p-6 flex flex-col justify-between font-mono">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#27272a] text-xs">
                <span className="text-zinc-400 flex items-center gap-1.5">
                  <Server className="w-3.5 h-3.5 text-amber-400" />
                  STATE & ENCRYPTION STREAM
                </span>
                <span className="text-[11px] text-zinc-500">TLS 1.3 / AES-256-GCM</span>
              </div>

              {/* JSON Payload Inspection */}
              <div className="mt-4">
                <div className="text-[11px] text-zinc-500 uppercase tracking-wider mb-1.5">
                  Payload Signature & Parameters:
                </div>
                <div className="p-3.5 rounded-xl bg-[#09090b] border border-[#27272a] text-xs text-zinc-300 overflow-x-auto leading-relaxed">
                  <pre>{JSON.stringify(scenario.initialPayload, null, 2)}</pre>
                </div>
              </div>

              {/* Operational Guarantees for this Pipeline */}
              <div className="mt-5 space-y-2 text-xs">
                <div className="text-[11px] text-zinc-500 uppercase tracking-wider mb-2">
                  Architectural Safeguards Active:
                </div>
                <div className="p-2.5 rounded-lg bg-[#18181b] border border-[#27272a] flex items-center justify-between">
                  <span className="text-zinc-300">Idempotency Guarantee</span>
                  <span className="text-emerald-400 font-semibold">Strict (Valkey Lock)</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#18181b] border border-[#27272a] flex items-center justify-between">
                  <span className="text-zinc-300">Dead Letter Queue (DLQ)</span>
                  <span className="text-emerald-400 font-semibold">Kafka Topic Auto-Drain</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#18181b] border border-[#27272a] flex items-center justify-between">
                  <span className="text-zinc-300">Data Residency Boundary</span>
                  <span className="text-amber-400 font-semibold">NDPR / GDPR Partitioned</span>
                </div>
              </div>
            </div>

            {/* Live Terminal Prompt Message */}
            <div className="mt-6 pt-4 border-t border-[#27272a] text-[11px] text-zinc-500 flex items-center justify-between">
              <span>Status: {isCompleted ? 'PIPELINE_COMPLETE_OK' : isRunning ? 'STREAMING_EVENTS' : 'STANDBY_AWAITING_INPUT'}</span>
              <span className="text-zinc-400">Node: 100% Deterministic</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

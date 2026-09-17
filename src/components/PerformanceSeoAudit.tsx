import React, { useEffect, useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import {
  Activity,
  Zap,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  ChevronUp,
  ChevronDown,
  X,
  Gauge,
  Cpu,
  Globe,
  Terminal,
  RefreshCw,
} from 'lucide-react';
import {
  telemetryAuditService,
  FullAuditReport,
} from '../services/telemetryAuditService';

export const PerformanceSeoAudit: React.FC = () => {
  const location = useLocation();
  const [report, setReport] = useState<FullAuditReport | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const routeStartTimeRef = useRef<number>(performance.now());
  const isInitialMountRef = useRef<boolean>(true);

  // Measure route transitions and initial window load latency
  useEffect(() => {
    if (isInitialMountRef.current) {
      isInitialMountRef.current = false;

      // On full window load or after short settling timeout
      const handleLoad = () => {
        setTimeout(() => {
          const audit = telemetryAuditService.runFullAudit();
          setReport(audit);
        }, 300);
      };

      if (document.readyState === 'complete') {
        handleLoad();
      } else {
        window.addEventListener('load', handleLoad);
        return () => window.removeEventListener('load', handleLoad);
      }
    } else {
      // Client-side route transition latency
      const transitionTime = performance.now() - routeStartTimeRef.current;
      const audit = telemetryAuditService.runFullAudit(transitionTime);
      setReport(audit);
    }
  }, [location.pathname]);

  // Reset route start timer on navigation trigger
  useEffect(() => {
    routeStartTimeRef.current = performance.now();
  }, [location.pathname]);

  const handleRefreshAudit = () => {
    const fresh = telemetryAuditService.runFullAudit();
    setReport(fresh);
  };

  if (!report) return null;

  const p = report.performance;
  const s = report.seo;

  // Minimized pill state
  if (isMinimized) {
    return (
      <aside
        aria-label="Performance Telemetry Pill"
        className="fixed bottom-4 left-4 z-40"
      >
        <button
          type="button"
          onClick={() => setIsMinimized(false)}
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#111114]/90 border border-white/15 text-zinc-300 hover:text-amber-400 text-[10px] font-mono shadow-lg backdrop-blur-md transition-all cursor-pointer hover:border-amber-500/40"
          title="Expand Concurrency & SEO Telemetry"
        >
          <Activity className="w-3 h-3 text-emerald-400" />
          <span>{p.ttfb}ms</span>
          <span className="text-zinc-600">·</span>
          <span className="text-amber-400">{s.score}/100</span>
        </button>
      </aside>
    );
  }

  return (
    <>
      {/* Non-Intrusive Floating Indicator (Bottom-Left) */}
      <aside
        aria-label="High-Concurrency Performance & SEO Monitor"
        className="fixed bottom-4 left-4 z-40"
      >
        <div className="flex items-center gap-1.5 rounded-full bg-[#0d0e12]/90 border border-white/15 hover:border-amber-500/40 px-3 py-1.5 shadow-xl backdrop-blur-xl transition-all">
          
          {/* Quick Stats Trigger */}
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-zinc-300 hover:text-white text-xs font-mono transition-colors cursor-pointer"
            title="Click to view detailed Concurrency & SEO Audit"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>

            <span className="text-amber-400 font-semibold">{p.ttfb}ms</span>
            <span className="text-zinc-500 hidden sm:inline">TTFB</span>

            <span className="text-zinc-700">|</span>

            <span className="text-emerald-400 font-semibold">{p.pageLoadTime}ms</span>
            <span className="text-zinc-500 hidden sm:inline">Load</span>

            <span className="text-zinc-700">|</span>

            <span className="text-zinc-300">SEO:</span>
            <span className={`font-semibold ${s.score >= 90 ? 'text-emerald-400' : 'text-amber-400'}`}>
              {s.score}/100
            </span>

            {isExpanded ? (
              <ChevronDown className="w-3.5 h-3.5 text-zinc-400 ml-1" />
            ) : (
              <ChevronUp className="w-3.5 h-3.5 text-zinc-400 ml-1" />
            )}
          </button>

          {/* Quick Refresh */}
          <button
            type="button"
            onClick={handleRefreshAudit}
            className="p-1 rounded-full text-zinc-500 hover:text-amber-400 hover:bg-white/5 transition-colors cursor-pointer"
            title="Re-run telemetry audit"
          >
            <RefreshCw className="w-3 h-3" />
          </button>

          {/* Minimize */}
          <button
            type="button"
            onClick={() => setIsMinimized(true)}
            className="p-1 rounded-full text-zinc-500 hover:text-zinc-300 hover:bg-white/5 transition-colors cursor-pointer"
            title="Minimize to compact dot"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      </aside>

      {/* Expanded Diagnostic Liquid Glass Modal / Sheet */}
      {isExpanded && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Detailed Concurrency and SEO Telemetry Audit"
          className="fixed bottom-14 left-4 z-50 w-[calc(100vw-32px)] max-w-md sm:max-w-lg rounded-2xl bg-[#0e0f14]/95 border border-white/20 shadow-2xl backdrop-blur-2xl p-4 sm:p-5 text-zinc-100 animate-in fade-in slide-in-from-bottom-2 duration-200"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
            <div className="flex items-center gap-2">
              <div className="p-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <Gauge className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold font-mono tracking-wider uppercase text-white flex items-center gap-2">
                  <span>High-Concurrency Telemetry</span>
                  <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[10px]">
                    {p.concurrencyGrade}
                  </span>
                </div>
                <div className="text-[10px] text-zinc-500 font-mono">
                  Real-Time Browser Diagnostics · Logged to DevTools
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsExpanded(false)}
              className="p-1 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Performance Metrics Grid */}
          <div className="grid grid-cols-3 gap-2.5 mb-4">
            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="text-[10px] text-zinc-400 font-mono uppercase">TTFB</div>
              <div className="text-base font-mono font-bold text-amber-400 mt-0.5">{p.ttfb} ms</div>
              <div className="text-[9px] text-zinc-500">Target &lt; 200ms</div>
            </div>

            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="text-[10px] text-zinc-400 font-mono uppercase">Page Load</div>
              <div className="text-base font-mono font-bold text-emerald-400 mt-0.5">{p.pageLoadTime} ms</div>
              <div className="text-[9px] text-zinc-500">DOM complete</div>
            </div>

            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="text-[10px] text-zinc-400 font-mono uppercase">DOM Content</div>
              <div className="text-base font-mono font-bold text-white mt-0.5">{p.domContentLoaded} ms</div>
              <div className="text-[9px] text-zinc-500">Ready state</div>
            </div>

            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="text-[10px] text-zinc-400 font-mono uppercase">Layout Shift (CLS)</div>
              <div className="text-base font-mono font-bold text-zinc-200 mt-0.5">{p.cls}</div>
              <div className="text-[9px] text-zinc-500">Visual stability</div>
            </div>

            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="text-[10px] text-zinc-400 font-mono uppercase">DNS / TCP</div>
              <div className="text-base font-mono font-bold text-zinc-200 mt-0.5">
                {p.dnsLookup + p.tcpHandshake} ms
              </div>
              <div className="text-[9px] text-zinc-500">Network handshake</div>
            </div>

            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="text-[10px] text-zinc-400 font-mono uppercase">Route Render</div>
              <div className="text-base font-mono font-bold text-amber-300 mt-0.5">
                {p.routeTransitionTime ? `${p.routeTransitionTime} ms` : 'Instant'}
              </div>
              <div className="text-[9px] text-zinc-500">SPA Mount</div>
            </div>
          </div>

          {/* SEO Meta Audit Checklist */}
          <div className="mb-4">
            <div className="flex items-center justify-between text-xs font-mono font-semibold text-zinc-300 mb-2">
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-amber-400" />
                <span>SEO Meta Tags Compliance</span>
              </span>
              <span className="text-emerald-400 font-bold">{s.score}/100 Score</span>
            </div>

            <div className="max-h-36 overflow-y-auto space-y-1.5 pr-1 text-[11px] font-mono">
              {s.checks.map((check, idx) => (
                <div
                  key={idx}
                  className="flex items-start justify-between gap-2 p-1.5 rounded-lg bg-white/[0.02] border border-white/5"
                >
                  <div className="flex items-center gap-1.5 min-w-0">
                    {check.status === 'pass' ? (
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                    ) : (
                      <AlertTriangle className="w-3 h-3 text-amber-400 flex-shrink-0" />
                    )}
                    <span className="text-zinc-300 font-medium truncate">{check.item}</span>
                  </div>
                  <span className="text-zinc-400 text-[10px] truncate max-w-[180px] text-right">
                    {check.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Note with Console Hint */}
          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-zinc-500">
            <span className="flex items-center gap-1">
              <Terminal className="w-3 h-3 text-amber-400" />
              <span>Full telemetry tables in DevTools Console</span>
            </span>
            <button
              type="button"
              onClick={handleRefreshAudit}
              className="text-amber-400 hover:text-amber-300 underline cursor-pointer"
            >
              Re-evaluate
            </button>
          </div>
        </div>
      )}
    </>
  );
};

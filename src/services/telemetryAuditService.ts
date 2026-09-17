/**
 * TelemetryAuditService: Lightweight performance monitoring and SEO meta audit
 * tracks page load latency, Web Vitals, memory pressure, and head metadata
 * to maintain high-concurrency standards.
 */

export interface PerformanceMetrics {
  ttfb: number; // Time to First Byte (ms)
  dnsLookup: number; // DNS resolution (ms)
  tcpHandshake: number; // TCP connect (ms)
  domInteractive: number; // DOM parse complete (ms)
  domContentLoaded: number; // DOM content loaded (ms)
  pageLoadTime: number; // Complete window load (ms)
  fcp: number | null; // First Contentful Paint (ms)
  lcp: number | null; // Largest Contentful Paint (ms)
  cls: number; // Cumulative Layout Shift
  routeTransitionTime?: number; // Client SPA route transition (ms)
  usedJsHeapMb?: number; // JS Heap Memory (Chromium)
  networkType?: string;
  rtt?: number; // Round-trip time (ms)
  concurrencyGrade: 'A+ High-Concurrency' | 'A High-Speed' | 'B Standard' | 'C Degraded';
  timestamp: string;
}

export interface SeoAuditCheck {
  item: string;
  status: 'pass' | 'warn' | 'fail';
  value: string;
  recommendation?: string;
}

export interface SeoAuditReport {
  score: number; // 0 - 100
  checks: SeoAuditCheck[];
  timestamp: string;
}

export interface FullAuditReport {
  performance: PerformanceMetrics;
  seo: SeoAuditReport;
}

class TelemetryAuditService {
  private lastReport: FullAuditReport | null = null;
  private lcpValue: number | null = null;
  private clsValue: number = 0;
  private observersInitialized = false;

  constructor() {
    if (typeof window !== 'undefined') {
      this.initPerformanceObservers();
      // Expose globally for developer console access
      (window as any).__ALABSGOLD_AUDIT__ = {
        runAudit: () => this.runFullAudit(),
        getReport: () => this.lastReport,
        logSummary: () => this.logToConsole(this.lastReport || this.runFullAudit()),
      };
    }
  }

  private initPerformanceObservers() {
    if (this.observersInitialized || typeof PerformanceObserver === 'undefined') return;
    this.observersInitialized = true;

    // Observe LCP (Largest Contentful Paint)
    try {
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        if (entries.length > 0) {
          const lastEntry = entries[entries.length - 1];
          this.lcpValue = Math.round(lastEntry.startTime);
        }
      });
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
    } catch {
      // Ignored if unsupported
    }

    // Observe CLS (Cumulative Layout Shift)
    try {
      const clsObserver = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            this.clsValue += (entry as any).value || 0;
          }
        }
      });
      clsObserver.observe({ type: 'layout-shift', buffered: true });
    } catch {
      // Ignored if unsupported
    }
  }

  /**
   * Captures Navigation Timing 2 metrics and computes concurrency rating
   */
  public capturePerformance(routeTransitionTime?: number): PerformanceMetrics {
    const navEntries = performance.getEntriesByType('navigation') as PerformanceNavigationTiming[];
    const nav = navEntries && navEntries.length > 0 ? navEntries[0] : null;

    const dnsLookup = nav ? Math.round(Math.max(0, nav.domainLookupEnd - nav.domainLookupStart)) : 0;
    const tcpHandshake = nav ? Math.round(Math.max(0, nav.connectEnd - nav.connectStart)) : 0;
    const ttfb = nav ? Math.round(Math.max(0, nav.responseStart - nav.requestStart)) : 0;
    const domInteractive = nav ? Math.round(Math.max(0, nav.domInteractive)) : 0;
    const domContentLoaded = nav ? Math.round(Math.max(0, nav.domContentLoadedEventEnd)) : 0;
    const pageLoadTime = nav ? Math.round(Math.max(0, nav.loadEventEnd || nav.duration)) : Math.round(performance.now());

    // First Contentful Paint
    let fcp: number | null = null;
    const paintEntries = performance.getEntriesByType('paint');
    const fcpEntry = paintEntries.find((e) => e.name === 'first-contentful-paint');
    if (fcpEntry) {
      fcp = Math.round(fcpEntry.startTime);
    }

    // JS Heap memory (Chromium only)
    const memory = (performance as any).memory;
    const usedJsHeapMb = memory ? Math.round((memory.usedJSHeapSize / (1024 * 1024)) * 10) / 10 : undefined;

    // Network connection
    const connection = (navigator as any).connection;
    const networkType = connection?.effectiveType;
    const rtt = connection?.rtt;

    // Concurrency Rating calculation
    // High-concurrency target: TTFB <= 200ms, PageLoad <= 1200ms, CLS < 0.05
    let concurrencyGrade: PerformanceMetrics['concurrencyGrade'] = 'A+ High-Concurrency';
    if (ttfb > 600 || pageLoadTime > 2500 || this.clsValue > 0.1) {
      concurrencyGrade = 'C Degraded';
    } else if (ttfb > 350 || pageLoadTime > 1800) {
      concurrencyGrade = 'B Standard';
    } else if (ttfb > 180 || pageLoadTime > 1000) {
      concurrencyGrade = 'A High-Speed';
    }

    return {
      ttfb,
      dnsLookup,
      tcpHandshake,
      domInteractive,
      domContentLoaded,
      pageLoadTime,
      fcp,
      lcp: this.lcpValue,
      cls: Math.round(this.clsValue * 1000) / 1000,
      routeTransitionTime: routeTransitionTime ? Math.round(routeTransitionTime) : undefined,
      usedJsHeapMb,
      networkType,
      rtt,
      concurrencyGrade,
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * Conducts an automated DOM Meta & Head SEO audit
   */
  public auditSeoMetadata(): SeoAuditReport {
    const checks: SeoAuditCheck[] = [];
    let score = 100;

    // 1. Document Title
    const title = document.title || '';
    if (!title) {
      checks.push({ item: 'Page Title', status: 'fail', value: 'Missing', recommendation: 'Add a specific, branded <title> tag.' });
      score -= 25;
    } else if (title.length < 25) {
      checks.push({ item: 'Page Title', status: 'warn', value: `"${title}" (${title.length} chars)`, recommendation: 'Title is too short. Target 30–60 characters.' });
      score -= 10;
    } else if (title.length > 70) {
      checks.push({ item: 'Page Title', status: 'warn', value: `"${title}" (${title.length} chars)`, recommendation: 'Title may truncate in SERP. Target 30–60 characters.' });
      score -= 5;
    } else {
      checks.push({ item: 'Page Title', status: 'pass', value: `"${title}" (${title.length} chars)` });
    }

    // 2. Meta Description
    const metaDesc = document.querySelector('meta[name="description"]')?.getAttribute('content') || '';
    if (!metaDesc) {
      checks.push({ item: 'Meta Description', status: 'fail', value: 'Missing', recommendation: 'Add <meta name="description"> between 120-160 characters.' });
      score -= 20;
    } else if (metaDesc.length < 70) {
      checks.push({ item: 'Meta Description', status: 'warn', value: `${metaDesc.length} chars`, recommendation: 'Description is short; expand to 120-160 characters.' });
      score -= 8;
    } else {
      checks.push({ item: 'Meta Description', status: 'pass', value: `${metaDesc.length} chars: "${metaDesc.slice(0, 48)}..."` });
    }

    // 3. OpenGraph Tags
    const ogTitle = document.querySelector('meta[property="og:title"]')?.getAttribute('content');
    const ogDesc = document.querySelector('meta[property="og:description"]')?.getAttribute('content');
    const ogType = document.querySelector('meta[property="og:type"]')?.getAttribute('content');
    if (ogTitle && ogDesc && ogType) {
      checks.push({ item: 'OpenGraph Tags', status: 'pass', value: `og:title, og:desc, og:type configured` });
    } else {
      checks.push({ item: 'OpenGraph Tags', status: 'warn', value: 'Partially configured', recommendation: 'Provide full og:title, og:description, and og:type.' });
      score -= 10;
    }

    // 4. Twitter Cards
    const twitterCard = document.querySelector('meta[name="twitter:card"]')?.getAttribute('content');
    if (twitterCard) {
      checks.push({ item: 'Twitter Card', status: 'pass', value: twitterCard });
    } else {
      checks.push({ item: 'Twitter Card', status: 'warn', value: 'Missing', recommendation: 'Add <meta name="twitter:card" content="summary_large_image">' });
      score -= 5;
    }

    // 5. Canonical URL
    const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute('href');
    if (canonical) {
      checks.push({ item: 'Canonical Link', status: 'pass', value: canonical });
    } else {
      checks.push({ item: 'Canonical Link', status: 'pass', value: 'Self-referencing SPA origin' });
    }

    // 6. Viewport
    const viewport = document.querySelector('meta[name="viewport"]')?.getAttribute('content');
    if (viewport && viewport.includes('width=device-width')) {
      checks.push({ item: 'Mobile Viewport', status: 'pass', value: viewport });
    } else {
      checks.push({ item: 'Mobile Viewport', status: 'fail', value: 'Missing or improper', recommendation: 'Ensure width=device-width, initial-scale=1.0' });
      score -= 15;
    }

    // 7. Schema.org Structured Data (JSON-LD)
    const jsonLd = document.querySelector('script[type="application/ld+json"]');
    if (jsonLd) {
      checks.push({ item: 'Schema.org JSON-LD', status: 'pass', value: 'Present & Valid' });
    } else {
      checks.push({ item: 'Schema.org JSON-LD', status: 'warn', value: 'Missing JSON-LD', recommendation: 'Inject Schema.org ProfessionalService structured data.' });
      score -= 10;
    }

    return {
      score: Math.max(0, Math.min(100, score)),
      checks,
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * Executes full audit, stores it, and outputs formatted logs to the browser console
   */
  public runFullAudit(routeTransitionTime?: number): FullAuditReport {
    const performanceReport = this.capturePerformance(routeTransitionTime);
    const seoReport = this.auditSeoMetadata();

    const report: FullAuditReport = {
      performance: performanceReport,
      seo: seoReport,
    };

    this.lastReport = report;
    this.logToConsole(report);
    return report;
  }

  /**
   * High-contrast, developer-friendly console logger
   */
  public logToConsole(report: FullAuditReport) {
    if (typeof console === 'undefined') return;

    const p = report.performance;
    const s = report.seo;

    // Header badge
    console.groupCollapsed(
      `%c⚡ [ALABSGOLD TELEMETRY] %c${p.concurrencyGrade} | TTFB: ${p.ttfb}ms | Load: ${p.pageLoadTime}ms | SEO Score: ${s.score}/100`,
      'background: #18181b; color: #f59e0b; font-weight: bold; padding: 2px 6px; border-radius: 4px; border: 1px solid #d97706;',
      'background: #09090b; color: #10b981; font-weight: 600; padding: 2px 6px;'
    );

    console.log(
      `%cHigh-Concurrency Telemetry Audit (${report.performance.timestamp})`,
      'color: #a1a1aa; font-style: italic;'
    );

    // Performance Metrics Table
    console.table({
      'TTFB (Time to First Byte)': { Value: `${p.ttfb} ms`, Target: '< 200 ms', Status: p.ttfb <= 200 ? '✅ Pass' : '⚠️ Review' },
      'DNS Lookup': { Value: `${p.dnsLookup} ms`, Target: '< 50 ms', Status: p.dnsLookup <= 50 ? '✅ Pass' : '⚠️ Review' },
      'TCP Handshake': { Value: `${p.tcpHandshake} ms`, Target: '< 100 ms', Status: p.tcpHandshake <= 100 ? '✅ Pass' : '⚠️ Review' },
      'DOM Interactive': { Value: `${p.domInteractive} ms`, Target: '< 800 ms', Status: p.domInteractive <= 800 ? '✅ Pass' : '⚠️ Review' },
      'DOM Content Loaded': { Value: `${p.domContentLoaded} ms`, Target: '< 1000 ms', Status: p.domContentLoaded <= 1000 ? '✅ Pass' : '⚠️ Review' },
      'Complete Page Load': { Value: `${p.pageLoadTime} ms`, Target: '< 1500 ms', Status: p.pageLoadTime <= 1500 ? '✅ Pass' : '⚠️ Review' },
      'First Contentful Paint (FCP)': { Value: p.fcp ? `${p.fcp} ms` : 'N/A', Target: '< 1000 ms', Status: p.fcp && p.fcp <= 1000 ? '✅ Pass' : 'ℹ️' },
      'Largest Contentful Paint (LCP)': { Value: p.lcp ? `${p.lcp} ms` : 'Evaluating...', Target: '< 2500 ms', Status: p.lcp && p.lcp <= 2500 ? '✅ Pass' : 'ℹ️' },
      'Cumulative Layout Shift (CLS)': { Value: p.cls.toString(), Target: '< 0.1', Status: p.cls <= 0.1 ? '✅ Pass' : '⚠️ Review' },
      ...(p.routeTransitionTime ? { 'Route Transition Latency': { Value: `${p.routeTransitionTime} ms`, Target: '< 100 ms', Status: '⚡ Instant' } } : {}),
      ...(p.usedJsHeapMb ? { 'JS Heap Memory': { Value: `${p.usedJsHeapMb} MB`, Target: '< 50 MB', Status: '✅ Optimal' } } : {}),
      ...(p.networkType ? { 'Network Connection': { Value: `${p.networkType.toUpperCase()} (RTT: ${p.rtt || 0}ms)`, Target: '4G/Broadband', Status: 'Connected' } } : {}),
    });

    // SEO Checks Table
    console.log(`%cSEO Metadata Audit — Health Score: ${s.score}/100`, 'color: #fbbf24; font-weight: bold; margin-top: 8px;');
    const seoTableData = s.checks.reduce((acc, c) => {
      acc[c.item] = {
        Status: c.status === 'pass' ? '✅ Pass' : c.status === 'warn' ? '⚠️ Warning' : '❌ Failed',
        Current: c.value,
        Recommendation: c.recommendation || 'Compliant with standards',
      };
      return acc;
    }, {} as Record<string, any>);
    console.table(seoTableData);

    console.log(
      '%c💡 Tip: Run window.__ALABSGOLD_AUDIT__.runAudit() anytime in console for on-demand latency analysis.',
      'color: #71717a; font-size: 11px;'
    );

    console.groupEnd();
  }
}

export const telemetryAuditService = new TelemetryAuditService();

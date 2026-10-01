import React, { useState } from 'react';
import { useSEO } from '../hooks/useSEO';
import {
  SELECTED_WORKS,
  DESIGN_BRAND_WORKS,
  EXPERIMENTS_RESEARCH,
} from '../data/content';
import {
  Package,
  ArrowRight,
  ExternalLink,
  Sparkles,
  Layers,
  Palette,
  FlaskConical,
  Cpu,
  CheckCircle2,
} from 'lucide-react';
import { CaseStudyResults } from '../components/CaseStudyResults';

interface ProductsPageProps {
  onOpenIntake: (serviceTitle?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onOpenIntake }) => {
  useSEO({
    title: 'Work, Platforms & Technical Labs | ALABSGOLD',
    description:
      'Catalog of production platforms, export quotation systems, AI RAG pipelines, and technical research labs built by ALABSGOLD.',
    canonicalPath: '/products',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'ALABSGOLD Selected Works & Research Labs',
      description: 'Comprehensive software catalog and technical projects.',
      url: 'https://alabsgold.vercel.app/products',
    },
  });

  const [activeTab, setActiveTab] = useState<'works' | 'design' | 'experiments'>('works');
  const [categoryFilter, setCategoryFilter] = useState<string>('All');

  const categories = ['All', 'Enterprise Platform', 'AI & LLM', 'Academic & CBT', 'Atlassian Ecosystem', 'Data & Financial'];

  const filteredWorks = SELECTED_WORKS.filter((work) => {
    if (categoryFilter === 'All') return true;
    return work.category === categoryFilter;
  });

  return (
    <div className="pt-24 pb-24 bg-white/40 dark:bg-[#09090b]/40 backdrop-blur-md text-slate-900 dark:text-zinc-100 min-h-screen transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-600 dark:text-amber-400 mb-4 backdrop-blur-md">
            <Package className="w-3.5 h-3.5" />
            <span>PORTFOLIO, SYSTEMS & LAB EXPERIMENTS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Selected Work & R&D Labs
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A comprehensive catalog of custom production platforms, AI retrieval pipelines, brand identity suites, and technical experiments engineered by ALABSGOLD.
          </p>
        </div>

        {/* View Switcher Tabs: OS 26 Liquid Glass Segmented Controls */}
        <div className="mt-10 flex flex-wrap items-center gap-2.5 pb-4 border-b border-slate-200/60 dark:border-white/5">
          <button
            onClick={() => setActiveTab('works')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-semibold transition-all cursor-pointer backdrop-blur-lg ${
              activeTab === 'works'
                ? 'bg-amber-400 text-black shadow-md'
                : 'bg-white/50 dark:bg-white/5 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white border border-white/40 dark:border-white/10'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>Selected Platforms ({SELECTED_WORKS.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('design')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-semibold transition-all cursor-pointer backdrop-blur-lg ${
              activeTab === 'design'
                ? 'bg-amber-400 text-black shadow-md'
                : 'bg-white/50 dark:bg-white/5 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white border border-white/40 dark:border-white/10'
            }`}
          >
            <Palette className="w-4 h-4" />
            <span>Design & Visual Identity ({DESIGN_BRAND_WORKS.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('experiments')}
            className={`flex items-center gap-2 px-4 py-2 rounded-full font-mono text-xs font-semibold transition-all cursor-pointer backdrop-blur-lg ${
              activeTab === 'experiments'
                ? 'bg-amber-400 text-black shadow-md'
                : 'bg-white/50 dark:bg-white/5 text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white border border-white/40 dark:border-white/10'
            }`}
          >
            <FlaskConical className="w-4 h-4" />
            <span>Experiments & R&D ({EXPERIMENTS_RESEARCH.length})</span>
          </button>
        </div>

        {/* TAB 1: SELECTED PLATFORMS */}
        {activeTab === 'works' && (
          <div className="mt-8 space-y-8">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-200/50 dark:bg-white/[0.04] backdrop-blur-xl rounded-full border border-white/40 dark:border-white/10 w-fit">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                    categoryFilter === cat
                      ? 'bg-white dark:bg-white/20 text-slate-900 dark:text-white font-semibold shadow-sm'
                      : 'text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid of Work Items: Liquid Glass */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredWorks.map((work) => (
                <div
                  key={work.id}
                  className="p-6 rounded-3xl bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/40 dark:border-white/10 flex flex-col justify-between shadow-[0_8px_32px_0_rgba(0,0,0,0.04)] hover:border-amber-500/50 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 font-semibold">
                        {work.category}
                      </span>
                      <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-200/60 dark:bg-white/5 text-slate-600 dark:text-zinc-400 border border-white/20">
                        {work.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {work.title}
                    </h3>
                    <p className="mt-2 text-xs text-amber-600 dark:text-amber-400 font-mono font-medium">
                      {work.oneLiner}
                    </p>
                    <p className="mt-2 text-xs text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                      {work.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-white/5">
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {work.tags.map((t) => (
                        <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-white/70 dark:bg-white/5 text-slate-600 dark:text-zinc-400 border border-slate-200/80 dark:border-white/10">
                          {t}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => onOpenIntake(`Work Inquiry: ${work.title}`)}
                      className="text-xs font-mono text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1 font-semibold cursor-pointer"
                    >
                      Inquire on this Stack <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: DESIGN & BRANDING */}
        {activeTab === 'design' && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {DESIGN_BRAND_WORKS.map((brand) => (
              <div
                key={brand.id}
                className="p-8 rounded-3xl bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.04)] space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 font-semibold px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20">
                    {brand.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400 dark:text-zinc-500">{brand.status}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{brand.name}</h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">{brand.description}</p>
                <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
                  {brand.tools.map((tool) => (
                    <span key={tool} className="px-2.5 py-1 rounded-lg bg-white/70 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-zinc-300">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: EXPERIMENTS & R&D */}
        {activeTab === 'experiments' && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EXPERIMENTS_RESEARCH.map((exp) => (
              <div
                key={exp.id}
                className="p-6 rounded-3xl bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.04)] space-y-3"
              >
                <h3 className="text-base font-bold text-slate-900 dark:text-white">{exp.title}</h3>
                <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">{exp.description}</p>
                <div className="pt-2 flex flex-wrap gap-1.5 text-xs font-mono">
                  {exp.tech.map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-md bg-white/70 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 text-slate-700 dark:text-zinc-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Production Benchmarks Component */}
        <div className="mt-16">
          <CaseStudyResults onOpenIntake={onOpenIntake} />
        </div>

      </div>
    </div>
  );
};

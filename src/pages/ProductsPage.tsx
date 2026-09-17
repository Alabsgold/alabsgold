import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSEO } from '../hooks/useSEO';
import {
  SELECTED_WORKS,
  DESIGN_BRAND_WORKS,
  EXPERIMENTS_RESEARCH,
  STUDIO_DATA,
} from '../data/content';
import { CaseStudyResults } from '../components/CaseStudyResults';
import {
  Package,
  Cpu,
  Layers,
  Sparkles,
  Palette,
  FlaskConical,
  ArrowRight,
  ExternalLink,
  Code2,
  CheckCircle2,
  Terminal,
} from 'lucide-react';

interface ProductsPageProps {
  onOpenIntake: (projectName?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({ onOpenIntake }) => {
  useSEO({
    title: 'Selected Works, Platforms & R&D Labs | ALABSGOLD',
    description:
      'Explore live production platforms, bespoke Studio CMS implementations, AI quiz engines, and Atlassian Forge apps engineered by ALABSGOLD.',
    keywords: [
      'ALABSGOLD Portfolio',
      'Kadie Fresh Platform',
      'PrepAI LangChain',
      'Atlassian Forge Apps',
      'PrepCBT Platform',
      'Web Engineering Case Studies',
    ],
    canonicalPath: '/products',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'ALABSGOLD Selected Works & Engineered Platforms',
      description: 'Production platforms, software architectures, and AI systems built by ALABSGOLD.',
      url: 'https://alabsgold.com.ng/products',
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
    <div className="pt-28 pb-24 bg-[#09090b] text-[#f4f4f5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400 mb-4">
            <Package className="w-3.5 h-3.5" />
            <span>PORTFOLIO, SYSTEMS & LAB EXPERIMENTS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Selected Work & R&D Labs
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            A comprehensive catalog of custom production platforms, AI retrieval pipelines, brand identity suites, and technical experiments engineered by ALABSGOLD.
          </p>
        </motion.div>

        {/* View Switcher Tabs */}
        <div className="mt-10 flex flex-wrap items-center gap-3 border-b border-zinc-800 pb-4">
          <button
            onClick={() => setActiveTab('works')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'works'
                ? 'bg-amber-400 text-black shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                : 'bg-[#18181b] text-zinc-400 hover:text-white border border-[#27272a]'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>Selected Platforms ({SELECTED_WORKS.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('design')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'design'
                ? 'bg-amber-400 text-black shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                : 'bg-[#18181b] text-zinc-400 hover:text-white border border-[#27272a]'
            }`}
          >
            <Palette className="w-4 h-4" />
            <span>Brand & Visual Identity ({DESIGN_BRAND_WORKS.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('experiments')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'experiments'
                ? 'bg-amber-400 text-black shadow-[0_0_15px_rgba(245,158,11,0.3)]'
                : 'bg-[#18181b] text-zinc-400 hover:text-white border border-[#27272a]'
            }`}
          >
            <FlaskConical className="w-4 h-4" />
            <span>R&D Labs & Experiments ({EXPERIMENTS_RESEARCH.length})</span>
          </button>
        </div>

        {/* TAB 1: SELECTED WORKS */}
        {activeTab === 'works' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8 space-y-8"
          >
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategoryFilter(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer border ${
                    categoryFilter === cat
                      ? 'bg-amber-400/10 border-amber-500 text-amber-400 font-semibold'
                      : 'bg-[#111114] border-[#27272a] text-zinc-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredWorks.map((work) => (
                <motion.div
                  key={work.id}
                  whileHover={{ y: -4, borderColor: 'rgba(245, 158, 11, 0.4)' }}
                  className="p-7 rounded-3xl bg-[#111114] border border-[#27272a] flex flex-col justify-between transition-all group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-zinc-800 text-amber-400 border border-zinc-700 font-semibold">
                        {work.category}
                      </span>
                      <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                        {work.status}
                      </span>
                    </div>

                    <h2 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                      {work.title}
                    </h2>
                    <p className="mt-2 text-xs font-mono text-amber-300/90 font-medium">
                      {work.oneLiner}
                    </p>
                    <p className="mt-3 text-sm text-zinc-300 leading-relaxed font-normal">
                      {work.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-zinc-800/80">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-zinc-800/80 text-zinc-300 border border-zinc-700/80 font-mono text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs font-mono text-zinc-500">
                        Engineering Artifact
                      </span>
                      <button
                        onClick={() => onOpenIntake(`Inquiry regarding ${work.title}`)}
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-400 hover:underline font-semibold cursor-pointer"
                      >
                        <span>Discuss Architecture</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* TAB 2: DESIGN & BRAND WORK */}
        {activeTab === 'design' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8 space-y-6"
          >
            <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-xs font-mono text-zinc-300 max-w-2xl">
              Brand identity systems, 3D visual prototypes, and digital motion sequences designed to support commercial client launches.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {DESIGN_BRAND_WORKS.map((design) => (
                <div
                  key={design.id}
                  className="p-7 rounded-3xl bg-[#111114] border border-[#27272a] hover:border-amber-500/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-zinc-800 text-amber-400 border border-zinc-700 font-semibold">
                        {design.category}
                      </span>
                      <span className="text-xs font-mono text-zinc-500">
                        {design.status}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold text-white">
                      {design.name}
                    </h2>
                    <p className="mt-3 text-sm text-zinc-300 leading-relaxed font-normal">
                      {design.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-5 border-t border-zinc-800">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 block mb-2 font-semibold">
                      Design & Prototyping Tools:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {design.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2.5 py-1 rounded-md bg-zinc-800 text-zinc-300 border border-zinc-700 font-mono text-xs"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* TAB 3: R&D LABS & EXPERIMENTS */}
        {activeTab === 'experiments' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8 space-y-6"
          >
            <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 text-xs font-mono text-zinc-300 max-w-2xl">
              Internal research, algorithmic proofs-of-concept, and WebGL graphics experiments exploring boundary capabilities.
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {EXPERIMENTS_RESEARCH.map((exp) => (
                <div
                  key={exp.id}
                  className="p-6 rounded-3xl bg-[#111114] border border-[#27272a] hover:border-amber-500/40 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-2 text-amber-400 mb-2">
                      <Terminal className="w-4 h-4" />
                      <span className="text-xs font-mono font-semibold uppercase">R&D LAB BENCH</span>
                    </div>

                    <h2 className="text-lg font-bold text-white">
                      {exp.title}
                    </h2>
                    <p className="mt-3 text-xs text-zinc-300 leading-relaxed font-normal">
                      {exp.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-zinc-800">
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Case Study Results & Performance Benchmarks */}
        <CaseStudyResults onOpenIntake={onOpenIntake} className="mt-16 -mx-4 sm:-mx-6 lg:-mx-8 rounded-3xl" />

        {/* Bottom Contact Callout */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl bg-[#111114] border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Need custom software or an AI retrieval pipeline?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1">
              We architect and deliver bespoke platforms tailored precisely to your operational requirements.
            </p>
          </div>
          <button
            onClick={() => onOpenIntake('Custom Platform Build Inquiry')}
            className="px-6 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs font-mono uppercase tracking-wider transition-all shadow-md flex-shrink-0 cursor-pointer"
          >
            Start a Project
          </button>
        </div>

      </div>
    </div>
  );
};

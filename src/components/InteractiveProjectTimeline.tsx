import React, { useState, useEffect, useCallback, useId } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TIMELINE_STAGES, TIMELINE_TIERS, TimelineTier } from '../data/timelineData';
import { ProjectTimelineStage } from '../types';
import { STUDIO_DATA } from '../data/content';
import {
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  Clock,
  CheckCircle2,
  Terminal,
  Shield,
  Layers,
  FileCode,
  Copy,
  Check,
  ArrowRight,
  Sparkles,
  MessageSquare,
  Lock,
  Server,
  Zap,
  RotateCcw,
  Sliders,
  FileText,
  Activity,
} from 'lucide-react';

interface InteractiveProjectTimelineProps {
  onOpenIntake?: (serviceOrPhase?: string) => void;
  className?: string;
  id?: string;
}

type TabMode = 'deliverables' | 'architecture' | 'artifact' | 'governance';

export const InteractiveProjectTimeline: React.FC<InteractiveProjectTimelineProps> = ({
  onOpenIntake,
  className = '',
  id = 'timeline',
}) => {
  const [selectedTierId, setSelectedTierId] = useState<TimelineTier['id']>('professional');
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);
  const [activeTab, setActiveTab] = useState<TabMode>('deliverables');
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [autoPlayProgress, setAutoPlayProgress] = useState<number>(0);
  const [copiedArtifact, setCopiedArtifact] = useState<boolean>(false);

  const activeTier = TIMELINE_TIERS.find((t) => t.id === selectedTierId) || TIMELINE_TIERS[1];
  const activeStage: ProjectTimelineStage = TIMELINE_STAGES[activeStageIndex];

  // Auto-play timer setup
  const AUTO_PLAY_INTERVAL_MS = 7000; // 7 seconds per stage
  const TICK_MS = 100;

  const nextStage = useCallback(() => {
    setActiveStageIndex((prev) => (prev + 1) % TIMELINE_STAGES.length);
    setAutoPlayProgress(0);
  }, []);

  const prevStage = useCallback(() => {
    setActiveStageIndex((prev) => (prev - 1 + TIMELINE_STAGES.length) % TIMELINE_STAGES.length);
    setAutoPlayProgress(0);
  }, []);

  const selectStage = (index: number) => {
    setActiveStageIndex(index);
    setAutoPlayProgress(0);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only listen if not typing in input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;
      if (e.key === 'ArrowRight') {
        nextStage();
      } else if (e.key === 'ArrowLeft') {
        prevStage();
      } else if (e.key === ' ') {
        e.preventDefault();
        setIsPlaying((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextStage, prevStage]);

  // Handle Autoplay timer
  useEffect(() => {
    if (!isPlaying) {
      setAutoPlayProgress(0);
      return;
    }

    const interval = setInterval(() => {
      setAutoPlayProgress((prev) => {
        const next = prev + (TICK_MS / AUTO_PLAY_INTERVAL_MS) * 100;
        if (next >= 100) {
          nextStage();
          return 0;
        }
        return next;
      });
    }, TICK_MS);

    return () => clearInterval(interval);
  }, [isPlaying, nextStage]);

  const handleCopyCode = () => {
    if (!activeStage.artifact?.code) return;
    navigator.clipboard.writeText(activeStage.artifact.code);
    setCopiedArtifact(true);
    setTimeout(() => setCopiedArtifact(false), 2000);
  };

  // Helper to format duration for the currently active tier
  const getStageDuration = (stage: ProjectTimelineStage) => {
    return stage.durations[selectedTierId] || stage.durations.professional;
  };

  return (
    <section
      id={id}
      className={`py-24 sm:py-28 bg-[#09090b] relative border-t border-[#27272a] text-[#f4f4f5] overflow-hidden ${className}`}
    >
      {/* Ambient background patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-[#18181b] border border-[#27272a] text-xs font-mono text-zinc-300 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="tracking-wider uppercase">THE ALABSGOLD METHODOLOGY · INTERACTIVE TIMELINE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Digital Infrastructure Development Stages
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-normal max-w-3xl">
            Every engagement runs five compressed, non-negotiable architectural phases powered by our proprietary{' '}
            <code className="text-amber-400 font-mono text-xs px-1.5 py-0.5 rounded bg-zinc-800 border border-zinc-700">
              alabsgold-core
            </code>{' '}
            framework. Inspect each stage below to explore deliverables, technical artifacts, and milestone guarantees.
          </p>
        </motion.div>

        {/* Tier Selector & Interactive Controls Bar */}
        <div className="mt-10 sm:mt-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 p-4 sm:p-5 rounded-2xl bg-[#111114] border border-[#27272a]">
          {/* Project Tier Pill Selector */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full lg:w-auto">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider flex-shrink-0">
              <Sliders className="w-3.5 h-3.5 text-amber-400" />
              <span>Project Tier:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {TIMELINE_TIERS.map((tier) => {
                const isSelected = selectedTierId === tier.id;
                return (
                  <button
                    key={tier.id}
                    onClick={() => {
                      setSelectedTierId(tier.id);
                      setAutoPlayProgress(0);
                    }}
                    className={`px-3.5 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer border flex items-center gap-2 ${
                      isSelected
                        ? 'bg-amber-400 text-black font-bold border-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.25)]'
                        : 'bg-[#18181b] border-[#27272a] text-zinc-400 hover:text-white hover:border-zinc-700'
                    }`}
                  >
                    <span>{tier.name}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.5 rounded ${
                        isSelected ? 'bg-black/20 text-black' : 'bg-zinc-800 text-amber-400'
                      }`}
                    >
                      {tier.totalDuration}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Autoplay & Scrub Controls */}
          <div className="flex items-center gap-3 w-full lg:w-auto justify-between lg:justify-end border-t lg:border-t-0 pt-3 lg:pt-0 border-zinc-800">
            {/* Auto Play / Pause Button */}
            <button
              onClick={() => setIsPlaying((prev) => !prev)}
              className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono transition-all duration-200 cursor-pointer border relative overflow-hidden ${
                isPlaying
                  ? 'bg-amber-500/15 border-amber-500/40 text-amber-400'
                  : 'bg-[#18181b] border-[#27272a] text-zinc-300 hover:text-white hover:border-zinc-700'
              }`}
              title="Automated Stage Walkthrough (Press Space to toggle)"
            >
              {/* Visible progress fill behind the button when playing */}
              {isPlaying && (
                <div
                  className="absolute left-0 bottom-0 top-0 bg-amber-500/20 pointer-events-none transition-all duration-100 ease-linear"
                  style={{ width: `${autoPlayProgress}%` }}
                />
              )}
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              <span className="relative z-10 font-semibold">
                {isPlaying ? 'Auto-Tour Running' : 'Start Auto-Tour'}
              </span>
            </button>

            {/* Previous & Next Buttons */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={prevStage}
                className="p-2 rounded-xl bg-[#18181b] hover:bg-zinc-800 text-zinc-400 hover:text-white border border-[#27272a] hover:border-zinc-700 transition-colors cursor-pointer"
                title="Previous Stage (ArrowLeft)"
                aria-label="Previous Stage"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="text-xs font-mono text-zinc-400 px-2">
                <span className="text-white font-bold">{activeStageIndex + 1}</span>
                <span className="text-zinc-600"> / </span>
                <span>{TIMELINE_STAGES.length}</span>
              </div>
              <button
                onClick={nextStage}
                className="p-2 rounded-xl bg-[#18181b] hover:bg-zinc-800 text-zinc-400 hover:text-white border border-[#27272a] hover:border-zinc-700 transition-colors cursor-pointer"
                title="Next Stage (ArrowRight)"
                aria-label="Next Stage"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Selected Tier Context Banner */}
        <div className="mt-4 px-4 py-3 rounded-xl bg-[#111114]/60 border border-[#27272a]/60 text-xs font-mono flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-zinc-400">
          <div className="flex items-center gap-2">
            <span className="text-amber-400 font-semibold">{activeTier.badge}:</span>
            <span className="text-zinc-300 font-sans">{activeTier.targetProfile}</span>
          </div>
          <div className="flex items-center gap-3 text-[11px] flex-shrink-0">
            <span className="text-zinc-500">Typical Pace:</span>
            <span className="text-zinc-200 font-medium">{activeTier.sprintPace}</span>
            <span className="text-zinc-600">|</span>
            <span className="text-amber-400/90 font-semibold">{activeTier.typicalInvestment}</span>
          </div>
        </div>

        {/* The Interactive Timeline Rail */}
        <div className="mt-10 sm:mt-12 relative">
          {/* Background Track Line (Desktop) */}
          <div className="hidden md:block absolute top-7 left-8 right-8 h-1 bg-zinc-800 rounded-full z-0" />
          
          {/* Active Animated Progress Beam */}
          <motion.div
            className="hidden md:block absolute top-7 left-8 h-1 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-300 rounded-full z-0 shadow-[0_0_12px_rgba(245,158,11,0.6)]"
            initial={false}
            animate={{
              width: `${(activeStageIndex / (TIMELINE_STAGES.length - 1)) * 95}%`,
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
          />

          {/* 5 Stage Step Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative z-10">
            {TIMELINE_STAGES.map((stage, idx) => {
              const isActive = activeStageIndex === idx;
              const isPassed = idx < activeStageIndex;
              const duration = getStageDuration(stage);

              return (
                <button
                  key={stage.id}
                  onClick={() => selectStage(idx)}
                  className={`group relative text-left p-4 rounded-2xl transition-all duration-300 cursor-pointer border flex flex-col justify-between ${
                    isActive
                      ? 'bg-[#18181d] border-amber-400/80 shadow-[0_0_25px_rgba(245,158,11,0.2)] ring-1 ring-amber-400/30'
                      : isPassed
                      ? 'bg-[#111114] border-zinc-700/80 hover:border-zinc-600'
                      : 'bg-[#0f0f12] border-[#27272a] hover:border-zinc-700'
                  }`}
                >
                  {/* Step Node Header (Number + Node Indicator + Duration) */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      {/* Circle Indicator */}
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-extrabold transition-all duration-200 ${
                          isActive
                            ? 'bg-amber-400 text-black shadow-[0_0_12px_rgba(245,158,11,0.6)] scale-110'
                            : isPassed
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                            : 'bg-zinc-800 text-zinc-400 border border-zinc-700'
                        }`}
                      >
                        {isPassed ? <Check className="w-3.5 h-3.5" /> : stage.stepNumber}
                      </div>

                      <span
                        className={`text-xs font-mono font-semibold transition-colors ${
                          isActive
                            ? 'text-amber-400'
                            : isPassed
                            ? 'text-zinc-300'
                            : 'text-zinc-500 group-hover:text-zinc-300'
                        }`}
                      >
                        {stage.name.split(' ')[0]}
                      </span>
                    </div>

                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-md transition-colors ${
                        isActive
                          ? 'bg-amber-400/20 text-amber-300 border border-amber-400/30 font-semibold'
                          : 'bg-zinc-800/80 text-zinc-400 border border-zinc-700/60'
                      }`}
                    >
                      {duration}
                    </span>
                  </div>

                  {/* Stage Short Title */}
                  <div className="mt-1">
                    <div
                      className={`text-sm font-bold tracking-tight line-clamp-1 transition-colors ${
                        isActive ? 'text-white' : 'text-zinc-300 group-hover:text-zinc-100'
                      }`}
                    >
                      {stage.name}
                    </div>
                    <div className="text-[11px] text-zinc-400 line-clamp-2 mt-1 font-normal leading-relaxed">
                      {stage.summary}
                    </div>
                  </div>

                  {/* Financial & Milestone Indicator Tag */}
                  <div className="mt-3 pt-2.5 border-t border-zinc-800/80 flex items-center justify-between text-[10px] font-mono">
                    {stage.paymentMilestone ? (
                      <span className="text-amber-400/90 font-medium flex items-center gap-1">
                        <Lock className="w-3 h-3 text-amber-400" />
                        <span>{stage.paymentMilestone.percentage}</span>
                      </span>
                    ) : (
                      <span className="text-zinc-400 flex items-center gap-1">
                        <Activity className="w-3 h-3 text-zinc-400" />
                        <span>Execution</span>
                      </span>
                    )}

                    <span
                      className={`text-[9px] uppercase tracking-wider ${
                        isActive ? 'text-amber-400 font-bold' : 'text-zinc-400'
                      }`}
                    >
                      {isActive ? 'Active View' : isPassed ? 'Completed' : 'Upcoming'}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Detailed Stage Deep-Dive Card (Framer Motion AnimatePresence) */}
        <div className="mt-8 sm:mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="rounded-3xl bg-[#111114] border border-[#27272a] overflow-hidden shadow-2xl"
            >
              {/* Stage Banner Header */}
              <div className="p-6 sm:p-8 bg-gradient-to-r from-[#141418] via-[#16161b] to-[#121215] border-b border-[#27272a] relative">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="px-2.5 py-0.5 rounded-md bg-amber-400 text-black text-xs font-mono font-extrabold shadow-sm">
                        PHASE {activeStage.stepNumber}
                      </span>
                      <span className="text-xs font-mono text-zinc-400">
                        {activeTier.name} Sprint Window:
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md bg-zinc-800 text-amber-400 border border-zinc-700 text-xs font-mono font-bold">
                        {getStageDuration(activeStage)}
                      </span>
                      {activeStage.paymentMilestone && (
                        <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-mono font-medium flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>{activeStage.paymentMilestone.percentage} ({activeStage.paymentMilestone.label})</span>
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      Phase {activeStage.stepNumber}: {activeStage.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-400 font-mono">
                      {activeStage.subtitle}
                    </p>
                  </div>

                  {/* Quick Action Button for this phase */}
                  <div className="flex items-center gap-3 flex-shrink-0">
                    {onOpenIntake && (
                      <button
                        onClick={() =>
                          onOpenIntake(`Inquiry from Timeline: Phase ${activeStage.stepNumber} (${activeStage.name})`)
                        }
                        className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs font-mono tracking-wide transition-all shadow-md cursor-pointer flex items-center gap-1.5"
                      >
                        <span>Initiate Project</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* The ALABSGOLD Invariant Rule Highlight */}
                <div className="mt-6 p-4 rounded-xl bg-[#0a0a0d] border border-amber-500/30 flex items-start gap-3 shadow-inner">
                  <div className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 flex-shrink-0 mt-0.5">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-amber-400 font-bold block mb-0.5">
                      THE ALABSGOLD INVARIANT (NON-NEGOTIABLE STUDIO RULE)
                    </span>
                    <p className="text-xs sm:text-sm text-zinc-200 leading-relaxed font-normal">
                      "{activeStage.alabsRule}"
                    </p>
                  </div>
                </div>
              </div>

              {/* Stage Sub-Navigation Tabs */}
              <div className="px-6 sm:px-8 pt-4 pb-0 border-b border-[#27272a] bg-[#0e0e11] flex items-center gap-2 overflow-x-auto scrollbar-none">
                {[
                  { id: 'deliverables' as TabMode, label: 'Core Deliverables', icon: CheckCircle2, count: activeStage.deliverables.length },
                  { id: 'architecture' as TabMode, label: 'Engineering Architecture', icon: Layers },
                  { id: 'artifact' as TabMode, label: 'Technical Artifact', icon: FileCode, badge: activeStage.artifact.language.toUpperCase() },
                  { id: 'governance' as TabMode, label: 'Client Governance & Touchpoints', icon: MessageSquare },
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isCurrent = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-4 py-3 text-xs font-mono font-medium rounded-t-xl transition-all cursor-pointer border-b-2 flex items-center gap-2 whitespace-nowrap ${
                        isCurrent
                          ? 'border-amber-400 text-amber-400 bg-[#16161b]'
                          : 'border-transparent text-zinc-400 hover:text-zinc-200 hover:bg-[#121215]'
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{tab.label}</span>
                      {tab.count !== undefined && (
                        <span className="px-1.5 py-0.2 rounded-full bg-zinc-800 text-[10px] text-zinc-300">
                          {tab.count}
                        </span>
                      )}
                      {tab.badge && (
                        <span className="px-1.5 py-0.2 rounded bg-amber-400/20 text-[9px] text-amber-300 border border-amber-400/30">
                          {tab.badge}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Sub-Tab Content Area */}
              <div className="p-6 sm:p-8 bg-[#111114]">
                {/* 1. DELIVERABLES TAB */}
                {activeTab === 'deliverables' && (
                  <motion.div
                    key="tab-deliverables"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-base font-bold text-white">Stage {activeStage.stepNumber} Deliverables & Handover Units</h4>
                        <p className="text-xs text-zinc-400 mt-0.5">
                          Every deliverable is an immutable engineering artifact verified prior to stage gate progression.
                        </p>
                      </div>
                      <span className="hidden sm:inline-block text-xs font-mono text-zinc-400">
                        {activeStage.deliverables.length} Deliverable Units
                      </span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {activeStage.deliverables.map((deliv, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-2xl bg-[#16161a] border border-[#27272a] hover:border-zinc-700 transition-colors flex items-start gap-3.5"
                        >
                          <div className="w-5 h-5 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3" />
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-semibold text-white">{deliv.title}</span>
                              <span
                                className={`text-[9px] font-mono uppercase px-1.5 py-0.5 rounded border ${
                                  deliv.status === 'Production-Ready'
                                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                                    : deliv.status === 'Deterministic'
                                    ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                                    : 'bg-zinc-800 text-zinc-300 border-zinc-700'
                                }`}
                              >
                                {deliv.status}
                              </span>
                            </div>
                            <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                              {deliv.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {/* 2. ARCHITECTURE TAB */}
                {activeTab === 'architecture' && (
                  <motion.div
                    key="tab-architecture"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div>
                      <h4 className="text-base font-bold text-white">The ALABSGOLD Architectural Difference</h4>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        How disciplined software design principles eliminate technical debt and guarantee long-term ownership.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 gap-3">
                      {activeStage.architecturalHighlights.map((point, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-xl bg-[#16161a] border border-[#27272a] flex items-start gap-3"
                        >
                          <div className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0 mt-2" />
                          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Proprietary Core Framework Callout */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-amber-500/10 via-[#18181d] to-[#141418] border border-amber-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-bold">
                          <Zap className="w-3.5 h-3.5" />
                          <span>PROPELLED BY ALABSGOLD-CORE</span>
                        </div>
                        <p className="text-xs sm:text-sm text-zinc-300 font-normal">
                          Pre-hardened authentication, RBAC, HMAC webhook verification, and telemetry scaffolding compress total engineering time while preserving 100% custom business logic.
                        </p>
                      </div>
                      <div className="text-xs font-mono px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-700 text-zinc-300 flex-shrink-0">
                        Zero Boilerplate Overhead
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 3. TECHNICAL ARTIFACT TAB (TERMINAL VIEWER) */}
                {activeTab === 'artifact' && (
                  <motion.div
                    key="tab-artifact"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="text-base font-bold text-white flex items-center gap-2">
                          <Terminal className="w-4 h-4 text-amber-400" />
                          <span>Stage Artifact: {activeStage.artifact.fileName}</span>
                        </div>
                        <p className="text-xs text-zinc-400 mt-0.5">
                          {activeStage.artifact.explanation}
                        </p>
                      </div>

                      <button
                        onClick={handleCopyCode}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white border border-zinc-700 text-xs font-mono transition-colors cursor-pointer w-fit"
                      >
                        {copiedArtifact ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedArtifact ? 'Copied' : 'Copy Code'}</span>
                      </button>
                    </div>

                    {/* Dark Code Terminal Box */}
                    <div className="rounded-2xl bg-[#08080a] border border-[#27272a] overflow-hidden font-mono text-xs shadow-inner">
                      {/* Terminal Chrome Bar */}
                      <div className="px-4 py-2.5 bg-[#121215] border-b border-[#27272a] flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                          </div>
                          <span className="text-zinc-500 text-[11px] ml-2">
                            {activeStage.artifact.fileName}
                          </span>
                        </div>
                        <span className="text-[10px] text-zinc-500 uppercase tracking-widest">
                          {activeStage.artifact.language}
                        </span>
                      </div>

                      {/* Code Content */}
                      <div className="p-4 sm:p-5 overflow-x-auto text-zinc-300 leading-relaxed max-h-96">
                        <pre className="text-xs font-mono whitespace-pre">{activeStage.artifact.code}</pre>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* 4. CLIENT GOVERNANCE & TOUCHPOINTS TAB */}
                {activeTab === 'governance' && (
                  <motion.div
                    key="tab-governance"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-6"
                  >
                    <div>
                      <h4 className="text-base font-bold text-white">Client Touchpoints & Verification Gate</h4>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        Transparency is continuous. You are never left wondering what stage your platform build is in.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-5 rounded-2xl bg-[#16161a] border border-[#27272a] space-y-2">
                        <div className="text-[10px] font-mono text-amber-400 uppercase tracking-wider font-bold">
                          COMMUNICATION CHANNEL
                        </div>
                        <div className="text-sm font-semibold text-white">
                          {activeStage.clientTouchpoint.channel}
                        </div>
                        <p className="text-xs text-zinc-400 font-normal">
                          Direct collaboration channel with Lead Engineer Alabi Emmanuel.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-[#16161a] border border-[#27272a] space-y-2">
                        <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-bold">
                          CLIENT ACTION & FEEDBACK
                        </div>
                        <div className="text-sm font-semibold text-white">
                          {activeStage.clientTouchpoint.action}
                        </div>
                        <p className="text-xs text-zinc-400 font-normal">
                          Action required by your team to review, inspect, or test drive the deliverable.
                        </p>
                      </div>

                      <div className="p-5 rounded-2xl bg-[#16161a] border border-[#27272a] space-y-2">
                        <div className="text-[10px] font-mono text-blue-400 uppercase tracking-wider font-bold">
                          GOVERNANCE GATE
                        </div>
                        <div className="text-sm font-semibold text-white">
                          {activeStage.clientTouchpoint.governanceGate}
                        </div>
                        <p className="text-xs text-zinc-400 font-normal">
                          Strict checkpoint required before advancing to the next development phase.
                        </p>
                      </div>
                    </div>

                    {/* Financial Milestone Card if applicable */}
                    {activeStage.paymentMilestone && (
                      <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <div className="text-xs font-mono font-bold text-amber-400 flex items-center gap-1.5">
                            <Lock className="w-3.5 h-3.5" />
                            <span>FINANCIAL MILESTONE CHECKPOINT: {activeStage.paymentMilestone.percentage}</span>
                          </div>
                          <div className="text-sm font-bold text-white mt-1">
                            {activeStage.paymentMilestone.label}
                          </div>
                          <p className="text-xs text-zinc-300 mt-0.5">
                            {activeStage.paymentMilestone.condition}
                          </p>
                        </div>

                        <div className="text-xs font-mono px-3 py-2 rounded-xl bg-black/40 border border-amber-500/30 text-amber-300 flex-shrink-0 text-center">
                          50/50 Milestone Model
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>

              {/* Stage Card Footer: Quick Scrubber & Contact Action */}
              <div className="p-5 sm:p-6 bg-[#0e0e11] border-t border-[#27272a] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <span>Stage {activeStage.stepNumber} of 05</span>
                  <span className="text-zinc-600">·</span>
                  <span className="text-zinc-300 font-medium">
                    {activeStageIndex === 0
                      ? 'First Step: Discovery'
                      : activeStageIndex === 4
                      ? 'Final Step: Warranty'
                      : `Next: ${TIMELINE_STAGES[activeStageIndex + 1]?.name}`}
                  </span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={prevStage}
                    disabled={activeStageIndex === 0}
                    className={`px-3 py-2 rounded-xl text-xs font-mono transition-colors flex items-center gap-1 ${
                      activeStageIndex === 0
                        ? 'opacity-40 cursor-not-allowed text-zinc-600 bg-zinc-900 border border-zinc-800'
                        : 'text-zinc-300 hover:text-white bg-[#18181b] hover:bg-zinc-800 border border-[#27272a] cursor-pointer'
                    }`}
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                    <span>Previous</span>
                  </button>

                  <button
                    onClick={nextStage}
                    disabled={activeStageIndex === TIMELINE_STAGES.length - 1}
                    className={`px-4 py-2 rounded-xl text-xs font-mono transition-colors flex items-center gap-1 ${
                      activeStageIndex === TIMELINE_STAGES.length - 1
                        ? 'opacity-40 cursor-not-allowed text-zinc-600 bg-zinc-900 border border-zinc-800'
                        : 'bg-amber-400 hover:bg-amber-300 text-black font-semibold cursor-pointer'
                    }`}
                  >
                    <span>Next Stage</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/${STUDIO_DATA.whatsappNumber}?text=${encodeURIComponent(
                      `Hello Alabi, I am reviewing the ALABSGOLD Digital Infrastructure Timeline (Phase ${activeStage.stepNumber}: ${activeStage.name}) for our project.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-[#18181b] hover:bg-zinc-800 text-zinc-300 hover:text-white border border-[#27272a] hover:border-amber-500/40 transition-colors"
                    title="Direct WhatsApp Question regarding this stage"
                  >
                    <MessageSquare className="w-4 h-4 text-amber-400" />
                  </a>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

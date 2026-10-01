import React, { useState } from 'react';
import { useSEO } from '../hooks/useSEO';
import { FOUNDER_DATA, EXPERIENCES_DATA, CERTIFICATIONS_DATA, STUDIO_DATA } from '../data/content';
import {
  Mail,
  CheckCircle2,
  Copy,
  Check,
  Shield,
  Terminal,
  Activity,
  ArrowRight,
  ExternalLink,
  Award,
  Globe,
  Briefcase,
  GraduationCap,
  Sparkles,
} from 'lucide-react';

interface FounderPageProps {
  onOpenIntake: (context?: string) => void;
}

export const FounderPage: React.FC<FounderPageProps> = ({ onOpenIntake }) => {
  useSEO({
    title: 'Alabi Emmanuel — Founder & Systems Engineer | ALABSGOLD',
    description:
      'Profile of Alabi Emmanuel, founder of ALABSGOLD, 1st-place NiRA-XT national cybersecurity hackathon winner, and full-stack systems engineer.',
    canonicalPath: '/founder',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: FOUNDER_DATA.name,
      alternateName: 'Alabsgold',
      jobTitle: FOUNDER_DATA.role,
      worksFor: {
        '@type': 'Organization',
        name: 'ALABSGOLD',
      },
      email: FOUNDER_DATA.email,
      url: 'https://alabsgold.vercel.app/founder',
      description: FOUNDER_DATA.title,
    },
  });

  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(FOUNDER_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="pt-24 pb-24 bg-white/40 dark:bg-[#09090b]/40 backdrop-blur-md text-slate-900 dark:text-zinc-100 min-h-screen transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Profile Hero: OS 26 Liquid Glass Card */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white/60 dark:bg-zinc-900/40 backdrop-blur-2xl border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.06)] mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-600 dark:text-amber-400">
                <Terminal className="w-3.5 h-3.5" />
                <span>FOUNDER & PRINCIPAL ARCHITECT</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
                {FOUNDER_DATA.name}
              </h1>
              <p className="text-sm font-mono text-amber-600 dark:text-amber-400 font-semibold">
                {FOUNDER_DATA.institution} · {FOUNDER_DATA.location}
              </p>
              <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                "{FOUNDER_DATA.quote}"
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-mono text-slate-500 dark:text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  Kadie Fresh Live Platform Exporter
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  1st Place National Cybersecurity Champion
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  Alluvium (Atlassian Partner) SIWES
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 p-6 rounded-2xl bg-white/80 dark:bg-black/30 backdrop-blur-xl border border-white/50 dark:border-white/10 space-y-3">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-zinc-500">
                Direct Contact Desk
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-white font-mono">
                {FOUNDER_DATA.email}
              </div>
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={handleCopyEmail}
                  className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/10 dark:hover:bg-white/20 text-slate-800 dark:text-zinc-200 text-xs font-mono transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? 'Copied Email' : 'Copy Direct Email'}</span>
                </button>
                <button
                  onClick={() => onOpenIntake('Direct Consultation with Alabi Emmanuel')}
                  className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-semibold text-xs font-mono uppercase tracking-wider transition-all shadow-md cursor-pointer"
                >
                  Book Direct Review
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Narrative Bio & Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Engineering Ethos & Background
            </h2>
            <div className="space-y-4 text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
              {FOUNDER_DATA.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Core Principles
            </h2>
            <div className="space-y-3">
              {FOUNDER_DATA.principles.map((principle) => (
                <div key={principle.title} className="p-4 rounded-2xl bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-sm">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white">{principle.title}</h3>
                  <p className="mt-1 text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Industry Experiences & Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Verified Experience & Roles
            </h2>
            <div className="space-y-4">
              {EXPERIENCES_DATA.map((exp) => (
                <div key={exp.id} className="p-6 rounded-2xl bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-sm space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold text-amber-600 dark:text-amber-400">{exp.period}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-200/60 dark:bg-white/5 text-slate-700 dark:text-zinc-300">{exp.badge}</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                  <div className="text-xs font-semibold text-slate-500 dark:text-zinc-400">{exp.organization}</div>
                  <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Certifications & Assessments
            </h2>
            <div className="space-y-4">
              {CERTIFICATIONS_DATA.map((cert) => (
                <div key={cert.name} className="p-6 rounded-2xl bg-white/60 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-sm space-y-2">
                  <div className="text-xs font-mono text-amber-600 dark:text-amber-400 font-semibold">{cert.date}</div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">{cert.name}</h3>
                  <div className="text-xs text-slate-500 dark:text-zinc-400 font-mono">{cert.issuer} · {cert.status}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

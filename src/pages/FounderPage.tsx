import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
    title: 'Alabi Emmanuel (Alabsgold) — Founder & Systems Engineer | ALABSGOLD',
    description:
      'Profile of Alabi Emmanuel (Alabsgold), 300-level Computer Science student, founder of ALABSGOLD, 1st-place NiRA-XT hackathon winner, and full-stack systems engineer.',
    keywords: [
      'Alabi Emmanuel',
      'Alabsgold',
      'Full Stack Systems Engineer Lagos',
      'NiRA-XT Winner',
      'Alluvium SIWES',
      'Kadie Fresh Founder',
      'Let’s Learn Py Founder',
    ],
    ogType: 'profile',
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
      alumniOf: 'Computer Science Department',
      email: FOUNDER_DATA.email,
      url: 'https://alabsgold.com.ng/founder',
      description: FOUNDER_DATA.title,
    },
  });

  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = (emailText: string) => {
    navigator.clipboard.writeText(emailText);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="pt-28 pb-24 bg-[#09090b] text-[#f4f4f5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Founder Hero Card */}
        <div className="rounded-3xl bg-[#111114] border border-[#27272a] p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Profile & Contact */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="relative">
                <div className="w-36 h-36 rounded-3xl bg-[#18181b] border-2 border-amber-500/50 flex items-center justify-center p-2 shadow-[0_0_30px_rgba(245,158,11,0.2)]">
                  <div className="w-full h-full rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-950 flex flex-col items-center justify-center text-zinc-300">
                    <span className="text-3xl font-extrabold text-amber-400 font-mono tracking-tight">AE</span>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-zinc-500 mt-1 font-semibold">
                      ALABSGOLD
                    </span>
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 px-2.5 py-1 rounded-full bg-emerald-950 border border-emerald-500/50 text-[10px] font-mono text-emerald-400 flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available for Scoping</span>
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-6">
                {FOUNDER_DATA.displayName}
              </h1>
              <p className="text-xs font-mono uppercase tracking-widest text-amber-400 mt-1 font-semibold">
                {FOUNDER_DATA.role}
              </p>
              <p className="text-xs text-zinc-400 font-mono mt-1">
                {FOUNDER_DATA.institution} · {FOUNDER_DATA.location}
              </p>

              {/* Direct Email Box */}
              <div className="mt-6 w-full space-y-2">
                <div className="p-3 rounded-xl bg-[#09090b] border border-[#27272a] flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-300 truncate">
                    <Mail className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    <span className="truncate">{FOUNDER_DATA.email}</span>
                  </div>
                  <button
                    onClick={() => handleCopyEmail(FOUNDER_DATA.email)}
                    className="p-1.5 rounded-lg bg-[#18181b] hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer flex-shrink-0"
                    title="Copy primary studio email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="p-2.5 rounded-xl bg-[#09090b]/60 border border-[#27272a] flex items-center justify-between gap-2 text-[11px] font-mono text-zinc-400">
                  <span className="truncate">Personal: {FOUNDER_DATA.personalEmail}</span>
                  <button
                    onClick={() => handleCopyEmail(FOUNDER_DATA.personalEmail)}
                    className="hover:text-white transition-colors cursor-pointer"
                  >
                    Copy
                  </button>
                </div>
              </div>

              <div className="mt-4 w-full">
                <a
                  href={`mailto:${FOUNDER_DATA.email}`}
                  className="w-full py-3 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Email Alabi Emmanuel</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Right Column: Narrative & Credentials */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#18181b] border border-[#27272a] text-xs font-mono text-zinc-300">
                <Terminal className="w-3.5 h-3.5 text-amber-400" />
                <span>FOUNDER’S ETHOS & THE TRUST GAP</span>
              </div>

              <blockquote className="text-base sm:text-lg font-medium text-zinc-200 border-l-2 border-amber-500 pl-4 italic leading-relaxed">
                "{FOUNDER_DATA.quote}"
              </blockquote>

              <div className="space-y-3.5 text-sm text-zinc-300 leading-relaxed font-normal">
                {FOUNDER_DATA.bio.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Verified Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-zinc-800">
                {FOUNDER_DATA.credentials.map((cred, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-[#09090b] border border-[#27272a]">
                    <div className="text-sm sm:text-base font-extrabold font-mono text-amber-400">
                      {cred.value}
                    </div>
                    <div className="text-[10px] font-mono text-zinc-400 mt-0.5">
                      {cred.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* PROFESSIONAL EXPERIENCE & ROTATIONS */}
        <div className="mt-20">
          <div className="max-w-2xl mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#18181b] border border-[#27272a] text-xs font-mono text-zinc-300 mb-2">
              <Briefcase className="w-3.5 h-3.5 text-amber-400" />
              <span>INDUSTRY & COMMUNITY TRACK RECORD</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white mt-1">
              Professional Experience & Leadership
            </h2>
            <p className="mt-2 text-sm text-zinc-400">
              Direct enterprise partner placements, technical community instruction, and national competition leadership.
            </p>
          </div>

          <div className="space-y-6">
            {EXPERIENCES_DATA.map((exp) => (
              <div
                key={exp.id}
                className="p-7 rounded-3xl bg-[#111114] border border-[#27272a] hover:border-amber-500/40 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-zinc-800">
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {exp.role} · <span className="text-amber-400">{exp.organization}</span>
                    </h3>
                    <div className="text-xs font-mono text-zinc-400 mt-0.5">
                      {exp.period}
                    </div>
                  </div>
                  {exp.badge && (
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 self-start sm:self-auto font-semibold">
                      {exp.badge}
                    </span>
                  )}
                </div>

                <p className="mt-4 text-sm text-zinc-300 leading-relaxed font-normal">
                  {exp.description}
                </p>

                <div className="mt-4 space-y-2">
                  {exp.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-400">
                      <span className="text-amber-400 mt-0.5">›</span>
                      <span className="leading-snug text-zinc-300">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* OFFICIAL CERTIFICATIONS */}
        <div className="mt-20">
          <div className="max-w-2xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#18181b] border border-[#27272a] text-xs font-mono text-zinc-300 mb-2">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>VERIFIED COMPETENCIES</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white mt-1">
              Certifications & Training
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {CERTIFICATIONS_DATA.map((cert, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#111114] border border-[#27272a] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-amber-400 mb-2">
                    <span className="font-semibold">CERT 0{idx + 1}</span>
                    <span className="text-[10px] text-zinc-500">{cert.date}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white leading-snug">
                    {cert.name}
                  </h4>
                  <p className="text-xs font-mono text-zinc-400 mt-1">
                    Issuer: {cert.issuer}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-800 text-[11px] font-mono text-zinc-500 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                  <span className="truncate">{cert.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The 4 Architectural Invariants */}
        <div className="mt-20">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
              ENGINEERING PHILOSOPHY
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-2">
              The Four Architectural Invariants
            </h2>
            <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
              Every system designed under Emmanuel's direction adheres to strict invariants to eliminate fragility and protect customer revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FOUNDER_DATA.principles.map((p, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -3 }}
                className="p-8 rounded-3xl bg-[#111114] border border-[#27272a] hover:border-amber-500/40 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-mono text-xs font-bold text-amber-400">
                    0{idx + 1}
                  </span>
                  <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                    {p.title}
                  </h3>
                </div>
                <p className="text-sm text-zinc-400 leading-relaxed font-normal">
                  {p.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Direct Call to Action */}
        <div className="mt-20 p-10 rounded-3xl bg-[#0e0e12] border border-amber-500/30 text-center relative overflow-hidden shadow-xl">
          <h3 className="text-2xl sm:text-3xl font-bold text-white">
            Schedule a Direct Consultation with Emmanuel
          </h3>
          <p className="mt-3 text-sm text-zinc-400 max-w-xl mx-auto leading-relaxed">
            Discuss your export platform, payment integration challenges, or custom backoffice needs directly with the founder.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onOpenIntake('Direct Consultation with Alabi Emmanuel')}
              className="px-8 py-3.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] cursor-pointer flex items-center gap-2"
            >
              <span>Schedule Technical Review</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={STUDIO_DATA.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-xl bg-[#18181b] hover:bg-zinc-800 text-zinc-200 border border-[#27272a] hover:border-amber-500/40 font-semibold text-xs tracking-wider uppercase transition-all"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

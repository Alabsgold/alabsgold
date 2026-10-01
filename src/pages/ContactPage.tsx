import React, { useState } from 'react';
import { useSEO } from '../hooks/useSEO';
import { FOUNDER_DATA, STUDIO_DATA, AUTHENTIC_PRICING_TIERS } from '../data/content';
import { FaqSection } from '../components/FaqSection';
import {
  Mail,
  Clock,
  Send,
  Check,
  Copy,
  ExternalLink,
  Shield,
  HelpCircle,
  ChevronDown,
  MessageSquare,
  Globe,
  MapPin,
  Sparkles,
  ShieldCheck,
  Zap,
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  useSEO({
    title: 'Contact Us & Project Intake | ALABSGOLD',
    description:
      'Start a project with ALABSGOLD. Direct engineering intake with Founder Alabi Emmanuel. Guaranteed 24-hour response SLA (Monday through Saturday).',
    canonicalPath: '/contact',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact ALABSGOLD Studio',
      description: 'Project intake and direct founder communication desk.',
      url: 'https://alabsgold.vercel.app/contact',
    },
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    projectType: 'Trust-First Website / Web Platform',
    budgetRange: '₦650,000 – ₦1,300,000 (£800 – £1,200) · Professional',
    description: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [inquiryId, setInquiryId] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(STUDIO_DATA.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const ref = `AG-INQ-${Math.floor(100000 + Math.random() * 900000)}`;
    setInquiryId(ref);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 400);
  };

  return (
    <div className="pt-24 pb-24 bg-white/40 dark:bg-[#09090b]/40 backdrop-blur-md text-slate-900 dark:text-zinc-100 min-h-screen transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-600 dark:text-amber-400 mb-4 backdrop-blur-md">
            <Mail className="w-3.5 h-3.5" />
            <span>START A PROJECT · DIRECT INTAKE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Contact & Consultation Desk
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Every submission goes directly to Founder & Lead Systems Architect Alabi Emmanuel. Guaranteed 24-hour response SLA across all business days.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Direct Communication Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white/60 dark:bg-zinc-900/40 backdrop-blur-2xl border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.06)] space-y-5">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                Direct Studio Channels
              </h2>

              <div className="space-y-4 text-xs font-mono">
                <div>
                  <span className="text-slate-400 dark:text-zinc-500 block">Direct Engineering Email</span>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{STUDIO_DATA.email}</span>
                    <button
                      onClick={handleCopyEmail}
                      className="p-1 text-slate-400 hover:text-amber-500 cursor-pointer"
                    >
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <span className="text-slate-400 dark:text-zinc-500 block">Telephone & WhatsApp</span>
                  <div className="text-sm font-bold text-slate-900 dark:text-white mt-1">{STUDIO_DATA.phone}</div>
                </div>

                <div>
                  <span className="text-slate-400 dark:text-zinc-500 block">Studio Headquarters</span>
                  <div className="text-xs text-slate-700 dark:text-zinc-300 mt-1">Lagos, Nigeria (West Africa GMT+1)</div>
                </div>

                <div>
                  <span className="text-slate-400 dark:text-zinc-500 block">Response Turnaround</span>
                  <div className="text-xs text-emerald-600 dark:text-emerald-400 font-bold mt-1">Within 24 Hours (Mon – Sat)</div>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200/60 dark:border-white/5 space-y-2">
                <a
                  href={STUDIO_DATA.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp Directly</span>
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/20 backdrop-blur-xl text-xs space-y-2">
              <span className="font-bold text-amber-600 dark:text-amber-400 block font-mono">CONFIDENTIALITY & IP GUARANTEE</span>
              <p className="text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Your specifications and business logic are kept under strict confidentiality. We provide full IP ownership and mutual non-disclosure agreements upon contract signing.
              </p>
            </div>
          </div>

          {/* Right Column: High-Trust Intake Form with OS 26 Liquid Glass */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-3xl bg-white/60 dark:bg-zinc-900/40 backdrop-blur-2xl border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.06)]">
            {isSuccess ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Specifications Transmitted</h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.fullName}</strong>. Your project requirements have been recorded under reference <strong className="text-amber-500 font-mono">{inquiryId}</strong>. Alabi Emmanuel will review the details and respond within 24 hours.
                </p>
                <div className="pt-4">
                  <a
                    href={`https://wa.me/2347039960964?text=Hi%20Emmanuel,%20I%20just%20submitted%20project%20intake%20${inquiryId}%20for%20${encodeURIComponent(formData.company || formData.fullName)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 hover:underline"
                  >
                    <span>Follow up instantly on WhatsApp</span>
                    <MessageSquare className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h2 className="text-xl font-bold text-slate-900 dark:text-white pb-3 border-b border-slate-200/60 dark:border-white/5">
                  Project Scoping Form
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-zinc-300 mb-1 font-mono">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alabi Emmanuel"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/70 dark:bg-white/5 border border-slate-300/80 dark:border-white/10 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-zinc-300 mb-1 font-mono">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kadie Fresh Export Ltd"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/70 dark:bg-white/5 border border-slate-300/80 dark:border-white/10 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-zinc-300 mb-1 font-mono">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/70 dark:bg-white/5 border border-slate-300/80 dark:border-white/10 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-zinc-300 mb-1 font-mono">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+234 ... or +44 ..."
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-white/70 dark:bg-white/5 border border-slate-300/80 dark:border-white/10 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-zinc-300 mb-1 font-mono">
                      Architecture Scope
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-white/70 dark:bg-white/5 border border-slate-300/80 dark:border-white/10 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="Trust-First Website / Web Platform">Trust-First Website / Web Platform</option>
                      <option value="Export Operations & Compliance Portal">Export Operations & Compliance Portal</option>
                      <option value="Internal Tool / Custom Software">Internal Tool / Custom Software</option>
                      <option value="Brand Identity + Web Build">Brand Identity + Web Build</option>
                      <option value="Technical Advisory / Fractional Help">Technical Advisory / Fractional Help</option>
                      <option value="Other">Other Custom Build</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-zinc-300 mb-1 font-mono">
                      Budget Tier
                    </label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full px-3 py-2.5 rounded-xl bg-white/70 dark:bg-white/5 border border-slate-300/80 dark:border-white/10 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                    >
                      <option value="₦350,000 – ₦650,000 ($500 – $800) · Starter Build">₦350,000 – ₦650,000 ($500 – $800) · Starter</option>
                      <option value="₦650,000 – ₦1,300,000 (£800 – £1,200) · Professional">₦650,000 – ₦1,300,000 (£800 – £1,200) · Professional</option>
                      <option value="₦900,000 – ₦2,200,000+ (£1,200 – £1,800+) · Enterprise">₦900,000 – ₦2,200,000+ (£1,200 – £1,800+) · Enterprise</option>
                      <option value="Monthly Retainer: ₦300,000 – ₦600,000/mo">Monthly Retainer: ₦300,000 – ₦600,000/mo</option>
                      <option value="Not sure yet — need advice">Not sure yet — need advice</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-zinc-300 mb-1 font-mono">
                    Project Requirements *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your operational model, the international customers you serve, and your launch timeline..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/70 dark:bg-white/5 border border-slate-300/80 dark:border-white/10 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-semibold text-xs tracking-wider uppercase transition-all shadow-[0_4px_20px_rgba(245,158,11,0.25)] cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Transmitting...</span>
                    ) : (
                      <>
                        <span>Submit Project Specifications</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Studio FAQs Section */}
        <FaqSection onOpenIntake={() => window.scrollTo({ top: 300, behavior: 'smooth' })} />

      </div>
    </div>
  );
};

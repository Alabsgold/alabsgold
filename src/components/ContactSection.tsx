import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, CheckCircle2, ArrowRight, Send } from 'lucide-react';
import { STUDIO_DATA } from '../data/content';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    serviceNeed: 'Trust Infrastructure',
    description: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  return (
    <section className="relative py-20 sm:py-28 bg-slate-50/40 dark:bg-[#0c0c0f]/40 backdrop-blur-md transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Inquiries & Founder Contact */}
          <div className="lg:col-span-5 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400">
              05 · Direct Consultation Desk
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Let's Scope A Platform That Holds Up Under Scrutiny.
            </h2>

            <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Tell us about your organization and what your clients need to see before they trust you with a deal. We respond with a fixed architectural scope and timeline within 24 hours.
            </p>

            <div className="pt-4 space-y-4 text-sm">
              <div className="flex items-center gap-3 text-slate-700 dark:text-zinc-300">
                <div className="p-2.5 rounded-xl bg-white/70 dark:bg-white/10 border border-white/50 dark:border-white/10 text-amber-600 dark:text-amber-400 shrink-0 backdrop-blur-md">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 dark:text-zinc-500 block">Direct Engineering Email</span>
                  <a href={`mailto:${STUDIO_DATA.email}`} className="font-semibold hover:text-amber-600 dark:hover:text-amber-400 font-mono">
                    {STUDIO_DATA.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-700 dark:text-zinc-300">
                <div className="p-2.5 rounded-xl bg-white/70 dark:bg-white/10 border border-white/50 dark:border-white/10 text-amber-600 dark:text-amber-400 shrink-0 backdrop-blur-md">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 dark:text-zinc-500 block">Direct Telephone</span>
                  <a href={`tel:${STUDIO_DATA.phone.replace(/\s+/g, '')}`} className="font-semibold hover:text-amber-600 dark:hover:text-amber-400 font-mono">
                    {STUDIO_DATA.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-slate-700 dark:text-zinc-300">
                <div className="p-2.5 rounded-xl bg-white/70 dark:bg-white/10 border border-white/50 dark:border-white/10 text-amber-600 dark:text-amber-400 shrink-0 backdrop-blur-md">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 dark:text-zinc-500 block">Studio Headquarters</span>
                  <span className="font-semibold">Lagos, Nigeria (West Africa GMT+1)</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Click-to-Chat Button */}
            <div className="pt-2">
              <a
                href={STUDIO_DATA.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider transition-all shadow-[0_4px_20px_rgba(16,185,129,0.3)] cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp (+234 703 996 0964)</span>
              </a>
              <span className="block text-[11px] text-slate-500 dark:text-zinc-400 mt-2 font-mono">
                Direct founder response · Mon – Sat (24h SLA)
              </span>
            </div>
          </div>

          {/* Right Column: Clean Simple Enquiry Form with OS 26 Liquid Glass */}
          <div className="lg:col-span-7 bg-white/60 dark:bg-zinc-900/40 backdrop-blur-2xl border border-white/40 dark:border-white/10 rounded-3xl p-8 sm:p-10 shadow-[0_8px_32px_0_rgba(0,0,0,0.06)]">
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Enquiry Received
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Alabi Emmanuel has received your project briefing for <strong>{formData.company || 'your organization'}</strong> and will review the specifications within 24 hours.
                </p>
                <div className="pt-4">
                  <a
                    href={`https://wa.me/2347039960964?text=Hi%20Emmanuel,%20I%20just%20submitted%20an%20enquiry%20from%20${encodeURIComponent(formData.company || formData.name)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 hover:underline"
                  >
                    <span>Follow up instantly on WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white pb-3 border-b border-slate-200/60 dark:border-white/5">
                  Request a Formal Consultation
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-700 dark:text-zinc-300 mb-1.5 font-mono">
                      Your Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alabi Emmanuel"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300/80 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-md text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-xs font-semibold text-slate-700 dark:text-zinc-300 mb-1.5 font-mono">
                      Company / Organization *
                    </label>
                    <input
                      id="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Kadie Fresh Export Ltd."
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300/80 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-md text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-700 dark:text-zinc-300 mb-1.5 font-mono">
                      Corporate Work Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300/80 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-md text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="serviceNeed" className="block text-xs font-semibold text-slate-700 dark:text-zinc-300 mb-1.5 font-mono">
                      Primary Service Requirement *
                    </label>
                    <select
                      id="serviceNeed"
                      value={formData.serviceNeed}
                      onChange={(e) => setFormData({ ...formData, serviceNeed: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300/80 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-md text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors"
                    >
                      <option value="Trust Infrastructure">Trust Infrastructure & Export Engine</option>
                      <option value="AI & Workflow Automation">AI & Workflow Automation</option>
                      <option value="Secure Backend Systems">Secure Backend & Payments</option>
                      <option value="Complete Platform Build">Complete Custom Platform Build</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="block text-xs font-semibold text-slate-700 dark:text-zinc-300 mb-1.5 font-mono">
                    Project Scope / What you need *
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Briefly describe what your organization needs, the audience you serve, and your target launch timeline..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300/80 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-md text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-400 transition-all cursor-pointer shadow-[0_4px_20px_rgba(245,158,11,0.3)] disabled:opacity-50"
                  >
                    {submitting ? (
                      <span>Transmitting Briefing...</span>
                    ) : (
                      <>
                        <span>Submit Project Briefing</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>

                <p className="text-[11px] text-slate-400 dark:text-zinc-500 text-center font-mono">
                  Your specifications are treated with strict confidentiality. Direct founder NDA supported upon request.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

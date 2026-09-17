import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
import {
  autoDispatchNotificationEmail,
  generateInquiryId,
  saveInteractionLocally,
  appendScopeToGoogleSheet,
  findOrCreateMasterSheet,
  ProjectScopeSubmission,
} from '../services/googleSheetsService';
import { getAccessToken } from '../lib/googleAuth';

export const ContactPage: React.FC = () => {
  useSEO({
    title: 'Contact Us & Project Intake | ALABSGOLD',
    description:
      'Start a project with ALABSGOLD. Direct engineering intake with Founder Alabi Emmanuel. Guaranteed 24-hour response SLA (Monday through Saturday).',
    keywords: [
      'Contact ALABSGOLD',
      'Hire Web Engineer Lagos',
      'Digital Infrastructure Scoping',
      'Alabi Emmanuel WhatsApp',
      'Custom Software Intake',
    ],
    canonicalPath: '/contact',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Contact ALABSGOLD Studio',
      description: 'Project intake and direct founder communication desk.',
      url: 'https://alabsgold.com.ng/contact',
    },
  });

  const [copiedEmail, setCopiedEmail] = useState(false);

  // Intake Form State based on Section 7
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    projectType: 'Trust-First Website / Web Platform',
    budgetRange: '₦650,000 – ₦1,300,000 (£800 – £1,200) · Professional',
    description: '',
    source: 'Portfolio',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [inquiryId, setInquiryId] = useState('');

  const handleCopyEmail = (emailStr: string) => {
    navigator.clipboard.writeText(emailStr);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const generateMailtoUrl = () => {
    const subject = encodeURIComponent(
      `[ALABSGOLD Scope] ${formData.projectType} - ${formData.company || formData.fullName}`
    );
    const body = encodeURIComponent(
      `ALABSGOLD DIRECT CLIENT INTAKE DISPATCH\n` +
      `========================================\n\n` +
      `INQUIRY REF: ${inquiryId || 'AG-SCOPE-CONTACT'}\n\n` +
      `CLIENT CONTACT:\n` +
      `• Name: ${formData.fullName}\n` +
      `• Company: ${formData.company || 'N/A'}\n` +
      `• Email: ${formData.email}\n` +
      `• Phone/WhatsApp: ${formData.phone}\n` +
      `• Location: ${formData.country || 'N/A'}\n\n` +
      `SCOPE DETAILS:\n` +
      `• Type: ${formData.projectType}\n` +
      `• Budget: ${formData.budgetRange}\n` +
      `• Discovery Source: ${formData.source}\n\n` +
      `REQUIREMENTS:\n` +
      `${formData.description}\n\n` +
      `========================================\n` +
      `Target Desk: ${STUDIO_DATA.email}\n`
    );
    return `mailto:${STUDIO_DATA.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const generatedId = generateInquiryId('AG-SCOPE');
    setInquiryId(generatedId);

    const scopePayload: ProjectScopeSubmission = {
      id: generatedId,
      fullName: formData.fullName,
      email: formData.email,
      company: formData.company,
      phone: formData.phone,
      country: formData.country,
      projectType: formData.projectType,
      budgetRange: formData.budgetRange,
      description: formData.description,
      source: formData.source,
      timestamp: new Date().toISOString(),
    };

    // 1. Buffer in local queue
    saveInteractionLocally({ type: 'scope', payload: scopePayload });

    // 2. Auto-dispatch email directly to alabsgold31@gmail.com without opening external client
    await autoDispatchNotificationEmail('Project Scope', {
      Inquiry_Reference: generatedId,
      Client_Name: formData.fullName,
      Email: formData.email,
      Company: formData.company || 'N/A',
      Phone_WhatsApp: formData.phone || 'N/A',
      Country: formData.country || 'N/A',
      Project_Architecture: formData.projectType,
      Budget_Tier: formData.budgetRange,
      Discovery_Source: formData.source,
      Scope_Details: formData.description,
    });

    // 3. If Google access token exists in memory, append to Google Sheets
    try {
      const token = await getAccessToken();
      if (token) {
        const { spreadsheetId } = await findOrCreateMasterSheet(token);
        await appendScopeToGoogleSheet(spreadsheetId, token, scopePayload);
      }
    } catch (err) {
      console.warn('Queued for Google Sheets sync:', err);
    }

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <div className="pt-28 pb-24 bg-[#09090b] text-[#f4f4f5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-xs font-mono text-amber-400 mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>START A PROJECT · DIRECT FOUNDER INTAKE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's build something credible.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            Tell us about your business and what your customers need to see before they trust you with a deal. We'll scope it, quote it, and build it — fast.
          </p>
        </motion.div>

        {/* Main Grid: Form & Contact Details */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Authentic Intake Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#111114] border border-[#27272a] shadow-xl">
              <div className="flex items-center justify-between pb-6 border-b border-zinc-800 mb-8">
                <div>
                  <h2 className="text-xl font-bold text-white">Project Intake Form</h2>
                  <p className="text-xs text-zinc-400 mt-1 font-mono">
                    Direct dispatch to Founder & Principal Engineer Alabi Emmanuel
                  </p>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/40 text-emerald-400">
                  SLA: &lt;24 hrs (Mon–Sat)
                </span>
              </div>

              {isSuccess ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inquiry Auto-Delivered & Logged</h3>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed font-normal">
                    Thank you, {formData.fullName}. Your scope details have been <strong className="text-white">auto-delivered directly</strong> to Emmanuel's verified inbox at <span className="text-amber-400 font-mono font-bold">{STUDIO_DATA.email}</span> and recorded to our verified engineering registry. No email client required.
                  </p>

                  <div className="p-4 rounded-xl bg-[#09090b] border border-zinc-800 text-xs font-mono text-zinc-400 text-left max-w-md mx-auto space-y-1.5">
                    <div className="flex justify-between items-center pb-1 border-b border-zinc-800">
                      <span className="text-zinc-500">Inquiry Ref:</span>
                      <span className="text-amber-400 font-bold">{inquiryId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Auto-Mail Dispatch:</span>
                      <span className="text-emerald-400 font-bold">✓ Delivered to {STUDIO_DATA.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Security & Registry:</span>
                      <span className="text-emerald-400 font-bold flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5" /> Verified & Logged
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Project Type:</span>
                      <span className="text-white">{formData.projectType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-zinc-500">Target Budget:</span>
                      <span className="text-white">{formData.budgetRange}</span>
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                    <a
                      href={STUDIO_DATA.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Ping on WhatsApp</span>
                    </a>

                    <a
                      href={generateMailtoUrl()}
                      className="px-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-zinc-400 hover:text-white text-xs font-mono transition-all flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Open in Mail App</span>
                    </a>
                  </div>

                  <div className="pt-3">
                    <button
                      onClick={() => {
                        setIsSuccess(false);
                        setFormData({
                          fullName: '',
                          company: '',
                          email: '',
                          phone: '',
                          country: '',
                          projectType: 'Trust-First Website / Web Platform',
                          budgetRange: '₦650,000 – ₦1,300,000 (£800 – £1,200) · Professional',
                          description: '',
                          source: 'Portfolio',
                        });
                      }}
                      className="text-xs font-mono text-zinc-400 hover:text-white underline cursor-pointer"
                    >
                      Send Another Scope or Project Note
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Alabi Emmanuel"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#09090b] border border-[#27272a] text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                        Company / Business Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Kadie Fresh Export Ltd"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#09090b] border border-[#27272a] text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="partner@domain.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#09090b] border border-[#27272a] text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                        WhatsApp / Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+234 ... or +44 ..."
                        className="w-full px-4 py-2.5 rounded-xl bg-[#09090b] border border-[#27272a] text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                        Country / Location
                      </label>
                      <input
                        type="text"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        placeholder="e.g. Nigeria, United Kingdom, USA"
                        className="w-full px-4 py-2.5 rounded-xl bg-[#09090b] border border-[#27272a] text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                        Project Type *
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#09090b] border border-[#27272a] text-sm text-white focus:outline-none focus:border-amber-500 transition-colors cursor-pointer"
                      >
                        <option value="Trust-First Website / Web Platform">Trust-First Website / Web Platform</option>
                        <option value="Export Operations & Compliance Portal">Export Operations & Compliance Portal</option>
                        <option value="Internal Tool / Custom Software">Internal Tool / Custom Software</option>
                        <option value="Brand Identity + Web Build">Brand Identity + Web Build</option>
                        <option value="Technical Advisory / Fractional Help">Technical Advisory / Fractional Help</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                        Budget Range *
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#09090b] border border-[#27272a] text-sm text-white focus:outline-none focus:border-amber-500 transition-colors cursor-pointer"
                      >
                        <option value="₦350,000 – ₦650,000 ($500 – $800) · Starter Build">₦350,000 – ₦650,000 ($500 – $800) · Starter</option>
                        <option value="₦650,000 – ₦1,300,000 (£800 – £1,200) · Professional">₦650,000 – ₦1,300,000 (£800 – £1,200) · Professional</option>
                        <option value="₦900,000 – ₦2,200,000+ (£1,200 – £1,800+) · Enterprise">₦900,000 – ₦2,200,000+ (£1,200 – £1,800+) · Enterprise</option>
                        <option value="Monthly Retainer: ₦300,000 – ₦600,000/mo ($350 – $700/mo)">Monthly Retainer: ₦300,000 – ₦600,000/mo ($350 – $700/mo)</option>
                        <option value="Not sure yet — need advice">Not sure yet — need advice</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                        How did you hear about us?
                      </label>
                      <select
                        value={formData.source}
                        onChange={(e) => setFormData({ ...formData, source: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#09090b] border border-[#27272a] text-sm text-white focus:outline-none focus:border-amber-500 transition-colors cursor-pointer"
                      >
                        <option value="Portfolio / Site">Portfolio / Direct Site</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Twitter / X">Twitter / X</option>
                        <option value="Referral">Referral from Partner</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                      Tell us about the project *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      placeholder="What does your business do, who are your international customers, and what do they need to see before they trust you?"
                      className="w-full px-4 py-3 rounded-xl bg-[#09090b] border border-[#27272a] text-sm text-white focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>

                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 px-1">
                    <span className="flex items-center gap-1.5">
                      <Mail className="w-3.5 h-3.5 text-amber-400" />
                      <span>Direct Quote Destination: <strong className="text-white">{STUDIO_DATA.email}</strong></span>
                    </span>
                    <span className="text-emerald-400">&lt;24h SLA</span>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs font-mono uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Submitting to Founder...</span>
                      ) : (
                        <>
                          <span>Submit Project Scope</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Direct Contacts & WhatsApp Link */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Quick Connect Card */}
            <div className="p-8 rounded-3xl bg-[#111114] border border-amber-500/30 space-y-4">
              <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold">
                <MessageSquare className="w-4 h-4" />
                <span>FASTEST RESPONSE CHANNEL</span>
              </div>
              <h3 className="text-xl font-bold text-white">Chat on WhatsApp</h3>
              <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                Want to quickly run an idea past Emmanuel or check project availability before writing a full scope?
              </p>

              <a
                href={STUDIO_DATA.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs font-mono uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Message {STUDIO_DATA.phone}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <p className="text-[11px] font-mono text-zinc-500 text-center">
                Pre-filled prompt: "Hi Emmanuel, I saw the ALABSGOLD site and I'd like to discuss a project."
              </p>
            </div>

            {/* Direct Email Addresses */}
            <div className="p-8 rounded-3xl bg-[#111114] border border-[#27272a] space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
                DIRECT EMAIL INBOXES
              </span>
              <h3 className="text-lg font-bold text-white">Studio & Founder Emails</h3>
              <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                Send specifications, architectural briefs, and RFPs directly:
              </p>

              {/* Primary */}
              <div className="p-3.5 rounded-xl bg-[#09090b] border border-[#27272a] flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-300 truncate">
                  <Mail className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span className="truncate">{STUDIO_DATA.email}</span>
                </div>
                <button
                  onClick={() => handleCopyEmail(STUDIO_DATA.email)}
                  className="p-1.5 rounded-lg bg-[#18181b] hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer flex-shrink-0"
                  title="Copy email address"
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Secondary */}
              <div className="p-3 rounded-xl bg-[#09090b]/70 border border-[#27272a] flex items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 truncate">
                  <span className="truncate">{STUDIO_DATA.secondaryEmail}</span>
                </div>
                <button
                  onClick={() => handleCopyEmail(STUDIO_DATA.secondaryEmail)}
                  className="p-1.5 rounded-lg bg-[#18181b] hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer flex-shrink-0"
                  title="Copy secondary email"
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Operating Hours & Location */}
            <div className="p-6 rounded-3xl bg-[#111114] border border-[#27272a] space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-semibold flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>STUDIO BASE & AVAILABILITY</span>
              </span>
              <div className="space-y-2 text-xs font-mono text-zinc-300">
                <div className="flex justify-between py-1 border-b border-zinc-800">
                  <span className="text-zinc-400">Headquarters</span>
                  <span className="text-white">Lagos, Nigeria (WAT / GMT+1)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-zinc-800">
                  <span className="text-zinc-400">Operating Schedule</span>
                  <span className="text-white">Monday – Saturday</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-zinc-400">Guaranteed Response SLA</span>
                  <span className="text-amber-400">&lt; 24 Hours</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Integrated FAQ Component using Radix UI Accordion */}
        <div className="mt-28 border-t border-[#27272a] pt-16">
          <FaqSection
            showHeader={true}
            title="Common Client Questions Before Inquiring"
            subtitle="Authoritative answers regarding our engagement models, timeline SLAs, and 50/50 milestone payment schedules."
            className="border-t-0 py-0 sm:py-0 bg-transparent"
          />
        </div>

      </div>
    </div>
  );
};

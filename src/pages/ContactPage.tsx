import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FOUNDER_DATA, FAQS, STUDIO_DATA, AUTHENTIC_PRICING_TIERS } from '../data/content';
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
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [faqCategory, setFaqCategory] = useState<string>('All');
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

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

  const handleCopyEmail = (emailStr: string) => {
    navigator.clipboard.writeText(emailStr);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1200);
  };

  const categories = ['All', 'General', 'Technical', 'Pricing & Process', 'Services'];
  const filteredFaqs =
    faqCategory === 'All' ? FAQS : FAQS.filter((f) => f.category === faqCategory);

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
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto text-emerald-400">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inquiry Received Successfully</h3>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed font-normal">
                    Thank you, {formData.fullName}. Emmanuel will review your project requirements and get back to you at <span className="text-amber-400 font-mono">{formData.email}</span> within 24 hours.
                  </p>
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
                    className="mt-4 px-6 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-white transition-colors cursor-pointer"
                  >
                    Send Another Note
                  </button>
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
                <span>Message +234 810 034 5062</span>
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

        {/* Integrated FAQ Section */}
        <div className="mt-28">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-semibold">
              ANSWERS TO COMMON QUESTIONS
            </span>
            <h2 className="text-3xl font-extrabold text-white mt-2">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFaqCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                  faqCategory === cat
                    ? 'bg-amber-400 text-black font-semibold'
                    : 'bg-[#111114] text-zinc-400 hover:text-white border border-[#27272a]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="space-y-4 max-w-4xl">
            {filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl bg-[#111114] border border-[#27272a] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-base font-semibold text-white">{faq.question}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-zinc-400 transition-transform ${
                        isOpen ? 'rotate-180 text-amber-400' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-zinc-400 leading-relaxed border-t border-zinc-800/60 font-normal">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

import React, { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import {
  X,
  CheckCircle2,
  ShieldCheck,
  Send,
  MessageSquare,
  Mail,
  Copy,
  Check,
} from 'lucide-react';
import { STUDIO_DATA } from '../data/content';

interface IntakeModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const IntakeModal: React.FC<IntakeModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    projectType: preselectedService || 'Trust Infrastructure',
    budgetRange: '₦650,000 – ₦1,300,000 (£800 – £1,200) · Professional',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedQuote, setCopiedQuote] = useState(false);
  const [inquiryId, setInquiryId] = useState('');

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, projectType: preselectedService }));
    }
  }, [preselectedService]);

  const handleCopyQuote = () => {
    const quoteText =
      `ALABSGOLD PROJECT SCOPE DISPATCH\n` +
      `Ref: ${inquiryId || 'AG-SCOPE'}\n` +
      `To: ${STUDIO_DATA.email}\n` +
      `Client: ${formData.fullName} (${formData.company})\n` +
      `Email: ${formData.email} | Phone: ${formData.phone}\n` +
      `Scope: ${formData.projectType}\n` +
      `Budget: ${formData.budgetRange}\n` +
      `Details: ${formData.description}`;
    navigator.clipboard.writeText(quoteText);
    setCopiedQuote(true);
    setTimeout(() => setCopiedQuote(false), 2500);
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

  const handleResetAndClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && handleResetAndClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" />
        
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-2xl bg-white dark:bg-[#121216] border border-slate-200 dark:border-zinc-800 p-6 sm:p-8 text-slate-900 dark:text-zinc-100 shadow-2xl focus:outline-none">
          
          {/* Header */}
          <div className="flex items-start justify-between pb-4 border-b border-slate-200 dark:border-zinc-800">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-1">
                Project Intake & Consultation
              </div>
              <Dialog.Title className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                Request a Formal Proposal
              </Dialog.Title>
              <Dialog.Description className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                Direct dispatch to Lead Systems Architect at <span className="font-semibold text-slate-700 dark:text-zinc-300">{STUDIO_DATA.email}</span>.
              </Dialog.Description>
            </div>

            <Dialog.Close asChild>
              <button
                onClick={handleResetAndClose}
                className="p-2 rounded-lg text-slate-400 hover:text-slate-700 dark:hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </Dialog.Close>
          </div>

          {/* Body Content */}
          {isSuccess ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Specifications Transmitted</h3>
              <p className="text-sm text-slate-600 dark:text-zinc-300 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. Your project requirements for <strong>{formData.company || 'your organization'}</strong> have been logged. Alabi Emmanuel will review the specifications and reply within 24 hours.
              </p>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#18181f] border border-slate-200 dark:border-zinc-800 text-xs font-mono text-left space-y-1.5 max-w-md mx-auto">
                <div className="flex justify-between items-center pb-1.5 border-b border-slate-200 dark:border-zinc-800">
                  <span className="text-slate-500 dark:text-zinc-500">Inquiry Ref:</span>
                  <span className="text-amber-600 dark:text-amber-400 font-bold">{inquiryId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-zinc-500">Dispatch Inbox:</span>
                  <span className="text-slate-900 dark:text-zinc-200">{STUDIO_DATA.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500 dark:text-zinc-500">Selected Scope:</span>
                  <span className="text-slate-900 dark:text-zinc-200">{formData.projectType}</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={`https://wa.me/2347039960964?text=Hi%20Emmanuel,%20I%20just%20submitted%20inquiry%20${inquiryId}%20for%20${encodeURIComponent(formData.company || formData.fullName)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Follow Up on WhatsApp</span>
                </a>

                <button
                  onClick={handleCopyQuote}
                  className="px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 text-xs font-mono cursor-pointer inline-flex items-center gap-1.5 hover:bg-slate-100 dark:hover:bg-zinc-800"
                >
                  {copiedQuote ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedQuote ? 'Copied Specs' : 'Copy Specs'}</span>
                </button>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-2 text-xs font-semibold text-slate-600 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-zinc-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alabi Emmanuel"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-zinc-300 mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="partner@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-zinc-300 mb-1">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kadie Fresh Export Ltd"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-zinc-300 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+234 ... or +44 ..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-zinc-300 mb-1">
                    Architecture Scope
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="Trust Infrastructure">Trust Infrastructure & Export Portal</option>
                    <option value="AI & Automation">AI & Workflow Automation</option>
                    <option value="Secure Backend Systems">Secure Backend & Payments</option>
                    <option value="Complete Platform Build">Complete Custom Platform</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-zinc-300 mb-1">
                    Budget Tier
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="₦350,000 – ₦650,000 ($500 – $800) · Starter">₦350,000 – ₦650,000 ($500 – $800) · Starter</option>
                    <option value="₦650,000 – ₦1,300,000 (£800 – £1,200) · Professional">₦650,000 – ₦1,300,000 (£800 – £1,200) · Professional</option>
                    <option value="₦900,000 – ₦2,200,000+ (£1,200 – £1,800+) · Enterprise">₦900,000 – ₦2,200,000+ (£1,200 – £1,800+) · Enterprise</option>
                    <option value="Monthly Retainer: ₦300,000 – ₦600,000/mo">Monthly Retainer SLA</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-zinc-300 mb-1">
                  Project Details *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="What does your business do, who are your international customers, and what are your launch requirements?"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500 resize-none"
                />
              </div>

              <div className="pt-2 border-t border-slate-200 dark:border-zinc-800 flex items-center justify-between gap-4">
                <span className="text-xs text-slate-500 dark:text-zinc-400 font-mono">
                  SLA: &lt; 24h (Mon–Sat)
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs tracking-wider uppercase transition-colors cursor-pointer disabled:opacity-50 shadow-sm"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>Submit Specifications</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

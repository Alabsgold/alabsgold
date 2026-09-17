import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as Dialog from '@radix-ui/react-dialog';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Clock, Terminal, Send, MessageSquare } from 'lucide-react';
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
    projectType: preselectedService || 'Trust-First Website / Web Platform',
    budgetRange: '₦650,000 – ₦1,300,000 (£800 – £1,200) · Professional',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, projectType: preselectedService }));
    }
  }, [preselectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate reliable transmission to ALABSGOLD intake
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 800);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && handleResetAndClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200" />
        
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#111114] border border-[#27272a] p-6 sm:p-8 text-zinc-100 shadow-2xl focus:outline-none animate-in zoom-in-95 duration-200">
          
          {/* Header */}
          <div className="flex items-start justify-between pb-4 border-b border-[#27272a]">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-amber-400/10 text-amber-400 border border-amber-400/20 text-xs font-mono mb-1">
                <Terminal className="w-3.5 h-3.5" />
                <span>START A PROJECT · ALABSGOLD</span>
              </div>
              <Dialog.Title className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Project Intake & Scoping
              </Dialog.Title>
              <Dialog.Description className="text-xs text-zinc-400 mt-0.5">
                Direct submission to Founder & Lead Engineer Alabi Emmanuel.
              </Dialog.Description>
            </div>

            <Dialog.Close asChild>
              <button
                onClick={handleResetAndClose}
                className="p-2 rounded-xl bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </Dialog.Close>
          </div>

          {/* Body Content */}
          {isSuccess ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">Project Scope Received</h3>
              <p className="text-sm text-zinc-300 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-amber-400 font-semibold">{formData.fullName}</span>. 
                Emmanuel will personally review your technical scope and get back to you at{' '}
                <span className="text-white font-mono text-xs">{formData.email}</span> within 24 hours.
              </p>

              <div className="p-4 rounded-xl bg-[#18181b] border border-[#27272a] text-xs font-mono text-zinc-400 text-left space-y-1.5 max-w-md mx-auto">
                <div>Company: <span className="text-zinc-200">{formData.company}</span></div>
                <div>Project: <span className="text-zinc-200">{formData.projectType}</span></div>
                <div>Budget: <span className="text-zinc-200">{formData.budgetRange}</span></div>
                <div>Direct Dispatch: <span className="text-amber-400">{STUDIO_DATA.email}</span></div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={STUDIO_DATA.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Also Message on WhatsApp</span>
                </a>
                <button
                  onClick={handleResetAndClose}
                  className="px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-mono text-xs cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              
              {/* Row 1: Name & Work Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alabi Emmanuel"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#09090b] border border-[#27272a] text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="partner@domain.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#09090b] border border-[#27272a] text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              {/* Company & WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1">
                    Company / Business Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kadie Fresh Export Ltd"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#09090b] border border-[#27272a] text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1">
                    WhatsApp / Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+234 ... or +44 ..."
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#09090b] border border-[#27272a] text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors"
                  />
                </div>
              </div>

              {/* Project Type & Budget Range */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#09090b] border border-[#27272a] text-xs text-white focus:outline-none focus:border-amber-500 transition-colors cursor-pointer"
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
                  <label className="block text-xs font-mono text-zinc-400 mb-1">
                    Budget Range *
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-[#09090b] border border-[#27272a] text-xs text-white focus:outline-none focus:border-amber-500 transition-colors cursor-pointer"
                  >
                    <option value="₦350,000 – ₦650,000 ($500 – $800) · Starter Build">₦350,000 – ₦650,000 ($500 – $800) · Starter</option>
                    <option value="₦650,000 – ₦1,300,000 (£800 – £1,200) · Professional">₦650,000 – ₦1,300,000 (£800 – £1,200) · Professional</option>
                    <option value="₦900,000 – ₦2,200,000+ (£1,200 – £1,800+) · Enterprise">₦900,000 – ₦2,200,000+ (£1,200 – £1,800+) · Enterprise</option>
                    <option value="Monthly Retainer: ₦300,000 – ₦600,000/mo ($350 – $700/mo)">Monthly Retainer: ₦300,000 – ₦600,000/mo</option>
                    <option value="Not sure yet — need advice">Not sure yet — need advice</option>
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1">
                  Tell us about the project *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="What does your business do, who are your international customers, and what do they need to see before they trust you?"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#09090b] border border-[#27272a] text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                />
              </div>

              {/* Security & Confidentiality Notice */}
              <div className="flex items-center gap-2 text-[11px] text-zinc-500 font-mono">
                <ShieldCheck className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>50% commitment deposit, 50% on QA. 30-day post-launch warranty included.</span>
              </div>

              {/* Submit Button */}
              <div className="pt-3 border-t border-[#27272a] flex items-center justify-between gap-4">
                <span className="text-xs text-zinc-400 font-mono">
                  SLA: &lt; 24h (Mon–Sat)
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-semibold text-xs tracking-wider uppercase transition-all shadow-[0_0_20px_rgba(245,158,11,0.25)] cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Scope...</span>
                  ) : (
                    <>
                      <span>Submit Project Scope</span>
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

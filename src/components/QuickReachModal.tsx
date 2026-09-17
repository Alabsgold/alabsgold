import React, { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import {
  X,
  Send,
  CheckCircle2,
  Sparkles,
  MessageSquare,
  Star,
  ShieldCheck,
  Mail,
  Zap,
} from 'lucide-react';
import {
  autoDispatchNotificationEmail,
  generateInquiryId,
  saveInteractionLocally,
  appendInteractionToGoogleSheet,
  findOrCreateMasterSheet,
  QuickInteractionSubmission,
} from '../services/googleSheetsService';
import { getAccessToken } from '../lib/googleAuth';
import { STUDIO_DATA } from '../data/content';
import { AlabsgoldLogo } from './AlabsgoldLogo';

interface QuickReachModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: 'Service Scoping' | 'Product Inquiry' | 'Client Review' | 'Quick Question' | 'Advisory';
  defaultSubject?: string;
}

export const QuickReachModal: React.FC<QuickReachModalProps> = ({
  isOpen,
  onClose,
  defaultCategory = 'Quick Question',
  defaultSubject = '',
}) => {
  const [category, setCategory] = useState<'Service Scoping' | 'Product Inquiry' | 'Client Review' | 'Quick Question' | 'Advisory'>(defaultCategory);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [subject, setSubject] = useState(defaultSubject);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState<number>(5);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [inquiryId, setInquiryId] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const generatedId = generateInquiryId('AG-REACH');
    setInquiryId(generatedId);

    const payload: QuickInteractionSubmission = {
      id: generatedId,
      category,
      name,
      contact,
      subject: subject || `${category} on ALABSGOLD`,
      message,
      rating: category === 'Client Review' ? rating : undefined,
      timestamp: new Date().toISOString(),
    };

    // 1. Save locally
    saveInteractionLocally({ type: 'interaction', payload });

    // 2. Auto-dispatch email directly to alabsgold31@gmail.com
    await autoDispatchNotificationEmail('Quick Interaction', {
      Interaction_ID: generatedId,
      Category: category,
      Name: name,
      Contact_Info: contact,
      Subject: subject,
      Message: message,
      Review_Rating: category === 'Client Review' ? `${rating} Stars` : 'N/A',
    });

    // 3. If Google token available, sync to Google Sheets immediately
    try {
      const token = await getAccessToken();
      if (token) {
        const { spreadsheetId } = await findOrCreateMasterSheet(token);
        await appendInteractionToGoogleSheet(spreadsheetId, token, payload);
      }
    } catch (sheetErr) {
      console.warn('Queued for background Sheets sync:', sheetErr);
    }

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleResetAndClose = () => {
    setIsSuccess(false);
    setName('');
    setContact('');
    setSubject('');
    setMessage('');
    onClose();
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && handleResetAndClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200" />
        
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-3xl bg-[#111114] border border-[#27272a] p-6 sm:p-8 text-zinc-100 shadow-2xl focus:outline-none animate-in zoom-in-95 duration-200">
          
          {/* Header */}
          <div className="flex items-start justify-between pb-4 border-b border-[#27272a]">
            <div className="flex items-center gap-3">
              <AlabsgoldLogo variant="mark" size="md" withStatus={true} />
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-amber-400/10 text-amber-400 border border-amber-400/20 text-xs font-mono mb-1">
                  <Zap className="w-3.5 h-3.5" />
                  <span>QUICK REACH OUT & FEEDBACK</span>
                </div>
                <Dialog.Title className="text-xl font-bold text-white tracking-tight">
                  Reach Out Directly to Founder
                </Dialog.Title>
                <Dialog.Description className="text-xs text-zinc-400 mt-0.5">
                  Direct dispatch to lead engineer at <span className="text-amber-400 font-mono">alabsgold31@gmail.com</span>.
                </Dialog.Description>
              </div>
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
              <h3 className="text-xl font-bold text-white">Message Delivered Automatically</h3>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="text-amber-400 font-semibold">{name}</span>! Your message has been auto-delivered directly to Emmanuel's inbox without needing an external mail application.
              </p>

              <div className="p-4 rounded-xl bg-[#18181b] border border-[#27272a] text-xs font-mono text-zinc-400 text-left space-y-1.5 max-w-sm mx-auto">
                <div className="flex justify-between">
                  <span>Tracking Ref:</span>
                  <span className="text-amber-400 font-bold">{inquiryId}</span>
                </div>
                <div className="flex justify-between">
                  <span>Auto-Mail Target:</span>
                  <span className="text-white">alabsgold31@gmail.com</span>
                </div>
                <div className="flex justify-between">
                  <span>Security & Registry:</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Verified & Logged
                  </span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
                <a
                  href={STUDIO_DATA.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs font-mono uppercase tracking-wider transition-all flex items-center gap-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Also Ping on WhatsApp</span>
                </a>
                <button
                  onClick={handleResetAndClose}
                  className="px-4 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 font-mono text-xs cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              
              {/* Category selector */}
              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1.5">
                  Interaction Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {(
                    [
                      'Quick Question',
                      'Service Scoping',
                      'Product Inquiry',
                      'Client Review',
                      'Advisory',
                    ] as const
                  ).map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setCategory(cat)}
                      className={`px-3 py-2 rounded-xl text-[11px] font-mono transition-all text-center cursor-pointer border ${
                        category === cat
                          ? 'bg-amber-400 text-black border-amber-400 font-bold shadow-sm'
                          : 'bg-[#09090b] border-[#27272a] text-zinc-400 hover:text-white'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Star Rating for Client Review */}
              {category === 'Client Review' && (
                <div className="p-3 rounded-xl bg-[#09090b] border border-amber-500/30 flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-300">Experience Rating:</span>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="p-1 text-amber-400 hover:scale-110 transition-transform cursor-pointer"
                      >
                        <Star
                          className={`w-5 h-5 ${
                            star <= rating ? 'fill-amber-400 text-amber-400' : 'text-zinc-600'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Name & Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alabi Emmanuel"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#09090b] border border-[#27272a] text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-zinc-400 mb-1">
                    Email or WhatsApp *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="email@domain.com or +234..."
                    value={contact}
                    onChange={(e) => setContact(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-[#09090b] border border-[#27272a] text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Subject / Item */}
              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1">
                  Subject or Project / Platform Reference
                </label>
                <input
                  type="text"
                  placeholder="e.g. Kadie Fresh architecture, VPS deployment, or general quote"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#09090b] border border-[#27272a] text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-mono text-zinc-400 mb-1">
                  Message / Feedback / Requirements *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Write your note here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-[#09090b] border border-[#27272a] text-xs text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500 resize-none"
                />
              </div>

              {/* Auto dispatch badge */}
              <div className="p-2.5 rounded-xl bg-[#09090b] border border-[#27272a] flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>Auto-dispatches to: <strong className="text-white">alabsgold31@gmail.com</strong></span>
                </span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Secure & Logged
                </span>
              </div>

              {/* Submit */}
              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-zinc-500 font-mono">
                  No email app required · Instant push
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs font-mono uppercase tracking-wider transition-all shadow-md flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Delivering...</span>
                  ) : (
                    <>
                      <span>Send Quick Reach</span>
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

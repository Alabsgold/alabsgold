import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import {
  X,
  ShieldCheck,
  FileText,
  Lock,
  Globe2,
  Mail,
  Scale,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
} from 'lucide-react';

interface PrivacyRightsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCookiePreferences?: () => void;
}

export const PrivacyRightsModal: React.FC<PrivacyRightsModalProps> = ({
  isOpen,
  onClose,
  onOpenCookiePreferences,
}) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md animate-in fade-in duration-200" />

        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#111114] border border-amber-500/40 p-6 sm:p-8 text-zinc-100 shadow-2xl focus:outline-none animate-in zoom-in-95 duration-200">
          
          {/* Header */}
          <div className="flex items-start justify-between pb-4 border-b border-[#27272a]">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 text-xs font-mono mb-1">
                <Scale className="w-3.5 h-3.5" />
                <span>STATUTORY PRIVACY GOVERNANCE</span>
              </div>
              <Dialog.Title className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                NDPR & GDPR Privacy & Data Rights Notice
              </Dialog.Title>
              <Dialog.Description className="text-xs text-zinc-400 mt-1">
                Binding data subject rights, legal obligations, and governance practices of ALABSGOLD Digital Studio under the Nigeria Data Protection Act (NDPA 2023) and Regulation (EU) 2016/679.
              </Dialog.Description>
            </div>

            <Dialog.Close asChild>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </Dialog.Close>
          </div>

          <div className="mt-6 space-y-6 text-xs text-zinc-300 leading-relaxed font-sans">
            
            {/* Section 1: Data Controller Identification */}
            <div className="p-4 rounded-2xl bg-[#18181b] border border-zinc-800 space-y-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-amber-400" />
                <span>1. Data Controller Identification</span>
              </h4>
              <p className="text-zinc-400">
                The Data Controller responsible for your personal data on this website and associated engineering scoping services is:
              </p>
              <div className="p-3 rounded-xl bg-[#0e0e11] border border-zinc-800 font-mono text-[11px] text-zinc-300 space-y-1">
                <div><strong className="text-white">Organization:</strong> ALABSGOLD Digital Studio (Web Engineering & Digital Infrastructure)</div>
                <div><strong className="text-white">Founder & Principal:</strong> Alabi Emmanuel Gold</div>
                <div><strong className="text-white">Jurisdiction & Headquarters:</strong> Lagos State, Federal Republic of Nigeria</div>
                <div><strong className="text-white">Official Correspondence:</strong> <span className="text-amber-400">alabsgold31@gmail.com</span> / <span className="text-amber-400">alabifemigold31@gmail.com</span></div>
              </div>
            </div>

            {/* Section 2: Statutory Legal Framework */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Scale className="w-4 h-4 text-amber-400" />
                <span>2. Applicable Statutory Frameworks</span>
              </h4>
              <p>
                Because ALABSGOLD is an engineering studio headquartered in Nigeria with high-growth international clients throughout the United Kingdom, European Union, and North America, we align our operations to the highest standard among intersecting regulations:
              </p>
              <ul className="list-disc list-inside space-y-1.5 pl-2 text-zinc-400">
                <li>
                  <strong className="text-white">Nigeria Data Protection Regulation (NDPR) & NDPA 2023:</strong> Enacted by the Federal Republic of Nigeria, regulated by the Nigeria Data Protection Commission (NDPC).
                </li>
                <li>
                  <strong className="text-white">General Data Protection Regulation (EU GDPR 2016/679 & UK GDPR):</strong> Governing European Economic Area and British users, enforcing transparent consent and cross-border transfer safeguards.
                </li>
                <li>
                  <strong className="text-white">ePrivacy Directive (2002/58/EC):</strong> Directing rules on cookie placement and terminal equipment storage.
                </li>
              </ul>
            </div>

            {/* Section 3: Data Subject Rights */}
            <div className="space-y-3">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>3. Your Inviolable Rights as a Data Subject</span>
              </h4>
              <p>
                Under NDPR Regulation 2.1 & 3.1 and GDPR Articles 12–23, you possess the following actionable rights without cost or penalty:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                
                <div className="p-3.5 rounded-xl bg-[#18181b] border border-zinc-800 space-y-1">
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Right to Access (GDPR Art. 15 / NDPR)</span>
                  </div>
                  <p className="text-[11px] text-zinc-400">
                    You may request confirmation of whether your data is processed, and receive a complete copy of all interaction entries.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#18181b] border border-zinc-800 space-y-1">
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Right to Erasure / "Be Forgotten"</span>
                  </div>
                  <p className="text-[11px] text-zinc-400">
                    You can demand permanent deletion of your project scoping records and contact details from all studio registries.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#18181b] border border-zinc-800 space-y-1">
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Right to Rectification (GDPR Art. 16)</span>
                  </div>
                  <p className="text-[11px] text-zinc-400">
                    Prompt correction of inaccurate, obsolete, or misleading project details or contact parameters.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#18181b] border border-zinc-800 space-y-1">
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Right to Data Portability</span>
                  </div>
                  <p className="text-[11px] text-zinc-400">
                    Receive your scoped data in a structured, standard, machine-readable format (JSON or CSV export).
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#18181b] border border-zinc-800 space-y-1">
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Right to Object & Revoke Consent</span>
                  </div>
                  <p className="text-[11px] text-zinc-400">
                    Revoke permission for non-essential cookies, diagnostic telemetry, or future communications at any time.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#18181b] border border-zinc-800 space-y-1">
                  <div className="font-bold text-white flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    <span>Right to Lodge a Complaint</span>
                  </div>
                  <p className="text-[11px] text-zinc-400">
                    File formal complaints directly with the Nigeria Data Protection Commission (NDPC) or your regional European DPA.
                  </p>
                </div>

              </div>
            </div>

            {/* Section 4: Lawful Bases for Processing */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <FileText className="w-4 h-4 text-amber-400" />
                <span>4. Lawful Bases for Processing</span>
              </h4>
              <p>
                We only process personal data when backed by a recognized lawful basis under NDPR Reg. 2.2 and GDPR Art. 6:
              </p>
              <div className="p-3 rounded-xl bg-[#18181b] border border-zinc-800 space-y-2 text-[11px]">
                <div>
                  <strong className="text-white">A. Consent (NDPR 2.2(a) / GDPR Art. 6(1)(a)):</strong> Used for non-essential functional and diagnostic performance cookies, and when you opt in to receive architectural follow-ups.
                </div>
                <div>
                  <strong className="text-white">B. Contractual Performance (NDPR 2.2(b) / GDPR Art. 6(1)(b)):</strong> Used to prepare formal engineering project proposals, budget estimates, milestone contracts, and deliver custom code.
                </div>
                <div>
                  <strong className="text-white">C. Legitimate Interests (NDPR 2.2(e) / GDPR Art. 6(1)(f)):</strong> Strictly limited to platform security, DDoS prevention, CSRF mitigation, and maintaining service stability.
                </div>
              </div>
            </div>

            {/* Section 5: Cross-Border Data Transfers */}
            <div className="space-y-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Lock className="w-4 h-4 text-amber-400" />
                <span>5. Security Invariants & Cross-Border Safeguards</span>
              </h4>
              <p className="text-zinc-400">
                All data transmission utilizes TLS 1.3 transport encryption. ALABSGOLD does not maintain third-party advertising SDKs, does not sell or rent customer data, and conducts cross-border cloud processing (e.g. Firebase, Cloud Run) strictly using certified standard contractual clauses with ISO 27001/SOC 2 Type II compliant providers.
              </p>
            </div>

            {/* Section 6: How to Exercise Your Rights */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-2">
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400" />
                <span>6. How to Exercise Your Data Rights</span>
              </h4>
              <p className="text-xs text-zinc-300 leading-relaxed">
                To request an export of your information, update your contact details, or request permanent erasure under the Right to be Forgotten, simply email:
              </p>
              <div className="font-mono text-xs font-semibold text-amber-300">
                Email: alabsgold31@gmail.com (Subject: Formal NDPR/GDPR Request)
              </div>
              <p className="text-[11px] text-zinc-400">
                Statutory response timeframe: within 30 days of receipt, free of charge.
              </p>
            </div>

            {/* Supervisory Authority Contact */}
            <div className="p-3.5 rounded-xl bg-[#0e0e11] border border-zinc-800 text-[11px] text-zinc-400 space-y-1">
              <div className="font-bold text-zinc-300">Supervisory Authority Contacts:</div>
              <div><strong className="text-zinc-300">Nigeria:</strong> Nigeria Data Protection Commission (NDPC) — Email: info@ndpc.gov.ng · Web: www.ndpc.gov.ng</div>
              <div><strong className="text-zinc-300">European Union:</strong> European Data Protection Board (EDPB) · Web: edpb.europa.eu</div>
            </div>

          </div>

          {/* Footer */}
          <div className="mt-6 pt-4 border-t border-[#27272a] flex flex-col sm:flex-row items-center justify-between gap-3">
            {onOpenCookiePreferences && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenCookiePreferences();
                }}
                className="text-xs font-mono text-amber-400 hover:text-amber-300 underline underline-offset-2 cursor-pointer"
              >
                Manage Cookie Permissions Now →
              </button>
            )}

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-mono text-xs cursor-pointer ml-auto"
            >
              Acknowledge & Close
            </button>
          </div>

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

import React, { useState, useEffect } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import {
  X,
  Cookie,
  ShieldCheck,
  Check,
  Lock,
  FileText,
  Table,
  CheckCircle2,
  AlertCircle,
  RotateCcw,
  Sliders,
  ExternalLink,
} from 'lucide-react';
import {
  getCookiePreferences,
  saveCookiePreferences,
  acceptAllCookies,
  rejectNonEssentialCookies,
  resetCookiePreferences,
  COOKIE_INVENTORY,
  CookiePreferences,
  CURRENT_POLICY_VERSION,
} from '../services/cookieConsentService';

interface CookiePreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenPrivacyNotice: () => void;
}

export const CookiePreferencesModal: React.FC<CookiePreferencesModalProps> = ({
  isOpen,
  onClose,
  onOpenPrivacyNotice,
}) => {
  const [preferences, setPreferences] = useState<CookiePreferences>(getCookiePreferences());
  const [activeTab, setActiveTab] = useState<'categories' | 'inventory'>('categories');
  const [saveToast, setSaveToast] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setPreferences(getCookiePreferences());
      setSaveToast(false);
    }
  }, [isOpen]);

  const handleToggle = (category: 'functional' | 'analytics' | 'marketing') => {
    setPreferences((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const handleSavePreferences = () => {
    saveCookiePreferences({
      functional: preferences.functional,
      analytics: preferences.analytics,
      marketing: preferences.marketing,
    });
    setSaveToast(true);
    setTimeout(() => {
      setSaveToast(false);
      onClose();
    }, 1200);
  };

  const handleAcceptAll = () => {
    const updated = acceptAllCookies();
    setPreferences(updated);
    setSaveToast(true);
    setTimeout(() => {
      setSaveToast(false);
      onClose();
    }, 1200);
  };

  const handleRejectNonEssential = () => {
    const updated = rejectNonEssentialCookies();
    setPreferences(updated);
    setSaveToast(true);
    setTimeout(() => {
      setSaveToast(false);
      onClose();
    }, 1200);
  };

  const handleReset = () => {
    resetCookiePreferences();
    setPreferences(getCookiePreferences());
    onClose();
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md animate-in fade-in duration-200" />

        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#111114] border border-amber-500/40 p-6 sm:p-8 text-zinc-100 shadow-2xl focus:outline-none animate-in zoom-in-95 duration-200">
          
          {/* Header */}
          <div className="flex items-start justify-between pb-4 border-b border-[#27272a]">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/25 text-xs font-mono mb-1">
                <Cookie className="w-3.5 h-3.5" />
                <span>NDPR & GDPR COOKIE PREFERENCE CENTER</span>
              </div>
              <Dialog.Title className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Cookie & Storage Permissions
              </Dialog.Title>
              <Dialog.Description className="text-xs text-zinc-400 mt-1">
                Manage your granular consent preferences in accordance with the Nigeria Data Protection Regulation (NDPR / NDPA 2023) and the EU/UK General Data Protection Regulation (GDPR).
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

          {/* Nav Tabs: Category Toggles vs Detailed Inventory */}
          <div className="flex items-center gap-2 mt-5 border-b border-[#27272a] pb-3 text-xs font-mono">
            <button
              onClick={() => setActiveTab('categories')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'categories'
                  ? 'bg-amber-400/10 text-amber-400 border border-amber-400/25 font-semibold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Consent Categories</span>
            </button>

            <button
              onClick={() => setActiveTab('inventory')}
              className={`px-3 py-1.5 rounded-lg transition-colors cursor-pointer flex items-center gap-1.5 ${
                activeTab === 'inventory'
                  ? 'bg-amber-400/10 text-amber-400 border border-amber-400/25 font-semibold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <Table className="w-3.5 h-3.5" />
              <span>Full Cookie Ledger ({COOKIE_INVENTORY.length})</span>
            </button>
          </div>

          {/* Toast Notice */}
          {saveToast && (
            <div className="mt-4 p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-xs text-emerald-300 flex items-center gap-2 animate-in fade-in">
              <CheckCircle2 className="w-4 h-4 flex-shrink-0 text-emerald-400" />
              <span>Your privacy & cookie preferences have been registered securely.</span>
            </div>
          )}

          {/* TAB 1: Granular Categories */}
          {activeTab === 'categories' && (
            <div className="mt-5 space-y-4">
              
              {/* Strictly Necessary (Always Active) */}
              <div className="p-4 rounded-2xl bg-[#18181b] border border-zinc-800 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      <Lock className="w-3.5 h-3.5" />
                    </span>
                    <h4 className="text-sm font-bold text-white">
                      Strictly Necessary / Technical Invariants
                    </h4>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[11px] font-mono font-semibold">
                    Always Active
                  </span>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  These cookies and local storage tokens are essential for core website functionality, transport security (CSRF token mitigation, cryptographic session state), and storing your cookie preferences. They cannot be disabled.
                </p>
                <div className="text-[11px] font-mono text-zinc-500 pt-1">
                  Legal Basis: GDPR Art. 6(1)(f) / NDPR Reg. 2.1(a) (Legitimate interest & statutory compliance).
                </div>
              </div>

              {/* Functional Cookies */}
              <div className="p-4 rounded-2xl bg-[#18181b] border border-zinc-800 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
                      <Sliders className="w-3.5 h-3.5" />
                    </span>
                    <h4 className="text-sm font-bold text-white">
                      Functional & User Experience
                    </h4>
                  </div>
                  
                  {/* Custom Toggle Switch */}
                  <button
                    type="button"
                    role="switch"
                    aria-checked={preferences.functional}
                    onClick={() => handleToggle('functional')}
                    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      preferences.functional ? 'bg-amber-400' : 'bg-zinc-700'
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-black shadow ring-0 transition duration-200 ease-in-out ${
                        preferences.functional ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Enables the website to remember your personal interface choices, such as suppressing the cinematic introduction once seen and saving sound effect mute/unmute preferences across visits.
                </p>
                <div className="text-[11px] font-mono text-zinc-500 pt-1">
                  Legal Basis: Explicit Consent (NDPR & GDPR Art. 6(1)(a)).
                </div>
              </div>

              {/* Analytics & Performance */}
              <div className="p-4 rounded-2xl bg-[#18181b] border border-zinc-800 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      <ShieldCheck className="w-3.5 h-3.5" />
                    </span>
                    <h4 className="text-sm font-bold text-white">
                      Analytics & Diagnostic Monitoring
                    </h4>
                  </div>
                  
                  <button
                    type="button"
                    role="switch"
                    aria-checked={preferences.analytics}
                    onClick={() => handleToggle('analytics')}
                    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      preferences.analytics ? 'bg-amber-400' : 'bg-zinc-700'
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-black shadow ring-0 transition duration-200 ease-in-out ${
                        preferences.analytics ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Collects anonymous, aggregate metrics regarding page load speed, render latency, and frontend error traces. We do not correlate this with personal identifiers, and we never share diagnostic telemetry with external ad networks.
                </p>
                <div className="text-[11px] font-mono text-zinc-500 pt-1">
                  Legal Basis: Explicit Consent (NDPR & GDPR Art. 6(1)(a)).
                </div>
              </div>

              {/* Marketing & Referral Attribution */}
              <div className="p-4 rounded-2xl bg-[#18181b] border border-zinc-800 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20">
                      <FileText className="w-3.5 h-3.5" />
                    </span>
                    <h4 className="text-sm font-bold text-white">
                      Referral & Consultation Attribution
                    </h4>
                  </div>
                  
                  <button
                    type="button"
                    role="switch"
                    aria-checked={preferences.marketing}
                    onClick={() => handleToggle('marketing')}
                    className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                      preferences.marketing ? 'bg-amber-400' : 'bg-zinc-700'
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-black shadow ring-0 transition duration-200 ease-in-out ${
                        preferences.marketing ? 'translate-x-5' : 'translate-x-0'
                      }`}
                    />
                  </button>
                </div>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Helps us evaluate which engineering publications, partner networks, or channels referred prospective clients when submitting project scoping requests.
                </p>
                <div className="text-[11px] font-mono text-zinc-500 pt-1">
                  Legal Basis: Explicit Consent (NDPR & GDPR Art. 6(1)(a)).
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: Full Technical Ledger Table */}
          {activeTab === 'inventory' && (
            <div className="mt-5 space-y-3">
              <p className="text-xs text-zinc-400 leading-relaxed">
                Full transparency disclosure per Article 13 of the GDPR and Section 2.1 of the Nigeria Data Protection Regulation:
              </p>

              <div className="border border-zinc-800 rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs text-zinc-300">
                    <thead className="bg-[#18181b] text-zinc-400 font-mono text-[11px] uppercase border-b border-zinc-800">
                      <tr>
                        <th className="p-3">Name / Key</th>
                        <th className="p-3">Category</th>
                        <th className="p-3">Storage Type</th>
                        <th className="p-3">Lifespan</th>
                        <th className="p-3">Purpose & Legal Ground</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-800/60 font-mono text-[11px]">
                      {COOKIE_INVENTORY.map((item, idx) => (
                        <tr key={idx} className="hover:bg-zinc-800/30 transition-colors">
                          <td className="p-3 font-semibold text-white whitespace-nowrap">
                            {item.name}
                          </td>
                          <td className="p-3 whitespace-nowrap">
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] ${
                                item.category === 'necessary'
                                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                  : item.category === 'functional'
                                  ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                                  : item.category === 'analytics'
                                  ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                                  : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                              }`}
                            >
                              {item.category}
                            </span>
                          </td>
                          <td className="p-3 text-zinc-400 whitespace-nowrap">
                            {item.type}
                          </td>
                          <td className="p-3 text-zinc-400 whitespace-nowrap">
                            {item.lifespan}
                          </td>
                          <td className="p-3 text-zinc-300 font-sans text-xs">
                            <p>{item.purpose}</p>
                            <p className="text-[10px] font-mono text-zinc-500 mt-0.5">
                              {item.legalBasis}
                            </p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Consent Status & Audit Info */}
          <div className="mt-5 p-3.5 rounded-xl bg-[#0d0d0f] border border-zinc-800 text-[11px] font-mono text-zinc-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <div>
              <span>Status: </span>
              <span className={preferences.hasChosen ? 'text-emerald-400' : 'text-amber-400'}>
                {preferences.hasChosen ? 'Consent Recorded' : 'Awaiting Selection'}
              </span>
              {preferences.timestamp && (
                <span> ({new Date(preferences.timestamp).toLocaleDateString()})</span>
              )}
              <span> · Policy v{CURRENT_POLICY_VERSION}</span>
            </div>

            <button
              onClick={handleReset}
              className="text-zinc-400 hover:text-white transition-colors inline-flex items-center gap-1 cursor-pointer"
              title="Reset stored consent and prompt banner again"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Consent Tokens</span>
            </button>
          </div>

          {/* Action Footer */}
          <div className="mt-6 pt-4 border-t border-[#27272a] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <button
              type="button"
              onClick={onOpenPrivacyNotice}
              className="text-xs font-mono text-amber-400 hover:text-amber-300 underline underline-offset-2 inline-flex items-center gap-1 cursor-pointer self-start sm:self-auto"
            >
              <span>View Statutory Data Rights (NDPR / GDPR)</span>
              <ExternalLink className="w-3 h-3" />
            </button>

            <div className="flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={handleRejectNonEssential}
                className="px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-mono text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                Essential Only
              </button>

              <button
                type="button"
                onClick={handleAcceptAll}
                className="px-4 py-2.5 rounded-xl bg-zinc-700 hover:bg-zinc-600 text-white font-mono text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                Accept All
              </button>

              <button
                type="button"
                onClick={handleSavePreferences}
                className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold font-mono text-xs uppercase tracking-wider transition-all shadow-md shadow-amber-500/20 cursor-pointer"
              >
                Save My Preferences
              </button>
            </div>
          </div>

        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

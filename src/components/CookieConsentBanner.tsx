import React, { useState, useEffect } from 'react';
import {
  Cookie,
  ShieldCheck,
  Sliders,
  Check,
  X,
  ExternalLink,
} from 'lucide-react';
import {
  getCookiePreferences,
  acceptAllCookies,
  rejectNonEssentialCookies,
  COOKIE_CONSENT_EVENT,
  CookiePreferences,
} from '../services/cookieConsentService';

interface CookieConsentBannerProps {
  onOpenPreferences: () => void;
  onOpenPrivacyNotice: () => void;
}

export const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({
  onOpenPreferences,
  onOpenPrivacyNotice,
}) => {
  const [preferences, setPreferences] = useState<CookiePreferences>(getCookiePreferences());
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    // Check initial state
    const current = getCookiePreferences();
    setPreferences(current);
    if (!current.hasChosen) {
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }

    const handleUpdate = (e: CustomEvent<CookiePreferences>) => {
      setPreferences(e.detail);
      if (e.detail.hasChosen) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener(COOKIE_CONSENT_EVENT as any, handleUpdate);
    return () => {
      window.removeEventListener(COOKIE_CONSENT_EVENT as any, handleUpdate);
    };
  }, []);

  const handleAcceptAll = () => {
    acceptAllCookies();
    setIsVisible(false);
  };

  const handleRejectNonEssential = () => {
    rejectNonEssentialCookies();
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Cookie & Privacy Consent"
      className="fixed bottom-3 sm:bottom-5 inset-x-0 mx-auto z-[9990] w-[calc(100%-1.5rem)] sm:w-[calc(100%-3rem)] max-w-5xl animate-in fade-in slide-in-from-bottom-4 duration-300 pointer-events-auto"
    >
      {/* Liquid Glass Extended Curved Rectangle */}
      <div className="relative overflow-hidden rounded-2xl md:rounded-full bg-[#0d0e12]/80 backdrop-blur-2xl border border-white/15 hover:border-amber-500/30 px-4 py-3 sm:px-6 sm:py-3 shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.18)] transition-all duration-300">
        
        {/* Subtle Ambient Glass Highlights */}
        <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/[0.03] via-transparent to-amber-500/[0.03] pointer-events-none" />

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
          
          {/* Left: Indicator & Compact Informational Notice */}
          <div className="flex items-center gap-3 w-full md:w-auto min-w-0">
            {/* Frosted Gold Cookie Pill */}
            <div className="flex-shrink-0 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-400 text-xs">
              <Cookie className="w-3.5 h-3.5" />
              <span className="font-mono text-[10px] font-semibold tracking-wider uppercase hidden sm:inline">
                NDPR · GDPR
              </span>
            </div>

            {/* Concise Regulatory Copy */}
            <div className="text-[11px] sm:text-xs text-zinc-300 leading-snug">
              <span>We deploy essential security tokens and request your consent for optional diagnostics.</span>{' '}
              <button
                type="button"
                onClick={onOpenPrivacyNotice}
                className="text-amber-400/90 hover:text-amber-300 underline underline-offset-2 font-mono text-[11px] transition-colors cursor-pointer inline-flex items-center gap-0.5"
              >
                <span>Statutory Rights</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </button>
            </div>
          </div>

          {/* Right: Modern Liquid Glass Action Pill Group */}
          <div className="flex items-center gap-2 flex-shrink-0 w-full md:w-auto justify-end">
            
            {/* Customize / Preferences Modal Trigger */}
            <button
              type="button"
              onClick={onOpenPreferences}
              className="px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white text-[11px] font-mono tracking-wide transition-all duration-150 flex items-center gap-1.5 cursor-pointer"
              title="Granular consent categories"
            >
              <Sliders className="w-3 h-3 text-amber-400" />
              <span>Customize</span>
            </button>

            {/* Essential Only (GDPR equal prominence for refusal) */}
            <button
              type="button"
              onClick={handleRejectNonEssential}
              className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-zinc-200 hover:text-white text-[11px] font-mono tracking-wide transition-all duration-150 flex items-center gap-1 cursor-pointer"
              title="Only strictly necessary cookies will be retained"
            >
              <X className="w-3 h-3 text-zinc-400" />
              <span>Essential Only</span>
            </button>

            {/* Accept All (Primary Gold Glass Accent) */}
            <button
              type="button"
              onClick={handleAcceptAll}
              className="px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-semibold text-[11px] font-mono uppercase tracking-wider transition-all duration-150 shadow-md shadow-amber-500/20 active:scale-95 flex items-center gap-1 cursor-pointer"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Accept All</span>
            </button>

            {/* Discreet Close Dismissal (Essential only) */}
            <button
              type="button"
              onClick={handleRejectNonEssential}
              className="p-1 rounded-full text-zinc-500 hover:text-zinc-300 hover:bg-white/5 transition-colors cursor-pointer hidden md:flex items-center justify-center ml-1"
              aria-label="Dismiss banner"
              title="Dismiss"
            >
              <X className="w-3.5 h-3.5" />
            </button>

          </div>

        </div>
      </div>
    </aside>
  );
};

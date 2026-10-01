import React from 'react';
import { Mail, Phone, MessageSquare, ArrowUp, Globe } from 'lucide-react';
import { STUDIO_DATA } from '../data/content';

interface FooterProps {
  onOpenIntake: () => void;
  onOpenPrivacyNotice?: () => void;
  onOpenCookiePreferences?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenIntake,
  onOpenPrivacyNotice,
  onOpenCookiePreferences,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 dark:bg-[#070709] border-t border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-400 text-sm transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Studio Brand & Purpose */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
              ALABSGOLD
            </span>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 max-w-sm leading-relaxed font-normal">
              A boutique web engineering studio based in Lagos, Nigeria. We engineer trust-critical digital platforms, export quotation systems, and resilient backends for businesses serving international clients.
            </p>
            <div className="pt-2 space-y-1.5 text-xs">
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                <span>Lagos, Nigeria · West Africa (GMT+1) · Global Client Corridors</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                <a href={`mailto:${STUDIO_DATA.email}`} className="hover:text-amber-600 dark:hover:text-amber-400 font-mono">
                  {STUDIO_DATA.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
                <a href={`tel:${STUDIO_DATA.phone.replace(/\s+/g, '')}`} className="hover:text-amber-600 dark:hover:text-amber-400 font-mono">
                  {STUDIO_DATA.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="/#services" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Services & Capabilities
                </a>
              </li>
              <li>
                <a href="/#work" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Selected Work & Case Studies
                </a>
              </li>
              <li>
                <a href="/#process" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  How We Work
                </a>
              </li>
              <li>
                <a href="/#why-us" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Why ALABSGOLD (Trust)
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Contact & Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Actions & WhatsApp */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-900 dark:text-white">
              Direct Inquiries
            </div>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
              Accepting select engineering projects and retainers. Scope locked and guaranteed in writing before code is committed.
            </p>
            <div className="space-y-2">
              <button
                onClick={onOpenIntake}
                className="w-full py-2.5 px-4 rounded-lg bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs uppercase tracking-wider transition-colors text-center cursor-pointer shadow-sm"
              >
                Request a Consultation
              </button>
              <a
                href={STUDIO_DATA.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 px-3 text-xs rounded-lg border border-slate-300 dark:border-zinc-700 hover:border-slate-400 dark:hover:border-zinc-500 text-slate-700 dark:text-zinc-200 flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>WhatsApp: {STUDIO_DATA.phone}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Accessibility Links */}
        <div className="mt-12 pt-6 border-t border-slate-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-zinc-500 font-mono">
          <div>
            © {new Date().getFullYear()} ALABSGOLD. All rights reserved. Lagos, Nigeria.
          </div>
          <div className="flex items-center gap-4">
            {onOpenPrivacyNotice && (
              <button
                onClick={onOpenPrivacyNotice}
                className="hover:text-slate-900 dark:hover:text-zinc-300 transition-colors cursor-pointer"
              >
                Privacy Notice
              </button>
            )}
            {onOpenCookiePreferences && (
              <button
                onClick={onOpenCookiePreferences}
                className="hover:text-slate-900 dark:hover:text-zinc-300 transition-colors cursor-pointer"
              >
                Cookie Settings
              </button>
            )}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 hover:text-slate-900 dark:hover:text-zinc-300 transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

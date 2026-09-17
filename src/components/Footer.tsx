import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ArrowUp, Mail, Globe, Terminal, Activity, CheckCircle2, MessageSquare } from 'lucide-react';
import { STUDIO_DATA, FOUNDER_DATA } from '../data/content';

interface FooterProps {
  onOpenIntake: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenIntake }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#070709] border-t border-[#27272a] text-zinc-400 text-sm relative">
      
      {/* Studio Presence Strip */}
      <div className="border-b border-[#27272a]/70 py-4 bg-[#09090b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-xs">
            <div className="flex items-center gap-2 text-zinc-300">
              <Globe className="w-4 h-4 text-amber-400" />
              <span>HEADQUARTERS: LAGOS, NIGERIA (WAT / GMT+1) · OPERATING GLOBALLY</span>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <a
                href={STUDIO_DATA.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>WhatsApp: {STUDIO_DATA.phone}</span>
              </a>
              <div className="hidden sm:flex items-center gap-1.5 text-zinc-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Active Production Sprints</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Callout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Studio Brand Bio */}
          <div className="lg:col-span-5 space-y-4">
            <Link to="/" className="flex items-center gap-2 w-fit">
              <div className="w-8 h-8 rounded-lg bg-[#18181b] border border-[#27272a] flex items-center justify-center">
                <div className="w-2 h-2 rounded-sm bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
              </div>
              <span className="font-bold tracking-wider text-lg text-white">ALABSGOLD</span>
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                STUDIO
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-zinc-400 max-w-sm leading-relaxed font-normal">
              A boutique web engineering and digital infrastructure studio headquartered in Lagos, Nigeria. We build digital infrastructure for businesses whose next customer is on another continent.
            </p>

            <div className="pt-2 flex flex-col space-y-2 text-xs font-mono">
              <div className="text-zinc-500 uppercase tracking-wider">Direct Studio Desks:</div>
              <a
                href={`mailto:${STUDIO_DATA.email}`}
                className="text-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{STUDIO_DATA.email}</span>
              </a>
              <a
                href={`mailto:${STUDIO_DATA.secondaryEmail}`}
                className="text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5"
              >
                <span>{STUDIO_DATA.secondaryEmail}</span>
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-semibold">
              Studio Navigation
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Services & Pricing Tiers
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-white transition-colors">
                  Selected Work & Labs
                </Link>
              </li>
              <li>
                <Link to="/founder" className="hover:text-white transition-colors">
                  Founder (Alabi Emmanuel)
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About ALABSGOLD
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors text-amber-400">
                  Contact Us / Start a Project
                </Link>
              </li>
            </ul>
          </div>

          {/* Engineering Assurance Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-zinc-300 font-semibold">
              Our Quality Invariants
            </div>
            <div className="p-4 rounded-xl bg-[#111114] border border-[#27272a] space-y-2 text-xs">
              <div className="flex items-center gap-2 text-zinc-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span>100% Client Intellectual Property Ownership</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span>Zero Fragile Page-Builders or Disposable Templates</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                <span>30-Day Post-Launch Warranty & Support</span>
              </div>
            </div>

            <div>
              <button
                onClick={onOpenIntake}
                className="w-full py-2.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 text-black font-semibold text-xs font-mono uppercase tracking-wider transition-colors text-center cursor-pointer shadow-md"
              >
                Start a Project
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright & Scroll to Top */}
        <div className="mt-14 pt-8 border-t border-[#27272a] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 font-mono">
          <div>
            © {new Date().getFullYear()} ALABSGOLD Studio. Engineered by Alabi Emmanuel.
          </div>

          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-zinc-300 transition-colors">
              Engineering Invariants
            </Link>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
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

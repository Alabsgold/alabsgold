import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Shield, Menu, X, ArrowUpRight, Terminal, Activity, Zap } from 'lucide-react';
import { AlabsgoldLogo } from './AlabsgoldLogo';

interface NavbarProps {
  onOpenIntake: () => void;
  onOpenQuickReach?: () => void;
  onReplayPreloader?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenIntake,
  onOpenQuickReach,
  onReplayPreloader,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top on page navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Products', path: '/products' },
    { label: 'Founder', path: '/founder' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact Us', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#09090b]/90 backdrop-blur-md border-b border-[#27272a] shadow-lg shadow-black/50 py-3'
          : 'bg-[#09090b]/75 backdrop-blur-sm border-b border-[#27272a]/50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/"
            className="group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1"
          >
            <AlabsgoldLogo variant="full" size="md" withStatus={true} />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                className={({ isActive }) =>
                  `text-xs lg:text-sm font-medium px-3 py-1.5 rounded-lg transition-all ${
                    isActive
                      ? 'text-amber-400 bg-amber-500/10 border border-amber-500/20 font-semibold'
                      : 'text-zinc-300 hover:text-white hover:bg-zinc-800/40'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {onReplayPreloader && (
              <button
                onClick={onReplayPreloader}
                className="px-2.5 py-1.5 rounded-lg bg-[#18181b] border border-[#27272a] hover:border-amber-500/40 text-[11px] font-mono text-zinc-400 hover:text-amber-400 transition-colors cursor-pointer"
                title="Replay Studio Preloader"
              >
                Replay Intro
              </button>
            )}

            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#18181b] border border-[#27272a] text-xs font-mono text-zinc-300">
              <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span>SLA: 99.995%</span>
            </div>

            {onOpenQuickReach && (
              <button
                onClick={onOpenQuickReach}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#18181b] border border-[#27272a] hover:border-amber-500/40 text-xs font-mono text-zinc-300 hover:text-amber-400 transition-colors cursor-pointer"
                title="Quick Question or Client Review"
              >
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Quick Reach</span>
              </button>
            )}

            <button
              onClick={onOpenIntake}
              className="relative inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-black bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg hover:from-amber-300 hover:to-amber-400 transition-all shadow-[0_0_15px_rgba(245,158,11,0.25)] hover:shadow-[0_0_20px_rgba(245,158,11,0.4)] active:scale-95 cursor-pointer font-semibold"
            >
              <span>Initiate Intake</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenIntake}
              className="px-3 py-1.5 text-xs font-semibold text-black bg-amber-400 rounded-md hover:bg-amber-300"
            >
              Intake
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#18181b] border border-[#27272a] text-zinc-300 hover:text-white focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-xl bg-[#111114] border border-[#27272a] shadow-xl space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex items-center justify-between pb-2 border-b border-zinc-800 text-xs text-zinc-400 font-mono">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                Q2/Q3 Ingestion Open
              </span>
              <span>SLA: 99.995%</span>
            </div>
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-amber-400 bg-amber-500/15 border border-amber-500/30'
                        : 'text-zinc-300 hover:text-white hover:bg-zinc-800/60'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
            <div className="pt-2 border-t border-zinc-800 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenIntake();
                }}
                className="w-full py-2.5 px-4 text-center text-sm font-semibold text-black bg-gradient-to-r from-amber-400 to-amber-500 rounded-lg shadow-md"
              >
                Schedule Architecture Review
              </button>

              {onOpenQuickReach && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuickReach();
                  }}
                  className="w-full py-2 px-3 text-xs font-mono text-zinc-300 bg-zinc-900 border border-zinc-800 hover:border-amber-400/40 rounded-lg flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Zap className="w-3.5 h-3.5 text-amber-400" />
                  <span>Quick Reach & Client Review</span>
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

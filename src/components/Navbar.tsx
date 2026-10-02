import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenIntake: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenIntake,
  theme,
  onToggleTheme,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Work & Labs', path: '/products' },
    { label: 'Founder', path: '/founder' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/60 dark:bg-[#09090b]/60 backdrop-blur-2xl border-b border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.06)] py-3'
          : 'bg-white/40 dark:bg-[#09090b]/40 backdrop-blur-xl border-b border-white/20 dark:border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Zone 1: Wordmark with subtle glass hover */}
          <Link
            to="/"
            className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg p-1"
          >
            <span className="text-xl font-black tracking-tight text-slate-900 dark:text-white group-hover:text-amber-500 transition-colors">
              ALABSGOLD
            </span>
            <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold tracking-wider uppercase bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 backdrop-blur-md">
              Studio
            </span>
          </Link>

          {/* Zone 2: Dedicated Page NavLinks with OS 26 Liquid Glass Active State */}
          <nav className="hidden md:flex items-center gap-1.5 p-1 rounded-full bg-slate-200/40 dark:bg-white/[0.04] backdrop-blur-md border border-white/40 dark:border-white/10 shadow-inner">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-white/90 dark:bg-white/15 text-slate-900 dark:text-white font-semibold shadow-sm border border-black/5 dark:border-white/20 backdrop-blur-lg'
                      : 'text-slate-600 dark:text-zinc-300 hover:text-slate-900 dark:hover:text-white hover:bg-white/40 dark:hover:bg-white/5'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Zone 3: Controls (Theme Toggle + Liquid Glass CTA) */}
          <div className="flex items-center gap-2.5">
            {/* Theme Toggle Button */}
            <button
              onClick={onToggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2 rounded-full border border-slate-200/80 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md text-slate-700 dark:text-zinc-200 hover:bg-white/80 dark:hover:bg-white/10 transition-colors shadow-sm cursor-pointer"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-slate-700" />
              )}
            </button>

            {/* Desktop Primary CTA with Liquid Glass Glow */}
            <button
              onClick={onOpenIntake}
              className="hidden sm:inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-400 rounded-full transition-all shadow-[0_2px_15px_rgba(245,158,11,0.3)] hover:shadow-[0_4px_20px_rgba(245,158,11,0.5)] active:scale-95 cursor-pointer whitespace-nowrap"
            >
              <span>Request Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-full border border-slate-200/80 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md text-slate-800 dark:text-zinc-200 hover:bg-white/80 dark:hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Toggle navigation drawer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer with Framer Motion Slide-In / Slide-Out */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -14, scale: 0.98 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden mt-3 p-4 rounded-2xl bg-white/95 dark:bg-[#0d0d11]/95 backdrop-blur-2xl border border-white/60 dark:border-white/15 shadow-2xl space-y-3"
            >
              <div className="flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    end={link.path === '/'}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-amber-500/15 text-amber-600 dark:text-amber-400 font-semibold border border-amber-500/25'
                          : 'text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-white/5'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-200/80 dark:border-zinc-800">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenIntake();
                  }}
                  className="w-full py-2.5 px-4 text-center text-xs font-semibold uppercase tracking-wider text-black bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-xl shadow-md cursor-pointer transition-all active:scale-95"
                >
                  Request a Consultation
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </header>
  );
};

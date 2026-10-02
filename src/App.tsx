import React, { useState, useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { GlobalLogoWallpaper } from './components/GlobalLogoWallpaper';

// Homepage loaded directly for instant initial execution
import { HomePage } from './pages/HomePage';

// Dedicated secondary routes code-split for sub-second performance
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const ProductsPage = lazy(() => import('./pages/ProductsPage').then(m => ({ default: m.ProductsPage })));
const FounderPage = lazy(() => import('./pages/FounderPage').then(m => ({ default: m.FounderPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));

// Lazy-load interactive modals on demand so they don't delay the initial paint
const IntakeModal = lazy(() => import('./components/IntakeModal').then(m => ({ default: m.IntakeModal })));
const CookieConsentBanner = lazy(() => import('./components/CookieConsentBanner').then(m => ({ default: m.CookieConsentBanner })));
const CookiePreferencesModal = lazy(() => import('./components/CookiePreferencesModal').then(m => ({ default: m.CookiePreferencesModal })));
const PrivacyRightsModal = lazy(() => import('./components/PrivacyRightsModal').then(m => ({ default: m.PrivacyRightsModal })));

// Scroll Restoration on Route Transition
function ScrollToTopOnRoute() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

// Minimal fallback loader with subtle liquid glass spinner
function RouteLoader() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center">
      <div className="w-6 h-6 border-2 border-amber-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

// Animated Multi-Page Routes with Framer Motion subtle fade-in & slide transitions
function AnimatedRoutes({ onOpenIntake }: { onOpenIntake: (serviceTitle?: string) => void }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 16, filter: 'blur(3px)' }}
        animate={{
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
        }}
        exit={{
          opacity: 0,
          y: -12,
          filter: 'blur(2px)',
          transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
        }}
        className="w-full"
      >
        <Routes location={location}>
          <Route path="/" element={<HomePage onOpenIntake={onOpenIntake} />} />
          <Route path="/services" element={<ServicesPage onOpenIntake={onOpenIntake} />} />
          <Route path="/products" element={<ProductsPage onOpenIntake={onOpenIntake} />} />
          <Route path="/founder" element={<FounderPage onOpenIntake={onOpenIntake} />} />
          <Route path="/about" element={<AboutPage onOpenIntake={onOpenIntake} />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Catch-all fallback */}
          <Route path="*" element={<HomePage onOpenIntake={onOpenIntake} />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function MainLayout() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isIntakeOpen, setIsIntakeOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  const [isCookiePreferencesOpen, setIsCookiePreferencesOpen] = useState(false);
  const [isPrivacyNoticeOpen, setIsPrivacyNoticeOpen] = useState(false);

  // Initialize and synchronize theme
  useEffect(() => {
    try {
      const saved = localStorage.getItem('alabsgold_theme');
      if (saved === 'dark') {
        setTheme('dark');
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
      } else {
        setTheme('light');
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {
      setTheme('light');
    }
  }, []);

  const handleToggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    try {
      localStorage.setItem('alabsgold_theme', nextTheme);
    } catch (e) {}

    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  };

  const handleOpenIntake = (serviceTitle?: string) => {
    setPreselectedService(serviceTitle);
    setIsIntakeOpen(true);
  };

  const handleCloseIntake = () => {
    setIsIntakeOpen(false);
    setPreselectedService(undefined);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/70 text-slate-900 dark:bg-[#07070a]/75 dark:text-zinc-100 transition-colors duration-150 relative">
      <ScrollToTopOnRoute />

      {/* Fixed Architectural Vector Logo Wallpaper: Translucent with OS 26 ambient aura */}
      <GlobalLogoWallpaper />

      {/* Sticky Corporate Header */}
      <Navbar
        onOpenIntake={() => handleOpenIntake()}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Multi-Page Route Viewport with Translucent Liquid Glass Content Layers */}
      <main className="flex-grow relative z-10">
        <Suspense fallback={<RouteLoader />}>
          <AnimatedRoutes onOpenIntake={handleOpenIntake} />
        </Suspense>
      </main>

      {/* Footer with Dedicated Page Links */}
      <div className="relative z-10">
        <Footer
          onOpenIntake={() => handleOpenIntake()}
          onOpenPrivacyNotice={() => setIsPrivacyNoticeOpen(true)}
          onOpenCookiePreferences={() => setIsCookiePreferencesOpen(true)}
        />
      </div>

      {/* Modals loaded only on demand via Suspense */}
      <Suspense fallback={null}>
        {isIntakeOpen && (
          <IntakeModal
            isOpen={isIntakeOpen}
            onClose={handleCloseIntake}
            preselectedService={preselectedService}
          />
        )}

        <CookieConsentBanner
          onOpenPreferences={() => setIsCookiePreferencesOpen(true)}
          onOpenPrivacyNotice={() => setIsPrivacyNoticeOpen(true)}
        />

        {isCookiePreferencesOpen && (
          <CookiePreferencesModal
            isOpen={isCookiePreferencesOpen}
            onClose={() => setIsCookiePreferencesOpen(false)}
            onOpenPrivacyNotice={() => {
              setIsCookiePreferencesOpen(false);
              setIsPrivacyNoticeOpen(true);
            }}
          />
        )}

        {isPrivacyNoticeOpen && (
          <PrivacyRightsModal
            isOpen={isPrivacyNoticeOpen}
            onClose={() => setIsPrivacyNoticeOpen(false)}
            onOpenCookiePreferences={() => {
              setIsPrivacyNoticeOpen(false);
              setIsCookiePreferencesOpen(true);
            }}
          />
        )}
      </Suspense>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

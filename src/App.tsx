import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { IntakeModal } from './components/IntakeModal';
import { QuickReachModal } from './components/QuickReachModal';
import { GoogleSheetsHubModal } from './components/GoogleSheetsHubModal';
import { GoldMouseSpotlight } from './components/GoldMouseSpotlight';
import { Zap, MessageSquare } from 'lucide-react';

// Dedicated Page Components
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ProductsPage } from './pages/ProductsPage';
import { FounderPage } from './pages/FounderPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

// Scroll Restoration on Route Transition
function ScrollToTopOnRoute() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function MainLayout() {
  const [showPreloader, setShowPreloader] = useState(true);
  const [isIntakeOpen, setIsIntakeOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string | undefined>(undefined);
  const [isQuickReachOpen, setIsQuickReachOpen] = useState(false);
  const [quickReachCategory, setQuickReachCategory] = useState<'Service Scoping' | 'Product Inquiry' | 'Client Review' | 'Quick Question' | 'Advisory'>('Quick Question');
  const [isSheetsHubOpen, setIsSheetsHubOpen] = useState(false);

  // Framer Motion useScroll hook for the fixed gold progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  // Initialize Lenis smooth scroll
  useEffect(() => {
    let lenis: Lenis | null = null;
    try {
      lenis = new Lenis({
        duration: 1.1,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
      });

      let animationFrameId: number;
      const raf = (time: number) => {
        lenis?.raf(time);
        animationFrameId = requestAnimationFrame(raf);
      };

      animationFrameId = requestAnimationFrame(raf);

      return () => {
        cancelAnimationFrame(animationFrameId);
        lenis?.destroy();
      };
    } catch (e) {
      console.warn('Lenis smooth scroll initialized with fallback:', e);
    }
  }, []);

  // Hidden Founder Desk shortcut: Ctrl+Shift+L or Cmd+Shift+L
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'L' || e.key === 'l' || e.key === 'A' || e.key === 'a')) {
        e.preventDefault();
        setIsSheetsHubOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const location = useLocation();
  useEffect(() => {
    if (
      location.pathname === '/admin' ||
      location.pathname === '/founder-ledger' ||
      location.pathname === '/studio-vault' ||
      location.hash === '#founder-ledger'
    ) {
      setIsSheetsHubOpen(true);
    }
  }, [location.pathname, location.hash]);

  const handleOpenIntake = (serviceTitle?: string) => {
    setPreselectedService(serviceTitle);
    setIsIntakeOpen(true);
  };

  const handleCloseIntake = () => {
    setIsIntakeOpen(false);
    setPreselectedService(undefined);
  };

  const handleOpenQuickReach = (category: 'Service Scoping' | 'Product Inquiry' | 'Client Review' | 'Quick Question' | 'Advisory' = 'Quick Question') => {
    setQuickReachCategory(category);
    setIsQuickReachOpen(true);
  };

  const handleReplayIntro = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    setShowPreloader(true);
  };

  return (
    <>
      <ScrollToTopOnRoute />

      {/* Fixed 2px Gold Scroll Progress Indicator at top of viewport */}
      <motion.div
        id="gold-scroll-progress-bar"
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber-500 via-amber-400 to-amber-300 origin-left z-[9990] shadow-[0_0_12px_rgba(245,158,11,0.9),0_0_4px_rgba(251,191,36,0.7)] pointer-events-none"
        style={{ scaleX }}
      />

      {/* Full-screen Black Preloader with Gold Shimmer & Scale-Out Exit */}
      <AnimatePresence mode="wait">
        {showPreloader && (
          <Preloader
            key="studio-preloader"
            onComplete={() => setShowPreloader(false)}
          />
        )}
      </AnimatePresence>

      {/* Main Website Application Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.985 }}
        animate={{
          opacity: showPreloader ? 0 : 1,
          scale: showPreloader ? 0.985 : 1,
        }}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="min-h-screen bg-[#09090b] text-[#f4f4f5] flex flex-col selection:bg-amber-500/25 selection:text-amber-300 relative"
      >
        {/* Ambient Gold Mouse Spotlight follower */}
        <GoldMouseSpotlight />

        {/* Global Navigation - Public facing only */}
        <Navbar
          onOpenIntake={() => handleOpenIntake()}
          onOpenQuickReach={() => handleOpenQuickReach('Quick Question')}
          onReplayPreloader={handleReplayIntro}
        />

        {/* Multi-Page Route Outlet */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage onOpenIntake={handleOpenIntake} />} />
            <Route path="/services" element={<ServicesPage onOpenIntake={handleOpenIntake} />} />
            <Route path="/products" element={<ProductsPage onOpenIntake={handleOpenIntake} />} />
            <Route path="/founder" element={<FounderPage onOpenIntake={handleOpenIntake} />} />
            <Route path="/about" element={<AboutPage onOpenIntake={handleOpenIntake} />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Private founder ledger routes */}
            <Route path="/admin" element={<HomePage onOpenIntake={handleOpenIntake} />} />
            <Route path="/founder-ledger" element={<HomePage onOpenIntake={handleOpenIntake} />} />
            <Route path="/studio-vault" element={<HomePage onOpenIntake={handleOpenIntake} />} />
            {/* Catch-all fallback */}
            <Route path="*" element={<HomePage onOpenIntake={handleOpenIntake} />} />
          </Routes>
        </main>

        {/* Floating Client Quick Reach Button - Zero public sheets buttons */}
        <aside aria-label="Quick Reach Out" className="fixed bottom-6 right-6 z-40 flex items-center">
          <button
            onClick={() => handleOpenQuickReach('Quick Question')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-black font-semibold text-xs font-mono tracking-wider transition-all shadow-xl shadow-amber-500/20 active:scale-95 cursor-pointer"
          >
            <Zap className="w-3.5 h-3.5 fill-black" />
            <span>Quick Reach / Review</span>
          </button>
        </aside>

        {/* Global Footer */}
        <Footer
          onOpenIntake={() => handleOpenIntake()}
          onOpenQuickReach={() => handleOpenQuickReach('Client Review')}
          onOpenFounderConsole={() => setIsSheetsHubOpen(true)}
        />

        {/* Interactive Consultation Intake Dialog */}
        <IntakeModal
          isOpen={isIntakeOpen}
          onClose={handleCloseIntake}
          preselectedService={preselectedService}
        />

        {/* Rapid Interaction & Review Modal with Auto-Mail */}
        <QuickReachModal
          isOpen={isQuickReachOpen}
          onClose={() => setIsQuickReachOpen(false)}
          defaultCategory={quickReachCategory}
        />

        {/* Google Sheets Live Ledger Hub */}
        <GoogleSheetsHubModal
          isOpen={isSheetsHubOpen}
          onClose={() => setIsSheetsHubOpen(false)}
        />
      </motion.div>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <MainLayout />
    </Router>
  );
}

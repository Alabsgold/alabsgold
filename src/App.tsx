import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { IntakeModal } from './components/IntakeModal';
import { GoldMouseSpotlight } from './components/GoldMouseSpotlight';

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

  const handleOpenIntake = (serviceTitle?: string) => {
    setPreselectedService(serviceTitle);
    setIsIntakeOpen(true);
  };

  const handleCloseIntake = () => {
    setIsIntakeOpen(false);
    setPreselectedService(undefined);
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

        {/* Global Navigation */}
        <Navbar
          onOpenIntake={() => handleOpenIntake()}
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
            {/* Catch-all fallback */}
            <Route path="*" element={<HomePage onOpenIntake={handleOpenIntake} />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenIntake={() => handleOpenIntake()} />

        {/* Interactive Consultation Intake Dialog */}
        <IntakeModal
          isOpen={isIntakeOpen}
          onClose={handleCloseIntake}
          preselectedService={preselectedService}
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

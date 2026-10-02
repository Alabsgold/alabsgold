import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface PageTransitionProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * OS 26 Studio Page Transition:
 * Subtle fade-in combined with gentle directional slide-in on enter
 * and slide-out on exit with cinematic cubic bezier easing.
 */
const pageVariants = {
  initial: {
    opacity: 0,
    y: 18,
    scale: 0.995,
    filter: 'blur(3px)',
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.38,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -14,
    scale: 0.995,
    filter: 'blur(2px)',
    transition: {
      duration: 0.22,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export const PageTransition: React.FC<PageTransitionProps> = ({
  children,
  className = '',
}) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`w-full min-h-[calc(100vh-80px)] ${className}`}
    >
      {children}
    </motion.div>
  );
};

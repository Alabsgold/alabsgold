import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const GoldMouseSpotlight: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const springConfig = { damping: 28, stiffness: 200, mass: 0.5 };
  const mouseX = useSpring(-500, springConfig);
  const mouseY = useSpring(-500, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-30 w-[450px] h-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-radial from-amber-500/8 via-amber-400/3 to-transparent blur-3xl opacity-80"
      style={{
        left: mouseX,
        top: mouseY,
      }}
    />
  );
};

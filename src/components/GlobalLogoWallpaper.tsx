import React from 'react';

/**
 * GlobalLogoWallpaper:
 * Renders an architectural, floating vector watermark of the ALABSGOLD
 * brand emblem and monogram centered across every page as a fixed background wallpaper.
 *
 * Integrated with OS 26 ambient motion graphics and calibrated transparency
 * so that when the user scrolls through frosted liquid-glass panels, the iconic
 * gold emblem shines through with parallax-like depth.
 */
export const GlobalLogoWallpaper: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden select-none"
    >
      {/* Dynamic ambient fluid aura with slow breathing animation */}
      <div className="absolute w-[500px] h-[500px] sm:w-[800px] sm:h-[800px] rounded-full bg-gradient-to-tr from-amber-500/10 via-amber-400/5 to-transparent blur-[120px] animate-pulse duration-[6000ms]" />
      
      {/* Secondary atmospheric glass refraction orb */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-amber-500/5 blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-amber-600/5 blur-[100px] pointer-events-none" />

      {/* Centerpiece Vector Monogram & Wordmark Watermark */}
      <div className="relative flex flex-col items-center justify-center opacity-10 dark:opacity-15 transition-opacity duration-700 scale-95 sm:scale-110 lg:scale-125">
        
        {/* Large Precision Vector "A" Monogram with Angular Golden Slash */}
        <svg
          viewBox="0 0 200 200"
          className="w-80 h-80 sm:w-[420px] sm:h-[420px] drop-shadow-[0_0_50px_rgba(245,158,11,0.35)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="wall-gold-specular" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="35%" stopColor="#f59e0b" />
              <stop offset="70%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#78350f" />
            </linearGradient>
            <linearGradient id="wall-silver-specular" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="50%" stopColor="#e2e8f0" />
              <stop offset="100%" stopColor="#94a3b8" />
            </linearGradient>
            <radialGradient id="wall-glow-core" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Central Radial Light Core */}
          <circle cx="100" cy="100" r="70" fill="url(#wall-glow-core)" />

          {/* Signature Angular "A" Architectural Structure */}
          {/* Left Main Strut */}
          <path
            d="M 100 24 L 38 174 L 64 174 L 88 116 L 100 86 Z"
            fill="url(#wall-silver-specular)"
          />
          {/* Right Strut with Sharp Dynamic Apex */}
          <path
            d="M 100 24 L 162 174 L 136 174 L 112 116 L 100 86 Z"
            fill="url(#wall-gold-specular)"
          />
          {/* Slicing Horizontal / Chevron Slash that extends past the apex */}
          <path
            d="M 56 134 L 184 88 L 178 74 L 68 114 Z"
            fill="url(#wall-gold-specular)"
          />
          {/* Inner Apex Triangular Core */}
          <polygon
            points="100,52 86,96 114,96"
            fill="#ffffff"
            fillOpacity="0.9"
          />
        </svg>

        {/* Signature ALABSGOLD Wordmark Watermark */}
        <div className="mt-4 flex items-center gap-2.5 tracking-[0.3em] font-sans font-black text-2xl sm:text-4xl text-slate-900 dark:text-white">
          <span>ALABS</span>
          {/* Iconic Gold Squircle "G" Container */}
          <span className="inline-flex items-center justify-center w-8 h-8 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 text-black font-extrabold text-lg sm:text-2xl shadow-[0_0_25px_rgba(245,158,11,0.6)]">
            G
          </span>
          <span>OLD</span>
        </div>

        {/* Studio Sub-label */}
        <div className="mt-2 text-[10px] sm:text-xs font-mono tracking-[0.7em] text-amber-600 dark:text-amber-300 uppercase font-bold">
          BOUTIQUE WEB ENGINEERING · LAGOS
        </div>
      </div>
    </div>
  );
};

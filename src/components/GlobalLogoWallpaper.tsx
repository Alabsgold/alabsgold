import React from 'react';

/**
 * GlobalLogoWallpaper:
 * Renders an ultra-subtle, "almost invisible" architectural watermark of the ALABSGOLD
 * brand emblem and typography centered across every page as background wallpaper.
 *
 * Configured with pointer-events-none and delicate 3.5% opacity so it adds high-end
 * brand presence without distracting from foreground readability or code blocks.
 */
export const GlobalLogoWallpaper: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 flex items-center justify-center overflow-hidden select-none"
    >
      {/* Subtle warm radial spotlight behind the central watermark */}
      <div className="absolute w-[600px] h-[600px] sm:w-[900px] sm:h-[900px] rounded-full bg-amber-500/[0.025] blur-[140px]" />

      {/* Centerpiece Monogram & Wordmark Watermark */}
      <div className="relative flex flex-col items-center justify-center opacity-[0.035] transition-opacity duration-1000 scale-90 sm:scale-110 lg:scale-125">
        
        {/* Large Precision Vector "A" Monogram with Angular Slash */}
        <svg
          viewBox="0 0 200 200"
          className="w-72 h-72 sm:w-96 sm:h-96 text-white drop-shadow-[0_0_40px_rgba(245,158,11,0.2)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="wall-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fef08a" />
              <stop offset="40%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
            <linearGradient id="wall-white-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#a1a1aa" />
            </linearGradient>
          </defs>

          {/* Signature Angular "A" Architectural Structure */}
          {/* Left Main Strut */}
          <path
            d="M 100 24 L 38 174 L 64 174 L 88 116 L 100 86 Z"
            fill="url(#wall-white-grad)"
          />
          {/* Right Strut with Sharp Dynamic Apex */}
          <path
            d="M 100 24 L 162 174 L 136 174 L 112 116 L 100 86 Z"
            fill="url(#wall-gold-grad)"
          />
          {/* Slicing Horizontal / Chevron Slash that extends past the apex */}
          <path
            d="M 60 132 L 180 88 L 174 76 L 70 114 Z"
            fill="url(#wall-gold-grad)"
          />
          {/* Inner Apex Triangular Core */}
          <polygon
            points="100,52 86,96 114,96"
            fill="#ffffff"
            fillOpacity="0.8"
          />
        </svg>

        {/* Signature ALABSGOLD Wordmark Watermark */}
        <div className="mt-4 flex items-center gap-2 tracking-[0.25em] font-sans font-black text-2xl sm:text-4xl text-white">
          <span>ALABS</span>
          {/* Iconic Gold Squircle "G" Container */}
          <span className="inline-flex items-center justify-center w-8 h-8 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 text-black font-extrabold text-lg sm:text-2xl shadow-[0_0_20px_rgba(245,158,11,0.5)]">
            G
          </span>
          <span>OLD</span>
        </div>

        {/* Studio Sub-label */}
        <div className="mt-2 text-[10px] sm:text-xs font-mono tracking-[0.6em] text-amber-300 uppercase">
          DIGITAL INFRASTRUCTURE
        </div>
      </div>
    </div>
  );
};

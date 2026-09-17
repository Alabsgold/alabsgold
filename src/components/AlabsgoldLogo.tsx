import React from 'react';

export interface AlabsgoldLogoProps {
  variant?: 'mark' | 'full';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  withStatus?: boolean;
  className?: string;
}

/**
 * AlabsgoldLogo: The signature architectural "A" monogram emblem & full studio wordmark for ALABSGOLD.
 * Features faceted gold struts, inner apex geometry, and signature crossbar chevron.
 */
export const AlabsgoldLogo: React.FC<AlabsgoldLogoProps> = ({
  variant = 'full',
  size = 'md',
  withStatus = true,
  className = '',
}) => {
  // Dimensions mapping for the emblem container
  const sizeMap = {
    xs: { box: 'w-6 h-6 rounded-md', svg: 'w-4 h-4', text: 'text-sm', badge: 'text-[9px]' },
    sm: { box: 'w-8 h-8 rounded-lg', svg: 'w-5 h-5', text: 'text-base', badge: 'text-[10px]' },
    md: { box: 'w-9 h-9 rounded-lg', svg: 'w-6 h-6', text: 'text-base', badge: 'text-[10px]' },
    lg: { box: 'w-12 h-12 rounded-xl', svg: 'w-7 h-7', text: 'text-xl', badge: 'text-xs' },
    xl: { box: 'w-16 h-16 rounded-2xl', svg: 'w-10 h-10', text: 'text-3xl', badge: 'text-sm' },
  };

  const currentSize = sizeMap[size];

  const MarkElement = (
    <div
      className={`relative flex items-center justify-center ${currentSize.box} bg-[#18181b] border border-[#27272a] transition-all duration-300 group-hover:border-amber-500/60 shadow-[0_0_15px_rgba(0,0,0,0.5)] flex-shrink-0`}
    >
      {/* Precision Vector "A" Monogram */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${currentSize.svg} drop-shadow-[0_0_8px_rgba(245,158,11,0.45)]`}
      >
        <defs>
          <linearGradient id="logo-gold-left" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="35%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>

          <linearGradient id="logo-gold-right" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fde047" />
            <stop offset="40%" stopColor="#d97706" />
            <stop offset="100%" stopColor="#78350f" />
          </linearGradient>

          <linearGradient id="logo-gold-cross" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="50%" stopColor="#fef3c7" />
            <stop offset="100%" stopColor="#d97706" />
          </linearGradient>
        </defs>

        {/* Ambient subtle warm gold backlight */}
        <circle cx="50" cy="50" r="32" fill="#f59e0b" fillOpacity="0.12" />

        {/* Left Architectural Strut */}
        <path d="M 50 16 L 22 84 L 36 84 L 46 58 L 50 58 Z" fill="url(#logo-gold-left)" />

        {/* Right Architectural Strut */}
        <path d="M 50 16 L 78 84 L 64 84 L 54 58 L 50 58 Z" fill="url(#logo-gold-right)" />

        {/* Inner Apex Geometry */}
        <polygon points="50,26 44,48 56,48" fill="#fef08a" fillOpacity="0.95" />

        {/* Signature Architectural Crossbar Chevron */}
        <path d="M 33 66 L 50 56 L 67 66 L 50 73 Z" fill="url(#logo-gold-cross)" />
      </svg>

      {/* Real-time studio operational status dot */}
      {withStatus && (
        <span
          className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 border border-[#18181b] shadow-[0_0_6px_rgba(16,185,129,0.8)]"
          title="ALABSGOLD Systems Active & Operational"
        />
      )}
    </div>
  );

  if (variant === 'mark') {
    return <div className={`inline-flex ${className}`}>{MarkElement}</div>;
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {MarkElement}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span
            className={`font-bold tracking-wider ${currentSize.text} text-zinc-100 group-hover:text-amber-400 transition-colors font-sans`}
          >
            ALABSGOLD
          </span>
          <span
            className={`${currentSize.badge} uppercase font-mono tracking-widest px-1.5 py-0.5 rounded bg-zinc-800/80 text-zinc-300 border border-zinc-700/70`}
          >
            STUDIO
          </span>
        </div>
        <span className="text-[11px] text-zinc-400 font-mono tracking-tight flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Digital Infrastructure
        </span>
      </div>
    </div>
  );
};

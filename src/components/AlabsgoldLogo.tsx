import React from 'react';

export interface AlabsgoldLogoProps {
  variant?: 'mark' | 'full';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  withStatus?: boolean;
  className?: string;
}

/**
 * AlabsgoldLogo: The signature architectural "A" monogram emblem & full studio wordmark for ALABSGOLD.
 * Features the authentic futuristic sliced "A" geometry and iconic ALABS [G] OLD typography.
 */
export const AlabsgoldLogo: React.FC<AlabsgoldLogoProps> = ({
  variant = 'full',
  size = 'md',
  withStatus = true,
  className = '',
}) => {
  // Dimensions mapping for the emblem container
  const sizeMap = {
    xs: { box: 'w-6 h-6 rounded-md', svg: 'w-4 h-4', text: 'text-xs', gBox: 'w-4 h-4 text-[10px] rounded-md', badge: 'text-[9px]' },
    sm: { box: 'w-8 h-8 rounded-lg', svg: 'w-5 h-5', text: 'text-sm', gBox: 'w-5 h-5 text-xs rounded-md', badge: 'text-[10px]' },
    md: { box: 'w-9 h-9 rounded-lg', svg: 'w-6 h-6', text: 'text-base', gBox: 'w-6 h-6 text-sm rounded-lg', badge: 'text-[10px]' },
    lg: { box: 'w-12 h-12 rounded-xl', svg: 'w-8 h-8', text: 'text-xl', gBox: 'w-8 h-8 text-base rounded-lg', badge: 'text-xs' },
    xl: { box: 'w-16 h-16 rounded-2xl', svg: 'w-11 h-11', text: 'text-3xl', gBox: 'w-10 h-10 text-xl rounded-xl', badge: 'text-sm' },
  };

  const currentSize = sizeMap[size];

  const MarkElement = (
    <div
      className={`relative flex items-center justify-center ${currentSize.box} bg-[#18181b] border border-[#27272a] transition-all duration-300 group-hover:border-amber-500/60 shadow-[0_0_15px_rgba(0,0,0,0.5)] flex-shrink-0`}
    >
      {/* Precision Vector "A" Monogram matching the brand showcase video */}
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${currentSize.svg} drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]`}
      >
        <defs>
          <linearGradient id="logo-gold-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#b45309" />
          </linearGradient>
          <linearGradient id="logo-white-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#d4d4d8" />
          </linearGradient>
        </defs>

        {/* Ambient subtle warm gold backlight */}
        <circle cx="50" cy="50" r="32" fill="#f59e0b" fillOpacity="0.15" />

        {/* Left Angular Architectural Strut */}
        <path d="M 50 14 L 18 86 L 31 86 L 43 56 L 50 42 Z" fill="url(#logo-white-grad)" />

        {/* Right Architectural Strut with Gold Relief */}
        <path d="M 50 14 L 82 86 L 69 86 L 57 56 L 50 42 Z" fill="url(#logo-gold-grad)" />

        {/* Signature Sharp Chevron Slash extending past apex */}
        <path d="M 30 65 L 90 44 L 87 38 L 35 56 Z" fill="url(#logo-gold-grad)" />

        {/* Inner Apex Triangular Geometry */}
        <polygon points="50,26 43,48 57,48" fill="#ffffff" fillOpacity="0.95" />
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
          {/* Authentic ALABS [G] OLD Typography */}
          <div className="flex items-center font-bold tracking-wider font-sans text-zinc-100 group-hover:text-amber-400 transition-colors">
            <span className={currentSize.text}>ALABS</span>
            <span
              className={`inline-flex items-center justify-center font-extrabold ${currentSize.gBox} bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 text-black mx-1 shadow-[0_0_10px_rgba(245,158,11,0.5)]`}
            >
              G
            </span>
            <span className={currentSize.text}>OLD</span>
          </div>

          <span
            className={`${currentSize.badge} uppercase font-mono tracking-widest px-1.5 py-0.5 rounded bg-zinc-800/80 text-zinc-300 border border-zinc-700/70 ml-1`}
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

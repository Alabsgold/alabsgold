import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles } from 'lucide-react';

interface HeroBrandVideoShowcaseProps {
  className?: string;
}

interface GlassShard {
  x: number;
  y: number;
  size: number;
  rotation: number;
  rotSpeed: number;
  vx: number;
  vy: number;
  points: [number, number][];
  isGold: boolean;
  opacity: number;
}

/**
 * HeroBrandVideoShowcase:
 * Renders the ALABSGOLD brand logo video loop as the hero section background.
 *
 * Supports:
 * 1. Native HTML5 video loop (/assets/alabsgold-logo-loop.mp4 or /alabsgold-logo-loop.mp4)
 * 2. An interactive high-fidelity 3D glass shards & gold refraction simulation canvas
 *    mirroring the exact shattered-glass convergence animation of the brand logo.
 */
export const HeroBrandVideoShowcase: React.FC<HeroBrandVideoShowcaseProps> = ({
  className = '',
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  // Fallback / generative 3D glass shards animation matching the uploaded brand video
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.offsetHeight || 600);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.offsetHeight || 600;
    };
    window.addEventListener('resize', handleResize);

    // Generate floating glass shards
    const shardCount = 28;
    const shards: GlassShard[] = [];

    for (let i = 0; i < shardCount; i++) {
      const size = 15 + Math.random() * 45;
      const pointCount = 3 + Math.floor(Math.random() * 3);
      const points: [number, number][] = [];

      for (let p = 0; p < pointCount; p++) {
        const angle = (p / pointCount) * Math.PI * 2 + (Math.random() * 0.4 - 0.2);
        const r = size * (0.6 + Math.random() * 0.8);
        points.push([Math.cos(angle) * r, Math.sin(angle) * r]);
      }

      shards.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.015,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        points,
        isGold: Math.random() > 0.65,
        opacity: 0.25 + Math.random() * 0.45,
      });
    }

    // Gold dust particles
    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.8 + 0.5,
      vy: -0.2 - Math.random() * 0.3,
      alpha: Math.random() * 0.7 + 0.2,
      pulse: Math.random() * Math.PI * 2,
    }));

    let time = 0;

    const render = () => {
      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      // Deep dark space backdrop
      const grad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        50,
        width / 2,
        height / 2,
        Math.max(width, height) / 1.2
      );
      grad.addColorStop(0, 'rgba(18, 16, 24, 0.4)');
      grad.addColorStop(0.5, 'rgba(10, 10, 14, 0.7)');
      grad.addColorStop(1, 'rgba(9, 9, 11, 0.95)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Render floating gold dust particles
      particles.forEach((p) => {
        p.y += p.vy;
        p.pulse += 0.03;
        if (p.y < 0) {
          p.y = height;
          p.x = Math.random() * width;
        }

        const currentAlpha = p.alpha * (0.6 + 0.4 * Math.sin(p.pulse));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 158, 11, ${currentAlpha * 0.7})`;
        ctx.shadowColor = '#f59e0b';
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Render glass shards
      shards.forEach((s) => {
        s.x += s.vx;
        s.y += s.vy;
        s.rotation += s.rotSpeed;

        if (s.x < -s.size) s.x = width + s.size;
        if (s.x > width + s.size) s.x = -s.size;
        if (s.y < -s.size) s.y = height + s.size;
        if (s.y > height + s.size) s.y = -s.size;

        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.rotation);

        ctx.beginPath();
        s.points.forEach(([px, py], idx) => {
          if (idx === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        });
        ctx.closePath();

        // Shard glass fill
        if (s.isGold) {
          const shardGrad = ctx.createLinearGradient(-s.size, -s.size, s.size, s.size);
          shardGrad.addColorStop(0, `rgba(245, 158, 11, ${s.opacity * 0.3})`);
          shardGrad.addColorStop(0.5, `rgba(254, 240, 138, ${s.opacity * 0.45})`);
          shardGrad.addColorStop(1, `rgba(180, 83, 9, ${s.opacity * 0.2})`);
          ctx.fillStyle = shardGrad;
          ctx.strokeStyle = `rgba(245, 158, 11, ${s.opacity * 0.9})`;
          ctx.lineWidth = 1.2;
        } else {
          const shardGrad = ctx.createLinearGradient(-s.size, -s.size, s.size, s.size);
          shardGrad.addColorStop(0, `rgba(255, 255, 255, ${s.opacity * 0.15})`);
          shardGrad.addColorStop(1, `rgba(161, 161, 170, ${s.opacity * 0.05})`);
          ctx.fillStyle = shardGrad;
          ctx.strokeStyle = `rgba(255, 255, 255, ${s.opacity * 0.65})`;
          ctx.lineWidth = 0.8;
        }

        ctx.fill();
        ctx.stroke();

        // Facet specular glint line
        if (s.points.length > 2) {
          ctx.beginPath();
          ctx.moveTo(s.points[0][0], s.points[0][1]);
          ctx.lineTo(s.points[2][0] * 0.4, s.points[2][1] * 0.4);
          ctx.strokeStyle = s.isGold
            ? `rgba(254, 243, 199, ${s.opacity * 0.9})`
            : `rgba(255, 255, 255, ${s.opacity * 0.7})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        ctx.restore();
      });

      // Subtle center convergence beacon
      const centerPulse = 0.5 + 0.5 * Math.sin(time * 1.5);
      const centerGrad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        10,
        width / 2,
        height / 2,
        220
      );
      centerGrad.addColorStop(0, `rgba(245, 158, 11, ${0.12 * centerPulse})`);
      centerGrad.addColorStop(0.6, `rgba(245, 158, 11, ${0.04 * centerPulse})`);
      centerGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = centerGrad;
      ctx.fillRect(width / 2 - 220, height / 2 - 220, 440, 440);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const togglePlayback = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div
      aria-label="ALABSGOLD Brand Showcase Background"
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none ${className}`}
    >
      {/* 1. Procedural 3D Shattered Glass & Gold Particles Simulation Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover opacity-75"
      />

      {/* 2. Real Video Loop (renders smoothly when local mp4 file is provided) */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        onCanPlay={() => {
          setVideoLoaded(true);
          setVideoError(false);
        }}
        onError={() => {
          setVideoError(true);
          setVideoLoaded(false);
        }}
        className={`absolute inset-0 w-full h-full object-cover mix-blend-screen transition-opacity duration-1000 ${
          videoLoaded && !videoError ? 'opacity-40' : 'opacity-0'
        }`}
      >
        <source src="/assets/alabsgold-logo-loop.mp4" type="video/mp4" />
        <source src="/alabsgold-logo-loop.mp4" type="video/mp4" />
        <source src="/assets/brand-logo-loop.mp4" type="video/mp4" />
      </video>

      {/* 3. Central Brand Logo Reveal (mirrors the exact 2K brand logo from the video) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 0.22, scale: 1 }}
          transition={{ duration: 1.6, ease: 'easeOut' }}
          className="flex flex-col items-center justify-center filter drop-shadow-[0_0_35px_rgba(245,158,11,0.25)]"
        >
          {/* Futuristic Sliced "A" Monogram */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-36">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="hero-vid-gold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fef08a" />
                  <stop offset="50%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#b45309" />
                </linearGradient>
              </defs>
              <path
                d="M 100 22 L 34 176 L 62 176 L 88 116 L 100 86 Z"
                fill="#ffffff"
                fillOpacity="0.95"
              />
              <path
                d="M 100 22 L 166 176 L 138 176 L 112 116 L 100 86 Z"
                fill="url(#hero-vid-gold)"
              />
              <path
                d="M 58 132 L 184 88 L 178 76 L 68 114 Z"
                fill="url(#hero-vid-gold)"
              />
              <polygon
                points="100,52 86,96 114,96"
                fill="#ffffff"
              />
            </svg>
          </div>

          {/* Full Wordmark "ALABS [G] OLD" */}
          <div className="mt-2 flex items-center gap-1.5 sm:gap-2 font-sans font-black text-xl sm:text-3xl text-white tracking-[0.2em]">
            <span>ALABS</span>
            <span className="inline-flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-amber-300 via-amber-500 to-amber-700 text-black font-extrabold text-sm sm:text-lg shadow-[0_0_15px_rgba(245,158,11,0.6)]">
              G
            </span>
            <span>OLD</span>
          </div>
        </motion.div>
      </div>

      {/* 4. Cinematic Dark Edge Vignette to Guarantee Pristine Text Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#09090b]/80 via-transparent to-[#09090b] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#09090b]/70 via-transparent to-[#09090b]/70 pointer-events-none" />
    </div>
  );
};

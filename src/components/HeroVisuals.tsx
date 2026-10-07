import React, { useState, useEffect } from 'react';
import defaultHeroBg from '../assets/images/5b395354-f645-4804-9a0b-d83f4f21248a.png';

// Pre-generated high-fidelity commercial image assets
const DEFAULT_HERO_BG = defaultHeroBg;
const COLORAU_JAR_IMG = '/src/assets/images/mrbritz_colorau_jar_1790172083265.jpg';
const GARLIC_JAR_IMG = '/src/assets/images/mrbritz_garlic_jar_1790172023185.jpg';
const OREGANO_JAR_IMG = '/src/assets/images/mrbritz_oregano_jar_1790172051486.jpg';

interface HeroVisualsProps {
  customBgUrl?: string | null;
  mousePos: { x: number; y: number }; // normalized -0.5 to 0.5
  viewMode?: 'composite' | 'layered';
}

export const HeroVisuals: React.FC<HeroVisualsProps> = ({
  customBgUrl,
  mousePos,
  viewMode = 'composite',
}) => {
  const [bgLoaded, setBgLoaded] = useState(false);
  const [colorauLoaded, setColorauLoaded] = useState(false);
  const [garlicLoaded, setGarlicLoaded] = useState(false);
  const [oreganoLoaded, setOreganoLoaded] = useState(false);
  const [entranceComplete, setEntranceComplete] = useState(false);

  const activeBg = customBgUrl || DEFAULT_HERO_BG;

  useEffect(() => {
    // 1. Background fade-in in 800ms
    const bgTimer = setTimeout(() => {
      setBgLoaded(true);
    }, 50);

    // 2. Colorau entrance: delay 100ms, duration 1000ms
    const colorauTimer = setTimeout(() => {
      setColorauLoaded(true);
    }, 100);

    // 3. Garlic jar entrance: delay 220ms, duration 1100ms
    const garlicTimer = setTimeout(() => {
      setGarlicLoaded(true);
    }, 220);

    // 4. Oregano product entrance: delay 300ms, duration 1200ms
    const oreganoTimer = setTimeout(() => {
      setOreganoLoaded(true);
    }, 300);

    // Entrance complete after all finish (~1600ms)
    const completeTimer = setTimeout(() => {
      setEntranceComplete(true);
    }, 1600);

    return () => {
      clearTimeout(bgTimer);
      clearTimeout(colorauTimer);
      clearTimeout(garlicTimer);
      clearTimeout(oreganoTimer);
      clearTimeout(completeTimer);
    };
  }, []);

  // Parallax calculations (max 6 to 10px based on cursor position)
  const bgParallaxX = mousePos.x * -7;
  const bgParallaxY = mousePos.y * -6;

  const colorauParallaxX = mousePos.x * 10;
  const colorauParallaxY = mousePos.y * 9;

  const garlicParallaxX = mousePos.x * 8;
  const garlicParallaxY = mousePos.y * 7;

  const oreganoParallaxX = mousePos.x * 5;
  const oreganoParallaxY = mousePos.y * 5;

  const particlesParallaxX = mousePos.x * 12;
  const particlesParallaxY = mousePos.y * 11;

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none select-none">
      {/* 1. Base Atmospheric Background Layer */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-no-repeat transition-opacity ease-out"
        style={{
          backgroundImage: `url("${activeBg}")`,
          backgroundPosition: 'center right',
          opacity: bgLoaded ? 1 : 0,
          transitionDuration: '800ms',
          transform: `translate3d(${bgParallaxX}px, ${bgParallaxY}px, 0) scale(1.03)`,
          transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />

      {/* When viewMode is 'layered' or if user wants to see individual product staging */}
      {viewMode === 'layered' && (
        <div className="absolute inset-0 w-full h-full hidden md:block">
          {/* Layer 4: Oregano jar in background */}
          {/* Initial: translateY(-80px) scale(.9) opacity 0 -> final normal position (duration: 1200ms, delay: 300ms) */}
          <div
            className={`absolute top-[18%] right-[18%] lg:right-[15%] xl:right-[17%] w-[240px] lg:w-[310px] xl:w-[360px] z-10 ${
              entranceComplete ? 'animate-float-3' : ''
            }`}
            style={{
              opacity: oreganoLoaded ? 1 : 0,
              transform: oreganoLoaded
                ? `translate3d(${oreganoParallaxX}px, ${oreganoParallaxY}px, 0) scale(1)`
                : 'translate3d(0px, -80px, 0) scale(0.9)',
              transition:
                'transform 1200ms cubic-bezier(0.16, 1, 0.3, 1), opacity 1200ms cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/10 group">
              <img
                src={OREGANO_JAR_IMG}
                alt="Orégano Desidratado Especial MR. BRITZ"
                className="w-full h-auto object-cover filter contrast-105 brightness-95"
              />
              <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-sans-clean tracking-wider uppercase text-[#F4EEE7] flex items-center justify-between">
                <span>Orégano Selecionado</span>
                <span className="text-[#E8C991] font-bold">150g / 1kg</span>
              </div>
            </div>
          </div>

          {/* Layer 3: Garlic jar entering from right */}
          {/* Initial: translateX(140px) rotate(8deg) scale(.92) opacity 0 (duration: 1100ms, delay: 220ms) */}
          <div
            className={`absolute top-[28%] right-[4%] lg:right-[5%] xl:right-[7%] w-[260px] lg:w-[330px] xl:w-[390px] z-15 ${
              entranceComplete ? 'animate-float-2' : ''
            }`}
            style={{
              opacity: garlicLoaded ? 1 : 0,
              transform: garlicLoaded
                ? `translate3d(${garlicParallaxX}px, ${garlicParallaxY}px, 0) rotate(0deg) scale(1)`
                : 'translate3d(140px, 0px, 0) rotate(8deg) scale(0.92)',
              transition:
                'transform 1100ms cubic-bezier(0.16, 1, 0.3, 1), opacity 1100ms cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.85)] border border-white/10">
              <img
                src={GARLIC_JAR_IMG}
                alt="Alho Triturado Puro MR. BRITZ"
                className="w-full h-auto object-cover filter contrast-110 brightness-100"
              />
              <div className="absolute bottom-3 left-3 right-3 px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-sans-clean tracking-wider uppercase text-[#F4EEE7] flex items-center justify-between">
                <span>Alho Triturado Puro</span>
                <span className="text-[#E8C991] font-bold">200g / 1kg / 3kg</span>
              </div>
            </div>
          </div>

          {/* Layer 2: Main Colorau product entering from bottom/right */}
          {/* Initial: translate3d(90px,70px,0) rotate(7deg) scale(.9) opacity 0 -> final translate3d(0,0,0) rotate(0) scale(1) opacity 1 (duration: 1000ms, delay: 100ms) */}
          <div
            className={`absolute bottom-[10%] right-[14%] lg:right-[15%] xl:right-[18%] w-[290px] lg:w-[370px] xl:w-[430px] z-20 ${
              entranceComplete ? 'animate-float-1' : ''
            }`}
            style={{
              opacity: colorauLoaded ? 1 : 0,
              transform: colorauLoaded
                ? `translate3d(${colorauParallaxX}px, ${colorauParallaxY}px, 0) rotate(0deg) scale(1)`
                : 'translate3d(90px, 70px, 0) rotate(7deg) scale(0.9)',
              transition:
                'transform 1000ms cubic-bezier(0.16, 1, 0.3, 1), opacity 1000ms cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-[0_30px_70px_rgba(184,29,46,0.35)] border border-[#E8C991]/30">
              <img
                src={COLORAU_JAR_IMG}
                alt="Colorau Especial Extra Vermelho MR. BRITZ"
                className="w-full h-auto object-cover filter contrast-115 brightness-105"
              />
              <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#B81D2E] text-white text-[10px] font-semibold tracking-wider uppercase">
                Destaque B2B
              </div>
              <div className="absolute bottom-3 left-3 right-3 px-3.5 py-2 rounded-lg bg-black/70 backdrop-blur-md border border-[#E8C991]/20 text-[12px] font-sans-clean tracking-wider uppercase text-[#F4EEE7] flex items-center justify-between">
                <div>
                  <div className="font-bold text-white">Colorau Especial</div>
                  <div className="text-[10px] text-white/70">Máxima Pigmentação Natural</div>
                </div>
                <span className="text-[#E8C991] font-bold">500g / 1kg / 5kg</span>
              </div>
            </div>
          </div>

          {/* Floating Ingredients & Flying Spice Particles (Parallax) */}
          <div
            className="absolute inset-0 pointer-events-none animate-particles"
            style={{
              transform: `translate3d(${particlesParallaxX}px, ${particlesParallaxY}px, 0)`,
              transition: 'transform 200ms ease-out',
            }}
          >
            {/* Particle 1: Red spice dust speck */}
            <div className="absolute top-[35%] right-[28%] w-2 h-2 rounded-full bg-[#C11D31] blur-[1px] opacity-75 animate-pulse" />
            {/* Particle 2: Golden garlic crumb */}
            <div className="absolute top-[48%] right-[11%] w-2.5 h-2.5 rounded-full bg-[#E8C991] blur-[0.5px] opacity-80" />
            {/* Particle 3: Green oregano flake */}
            <div className="absolute top-[22%] right-[13%] w-3 h-1.5 rounded-full bg-[#3B6A3D] rotate-45 opacity-70" />
            {/* Particle 4: Red chili speck */}
            <div className="absolute bottom-[24%] right-[32%] w-1.5 h-1.5 rounded-full bg-[#8D1422] opacity-85" />
            {/* Particle 5: Sea salt crystal */}
            <div className="absolute top-[60%] right-[8%] w-2 h-2 rounded bg-white/70 rotate-12 blur-[0.5px]" />
          </div>
        </div>
      )}

      {/* 2. Mandatory Horizontal Overlay Specified by User */}
      {/*
        linear-gradient(
          90deg,
          rgba(13,5,3,.94) 0%,
          rgba(18,8,5,.82) 27%,
          rgba(19,9,5,.42) 47%,
          rgba(0,0,0,.04) 68%
        )
      */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-20"
        style={{
          background: `linear-gradient(
            90deg,
            rgba(13,5,3,0.94) 0%,
            rgba(18,8,5,0.82) 27%,
            rgba(19,9,5,0.42) 47%,
            rgba(0,0,0,0.04) 68%
          )`,
        }}
      />

      {/* Mobile Darker Scrim & Vertical Gradient for Readability on Mobile Devices */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-21 lg:hidden bg-gradient-to-t from-[#0D0503] via-[#0D0503]/80 to-[#0D0503]/40" />

      {/* Deep Rich Vignette at Edges */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none z-22"
        style={{
          background: `radial-gradient(circle at 80% 50%, transparent 40%, rgba(13,5,3,0.6) 100%)`,
        }}
      />

      {/* Bottom Soft Shadow Blending */}
      <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-[#0D0503] to-transparent pointer-events-none z-22" />
    </div>
  );
};

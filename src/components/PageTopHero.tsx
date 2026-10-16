import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { HeroVisuals } from './HeroVisuals';
import { PageRoute } from '../types';
import { HERO_BACKGROUNDS } from '../assets/heroBackgrounds';

export interface PageTopHeroProps {
  pageId: PageRoute;
  mousePos: { x: number; y: number };
  customBgUrl?: string;
  breadcrumbLabel: string;
  eyebrowBadge: string;
  badgeIcon?: React.ReactNode;
  titleLines: [string, string, string]; // Line 1, Line 2, Line 3 (warm gold)
  subtitle: string;
  description: string;
  primaryCta: {
    label: string;
    action: () => void;
    icon?: React.ReactNode;
  };
  secondaryCta?: {
    label: string;
    action: () => void;
    icon?: React.ReactNode;
  };
  floatingCards: Array<{
    title: string;
    value: string;
    subtitle?: string;
    icon?: React.ReactNode;
  }>;
  targetSectionId: string;
  onNavigate: (page: PageRoute) => void;
}

export const PageTopHero: React.FC<PageTopHeroProps> = ({
  pageId,
  mousePos,
  customBgUrl,
  breadcrumbLabel,
  eyebrowBadge,
  badgeIcon,
  titleLines,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  floatingCards,
  targetSectionId,
  onNavigate,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 40);
    return () => clearTimeout(timer);
  }, []);

  const getAnimStyle = (delayMs: number) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0px)' : 'translateY(20px)',
    transition: `opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms, transform 700ms cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms`,
    willChange: 'opacity, transform',
  });

  const heroBg = customBgUrl || (pageId in HERO_BACKGROUNDS ? (HERO_BACKGROUNDS as Record<string, string>)[pageId] : undefined);

  return (
    <section className="relative w-full min-h-[100svh] lg:h-screen lg:min-h-[860px] flex flex-col justify-between overflow-hidden bg-[#0D0503]">
      {/* Visuals Layer (Background + Overlay + Parallax with page specific hero bg) */}
      <HeroVisuals mousePos={mousePos} customBgUrl={heroBg} />

      {/* Main Content Area */}
      <div className="relative z-30 w-full flex flex-col justify-center px-[25px] md:px-8 lg:px-[240px] pt-[100px] sm:pt-[120px] pb-14 sm:pb-20 lg:pt-[100px] lg:pb-0 my-auto pointer-events-none">
        <div className="w-full max-w-[1920px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Hero Content in exact Home Hero style */}
          <div className="lg:col-span-7 2xl:col-span-8 pointer-events-auto max-w-[680px]">
            {/* Breadcrumb Navigation */}
            <div style={getAnimStyle(200)} className="flex items-center gap-2 text-[13px] font-sans-clean mb-3 sm:mb-4">
              <button
                onClick={() => onNavigate('home')}
                className="text-white/60 hover:text-[#E8C991] transition-colors cursor-pointer"
              >
                Início
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-white/30" />
              <span className="text-[#E8C991] font-semibold">{breadcrumbLabel}</span>
            </div>

            {/* Eyebrow Badge */}
            <div style={getAnimStyle(320)} className="flex items-center gap-2 sm:gap-3 mb-3.5 sm:mb-5">
              <span className="w-6 sm:w-10 h-[2px] bg-[#C11D31] shrink-0" />
              <span className="font-sans-clean text-[13px] font-bold tracking-[2.5px] sm:tracking-[3px] uppercase text-[#E8C991] flex items-center gap-2">
                {badgeIcon}
                <span>{eyebrowBadge}</span>
              </span>
            </div>

            {/* 3-Line Massive Editorial Headline */}
            <h1 className="font-editorial font-bold leading-[0.96] sm:leading-[0.94] tracking-tight sm:tracking-[-1.8px] select-none text-[28px] xs:text-[34px] sm:text-[50px] xl:text-[64px] 2xl:text-[76px] break-words">
              {/* Line 1 */}
              <span
                style={getAnimStyle(450)}
                className="block text-[#F7F1E8] drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]"
              >
                {titleLines[0]}
              </span>
              {/* Line 2 */}
              <span
                style={getAnimStyle(530)}
                className="block text-[#F7F1E8] drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]"
              >
                {titleLines[1]}
              </span>
              {/* Line 3 - Warm Gold Accent */}
              <span
                style={getAnimStyle(610)}
                className="block text-[#F0C98B] drop-shadow-[0_4px_16px_rgba(240,201,139,0.25)]"
              >
                {titleLines[2]}
              </span>
            </h1>

            {/* Subtitle */}
            <p
              style={getAnimStyle(700)}
              className="font-sans-clean font-normal text-[15px] sm:text-[18px] xl:text-[20px] leading-[1.45] sm:leading-[1.35] text-white/90 max-w-[580px] mt-[14px] sm:mt-[20px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
            >
              {subtitle}
            </p>

            {/* Red Accent Divider */}
            <div
              style={getAnimStyle(740)}
              className="w-[64px] sm:w-[98px] h-[3px] bg-[#B81D2E] mt-[14px] sm:mt-[20px] mb-[14px] sm:mb-[20px] rounded-full shadow-[0_0_12px_rgba(184,29,46,0.6)]"
            />

            {/* Descriptive Body */}
            <p
              style={getAnimStyle(780)}
              className="font-sans-clean font-normal text-[15px] sm:text-[16px] leading-[1.5] text-white/80 max-w-[550px] drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
            >
              {description}
            </p>

            {/* Action Buttons in exact Home Hero style */}
            <div
              style={getAnimStyle(860)}
              className="mt-[20px] sm:mt-[30px] flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-[14px] w-full"
            >
              <button
                onClick={primaryCta.action}
                className="h-[52px] sm:h-[60px] w-full sm:w-auto sm:min-w-[240px] px-5 sm:px-[30px] rounded-full bg-gradient-to-r from-[#8D1422] to-[#C11D31] text-white font-sans-clean text-[13px] md:text-[14px] font-semibold uppercase tracking-wider flex items-center justify-center gap-2.5 sm:gap-3 transition-all duration-300 hover:-translate-y-0.5 shadow-lg active:translate-y-0 cursor-pointer group whitespace-nowrap"
              >
                <span className="whitespace-nowrap">{primaryCta.label}</span>
                {primaryCta.icon || (
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0" strokeWidth={2} />
                )}
              </button>

              {secondaryCta && (
                <button
                  onClick={secondaryCta.action}
                  className="h-[52px] sm:h-[60px] w-full sm:w-auto sm:min-w-[220px] px-5 sm:px-[26px] rounded-full bg-white/[0.04] border-[1.5px] border-white/80 text-white font-sans-clean text-[13px] md:text-[14px] font-semibold uppercase tracking-wider flex items-center justify-center gap-2.5 sm:gap-3 transition-all duration-300 hover:bg-white/10 hover:border-white cursor-pointer active:scale-[0.99] whitespace-nowrap"
                >
                  <span className="whitespace-nowrap">{secondaryCta.label}</span>
                  {secondaryCta.icon}
                </button>
              )}
            </div>

            {/* Mobile Highlights Badges */}
            <div style={getAnimStyle(920)} className="flex lg:hidden flex-wrap gap-2 mt-5 pt-4 border-t border-white/10">
              {floatingCards.map((card) => (
                <div
                  key={card.title}
                  className="px-3 py-1.5 rounded-lg bg-[#190B08]/90 border border-[#E8C991]/25 text-[13px] font-sans-clean flex items-center gap-2 backdrop-blur-sm"
                >
                  <span className="text-[#E8C991] font-semibold uppercase tracking-wider">{card.title}:</span>
                  <span className="text-white font-bold">{card.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Floating Highlights Cards with Atmospheric Parallax */}
          <div className="hidden lg:flex lg:col-span-5 2xl:col-span-4 flex-col gap-4 pointer-events-auto">
            {floatingCards.map((card, idx) => (
              <div
                key={card.title}
                style={getAnimStyle(600 + idx * 120)}
                className="p-5 sm:p-6 rounded-2xl bg-[#190B08]/85 backdrop-blur-md border border-[#E8C991]/30 hover:border-[#E8C991] shadow-[0_15px_40px_rgba(0,0,0,0.7)] transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[13px] uppercase tracking-widest text-[#E8C991] font-semibold font-sans-clean">
                    {card.title}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#25100B] border border-white/10 flex items-center justify-center text-[#E8C991] group-hover:border-[#E8C991] transition-colors">
                    {card.icon}
                  </div>
                </div>
                <div className="text-xl sm:text-2xl font-bold font-editorial text-white mb-1">
                  {card.value}
                </div>
                {card.subtitle && (
                  <p className="text-[13px] text-white/60 font-sans-clean leading-snug">
                    {card.subtitle}
                  </p>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import { PageRoute } from '../types';

interface PageHeroBannerProps {
  badge: string;
  badgeIcon?: React.ReactNode;
  title: string;
  subtitle: string;
  description?: string;
  breadcrumbLabel: string;
  onNavigate: (page: PageRoute) => void;
}

export const PageHeroBanner: React.FC<PageHeroBannerProps> = ({
  badge,
  badgeIcon,
  title,
  subtitle,
  description,
  breadcrumbLabel,
  onNavigate,
}) => {
  return (
    <div className="relative w-full bg-[#0D0503] border-b border-white/10 pt-[120px] sm:pt-[130px] lg:pt-[140px] pb-12 sm:pb-16 overflow-hidden">
      {/* Background Subtle Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none bg-[radial-gradient(#E8C991_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-5 sm:px-10 md:px-16 lg:px-[240px]">
        {/* Navigation Breadcrumb & Back Button */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2 text-xs font-sans-clean">
            <button
              onClick={() => onNavigate('home')}
              className="text-white/60 hover:text-[#E8C991] transition-colors cursor-pointer"
            >
              Início
            </button>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-[#E8C991] font-medium">{breadcrumbLabel}</span>
          </div>

          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-sans-clean text-white/80 hover:text-white transition-all cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Voltar ao Início</span>
          </button>
        </div>

        {/* Eyebrow Badge */}
        <div className="flex items-center gap-2.5 sm:gap-3.5 mb-4">
          <span className="w-6 sm:w-10 h-[2px] bg-[#C11D31] shrink-0" />
          <span className="font-sans-clean text-[11px] sm:text-[13px] font-bold tracking-[3.5px] uppercase text-[#E8C991] flex items-center gap-2">
            {badgeIcon}
            <span>{badge}</span>
          </span>
        </div>

        {/* Title & Subtitle */}
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-editorial font-bold tracking-[2px] text-white uppercase leading-[1.05] mb-4">
            {title}
          </h1>

          <p className="text-xl sm:text-2xl text-[#E8C991] font-editorial italic font-normal leading-relaxed mb-4">
            {subtitle}
          </p>

          {description && (
            <p className="text-sm sm:text-base text-white/75 font-sans-clean font-light leading-relaxed max-w-2xl">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

import React, { useEffect, useState } from 'react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { ActiveModal } from '../types';

interface HeroContentProps {
  onOpenModal: (modal: ActiveModal) => void;
}

export const HeroContent: React.FC<HeroContentProps> = ({ onOpenModal }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Trigger animation immediately after mounting
    const timer = setTimeout(() => {
      setMounted(true);
    }, 40);
    return () => clearTimeout(timer);
  }, []);

  // Standard animation style generator conforming to cubic-bezier(.16,1,.3,1) and staggered delays
  const getAnimStyle = (delayMs: number) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? 'translateY(0px)' : 'translateY(20px)',
    transition: `opacity 700ms cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms, transform 700ms cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms`,
    willChange: 'opacity, transform',
  });

  return (
    <div className="relative z-30 pointer-events-auto w-full max-w-[610px] flex flex-col justify-center">
      {/* Title - 3 phrases in separate lines, Cormorant Garamond 700 */}
      <h1 className="font-editorial font-bold leading-[0.96] sm:leading-[0.94] tracking-tight sm:tracking-[-1.8px] select-none text-[32px] xs:text-[38px] sm:text-[54px] xl:text-[68px] 2xl:text-[80px]">
        {/* Line 1 */}
        <span
          style={getAnimStyle(450)}
          className="block text-[#F7F1E8] drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]"
        >
          Bons produtos.
        </span>
        {/* Line 2 */}
        <span
          style={getAnimStyle(530)}
          className="block text-[#F7F1E8] drop-shadow-[0_4px_12px_rgba(0,0,0,0.7)]"
        >
          Boas parcerias.
        </span>
        {/* Line 3 - Warm Gold */}
        <span
          style={getAnimStyle(610)}
          className="block text-[#F0C98B] drop-shadow-[0_4px_16px_rgba(240,201,139,0.25)]"
        >
          Bons negócios.
        </span>
      </h1>

      {/* Subtitle */}
      <p
        style={getAnimStyle(700)}
        className="font-sans-clean font-normal text-[14px] xs:text-[15px] sm:text-[19px] xl:text-[21px] leading-[1.45] sm:leading-[1.35] text-white/90 max-w-[570px] mt-[14px] sm:mt-[20px] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
      >
        Alimentos desenvolvidos para fazer parte da rotina de milhares de pessoas e gerar boas oportunidades para quem vende.
      </p>

      {/* Red Accent Divider */}
      <div
        style={getAnimStyle(740)}
        className="w-[64px] sm:w-[98px] h-[3px] bg-[#B81D2E] mt-[14px] sm:mt-[22px] mb-[14px] sm:mb-[20px] rounded-full shadow-[0_0_12px_rgba(184,29,46,0.6)]"
      />

      {/* Second Text */}
      <p
        style={getAnimStyle(780)}
        className="font-sans-clean font-normal text-[13px] sm:text-[16px] leading-[1.5] sm:leading-[1.42] text-white/85 max-w-[540px] drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
      >
        Indústria e distribuição de alimentos para supermercados, distribuidores, mercados, padarias, conveniências, honest markets e food service.
      </p>

      {/* CTAs */}
      <div
        style={getAnimStyle(860)}
        className="mt-[20px] sm:mt-[30px] flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-[14px] w-full"
      >
        {/* Button 1: Conheça Nossos Produtos */}
        <button
          onClick={() => onOpenModal('products')}
          className="h-[52px] sm:h-[64px] w-full sm:w-auto sm:min-w-[280px] px-4 sm:px-[30px] rounded-full bg-gradient-to-r from-[#8D1422] to-[#C11D31] text-white font-sans-clean text-[12px] xs:text-[13px] sm:text-[14px] font-semibold uppercase tracking-wider flex items-center justify-center gap-2.5 sm:gap-3 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer group shadow-lg whitespace-nowrap"
        >
          <span className="whitespace-nowrap">Conheça Nossos Produtos</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0" strokeWidth={2} />
        </button>

        {/* Button 2: Fale com o Comercial */}
        <button
          onClick={() => onOpenModal('contact')}
          className="h-[52px] sm:h-[64px] w-full sm:w-auto sm:min-w-[240px] px-4 sm:px-[26px] rounded-full bg-white/[0.04] border-[1.5px] border-white/80 text-white font-sans-clean text-[12px] xs:text-[13px] sm:text-[14px] font-semibold uppercase tracking-wider flex items-center justify-center gap-2.5 sm:gap-3 transition-all duration-300 hover:bg-white/10 hover:border-white cursor-pointer active:scale-[0.99] whitespace-nowrap"
        >
          <span className="whitespace-nowrap">Fale com o Comercial</span>
          <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
};

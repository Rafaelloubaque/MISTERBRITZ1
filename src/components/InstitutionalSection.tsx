import React, { useEffect, useRef, useState } from 'react';
import { Gem, Handshake, ArrowUpRight } from 'lucide-react';
import ImageCube from './ImageCube';

export const InstitutionalSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Stagger animation generator for smooth high-end editorial entrance
  const getStaggerStyle = (delayMs: number) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(20px)',
    transition: `opacity 800ms cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms, transform 800ms cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms`,
    willChange: 'opacity, transform',
  });

  return (
    <section
      id="institucional"
      ref={sectionRef}
      className="relative w-full text-[#F4EEE7] overflow-hidden bg-black border-t border-white/10 min-h-[auto] lg:min-h-[850px] xl:min-h-[920px] flex flex-col justify-between"
    >
      {/* Main Container - Aligned with Hero width and margins */}
      <div
        className="relative z-10 w-full h-full max-w-[1920px] mx-auto px-[25px] md:px-8 lg:px-[240px] py-10 sm:py-12 lg:py-14 flex flex-col justify-between gap-8 sm:gap-10 lg:gap-0"
      >
        
        {/* ==================================================
            TOP BAR: A MISTER BRITZ (Left) & MAIS SABOR + ALIMENTOS (Right)
            ================================================== */}
        <div className="w-full flex items-start justify-between -mb-[48px] sm:-mb-6 lg:-mb-[48px] relative z-10">
          {/* Top-Left: A MISTER BRITZ */}
          <div
            style={getStaggerStyle(150)}
            className="flex items-center gap-2 sm:gap-3.5 pt-1"
          >
            <span className="w-5 sm:w-9 h-[2px] bg-[#C11D31] shrink-0" />
            <span className="font-sans-clean text-[11px] sm:text-[14px] font-bold tracking-[2.5px] sm:tracking-[5px] uppercase text-[#E8C991]">
              A MISTER BRITZ
            </span>
          </div>

          {/* Top-Right: MAIS SABOR PARA GRANDES HISTÓRIAS + ALIMENTOS QUE CONECTAM PESSOAS E NEGÓCIOS */}
          <div
            style={getStaggerStyle(250)}
            className="flex flex-col items-end text-right"
          >
            {/* MAIS SABOR PARA GRANDES HISTÓRIAS */}
            <div className="flex flex-col items-end leading-tight">
              <span className="font-sans-clean text-[9.5px] sm:text-[11.5px] font-bold tracking-[1.8px] sm:tracking-[2.5px] uppercase text-white">
                MAIS SABOR
              </span>
              <span className="font-sans-clean text-[9.5px] sm:text-[11.5px] font-bold tracking-[1.8px] sm:tracking-[2.5px] uppercase text-white">
                PARA GRANDES
              </span>
              <span className="font-sans-clean text-[9.5px] sm:text-[11.5px] font-bold tracking-[1.8px] sm:tracking-[2.5px] uppercase text-white">
                HISTÓRIAS
              </span>
            </div>

            {/* Accent divider */}
            <span className="w-8 sm:w-12 h-[1.5px] bg-[#C11D31] my-1.5 sm:my-2.5" />

            {/* ALIMENTOS QUE CONECTAM PESSOAS E NEGÓCIOS (posicionado abaixo de MAIS SABOR) */}
            <div className="flex flex-col items-end leading-tight">
              <span className="font-sans-clean text-[8.5px] sm:text-[10px] font-semibold tracking-[1.6px] sm:tracking-[2.2px] uppercase text-white/70">
                ALIMENTOS
              </span>
              <span className="font-sans-clean text-[8.5px] sm:text-[10px] font-semibold tracking-[1.6px] sm:tracking-[2.2px] uppercase text-white/70">
                QUE CONECTAM
              </span>
              <span className="font-sans-clean text-[8.5px] sm:text-[10px] font-semibold tracking-[1.6px] sm:tracking-[2.2px] uppercase text-white/70">
                PESSOAS
              </span>
              <span className="font-sans-clean text-[8.5px] sm:text-[10px] font-semibold tracking-[1.6px] sm:tracking-[2.2px] uppercase text-white/70">
                E NEGÓCIOS
              </span>
            </div>
          </div>
        </div>

        {/* ==================================================
            MAIN CONTENT AREA
            Left: Editorial text
            Right: Mister Britz Logo / 3D Cube
            ================================================== */}
        <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14 relative z-10 my-auto pt-4 sm:pt-6 lg:pt-0">
          {/* Left Editorial Column */}
          <div className="w-full lg:w-[54%] xl:w-[50%] max-w-[620px] flex flex-col justify-start mt-0 ml-0 mb-0 pl-0 shrink-0">
            
            {/* Double Quotes */}
            <div
              style={getStaggerStyle(300)}
              className="text-[#C11D31] font-editorial text-[34px] sm:text-[54px] leading-none mb-[-2px] sm:mb-[-8px] select-none"
            >
              “
            </div>

            {/* Main Headline */}
            <h2
              style={getStaggerStyle(380)}
              className="font-editorial font-bold text-[26px] xs:text-[30px] sm:text-[38px] lg:text-[42px] xl:text-[48px] leading-[1.12] sm:leading-[1.02] tracking-[-0.5px] sm:tracking-[-1px] text-[#FAF4EC]"
            >
              Uma indústria preparada <br className="hidden sm:inline" />
              para crescer junto com <br className="hidden sm:inline" />
              seus parceiros.
            </h2>

            {/* Paragraphs */}
            <div
              style={getStaggerStyle(480)}
              className="mt-4 sm:mt-5 max-w-[560px]"
            >
              <div className="space-y-2.5 sm:space-y-3">
                <p className="font-sans-clean font-normal text-[13.5px] sm:text-[15px] leading-[1.65] sm:leading-[1.7] text-white/85">
                  A Mister Britz nasceu com uma proposta clara: desenvolver, produzir e distribuir
                  alimentos que combinem qualidade, praticidade, apresentação e competitividade.
                </p>
                <p className="font-sans-clean font-normal text-[13.5px] sm:text-[15px] leading-[1.65] sm:leading-[1.7] text-white/85">
                  Somos uma empresa brasileira com operação em São Paulo e atuação voltada para
                  diferentes canais do varejo e do food service.
                </p>
                <p className="font-sans-clean font-normal text-[13.5px] sm:text-[15px] leading-[1.65] sm:leading-[1.7] text-white/85">
                  Mais do que colocar produtos nas prateleiras, buscamos construir relações
                  comerciais consistentes e de longo prazo.
                </p>
              </div>
            </div>

            {/* Manifesto Block */}
            <div
              style={getStaggerStyle(600)}
              className="mt-6 sm:mt-7 pt-2"
            >
              {/* Quotes + Hairline Rule */}
              <div className="flex items-center gap-3 mb-2.5">
                <span className="text-[#C11D31] font-editorial text-[22px] sm:text-[26px] leading-none select-none">
                  “
                </span>
                <span className="flex-1 max-w-[440px] h-[1px] bg-[#C11D31]/40" />
              </div>

              {/* Manifesto Header */}
              <h3 className="font-editorial text-[18px] sm:text-[22px] font-bold text-[#FAF4EC] leading-[1.3] max-w-[530px]">
                Porque acreditamos que um bom produto precisa fazer sentido para todos.
              </h3>

              {/* 4 Lines */}
              <div className="mt-3 space-y-1 font-editorial text-[15px] sm:text-[18px]">
                <div className="text-white/85 font-semibold">Para quem produz.</div>
                <div className="text-white/85 font-semibold">Para quem distribui.</div>
                <div className="text-white/85 font-semibold">Para quem vende.</div>
                <div className="text-[#E8C991] font-bold text-[16px] sm:text-[20px] pt-0.5">
                  E principalmente, para quem consome.
                </div>
              </div>
            </div>

            {/* Signature */}
            <div
              style={getStaggerStyle(720)}
              className="mt-5 sm:mt-6 pt-3.5 border-t border-white/15"
            >
              <p className="font-sans-clean font-normal text-[13px] sm:text-[15px] text-white/80">
                <strong className="font-bold text-white">Mister Britz.</strong> Da nossa
                produção para milhares de momentos.
              </p>
            </div>

            {/* Bottom 3 Pillars: Qualidade, Parcerias, Crescimento */}
            <div
              style={getStaggerStyle(850)}
              className="mt-6 sm:mt-7 pt-1 grid grid-cols-1 xs:grid-cols-3 sm:flex sm:flex-row sm:items-center gap-3.5 sm:gap-8 pb-2"
            >
              {/* 1. Qualidade */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#B81D2E]/20 border border-[#B81D2E]/50 flex items-center justify-center text-[#E8C991] shrink-0">
                  <Gem className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.8]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans-clean text-[10px] sm:text-[11px] font-bold uppercase tracking-[1.2px] sm:tracking-[1.5px] text-white leading-tight">
                    QUALIDADE
                  </span>
                  <span className="font-sans-clean text-[8.5px] sm:text-[9px] font-medium uppercase tracking-[1px] sm:tracking-[1.2px] text-white/60 leading-tight">
                    EM CADA DETALHE
                  </span>
                </div>
              </div>

              {/* Divider */}
              <span className="hidden sm:block w-[1px] h-7 bg-white/15" />

              {/* 2. Parcerias */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#B81D2E]/20 border border-[#B81D2E]/50 flex items-center justify-center text-[#E8C991] shrink-0">
                  <Handshake className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[1.8]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans-clean text-[10px] sm:text-[11px] font-bold uppercase tracking-[1.2px] sm:tracking-[1.5px] text-white leading-tight">
                    PARCERIAS
                  </span>
                  <span className="font-sans-clean text-[8.5px] sm:text-[9px] font-medium uppercase tracking-[1px] sm:tracking-[1.2px] text-white/60 leading-tight">
                    MAIS FORTES
                  </span>
                </div>
              </div>

              {/* Divider */}
              <span className="hidden sm:block w-[1px] h-7 bg-white/15" />

              {/* 3. Crescimento */}
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#B81D2E]/20 border border-[#B81D2E]/50 flex items-center justify-center text-[#E8C991] shrink-0">
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[2]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans-clean text-[13px] font-bold uppercase tracking-[1.2px] sm:tracking-[1.5px] text-white leading-tight">
                    CRESCIMENTO
                  </span>
                  <span className="font-sans-clean text-[13px] font-medium uppercase tracking-[1px] sm:tracking-[1.2px] text-white/60 leading-tight">
                    COMPARTILHADO
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: 3D Image Cube */}
          <div
            style={getStaggerStyle(420)}
            className="w-full lg:w-[46%] xl:w-[50%] flex items-center justify-center lg:justify-end shrink-0 py-6 sm:py-8 lg:py-0 overflow-hidden lg:overflow-visible max-w-full"
          >
            <div className="relative flex items-center justify-center p-2 sm:p-4">
              {/* Subtle ambient backlight glow */}
              <div className="absolute inset-0 bg-[#C11D31]/15 rounded-full blur-3xl pointer-events-none transform scale-110" />
              
              <ImageCube className="relative z-10 flex items-center justify-center" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

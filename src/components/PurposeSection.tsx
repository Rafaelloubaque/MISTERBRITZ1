import React, { useEffect, useRef, useState } from 'react';
import { 
  ShieldCheck, 
  Repeat, 
  TrendingUp, 
  Layers, 
  ArrowRight, 
  Quote, 
  CheckCircle2
} from 'lucide-react';
import logoSmall from '../assets/logo3.png';
import { ActiveModal } from '../types';

interface PurposeSectionProps {
  onOpenModal: (modal: ActiveModal) => void;
}

export const PurposeSection: React.FC<PurposeSectionProps> = ({ onOpenModal }) => {
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

  const getStaggerStyle = (delayMs: number) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(24px)',
    transition: `opacity 800ms cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms, transform 800ms cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms`,
    willChange: 'opacity, transform',
  });

  const pillars = [
    {
      num: '01',
      target: 'CONSUMIDOR',
      title: 'Confiança para o consumidor',
      description:
        'Sabor marcante, padrão rigoroso de qualidade e a segurança de levar para a mesa alimentos confiáveis todos os dias.',
      icon: ShieldCheck,
    },
    {
      num: '02',
      target: 'PONTO DE VENDA',
      title: 'Giro para o ponto de venda',
      description:
        'Aparência atraente na gôndola, embalagens práticas e excelente aceitação do público para acelerar o giro e a rentabilidade do lojista.',
      icon: Repeat,
    },
    {
      num: '03',
      target: 'DISTRIBUIDOR',
      title: 'Competitividade para o distribuidor',
      description:
        'Margens atrativas, estabilidade de fornecimento e condições comerciais sólidas para expandir rotas de distribuição com segurança.',
      icon: TrendingUp,
    },
    {
      num: '04',
      target: 'TODA A CADEIA',
      title: 'Consistência para toda a cadeia',
      description:
        'Padronização técnica contínua, compromisso com prazos e relações transparentes de longo prazo que fortalecem todos os elos do negócio.',
      icon: Layers,
    },
  ];

  return (
    <section
      id="proposito"
      ref={sectionRef}
      className="relative w-full text-[#F4EEE7] overflow-hidden bg-black border-t border-white/10 py-16 sm:py-20 lg:py-24"
    >
      {/* Main Container - Synchronized with layout grid */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-5 sm:px-10 md:px-16 lg:px-[240px]">
        
        {/* Top Header Eyebrow */}
        <div
          style={getStaggerStyle(120)}
          className="flex items-center gap-2.5 sm:gap-3.5 mb-5 sm:mb-6"
        >
          <span className="w-6 sm:w-10 h-[2px] bg-[#C11D31] shrink-0" />
          <span className="font-sans-clean text-[11px] sm:text-[13px] font-bold tracking-[3.5px] sm:tracking-[5px] uppercase text-[#E8C991]">
            NOSSO PROPÓSITO
          </span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-white/30" />
          <span className="hidden sm:inline-block font-sans-clean text-[11px] uppercase tracking-[2px] text-white/50">
            MISTER BRITZ FOODS
          </span>
        </div>

        {/* Lead Headline & Intro Paragraph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-14 items-start mb-12 sm:mb-16 lg:mb-20">
          {/* Main Statement */}
          <div style={getStaggerStyle(240)} className="lg:col-span-8">
            <h2 className="font-editorial font-bold text-[32px] xs:text-[38px] sm:text-[48px] lg:text-[58px] xl:text-[64px] leading-[1.02] tracking-[-0.8px] sm:tracking-[-1.5px] text-[#F7F1E8]">
              Produtos que fazem sentido para quem{' '}
              <span className="text-[#E8C991] italic font-semibold">compra</span>, para quem{' '}
              <span className="text-[#E8C991] italic font-semibold">vende</span> e para quem{' '}
              <span className="text-white drop-shadow-[0_2px_12px_rgba(232,201,145,0.25)]">
                consome.
              </span>
            </h2>
          </div>

          {/* Intro Context Box */}
          <div style={getStaggerStyle(360)} className="lg:col-span-4 lg:pt-3 flex flex-col justify-between h-full">
            <div className="relative overflow-hidden p-5 sm:p-6 rounded-2xl bg-[#110705] border border-white/10 group">
              {/* Subtle small logo watermark behind text */}
              <div className="absolute -right-2 -bottom-2 w-24 h-24 opacity-[0.08] pointer-events-none select-none transition-opacity duration-300 group-hover:opacity-[0.14]">
                <img src={logoSmall} alt="" className="w-full h-full object-contain" />
              </div>

              <div className="relative z-10 flex items-center gap-2.5 text-[#E8C991] mb-2.5">
                <img src={logoSmall} alt="Logo Mister Britz" className="w-5 h-5 object-contain shrink-0" />
                <span className="font-sans-clean text-[11px] font-bold tracking-[2px] uppercase">
                  Compromisso Real
                </span>
              </div>
              <p className="relative z-10 font-sans-clean text-[15px] sm:text-[17px] leading-[1.6] text-white/85 font-normal">
                Uma boa marca de alimentos precisa entregar{' '}
                <strong className="text-white font-semibold">muito mais do que sabor</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                style={getStaggerStyle(450 + idx * 110)}
                className="group relative p-6 sm:p-7 rounded-2xl bg-[#110705] border border-white/10 hover:border-[#E8C991]/50 hover:bg-[#160A08] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between overflow-hidden"
              >
                <div className="relative z-10">
                  {/* Card Header: Number & Tag */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-editorial text-[24px] sm:text-[28px] font-bold text-white/40 group-hover:text-[#E8C991] transition-colors">
                      {pillar.num}
                    </span>
                    <span className="font-sans-clean text-[9.5px] sm:text-[10px] font-bold tracking-[2px] uppercase px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                      {pillar.target}
                    </span>
                  </div>

                  {/* Icon Badge */}
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#8D1422]/20 border border-[#8D1422]/50 flex items-center justify-center text-[#E8C991] mb-5 group-hover:scale-105 group-hover:bg-[#8D1422]/35 transition-all duration-300">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={1.75} />
                  </div>

                  {/* Pillar Title */}
                  <h3 className="font-editorial font-bold text-[22px] sm:text-[24px] leading-tight text-white mb-3 group-hover:text-[#E8C991] transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Pillar Description */}
                  <p className="font-sans-clean text-[13px] sm:text-[13.5px] leading-relaxed text-white/70 font-normal">
                    {pillar.description}
                  </p>
                </div>

                {/* Bottom line accent */}
                <div className="relative z-10 pt-5 mt-5 border-t border-white/10 flex items-center gap-1.5 text-[11px] font-sans-clean font-semibold tracking-[1px] uppercase text-white/40 group-hover:text-[#E8C991] transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E8C991]" />
                  <span>Entrega Garantida</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Manifesto Closing Banner: "É essa relação que buscamos construir todos os dias." */}
        <div
          style={getStaggerStyle(900)}
          className="relative overflow-hidden rounded-3xl bg-[#120705] border border-white/15 p-7 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
        >
          {/* Decorative watermark logo / quote icon */}
          <div className="absolute right-4 -bottom-6 text-white/[0.03] pointer-events-none select-none">
            <Quote className="w-48 h-48 sm:w-64 sm:h-64 rotate-12" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 sm:gap-10">
            {/* Left Statement */}
            <div className="max-w-3xl">
              <div className="flex items-center gap-2 text-[#E8C991] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#C11D31] animate-ping" />
                <span className="font-sans-clean text-[11px] sm:text-[12px] font-bold tracking-[2.5px] uppercase">
                  NOSSO COMPROMISSO DIÁRIO
                </span>
              </div>
              <h3 className="font-editorial font-bold text-[28px] xs:text-[34px] sm:text-[42px] lg:text-[46px] leading-[1.08] text-[#F7F1E8]">
                “É essa relação que buscamos{' '}
                <span className="text-[#E8C991] italic underline decoration-[#C11D31]/60 underline-offset-4">
                  construir todos os dias.
                </span>”
              </h3>
              <p className="mt-3 font-sans-clean text-[13.5px] sm:text-[15px] text-white/70 max-w-xl leading-relaxed">
                Mais do que fornecer condimentos e especiarias, fortalecemos pontes de negócio com transparência e excelência operacional.
              </p>
            </div>

            {/* Right Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full lg:w-auto shrink-0">
              <button
                onClick={() => onOpenModal('contact')}
                className="h-[52px] sm:h-[58px] px-7 rounded-full bg-[#C11D31] hover:bg-[#8D1422] text-white font-sans-clean text-[13px] sm:text-[14px] font-semibold uppercase tracking-wider flex items-center justify-center gap-3 transition-all duration-300 hover:scale-[1.02] active:scale-[0.99] cursor-pointer"
              >
                <span>Fale Conosco</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onOpenModal('products')}
                className="h-[52px] sm:h-[58px] px-6 rounded-full bg-white/5 border border-white/20 text-[#F4EEE7] font-sans-clean text-[13px] sm:text-[14px] font-semibold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white/40 transition-all duration-300 active:scale-[0.99] cursor-pointer"
              >
                <span>Ver Produtos</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

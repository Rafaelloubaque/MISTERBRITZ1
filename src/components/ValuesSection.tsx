import React, { useEffect, useRef, useState } from 'react';
import { 
  Target, 
  Eye, 
  Award, 
  ShieldCheck, 
  Gauge, 
  Lightbulb, 
  Handshake, 
  Scale, 
  ArrowRight
} from 'lucide-react';
import logoSmall from '../assets/logo3.png';
import { ActiveModal } from '../types';

interface ValuesSectionProps {
  onOpenModal: (modal: ActiveModal) => void;
}

export const ValuesSection: React.FC<ValuesSectionProps> = ({ onOpenModal }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getStaggerStyle = (delayMs: number) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(24px)',
    transition: `opacity 750ms cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms, transform 750ms cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms`,
    willChange: 'opacity, transform',
  });

  const coreValues = [
    {
      num: '01',
      title: 'Qualidade',
      description:
        'Cuidado em cada etapa para entregar produtos que representem aquilo em que acreditamos.',
      icon: Award,
    },
    {
      num: '02',
      title: 'Confiança',
      description:
        'Relacionamentos transparentes e compromisso com clientes, fornecedores e parceiros.',
      icon: ShieldCheck,
    },
    {
      num: '03',
      title: 'Eficiência',
      description:
        'Processos pensados para gerar consistência, produtividade e competitividade.',
      icon: Gauge,
    },
    {
      num: '04',
      title: 'Inovação',
      description:
        'Uma empresa aberta a novas categorias, sabores, formatos e oportunidades.',
      icon: Lightbulb,
    },
    {
      num: '05',
      title: 'Parceria',
      description:
        'Não queremos apenas vender para nossos clientes. Queremos crescer com eles.',
      icon: Handshake,
    },
    {
      num: '06',
      title: 'Responsabilidade',
      description:
        'Decisões conscientes em relação às pessoas, aos recursos, aos produtos e ao futuro do negócio.',
      icon: Scale,
    },
  ];

  return (
    <section
      id="missao-visao-valores"
      ref={sectionRef}
      className="relative w-full text-[#F4EEE7] overflow-hidden bg-[#0A0504] border-t border-white/10 py-16 sm:py-20 lg:py-24"
    >
      {/* Main Container */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-[25px] md:px-8 lg:px-[240px]">
        
        {/* Section Eyebrow */}
        <div
          style={getStaggerStyle(100)}
          className="flex items-center gap-2.5 sm:gap-3.5 mb-5 sm:mb-6"
        >
          <span className="w-6 sm:w-10 h-[2px] bg-[#C11D31] shrink-0" />
          <span className="font-sans-clean text-[11px] sm:text-[13px] font-bold tracking-[3.5px] sm:tracking-[5px] uppercase text-[#E8C991]">
            MISSÃO, VISÃO E VALORES
          </span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-white/30" />
          <span className="hidden sm:inline-block font-sans-clean text-[11px] uppercase tracking-[2px] text-white/50">
            MISTER BRITZ
          </span>
        </div>

        {/* Section Main Title */}
        <div
          style={getStaggerStyle(200)}
          className="flex flex-col md:flex-row md:items-end justify-between gap-5 sm:gap-8 mb-12 sm:mb-16"
        >
          <div className="max-w-3xl">
            <h2 className="font-editorial font-bold text-[32px] xs:text-[38px] sm:text-[48px] lg:text-[58px] leading-[1.05] tracking-[-0.8px] sm:tracking-[-1.5px] text-[#F7F1E8]">
              O que guia a{' '}
              <span className="text-[#E8C991] italic font-semibold">Mister Britz</span>.
            </h2>
          </div>
          <p className="font-sans-clean text-[14px] sm:text-[15.5px] leading-relaxed text-white/70 max-w-md">
            Diretrizes institucionais que fundamentam nossas operações diárias e conduzem o relacionamento com toda a cadeia.
          </p>
        </div>

        {/* ==================================================
            1. MISSÃO & VISÃO DUAL CARDS (Solid, Zero Gradient)
            ================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-8 mb-14 sm:mb-20">
          
          {/* Card Missão */}
          <div
            style={getStaggerStyle(300)}
            className="group relative p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-[#110705] border border-white/10 hover:border-[#C11D31]/60 hover:bg-[#160A08] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.6)]"
          >
            {/* Watermark Logo Icon */}
            <div className="absolute right-3 -bottom-3 w-32 h-32 opacity-[0.04] pointer-events-none select-none transition-opacity duration-300 group-hover:opacity-[0.08]">
              <img src={logoSmall} alt="" className="w-full h-full object-contain" />
            </div>

            <div>
              {/* Header: Icon & Tag */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#8D1422]/20 border border-[#8D1422]/50 flex items-center justify-center text-[#E8C991] group-hover:bg-[#8D1422]/35 group-hover:scale-105 transition-all duration-300">
                  <Target className="w-6 h-6" strokeWidth={1.75} />
                </div>
                <span className="font-sans-clean text-[10px] sm:text-[11px] font-bold tracking-[2.5px] uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#E8C991]">
                  PROPÓSITO DE ATUAÇÃO
                </span>
              </div>

              {/* Title */}
              <h3 className="font-editorial font-bold text-[28px] sm:text-[34px] leading-tight text-white mb-4 group-hover:text-[#E8C991] transition-colors">
                Missão
              </h3>

              {/* Description */}
              <p className="font-sans-clean text-[15px] sm:text-[17px] leading-[1.7] text-white/85 font-normal">
                Produzir e distribuir alimentos de qualidade, criando produtos competitivos e construindo relações comerciais duradouras com clientes, fornecedores e consumidores.
              </p>
            </div>

            {/* Bottom accent indicator */}
            <div className="pt-6 mt-8 border-t border-white/10 flex items-center justify-between text-xs font-sans-clean">
              <span className="text-white/50 tracking-wider uppercase font-semibold text-[11px]">Compromisso Comercial</span>
              <span className="w-2 h-2 rounded-full bg-[#C11D31]" />
            </div>
          </div>

          {/* Card Visão */}
          <div
            style={getStaggerStyle(420)}
            className="group relative p-5 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-[#110705] border border-white/10 hover:border-[#E8C991]/60 hover:bg-[#160A08] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.6)]"
          >
            {/* Watermark Logo Icon */}
            <div className="absolute right-3 -bottom-3 w-32 h-32 opacity-[0.04] pointer-events-none select-none transition-opacity duration-300 group-hover:opacity-[0.08]">
              <img src={logoSmall} alt="" className="w-full h-full object-contain" />
            </div>

            <div>
              {/* Header: Icon & Tag */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#8D1422]/20 border border-[#8D1422]/50 flex items-center justify-center text-[#E8C991] group-hover:bg-[#8D1422]/35 group-hover:scale-105 transition-all duration-300">
                  <Eye className="w-6 h-6" strokeWidth={1.75} />
                </div>
                <span className="font-sans-clean text-[10px] sm:text-[11px] font-bold tracking-[2.5px] uppercase px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#E8C991]">
                  DIREÇÃO ESTRATÉGICA
                </span>
              </div>

              {/* Title */}
              <h3 className="font-editorial font-bold text-[28px] sm:text-[34px] leading-tight text-white mb-4 group-hover:text-[#E8C991] transition-colors">
                Visão
              </h3>

              {/* Description */}
              <p className="font-sans-clean text-[15px] sm:text-[17px] leading-[1.7] text-white/85 font-normal">
                Construir uma marca brasileira reconhecida pela qualidade de seus produtos, pela capacidade de inovação e pela força das parcerias desenvolvidas no varejo e na distribuição.
              </p>
            </div>

            {/* Bottom accent indicator */}
            <div className="pt-6 mt-8 border-t border-white/10 flex items-center justify-between text-xs font-sans-clean">
              <span className="text-white/50 tracking-wider uppercase font-semibold text-[11px]">Reconhecimento Nacional</span>
              <span className="w-2 h-2 rounded-full bg-[#E8C991]" />
            </div>
          </div>

        </div>

        {/* ==================================================
            2. VALORES SECTION (6 Solid Cards Grid)
            ================================================== */}
        <div style={getStaggerStyle(520)} className="mb-6 sm:mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-5 h-[2px] bg-[#E8C991]" />
            <span className="font-sans-clean text-[11px] sm:text-[12px] font-bold tracking-[3px] uppercase text-[#E8C991]">
              PRINCÍPIOS QUE NOS MOVEM
            </span>
          </div>
          <h3 className="font-editorial font-bold text-[28px] sm:text-[38px] leading-tight text-[#F7F1E8]">
            Valores
          </h3>
        </div>

        {/* 6 Cards Grid (Solid, Zero Gradient) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {coreValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={val.num}
                style={getStaggerStyle(600 + idx * 80)}
                className="group relative p-5 sm:p-7 rounded-2xl bg-[#110705] border border-white/10 hover:border-[#E8C991]/50 hover:bg-[#160A08] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.5)]"
              >
                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-editorial text-[22px] sm:text-[24px] font-bold text-white/35 group-hover:text-[#E8C991] transition-colors">
                      {val.num}
                    </span>
                    <div className="w-10 h-10 rounded-lg bg-[#8D1422]/20 border border-[#8D1422]/50 flex items-center justify-center text-[#E8C991] group-hover:bg-[#8D1422]/35 group-hover:scale-105 transition-all duration-300">
                      <Icon className="w-5 h-5" strokeWidth={1.75} />
                    </div>
                  </div>

                  {/* Value Title */}
                  <h4 className="font-editorial font-bold text-[22px] sm:text-[24px] text-white mb-2.5 group-hover:text-[#E8C991] transition-colors">
                    {val.title}
                  </h4>

                  {/* Value Description */}
                  <p className="font-sans-clean text-[13.5px] sm:text-[14px] leading-relaxed text-white/75 font-normal">
                    {val.description}
                  </p>
                </div>

                {/* Bottom line marker */}
                <div className="pt-4 mt-5 border-t border-white/5 flex items-center gap-1.5 text-[10.5px] font-sans-clean font-semibold tracking-[1.5px] uppercase text-white/40 group-hover:text-[#E8C991] transition-colors">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C11D31]" />
                  <span>MISTER BRITZ</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Contact Bar below values */}
        <div
          style={getStaggerStyle(1100)}
          className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl bg-[#110705] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div>
            <h4 className="font-editorial font-bold text-[20px] sm:text-[22px] text-white">
              Quer fazer parte desta história de parceria e crescimento?
            </h4>
            <p className="font-sans-clean text-[14px] sm:text-[15px] text-white/60 mt-1">
              Converse com nossa equipe comercial e conheça as condições para distribuidores e lojistas.
            </p>
          </div>
          <button
            onClick={() => onOpenModal('contact')}
            className="w-full sm:w-auto shrink-0 h-[48px] sm:h-[52px] px-5 sm:px-8 rounded-full bg-[#C11D31] hover:bg-[#8D1422] text-white font-sans-clean text-[13px] md:text-[14px] font-semibold uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.99] cursor-pointer whitespace-nowrap"
          >
            <span className="whitespace-nowrap">Contato Comercial</span>
            <ArrowRight className="w-4 h-4 shrink-0" />
          </button>
        </div>

      </div>
    </section>
  );
};

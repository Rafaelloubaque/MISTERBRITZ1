import React, { useEffect, useRef, useState } from 'react';
import { 
  Factory, 
  Package, 
  Sliders, 
  CheckCircle2, 
  Building2, 
  Truck, 
  ArrowRight,
  Briefcase,
  Layers,
  Boxes,
  PackagePlus,
  PackageCheck
} from 'lucide-react';
import logoSmall from '../assets/logo3.png';
import { ActiveModal } from '../types';

interface FactorySectionProps {
  onOpenModal: (modal: ActiveModal) => void;
}

export const FactorySection: React.FC<FactorySectionProps> = ({ onOpenModal }) => {
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

  const futurePillars = [
    { title: 'Novos produtos', desc: 'Pesquisa contínua e ampliação de portfólio', icon: PackagePlus },
    { title: 'Novos formatos', desc: 'Embalagens sob medida para o varejo e atacado', icon: Boxes },
    { title: 'Novas categorias', desc: 'Expansão estratégica no mercado de alimentos', icon: Layers },
    { title: 'Novas oportunidades', desc: 'Soluções sob medida para distribuidores e redes', icon: Briefcase },
  ];

  const operations = [
    {
      num: '01',
      title: 'Produção e desenvolvimento de alimentos',
      desc: 'Infraestrutura moderna e maquinário calibrado para receitas consistentes e alto padrão sensorial.',
      icon: Factory,
    },
    {
      num: '02',
      title: 'Fracionamento e acondicionamento',
      desc: 'Linhas automatizadas de pesagem e envase que asseguram vedação perfeita e máxima preservação de aroma e sabor.',
      icon: Package,
    },
    {
      num: '03',
      title: 'Padronização de processos',
      desc: 'SOPs rigorosos em todas as etapas de fabricação garantindo repetibilidade lote a lote.',
      icon: Sliders,
    },
    {
      num: '04',
      title: 'Controle de qualidade',
      desc: 'Auditoria contínua de insumos, monitoramento de parâmetros sanitários e laudos analíticos laboratoriais.',
      icon: CheckCircle2,
    },
    {
      num: '05',
      title: 'Desenvolvimento de novos produtos',
      desc: 'P&D especializado para formulação de condimentos, temperos e misturas alinhadas às demandas de consumo.',
      icon: PackageCheck,
    },
    {
      num: '06',
      title: 'Operação voltada ao mercado B2B',
      desc: 'Capacidade de fornecimento para grandes redes supermercadistas, atacadistas e distribuidores regionais.',
      icon: Building2,
    },
    {
      num: '07',
      title: 'Distribuição e atendimento comercial',
      desc: 'Logística integrada, expedição pontual e suporte direto com gerentes de contas dedicados.',
      icon: Truck,
    },
  ];

  return (
    <section
      id="fabrica"
      ref={sectionRef}
      className="relative w-full text-[#F4EEE7] overflow-hidden bg-[#070302] border-t border-white/10 py-16 sm:py-20 lg:py-24"
    >
      {/* Container Principal com padding mobile-first px-[25px] */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-[25px] md:px-8 lg:px-[240px]">
        {/* ==================================================
            1. CABEÇALHO DA SEÇÃO
            ================================================== */}
        <div style={getStaggerStyle(0)} className="mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E8C991]/30 bg-[#160A08] text-[#E8C991] text-[13px] font-sans-clean font-semibold tracking-[3px] uppercase mb-4">
            <Factory className="w-3.5 h-3.5" />
            <span>ESTRUTURA & OPERAÇÃO INDUSTRIAL</span>
          </div>

          <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-sans-clean font-extrabold tracking-tight uppercase text-white mb-3">
            NOSSA FÁBRICA
          </h2>
          <p className="text-[20px] sm:text-2xl md:text-3xl font-serif italic text-[#E8C991]">
            Onde qualidade encontra escala.
          </p>
        </div>

        {/* ==================================================
            2. MANIFESTO INDUSTRIAL & VISÃO DE FUTURO
            ================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-14 sm:mb-16 items-stretch">
          {/* Manifesto Card (Solid Dark) */}
          <div
            style={getStaggerStyle(120)}
            className="lg:col-span-7 p-6 sm:p-8 md:p-10 rounded-2xl bg-[#110705] border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-6">
                <img
                  src={logoSmall}
                  alt="Mister Britz"
                  className="w-8 h-8 object-contain opacity-90"
                />
                <span className="text-[13px] font-sans-clean font-bold tracking-[2.5px] uppercase text-[#E8C991]">
                  Padrão Produtivo Mister Britz
                </span>
              </div>

              <div className="space-y-4 text-[15px] md:text-[16px] text-[#F4EEE7]/85 font-sans-clean leading-relaxed">
                <p>
                  Nossa operação produtiva foi pensada para unir{' '}
                  <strong className="text-white font-semibold">padronização, eficiência e capacidade de expansão</strong>.
                </p>
                <p>
                  Da seleção dos insumos ao acondicionamento final, buscamos desenvolver processos que preservem a qualidade dos produtos e atendam às necessidades de diferentes canais de venda.
                </p>
                <p className="text-[#E8C991] font-medium pt-2 border-t border-white/10">
                  Nossa estrutura permite olhar para o presente sem perder de vista o futuro.
                </p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
              <span className="text-[13px] uppercase tracking-[2px] text-[#F4EEE7]/60 font-sans-clean">
                Operação Segura • Rastreabilidade • Escala
              </span>
              <span className="inline-flex items-center gap-1.5 text-[13px] text-[#E8C991] font-semibold tracking-wider uppercase">
                <CheckCircle2 className="w-4 h-4 text-[#E8C991]" />
                100% Inspecionado
              </span>
            </div>
          </div>

          {/* Preparada para Crescer Card */}
          <div
            style={getStaggerStyle(240)}
            className="lg:col-span-5 p-6 sm:p-8 md:p-10 rounded-2xl bg-[#140806] border border-white/10 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#220B09] border border-[#E8C991]/20 text-[#E8C991] text-[13px] font-sans-clean font-semibold tracking-[2px] uppercase mb-4">
                <Building2 className="w-3.5 h-3.5" />
                <span>EXPANSÃO CONTÍNUA</span>
              </div>

              <h3 className="text-[22px] sm:text-2xl md:text-3xl font-sans-clean font-bold text-white mb-2 leading-tight">
                Uma estrutura preparada para crescer.
              </h3>
              <p className="text-[15px] text-[#F4EEE7]/70 font-sans-clean mb-6">
                Projetada modularmente para acompanhar o ritmo acelerado de crescimento dos nossos parceiros comerciais.
              </p>

              {/* 4 Blocos de Futuro com ícones profissionais */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {futurePillars.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-[#0D0503] border border-white/10 hover:border-[#E8C991]/40 transition-colors"
                    >
                      <div className="flex items-center gap-2.5 mb-1.5">
                        <span className="w-7 h-7 rounded-lg bg-[#220B09] border border-white/10 flex items-center justify-center text-[#E8C991] shrink-0">
                          <Icon className="w-3.5 h-3.5" />
                        </span>
                        <h4 className="text-[14px] font-sans-clean font-bold text-white tracking-wide">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-[13px] text-[#F4EEE7]/60 font-sans-clean leading-snug pl-9">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10">
              <p className="text-[13px] text-[#E8C991]/90 font-sans-clean italic">
                “Capacidade instalada e flexibilidade de produção para atender demandas sazonais e contratos de alta escala.”
              </p>
            </div>
          </div>
        </div>

        {/* ==================================================
            3. PILARES DA OPERAÇÃO INDUSTRIAL (7 ÁREAS)
            ================================================== */}
        <div style={getStaggerStyle(300)} className="mb-14 sm:mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-[13px] font-sans-clean font-bold tracking-[3px] uppercase text-[#E8C991] block mb-1">
                ETAPAS & CAPACIDADE TÉCNICA
              </span>
              <h3 className="text-[26px] md:text-[32px] font-sans-clean font-bold text-white tracking-tight uppercase">
                Capacidades Operacionais
              </h3>
            </div>
            <p className="text-[15px] text-[#F4EEE7]/70 max-w-md font-sans-clean">
              Do planejamento de insumos à expedição final, cada etapa é desenhada para eficiência máxima e pontualidade.
            </p>
          </div>

          {/* Grid dos 7 Pilares */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {operations.map((op, idx) => {
              const Icon = op.icon;
              const isHighlight = idx === 6;
              return (
                <div
                  key={op.num}
                  className={`group relative p-6 rounded-2xl bg-[#110705] border border-white/10 hover:border-[#E8C991]/40 hover:bg-[#160A08] transition-all duration-300 flex flex-col justify-between ${
                    isHighlight ? 'sm:col-span-2 lg:col-span-3 xl:col-span-1' : ''
                  }`}
                >
                  <div>
                    {/* Top row: Number badge & Icon */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-[13px] font-sans-clean font-bold tracking-[2px] px-2.5 py-1 rounded-md bg-[#1F0A08] border border-white/10 text-[#E8C991]">
                        {op.num}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#1F0A08] border border-white/10 flex items-center justify-center text-[#E8C991] group-hover:border-[#E8C991]/40 group-hover:scale-105 transition-all">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Title */}
                    <h4 className="text-[17px] sm:text-lg font-sans-clean font-bold text-white mb-2 leading-snug group-hover:text-[#E8C991] transition-colors">
                      {op.title}
                    </h4>

                    {/* Description */}
                    <p className="text-[15px] font-sans-clean text-[#F4EEE7]/70 leading-relaxed">
                      {op.desc}
                    </p>
                  </div>

                  {/* Bottom indicator */}
                  <div className="mt-5 pt-4 border-t border-white/5 flex items-center justify-between text-[13px] text-[#F4EEE7]/40 group-hover:text-[#E8C991] transition-colors">
                    <span className="tracking-wider uppercase text-[13px]">Mister Britz Indústria</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ==================================================
            4. BANNER DE CONVERSÃO / CTA [ CONHEÇA NOSSA ESTRUTURA ]
            ================================================== */}
        <div
          style={getStaggerStyle(420)}
          className="relative rounded-2xl bg-[#140806] border border-white/10 p-6 sm:p-10 md:p-12 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8"
        >
          {/* Subtle Watermark Logo on corner */}
          <img
            src={logoSmall}
            alt=""
            className="absolute -right-8 -bottom-10 w-64 h-64 opacity-5 pointer-events-none select-none"
          />

          <div className="relative z-10 max-w-2xl text-center lg:text-left">
            <span className="inline-block text-[13px] font-sans-clean font-bold tracking-[3px] uppercase text-[#E8C991] mb-2">
              OPERAÇÃO B2B • AGENDAMENTO TÉCNICO
            </span>
            <h3 className="text-[26px] sm:text-3xl md:text-4xl font-sans-clean font-extrabold text-white tracking-tight uppercase mb-3">
              Pronto para abastecer sua rede com padrão industrial?
            </h3>
            <p className="text-[15px] sm:text-base text-[#F4EEE7]/80 font-sans-clean leading-relaxed">
              Receba distribuidores, representantes e redes atacadistas em nossa unidade produtiva ou converse diretamente com nossa equipe de operações e novos produtos.
            </p>
          </div>

          <div className="relative z-10 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => onOpenModal('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 sm:gap-3 px-5 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#921D2B] hover:bg-[#A82434] active:bg-[#7D1924] text-white text-[13px] sm:text-[14px] font-sans-clean font-bold uppercase tracking-wider sm:tracking-[2px] shadow-lg shadow-black/50 border border-white/10 transition-all duration-200 cursor-pointer group whitespace-nowrap"
            >
              <span className="whitespace-nowrap">Ver Estrutura</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

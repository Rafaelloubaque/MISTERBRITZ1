import React, { useEffect, useRef, useState } from 'react';
import { 
  Leaf, 
  Users, 
  Scale, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  Recycle
} from 'lucide-react';
import logoSmall from '../assets/logo3.png';
import { ActiveModal } from '../types';

interface ESGSectionProps {
  onOpenModal: (modal: ActiveModal) => void;
}

export const ESGSection: React.FC<ESGSectionProps> = ({ onOpenModal }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
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

  const environmentalGoals = [
    'Reduzir desperdícios na produção',
    'Utilizar melhor matérias-primas e recursos',
    'Evoluir nossas soluções de embalagem',
    'Otimizar processos produtivos',
    'Tornar a logística mais eficiente',
  ];

  return (
    <section
      id="esg"
      ref={sectionRef}
      className="relative w-full text-[#F4EEE7] overflow-hidden bg-[#0A0403] border-t border-white/10 py-16 sm:py-20 lg:py-24"
    >
      {/* Background Micro Grid Decor - Discreet and gradient-free */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none bg-[radial-gradient(#E8C991_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-5 sm:px-10 md:px-16 lg:px-[240px]">
        {/* ==================================================
            1. CABEÇALHO DA SEÇÃO
            ================================================== */}
        <div style={getStaggerStyle(100)} className="flex items-center gap-2.5 sm:gap-3.5 mb-5 sm:mb-6">
          <span className="w-6 sm:w-10 h-[2px] bg-[#C11D31] shrink-0" />
          <span className="font-sans-clean text-[11px] sm:text-[13px] font-bold tracking-[3.5px] sm:tracking-[5px] uppercase text-[#E8C991]">
            PRÁTICAS & COMPROMISSO
          </span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-white/30" />
          <span className="hidden sm:inline-block font-sans-clean text-[11px] uppercase tracking-[2px] text-white/50">
            DESENVOLVIMENTO RESPONSÁVEL
          </span>
        </div>

        {/* ==================================================
            2. TÍTULO E MANIFESTO DE ESG
            ================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-start mb-12 sm:mb-16 lg:mb-20">
          {/* Coluna Esquerda: Título Principal */}
          <div style={getStaggerStyle(180)} className="lg:col-span-7 min-w-0 max-w-full">
            <h2 className="font-bebas text-[30px] xs:text-[36px] sm:text-[44px] md:text-[50px] lg:text-[36px] xl:text-[46px] 2xl:text-[56px] leading-[0.95] tracking-[0.5px] sm:tracking-[1px] text-white uppercase mb-4 sm:mb-6 break-normal hyphens-none">
              <span className="text-[#E8C991] block">ESG &amp;</span>
              <span className="block text-white">SUSTENTABILIDADE</span>
            </h2>
            <p className="font-editorial text-xl xs:text-2xl sm:text-3xl lg:text-[28px] xl:text-[34px] leading-[1.18] text-[#E8C991] italic font-normal tracking-[-0.5px] max-w-xl">
              Crescer também significa fazer escolhas responsáveis.
            </p>
          </div>

          {/* Coluna Direita: Manifesto Editorial */}
          <div style={getStaggerStyle(240)} className="lg:col-span-5 min-w-0 flex flex-col justify-between h-full">
            <div className="relative overflow-hidden p-6 sm:p-7 rounded-2xl bg-[#110705] border border-white/10 group">
              <div className="relative z-10 flex items-center gap-2.5 text-[#E8C991] mb-3">
                <span className="w-2 h-2 rounded-full bg-[#C11D31]" />
                <span className="font-sans-clean text-[11px] font-bold tracking-[2.5px] uppercase">
                  Construção Contínua
                </span>
              </div>

              <p className="relative z-10 font-sans-clean text-base sm:text-lg leading-[1.5] text-[#F7F1E8] font-medium mb-3">
                Na <span className="text-[#E8C991] font-bold">Mister Britz</span>, sustentabilidade é uma construção contínua.
              </p>

              <p className="relative z-10 font-sans-clean text-sm leading-[1.55] text-white/75 mb-3">
                Nosso objetivo é evoluir nossa operação buscando cada vez mais eficiência no uso de recursos, redução de desperdícios e responsabilidade em toda a cadeia.
              </p>

              <div className="relative z-10 mt-4 pt-4 border-t border-white/10">
                <p className="text-white/95 font-medium border-l-2 border-[#C11D31] pl-3.5 py-0.5 text-xs sm:text-sm font-sans-clean leading-relaxed">
                  Queremos crescer de maneira consciente, equilibrando desenvolvimento econômico, responsabilidade ambiental e relações positivas com as pessoas.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================
            3. OS 3 PILARES ESG (Cards sólidos, sem gradiente)
            ================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16 sm:mb-20">
          
          {/* ==============================================
              PILAR 1: AMBIENTAL (E)
              ============================================== */}
          <div
            style={getStaggerStyle(300)}
            className="flex flex-col justify-between bg-[#130706] border border-[#3A1412] hover:border-[#E8C991]/50 rounded-2xl p-6 sm:p-8 transition-colors duration-300"
          >
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6 pb-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#200B09] border border-white/10 flex items-center justify-center shrink-0">
                    <Leaf className="w-6 h-6 text-[#E8C991]" />
                  </div>
                  <div>
                    <span className="font-sans-clean text-[11px] font-bold tracking-[2.5px] uppercase text-[#E8C991] block">
                      PILAR 01
                    </span>
                    <h3 className="font-bebas text-3xl sm:text-4xl tracking-[1.5px] text-white uppercase leading-none">
                      AMBIENTAL
                    </h3>
                  </div>
                </div>
                <span className="font-bebas text-2xl text-white/20">E</span>
              </div>

              {/* Subtítulo / Tagline */}
              <p className="text-base sm:text-lg font-sans-clean font-semibold text-white mb-5 leading-snug">
                Produzir melhor utilizando os recursos de forma mais consciente.
              </p>

              {/* Tópico introdutório */}
              <p className="text-xs sm:text-sm font-sans-clean font-medium text-[#E8C991] uppercase tracking-[1.5px] mb-3.5">
                Buscamos continuamente oportunidades para:
              </p>

              {/* Lista de Ações / Metas */}
              <ul className="space-y-2.5">
                {environmentalGoals.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base text-white/80 font-sans-clean leading-snug">
                    <CheckCircle2 className="w-4 h-4 text-[#C11D31] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Rodapé do Card */}
            <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-xs font-sans-clean text-white/50 uppercase tracking-[1.5px]">
              <Recycle className="w-4 h-4 text-[#E8C991]" />
              <span>Ciclo produtivo sustentável</span>
            </div>
          </div>

          {/* ==============================================
              PILAR 2: SOCIAL (S)
              ============================================== */}
          <div
            style={getStaggerStyle(380)}
            className="flex flex-col justify-between bg-[#130706] border border-[#3A1412] hover:border-[#E8C991]/50 rounded-2xl p-6 sm:p-8 transition-colors duration-300"
          >
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6 pb-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#200B09] border border-white/10 flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-[#E8C991]" />
                  </div>
                  <div>
                    <span className="font-sans-clean text-[11px] font-bold tracking-[2.5px] uppercase text-[#E8C991] block">
                      PILAR 02
                    </span>
                    <h3 className="font-bebas text-3xl sm:text-4xl tracking-[1.5px] text-white uppercase leading-none">
                      SOCIAL
                    </h3>
                  </div>
                </div>
                <span className="font-bebas text-2xl text-white/20">S</span>
              </div>

              {/* Subtítulo / Tagline */}
              <p className="text-base sm:text-lg font-sans-clean font-semibold text-white mb-5 leading-snug">
                Pessoas também fazem parte do nosso produto.
              </p>

              {/* Textos Editoriais */}
              <div className="space-y-4 text-sm sm:text-base font-sans-clean text-white/80 leading-relaxed">
                <p>
                  Construímos relações baseadas em respeito, ética e responsabilidade.
                </p>
                <p>
                  Valorizamos colaboradores, parceiros, fornecedores e todos que participam da nossa cadeia.
                </p>
              </div>

              {/* Destaque Institucional */}
              <div className="mt-5 p-4 rounded-xl bg-[#1C0D0B] border border-white/10 text-white font-sans-clean text-sm leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <HeartHandshake className="w-4 h-4 text-[#C11D31] shrink-0 mt-0.5" />
                  <p className="font-medium text-[#F4EEE7]">
                    Nosso compromisso é crescer criando relações cada vez mais positivas e sustentáveis.
                  </p>
                </div>
              </div>
            </div>

            {/* Rodapé do Card */}
            <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-xs font-sans-clean text-white/50 uppercase tracking-[1.5px]">
              <Users className="w-4 h-4 text-[#E8C991]" />
              <span>Pessoas & Relações de Valor</span>
            </div>
          </div>

          {/* ==============================================
              PILAR 3: GOVERNANÇA (G)
              ============================================== */}
          <div
            style={getStaggerStyle(460)}
            className="flex flex-col justify-between bg-[#130706] border border-[#3A1412] hover:border-[#E8C991]/50 rounded-2xl p-6 sm:p-8 transition-colors duration-300"
          >
            <div>
              {/* Card Header */}
              <div className="flex items-center justify-between mb-6 pb-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[#200B09] border border-white/10 flex items-center justify-center shrink-0">
                    <Scale className="w-6 h-6 text-[#E8C991]" />
                  </div>
                  <div>
                    <span className="font-sans-clean text-[11px] font-bold tracking-[2.5px] uppercase text-[#E8C991] block">
                      PILAR 03
                    </span>
                    <h3 className="font-bebas text-3xl sm:text-4xl tracking-[1.5px] text-white uppercase leading-none">
                      GOVERNANÇA
                    </h3>
                  </div>
                </div>
                <span className="font-bebas text-2xl text-white/20">G</span>
              </div>

              {/* Subtítulo / Tagline */}
              <p className="text-base sm:text-lg font-sans-clean font-semibold text-white mb-5 leading-snug">
                Transparência para construir relações de longo prazo.
              </p>

              {/* Textos Editoriais */}
              <div className="space-y-4 text-sm sm:text-base font-sans-clean text-white/80 leading-relaxed">
                <p>
                  Acreditamos em negócios conduzidos com responsabilidade.
                </p>
                <p>
                  Por isso, buscamos evoluir continuamente nossos processos, mantendo transparência nas relações comerciais, responsabilidade nas decisões e respeito às normas aplicáveis ao nosso setor.
                </p>
              </div>

              {/* Destaque Institucional */}
              <div className="mt-5 p-4 rounded-xl bg-[#1C0D0B] border border-white/10 text-white font-sans-clean text-sm leading-relaxed">
                <div className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#C11D31] shrink-0 mt-0.5" />
                  <p className="font-medium text-[#F4EEE7]">
                    Conformidade regulatória, integridade nas negociações e governança sólida.
                  </p>
                </div>
              </div>
            </div>

            {/* Rodapé do Card */}
            <div className="pt-6 mt-6 border-t border-white/10 flex items-center gap-2 text-xs font-sans-clean text-white/50 uppercase tracking-[1.5px]">
              <ShieldCheck className="w-4 h-4 text-[#E8C991]" />
              <span>Ética, Conformidade & Transparência</span>
            </div>
          </div>

        </div>

        {/* ==================================================
            4. MANIFESTO FINAL / FAIXA DE SÍNTESE
            "Produzir melhor hoje para crescer de forma responsável amanhã."
            ================================================== */}
        <div
          style={getStaggerStyle(520)}
          className="relative overflow-hidden rounded-2xl bg-[#110705] border border-[#E8C991]/30 p-6 sm:p-8 md:p-10"
        >
          {/* Subtle watermark in banner */}
          <div className="absolute right-0 bottom-0 w-64 h-64 opacity-[0.05] pointer-events-none select-none">
            <img src={logoSmall} alt="" className="w-full h-full object-contain" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#220B09] border border-white/10 text-[#E8C991] text-xs font-sans-clean font-semibold tracking-[2px] uppercase mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E8C991]" />
                <span>COMPROMISSO CONTÍNUO</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-sans-clean font-bold text-white mb-2 leading-tight">
                Produzir melhor hoje para crescer de forma responsável amanhã.
              </h3>
              <p className="text-sm sm:text-base text-white/75 font-sans-clean leading-relaxed">
                Nosso crescimento caminha lado a lado com a sustentabilidade, a eficiência operacional e a integridade de todas as relações que construímos.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
              <button
                onClick={() => onOpenModal('contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-4 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-[#C11D31] hover:bg-[#A31627] text-white font-sans-clean font-bold text-[12px] xs:text-[13px] sm:text-sm tracking-wider sm:tracking-[2px] uppercase shadow-lg shadow-black/40 transition-all duration-300 active:scale-95 group cursor-pointer whitespace-nowrap"
              >
                <span className="whitespace-nowrap">FALAR COM NOSSO TIME</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
              </button>

              <button
                onClick={() => onOpenModal('products')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-3.5 sm:py-4 rounded-xl bg-[#1C0E0B] hover:bg-[#2A1511] text-[#E8C991] border border-white/15 hover:border-[#E8C991]/50 font-sans-clean font-bold text-[12px] xs:text-[13px] sm:text-sm tracking-wider sm:tracking-[1.5px] uppercase transition-all duration-300 cursor-pointer whitespace-nowrap"
              >
                <span className="whitespace-nowrap">VER CATÁLOGO</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

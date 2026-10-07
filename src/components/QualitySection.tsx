import React, { useEffect, useRef, useState } from 'react';
import { 
  ShieldCheck, 
  Package, 
  Truck, 
  Handshake, 
  ArrowRight,
  ArrowDown,
  Wheat,
  Sliders,
  Award,
  Link2,
  CheckCircle2
} from 'lucide-react';
import logoSmall from '../assets/logo3.png';
import { ActiveModal } from '../types';

interface QualitySectionProps {
  onOpenModal: (modal: ActiveModal) => void;
}

export const QualitySection: React.FC<QualitySectionProps> = ({ onOpenModal }) => {
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

  const journeySteps = [
    {
      num: '01',
      stage: 'ETAPA INICIAL',
      title: 'Matéria-prima',
      description:
        'Selecionamos fornecedores e insumos de acordo com os padrões definidos para cada produto.',
      detail: 'Homologação criteriosa de parceiros, rastreabilidade na origem e laudos de conformidade técnica.',
      icon: Wheat,
      connectorLabel: 'Para Produção',
      isLogisticsFocus: false,
    },
    {
      num: '02',
      stage: 'TRANSFORMAÇÃO',
      title: 'Produção',
      description:
        'Buscamos processos consistentes e padronizados para preservar as características de cada item.',
      detail: 'Parâmetros operacionais monitorados, controle térmico e higiene industrial em ciclo fechado.',
      icon: Sliders,
      connectorLabel: 'Para Acondicionamento',
      isLogisticsFocus: false,
    },
    {
      num: '03',
      stage: 'PRESERVAÇÃO',
      title: 'Acondicionamento',
      description:
        'Os produtos são preparados pensando em armazenamento, transporte, exposição e experiência de consumo.',
      detail: 'Embalagens com barreira protetora, vedação hermética e design otimizado para o ponto de venda.',
      icon: Package,
      connectorLabel: 'Conexão Logística',
      isLogisticsFocus: false,
      isLogisticsBridge: true, // Bridge to logistics
    },
    {
      num: '04',
      stage: 'LOGÍSTICA & FLUXO',
      title: 'Distribuição',
      description:
        'Estruturamos nossa operação para atender diferentes formatos e canais comerciais.',
      detail: 'Paletização padronizada, gestão de rotas e integridade física das embalagens até o destino.',
      icon: Truck,
      connectorLabel: 'Para Relacionamento',
      isLogisticsFocus: true, // Main logistics node
    },
    {
      num: '05',
      stage: 'PARCERIA',
      title: 'Relacionamento',
      description:
        'Mantemos um atendimento próximo para construir parcerias comerciais recorrentes e sustentáveis.',
      detail: 'Acompanhamento pós-venda, reposição planejada e suporte contínuo para quem distribui e vende.',
      icon: Handshake,
      connectorLabel: 'Ciclo Concluído',
      isLogisticsFocus: false,
    },
  ];

  return (
    <section
      id="qualidade"
      ref={sectionRef}
      className="relative w-full text-[#F4EEE7] overflow-hidden bg-black border-t border-white/10 py-16 sm:py-20 lg:py-24"
    >
      {/* Background Decor Elements - Subtle and without interfering gradients */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none bg-[radial-gradient(#E8C991_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-5 sm:px-10 md:px-16 lg:px-[240px]">
        {/* ==================================================
            1. CABEÇALHO DA SEÇÃO
            ================================================== */}
        <div style={getStaggerStyle(100)} className="flex items-center gap-2.5 sm:gap-3.5 mb-5 sm:mb-6">
          <span className="w-6 sm:w-10 h-[2px] bg-[#C11D31] shrink-0" />
          <span className="font-sans-clean text-[11px] sm:text-[13px] font-bold tracking-[3.5px] sm:tracking-[5px] uppercase text-[#E8C991]">
            PADRÃO MISTER BRITZ
          </span>
          <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-white/30" />
          <span className="hidden sm:inline-block font-sans-clean text-[11px] uppercase tracking-[2px] text-white/50">
            CONTROLE DE PONTA A PONTA
          </span>
        </div>

        {/* ==================================================
            2. TÍTULO E MANIFESTO DE QUALIDADE
            ================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-12 sm:mb-16 lg:mb-20">
          {/* Coluna Esquerda: Título Principal e Subtítulo Editorial */}
          <div style={getStaggerStyle(200)} className="lg:col-span-7">
            <h2 className="font-bebas text-[48px] xs:text-[58px] sm:text-[72px] lg:text-[84px] leading-[0.92] tracking-[2px] text-white uppercase mb-4 sm:mb-6">
              QUALIDADE
            </h2>
            <p className="font-editorial text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] leading-[1.12] text-[#E8C991] italic font-normal tracking-[-0.5px]">
              Um bom produto começa muito antes da prateleira.
            </p>
          </div>

          {/* Coluna Direita: Caixa Manifesto Institucional (fundo sólido escuro, sem gradiente) */}
          <div style={getStaggerStyle(300)} className="lg:col-span-5 flex flex-col justify-between h-full">
            <div className="relative overflow-hidden p-6 sm:p-7 rounded-2xl bg-[#110705] border border-white/10 group">
              {/* Marca d'água da logo sutil no fundo */}
              <div className="absolute -right-3 -bottom-3 w-28 h-28 opacity-[0.06] pointer-events-none select-none transition-opacity duration-300 group-hover:opacity-[0.12]">
                <img src={logoSmall} alt="" className="w-full h-full object-contain" />
              </div>

              <div className="relative z-10 flex items-center gap-2.5 text-[#E8C991] mb-3">
                <img src={logoSmall} alt="Logo Mister Britz" className="w-5 h-5 object-contain shrink-0" />
                <span className="font-sans-clean text-[11px] font-bold tracking-[2.5px] uppercase">
                  Excelência em Cada Etapa
                </span>
              </div>

              <p className="relative z-10 font-sans-clean text-lg sm:text-xl leading-[1.5] text-[#F7F1E8] font-medium">
                Na Mister Britz, qualidade está presente{' '}
                <span className="text-[#E8C991] font-bold">em toda a jornada do produto</span>.
              </p>

              <div className="relative z-10 mt-4 pt-4 border-t border-white/10 flex items-center gap-3 text-xs text-white/60 font-sans-clean">
                <ShieldCheck className="w-4 h-4 text-[#C11D31] shrink-0" />
                <span>Rigor técnico aplicado da seleção de insumos ao suporte pós-venda.</span>
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================
            3. A JORNADA DO PRODUTO (CARDS LIGADOS EM CADEIA / CONEXÃO LOGÍSTICA)
            ================================================== */}
        <div style={getStaggerStyle(400)} className="mb-14 sm:mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 sm:mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Link2 className="w-3.5 h-3.5 text-[#C11D31]" />
                <span className="text-xs font-sans-clean font-bold tracking-[3px] uppercase text-[#E8C991] block">
                  FLUXO INTEGRADO & CADEIA CONECTADA
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-sans-clean font-bold text-white tracking-tight uppercase">
                A Jornada da Qualidade
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-white/60 font-sans-clean bg-[#150705] px-3.5 py-1.5 rounded-full border border-white/10 w-fit">
              <span className="w-2 h-2 rounded-full bg-[#E8C991] animate-pulse" />
              <span>Etapas conectadas de ponta a ponta</span>
            </div>
          </div>

          {/* Barra de Conexão Rápida Superior (Desktop) */}
          <div className="hidden lg:grid grid-cols-5 gap-3 mb-4 px-2">
            {journeySteps.map((s, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className={`text-[10px] font-sans-clean font-bold uppercase tracking-[1px] ${s.isLogisticsFocus ? 'text-[#E8C991]' : 'text-white/40'}`}>
                  Passo {s.num}
                </span>
                <span className="text-[11px] font-sans-clean font-semibold text-white/70 truncate">
                  {s.title}
                </span>
                {i < journeySteps.length - 1 && (
                  <ArrowRight className={`w-3 h-3 ml-auto shrink-0 ${i === 2 ? 'text-[#C11D31]' : 'text-white/20'}`} />
                )}
              </div>
            ))}
          </div>

          {/* ==================================================
              CONTAINER DOS CARDS CONECTADOS (DESKTOP & MOBILE)
              ================================================== */}
          <div className="relative">
            {/* Linha Contínua de Conexão no Desktop (passa por trás dos 5 cards na altura dos ícones) */}
            <div className="hidden lg:block absolute top-[44px] left-[5%] right-[5%] h-[2px] bg-white/10 z-0 pointer-events-none" />
            
            {/* Linha Destacada de Conexão Logística (entre etapa 03 e etapa 04) */}
            <div className="hidden lg:block absolute top-[44px] left-[50%] right-[30%] h-[2px] bg-[#C11D31] z-0 pointer-events-none" />

            {/* Grid dos Cards Conectados */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-3 relative z-10">
              {journeySteps.map((step, idx) => {
                const Icon = step.icon;
                const isLast = idx === journeySteps.length - 1;
                const isLogistics = step.isLogisticsFocus;
                const isBridgeToLogistics = step.isLogisticsBridge;

                return (
                  <React.Fragment key={idx}>
                    <div
                      className={`relative flex flex-col justify-between p-5 sm:p-6 rounded-2xl transition-all duration-300 group hover:-translate-y-1 ${
                        isLogistics
                          ? 'bg-[#180A08] border-2 border-[#E8C991]/70 shadow-xl shadow-black/60 ring-1 ring-[#C11D31]/40'
                          : 'bg-[#110705] border border-white/10 hover:border-[#E8C991]/40'
                      }`}
                    >
                      {/* Portas / Pinos de Encaixe Lateral (Visual de conexão física no Desktop) */}
                      {idx > 0 && (
                        <div className="hidden lg:block absolute -left-[6px] top-[41px] w-2.5 h-2.5 rounded-full bg-[#C11D31] border border-black z-20" />
                      )}
                      {!isLast && (
                        <div className="hidden lg:block absolute -right-[6px] top-[41px] w-2.5 h-2.5 rounded-full bg-[#E8C991] border border-black z-20" />
                      )}

                      {/* Tag de destaque para o nó de Logística */}
                      {isLogistics && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-30 px-2.5 py-0.5 rounded-full bg-[#C11D31] text-[9px] font-sans-clean font-bold tracking-[1.5px] uppercase text-white shadow-md border border-[#E8C991]/50 whitespace-nowrap flex items-center gap-1">
                          <Truck className="w-2.5 h-2.5 text-[#E8C991]" />
                          <span>EIXO LOGÍSTICO INTEGRADO</span>
                        </div>
                      )}

                      {/* Topo do Card: Número & Ícone */}
                      <div>
                        <div className="flex items-center justify-between gap-3 mb-5">
                          <div className="flex items-center gap-2">
                            <span
                              className={`w-8 h-8 rounded-lg flex items-center justify-center font-bebas text-lg ${
                                isLogistics
                                  ? 'bg-[#C11D31] text-white border border-[#E8C991]/40 font-bold'
                                  : 'bg-[#220B09] border border-white/10 text-[#E8C991]'
                              }`}
                            >
                              {step.num}
                            </span>
                            <span
                              className={`text-[10px] font-sans-clean font-bold tracking-[1.5px] uppercase ${
                                isLogistics ? 'text-[#E8C991]' : 'text-[#E8C991]/80'
                              }`}
                            >
                              {step.stage}
                            </span>
                          </div>

                          <div
                            className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors duration-300 ${
                              isLogistics
                                ? 'bg-[#C11D31] text-white border border-[#E8C991]/40'
                                : 'bg-[#1D0C09] border border-[#E8C991]/20 text-[#E8C991] group-hover:bg-[#C11D31] group-hover:text-white'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>
                        </div>

                        {/* Título Principal da Etapa */}
                        <div className="flex items-center gap-2 mb-3">
                          <h4 className="text-xl font-sans-clean font-bold text-white tracking-tight group-hover:text-[#E8C991] transition-colors">
                            {step.title}
                          </h4>
                          {isLogistics && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E8C991] shrink-0" />
                          )}
                        </div>

                        {/* Descrição Oficial (Texto exato fornecido pelo usuário) */}
                        <p className="font-sans-clean text-sm leading-[1.6] text-white/90 mb-4">
                          {step.description}
                        </p>
                      </div>

                      {/* Rodapé do Card com detalhe operacional */}
                      <div className="pt-3 border-t border-white/10 mt-auto">
                        <p className="text-[11px] leading-relaxed text-[#F4EEE7]/60 font-sans-clean">
                          {step.detail}
                        </p>

                        {/* Indicador de continuidade no rodapé */}
                        <div className="mt-3 flex items-center justify-between text-[10px] font-sans-clean font-semibold uppercase text-white/40 pt-2 border-t border-white/5">
                          <span className="flex items-center gap-1 text-[#E8C991]/80">
                            <CheckCircle2 className="w-3 h-3 text-[#E8C991]" />
                            <span>Etapa {step.num}/05</span>
                          </span>
                          {!isLast && (
                            <span className="text-[9px] tracking-wider text-white/50 flex items-center gap-0.5">
                              {step.connectorLabel}
                              <ArrowRight className="w-2.5 h-2.5" />
                            </span>
                          )}
                        </div>
                      </div>

                      {/* CONECTOR ENTRE CARDS NO DESKTOP */}
                      {!isLast && (
                        <div
                          className={`hidden lg:flex items-center justify-center absolute -right-3 top-[41px] -translate-y-1/2 z-30 ${
                            isBridgeToLogistics
                              ? 'w-7 h-7 rounded-full bg-[#C11D31] text-white border-2 border-[#E8C991] shadow-lg shadow-[#C11D31]/50'
                              : 'w-6 h-6 rounded-full bg-[#180A08] border border-white/20 text-[#E8C991] shadow-md group-hover:border-[#E8C991]'
                          }`}
                          title={isBridgeToLogistics ? 'Conexão direta com a Logística' : 'Fluxo contínuo'}
                        >
                          <ArrowRight className={isBridgeToLogistics ? 'w-3.5 h-3.5' : 'w-3 h-3'} />
                        </div>
                      )}
                    </div>

                    {/* CONECTOR VISUAL ENTRE CARDS NO MOBILE (Aparece entre cada card) */}
                    {!isLast && (
                      <div className="lg:hidden flex flex-col items-center justify-center py-2 relative my-[-4px] z-20">
                        {isBridgeToLogistics ? (
                          /* Conexão Especial de Logística no Mobile */
                          <div className="flex flex-col items-center">
                            <div className="w-[2px] h-3 bg-[#C11D31]" />
                            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#C11D31] text-[10px] font-sans-clean font-bold tracking-[1.5px] uppercase text-white border border-[#E8C991]/50 shadow-md">
                              <Truck className="w-3 h-3 text-[#E8C991]" />
                              <span>CONEXÃO LOGÍSTICA</span>
                              <ArrowDown className="w-3 h-3" />
                            </div>
                            <div className="w-[2px] h-3 bg-[#C11D31]" />
                          </div>
                        ) : (
                          /* Conexão Padrão entre Etapas no Mobile */
                          <div className="flex flex-col items-center">
                            <div className="w-[2px] h-2.5 bg-white/20" />
                            <div className="w-6 h-6 rounded-full bg-[#180A08] border border-white/20 flex items-center justify-center text-[#E8C991] shadow-sm">
                              <ArrowDown className="w-3 h-3" />
                            </div>
                            <div className="w-[2px] h-2.5 bg-white/20" />
                          </div>
                        )}
                      </div>
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>

        {/* ==================================================
            4. COMPROMISSO COM O VAREJO E DISTRIBUIÇÃO (CALL TO ACTION)
            ================================================== */}
        <div
          style={getStaggerStyle(500)}
          className="relative overflow-hidden rounded-2xl bg-[#110705] border border-[#E8C991]/30 p-6 sm:p-8 md:p-10"
        >
          {/* Subtle watermark in banner */}
          <div className="absolute right-0 bottom-0 w-64 h-64 opacity-[0.05] pointer-events-none select-none">
            <img src={logoSmall} alt="" className="w-full h-full object-contain" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 sm:gap-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#220B09] border border-white/10 text-[#E8C991] text-xs font-sans-clean font-semibold tracking-[2px] uppercase mb-3">
                <Award className="w-3.5 h-3.5 text-[#E8C991]" />
                <span>GARANTIA DE PROCEDÊNCIA & LOGÍSTICA</span>
              </div>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-sans-clean font-bold text-white mb-2 leading-tight">
                Qualidade que vira resultado na ponta da cadeia.
              </h3>
              <p className="text-sm sm:text-base text-white/75 font-sans-clean leading-relaxed">
                Cada lote sai de nossa operação com fichas técnicas disponíveis, padronização rigorosa e compromisso de atendimento contínuo.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto shrink-0">
              <button
                onClick={() => onOpenModal('contact')}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-[#C11D31] hover:bg-[#A31627] text-white font-sans-clean font-bold text-sm tracking-[2px] uppercase shadow-lg shadow-black/40 transition-all duration-300 active:scale-95 group cursor-pointer"
              >
                <span>FALAR COM NOSSO TIME</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onOpenModal('products')}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-[#1C0E0B] hover:bg-[#2A1511] text-[#E8C991] border border-white/15 hover:border-[#E8C991]/50 font-sans-clean font-bold text-sm tracking-[1.5px] uppercase transition-all duration-300 cursor-pointer"
              >
                <span>VER CATÁLOGO</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

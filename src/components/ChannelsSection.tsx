import React from 'react';
import { 
  Truck, 
  Store, 
  Coffee, 
  Building2, 
  ChefHat, 
  ArrowRight, 
  Award, 
  TrendingUp, 
  Repeat, 
  Headphones, 
  Maximize2, 
  Handshake, 
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { ActiveModal } from '../types';

interface ChannelsSectionProps {
  onOpenModal: (modal: ActiveModal) => void;
  onSelectChannel?: (channelName: string) => void;
}

export const ChannelsSection: React.FC<ChannelsSectionProps> = ({ 
  onOpenModal,
  onSelectChannel 
}) => {
  const handleChannelAction = (channelName: string) => {
    if (onSelectChannel) {
      onSelectChannel(channelName);
    } else {
      onOpenModal('contact');
    }
  };

  const channelCards = [
    {
      id: 'distribuidores',
      title: 'Distribuidores',
      icon: Truck,
      description: 'Amplie seu mix de produtos e desenvolva novas oportunidades comerciais com uma marca preparada para crescer.',
      cta: 'QUERO DISTRIBUIR MISTER BRITZ',
      primary: true,
      tag: 'Canal de Distribuição',
    },
    {
      id: 'supermercados',
      title: 'Supermercados e Mercados',
      icon: Store,
      description: 'Produtos pensados para conquistar espaço na prateleira, gerar experimentação e estimular recompra.',
      cta: 'QUERO MISTER BRITZ NA MINHA LOJA',
      primary: true,
      tag: 'Varejo Alimentar',
    },
    {
      id: 'padarias',
      title: 'Padarias e Conveniências',
      icon: Coffee,
      description: 'Amplie seu mix com produtos que complementam diferentes momentos da jornada de consumo.',
      cta: 'CONSULTAR MIX PARA PADARIAS',
      primary: false,
      tag: 'Conveniência & Giro Rápido',
    },
    {
      id: 'honest-markets',
      title: 'Honest Markets',
      icon: Building2,
      description: 'Produtos práticos e preparados para operações autônomas em condomínios, empresas e ambientes corporativos.',
      cta: 'CONDIÇÕES PARA HONEST MARKETS',
      primary: false,
      tag: 'Mercados Autônomos',
    },
    {
      id: 'food-service',
      title: 'Food Service',
      icon: ChefHat,
      description: 'Converse com nosso time sobre formatos, condições comerciais e oportunidades adequadas à sua operação.',
      cta: 'FORMATOS PARA FOOD SERVICE',
      primary: false,
      tag: 'Gastronomia & Transformação',
    },
  ];

  const whyPillars = [
    {
      title: 'Qualidade',
      description: 'Produtos desenvolvidos para construir confiança e recorrência.',
      icon: Award,
      badge: '01',
    },
    {
      title: 'Competitividade',
      description: 'Estratégias comerciais adequadas aos diferentes canais de venda.',
      icon: TrendingUp,
      badge: '02',
    },
    {
      title: 'Potencial de giro',
      description: 'Produtos pensados para fazer parte da rotina de consumo.',
      icon: Repeat,
      badge: '03',
    },
    {
      title: 'Atendimento próximo',
      description: 'Contato comercial direto e relacionamento próximo com nossos parceiros.',
      icon: Headphones,
      badge: '04',
    },
    {
      title: 'Expansão',
      description: 'Uma indústria preparada para desenvolver novas categorias e oportunidades.',
      icon: Maximize2,
      badge: '05',
    },
    {
      title: 'Parceria',
      description: 'Porque crescer junto vale mais do que simplesmente realizar uma venda.',
      icon: Handshake,
      badge: '06',
    },
  ];

  return (
    <section id="canais" className="relative w-full bg-[#0D0402] text-[#F7F1E8] py-16 sm:py-20 lg:py-24 border-t border-white/10 overflow-hidden">
      
      {/* =========================================================
          PARTE 1: PARA QUEM VENDEMOS
          ========================================================= */}
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-5 sm:px-10 md:px-16 lg:px-[240px]">
        {/* Section Header */}
        <div className="mb-14 sm:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#E8C991]" />
            <span className="text-xs uppercase tracking-[3px] text-[#E8C991] font-semibold font-sans-clean">
              Segmentos & Canais Comerciais
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-bold tracking-[2px] text-white uppercase leading-tight">
            PARA QUEM VENDEMOS
          </h2>

          <p className="mt-2 text-xl sm:text-2xl text-[#E8C991] font-editorial italic font-normal">
            Uma marca. Diferentes oportunidades.
          </p>

          <p className="mt-4 text-base sm:text-lg text-white/80 max-w-2xl font-sans-clean font-light leading-relaxed">
            A Mister Britz está preparada para construir relações comerciais com diferentes canais.
          </p>
        </div>

        {/* Channels Cards Grid - Solid backgrounds, no gradients */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-24">
          {channelCards.map((channel, idx) => {
            const Icon = channel.icon;
            const isFeatured = idx < 2; // Distribuidores e Supermercados

            return (
              <div
                key={channel.id}
                className={`flex flex-col justify-between p-7 sm:p-8 rounded-2xl bg-[#190B08] border transition-all duration-300 hover:border-[#E8C991]/70 hover:-translate-y-1 ${
                  isFeatured 
                    ? 'border-[#E8C991]/40 shadow-[0_10px_30px_rgba(0,0,0,0.6)] md:col-span-1 lg:col-span-1' 
                    : 'border-white/10'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#25100B] border border-[#E8C991]/30 flex items-center justify-center text-[#E8C991]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-sans-clean uppercase tracking-wider text-[#E8C991]/80 px-2.5 py-1 rounded-md bg-[#25100B] border border-white/5">
                      {channel.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-editorial font-bold text-white mb-3">
                    {channel.title}
                  </h3>

                  <p className="text-sm text-white/75 font-sans-clean leading-relaxed">
                    {channel.description}
                  </p>
                </div>

                <div className="mt-8 pt-5 border-t border-white/10">
                  <button
                    onClick={() => handleChannelAction(channel.title)}
                    className={`w-full py-3 px-3 sm:px-4 rounded-xl text-[11px] xs:text-xs font-semibold uppercase tracking-wider font-sans-clean flex items-center justify-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
                      channel.primary
                        ? 'bg-[#E8C991] hover:bg-[#d6b478] text-[#190B08] font-bold shadow-md'
                        : 'bg-[#25100B] hover:bg-[#301610] text-[#E8C991] border border-[#E8C991]/30 hover:border-[#E8C991]'
                    }`}
                  >
                    <span className="whitespace-nowrap">{channel.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================================================
            PARTE 2: POR QUE MISTER BRITZ?
            ========================================================= */}
        <div id="por-que-mister-britz" className="pt-8 border-t border-[#E8C991]/20">
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#E8C991]" />
              <span className="text-xs uppercase tracking-[3px] text-[#E8C991] font-semibold font-sans-clean">
                Diferenciais Comerciais & Vantagens
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-bold tracking-[2px] text-white uppercase leading-tight">
              POR QUE MISTER BRITZ?
            </h2>

            <p className="mt-2 text-xl sm:text-2xl text-[#E8C991] font-editorial italic font-normal">
              Produto bom também precisa ser um bom negócio.
            </p>

            <p className="mt-4 text-base sm:text-lg text-white/80 max-w-3xl font-sans-clean font-light leading-relaxed">
              Queremos construir uma marca relevante para o consumidor e, ao mesmo tempo, competitiva para nossos parceiros comerciais.
            </p>
          </div>

          {/* 6 Solid Cards - No gradients */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyPillars.map((pillar) => {
              const PillarIcon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-7 sm:p-8 rounded-2xl bg-[#190B08] border border-white/10 transition-all duration-300 hover:border-[#E8C991]/60 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-xl bg-[#25100B] border border-[#E8C991]/25 flex items-center justify-center text-[#E8C991]">
                        <PillarIcon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#E8C991]/60 px-2 py-0.5 rounded bg-[#25100B] border border-white/5">
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-editorial font-bold text-white mb-2.5">
                      {pillar.title}
                    </h3>

                    <p className="text-sm text-white/75 font-sans-clean leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-sans-clean text-[#E8C991]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Compromisso Mister Britz</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

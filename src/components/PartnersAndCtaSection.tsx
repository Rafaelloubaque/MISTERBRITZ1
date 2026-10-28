import React from 'react';
import { 
  Building, 
  Store, 
  ShoppingBag, 
  Coffee, 
  Layers, 
  ChefHat, 
  Globe, 
  CheckCircle2, 
  ArrowRight, 
  FileText, 
  PhoneCall, 
  FileSpreadsheet, 
  Truck, 
  PackageCheck, 
  Calendar, 
  MapPin, 
  BadgePercent, 
  ShieldCheck 
} from 'lucide-react';
import { ActiveModal } from '../types';

interface PartnersAndCtaSectionProps {
  onOpenModal: (modal: ActiveModal) => void;
  onSelectSubject?: (subject: string) => void;
}

export const PartnersAndCtaSection: React.FC<PartnersAndCtaSectionProps> = ({
  onOpenModal,
  onSelectSubject,
}) => {
  const partnerSegments = [
    { title: 'Distribuidora', icon: Truck },
    { title: 'Rede de supermercados', icon: Store },
    { title: 'Mercado', icon: ShoppingBag },
    { title: 'Padaria', icon: Coffee },
    { title: 'Conveniência', icon: Layers },
    { title: 'Honest Market', icon: Building },
    { title: 'Operação de Food Service', icon: ChefHat },
    { title: 'Rede regional ou nacional', icon: Globe },
  ];

  const commercialBenefits = [
    { label: 'Catálogo completo de produtos', icon: FileText },
    { label: 'Tabela comercial atualizada', icon: FileSpreadsheet },
    { label: 'Condições especiais para atacado', icon: BadgePercent },
    { label: 'Política transparente para distribuidores', icon: ShieldCheck },
    { label: 'Pedido mínimo acessível', icon: PackageCheck },
    { label: 'Prazos de atendimento ágeis', icon: Calendar },
    { label: 'Regiões disponíveis para expansão', icon: MapPin },
    { label: 'Oportunidades exclusivas de distribuição', icon: ArrowRight },
  ];

  const handleOpenPartner = () => {
    if (onSelectSubject) {
      onSelectSubject('Quero ser Parceiro Mister Britz');
    }
    onOpenModal('contact');
  };

  const handleOpenCommercial = () => {
    if (onSelectSubject) {
      onSelectSubject('Atendimento Comercial B2B');
    }
    onOpenModal('contact');
  };

  return (
    <section id="parceiros" className="relative w-full bg-[#120603] text-[#F7F1E8] py-16 sm:py-20 lg:py-24 border-t border-white/10 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-[25px] md:px-8 lg:px-[240px] space-y-24">
        
        {/* =========================================================
            PARTE 1: SEÇÃO PARCEIROS
            ========================================================= */}
        <div>
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#E8C991]" />
              <span className="text-xs uppercase tracking-[3px] text-[#E8C991] font-semibold font-sans-clean">
                Expansão & Presença de Mercado
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-bold tracking-[2px] text-white uppercase leading-tight">
              PARCEIROS
            </h2>

            <p className="mt-2 text-xl sm:text-2xl md:text-3xl text-[#E8C991] font-editorial italic font-normal">
              O próximo ponto de venda Mister Britz pode ser o seu.
            </p>

            <p className="mt-4 text-base sm:text-lg text-white/80 max-w-3xl font-sans-clean font-light leading-relaxed">
              Estamos ampliando nossa presença comercial e procurando empresas interessadas em construir uma relação de longo prazo com a nossa marca.
            </p>
          </div>

          {/* "Se você representa uma:" Solid Card Box */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#190B08] border border-[#E8C991]/30 shadow-[0_15px_40px_rgba(0,0,0,0.7)]">
            <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div>
                <span className="text-xs font-sans-clean uppercase tracking-widest text-[#E8C991] font-semibold">
                  Canais e Modelos de Negócio
                </span>
                <h3 className="text-2xl font-editorial font-bold text-white mt-1">
                  Se você representa uma:
                </h3>
              </div>
              <span className="text-xs text-white/60 font-sans-clean italic">
                Atendimento consultivo e personalizado
              </span>
            </div>

            {/* Segments Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {partnerSegments.map((segment) => {
                const SegIcon = segment.icon;
                return (
                  <div
                    key={segment.title}
                    className="flex items-center gap-3.5 p-4 rounded-xl bg-[#25100B] border border-white/10 hover:border-[#E8C991]/50 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#190B08] border border-[#E8C991]/30 flex items-center justify-center text-[#E8C991] group-hover:bg-[#E8C991] group-hover:text-[#190B08] transition-colors shrink-0">
                      <SegIcon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-sans-clean font-medium text-white group-hover:text-[#E8C991] transition-colors">
                      {segment.title}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 border-t border-white/10">
              <p className="text-lg sm:text-xl font-editorial italic text-white/90">
                ...queremos conversar com você.
              </p>

              <button
                onClick={handleOpenPartner}
                className="w-full sm:w-auto px-5 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#E8C991] hover:bg-[#d8b77a] text-[#190B08] font-sans-clean font-bold text-[13px] md:text-[14px] uppercase tracking-wider flex items-center justify-center gap-2.5 sm:gap-3 transition-all shadow-[0_4px_20px_rgba(232,201,145,0.25)] cursor-pointer whitespace-nowrap"
              >
                <span className="whitespace-nowrap">Ser Parceiro</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================
            PARTE 2: CTA COMERCIAL
            ========================================================= */}
        <div id="cta-comercial" className="pt-8 border-t border-[#E8C991]/20">
          <div className="p-8 sm:p-12 md:p-14 rounded-3xl bg-[#190B08] border border-[#E8C991]/40 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
            <div className="max-w-3xl mb-10">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-8 h-[1px] bg-[#E8C991]" />
                <span className="text-xs uppercase tracking-[3px] text-[#E8C991] font-semibold font-sans-clean">
                  OPORTUNIDADE COMERCIAL
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-bold text-white uppercase leading-tight">
                Vamos fazer bons negócios juntos?
              </h2>

              <p className="mt-3 text-lg sm:text-xl text-[#E8C991] font-editorial italic">
                Conheça nosso portfólio e fale diretamente com nosso time comercial.
              </p>
            </div>

            {/* Checklist: "Você poderá solicitar:" */}
            <div className="mb-10">
              <h4 className="text-xs uppercase tracking-widest font-sans-clean font-semibold text-white/80 mb-5">
                Você poderá solicitar:
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                {commercialBenefits.map((item) => {
                  const ItemIcon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 p-3.5 rounded-xl bg-[#25100B] border border-white/10 hover:border-[#E8C991]/40 transition-colors"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#190B08] border border-[#E8C991]/20 flex items-center justify-center text-[#E8C991] shrink-0">
                        <ItemIcon className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-sans-clean font-medium text-white/90">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Closing statement & primary CTA button */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-white/10">
              <div>
                <p className="text-xl sm:text-2xl font-editorial font-bold text-white">
                  Leve Mister Britz para seus clientes.
                </p>
                <p className="text-xs sm:text-sm text-white/60 font-sans-clean mt-1">
                  Atendimento ágil para todo o território nacional.
                </p>
              </div>

              <button
                onClick={handleOpenCommercial}
                className="w-full md:w-auto px-5 sm:px-10 py-3.5 sm:py-4 rounded-xl bg-[#E8C991] hover:bg-[#d8b77a] text-[#190B08] font-sans-clean font-bold text-[13px] md:text-[14px] uppercase tracking-wider flex items-center justify-center gap-2.5 sm:gap-3 transition-all shadow-[0_4px_25px_rgba(232,201,145,0.3)] cursor-pointer whitespace-nowrap"
              >
                <PhoneCall className="w-4 h-4 text-[#190B08] shrink-0" />
                <span className="whitespace-nowrap">Contato Comercial</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

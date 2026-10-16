import React from 'react';
import { Factory, Calendar, ShieldCheck, TrendingUp, Truck, ArrowRight } from 'lucide-react';
import { PageTopHero } from '../components/PageTopHero';
import { FactorySection } from '../components/FactorySection';
import { HERO_BACKGROUNDS } from '../assets/heroBackgrounds';
import { ActiveModal, PageRoute } from '../types';

interface FactoryPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenModal: (modal: ActiveModal) => void;
  mousePos?: { x: number; y: number };
}

export const FactoryPage: React.FC<FactoryPageProps> = ({
  onNavigate,
  onOpenModal,
  mousePos = { x: 0, y: 0 },
}) => {
  return (
    <div className="w-full min-h-screen bg-black text-[#F4EEE7]">
      {/* Cinematic Top Hero Banner (Home Hero Style) */}
      <PageTopHero
        pageId="fabrica"
        customBgUrl={HERO_BACKGROUNDS.fabrica}
        mousePos={mousePos}
        breadcrumbLabel="Nossa Fábrica"
        eyebrowBadge="ESTRUTURA & OPERAÇÃO INDUSTRIAL"
        badgeIcon={<Factory className="w-4 h-4" />}
        titleLines={[
          'Estrutura moderna.',
          'Tecnologia de ponta.',
          'Escala com precisão.',
        ]}
        subtitle="Onde qualidade encontra escala e padronização contínua."
        description="A estrutura fabril da Mister Britz combina alta tecnologia de processamento, conformidade sanitária rigorosa e processos padronizados para garantir excelência em cada lote."
        primaryCta={{
          label: 'Explorar Infraestrutura',
          action: () => {
            const el = document.getElementById('fabrica');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          },
        }}
        secondaryCta={{
          label: 'Solicitar Homologação',
          action: () => onOpenModal('contact'),
          icon: <Calendar className="w-4 h-4 text-[#25D366]" />,
        }}
        floatingCards={[
          {
            title: 'Capacidade Produtiva',
            value: '500+ Toneladas',
            subtitle: 'Capacidade mensal com expansão planejada',
            icon: <TrendingUp className="w-4 h-4" />,
          },
          {
            title: 'Controle Sanitário',
            value: '100% Conforme',
            subtitle: 'Rigor nas boas práticas de fabricação (BPF)',
            icon: <ShieldCheck className="w-4 h-4" />,
          },
          {
            title: 'Malha de Expedição',
            value: 'Nacional',
            subtitle: 'Atendimento a redes, atacados e distribuidores',
            icon: <Truck className="w-4 h-4" />,
          },
        ]}
        targetSectionId="fabrica"
        onNavigate={onNavigate}
      />

      {/* Main Factory Section Content */}
      <FactorySection onOpenModal={onOpenModal} />

      {/* Dedicated Page Technical Action Block */}
      <div className="relative w-full bg-[#0E0604] border-t border-white/10 py-16 sm:py-20">
        <div className="relative z-10 w-full max-w-[1920px] mx-auto px-5 sm:px-10 md:px-16 lg:px-[240px]">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#190B08] border border-[#E8C991]/30 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-[#E8C991] font-sans-clean font-semibold uppercase tracking-wider mb-4">
                <ShieldCheck className="w-4 h-4 text-[#C11D31]" />
                <span>Homologação & Auditoria Industrial</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-white uppercase">
                Deseja homologar a Mister Britz como fornecedora?
              </h3>
              <p className="mt-2 text-sm text-white/75 font-sans-clean leading-relaxed">
                Disponibilizamos documentação técnica, laudos de qualidade, certificados de boas práticas e cronogramas para auditoria de redes de varejo e distribuidores.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 shrink-0 w-full lg:w-auto">
              <button
                onClick={() => onOpenModal('contact')}
                className="w-full sm:w-auto px-4 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#E8C991] hover:bg-[#d8b77a] text-[#190B08] font-sans-clean font-bold text-[11px] xs:text-xs uppercase tracking-wider sm:tracking-widest flex items-center justify-center gap-2 sm:gap-2.5 transition-all shadow-md cursor-pointer whitespace-nowrap"
              >
                <Calendar className="w-4 h-4 shrink-0" />
                <span className="whitespace-nowrap">SOLICITAR HOMOLOGAÇÃO</span>
              </button>
              <button
                onClick={() => onNavigate('qualidade')}
                className="w-full sm:w-auto px-3.5 sm:px-6 py-3.5 sm:py-4 rounded-xl bg-[#25100B] hover:bg-[#301610] text-[#E8C991] border border-[#E8C991]/30 hover:border-[#E8C991] font-sans-clean font-semibold text-[10.5px] xs:text-[11.5px] sm:text-xs uppercase tracking-wider sm:tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer whitespace-nowrap"
              >
                <span className="whitespace-nowrap">VER PROTOCOLOS DE QUALIDADE</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

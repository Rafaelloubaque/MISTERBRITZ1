import React from 'react';
import { Leaf, Handshake, Users, Shield, ArrowRight } from 'lucide-react';
import { PageTopHero } from '../components/PageTopHero';
import { ESGSection } from '../components/ESGSection';
import { HERO_BACKGROUNDS } from '../assets/heroBackgrounds';
import { ActiveModal, PageRoute } from '../types';

interface ESGPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenModal: (modal: ActiveModal) => void;
  mousePos?: { x: number; y: number };
}

export const ESGPage: React.FC<ESGPageProps> = ({
  onNavigate,
  onOpenModal,
  mousePos = { x: 0, y: 0 },
}) => {
  return (
    <div className="w-full min-h-screen bg-black text-[#F4EEE7]">
      {/* Cinematic Top Hero Banner (Home Hero Style) */}
      <PageTopHero
        pageId="esg"
        customBgUrl={HERO_BACKGROUNDS.esg}
        mousePos={mousePos}
        breadcrumbLabel="ESG & Sustentabilidade"
        eyebrowBadge="RESPONSABILIDADE & IMPACTO"
        badgeIcon={<Leaf className="w-4 h-4" />}
        titleLines={[
          'Produzir melhor hoje.',
          'Crescer consciente.',
          'Responsabilidade sempre.',
        ]}
        subtitle="Crescer também significa fazer escolhas responsáveis."
        description="Nosso objetivo é evoluir continuamente buscando eficiência no uso de recursos, redução de desperdícios, governança ética e relações duradouras com as pessoas."
        primaryCta={{
          label: 'Nossas Práticas ESG',
          action: () => {
            const el = document.getElementById('esg');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          },
        }}
        secondaryCta={{
          label: 'Parcerias Conscientes',
          action: () => onNavigate('parceiros'),
          icon: <Handshake className="w-4 h-4 text-[#25D366]" />,
        }}
        floatingCards={[
          {
            title: 'Pilar Ambiental',
            value: 'Consumo Consciente',
            subtitle: 'Redução contínua de perdas e desperdícios',
            icon: <Leaf className="w-4 h-4" />,
          },
          {
            title: 'Pilar Social',
            value: 'Pessoas em Primeiro',
            subtitle: 'Relações éticas e valorização da equipe',
            icon: <Users className="w-4 h-4" />,
          },
          {
            title: 'Governança Corporativa',
            value: '100% Transparente',
            subtitle: 'Conformidade legal e integridade fiscal',
            icon: <Shield className="w-4 h-4" />,
          },
        ]}
        targetSectionId="esg"
        onNavigate={onNavigate}
      />

      {/* Main ESG Section Content */}
      <ESGSection onOpenModal={onOpenModal} />

      {/* Dedicated Page Action Block */}
      <div className="relative w-full bg-[#0E0604] border-t border-white/10 py-16 sm:py-20">
        <div className="relative z-10 w-full max-w-[1920px] mx-auto px-5 sm:px-10 md:px-16 lg:px-[240px]">
          <div className="p-8 sm:p-12 rounded-3xl bg-[#190B08] border border-[#E8C991]/30 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-[#E8C991] font-sans-clean font-semibold uppercase tracking-wider mb-4">
                <Handshake className="w-4 h-4 text-[#C11D31]" />
                <span>Cadeia de Valor Compartilhada</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-white uppercase">
                Construa uma parceria com responsabilidade ética
              </h3>
              <p className="mt-2 text-sm text-white/75 font-sans-clean leading-relaxed">
                Priorizamos parceiros e distribuidores comprometidos com boas práticas trabalhistas, transparência fiscal e responsabilidade socioambiental.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 shrink-0 w-full lg:w-auto">
              <button
                onClick={() => onNavigate('parceiros')}
                className="w-full sm:w-auto px-4 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#E8C991] hover:bg-[#d8b77a] text-[#190B08] font-sans-clean font-bold text-[11px] xs:text-xs uppercase tracking-wider sm:tracking-widest flex items-center justify-center gap-2.5 transition-all shadow-md cursor-pointer whitespace-nowrap"
              >
                <span className="whitespace-nowrap">SEJA UM PARCEIRO COMERCIAL</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
              <button
                onClick={() => onOpenModal('contact')}
                className="w-full sm:w-auto px-4 sm:px-6 py-3.5 sm:py-4 rounded-xl bg-[#25100B] hover:bg-[#301610] text-[#E8C991] border border-[#E8C991]/30 hover:border-[#E8C991] font-sans-clean font-semibold text-[11px] xs:text-xs uppercase tracking-wider sm:tracking-widest flex items-center justify-center gap-2 transition-all cursor-pointer whitespace-nowrap"
              >
                <span className="whitespace-nowrap">FALAR COM NOSSO TIME</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

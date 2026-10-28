import React from 'react';
import { Award, FileText, CheckCircle, PackageCheck, ArrowRight } from 'lucide-react';
import { PageTopHero } from '../components/PageTopHero';
import { QualitySection } from '../components/QualitySection';
import { HERO_BACKGROUNDS, HERO_MOBILE_BACKGROUNDS } from '../assets/heroBackgrounds';
import { ActiveModal, PageRoute } from '../types';

interface QualityPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenModal: (modal: ActiveModal) => void;
  mousePos?: { x: number; y: number };
}

export const QualityPage: React.FC<QualityPageProps> = ({
  onNavigate,
  onOpenModal,
  mousePos = { x: 0, y: 0 },
}) => {
  return (
    <div className="w-full min-h-screen bg-black text-[#F4EEE7]">
      {/* Cinematic Top Hero Banner (Home Hero Style) */}
      <PageTopHero
        pageId="qualidade"
        customBgUrl={HERO_BACKGROUNDS.qualidade}
        customMobileBgUrl={HERO_MOBILE_BACKGROUNDS.qualidade}
        mousePos={mousePos}
        breadcrumbLabel="Qualidade"
        eyebrowBadge="PADRÃO MISTER BRITZ"
        badgeIcon={<Award className="w-4 h-4" />}
        titleLines={[
          'Matéria-prima nobre.',
          'Controle absoluto.',
          'Sabor que fideliza.',
        ]}
        subtitle="Um bom produto começa muito antes da prateleira."
        description="Da seleção criteriosa de insumos à gôndola do varejo: processos consistentes, rastreabilidade de lote e acondicionamento projetado para máxima conservação e giro."
        primaryCta={{
          label: 'Ver Qualidade',
          action: () => {
            const el = document.getElementById('qualidade');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          },
        }}
        secondaryCta={{
          label: 'Fichas & Laudos',
          action: () => onOpenModal('contact'),
          icon: <FileText className="w-4 h-4 text-[#E8C991]" />,
        }}
        floatingCards={[
          {
            title: 'Rastreabilidade',
            value: '100% dos Lotes',
            subtitle: 'Identificação e controle sanitário contínuo',
            icon: <CheckCircle className="w-4 h-4" />,
          },
          {
            title: 'Análise Laboratorial',
            value: 'Rigor Técnico',
            subtitle: 'Auditorias microbiológicas e físico-químicas',
            icon: <Award className="w-4 h-4" />,
          },
          {
            title: 'Proteção & Barreira',
            value: 'Shelf-Life Seguro',
            subtitle: 'Embalagens que preservam aroma e frescor',
            icon: <PackageCheck className="w-4 h-4" />,
          },
        ]}
        targetSectionId="qualidade"
        onNavigate={onNavigate}
      />

      {/* Main Quality Section Content with the connected logistics flow */}
      <QualitySection onOpenModal={onOpenModal} />

      {/* Dedicated Page Technical Action Block */}
      <div className="relative w-full bg-[#0E0604] border-t border-white/10 py-16 sm:py-20">
        <div className="relative z-10 w-full max-w-[1920px] mx-auto px-[25px] md:px-8 lg:px-[240px]">
          <div className="p-6 sm:p-12 rounded-3xl bg-[#190B08] border border-[#E8C991]/30 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[13px] text-[#E8C991] font-sans-clean font-semibold uppercase tracking-wider mb-4">
                <FileText className="w-4 h-4 text-[#C11D31]" />
                <span>Documentação & Controle Sanitário</span>
              </div>
              <h3 className="text-[26px] md:text-[32px] lg:text-[38px] font-editorial font-bold text-white uppercase leading-tight">
                Fichas Técnicas e Certificados de Qualidade
              </h3>
              <p className="mt-2 text-[15px] md:text-[16px] text-white/75 font-sans-clean leading-relaxed">
                Nossos clientes corporativos têm acesso completo a laudos microbiológicos, tabelas nutricionais oficiais, especificações de shelf-life e rastreabilidade total de lotes.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 shrink-0 w-full lg:w-auto">
              <button
                onClick={() => onOpenModal('contact')}
                className="w-full sm:w-auto px-5 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-[#E8C991] hover:bg-[#d8b77a] text-[#190B08] font-sans-clean font-bold text-[13px] md:text-[14px] uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-md cursor-pointer whitespace-nowrap"
              >
                <span className="whitespace-nowrap">Fichas Técnicas</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
              <button
                onClick={() => onNavigate('esg')}
                className="w-full sm:w-auto px-5 sm:px-6 py-3.5 sm:py-4 rounded-xl bg-[#25100B] hover:bg-[#301610] text-[#E8C991] border border-[#E8C991]/30 hover:border-[#E8C991] font-sans-clean font-semibold text-[13px] md:text-[14px] uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer whitespace-nowrap"
              >
                <span className="whitespace-nowrap">Ver ESG</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

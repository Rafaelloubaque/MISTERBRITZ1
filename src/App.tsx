import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { HeroVisuals } from './components/HeroVisuals';
import { HeroContent } from './components/HeroContent';
import { InfiniteTicker } from './components/InfiniteTicker';
import { InstitutionalSection } from './components/InstitutionalSection';
import { PurposeSection } from './components/PurposeSection';
import { ValuesSection } from './components/ValuesSection';
import { FactorySection } from './components/FactorySection';
import { QualitySection } from './components/QualitySection';
import { ProductsModal } from './components/ProductsModal';
import { CommercialContactModal } from './components/CommercialContactModal';
import { ClientPortalModal } from './components/ClientPortalModal';
import { SearchModal } from './components/SearchModal';
import { ActiveModal } from './types';

export default function App() {
  const [activeModal, setActiveModal] = useState<ActiveModal>('none');
  const [prefilledProduct, setPrefilledProduct] = useState('');

  // Mouse parallax position: normalized from -0.5 to 0.5
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth) - 0.5;
      const y = (clientY / innerHeight) - 0.5;
      setMousePos({ x, y });
    },
    []
  );

  const handleOpenContactForProduct = (productName: string) => {
    setPrefilledProduct(productName);
    setActiveModal('contact');
  };

  return (
    <div
      className="relative w-full min-h-screen bg-[#0D0503] text-[#F4EEE7] overflow-x-hidden selection:bg-[#921D2B] selection:text-white"
      onMouseMove={handleMouseMove}
    >
      {/* ==================================================
          1. HERO SECTION (Responsive on mobile, 100vw × 100vh desktop)
          Reference: 1920 × 1080px desktop 16:9
          ================================================== */}
      <section
        className="relative w-full min-h-[100svh] lg:h-screen lg:min-h-[860px] flex flex-col justify-between overflow-hidden"
      >
        {/* Visuals Layer (Background + Overlay + Parallax) */}
        <HeroVisuals mousePos={mousePos} />

        {/* Header - Absolute top */}
        <Header
          onOpenModal={(modal) => setActiveModal(modal)}
        />

        {/* Main Content */}
        <div className="relative z-30 w-full flex flex-col justify-center px-5 sm:px-10 md:px-16 lg:px-[240px] pt-[108px] sm:pt-[120px] pb-16 sm:pb-20 lg:pt-[100px] lg:pb-0 my-auto pointer-events-none">
          <div className="w-full max-w-[1920px] mx-auto">
            <HeroContent
              onOpenModal={(modal) => {
                if (modal === 'contact') setPrefilledProduct('');
                setActiveModal(modal);
              }}
            />
          </div>
        </div>

        {/* Scroll Indicator to Institutional Section */}
        <div className="relative lg:absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 pointer-events-auto flex flex-col items-center pb-4 lg:pb-0">
          <button
            onClick={() => document.getElementById('institucional')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex flex-col items-center gap-1.5 text-[11px] font-sans-clean font-medium tracking-[3px] uppercase text-[#F4EEE7]/80 hover:text-[#E8C991] transition-all cursor-pointer group"
          >
            <span>Conheça a Mister Britz</span>
            <span className="w-5 h-5 rounded-full border border-[#E8C991]/30 flex items-center justify-center text-[10px] text-[#E8C991] group-hover:translate-y-1 group-hover:border-[#E8C991] transition-all">
              ↓
            </span>
          </button>
        </div>
      </section>

      {/* ==================================================
          FAIXA INFINITA EM LINHA (QUALIDADE, PARCERIA, MAIS SABOR)
          ================================================== */}
      <InfiniteTicker />

      {/* ==================================================
          2. INSTITUTIONAL SECTION (Light, Editorial, Premium)
          ================================================== */}
      <InstitutionalSection />

      {/* ==================================================
          3. NOSSO PROPÓSITO (Manifesto & Valor Compartilhado)
          ================================================== */}
      <PurposeSection onOpenModal={(modal) => setActiveModal(modal)} />

      {/* ==================================================
          4. MISSÃO, VISÃO E VALORES (Diretrizes Estratégicas)
          ================================================== */}
      <ValuesSection onOpenModal={(modal) => setActiveModal(modal)} />

      {/* ==================================================
          5. NOSSA FÁBRICA (Onde qualidade encontra escala)
          ================================================== */}
      <FactorySection onOpenModal={(modal) => setActiveModal(modal)} />

      {/* ==================================================
          6. QUALIDADE (Jornada do produto de ponta a ponta)
          ================================================== */}
      <QualitySection onOpenModal={(modal) => setActiveModal(modal)} />

      {/* Modals */}
      <ProductsModal
        isOpen={activeModal === 'products'}
        onClose={() => setActiveModal('none')}
        onContactProduct={handleOpenContactForProduct}
      />

      <CommercialContactModal
        isOpen={activeModal === 'contact'}
        onClose={() => {
          setActiveModal('none');
          setPrefilledProduct('');
        }}
        prefilledProduct={prefilledProduct}
      />

      <ClientPortalModal
        isOpen={activeModal === 'clientArea'}
        onClose={() => setActiveModal('none')}
      />

      <SearchModal
        isOpen={activeModal === 'search'}
        onClose={() => setActiveModal('none')}
        onSelectProduct={(item) => handleOpenContactForProduct(item)}
      />
    </div>
  );
}

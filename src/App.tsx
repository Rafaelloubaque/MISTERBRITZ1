import React, { useState, useEffect, useCallback } from 'react';
import { Header } from './components/Header';
import { HeroVisuals } from './components/HeroVisuals';
import { HeroContent } from './components/HeroContent';
import { InfiniteTicker } from './components/InfiniteTicker';
import { InstitutionalSection } from './components/InstitutionalSection';
import { PurposeSection } from './components/PurposeSection';
import { ValuesSection } from './components/ValuesSection';
import { ProductsSection } from './components/ProductsSection';
import { ChannelsSection } from './components/ChannelsSection';
import { HomeExploreSection } from './components/HomeExploreSection';
import { GlobalFooter } from './components/GlobalFooter';

import { FactoryPage } from './pages/FactoryPage';
import { QualityPage } from './pages/QualityPage';
import { ESGPage } from './pages/ESGPage';
import { ProductsPage } from './pages/ProductsPage';
import { PartnersPage } from './pages/PartnersPage';
import { ContactPage } from './pages/ContactPage';

import { ProductsModal } from './components/ProductsModal';
import { CommercialContactModal } from './components/CommercialContactModal';
import { SearchModal } from './components/SearchModal';
import { ActiveModal, PageRoute } from './types';

function parseRoute(): PageRoute {
  const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
  const path = window.location.pathname.replace(/^\//, '').toLowerCase();
  const target = hash || path;

  if (target.startsWith('fabrica')) return 'fabrica';
  if (target.startsWith('qualidade')) return 'qualidade';
  if (target.startsWith('esg') || target.startsWith('sustentabilidade')) return 'esg';
  if (target.startsWith('produto')) return 'produtos';
  if (target.startsWith('parceiro') || target.startsWith('negocio')) return 'parceiros';
  if (target.startsWith('contato') || target.startsWith('atendimento')) return 'contato';

  return 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>(parseRoute);
  const [activeModal, setActiveModal] = useState<ActiveModal>('none');
  const [prefilledProduct, setPrefilledProduct] = useState('');

  // Mouse parallax position for Hero (normalized -0.5 to 0.5)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = clientX / innerWidth - 0.5;
    const y = clientY / innerHeight - 0.5;
    setMousePos({ x, y });
  }, []);

  const handleNavigate = (page: PageRoute) => {
    setCurrentPage(page);
    try {
      const url = page === 'home' ? '/' : `/${page}`;
      window.history.pushState({ page }, '', url);
    } catch {
      // Fallback for strict iframe environments
      window.location.hash = page === 'home' ? '' : `#${page}`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(parseRoute());
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('popstate', handlePopState);
    window.addEventListener('hashchange', handlePopState);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('hashchange', handlePopState);
    };
  }, []);

  const handleOpenContactForProduct = (productName: string) => {
    setPrefilledProduct(productName);
    setActiveModal('contact');
  };

  return (
    <div
      className="relative w-full min-h-screen bg-[#0D0503] text-[#F4EEE7] overflow-x-hidden selection:bg-[#921D2B] selection:text-white"
      onMouseMove={handleMouseMove}
    >
      {/* Global Navigation Header across all views */}
      <Header
        onOpenModal={(modal) => setActiveModal(modal)}
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* ==================================================
          PÁGINA 1: INÍCIO (HOME)
          ================================================== */}
      {currentPage === 'home' && (
        <main className="w-full">
          {/* Hero Section */}
          <section className="relative w-full min-h-[100svh] lg:h-screen lg:min-h-[860px] flex flex-col justify-between overflow-hidden">
            {/* Visuals Layer (Background + Overlay + Parallax) */}
            <HeroVisuals mousePos={mousePos} />

            {/* Main Content */}
            <div className="relative z-30 w-full flex flex-col justify-center px-[25px] md:px-8 lg:px-[240px] pt-[108px] sm:pt-[120px] pb-16 sm:pb-20 lg:pt-[100px] lg:pb-0 my-auto pointer-events-none">
              <div className="w-full max-w-[1920px] mx-auto">
                <HeroContent
                  onOpenModal={(modal) => {
                    if (modal === 'contact') setPrefilledProduct('');
                    setActiveModal(modal);
                  }}
                />
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="relative lg:absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 pointer-events-auto flex flex-col items-center pb-4 lg:pb-0">
              <button
                onClick={() =>
                  document.getElementById('institucional')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="flex flex-col items-center gap-1.5 text-[13px] font-sans-clean font-medium tracking-[3px] uppercase text-[#F4EEE7]/80 hover:text-[#E8C991] transition-all cursor-pointer group"
              >
                <span>Conheça a Mister Britz</span>
                <span className="w-5 h-5 rounded-full border border-[#E8C991]/30 flex items-center justify-center text-[10px] text-[#E8C991] group-hover:translate-y-1 group-hover:border-[#E8C991] transition-all">
                  ↓
                </span>
              </button>
            </div>
          </section>

          {/* Faixa Ticker */}
          <InfiniteTicker />

          {/* A Mister Britz (Institucional) */}
          <InstitutionalSection />

          {/* Nosso Propósito */}
          <PurposeSection onOpenModal={(modal) => setActiveModal(modal)} />

          {/* Missão, Visão e Valores */}
          <ValuesSection onOpenModal={(modal) => setActiveModal(modal)} />

          {/* Nossos Produtos */}
          <ProductsSection
            onOpenModal={(modal) => setActiveModal(modal)}
            onSelectProduct={(name) => handleOpenContactForProduct(name)}
          />

          {/* Para Quem Vendemos & Por Que Mister Britz */}
          <ChannelsSection
            onOpenModal={(modal) => setActiveModal(modal)}
            onSelectChannel={(channel) => handleOpenContactForProduct(channel)}
          />

          {/* Hub de Acesso às Novas Páginas Dedicadas */}
          <HomeExploreSection onNavigate={handleNavigate} />
        </main>
      )}

      {/* ==================================================
          PÁGINA 2: NOSSA FÁBRICA
          ================================================== */}
      {currentPage === 'fabrica' && (
        <FactoryPage
          onNavigate={handleNavigate}
          onOpenModal={(modal) => setActiveModal(modal)}
          mousePos={mousePos}
        />
      )}

      {/* ==================================================
          PÁGINA 3: QUALIDADE
          ================================================== */}
      {currentPage === 'qualidade' && (
        <QualityPage
          onNavigate={handleNavigate}
          onOpenModal={(modal) => setActiveModal(modal)}
          mousePos={mousePos}
        />
      )}

      {/* ==================================================
          PÁGINA 4: ESG & SUSTENTABILIDADE
          ================================================== */}
      {currentPage === 'esg' && (
        <ESGPage
          onNavigate={handleNavigate}
          onOpenModal={(modal) => setActiveModal(modal)}
          mousePos={mousePos}
        />
      )}

      {/* ==================================================
          PÁGINA DEDICADA: PRODUTOS
          ================================================== */}
      {currentPage === 'produtos' && (
        <ProductsPage
          onNavigate={handleNavigate}
          onOpenModal={(modal) => setActiveModal(modal)}
          onSelectProduct={(name) => handleOpenContactForProduct(name)}
          mousePos={mousePos}
        />
      )}

      {/* ==================================================
          PÁGINA 5: PARCEIROS & NEGÓCIOS
          ================================================== */}
      {currentPage === 'parceiros' && (
        <PartnersPage
          onNavigate={handleNavigate}
          onOpenModal={(modal) => setActiveModal(modal)}
          onSelectSubject={(subject) => handleOpenContactForProduct(subject)}
          mousePos={mousePos}
        />
      )}

      {/* ==================================================
          PÁGINA 6: CONTATO
          ================================================== */}
      {currentPage === 'contato' && (
        <ContactPage
          onNavigate={handleNavigate}
          onOpenModal={(modal) => setActiveModal(modal)}
          mousePos={mousePos}
        />
      )}

      {/* Rodapé Global Presente em Todas as Páginas */}
      <GlobalFooter
        onOpenModal={(modal) => setActiveModal(modal)}
        onNavigate={handleNavigate}
        currentPage={currentPage}
      />

      {/* Modais Globais */}
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

      <SearchModal
        isOpen={activeModal === 'search'}
        onClose={() => setActiveModal('none')}
        onSelectProduct={(item) => handleOpenContactForProduct(item)}
      />
    </div>
  );
}

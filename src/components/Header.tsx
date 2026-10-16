import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { MrBritzLogo } from './MrBritzLogo';
import { ActiveModal, PageRoute } from '../types';

interface HeaderProps {
  onOpenModal: (modal: ActiveModal) => void;
  currentPage?: PageRoute;
  onNavigate?: (page: PageRoute) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenModal,
  currentPage = 'home',
  onNavigate = () => {},
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    {
      id: 'home' as PageRoute,
      label: 'INÍCIO',
      action: () => {
        if (currentPage !== 'home') {
          onNavigate('home');
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      },
    },
    {
      id: 'fabrica' as PageRoute,
      label: 'FÁBRICA',
      action: () => onNavigate('fabrica'),
    },
    {
      id: 'qualidade' as PageRoute,
      label: 'QUALIDADE',
      action: () => onNavigate('qualidade'),
    },
    {
      id: 'esg' as PageRoute,
      label: 'ESG',
      action: () => onNavigate('esg'),
    },
    {
      id: 'produtos' as PageRoute,
      label: 'PRODUTOS',
      action: () => onNavigate('produtos'),
    },
    {
      id: 'parceiros' as PageRoute,
      label: 'PARCEIROS',
      action: () => onNavigate('parceiros'),
    },
    {
      id: 'contato' as PageRoute,
      label: 'CONTATO',
      action: () => onNavigate('contato'),
    },
  ];

  const isSolid = isScrolled;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-4 sm:px-8 md:px-12 lg:px-[240px] pointer-events-auto ${
        isSolid
          ? 'bg-[#070302]/95 backdrop-blur-md py-3 sm:py-3.5 border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
          : 'bg-transparent pt-[16px] sm:pt-[24px] pb-3 sm:pb-4'
      }`}
    >
      <div className="relative w-full max-w-[1920px] mx-auto flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center shrink-0">
          <div
            onClick={() => {
              if (currentPage !== 'home') onNavigate('home');
              else window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            role="button"
            tabIndex={0}
            className="shrink-0 w-[54px] sm:w-[68px] lg:w-[83px] cursor-pointer transition-transform hover:scale-105 active:scale-95"
            title="MR. BRITZ FOODS - Início"
          >
            <MrBritzLogo size={isSolid ? 54 : 68} />
          </div>
        </div>

        {/* Center: Horizontal Desktop Navigation */}
        <nav
          className="hidden xl:flex items-center gap-[28px] 2xl:gap-[42px] absolute left-1/2 -translate-x-1/2"
          aria-label="Navegação principal"
        >
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.label}
                onClick={item.action}
                className={`font-sans-clean text-[13px] 2xl:text-[14px] font-medium uppercase tracking-[0.05em] transition-colors duration-200 cursor-pointer relative py-1 group whitespace-nowrap ${
                  isActive ? 'text-[#E8C991] font-bold' : 'text-[#F4EEE7] hover:text-[#F0C98B]'
                }`}
              >
                <span>{item.label}</span>
                <span
                  className={`absolute bottom-0 left-0 h-[2px] bg-[#E8C991] transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Right Action: Fale Conosco */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => onOpenModal('contact')}
            className="px-4 py-2 rounded-lg bg-[#E8C991] hover:bg-[#d8b77a] text-[#190B08] font-sans-clean font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
          >
            Fale Conosco
          </button>
        </div>

        {/* Mobile / Tablet Hamburger Button (44px touch target) */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden min-w-[44px] min-h-[44px] p-2.5 rounded-xl text-[#F4EEE7] bg-white/5 hover:bg-white/10 active:bg-white/15 transition-colors cursor-pointer flex items-center justify-center border border-white/10"
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu - Scrollable, Full Ergonomics */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 top-[60px] sm:top-[70px] bg-[#0A0403]/98 backdrop-blur-2xl z-50 p-5 sm:p-6 flex flex-col justify-between border-t border-white/10 overflow-y-auto max-h-[calc(100svh-60px)] pb-12 animate-fadeIn">
          <nav className="flex flex-col gap-2 pt-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.label}
                  onClick={() => {
                    item.action();
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left font-sans-clean text-[16px] sm:text-[17px] font-semibold uppercase tracking-[0.05em] py-3 px-3 rounded-xl transition-all flex items-center justify-between cursor-pointer ${
                    isActive 
                      ? 'bg-[#1F0C08] text-[#E8C991] font-bold border border-[#E8C991]/30' 
                      : 'text-[#F4EEE7] hover:bg-white/5 hover:text-[#F0C98B] border border-transparent'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive ? (
                    <span className="w-2 h-2 rounded-full bg-[#E8C991]" />
                  ) : (
                    <span className="text-xs text-white/30">→</span>
                  )}
                </button>
              );
            })}
          </nav>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-3 mt-6">
            <button
              onClick={() => {
                onOpenModal('contact');
                setMobileMenuOpen(false);
              }}
              className="w-full py-4 rounded-xl bg-[#E8C991] active:bg-[#d8b77a] text-[#190B08] font-sans-clean font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <span className="whitespace-nowrap">Falar com o Comercial</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

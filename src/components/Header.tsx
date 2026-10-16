import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Phone, Mail } from 'lucide-react';
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
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[90] transition-all duration-300 px-[25px] md:px-8 lg:px-[240px] pointer-events-auto ${
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
              className="px-4 py-2.5 rounded-lg bg-[#E8C991] hover:bg-[#d8b77a] text-[#190B08] font-sans-clean font-bold text-[13px] uppercase tracking-wider transition-all shadow-md cursor-pointer whitespace-nowrap"
            >
              <span className="whitespace-nowrap">Fale Conosco</span>
            </button>
          </div>

          {/* Mobile / Tablet Hamburger Button (48px touch target) */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="xl:hidden min-w-[48px] min-h-[48px] p-2.5 rounded-xl text-[#F4EEE7] bg-white/5 hover:bg-white/10 active:bg-white/15 transition-colors cursor-pointer flex items-center justify-center border border-white/10"
            aria-label="Abrir menu de navegação"
          >
            <Menu className="w-6 h-6 text-[#E8C991]" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu - Completely self-contained full viewport overlay with z-[100] */}
      {mobileMenuOpen && (
        <div
          className="xl:hidden fixed inset-0 z-[100] bg-[#070302] text-[#F4EEE7] flex flex-col justify-between overflow-y-auto pointer-events-auto h-[100dvh] w-full animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          {/* Top Bar inside Overlay */}
          <div className="shrink-0 flex items-center justify-between px-[25px] py-4 border-b border-white/10 bg-[#0C0504]">
            <div
              onClick={() => {
                if (currentPage !== 'home') onNavigate('home');
                setMobileMenuOpen(false);
              }}
              className="cursor-pointer flex items-center gap-3"
            >
              <MrBritzLogo size={46} />
              <div className="flex flex-col">
                <span className="text-[14px] font-sans-clean font-bold tracking-[1.5px] uppercase text-[#E8C991]">
                  MR. BRITZ FOODS
                </span>
                <span className="text-[13px] text-white/50 font-sans-clean">
                  Menu de Navegação
                </span>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="min-w-[48px] min-h-[48px] rounded-xl bg-white/10 hover:bg-white/15 active:bg-white/20 border border-white/15 text-[#E8C991] flex items-center justify-center cursor-pointer transition-colors"
              aria-label="Fechar menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav Items List */}
          <nav className="flex-1 px-[25px] py-6 flex flex-col gap-2 overflow-y-auto">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.label}
                  onClick={() => {
                    item.action();
                    setMobileMenuOpen(false);
                  }}
                  className={`w-full min-h-[50px] text-left font-sans-clean text-[16px] font-semibold uppercase tracking-[0.05em] py-3.5 px-4 rounded-xl transition-all flex items-center justify-between cursor-pointer active:scale-[0.99] ${
                    isActive
                      ? 'bg-[#1F0C08] text-[#E8C991] font-bold border border-[#E8C991]/40 shadow-sm'
                      : 'text-[#F4EEE7] hover:bg-white/5 hover:text-[#E8C991] border border-transparent'
                  }`}
                >
                  <span className="whitespace-nowrap">{item.label}</span>
                  {isActive ? (
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E8C991] shadow-[0_0_8px_#E8C991]" />
                  ) : (
                    <span className="text-sm text-white/30">→</span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Bottom Actions & Quick Contact in Mobile Menu */}
          <div className="shrink-0 px-[25px] pt-4 pb-8 border-t border-white/10 bg-[#0C0504] flex flex-col gap-3">
            <button
              onClick={() => {
                onOpenModal('contact');
                setMobileMenuOpen(false);
              }}
              className="w-full min-h-[50px] py-3.5 px-4 rounded-xl bg-[#E8C991] active:bg-[#d8b77a] text-[#190B08] font-sans-clean font-bold text-[13px] uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
            >
              <span className="whitespace-nowrap">Falar com o Comercial</span>
            </button>

            <a
              href="https://wa.me/551110677878"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full min-h-[48px] py-3 px-4 rounded-xl bg-[#25D366] text-[#0A2612] font-sans-clean font-bold text-[13px] uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4 fill-[#0A2612] shrink-0" />
              <span className="whitespace-nowrap">WhatsApp: (11) 1067-7878</span>
            </a>

            <div className="flex items-center justify-between text-[13px] text-white/50 font-sans-clean pt-2">
              <span className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-[#E8C991]" />
                (11) 1067-7878
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#E8C991]" />
                contato@mrbritz.com
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

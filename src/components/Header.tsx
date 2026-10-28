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
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 px-[25px] md:px-8 lg:px-[240px] pointer-events-auto ${
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

          {/* Right: Contact Information & Email (No CTAs) */}
          <div className="hidden lg:flex items-center gap-4 text-[13px] font-sans-clean">
            <a
              href="tel:+5511917592099"
              className="flex items-center gap-1.5 text-[#F4EEE7]/85 hover:text-[#E8C991] transition-colors cursor-pointer"
              title="Ligue ou envie WhatsApp para a Mister Britz"
            >
              <Phone className="w-3.5 h-3.5 text-[#E8C991]" />
              <span className="whitespace-nowrap">(11) 91759-2099</span>
            </a>
            <span className="text-white/20 select-none">|</span>
            <a
              href="mailto:contato@mrbritz.com"
              className="flex items-center gap-1.5 text-[#F4EEE7]/85 hover:text-[#E8C991] transition-colors cursor-pointer"
              title="Envie um e-mail para a Mister Britz"
            >
              <Mail className="w-3.5 h-3.5 text-[#E8C991]" />
              <span className="whitespace-nowrap">contato@mrbritz.com</span>
            </a>
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

      {/* Mobile Drawer Menu - Completely self-contained full viewport overlay with z-[9999] */}
      {mobileMenuOpen && (
        <div
          className="xl:hidden fixed inset-0 z-[9999] bg-[#070302] text-[#F4EEE7] flex flex-col justify-between overflow-y-auto pointer-events-auto h-[100dvh] w-full animate-fadeIn"
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

          {/* Bottom Contact Details in Mobile Menu (Clean Contact Info & Email - No CTAs) */}
          <div className="shrink-0 px-[25px] pt-4 pb-8 border-t border-white/10 bg-[#0C0504] flex flex-col gap-3">
            <span className="text-[11px] font-sans-clean font-bold tracking-[2px] uppercase text-[#E8C991]">
              Informações de Contato
            </span>

            <div className="p-4 rounded-2xl bg-[#190B08] border border-white/10 space-y-3">
              <a
                href="tel:+5511917592099"
                className="flex items-center gap-3 text-[13px] md:text-[14px] text-white/90 hover:text-[#E8C991] font-sans-clean transition-colors"
              >
                <div className="w-8 h-8 rounded-lg bg-[#25100B] border border-[#E8C991]/30 flex items-center justify-center text-[#E8C991] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-white/50 uppercase tracking-wider font-semibold">Telefone / WhatsApp</span>
                  <span className="whitespace-nowrap font-medium text-white">(11) 91759-2099</span>
                </div>
              </a>

              <a
                href="mailto:contato@mrbritz.com"
                className="flex items-center gap-3 text-[13px] md:text-[14px] text-white/90 hover:text-[#E8C991] font-sans-clean transition-colors pt-2 border-t border-white/5"
              >
                <div className="w-8 h-8 rounded-lg bg-[#25100B] border border-[#E8C991]/30 flex items-center justify-center text-[#E8C991] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-white/50 uppercase tracking-wider font-semibold">E-mail Comercial</span>
                  <span className="whitespace-nowrap font-medium text-white">contato@mrbritz.com</span>
                </div>
              </a>
            </div>

            <div className="flex items-center justify-between text-[11px] text-white/50 font-sans-clean px-1">
              <span>Atendimento Nacional B2B</span>
              <span>Seg a Sex · 08h às 18h</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

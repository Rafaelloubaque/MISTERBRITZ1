import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { MrBritzLogo } from './MrBritzLogo';
import { ActiveModal } from '../types';

interface HeaderProps {
  onOpenModal: (modal: ActiveModal) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'PRODUTOS', action: () => onOpenModal('products') },
    {
      label: 'SOBRE NÓS',
      action: () => {
        const el = document.getElementById('institucional');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        else onOpenModal('contact');
      },
    },
    {
      label: 'PROPÓSITO',
      action: () => {
        const el = document.getElementById('proposito');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        else onOpenModal('contact');
      },
    },
    {
      label: 'VALORES',
      action: () => {
        const el = document.getElementById('missao-visao-valores');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        else onOpenModal('contact');
      },
    },
    {
      label: 'FÁBRICA',
      action: () => {
        const el = document.getElementById('fabrica');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        else onOpenModal('contact');
      },
    },
    {
      label: 'QUALIDADE',
      action: () => {
        const el = document.getElementById('qualidade');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        else onOpenModal('contact');
      },
    },
    { label: 'CONTATO', action: () => onOpenModal('contact') },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-40 pt-[28px] px-6 sm:px-12 md:px-16 lg:px-[240px] pointer-events-auto">
      <div className="relative w-full max-w-[1920px] mx-auto flex items-center justify-between">
        {/* Left: Logo (83px) */}
        <div className="flex items-center shrink-0">
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            role="button"
            tabIndex={0}
            className="shrink-0 w-[83px] h-[83px] cursor-pointer"
            title="MR. BRITZ FOODS"
          >
            <MrBritzLogo size={83} />
          </div>
        </div>

        {/* Center: Horizontal Desktop Navigation (Precisely centered) */}
        <nav
          className="hidden xl:flex items-center gap-[36px] 2xl:gap-[56px] absolute left-1/2 -translate-x-1/2"
          aria-label="Navegação principal"
        >
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={item.action}
              className="font-sans-clean text-[13.5px] 2xl:text-[14px] font-medium uppercase tracking-[0.05em] text-[#F4EEE7] hover:text-[#F0C98B] transition-colors duration-200 cursor-pointer relative py-1 group whitespace-nowrap"
            >
              <span>{item.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E8C991] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Mobile / Tablet Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="xl:hidden p-2.5 rounded-lg text-[#F4EEE7] hover:bg-white/10 transition-colors cursor-pointer"
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-0 top-[90px] bg-[#0D0503]/98 backdrop-blur-xl z-50 p-6 flex flex-col justify-between border-t border-white/10 animate-fadeIn">
          <nav className="flex flex-col gap-5 pt-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => {
                  item.action();
                  setMobileMenuOpen(false);
                }}
                className="text-left font-sans-clean text-[16px] font-semibold uppercase tracking-[0.05em] text-[#F4EEE7] hover:text-[#F0C98B] py-2 border-b border-white/5"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};


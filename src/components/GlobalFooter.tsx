import React from 'react';
import { Phone, Mail, MapPin, Facebook } from 'lucide-react';
import { MrBritzLogo } from './MrBritzLogo';
import { ActiveModal, PageRoute } from '../types';
import { COMPANY_INFO } from '../data/productsData';

interface GlobalFooterProps {
  onOpenModal: (modal: ActiveModal) => void;
  onNavigate: (page: PageRoute) => void;
  currentPage?: PageRoute;
}

export const GlobalFooter: React.FC<GlobalFooterProps> = ({
  onOpenModal,
  onNavigate,
  currentPage = 'home',
}) => {
  const navLinks = [
    { id: 'home' as PageRoute, label: 'Início' },
    { id: 'fabrica' as PageRoute, label: 'Fábrica' },
    { id: 'qualidade' as PageRoute, label: 'Qualidade' },
    { id: 'esg' as PageRoute, label: 'ESG' },
    { id: 'produtos' as PageRoute, label: 'Produtos' },
    { id: 'parceiros' as PageRoute, label: 'Parceiros' },
    { id: 'contato' as PageRoute, label: 'Contato' },
  ];

  return (
    <footer className="relative w-full bg-[#0A0302] text-[#F7F1E8] pt-14 sm:pt-20 lg:pt-24 pb-12 border-t border-white/10 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-[25px] md:px-8 lg:px-[240px] space-y-12 sm:space-y-16">

        {/* =========================================================
            MANIFESTO DE FECHAMENTO & ASSINATURA
            ========================================================= */}
        <div className="pt-6 sm:pt-8 border-t border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 space-y-2.5">
            <p className="text-[15px] sm:text-lg font-editorial italic text-white/70">
              Da nossa produção para milhares de momentos.
            </p>
            <p className="text-[18px] sm:text-xl font-editorial font-bold text-[#E8C991]">
              Qualidade para quem consome. Competitividade para quem vende.
            </p>
            <p className="text-[24px] sm:text-3xl md:text-4xl font-editorial font-bold text-white tracking-wide">
              Seu próximo produto de giro pode ser Mister Britz.
            </p>
          </div>

          {/* Quick Contact & Address Bar - Centered */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-8 p-5 rounded-2xl bg-[#190B08] border border-white/10 text-[13px] md:text-[14px] font-sans-clean justify-items-center text-center">
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-3 p-2.5 rounded-xl text-white/85 hover:text-[#E8C991] hover:bg-white/5 transition-colors cursor-pointer w-full"
            >
              <Phone className="w-4 h-4 text-[#E8C991] shrink-0" />
              <span className="whitespace-nowrap">{COMPANY_INFO.phone} · Comercial</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center justify-center gap-3 p-2.5 rounded-xl text-white/85 hover:text-[#E8C991] hover:bg-white/5 transition-colors cursor-pointer w-full"
            >
              <Mail className="w-4 h-4 text-[#E8C991] shrink-0" />
              <span className="whitespace-nowrap">{COMPANY_INFO.email}</span>
            </a>
            <div className="flex items-center justify-center gap-2 p-2.5 rounded-xl text-white/85 w-full">
              <MapPin className="w-4 h-4 text-[#E8C991] shrink-0" />
              <span>{COMPANY_INFO.fullAddress}</span>
            </div>
          </div>

          {/* Redes Sociais Oficiais: Facebook */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-8 text-[13px] md:text-[14px] font-sans-clean">

            <a
              href={COMPANY_INFO.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#E8C991]/50 text-white/90 hover:text-[#E8C991] transition-all flex items-center gap-2 cursor-pointer"
            >
              <Facebook className="w-4 h-4 text-[#E8C991]" />
              <span>{COMPANY_INFO.facebook}</span>
            </a>

            <div className="px-4 py-2 rounded-xl bg-[#200A05] border border-[#E8C991]/30 text-[#E8C991] font-semibold text-[12px] uppercase tracking-wider">
              {COMPANY_INFO.origin}
            </div>
          </div>

          {/* Bottom Bar: Logo, Navigation, Legal & Conservation Notice */}
          <div className="flex flex-col items-center justify-center text-center gap-6 sm:gap-8 pt-8 border-t border-white/10 text-[13px] text-white/60 font-sans-clean">
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
              <div 
                onClick={() => onNavigate('home')}
                className="cursor-pointer shrink-0 transition-transform hover:scale-105"
                title={COMPANY_INFO.brand}
              >
                <MrBritzLogo size={46} className="text-[#E8C991]" />
              </div>
              <div className="sm:border-l sm:border-white/10 sm:pl-4 text-center sm:text-left">
                <p className="text-white/90 font-medium text-[14px]">{COMPANY_INFO.corporateName}</p>
                <p className="text-[13px] text-white/50">CNPJ: {COMPANY_INFO.cnpj} · {COMPANY_INFO.fullAddress}</p>
              </div>
            </div>

            {/* Navigation links centered */}
            <nav className="flex flex-wrap items-center justify-center gap-2 sm:gap-6 text-white/70" aria-label="Links do rodapé">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => onNavigate(link.id)}
                    className={`min-h-[44px] px-3 py-1.5 rounded-lg text-[13px] md:text-[14px] transition-colors cursor-pointer ${
                      isActive ? 'text-[#E8C991] font-bold underline underline-offset-4 decoration-[#E8C991]' : 'hover:text-[#E8C991]'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* Conservation & Gluten Statement Note in Footer */}
            <div className="max-w-2xl text-center text-[12px] text-white/50 leading-relaxed px-4 py-2 rounded-xl bg-white/[0.02] border border-white/5">
              <p className="text-white/70 font-medium mb-0.5">
                {COMPANY_INFO.conservation}
              </p>
              <p className="text-[#E8C991] font-semibold">
                Todos os produtos: {COMPANY_INFO.glutenStatement} · {COMPANY_INFO.origin}
              </p>
            </div>

            {/* Copyright centered */}
            <div className="text-center text-[13px] text-white/60">
              <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.corporateName}. Todos os direitos reservados.</p>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

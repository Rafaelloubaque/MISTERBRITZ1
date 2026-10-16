import React, { useState } from 'react';
import { ArrowUp, Send, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import { MrBritzLogo } from './MrBritzLogo';
import { ActiveModal, PageRoute } from '../types';

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
  const [newsletterName, setNewsletterName] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterName && newsletterEmail) {
      setNewsletterSubmitted(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
            NEWSLETTER / FIQUE POR DENTRO
            ========================================================= */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#190B08] border border-[#E8C991]/25 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            <div className="lg:col-span-5">
              <span className="text-[13px] uppercase tracking-[3px] text-[#E8C991] font-semibold font-sans-clean block mb-2">
                NEWSLETTER / FIQUE POR DENTRO
              </span>
              <h3 className="text-[26px] md:text-[32px] font-editorial font-bold text-white leading-tight">
                Fique por dentro da Mister Britz.
              </h3>
              <p className="mt-2 text-[15px] md:text-[16px] text-white/75 font-sans-clean leading-relaxed">
                Novos produtos, novidades da marca e oportunidades comerciais.
              </p>
            </div>

            <div className="lg:col-span-7">
              {newsletterSubmitted ? (
                <div className="p-5 rounded-2xl bg-[#25100B] border border-[#25D366]/40 flex items-center gap-3 text-white">
                  <CheckCircle2 className="w-6 h-6 text-[#25D366] shrink-0" />
                  <div>
                    <h5 className="text-[15px] font-semibold text-white">Cadastro Realizado com Sucesso!</h5>
                    <p className="text-[13px] text-white/75 font-sans-clean mt-0.5">
                      Você receberá em primeira mão nossas atualizações de mix e condições especiais.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    required
                    value={newsletterName}
                    onChange={(e) => setNewsletterName(e.target.value)}
                    placeholder="Seu nome"
                    className="flex-1 px-4 py-3.5 rounded-xl bg-[#25100B] border border-white/10 text-white placeholder-white/40 text-[14px] font-sans-clean focus:outline-none focus:border-[#E8C991] transition-colors"
                  />
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Seu e-mail"
                    className="flex-1 px-4 py-3.5 rounded-xl bg-[#25100B] border border-white/10 text-white placeholder-white/40 text-[14px] font-sans-clean focus:outline-none focus:border-[#E8C991] transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-[#E8C991] hover:bg-[#d8b77a] text-[#190B08] font-sans-clean font-bold text-[13px] md:text-[14px] uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shrink-0 shadow-md whitespace-nowrap"
                  >
                    <span className="whitespace-nowrap">QUERO RECEBER NOVIDADES</span>
                    <Send className="w-3.5 h-3.5 shrink-0" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

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

          {/* Quick Contact Bar - Mobile-First Clickable Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-10 p-5 rounded-2xl bg-[#190B08] border border-white/10 text-[13px] md:text-[14px] font-sans-clean">
            <a
              href="tel:1110677878"
              className="flex items-center gap-3 p-2.5 rounded-xl text-white/85 hover:text-[#E8C991] hover:bg-white/5 transition-colors cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#E8C991] shrink-0" />
              <span className="whitespace-nowrap">(11) 1067-7878 · Comercial</span>
            </a>
            <a
              href="mailto:contato@mrbritz.com"
              className="flex items-center gap-3 p-2.5 rounded-xl text-white/85 hover:text-[#E8C991] hover:bg-white/5 transition-colors cursor-pointer"
            >
              <Mail className="w-4 h-4 text-[#E8C991] shrink-0" />
              <span className="whitespace-nowrap">contato@mrbritz.com</span>
            </a>
            <div className="flex items-center gap-3 p-2.5 rounded-xl text-white/85">
              <MapPin className="w-4 h-4 text-[#E8C991] shrink-0" />
              <span>São Paulo — SP (Atendimento Nacional)</span>
            </div>
          </div>

          {/* Bottom Bar: Logo, Navigation, Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 pt-8 border-t border-white/10 text-[13px] text-white/60 font-sans-clean">
            
            <div className="flex items-center gap-4 text-center sm:text-left">
              <div 
                onClick={() => onNavigate('home')}
                className="cursor-pointer shrink-0"
                title="MR. BRITZ FOODS"
              >
                <MrBritzLogo size={42} className="text-[#E8C991]" />
              </div>
              <div className="border-l border-white/10 pl-4 text-left">
                <p className="text-white/90 font-medium text-[14px]">Mister Britz Distribuidora de Alimentos Ltda.</p>
                <p className="text-[13px] text-white/50">CNPJ: 54.587.919/0001-52 · São Paulo — SP</p>
              </div>
            </div>

            {/* Navigation links with proper touch target and wrapping */}
            <nav className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-white/70" aria-label="Links do rodapé">
              {navLinks.map((link) => {
                const isActive = currentPage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => onNavigate(link.id)}
                    className={`min-h-[44px] px-2.5 py-1.5 rounded-lg text-[13px] md:text-[14px] transition-colors cursor-pointer ${
                      isActive ? 'text-[#E8C991] font-bold underline underline-offset-4 decoration-[#E8C991]' : 'hover:text-[#E8C991]'
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
            </nav>

            {/* Copyright & Scroll to Top */}
            <div className="flex items-center gap-4 text-center">
              <span className="text-[13px]">&copy; {new Date().getFullYear()} Mister Britz. Todos os direitos reservados.</span>
              <button
                onClick={scrollToTop}
                aria-label="Voltar ao topo da página"
                className="min-w-[44px] min-h-[44px] rounded-full bg-[#190B08] border border-white/15 hover:border-[#E8C991] flex items-center justify-center text-white/70 hover:text-[#E8C991] transition-colors cursor-pointer active:scale-95"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

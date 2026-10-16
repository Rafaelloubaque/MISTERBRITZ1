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
    setNewsletterSubmitted(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full bg-[#0A0302] text-[#F7F1E8] pt-16 sm:pt-20 lg:pt-24 pb-12 border-t border-white/10 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-5 sm:px-10 md:px-16 lg:px-[240px] space-y-16">
        
        {/* =========================================================
            NEWSLETTER / FIQUE POR DENTRO
            ========================================================= */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#190B08] border border-[#E8C991]/25 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5">
              <span className="text-xs uppercase tracking-[3px] text-[#E8C991] font-semibold font-sans-clean block mb-2">
                NEWSLETTER / FIQUE POR DENTRO
              </span>
              <h3 className="text-2xl sm:text-3xl font-editorial font-bold text-white">
                Fique por dentro da Mister Britz.
              </h3>
              <p className="mt-2 text-sm text-white/75 font-sans-clean leading-relaxed">
                Novos produtos, novidades da marca e oportunidades comerciais.
              </p>
            </div>

            <div className="lg:col-span-7">
              {newsletterSubmitted ? (
                <div className="p-5 rounded-2xl bg-[#25100B] border border-[#25D366]/40 flex items-center gap-3 text-white">
                  <CheckCircle2 className="w-6 h-6 text-[#25D366] shrink-0" />
                  <div>
                    <h5 className="text-sm font-semibold text-white">Cadastro Realizado com Sucesso!</h5>
                    <p className="text-xs text-white/75 font-sans-clean mt-0.5">
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
                    className="flex-1 px-4 py-3.5 rounded-xl bg-[#25100B] border border-white/10 text-white placeholder-white/40 text-xs font-sans-clean focus:outline-none focus:border-[#E8C991] transition-colors"
                  />
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Seu e-mail"
                    className="flex-1 px-4 py-3.5 rounded-xl bg-[#25100B] border border-white/10 text-white placeholder-white/40 text-xs font-sans-clean focus:outline-none focus:border-[#E8C991] transition-colors"
                  />
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-4 sm:px-6 py-3.5 rounded-xl bg-[#E8C991] hover:bg-[#d8b77a] text-[#190B08] font-sans-clean font-bold text-[11px] xs:text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shrink-0 shadow-md whitespace-nowrap"
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
        <div className="pt-8 border-t border-white/10">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <p className="text-base sm:text-lg font-editorial italic text-white/70">
              Da nossa produção para milhares de momentos.
            </p>
            <p className="text-lg sm:text-xl font-editorial font-bold text-[#E8C991]">
              Qualidade para quem consome. Competitividade para quem vende.
            </p>
            <p className="text-2xl sm:text-3xl md:text-4xl font-editorial font-bold text-white tracking-wide">
              Seu próximo produto de giro pode ser Mister Britz.
            </p>
          </div>

          {/* Quick Contact Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 p-5 rounded-2xl bg-[#190B08] border border-white/5 text-xs font-sans-clean">
            <div className="flex items-center gap-3 text-white/80">
              <Phone className="w-4 h-4 text-[#E8C991]" />
              <span>(11) 1067-7878 · Comercial</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <Mail className="w-4 h-4 text-[#E8C991]" />
              <span>contato@mrbritz.com</span>
            </div>
            <div className="flex items-center gap-3 text-white/80">
              <MapPin className="w-4 h-4 text-[#E8C991]" />
              <span>São Paulo — SP (Atendimento Nacional)</span>
            </div>
          </div>

          {/* Bottom Bar: Logo, Navigation, Copyright */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-white/5 text-xs text-white/50 font-sans-clean">
            
            <div className="flex items-center gap-4">
              <div 
                onClick={() => onNavigate('home')}
                className="cursor-pointer"
              >
                <MrBritzLogo size={42} className="text-[#E8C991]" />
              </div>
              <div className="border-l border-white/10 pl-4">
                <p className="text-white/80 font-medium">Mister Britz Distribuidora de Alimentos Ltda.</p>
                <p className="text-[11px] text-white/50">CNPJ: 54.587.919/0001-52 · São Paulo — SP</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-white/70">
              <button
                onClick={() => onNavigate('home')}
                className={`transition-colors cursor-pointer ${currentPage === 'home' ? 'text-[#E8C991] font-bold' : 'hover:text-[#E8C991]'}`}
              >
                Início
              </button>
              <button
                onClick={() => onNavigate('fabrica')}
                className={`transition-colors cursor-pointer ${currentPage === 'fabrica' ? 'text-[#E8C991] font-bold' : 'hover:text-[#E8C991]'}`}
              >
                Fábrica
              </button>
              <button
                onClick={() => onNavigate('qualidade')}
                className={`transition-colors cursor-pointer ${currentPage === 'qualidade' ? 'text-[#E8C991] font-bold' : 'hover:text-[#E8C991]'}`}
              >
                Qualidade
              </button>
              <button
                onClick={() => onNavigate('esg')}
                className={`transition-colors cursor-pointer ${currentPage === 'esg' ? 'text-[#E8C991] font-bold' : 'hover:text-[#E8C991]'}`}
              >
                ESG
              </button>
              <button
                onClick={() => onNavigate('produtos')}
                className={`transition-colors cursor-pointer ${currentPage === 'produtos' ? 'text-[#E8C991] font-bold' : 'hover:text-[#E8C991]'}`}
              >
                Produtos
              </button>
              <button
                onClick={() => onNavigate('parceiros')}
                className={`transition-colors cursor-pointer ${currentPage === 'parceiros' ? 'text-[#E8C991] font-bold' : 'hover:text-[#E8C991]'}`}
              >
                Parceiros
              </button>
              <button
                onClick={() => onNavigate('contato')}
                className={`transition-colors cursor-pointer ${currentPage === 'contato' ? 'text-[#E8C991] font-bold' : 'hover:text-[#E8C991]'}`}
              >
                Contato
              </button>
            </div>

            <div className="flex items-center gap-4">
              <span>&copy; {new Date().getFullYear()} Mister Britz. Todos os direitos reservados.</span>
              <button
                onClick={scrollToTop}
                aria-label="Voltar ao topo"
                className="w-9 h-9 rounded-full bg-[#190B08] border border-white/10 hover:border-[#E8C991] flex items-center justify-center text-white/70 hover:text-[#E8C991] transition-colors cursor-pointer"
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

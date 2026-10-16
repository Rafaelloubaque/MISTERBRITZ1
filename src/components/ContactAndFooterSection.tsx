import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  Building2
} from 'lucide-react';
import { ActiveModal } from '../types';

interface ContactAndFooterSectionProps {
  onOpenModal: (modal: ActiveModal) => void;
}

export const ContactAndFooterSection: React.FC<ContactAndFooterSectionProps> = ({
  onOpenModal,
}) => {
  const [newsletterName, setNewsletterName] = useState('');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterName && newsletterEmail) {
      setNewsletterSubmitted(true);
      setTimeout(() => {
        setNewsletterName('');
        setNewsletterEmail('');
      }, 4000);
    }
  };

  const handleWhatsAppCommercial = () => {
    const text = encodeURIComponent(
      'Olá! Gostaria de falar com o time comercial da Mister Britz Distribuidora de Alimentos.'
    );
    window.open(`https://wa.me/551110677878?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <footer id="contato" className="relative w-full bg-[#0A0302] text-[#F7F1E8] pt-14 sm:pt-20 lg:pt-24 pb-12 border-t border-white/10 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-[25px] md:px-8 lg:px-[240px] space-y-16 sm:space-y-20">
        
        {/* =========================================================
            PARTE 1: CONTATO
            ========================================================= */}
        <div>
          <div className="mb-10 sm:mb-12">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[1px] bg-[#E8C991]" />
              <span className="text-[13px] uppercase tracking-[3px] text-[#E8C991] font-semibold font-sans-clean">
                Canais de Atendimento
              </span>
            </div>

            <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-editorial font-bold tracking-[2px] text-white uppercase leading-tight">
              CONTATO
            </h2>

            <p className="mt-2 text-[20px] sm:text-2xl text-[#E8C991] font-editorial italic">
              Fale com a Mister Britz.
            </p>
          </div>

          {/* Corporate Contact Card */}
          <div className="p-6 sm:p-10 rounded-3xl bg-[#190B08] border border-[#E8C991]/30 shadow-[0_15px_40px_rgba(0,0,0,0.7)]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
              
              {/* Razão Social & CNPJ */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#25100B] border border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#190B08] border border-[#E8C991]/25 flex items-center justify-center text-[#E8C991] mb-4">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className="text-[13px] font-sans-clean uppercase tracking-wider text-white/50 block mb-1">
                  Razão Social
                </span>
                <h4 className="text-[15px] sm:text-base font-editorial font-bold text-white mb-2 leading-snug">
                  Mister Britz Distribuidora de Alimentos Ltda.
                </h4>
                <div className="pt-2 border-t border-white/10">
                  <span className="text-[13px] font-sans-clean uppercase tracking-wider text-[#E8C991] block">
                    CNPJ
                  </span>
                  <span className="text-[13px] font-mono text-white/90">
                    54.587.919/0001-52
                  </span>
                </div>
              </div>

              {/* Telefone Comercial */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#25100B] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#190B08] border border-[#E8C991]/25 flex items-center justify-center text-[#E8C991] mb-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <span className="text-[13px] font-sans-clean uppercase tracking-wider text-white/50 block mb-1">
                    Comercial
                  </span>
                  <a 
                    href="tel:1110677878" 
                    className="text-[18px] sm:text-lg font-editorial font-bold text-white hover:text-[#E8C991] transition-colors"
                  >
                    (11) 1067-7878
                  </a>
                </div>
                <span className="text-[13px] text-white/50 font-sans-clean mt-3">
                  Segunda a Sexta · 08h às 18h
                </span>
              </div>

              {/* E-mail Institucional */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#25100B] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#190B08] border border-[#E8C991]/25 flex items-center justify-center text-[#E8C991] mb-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-[13px] font-sans-clean uppercase tracking-wider text-white/50 block mb-1">
                    E-mail
                  </span>
                  <a 
                    href="mailto:contato@mrbritz.com" 
                    className="text-[14px] font-sans-clean font-semibold text-white hover:text-[#E8C991] transition-colors break-all"
                  >
                    contato@mrbritz.com
                  </a>
                </div>
                <span className="text-[13px] text-white/50 font-sans-clean mt-3">
                  Retorno em até 2 horas úteis
                </span>
              </div>

              {/* Localização */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#25100B] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#190B08] border border-[#E8C991]/25 flex items-center justify-center text-[#E8C991] mb-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-[13px] font-sans-clean uppercase tracking-wider text-white/50 block mb-1">
                    Localização
                  </span>
                  <p className="text-[15px] sm:text-base font-editorial font-bold text-white">
                    São Paulo — SP
                  </p>
                </div>
                <span className="text-[13px] text-white/50 font-sans-clean mt-3">
                  Atendimento para todo o Brasil
                </span>
              </div>
            </div>

            {/* Direct WhatsApp Button */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <span className="text-[13px] uppercase tracking-widest text-[#E8C991] font-sans-clean font-semibold block">
                  Atendimento Imediato
                </span>
                <p className="text-[15px] text-white/70 font-sans-clean">
                  Fale diretamente com um especialista comercial no aplicativo.
                </p>
              </div>

              <button
                onClick={handleWhatsAppCommercial}
                className="w-full sm:w-auto px-5 sm:px-8 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-[#0A2612] font-sans-clean font-bold text-[13px] md:text-[14px] uppercase tracking-wider flex items-center justify-center gap-2 sm:gap-2.5 transition-all shadow-[0_4px_20px_rgba(37,211,102,0.3)] cursor-pointer whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 fill-[#0A2612] shrink-0" />
                <span className="whitespace-nowrap">WHATSAPP COMERCIAL</span>
              </button>
            </div>
          </div>
        </div>

        {/* =========================================================
            PARTE 2: NEWSLETTER
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

      </div>
    </footer>
  );
};

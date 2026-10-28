import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Building2,
  Facebook
} from 'lucide-react';
import { ActiveModal } from '../types';
import { COMPANY_INFO } from '../data/productsData';

interface ContactAndFooterSectionProps {
  onOpenModal: (modal: ActiveModal) => void;
}

export const ContactAndFooterSection: React.FC<ContactAndFooterSectionProps> = ({
  onOpenModal,
}) => {
  const handleWhatsAppCommercial = () => {
    const text = encodeURIComponent(
      `Olá! Gostaria de falar com o time comercial da ${COMPANY_INFO.corporateName}.`
    );
    window.open(`https://wa.me/55${COMPANY_INFO.phoneRaw}?text=${text}`, '_blank', 'noopener,noreferrer');
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
              Fale com a {COMPANY_INFO.brand}.
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
                  {COMPANY_INFO.corporateName}
                </h4>
                <div className="pt-2 border-t border-white/10">
                  <span className="text-[13px] font-sans-clean uppercase tracking-wider text-[#E8C991] block">
                    CNPJ
                  </span>
                  <span className="text-[13px] font-mono text-white/90">
                    {COMPANY_INFO.cnpj}
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
                    href={`tel:${COMPANY_INFO.phoneRaw}`} 
                    className="text-[18px] sm:text-lg font-editorial font-bold text-white hover:text-[#E8C991] transition-colors"
                  >
                    {COMPANY_INFO.phone}
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
                    href={`mailto:${COMPANY_INFO.email}`} 
                    className="text-[14px] font-sans-clean font-semibold text-white hover:text-[#E8C991] transition-colors break-all"
                  >
                    {COMPANY_INFO.email}
                  </a>
                </div>
                <span className="text-[13px] text-white/50 font-sans-clean mt-3">
                  Retorno em até 2 horas úteis
                </span>
              </div>

              {/* Endereço & Localização Oficial */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#25100B] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#190B08] border border-[#E8C991]/25 flex items-center justify-center text-[#E8C991] mb-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-[13px] font-sans-clean uppercase tracking-wider text-white/50 block mb-1">
                    Endereço Oficial
                  </span>
                  <p className="text-[14px] font-sans-clean font-medium text-white leading-snug">
                    {COMPANY_INFO.address} - {COMPANY_INFO.neighborhood}
                  </p>
                  <p className="text-[13px] font-sans-clean text-[#E8C991]">
                    {COMPANY_INFO.cityState} · CEP {COMPANY_INFO.cep}
                  </p>
                </div>
                <span className="text-[12px] text-white/50 font-sans-clean mt-3">
                  {COMPANY_INFO.origin}
                </span>
              </div>
            </div>

            {/* Social Links & Direct WhatsApp Button */}
            <div className="pt-6 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-3 text-center sm:text-left">
                <a
                  href={COMPANY_INFO.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#E8C991]/40 text-white text-[13px] flex items-center gap-2 transition-all cursor-pointer"
                >
                  <Facebook className="w-4 h-4 text-[#E8C991]" />
                  <span>{COMPANY_INFO.facebook}</span>
                </a>
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

      </div>
    </footer>
  );
};

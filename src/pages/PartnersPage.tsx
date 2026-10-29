import React, { useState } from 'react';
import { Handshake, PhoneCall, CheckCircle2, MessageCircle, Store, BadgePercent, Award } from 'lucide-react';
import { PageTopHero } from '../components/PageTopHero';
import { PartnersAndCtaSection } from '../components/PartnersAndCtaSection';
import { HERO_BACKGROUNDS } from '../assets/heroBackgrounds';
import { ActiveModal, PageRoute } from '../types';

interface PartnersPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenModal: (modal: ActiveModal) => void;
  onSelectSubject?: (subject: string) => void;
  mousePos?: { x: number; y: number };
}

export const PartnersPage: React.FC<PartnersPageProps> = ({
  onNavigate,
  onOpenModal,
  onSelectSubject,
  mousePos = { x: 0, y: 0 },
}) => {
  const [partnerForm, setPartnerForm] = useState({
    name: '',
    company: '',
    role: '',
    segment: 'Distribuidora',
    cityState: '',
    whatsapp: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parts = [
      `*SOLICITAÇÃO DE PARCERIA COMERCIAL - MISTER BRITZ*`,
      `----------------------------------------`,
      `*Nome:* ${partnerForm.name}`,
      `*Empresa:* ${partnerForm.company}`,
      `*Segmento:* ${partnerForm.segment}`,
      `*Cidade/UF:* ${partnerForm.cityState}`,
      `*WhatsApp:* ${partnerForm.whatsapp}`,
      `*E-mail:* ${partnerForm.email}`,
      partnerForm.message ? `*Mensagem / Demanda:* ${partnerForm.message}` : null,
      `----------------------------------------`,
      `_Enviado pelo formulário de parceiros do site Mister Britz_`,
    ].filter(Boolean);

    const text = encodeURIComponent(parts.join('\n'));
    window.open(`https://wa.me/5511917592099?text=${text}`, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Olá! Tenho interesse em ser parceiro da Mister Britz (Empresa: ${partnerForm.company || 'Minha Empresa'}, Segmento: ${partnerForm.segment}). Gostaria de receber a apresentação comercial e catálogo.`
    );
    window.open(`https://wa.me/5511917592099?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="w-full min-h-screen bg-black text-[#F4EEE7]">
      {/* Cinematic Top Hero Banner (Home Hero Style) */}
      <PageTopHero
        pageId="parceiros"
        customBgUrl={HERO_BACKGROUNDS.parceiros}
        mousePos={mousePos}
        breadcrumbLabel="Parceiros"
        eyebrowBadge="EXPANSÃO & PARCERIAS COMERCIAIS"
        badgeIcon={<Handshake className="w-4 h-4" />}
        titleLines={[
          'Produtos de alto giro.',
          'Margens competitivas.',
          'Parcerias de verdade.',
        ]}
        subtitle="O próximo ponto de venda Mister Britz pode ser o seu."
        description="Estamos ampliando nossa presença comercial e procurando empresas interessadas em construir uma relação de longo prazo com a nossa marca: produtos de alto giro, margens competitivas e abastecimento ágil."
        primaryCta={{
          label: 'Quero Ser Parceiro',
          action: () => {
            const el = document.getElementById('parceiros');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          },
        }}
        secondaryCta={{
          label: 'WhatsApp Comercial',
          action: handleWhatsAppDirect,
          icon: <MessageCircle className="w-4 h-4 text-[#25D366]" />,
        }}
        floatingCards={[
          {
            title: 'Canais Atendidos',
            value: '8 Segmentos B2B',
            subtitle: 'Distribuidores, atacarejos, varejos e food service',
            icon: <Store className="w-4 h-4" />,
          },
          {
            title: 'Condições Atacado',
            value: 'Direto da Fábrica',
            subtitle: 'Políticas de volume e faturamento estruturado',
            icon: <BadgePercent className="w-4 h-4" />,
          },
          {
            title: 'Potencial de Giro',
            value: 'Alta Frequência',
            subtitle: 'Itens essenciais para a cesta de compras',
            icon: <Award className="w-4 h-4" />,
          },
        ]}
        targetSectionId="parceiros"
        onNavigate={onNavigate}
      />

      {/* Main Partners & Commercial CTA Content */}
      <PartnersAndCtaSection
        onOpenModal={onOpenModal}
        onSelectSubject={onSelectSubject}
      />

      {/* Direct In-Page B2B Partnership Application Form */}
      <div id="cadastro-parceiro" className="relative w-full bg-[#0E0604] border-t border-white/10 py-16 sm:py-24">
        <div className="relative z-10 w-full max-w-[1920px] mx-auto px-[25px] md:px-8 lg:px-[240px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Context Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[13px] font-sans-clean font-semibold uppercase tracking-wider text-[#E8C991]">
                <Handshake className="w-4 h-4 text-[#C11D31]" />
                <span>Formulário de Cadastro B2B</span>
              </div>

              <h2 className="text-[26px] md:text-[32px] lg:text-[38px] font-editorial font-bold text-white uppercase leading-tight">
                Cadastre sua empresa e receba condições exclusivas
              </h2>

              <p className="text-[15px] md:text-[16px] text-white/80 font-sans-clean leading-relaxed">
                Preencha seus dados para que um consultor comercial da sua região entre em contato com nossa tabela de preços atacado, política de faturamento e amostras.
              </p>

              <div className="p-6 rounded-2xl bg-[#190B08] border border-white/10 space-y-4">
                <h4 className="text-[15px] font-editorial font-bold text-[#E8C991] uppercase">
                  O que você recebe ao se cadastrar:
                </h4>
                <ul className="space-y-2.5 text-[13px] text-white/75 font-sans-clean">
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8C991]" />
                    Catálogo completo em PDF com fotos em alta resolução
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8C991]" />
                    Tabela comercial de atacado com faixas de volume
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8C991]" />
                    Prazos de entrega para o seu CEP e faturamento PJ
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8C991]" />
                    Atendimento dedicado via WhatsApp e telefone
                  </li>
                </ul>
              </div>

            </div>

            {/* Right Form Column */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-10 rounded-3xl bg-[#190B08] border border-[#E8C991]/30 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                {isSubmitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#25D366]/20 border border-[#25D366] text-[#25D366] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-[26px] md:text-[32px] font-editorial font-bold text-white uppercase">
                      Solicitação Recebida com Sucesso!
                    </h3>
                    <p className="text-[15px] text-white/80 font-sans-clean max-w-md mx-auto leading-relaxed">
                      Obrigado, <strong className="text-[#E8C991]">{partnerForm.name}</strong>. Nossa equipe comercial entrará em contato via WhatsApp/telefone em breve com as condições para <strong className="text-white">{partnerForm.company}</strong>.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-6 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-[13px] font-sans-clean text-white uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap"
                    >
                      <span className="whitespace-nowrap">Enviar outra solicitação</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[13px] uppercase font-sans-clean tracking-wider text-white/70 mb-1.5">
                          Seu Nome Completo *
                        </label>
                        <input
                          type="text"
                          required
                          value={partnerForm.name}
                          onChange={(e) => setPartnerForm({ ...partnerForm, name: e.target.value })}
                          placeholder="Ex: Carlos Mendes"
                          className="w-full px-4 py-3 rounded-xl bg-[#25100B] border border-white/10 text-white placeholder-white/40 text-[14px] font-sans-clean focus:outline-none focus:border-[#E8C991] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[13px] uppercase font-sans-clean tracking-wider text-white/70 mb-1.5">
                          Nome da Empresa / Fantasia *
                        </label>
                        <input
                          type="text"
                          required
                          value={partnerForm.company}
                          onChange={(e) => setPartnerForm({ ...partnerForm, company: e.target.value })}
                          placeholder="Ex: Comercial Alimentos Ltda."
                          className="w-full px-4 py-3 rounded-xl bg-[#25100B] border border-white/10 text-white placeholder-white/40 text-[14px] font-sans-clean focus:outline-none focus:border-[#E8C991] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[13px] uppercase font-sans-clean tracking-wider text-white/70 mb-1.5">
                          Segmento do Negócio *
                        </label>
                        <select
                          value={partnerForm.segment}
                          onChange={(e) => setPartnerForm({ ...partnerForm, segment: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#25100B] border border-white/10 text-white text-[14px] font-sans-clean focus:outline-none focus:border-[#E8C991] transition-colors"
                        >
                          <option value="Distribuidora">Distribuidora</option>
                          <option value="Rede de Supermercados">Rede de Supermercados</option>
                          <option value="Mercado / Mercearia">Mercado / Mercearia</option>
                          <option value="Padaria / Confeitaria">Padaria / Confeitaria</option>
                          <option value="Conveniência">Conveniência</option>
                          <option value="Honest Market">Honest Market</option>
                          <option value="Food Service / Restaurante">Food Service / Restaurante</option>
                          <option value="Representante Comercial">Representante Comercial</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[13px] uppercase font-sans-clean tracking-wider text-white/70 mb-1.5">
                          Cidade e UF *
                        </label>
                        <input
                          type="text"
                          required
                          value={partnerForm.cityState}
                          onChange={(e) => setPartnerForm({ ...partnerForm, cityState: e.target.value })}
                          placeholder="Ex: Campinas — SP"
                          className="w-full px-4 py-3 rounded-xl bg-[#25100B] border border-white/10 text-white placeholder-white/40 text-[14px] font-sans-clean focus:outline-none focus:border-[#E8C991] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[13px] uppercase font-sans-clean tracking-wider text-white/70 mb-1.5">
                          WhatsApp Comercial *
                        </label>
                        <input
                          type="tel"
                          required
                          value={partnerForm.whatsapp}
                          onChange={(e) => setPartnerForm({ ...partnerForm, whatsapp: e.target.value })}
                          placeholder="(11) 99999-9999"
                          className="w-full px-4 py-3 rounded-xl bg-[#25100B] border border-white/10 text-white placeholder-white/40 text-[14px] font-sans-clean focus:outline-none focus:border-[#E8C991] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[13px] uppercase font-sans-clean tracking-wider text-white/70 mb-1.5">
                          E-mail Corporativo *
                        </label>
                        <input
                          type="email"
                          required
                          value={partnerForm.email}
                          onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                          placeholder="compras@suaempresa.com.br"
                          className="w-full px-4 py-3 rounded-xl bg-[#25100B] border border-white/10 text-white placeholder-white/40 text-[14px] font-sans-clean focus:outline-none focus:border-[#E8C991] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[13px] uppercase font-sans-clean tracking-wider text-white/70 mb-1.5">
                        Mensagem / Volume Previsto (Opcional)
                      </label>
                      <textarea
                        rows={3}
                        value={partnerForm.message}
                        onChange={(e) => setPartnerForm({ ...partnerForm, message: e.target.value })}
                        placeholder="Conte-nos sobre a sua operação, cidades atendidas ou produtos de interesse..."
                        className="w-full px-4 py-3 rounded-xl bg-[#25100B] border border-white/10 text-white placeholder-white/40 text-[14px] font-sans-clean focus:outline-none focus:border-[#E8C991] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 px-4 rounded-xl bg-[#E8C991] hover:bg-[#d8b77a] text-[#190B08] font-sans-clean font-bold text-[13px] uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-[0_4px_25px_rgba(232,201,145,0.3)] cursor-pointer mt-2 whitespace-nowrap"
                    >
                      <MessageCircle className="w-4 h-4 shrink-0 text-[#190B08]" />
                      <span className="whitespace-nowrap">SOLICITAR VIA WHATSAPP</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

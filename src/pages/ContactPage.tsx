import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Building2,
  MessageCircle,
  Clock,
  Send,
  CheckCircle2,
} from 'lucide-react';
import { PageTopHero } from '../components/PageTopHero';
import { HERO_BACKGROUNDS } from '../assets/heroBackgrounds';
import { ActiveModal, PageRoute } from '../types';

interface ContactPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenModal: (modal: ActiveModal) => void;
  mousePos?: { x: number; y: number };
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  mousePos = { x: 0, y: 0 },
}) => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Comercial / Vendas',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      'Olá! Gostaria de falar com o time comercial da Mister Britz.'
    );
    window.open(`https://wa.me/551110677878?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  const faqs = [
    {
      q: 'Qual é o pedido mínimo para compras no atacado?',
      a: 'Nossa política de pedido mínimo varia conforme a categoria e a região de entrega. Entre em contato para receber a tabela específica para o seu canal.',
    },
    {
      q: 'Vocês atendem distribuidores em todo o território nacional?',
      a: 'Sim, estruturamos nossa malha logística e parcerias de transporte para abastecer centros de distribuição e redes regionais em todo o Brasil.',
    },
    {
      q: 'Como posso solicitar amostras ou visitas de representantes?',
      a: 'Preencha o formulário nesta página informando seu CNPJ e cidade ou clique no botão do WhatsApp Comercial para alinharmos a visita.',
    },
    {
      q: 'Quais são os prazos de faturamento para pessoas jurídicas?',
      a: 'Trabalhamos com condições personalizadas após análise cadastral e homologação comercial do parceiro.',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-black text-[#F4EEE7]">
      {/* Cinematic Top Hero Banner (Home Hero Style) */}
      <PageTopHero
        pageId="contato"
        customBgUrl={HERO_BACKGROUNDS.contato}
        mousePos={mousePos}
        breadcrumbLabel="Contato"
        eyebrowBadge="CANAIS DE ATENDIMENTO"
        badgeIcon={<Phone className="w-4 h-4" />}
        titleLines={[
          'Atendimento direto.',
          'Agilidade comercial.',
          'Conte com a Mister Britz.',
        ]}
        subtitle="Comunicação ágil e suporte consultivo para a sua empresa."
        description="Mister Britz Distribuidora de Alimentos Ltda. Estamos à disposição para apresentar nosso portfólio, tirar dúvidas técnicas e estruturar parcerias comerciais de longo prazo."
        primaryCta={{
          label: 'WhatsApp Comercial',
          action: handleWhatsApp,
          icon: <MessageCircle className="w-4 h-4 text-[#25D366]" />,
        }}
        secondaryCta={{
          label: 'Enviar Mensagem',
          action: () => {
            const el = document.getElementById('contato-detalhes');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          },
          icon: <Send className="w-3.5 h-3.5" />,
        }}
        floatingCards={[
          {
            title: 'Telefone Corporativo',
            value: '(11) 1067-7878',
            subtitle: 'Atendimento comercial de Segunda a Sexta · 08h às 18h',
            icon: <Phone className="w-4 h-4" />,
          },
          {
            title: 'E-mail Comercial',
            value: 'contato@mrbritz.com',
            subtitle: 'Retorno prioritário em até 2 horas úteis',
            icon: <Mail className="w-4 h-4" />,
          },
          {
            title: 'Sede Operacional',
            value: 'São Paulo — SP',
            subtitle: 'CNPJ: 54.587.919/0001-52 · Atendimento Nacional',
            icon: <Building2 className="w-4 h-4" />,
          },
        ]}
        targetSectionId="contato-detalhes"
        onNavigate={onNavigate}
      />

      <div id="contato-detalhes" className="relative w-full py-16 sm:py-20">
        <div className="relative z-10 w-full max-w-[1920px] mx-auto px-[25px] md:px-8 lg:px-[240px] space-y-16">
          
          {/* Corporate Contact Cards Grid */}
          <div className="p-6 sm:p-10 rounded-3xl bg-[#190B08] border border-[#E8C991]/30 shadow-[0_15px_40px_rgba(0,0,0,0.7)]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
              
              {/* Razão Social & CNPJ */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#25100B] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#190B08] border border-[#E8C991]/25 flex items-center justify-center text-[#E8C991] mb-4">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <span className="text-[13px] font-sans-clean uppercase tracking-wider text-white/50 block mb-1">
                    Razão Social
                  </span>
                  <h4 className="text-[15px] sm:text-base font-editorial font-bold text-white mb-2 leading-snug">
                    Mister Britz Distribuidora de Alimentos Ltda.
                  </h4>
                </div>
                <div className="pt-3 border-t border-white/10 mt-2">
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
                    Comercial Direto
                  </span>
                  <a
                    href="tel:1110677878"
                    className="text-[18px] sm:text-xl font-editorial font-bold text-white hover:text-[#E8C991] transition-colors"
                  >
                    (11) 1067-7878
                  </a>
                </div>
                <div className="pt-3 border-t border-white/10 mt-2 flex items-center gap-1.5 text-[13px] text-white/50 font-sans-clean">
                  <Clock className="w-3.5 h-3.5 text-[#E8C991]" />
                  <span>Seg a Sex · 08h às 18h</span>
                </div>
              </div>

              {/* E-mail Institucional */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#25100B] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#190B08] border border-[#E8C991]/25 flex items-center justify-center text-[#E8C991] mb-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <span className="text-[13px] font-sans-clean uppercase tracking-wider text-white/50 block mb-1">
                    E-mail Oficial
                  </span>
                  <a
                    href="mailto:contato@mrbritz.com"
                    className="text-[14px] font-sans-clean font-semibold text-white hover:text-[#E8C991] transition-colors break-all"
                  >
                    contato@mrbritz.com
                  </a>
                </div>
                <div className="pt-3 border-t border-white/10 mt-2 text-[13px] text-white/50 font-sans-clean">
                  <span>Retorno em até 2 horas úteis</span>
                </div>
              </div>

              {/* Localização */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#25100B] border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#190B08] border border-[#E8C991]/25 flex items-center justify-center text-[#E8C991] mb-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-[13px] font-sans-clean uppercase tracking-wider text-white/50 block mb-1">
                    Sede Operacional
                  </span>
                  <p className="text-[15px] sm:text-base font-editorial font-bold text-white">
                    São Paulo — SP
                  </p>
                </div>
                <div className="pt-3 border-t border-white/10 mt-2 text-[13px] text-white/50 font-sans-clean">
                  <span>Atendimento e logística nacional</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-[13px] uppercase tracking-widest text-[#E8C991] font-sans-clean font-semibold block">
                  Atendimento Instantâneo
                </span>
                <p className="text-[15px] text-white/70 font-sans-clean">
                  Fale imediatamente com nosso assistente comercial via WhatsApp para cotações e dúvidas.
                </p>
              </div>

              <button
                onClick={handleWhatsApp}
                className="w-full sm:w-auto px-5 sm:px-8 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-[#0A2612] font-sans-clean font-bold text-[13px] uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-[0_4px_20px_rgba(37,211,102,0.3)] cursor-pointer whitespace-nowrap"
              >
                <MessageCircle className="w-4 h-4 fill-[#0A2612]" />
                <span className="whitespace-nowrap">INICIAR CONVERSA NO WHATSAPP</span>
              </button>
            </div>
          </div>

          {/* Form and FAQ Section Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-10 rounded-3xl bg-[#190B08] border border-[#E8C991]/25 shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
                <div className="mb-6">
                  <span className="text-[13px] uppercase tracking-widest text-[#E8C991] font-semibold font-sans-clean">
                    Mensagem Direta
                  </span>
                  <h3 className="text-[26px] md:text-[32px] font-editorial font-bold text-white uppercase mt-1">
                    Envie uma mensagem para nossa equipe
                  </h3>
                </div>

                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#25D366]/20 border border-[#25D366] text-[#25D366] flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-[24px] sm:text-2xl font-editorial font-bold text-white uppercase">
                      Mensagem Enviada!
                    </h4>
                    <p className="text-[15px] text-white/80 font-sans-clean max-w-md mx-auto">
                      Obrigado pelo contato. Nossa equipe retornará no e-mail informado o mais rápido possível.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-[13px] font-sans-clean text-white uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap"
                    >
                      <span className="whitespace-nowrap">Enviar outra mensagem</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[13px] uppercase font-sans-clean tracking-wider text-white/70 mb-1.5">
                          Nome *
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Seu nome"
                          className="w-full px-4 py-3 rounded-xl bg-[#25100B] border border-white/10 text-white placeholder-white/40 text-[14px] font-sans-clean focus:outline-none focus:border-[#E8C991] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[13px] uppercase font-sans-clean tracking-wider text-white/70 mb-1.5">
                          E-mail *
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="seu@email.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#25100B] border border-white/10 text-white placeholder-white/40 text-[14px] font-sans-clean focus:outline-none focus:border-[#E8C991] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[13px] uppercase font-sans-clean tracking-wider text-white/70 mb-1.5">
                          Telefone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="(11) 99999-9999"
                          className="w-full px-4 py-3 rounded-xl bg-[#25100B] border border-white/10 text-white placeholder-white/40 text-[14px] font-sans-clean focus:outline-none focus:border-[#E8C991] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-[13px] uppercase font-sans-clean tracking-wider text-white/70 mb-1.5">
                          Assunto *
                        </label>
                        <select
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#25100B] border border-white/10 text-white text-[14px] font-sans-clean focus:outline-none focus:border-[#E8C991] transition-colors"
                        >
                          <option value="Comercial / Vendas">Comercial / Vendas B2B</option>
                          <option value="Quero ser Distribuidor">Quero ser Distribuidor</option>
                          <option value="Dúvidas sobre Produtos">Dúvidas sobre Produtos</option>
                          <option value="Financeiro / Faturamento">Financeiro / Faturamento</option>
                          <option value="SAC / Consumidor">SAC / Consumidor Final</option>
                          <option value="Outros">Outros Assuntos</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[13px] uppercase font-sans-clean tracking-wider text-white/70 mb-1.5">
                        Mensagem *
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Como podemos te ajudar?"
                        className="w-full px-4 py-3 rounded-xl bg-[#25100B] border border-white/10 text-white placeholder-white/40 text-[14px] font-sans-clean focus:outline-none focus:border-[#E8C991] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 px-4 rounded-xl bg-[#E8C991] hover:bg-[#d8b77a] text-[#190B08] font-sans-clean font-bold text-[13px] uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md whitespace-nowrap"
                    >
                      <Send className="w-4 h-4 shrink-0" />
                      <span className="whitespace-nowrap">ENVIAR MENSAGEM</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* FAQs Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-2xl bg-[#190B08] border border-white/10">
                <h4 className="text-[18px] font-editorial font-bold text-white mb-4">
                  Dúvidas Frequentes (FAQ)
                </h4>
                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="pb-4 border-b border-white/5 last:border-none last:pb-0">
                      <h5 className="text-[14px] font-semibold text-[#E8C991] font-sans-clean mb-1">
                        {faq.q}
                      </h5>
                      <p className="text-[13px] text-white/70 font-sans-clean leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

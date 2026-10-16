import React, { useState } from 'react';
import { X, Send, CheckCircle2, MessageCircle, Phone, Mail, MapPin } from 'lucide-react';

interface CommercialContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledProduct?: string;
}

export const CommercialContactModal: React.FC<CommercialContactModalProps> = ({
  isOpen,
  onClose,
  prefilledProduct = '',
}) => {
  const [formData, setFormData] = useState({
    nome: '',
    empresa: '',
    cnpj: '',
    email: '',
    telefone: '',
    tipoNegocio: 'Supermercado',
    cidadeEstado: '',
    volumeMensal: '100kg a 500kg',
    mensagem: prefilledProduct ? `Olá, gostaria de receber tabela de preços e condições de fornecimento para ${prefilledProduct}.` : '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Olá Mister Britz! Tenho interesse em representação comercial / compras B2B para minha empresa (${formData.empresa || 'Empresa'}) no segmento de ${formData.tipoNegocio}.`
    );
    window.open(`https://wa.me/551110677878?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-3xl bg-[#120805] border border-[#E8C991]/30 rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.95)] flex flex-col max-h-[92vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="px-6 sm:px-8 py-5 border-b border-white/10 flex items-center justify-between bg-[#190B08]/80">
          <div>
            <div className="flex items-center gap-2 text-xs font-sans-clean font-semibold tracking-widest text-[#E8C991] uppercase">
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>ATENDIMENTO COMERCIAL B2B</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-[#F7F1E8] mt-0.5">
              Fale com a Equipe Comercial MR. BRITZ
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {submitted ? (
            <div className="py-12 flex flex-col items-center text-center">
              <CheckCircle2 className="w-16 h-16 text-[#25D366] mb-4 animate-bounce" />
              <h3 className="text-2xl font-editorial font-bold text-[#F7F1E8]">
                Mensagem Recebida com Sucesso!
              </h3>
              <p className="text-white/80 max-w-md mt-2 text-sm leading-relaxed font-sans-clean">
                Nosso consultor executivo responsável pela sua região entrará em contato em até 2 horas úteis com a tabela de preços e opções de frete FOB/CIF.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleWhatsAppDirect}
                  className="px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-black font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-black" />
                  <span>Falar Imediatamente no WhatsApp</span>
                </button>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs tracking-wider uppercase transition-colors"
                >
                  Fechar Janela
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Contact Details & WhatsApp Banner */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-[#E8C991] mb-2 font-sans-clean">
                    Distribuição &amp; Fornecimento
                  </h4>
                  <p className="text-xs text-white/75 leading-relaxed font-sans-clean">
                    Atendemos redes de supermercados, atacadistas, distribuidores regionais e food service com preços direto de fábrica e pontualidade logística.
                  </p>
                </div>

                <div className="bg-[#1C0D08] border border-[#E8C991]/20 rounded-2xl p-4 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-white/90">
                    <Phone className="w-4 h-4 text-[#E8C991] shrink-0" />
                    <span>(11) 1067-7878</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-white/90">
                    <Mail className="w-4 h-4 text-[#E8C991] shrink-0" />
                    <span>contato@mrbritz.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-white/90">
                    <MapPin className="w-4 h-4 text-[#E8C991] shrink-0" />
                    <span>São Paulo — SP · CNPJ 54.587.919/0001-52</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="w-full py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-[#0A2612] font-semibold text-[13px] md:text-[14px] tracking-wider uppercase flex items-center justify-center gap-2 transition-all shadow-[0_4px_16px_rgba(37,211,102,0.3)] cursor-pointer whitespace-nowrap"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span className="whitespace-nowrap">Conversar no WhatsApp</span>
                </button>
              </div>

              {/* Form Fields */}
              <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-medium text-[#E8C991] uppercase tracking-wider mb-1">
                      Seu Nome *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Carlos Silva"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="w-full bg-[#180A06] border border-white/15 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#E8C991]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-[#E8C991] uppercase tracking-wider mb-1">
                      Nome da Empresa / Razão Social *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Supermercados Estrela"
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      className="w-full bg-[#180A06] border border-white/15 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#E8C991]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-medium text-[#E8C991] uppercase tracking-wider mb-1">
                      CNPJ (Opcional)
                    </label>
                    <input
                      type="text"
                      placeholder="00.000.000/0001-00"
                      value={formData.cnpj}
                      onChange={(e) => setFormData({ ...formData, cnpj: e.target.value })}
                      className="w-full bg-[#180A06] border border-white/15 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#E8C991]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-[#E8C991] uppercase tracking-wider mb-1">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(11) 98765-4321"
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                      className="w-full bg-[#180A06] border border-white/15 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#E8C991]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-medium text-[#E8C991] uppercase tracking-wider mb-1">
                      E-mail Corporativo *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="compras@empresa.com.br"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#180A06] border border-white/15 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#E8C991]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-[#E8C991] uppercase tracking-wider mb-1">
                      Segmento da Empresa
                    </label>
                    <select
                      value={formData.tipoNegocio}
                      onChange={(e) => setFormData({ ...formData, tipoNegocio: e.target.value })}
                      className="w-full bg-[#180A06] border border-white/15 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-[#E8C991]"
                    >
                      <option value="Supermercado">Supermercado / Hipermercado</option>
                      <option value="Distribuidora">Distribuidor / Atacadista</option>
                      <option value="Mercado Local">Mercado de Bairro / Mercearia</option>
                      <option value="Padaria">Padaria &amp; Confeitaria</option>
                      <option value="Conveniência">Conveniência / Posto</option>
                      <option value="Honest Market">Honest Market / Condomínio</option>
                      <option value="Food Service">Food Service / Restaurante / Pizzaria</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-[#E8C991] uppercase tracking-wider mb-1">
                    Como podemos ajudar?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Descreva quais produtos tem interesse (ex: Colorau, Alho, Orégano) ou sua demanda mensal..."
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    className="w-full bg-[#180A06] border border-white/15 rounded-lg p-3 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#E8C991]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#8D1422] to-[#B81D2E] hover:from-[#A51928] hover:to-[#C82136] text-white font-semibold text-[13px] md:text-[14px] uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_4px_20px_rgba(184,29,46,0.35)] cursor-pointer whitespace-nowrap"
                >
                  <Send className="w-3.5 h-3.5 shrink-0" />
                  <span className="whitespace-nowrap">{isSubmitting ? 'Enviando...' : 'Enviar Solicitação Comercial'}</span>
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

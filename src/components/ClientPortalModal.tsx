import React, { useState } from 'react';
import { X, Lock, FileText, Truck, ShieldCheck, LogIn, AlertCircle } from 'lucide-react';

interface ClientPortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClientPortalModal: React.FC<ClientPortalModalProps> = ({ isOpen, onClose }) => {
  const [cnpj, setCnpj] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!cnpj) {
      setError('Por favor informe o CNPJ cadastrado.');
      return;
    }
    setError('');
    setIsLoggedIn(true);
  };

  const handleDemoFill = () => {
    setCnpj('12.345.678/0001-90');
    setPassword('••••••••');
    setError('');
    setIsLoggedIn(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-xl bg-[#120805] border border-[#E8C991]/30 rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.95)] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between bg-[#190B08]/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-[#E8C991]/15 border border-[#E8C991]/40 flex items-center justify-center text-[#E8C991]">
              <Lock className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] font-sans-clean font-semibold tracking-widest text-[#E8C991] uppercase">
                PORTAL EXCLUSIVO B2B
              </div>
              <h2 className="text-xl font-editorial font-bold text-[#F7F1E8]">
                Área do Cliente MR. BRITZ
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {isLoggedIn ? (
            <div className="space-y-6">
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-emerald-400 shrink-0" />
                <div>
                  <div className="text-xs font-semibold text-emerald-300">
                    Conectado com sucesso!
                  </div>
                  <div className="text-[11px] text-white/70">
                    CNPJ: 12.345.678/0001-90 · Supermercados Modelo Ltda.
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-4 rounded-xl bg-[#180A06] border border-white/10 hover:border-[#E8C991]/40 transition-colors cursor-pointer group">
                  <Truck className="w-5 h-5 text-[#E8C991] mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-xs font-semibold text-[#F7F1E8]">Rastreio de Pedidos</div>
                  <div className="text-[10px] text-white/60 mt-0.5">1 pedido em rota (Previsão: Amanhã)</div>
                </div>

                <div className="p-4 rounded-xl bg-[#180A06] border border-white/10 hover:border-[#E8C991]/40 transition-colors cursor-pointer group">
                  <FileText className="w-5 h-5 text-[#E8C991] mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-xs font-semibold text-[#F7F1E8]">2ª Via de Boletos &amp; NF-e</div>
                  <div className="text-[10px] text-white/60 mt-0.5">Boletos atualizados com código PIX</div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-white/10 text-xs">
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="text-white/60 hover:text-white"
                >
                  Trocar de Conta
                </button>
                <button
                  onClick={onClose}
                  className="px-5 py-2 rounded-full bg-[#B81D2E] text-white font-semibold uppercase text-xs"
                >
                  Acessar Painel Completo
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleLogin} className="space-y-4">
              <p className="text-xs text-white/75 font-sans-clean leading-relaxed">
                Acesse com seu CNPJ cadastrado para emitir segundas vias, acompanhar entregas rodoviárias e solicitar reposição rápida de estoque.
              </p>

              {error && (
                <div className="p-3 rounded-lg bg-red-950/60 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div>
                <label className="block text-[11px] font-medium text-[#E8C991] uppercase tracking-wider mb-1">
                  CNPJ Cadastrado
                </label>
                <input
                  type="text"
                  placeholder="00.000.000/0001-00"
                  value={cnpj}
                  onChange={(e) => setCnpj(e.target.value)}
                  className="w-full bg-[#180A06] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#E8C991]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-[#E8C991] uppercase tracking-wider mb-1">
                  Senha de Acesso
                </label>
                <input
                  type="password"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#180A06] border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-white/40 focus:outline-none focus:border-[#E8C991]"
                />
              </div>

              <div className="flex items-center justify-between text-[11px]">
                <button
                  type="button"
                  onClick={handleDemoFill}
                  className="text-[#E8C991] hover:underline"
                >
                  Preencher com CNPJ Teste (Demo)
                </button>
                <a href="#recuperar" className="text-white/60 hover:text-white">
                  Esqueci minha senha
                </a>
              </div>

              <button
                type="submit"
                className="w-full mt-2 py-3.5 px-6 rounded-full bg-gradient-to-r from-[#8D1422] to-[#B81D2E] hover:from-[#A51928] hover:to-[#C82136] text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_4px_20px_rgba(184,29,46,0.35)] cursor-pointer"
              >
                <LogIn className="w-4 h-4" />
                <span>Entrar no Portal B2B</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

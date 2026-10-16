import React, { useState } from 'react';
import { X, Search, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (name: string) => void;
}

const SEARCHABLE_ITEMS = [
  { title: 'Colorau Especial Extra Vermelho', category: 'Condimentos', desc: 'Alta pigmentação em sementes de urucum puro' },
  { title: 'Alho Triturado Puro Sem Sal', category: 'Alho & Pastas', desc: 'Moído a frio, textura e aroma marcante' },
  { title: 'Alho Triturado Com Sal', category: 'Alho & Pastas', desc: 'Pronto para uso culinário em alta escala' },
  { title: 'Orégano Selecionado Folhas', category: 'Ervas & Desidratados', desc: 'Aroma fresco com tripla limpeza' },
  { title: 'Mix Chimichurri Especial', category: 'Blends Gourmet', desc: 'Perfeito para cortes bovinos e marinadas' },
  { title: 'Lemon Pepper Cítrico', category: 'Blends Gourmet', desc: 'Toque de limão com pimenta preta nobre' },
  { title: 'Atendimento B2B & Distribuição', category: 'Comercial', desc: 'Fornecimento para supermercados e food service' },
  { title: 'Embalagens Food Service (1kg a 25kg)', category: 'Soluções Industriais', desc: 'Grandes formatos para cozinhas industriais' },
];

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectProduct }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = query.trim()
    ? SEARCHABLE_ITEMS.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase()) ||
        item.desc.toLowerCase().includes(query.toLowerCase())
      )
    : SEARCHABLE_ITEMS.slice(0, 5);

  return (
    <div className="fixed inset-0 z-[120] flex items-start justify-center p-4 sm:p-6 pt-20 sm:pt-24 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-[#120805] border border-[#E8C991]/30 rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.95)] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        <div className="p-4 sm:p-6 border-b border-white/10 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#E8C991]" />
          <input
            type="text"
            autoFocus
            placeholder="Buscar condimentos, alho, orégano, colorau ou atacado..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent border-none text-sm sm:text-base text-white placeholder-white/40 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-white/60 hover:text-white hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto space-y-2">
          <div className="text-[11px] font-sans-clean font-semibold uppercase tracking-wider text-[#E8C991] mb-2">
            {query ? `Resultados (${results.length})` : 'Sugestões Populares'}
          </div>

          {results.length === 0 ? (
            <div className="py-8 text-center text-white/50 text-xs">
              Nenhum produto ou termo encontrado para "{query}".
            </div>
          ) : (
            results.map((item, idx) => (
              <div
                key={idx}
                onClick={() => {
                  onSelectProduct(item.title);
                  onClose();
                }}
                className="p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#E8C991]/40 hover:bg-white/[0.06] transition-all cursor-pointer flex items-center justify-between group"
              >
                <div>
                  <div className="text-[10px] uppercase tracking-wider font-semibold text-[#E8C991]">
                    {item.category}
                  </div>
                  <div className="text-sm font-editorial font-bold text-[#F7F1E8] group-hover:text-white">
                    {item.title}
                  </div>
                  <div className="text-xs text-white/60">{item.desc}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-[#E8C991] group-hover:translate-x-1 transition-all" />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { X, Search, ArrowRight, Scale } from 'lucide-react';
import { PRODUCTS_CATALOG } from '../data/productsData';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (name: string) => void;
}

const SEARCHABLE_ITEMS = [
  ...PRODUCTS_CATALOG.map((p) => ({
    title: p.name,
    category: p.category,
    desc: `${p.weight} · ${p.description.slice(0, 90)}...`,
    weight: p.weight,
  })),
  { title: 'Atendimento B2B & Distribuição', category: 'Comercial', desc: 'Fornecimento para supermercados, atacados e food service', weight: '' },
  { title: 'Rotulagem & Laudos ANVISA', category: 'Qualidade', desc: 'Tabelas nutricionais oficiais e laudos bromatológicos', weight: '' },
  { title: 'Private Label & Marcas Próprias', category: 'Soluções Industriais', desc: 'Produção sob medida com padrões de excelência', weight: '' },
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
    : SEARCHABLE_ITEMS.slice(0, 6);

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
            placeholder="Buscar Chimichurry, Ana Maria, Edu Guedes, Orégano, Colorau..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent border-none text-[15px] sm:text-base text-white placeholder-white/40 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-white/60 hover:text-white hover:bg-white/10 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto space-y-2">
          <div className="text-[11px] font-sans-clean font-semibold uppercase tracking-wider text-[#E8C991] mb-2">
            {query ? `Resultados (${results.length})` : 'Sugestões Oficiais'}
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
                className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-[#E8C991]/40 hover:bg-white/[0.06] transition-all cursor-pointer flex items-center justify-between group"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[#E8C991]">
                      {item.category}
                    </span>
                    {item.weight && (
                      <span className="text-[10px] text-white/60 font-mono">
                        · {item.weight}
                      </span>
                    )}
                  </div>
                  <div className="text-[15px] font-editorial font-bold text-[#F7F1E8] group-hover:text-white">
                    {item.title}
                  </div>
                  <div className="text-[13px] text-white/60 line-clamp-1">{item.desc}</div>
                </div>
                <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-[#E8C991] group-hover:translate-x-1 transition-all shrink-0" />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

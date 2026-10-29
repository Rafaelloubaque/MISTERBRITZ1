import React, { useState } from 'react';
import { X, Package, Sparkles, Scale, ShieldCheck } from 'lucide-react';
import { ProductItem } from '../types';
import { PRODUCTS_CATALOG, COMPANY_INFO } from '../data/productsData';
import { NutritionalTable } from './NutritionalTable';

interface ProductsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContactProduct?: (productName: string) => void;
}

export const ProductsModal: React.FC<ProductsModalProps> = ({
  isOpen,
  onClose,
  onContactProduct: _onContactProduct,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [activeNutritionalProduct, setActiveNutritionalProduct] = useState<ProductItem | null>(null);

  if (!isOpen) return null;

  const categories = [
    'Todos',
    'Blends & Especiarias Finas',
    'Condimentos & Blends Populares',
    'Ervas & Aromáticas Desidratadas',
    'Condimentos & Corantes Naturais',
  ];

  const filtered = selectedCategory === 'Todos'
    ? PRODUCTS_CATALOG
    : PRODUCTS_CATALOG.filter((p) => p.category.includes(selectedCategory));

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-5xl max-h-[90vh] bg-[#120805] border border-[#E8C991]/30 rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.95)] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="px-6 sm:px-8 py-5 border-b border-white/10 flex items-center justify-between bg-[#190B08]/80">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-sans-clean font-semibold tracking-widest text-[#E8C991] uppercase">
              <Package className="w-3.5 h-3.5 text-[#C11D31]" />
              <span>CATÁLOGO DIGITAL OFICIAL · {COMPANY_INFO.brand}</span>
            </div>
            <h2 className="text-[22px] sm:text-[28px] font-editorial font-bold text-[#F7F1E8] mt-0.5">
              Portfólio Industrial &amp; Fichas Técnicas
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Categories Bar */}
        <div className="px-6 sm:px-8 py-3 bg-[#160A06] border-b border-white/10 flex items-center justify-between gap-4 overflow-x-auto">
          <div className="flex items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-[12px] font-sans-clean font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#C11D31] text-white font-semibold'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-[#190B08] border border-white/10 hover:border-[#E8C991]/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  {item.image && (
                    <div className="w-full aspect-[1122/1402] max-h-56 bg-[#0A0403] rounded-xl overflow-hidden mb-3 border border-white/5">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}

                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="text-[11px] font-sans-clean uppercase tracking-wider text-[#E8C991] font-semibold">
                      {item.category}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-black/60 border border-[#E8C991]/30 text-[#E8C991] text-[11px] font-bold font-sans-clean flex items-center gap-1">
                      <Scale className="w-3 h-3 text-[#E8C991]" />
                      {item.weight}
                    </span>
                  </div>

                  <h3 className="text-[18px] sm:text-[20px] font-editorial font-bold text-white group-hover:text-[#E8C991] transition-colors leading-snug mb-1.5">
                    {item.name}
                  </h3>

                  <p className="text-[13px] text-white/75 font-sans-clean leading-relaxed mb-3 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Ingredientes resumidos */}
                  <div className="p-2.5 rounded-xl bg-[#230C08] border border-white/5 mb-3 text-[12px] text-white/70 font-sans-clean">
                    <strong className="text-[#E8C991] block mb-0.5 text-[11px] uppercase tracking-wider">
                      Ingredientes:
                    </strong>
                    <span className="line-clamp-2">{item.ingredients}</span>
                  </div>

                  <div className="flex items-center gap-2 text-[11px] text-white/60 font-sans-clean mb-4">
                    <span className="px-2 py-0.5 rounded bg-[#C11D31]/30 text-[#E8C991] font-semibold">
                      {COMPANY_INFO.glutenStatement}
                    </span>
                    <span>· Porção: {item.portion}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <button
                    onClick={() => setActiveNutritionalProduct(item)}
                    className="w-full py-2.5 px-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-[#E8C991] text-[13px] font-bold font-sans-clean uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Ver Tabela Nutricional</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 sm:px-8 py-4 bg-[#160A06] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-white/60 font-sans-clean">
          <div>
            <span>{COMPANY_INFO.corporateName}</span>
            <span className="hidden sm:inline"> · {COMPANY_INFO.fullAddress}</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#E8C991] font-medium">{COMPANY_INFO.origin}</span>
            <button
              onClick={onClose}
              className="text-white hover:text-[#E8C991] uppercase tracking-wider font-semibold cursor-pointer"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>

      {/* Sub-modal: Quick Nutritional Table popup inside Catalog */}
      {activeNutritionalProduct && (
        <div className="fixed inset-0 z-[130] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-2xl max-h-[88vh] bg-[#140705] border border-[#E8C991]/50 rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.95)] flex flex-col">
            <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#1B0C08]">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#E8C991] font-bold">
                  {activeNutritionalProduct.category} · Peso: {activeNutritionalProduct.weight}
                </span>
                <h3 className="text-[18px] sm:text-[20px] font-editorial font-bold text-white">
                  {activeNutritionalProduct.name}
                </h3>
              </div>
              <button
                onClick={() => setActiveNutritionalProduct(null)}
                className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto flex-1">
              <NutritionalTable product={activeNutritionalProduct} />
            </div>

            <div className="px-6 py-3 bg-[#160906] border-t border-white/10 flex items-center justify-between">
              <span className="text-[11px] text-white/50 font-sans-clean">
                {COMPANY_INFO.conservation}
              </span>
              <button
                onClick={() => setActiveNutritionalProduct(null)}
                className="px-4 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-[12px] font-bold uppercase transition-colors cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

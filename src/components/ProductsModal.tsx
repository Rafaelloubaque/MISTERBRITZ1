import React, { useState } from 'react';
import { X, Check, ArrowRight, Download, Package } from 'lucide-react';
import { ProductItem } from '../types';

interface ProductsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContactProduct?: (productName: string) => void;
}

const PRODUCTS_DATA: ProductItem[] = [
  {
    id: 'colorau',
    name: 'Colorau Especial Extra Vermelho',
    category: 'Condimentos & Corantes',
    weight: '500g · 1kg · 5kg · 25kg (Sacas)',
    packaging: 'Potes PET alimentício com lacre de indução & sacarias para indústria',
    description: 'Colorau puro de alta pigmentação e rendimento superior. Grãos de urucum nobres micronizados em óleo vegetal selecionado, garantindo coloração viva e homogênea.',
    badge: 'Mais Vendido',
    image: '/src/assets/images/mrbritz_colorau_jar_1790172083265.jpg',
  },
  {
    id: 'alho',
    name: 'Alho Triturado Puro Sem Sal & Com Sal',
    category: 'Linha Alho & Pastas',
    weight: '200g · 500g · 1kg · 3kg · Baldes 10kg',
    packaging: 'Baldes e potes com tampa hermética e selo de frescor',
    description: 'Dentes de alho frescos rigorosamente selecionados e moídos a frio. Mantém o aroma característico intenso e picante sem amargor, ideal para cozinhas profissionais e varejo.',
    badge: 'Alta Margem',
    image: '/src/assets/images/mrbritz_garlic_jar_1790172023185.jpg',
  },
  {
    id: 'oregano',
    name: 'Orégano Chileno & Nacional Selecionado',
    category: 'Ervas & Desidratados',
    weight: '150g · 500g · 1kg · Fardos 10kg',
    packaging: 'Potes dosadores e embalagens pouch trilaminadas',
    description: 'Folhas de orégano calibradas com alto teor de óleos essenciais e aroma pronunciado. Tripla limpeza contra impurezas e preservação da coloração verde natural.',
    badge: 'Essencial Pizzaria & Varejo',
    image: '/src/assets/images/mrbritz_oregano_jar_1790172051486.jpg',
  },
  {
    id: 'chimichurri',
    name: 'Mix Chimichurri Especial com Ervas Finas',
    category: 'Blends & Molhos Secos',
    weight: '250g · 1kg · 5kg',
    packaging: 'Potes transparentes de alta visibilidade no PDV',
    description: 'Combinação equilibrada de orégano, alho, cebola, páprica, salsa e pimenta calabresa. Textura granulada perfeita para carnes, grelhados e marinadas gourmet.',
    badge: 'Gourmet',
  },
  {
    id: 'lemon-pepper',
    name: 'Lemon Pepper Citrus Intenso',
    category: 'Blends Especiais',
    weight: '300g · 1kg · 5kg',
    packaging: 'Potes com dosador duplo',
    description: 'Raspas de limão desidratadas harmonizadas com pimenta preta moída e sal marinho. O tempero preferido do público jovem e do food service.',
    badge: 'Tendência',
  },
  {
    id: 'cebola-alho-salsa',
    name: 'Blend Completo Cebola, Alho & Salsa',
    category: 'Condimentos Universais',
    weight: '200g · 1kg · Baldes 5kg',
    packaging: 'Potes com vedação reforçada',
    description: 'Praticidade máxima para rotinas domésticas e cozinhas industriais. Alto giro nas gôndolas de supermercados e padarias.',
    badge: 'Giro Rápido',
  },
];

export const ProductsModal: React.FC<ProductsModalProps> = ({
  isOpen,
  onClose,
  onContactProduct,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [downloadingCatalog, setDownloadingCatalog] = useState(false);
  const [catalogDownloaded, setCatalogDownloaded] = useState(false);

  if (!isOpen) return null;

  const categories = ['Todos', 'Condimentos & Corantes', 'Linha Alho & Pastas', 'Ervas & Desidratados', 'Blends Especiais'];

  const filtered = selectedCategory === 'Todos'
    ? PRODUCTS_DATA
    : PRODUCTS_DATA.filter((p) => p.category.includes(selectedCategory) || selectedCategory.includes(p.category));

  const handleDownloadCatalog = () => {
    setDownloadingCatalog(true);
    setTimeout(() => {
      setDownloadingCatalog(false);
      setCatalogDownloaded(true);
      setTimeout(() => setCatalogDownloaded(false), 4000);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div
        className="relative w-full max-w-5xl max-h-[90vh] bg-[#120805] border border-[#E8C991]/30 rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.95)] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="px-6 sm:px-8 py-5 border-b border-white/10 flex items-center justify-between bg-[#190B08]/70">
          <div>
            <div className="flex items-center gap-2 text-xs font-sans-clean font-semibold tracking-widest text-[#E8C991] uppercase">
              <Package className="w-3.5 h-3.5" />
              <span>MR. BRITZ FOODS · CATÁLOGO B2B 2026</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-editorial font-bold text-[#F7F1E8] mt-0.5">
              Linha Completa de Alimentos &amp; Condimentos
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Fechar catálogo"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Filter Bar & Quick Catalog Download */}
        <div className="px-6 sm:px-8 py-3.5 bg-black/30 border-b border-white/5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-sans-clean font-medium tracking-wide transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#B81D2E] text-white shadow-md'
                    : 'bg-white/5 text-white/80 hover:bg-white/10 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <button
            onClick={handleDownloadCatalog}
            disabled={downloadingCatalog}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E8C991]/10 border border-[#E8C991]/40 text-[#E8C991] hover:bg-[#E8C991] hover:text-[#120805] text-xs font-semibold uppercase tracking-wider transition-all duration-200"
          >
            {catalogDownloaded ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span>Catálogo PDF Baixado</span>
              </>
            ) : downloadingCatalog ? (
              <span>Gerando Catálogo...</span>
            ) : (
              <>
                <Download className="w-3.5 h-3.5" />
                <span>Baixar Catálogo Técnico PDF</span>
              </>
            )}
          </button>
        </div>

        {/* Products Grid */}
        <div className="p-6 sm:p-8 overflow-y-auto max-h-[calc(90vh-170px)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="bg-[#170A06] border border-white/10 rounded-2xl p-5 flex flex-col justify-between hover:border-[#E8C991]/40 transition-all duration-300 group hover:-translate-y-1 shadow-lg"
            >
              <div>
                {product.image ? (
                  <div className="aspect-square w-full rounded-xl overflow-hidden mb-4 bg-black/40 border border-white/10 relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                    {product.badge && (
                      <span className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-[#B81D2E] text-white text-[10px] font-semibold tracking-wider uppercase shadow-md">
                        {product.badge}
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="h-44 w-full rounded-xl mb-4 bg-[#1C0C08] border border-white/5 flex items-center justify-center relative">
                    <Package className="w-10 h-10 text-[#E8C991]/40" />
                    {product.badge && (
                      <span className="absolute top-2 right-2 px-2.5 py-0.5 rounded-full bg-[#B81D2E] text-white text-[10px] font-semibold tracking-wider uppercase">
                        {product.badge}
                      </span>
                    )}
                  </div>
                )}

                <div className="text-[11px] font-sans-clean font-semibold uppercase tracking-wider text-[#E8C991]">
                  {product.category}
                </div>
                <h3 className="text-lg font-editorial font-bold text-[#F7F1E8] mt-1 leading-snug">
                  {product.name}
                </h3>
                <p className="text-xs text-white/75 font-sans-clean mt-2 line-clamp-3 leading-relaxed">
                  {product.description}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-white/5">
                <div className="text-[11px] text-white/60 mb-1">
                  <span className="text-[#E8C991] font-medium">Gramaturas:</span> {product.weight}
                </div>
                <div className="text-[10px] text-white/50 mb-3 truncate">
                  <span className="text-white/70">Embalagem:</span> {product.packaging}
                </div>

                <button
                  onClick={() => {
                    onClose();
                    if (onContactProduct) onContactProduct(product.name);
                  }}
                  className="w-full py-2.5 px-3 rounded-xl bg-[#B81D2E] hover:bg-[#8D1422] text-white text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Solicitar Cotação B2B</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

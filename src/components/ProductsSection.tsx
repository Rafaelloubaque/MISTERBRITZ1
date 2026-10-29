import React, { useEffect, useRef, useState } from 'react';
import { 
  Package, 
  ArrowRight, 
  CheckCircle2, 
  Repeat, 
  UtensilsCrossed, 
  Eye, 
  Layers, 
  X,
  ShoppingBag,
  Sparkles,
  ShieldCheck,
  Scale
} from 'lucide-react';
import logoSmall from '../assets/logo3.png';
import { ActiveModal, ProductItem } from '../types';
import { produtosHeroBg } from '../assets/heroBackgrounds';
import { PRODUCTS_CATALOG, COMPANY_INFO } from '../data/productsData';
import { NutritionalTable } from './NutritionalTable';

interface ProductsSectionProps {
  onOpenModal: (modal: ActiveModal) => void;
  onSelectProduct?: (productName: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ 
  onOpenModal, 
  onSelectProduct: _onSelectProduct 
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [modalTab, setModalTab] = useState<'details' | 'nutrition'>('details');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getStaggerStyle = (delayMs: number) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(24px)',
    transition: `opacity 750ms cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms, transform 750ms cubic-bezier(0.16, 1, 0.3, 1) ${delayMs}ms`,
    willChange: 'opacity, transform',
  });

  const portfolioPillars = [
    { name: 'Sabor', desc: 'Perfis equilibrados e ingredientes nobres', icon: UtensilsCrossed },
    { name: 'Praticidade', desc: 'Facilidade de manuseio no dia a dia', icon: Package },
    { name: 'Boa apresentação', desc: 'Embalagens que valorizam o ponto de venda', icon: Eye },
    { name: 'Competitividade', desc: 'Excelente relação custo-benefício para a cadeia', icon: Layers },
    { name: 'Potencial de giro', desc: 'Alta aceitação e demanda constante no varejo', icon: Repeat },
  ];

  const handleOpenProduct = (product: ProductItem) => {
    setSelectedProduct(product);
    setModalTab('details');
  };

  return (
    <section
      id="produtos"
      ref={sectionRef}
      className="relative w-full text-[#F4EEE7] overflow-hidden bg-[#0A0403] border-t border-white/10 py-16 sm:py-20 lg:py-24"
    >
      {/* Elementos de fundo com a imagem hero de produtos */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.12] bg-cover bg-center select-none"
        style={{ backgroundImage: `url("${produtosHeroBg}")` }}
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#0A0403] via-transparent to-[#0A0403] opacity-90" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] select-none bg-[radial-gradient(#E8C991_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="relative w-full max-w-[1920px] mx-auto px-[25px] md:px-8 lg:px-[240px]">
        {/* ==================================================
            1. SOBRETÍTULO / EYEBROW
            ================================================== */}
        <div style={getStaggerStyle(100)} className="mb-4 sm:mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#E8C991] font-sans-clean text-[11px] sm:text-[12px] font-bold tracking-[2.5px] uppercase">
            <ShoppingBag className="w-3.5 h-3.5 text-[#C11D31]" />
            Catálogo Oficial &amp; Rótulos Mister Britz Foods
          </span>
        </div>

        {/* ==================================================
            2. TÍTULO E SUBTÍTULO PRINCIPAL
            ================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-12 sm:mb-16">
          <div style={getStaggerStyle(200)} className="lg:col-span-7">
            <h2 className="font-editorial text-[28px] md:text-[36px] lg:text-[44px] font-bold leading-[1.05] tracking-[2px] text-white uppercase mb-4 sm:mb-6">
              NOSSOS PRODUTOS
            </h2>
            <p className="font-editorial text-[20px] md:text-[24px] lg:text-[28px] leading-[1.2] text-[#E8C991] italic font-normal tracking-[-0.5px]">
              Produtos desenvolvidos para diferentes momentos de consumo.
            </p>
          </div>

          <div style={getStaggerStyle(300)} className="lg:col-span-5 flex flex-col justify-between h-full">
            <div className="relative overflow-hidden p-6 sm:p-7 rounded-2xl bg-[#110705] border border-white/10 group">
              <div className="absolute -right-3 -bottom-3 w-28 h-28 opacity-[0.05] pointer-events-none select-none transition-opacity duration-300 group-hover:opacity-[0.10]">
                <img src={logoSmall} alt="" className="w-full h-full object-contain" />
              </div>

              <div className="relative z-10 space-y-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C11D31]" />
                  <span className="text-[11px] font-sans-clean font-bold tracking-[2px] uppercase text-[#E8C991]">
                    Padrão de Qualidade Fabril
                  </span>
                </div>
                <p className="font-sans-clean text-[14px] sm:text-[15px] leading-relaxed text-white/90">
                  Fórmulas equilibradas com ingredientes selecionados, laudos bromatológicos regulares e rotulagem 100% conforme os padrões da ANVISA.
                </p>
                <div className="pt-2 flex items-center gap-3 text-[12px] sm:text-[13px] text-[#E8C991] font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#C11D31]" />
                  <span>Todos os produtos com selo NÃO CONTÉM GLÚTEN</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================
            3. PILARES DO PORTFÓLIO
            ================================================== */}
        <div style={getStaggerStyle(350)} className="mb-14 sm:mb-18">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {portfolioPillars.map((p, idx) => {
              const IconComp = p.icon;
              return (
                <div
                  key={idx}
                  className="p-4 sm:p-5 rounded-xl bg-[#120705] border border-white/10 hover:border-[#E8C991]/40 transition-all flex flex-col justify-between group"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#E8C991] group-hover:text-white group-hover:bg-[#C11D31] transition-colors mb-3">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-editorial text-[16px] sm:text-[18px] text-white font-bold leading-tight mb-1">
                      {p.name}
                    </h4>
                    <p className="font-sans-clean text-[13px] text-white/60 leading-snug">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ==================================================
            4. GRID OFICIAL DOS 6 PRODUTOS
            ================================================== */}
        <div style={getStaggerStyle(400)} className="mb-16 sm:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {PRODUCTS_CATALOG.map((product, idx) => (
              <div
                key={product.id}
                className="group relative rounded-2xl bg-[#120705] border border-white/10 hover:border-[#E8C991]/50 transition-all duration-300 flex flex-col overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_40px_rgba(193,29,49,0.15)]"
              >
                {/* Imagem do Produto com Tag de Peso Líquido */}
                <div className="relative w-full aspect-[1122/1402] bg-[#0A0403] overflow-hidden border-b border-white/10">
                  {product.image && (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  )}

                  {/* Badges no Topo da Imagem */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                    <span className="px-2.5 py-1 rounded bg-[#C11D31] text-white text-[11px] font-bold tracking-wider font-sans-clean uppercase shadow-md">
                      {product.badge || `PRODUTO 0${idx + 1}`}
                    </span>
                    <span className="px-2.5 py-1 rounded bg-black/80 backdrop-blur-sm border border-[#E8C991]/40 text-[#E8C991] text-[12px] font-bold font-sans-clean flex items-center gap-1">
                      <Scale className="w-3 h-3 text-[#E8C991]" />
                      {product.weight}
                    </span>
                  </div>

                  {/* Porção e Não Contém Glúten no Rodapé da Imagem */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                    <span className="text-[11px] font-sans-clean px-2 py-0.5 rounded bg-black/70 text-white/90 border border-white/10">
                      Porção: {product.portion}
                    </span>
                    <span className="text-[11px] font-sans-clean px-2 py-0.5 rounded bg-[#C11D31]/90 text-white font-semibold">
                      SEM GLÚTEN
                    </span>
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-sans-clean font-semibold tracking-wider uppercase text-[#E8C991] mb-1">
                      {product.category}
                    </div>

                    <h3 className="font-editorial text-[20px] sm:text-[22px] text-white font-bold leading-snug mb-2 group-hover:text-[#E8C991] transition-colors">
                      {product.name}
                    </h3>

                    <p className="font-sans-clean text-[13px] sm:text-[14px] leading-relaxed text-white/75 mb-3 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Ingredientes prévia */}
                    <div className="p-2.5 rounded-xl bg-[#180C08] border border-white/5 mb-4 text-[12px] text-white/70 font-sans-clean leading-snug">
                      <strong className="text-[#E8C991] block mb-0.5 text-[11px] uppercase tracking-wider">
                        Ingredientes:
                      </strong>
                      <span className="line-clamp-2">{product.ingredients}</span>
                    </div>
                  </div>

                  {/* Botões do Card */}
                  <div className="pt-3 border-t border-white/10 space-y-2">
                    <button
                      onClick={() => handleOpenProduct(product)}
                      className="w-full py-3 px-4 rounded-xl bg-[#C11D31] hover:bg-[#a51829] text-white font-sans-clean text-[13px] md:text-[14px] font-bold tracking-[1.5px] uppercase transition-all duration-200 flex items-center justify-center gap-2 group/btn cursor-pointer shadow-md whitespace-nowrap"
                    >
                      <span className="whitespace-nowrap">Ver Produto &amp; Tabela</span>
                      <ArrowRight className="w-4 h-4 text-white group-hover/btn:translate-x-0.5 transition-transform shrink-0" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================================================
            5. FAIXA DE FECHAMENTO COMERCIAL (B2B, ATACADO & DISTRIBUIÇÃO)
            ================================================== */}
        <div style={getStaggerStyle(450)}>
          <div className="relative overflow-hidden rounded-2xl bg-[#110705] border border-[#E8C991]/25 p-7 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 opacity-[0.04] pointer-events-none select-none">
              <img src={logoSmall} alt="" className="w-full h-full object-contain" />
            </div>

            <div className="relative z-10 max-w-2xl text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-sans-clean font-bold tracking-[2px] uppercase text-[#E8C991] mb-2">
                <CheckCircle2 className="w-4 h-4 text-[#C11D31]" />
                <span>Atendimento Direto a Redes e Distribuidores</span>
              </div>
              <h3 className="font-editorial text-[26px] md:text-[32px] tracking-wide text-white leading-tight mb-2">
                DESENVOLVIMENTO DE NOVOS ITENS &amp; LINHA PERSONALIZADA
              </h3>
              <p className="font-sans-clean text-[14px] sm:text-[15px] text-white/80 leading-relaxed">
                Nossa estrutura fabril permite desenvolver gramaturas específicas, marcas próprias (Private Label) e soluções personalizadas para o seu canal de vendas.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
              <button
                onClick={() => onOpenModal('contact')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-[#E8C991] hover:bg-[#d8b87d] text-[#140806] font-sans-clean text-[13px] md:text-[14px] font-bold tracking-wider sm:tracking-[1.5px] uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md whitespace-nowrap"
              >
                <span className="whitespace-nowrap">Falar com Comercial</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ==================================================
          MODAL DETALHADO DO PRODUTO (COM TABELA NUTRICIONAL OFICIAL)
          ================================================== */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div
            className="relative w-full max-w-4xl max-h-[92vh] bg-[#120805] border border-[#E8C991]/40 rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.95)] flex flex-col"
            role="dialog"
            aria-modal="true"
          >
            {/* Header do Modal */}
            <div className="px-6 sm:px-8 py-4 border-b border-white/10 flex items-center justify-between bg-[#190B08]">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded bg-[#C11D31] text-white text-[11px] font-bold tracking-wider font-sans-clean uppercase">
                  {selectedProduct.badge || 'PRODUTO MR. BRITZ'}
                </span>
                <span className="text-[12px] sm:text-[13px] font-sans-clean font-semibold tracking-wider text-[#E8C991] uppercase">
                  {selectedProduct.category}
                </span>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Abas do Modal: Ficha Geral vs Tabela Nutricional */}
            <div className="px-6 sm:px-8 pt-3 pb-2 bg-[#140704] border-b border-white/10 flex items-center gap-3">
              <button
                onClick={() => setModalTab('details')}
                className={`px-4 py-2 rounded-xl text-[13px] font-sans-clean font-bold uppercase tracking-wider transition-colors cursor-pointer ${
                  modalTab === 'details'
                    ? 'bg-[#C11D31] text-white'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                Detalhes &amp; Ingredientes
              </button>
              <button
                onClick={() => setModalTab('nutrition')}
                className={`px-4 py-2 rounded-xl text-[13px] font-sans-clean font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2 ${
                  modalTab === 'nutrition'
                    ? 'bg-[#C11D31] text-white'
                    : 'text-[#E8C991] hover:text-white hover:bg-white/5'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Tabela Nutricional Oficial</span>
              </button>
            </div>

            {/* Conteúdo com scroll */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
              {modalTab === 'details' ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                    <div className="sm:col-span-5 relative bg-[#0A0403] rounded-2xl overflow-hidden border border-[#E8C991]/30 aspect-[1122/1402] w-full max-h-[380px] shadow-inner flex items-center justify-center">
                      {selectedProduct.image && (
                        <img
                          src={selectedProduct.image}
                          alt={selectedProduct.name}
                          className="w-full h-full object-cover object-center filter contrast-105 brightness-100"
                        />
                      )}
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/80 text-[#E8C991] text-[12px] font-bold border border-[#E8C991]/30">
                        Peso Líquido: {selectedProduct.weight}
                      </div>
                    </div>

                    <div className="sm:col-span-7 space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded bg-[#C11D31] text-white text-[11px] font-bold">
                          {COMPANY_INFO.glutenStatement}
                        </span>
                        <span className="text-[12px] text-white/50">Porção de {selectedProduct.portion}</span>
                      </div>

                      <h3 className="font-editorial text-[24px] sm:text-[30px] text-white font-bold leading-tight">
                        {selectedProduct.name}
                      </h3>

                      <p className="font-sans-clean text-[14px] sm:text-[15px] leading-relaxed text-white/85">
                        {selectedProduct.description}
                      </p>

                      <div className="p-3.5 rounded-xl bg-[#190C08] border border-white/10 text-[13px] text-white/80 font-sans-clean leading-relaxed">
                        <strong className="text-[#E8C991] block mb-1">Diferencial Comercial &amp; Prático:</strong>
                        {selectedProduct.differential}
                      </div>
                    </div>
                  </div>

                  {/* Informações Técnicas e Embalagens */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                    <div className="p-4 rounded-xl bg-[#150A07] border border-white/5 space-y-2">
                      <h4 className="text-[12px] font-bold font-sans-clean uppercase tracking-wider text-[#E8C991] flex items-center gap-1.5">
                        <Package className="w-3.5 h-3.5 text-[#C11D31]" />
                        <span>Formatos &amp; Disponibilidade:</span>
                      </h4>
                      <ul className="space-y-1.5 text-[13px] text-white/80 font-sans-clean">
                        {selectedProduct.availableIn?.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#E8C991] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-[#150A07] border border-white/5 space-y-2">
                      <h4 className="text-[12px] font-bold font-sans-clean uppercase tracking-wider text-[#E8C991] flex items-center gap-1.5">
                        <UtensilsCrossed className="w-3.5 h-3.5 text-[#C11D31]" />
                        <span>Aplicações Recomendadas:</span>
                      </h4>
                      <div className="flex flex-wrap gap-1.5 mb-2">
                        {selectedProduct.applications?.map((app, i) => (
                          <span key={i} className="px-2.5 py-1 rounded bg-white/5 text-[12px] text-white/80 font-sans-clean">
                            {app}
                          </span>
                        ))}
                      </div>
                      <div className="text-[12px] text-white/50 font-sans-clean pt-1 border-t border-white/5">
                        Armazenamento: <span className="text-white/80">{selectedProduct.conservation}</span>
                      </div>
                    </div>
                  </div>

                  {/* Ingredientes Card */}
                  <div className="p-4 rounded-xl bg-[#180A06] border border-[#E8C991]/25">
                    <span className="text-[11px] uppercase tracking-wider font-bold text-[#E8C991] block mb-1">
                      Ingredientes Declarados no Rótulo:
                    </span>
                    <p className="text-[14px] text-white/90 font-sans-clean leading-relaxed">
                      {selectedProduct.ingredients}
                    </p>
                  </div>
                </>
              ) : (
                /* Aba Tabela Nutricional Oficial */
                <NutritionalTable product={selectedProduct} />
              )}
            </div>

            {/* Footer do Modal */}
            <div className="px-6 sm:px-8 py-4 bg-[#160B08] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-[12px] text-white/60 font-sans-clean text-center sm:text-left">
                {COMPANY_INFO.corporateName} · {COMPANY_INFO.origin}
              </span>
              <button
                onClick={() => setSelectedProduct(null)}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-[13px] font-bold uppercase tracking-wider transition-colors cursor-pointer text-center"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

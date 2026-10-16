import React, { useEffect, useRef, useState } from 'react';
import { 
  Package, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  UtensilsCrossed, 
  Eye, 
  Download, 
  ShieldCheck, 
  Layers, 
  X,
  ExternalLink,
  ShoppingBag
} from 'lucide-react';
import logoSmall from '../assets/logo3.png';
import { ActiveModal } from '../types';

import colorauImg from '../assets/images/mrbritz_colorau_jar_1790172083265.jpg';
import alhoImg from '../assets/images/mrbritz_garlic_jar_1790172023185.jpg';
import oreganoImg from '../assets/images/mrbritz_oregano_jar_1790172051486.jpg';
import blendsImg from '../assets/images/mrbritz_hero_composite_1790172070744.jpg';
import { produtosHeroBg } from '../assets/heroBackgrounds';

interface ProductsSectionProps {
  onOpenModal: (modal: ActiveModal) => void;
  onSelectProduct?: (productName: string) => void;
}

interface ProductCardData {
  id: string;
  tag: string;
  name: string;
  category: string;
  description: string;
  differential: string;
  availableIn: string[];
  formats: string;
  image: string;
  highlightPillar: string;
  shelfLife: string;
  applications: string[];
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ 
  onOpenModal, 
  onSelectProduct 
}) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductCardData | null>(null);

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
    { name: 'Potencial de giro', desc: 'Alta aceitação e demanda constante no varejo', icon: TrendingUp },
  ];

  const productsList: ProductCardData[] = [
    {
      id: 'produto-01',
      tag: 'PRODUTO 01',
      name: 'Colorau Especial Extra Vermelho',
      category: 'Condimentos & Corantes Naturais',
      description: 'Grãos de urucum nobres micronizados com óleo vegetal selecionado, conferindo cor viva uniforme e sabor característico marcante para receitas caseiras e cozinhas profissionais.',
      differential: 'Alto poder de pigmentação natural sem residual de acidez e com rendimento até 25% superior.',
      availableIn: [
        'Potes PET dosadores 500g e 1kg',
        'Baldes herméticos 5kg',
        'Sacarias industriais 25kg (B2B)'
      ],
      formats: 'Potes 500g · 1kg | Baldes 5kg | Sacas 25kg',
      image: colorauImg,
      highlightPillar: 'Sabor & Cor Viva',
      shelfLife: '18 meses',
      applications: ['Carnes e ensopados', 'Arroz e caldos', 'Food service industrial', 'Gôndola de varejo']
    },
    {
      id: 'produto-02',
      tag: 'PRODUTO 02',
      name: 'Alho Triturado Puro (Sem Sal & Com Sal)',
      category: 'Linha Alho & Pastas Frescas',
      description: 'Dentes de alho frescos rigorosamente selecionados e moídos a frio, preservando o aroma pungente e a textura natural sem oxidar ou amargar as receitas diárias.',
      differential: 'Economia de tempo operacional com zero desperdício no pré-preparo, gerando excelente margem e giro rápido no varejo.',
      availableIn: [
        'Potes de mesa 200g e 500g',
        'Potes profissionais 1kg',
        'Baldes industriais 3kg e 10kg'
      ],
      formats: 'Potes 200g · 500g · 1kg | Baldes 3kg e 10kg',
      image: alhoImg,
      highlightPillar: 'Praticidade & Giro',
      shelfLife: '12 meses sob refrigeração/ambiente',
      applications: ['Refogados e grelhados', 'Molhos e temperos base', 'Restaurantes e buffets', 'Cozinha doméstica']
    },
    {
      id: 'produto-03',
      tag: 'PRODUTO 03',
      name: 'Orégano Chileno & Nacional Selecionado',
      category: 'Ervas & Aromáticas Desidratadas',
      description: 'Folhas inteiras de orégano calibradas com alto teor de óleos essenciais, aroma pronunciado e cor verde preservada através de secagem controlada e tripla higienização.',
      differential: 'Pureza visual sem galhos grossos ou pó, ideal para alta gastronomia, pizzarias e gôndolas exigentes.',
      availableIn: [
        'Potes transparentes com dosador 150g',
        'Embalagens Pouch Zip 500g e 1kg',
        'Fardos B2B para distribuição 10kg'
      ],
      formats: 'Potes dosadores 150g · Pouches 500g e 1kg · Fardos 10kg',
      image: oreganoImg,
      highlightPillar: 'Aroma Intenso',
      shelfLife: '24 meses',
      applications: ['Pizzarias e massas', 'Panificação artesanal', 'Marinadas e queijos', 'Varejo e empórios']
    },
    {
      id: 'produto-04',
      tag: 'PRODUTO 04',
      name: 'Mix Chimichurri Especial & Blends Nobres',
      category: 'Blends Especiais & Especiarias',
      description: 'Combinação balanceada de orégano, flocos de alho, cebola tostada, salsa desidratada, páprica e especiarias finas que criam uma crosta aromática inconfundível.',
      differential: 'Visual atraente no ponto de venda com granulometria uniforme, agregando valor percebido e ticket médio no setor de açougue e churrasco.',
      availableIn: [
        'Potes dosadores PET 250g',
        'Embalagens Stand-up Pouch 1kg',
        'Baldes herméticos 5kg para food service'
      ],
      formats: 'Potes 250g · Pouches 1kg · Baldes 5kg',
      image: blendsImg,
      highlightPillar: 'Alta Apresentação & Valor',
      shelfLife: '18 meses',
      applications: ['Churrasco e cortes nobres', 'Molhos artesanais', 'Açougue gourmet', 'Cozinha contemporânea']
    }
  ];

  const handleOpenProduct = (product: ProductCardData) => {
    setSelectedProduct(product);
  };

  const handleContactForProduct = (productName: string) => {
    if (onSelectProduct) {
      onSelectProduct(productName);
    } else {
      onOpenModal('contact');
    }
    setSelectedProduct(null);
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

      <div className="relative w-full max-w-[1920px] mx-auto px-5 sm:px-10 md:px-16 lg:px-[240px]">
        {/* ==================================================
            1. SOBRETÍTULO / EYEBROW
            ================================================== */}
        <div style={getStaggerStyle(100)} className="mb-4 sm:mb-6">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#E8C991] font-sans-clean text-[9px] sm:text-[11px] font-bold tracking-[2.5px] uppercase">
            <ShoppingBag className="w-3.5 h-3.5 text-[#C11D31]" />
            Catálogo &amp; Portfólio Mister Britz
          </span>
        </div>

        {/* ==================================================
            2. TÍTULO E SUBTÍTULO PRINCIPAL (FIÉIS AO TEXTO FORNECIDO)
            ================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start mb-12 sm:mb-16">
          {/* Coluna Esquerda: Título Principal e Subtítulo Editorial */}
          <div style={getStaggerStyle(200)} className="lg:col-span-7">
            <h2 className="font-bebas text-[48px] xs:text-[58px] sm:text-[72px] lg:text-[84px] leading-[0.92] tracking-[2px] text-white uppercase mb-4 sm:mb-6">
              NOSSOS PRODUTOS
            </h2>
            <p className="font-editorial text-2xl xs:text-3xl sm:text-4xl lg:text-[42px] leading-[1.12] text-[#E8C991] italic font-normal tracking-[-0.5px]">
              Produtos desenvolvidos para diferentes momentos de consumo.
            </p>
          </div>

          {/* Coluna Direita: Manifesto do Portfólio (Card sólido escuro, sem gradientes) */}
          <div style={getStaggerStyle(300)} className="lg:col-span-5 flex flex-col justify-between h-full">
            <div className="relative overflow-hidden p-6 sm:p-7 rounded-2xl bg-[#110705] border border-white/10 group">
              {/* Marca d'água da logo sutil no fundo */}
              <div className="absolute -right-3 -bottom-3 w-28 h-28 opacity-[0.05] pointer-events-none select-none transition-opacity duration-300 group-hover:opacity-[0.10]">
                <img src={logoSmall} alt="" className="w-full h-full object-contain" />
              </div>

              <div className="relative z-10 flex items-center gap-2.5 text-[#E8C991] mb-3">
                <img src={logoSmall} alt="Logo Mister Britz" className="w-5 h-5 object-contain shrink-0" />
                <span className="font-sans-clean text-[11px] font-bold tracking-[2.5px] uppercase">
                  Engenharia de Portfólio
                </span>
              </div>

              <p className="relative z-10 font-sans-clean text-base sm:text-lg leading-[1.5] text-[#F7F1E8] font-medium mb-3">
                O portfólio Mister Britz reúne produtos pensados para combinar equilíbrio sensorial, eficiência logística e alta atratividade comercial.
              </p>

              <p className="relative z-10 font-sans-clean text-sm leading-[1.55] text-white/70">
                Nosso objetivo é desenvolver itens que funcionem bem tanto para o consumidor quanto para o ponto de venda.
              </p>

              <div className="relative z-10 mt-5 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs text-[#E8C991] font-sans-clean font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#C11D31] shrink-0" />
                  <span>Padronização B2B &amp; Varejo</span>
                </div>
                <button
                  onClick={() => onOpenModal('products')}
                  className="inline-flex items-center gap-1.5 text-xs text-white/90 hover:text-white font-sans-clean font-semibold uppercase tracking-wider transition-colors"
                >
                  <span>Ver Todos ({productsList.length + 2}+)</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#E8C991]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ==================================================
            3. OS 5 PILARES COMBINADOS (Sabor, Praticidade, Boa apresentação, Competitividade, Potencial de giro)
            ================================================== */}
        <div style={getStaggerStyle(350)} className="mb-12 sm:mb-16">
          <div className="p-6 sm:p-7 rounded-2xl bg-[#120805] border border-white/10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-5 border-b border-white/10">
              <div>
                <p className="font-sans-clean text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#E8C991]">
                  Diretrizes de Formulação
                </p>
                <h3 className="font-editorial text-xl sm:text-2xl text-white font-normal mt-0.5">
                  O portfólio Mister Britz reúne produtos pensados para combinar:
                </h3>
              </div>
              <span className="shrink-0 text-xs text-white/50 font-sans-clean">
                5 Pilares Fundamentais
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
              {portfolioPillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.name}
                    className="p-3.5 sm:p-4 rounded-xl bg-[#180C08] border border-white/5 hover:border-[#E8C991]/30 transition-all duration-300 flex flex-col justify-between last:col-span-2 sm:last:col-span-1"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-bebas text-lg text-white/40">0{idx + 1}</span>
                      <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-[#E8C991]">
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-sans-clean text-sm sm:text-base font-bold text-white mb-1">
                        {pillar.name}
                      </h4>
                      <p className="text-xs text-white/60 font-sans-clean leading-snug">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ==================================================
            4. GRID DOS 4 PRODUTOS (PRODUTO 01, PRODUTO 02, PRODUTO 03, PRODUTO 04)
            Cards sólidos, sem efeitos de gradiente, limpos e nítidos
            ================================================== */}
        <div style={getStaggerStyle(400)} className="mb-14 sm:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productsList.map((product, index) => (
              <div
                key={product.id}
                className="group relative flex flex-col justify-between rounded-2xl bg-[#120805] border border-white/10 hover:border-[#E8C991]/40 transition-all duration-300 overflow-hidden shadow-lg"
              >
                {/* Imagem do Produto em Destaque (Full 1:1 Aspect, Sem Cortes e Full Bleed) */}
                <div
                  onClick={() => handleOpenProduct(product)}
                  className="relative w-full aspect-square bg-[#160B08] overflow-hidden border-b border-white/10 cursor-pointer group/img"
                  title={`Ver detalhes e foto completa de ${product.name}`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center filter contrast-105 brightness-95 group-hover/img:brightness-105 group-hover/img:scale-105 transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Gradientes sutis para garantir leitura das tags */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60 pointer-events-none group-hover/img:opacity-80 transition-opacity" />

                  {/* Tag do Produto (PRODUTO 01, 02, etc.) */}
                  <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0A0403]/90 backdrop-blur-md border border-white/15 text-[11px] font-sans-clean font-bold tracking-wider text-[#E8C991] uppercase shadow-lg">
                    <span>{product.tag}</span>
                  </div>

                  {/* Tag do Pilar */}
                  <div className="absolute top-3.5 right-3.5 z-10 flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#C11D31]/95 backdrop-blur-md text-[10px] font-sans-clean font-semibold tracking-wider text-white uppercase shadow-lg">
                    <Award className="w-2.5 h-2.5" />
                    <span>{product.highlightPillar}</span>
                  </div>

                  {/* Botão Flutuante de Ver Imagem Completa */}
                  <div className="absolute bottom-3.5 right-3.5 z-10 opacity-0 group-hover/img:opacity-100 transition-opacity px-3 py-1.5 rounded-lg bg-black/85 backdrop-blur-md border border-[#E8C991]/30 text-[10.5px] font-sans-clean font-semibold text-[#E8C991] uppercase tracking-wider flex items-center gap-1.5 shadow-xl">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Ver Imagem Full</span>
                  </div>
                </div>

                {/* Conteúdo do Card */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Categoria */}
                    <div className="text-[11px] font-sans-clean font-medium tracking-wider uppercase text-white/50 mb-1.5">
                      {product.category}
                    </div>

                    {/* [Nome do produto] */}
                    <h3 className="font-editorial text-xl sm:text-2xl text-white font-semibold leading-snug mb-3 group-hover:text-[#E8C991] transition-colors">
                      {product.name}
                    </h3>

                    {/* [Descrição curta destacando sabor, ocasião de consumo e principal diferencial.] */}
                    <p className="font-sans-clean text-sm leading-[1.55] text-[#F7F1E8]/80 mb-4 line-clamp-3">
                      {product.description}
                    </p>

                    {/* Destaque Comercial / Diferencial */}
                    <div className="mb-5 p-3 rounded-xl bg-[#180C08] border border-white/5 text-xs text-white/70 font-sans-clean leading-relaxed">
                      <span className="font-bold text-[#E8C991] block mb-0.5">Diferencial:</span>
                      {product.differential}
                    </div>
                  </div>

                  {/* Seção Disponível em: [Gramaturas / sabores / formatos] */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="text-[11px] font-sans-clean font-bold uppercase tracking-wider text-[#E8C991] mb-1.5 flex items-center gap-1.5">
                      <Package className="w-3.5 h-3.5 text-[#C11D31]" />
                      <span>Disponível em:</span>
                    </div>

                    <p className="font-sans-clean text-xs text-white/70 font-medium leading-relaxed mb-5">
                      {product.formats}
                    </p>

                    {/* Botão [ VER PRODUTO ] */}
                    <button
                      onClick={() => handleOpenProduct(product)}
                      className="w-full py-3 px-4 rounded-xl bg-[#C11D31] hover:bg-[#a51829] text-white font-sans-clean text-xs font-bold tracking-[2px] uppercase transition-all duration-200 flex items-center justify-center gap-2 group/btn cursor-pointer shadow-md hover:shadow-lg active:scale-[0.99]"
                    >
                      <span>[ VER PRODUTO ]</span>
                      <ArrowRight className="w-4 h-4 text-white group-hover/btn:translate-x-0.5 transition-transform" />
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
            {/* Marca d'água sutil */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-64 opacity-[0.04] pointer-events-none select-none">
              <img src={logoSmall} alt="" className="w-full h-full object-contain" />
            </div>

            <div className="relative z-10 max-w-2xl text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-sans-clean font-bold tracking-[2px] uppercase text-[#E8C991] mb-2">
                <CheckCircle2 className="w-4 h-4 text-[#C11D31]" />
                <span>Atendimento Direto a Redes e Distribuidores</span>
              </div>
              <h3 className="font-bebas text-3xl sm:text-4xl lg:text-5xl tracking-wide text-white leading-tight mb-2">
                DESENVOLVIMENTO DE NOVOS ITENS &amp; LINHA PERSONALIZADA
              </h3>
              <p className="font-sans-clean text-sm sm:text-base text-white/80 leading-relaxed">
                Nossa estrutura fabril permite desenvolver gramaturas específicas, marcas próprias (Private Label) e soluções personalizadas para o seu canal de vendas.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto shrink-0">
              <button
                onClick={() => onOpenModal('contact')}
                className="w-full sm:w-auto px-3.5 sm:px-6 py-3.5 rounded-xl bg-[#E8C991] hover:bg-[#d8b87d] text-[#140806] font-sans-clean text-[11px] xs:text-xs font-bold tracking-wider sm:tracking-[1.5px] uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-md whitespace-nowrap"
              >
                <span className="whitespace-nowrap">FALAR COM EQUIPE COMERCIAL</span>
                <ArrowRight className="w-4 h-4 shrink-0" />
              </button>

              <button
                onClick={() => onOpenModal('products')}
                className="w-full sm:w-auto px-3.5 sm:px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/15 font-sans-clean text-[11px] xs:text-xs font-bold tracking-wider sm:tracking-[1.5px] uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap"
              >
                <Download className="w-4 h-4 text-[#E8C991] shrink-0" />
                <span className="whitespace-nowrap">BAIXAR CATÁLOGO COMPLETO</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ==================================================
          MODAL RÁPIDO DO PRODUTO (QUICK VIEW / [ VER PRODUTO ])
          ================================================== */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn">
          <div
            className="relative w-full max-w-3xl max-h-[90vh] bg-[#120805] border border-[#E8C991]/30 rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.95)] flex flex-col"
            role="dialog"
            aria-modal="true"
          >
            {/* Header do Modal */}
            <div className="px-6 sm:px-8 py-5 border-b border-white/10 flex items-center justify-between bg-[#190B08]">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded bg-[#C11D31] text-white text-[11px] font-bold tracking-wider font-sans-clean uppercase">
                  {selectedProduct.tag}
                </span>
                <span className="text-xs font-sans-clean font-semibold tracking-wider text-[#E8C991] uppercase">
                  {selectedProduct.category}
                </span>
              </div>
              <button
                onClick={() => setSelectedProduct(null)}
                className="p-2 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Conteúdo com scroll */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-5 relative bg-[#170C09] rounded-2xl overflow-hidden border border-[#E8C991]/30 aspect-square w-full max-h-[360px] p-0 shadow-inner flex items-center justify-center">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover object-center filter contrast-105 brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>

                <div className="sm:col-span-7">
                  <h3 className="font-editorial text-2xl sm:text-3xl text-white font-bold leading-tight mb-3">
                    {selectedProduct.name}
                  </h3>
                  <p className="font-sans-clean text-sm leading-relaxed text-[#F7F1E8]/90 mb-4">
                    {selectedProduct.description}
                  </p>
                  <div className="p-3.5 rounded-xl bg-[#190C08] border border-white/10 text-xs text-white/80 font-sans-clean leading-relaxed">
                    <strong className="text-[#E8C991] block mb-1">Diferencial Comercial &amp; Prático:</strong>
                    {selectedProduct.differential}
                  </div>
                </div>
              </div>

              {/* Informações Técnicas e Embalagens */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div className="p-4 rounded-xl bg-[#150A07] border border-white/5">
                  <h4 className="text-xs font-bold font-sans-clean uppercase tracking-wider text-[#E8C991] mb-2 flex items-center gap-1.5">
                    <Package className="w-3.5 h-3.5 text-[#C11D31]" />
                    <span>Disponível em:</span>
                  </h4>
                  <ul className="space-y-1.5 text-xs text-white/80 font-sans-clean">
                    {selectedProduct.availableIn.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E8C991] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[#150A07] border border-white/5">
                  <h4 className="text-xs font-bold font-sans-clean uppercase tracking-wider text-[#E8C991] mb-2 flex items-center gap-1.5">
                    <UtensilsCrossed className="w-3.5 h-3.5 text-[#C11D31]" />
                    <span>Aplicações &amp; Canais:</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {selectedProduct.applications.map((app, i) => (
                      <span key={i} className="px-2 py-1 rounded bg-white/5 text-[11px] text-white/70 font-sans-clean">
                        {app}
                      </span>
                    ))}
                  </div>
                  <div className="text-[11px] text-white/50 font-sans-clean">
                    Validade estimada: <span className="text-white/80 font-medium">{selectedProduct.shelfLife}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer do Modal */}
            <div className="px-6 sm:px-8 py-4 bg-[#160B08] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-white/60 font-sans-clean text-center sm:text-left">
                Código de referência padrão para cotações e pedidos de amostra.
              </span>
              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  Fechar
                </button>
                <button
                  onClick={() => handleContactForProduct(selectedProduct.name)}
                  className="w-full sm:w-auto px-4 sm:px-5 py-2.5 rounded-xl bg-[#C11D31] hover:bg-[#a51829] text-white text-[11px] xs:text-xs font-bold tracking-wider uppercase transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  <span className="whitespace-nowrap">SOLICITAR COTAÇÃO B2B</span>
                  <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

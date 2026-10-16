import React from 'react';
import { ShoppingBag, Package, Award, ShieldCheck, PackageCheck, ArrowDown } from 'lucide-react';
import { PageTopHero } from '../components/PageTopHero';
import { ProductsSection } from '../components/ProductsSection';
import { HERO_BACKGROUNDS } from '../assets/heroBackgrounds';
import { ActiveModal, PageRoute } from '../types';

interface ProductsPageProps {
  onNavigate: (page: PageRoute) => void;
  onOpenModal: (modal: ActiveModal) => void;
  onSelectProduct?: (productName: string) => void;
  mousePos?: { x: number; y: number };
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onNavigate,
  onOpenModal,
  onSelectProduct,
  mousePos = { x: 0, y: 0 },
}) => {
  return (
    <div className="w-full min-h-screen bg-black text-[#F4EEE7]">
      {/* Cinematic Top Hero Banner with dedicated produtos bg hero */}
      <PageTopHero
        pageId="produtos"
        customBgUrl={HERO_BACKGROUNDS.produtos}
        mousePos={mousePos}
        breadcrumbLabel="Produtos"
        eyebrowBadge="PORTFÓLIO & CATÁLOGO MISTER BRITZ"
        badgeIcon={<ShoppingBag className="w-4 h-4" />}
        titleLines={[
          'Sabor autêntico.',
          'Giro no ponto de venda.',
          'Mister Britz Foods.',
        ]}
        subtitle="Produtos desenvolvidos para diferentes momentos de consumo."
        description="O portfólio Mister Britz reúne produtos pensados para combinar equilíbrio sensorial, eficiência logística, apelo visual nas gôndolas e rentabilidade consistente para varejistas, atacadistas e distribuidores."
        primaryCta={{
          label: 'Ver Catálogo Completo',
          action: () => {
            const el = document.getElementById('produtos');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          },
          icon: <ArrowDown className="w-4 h-4" />,
        }}
        secondaryCta={{
          label: 'Catálogo Digital B2B',
          action: () => onOpenModal('products'),
          icon: <Package className="w-4 h-4 text-[#E8C991]" />,
        }}
        floatingCards={[
          {
            title: 'Portfólio',
            value: 'Linhas Ativas',
            subtitle: 'Condimentos, alho moído, ervas finas e blends',
            icon: <Award className="w-4 h-4" />,
          },
          {
            title: 'Padrão Comercial',
            value: '100% Homologado',
            subtitle: 'Laudos laboratoriais e fichas técnicas completas',
            icon: <ShieldCheck className="w-4 h-4" />,
          },
          {
            title: 'Formatos B2B',
            value: 'Multi-Embalagens',
            subtitle: 'Potes PET alimentícios, baldes e sacarias industriais',
            icon: <PackageCheck className="w-4 h-4" />,
          },
        ]}
        targetSectionId="produtos"
        onNavigate={onNavigate}
      />

      {/* Main Products Section Content */}
      <div className="relative z-20">
        <ProductsSection
          onOpenModal={onOpenModal}
          onSelectProduct={onSelectProduct}
        />
      </div>
    </div>
  );
};

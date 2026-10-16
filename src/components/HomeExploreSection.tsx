import React from 'react';
import { Factory, Award, Leaf, ShoppingBag, Handshake, Phone, ArrowRight } from 'lucide-react';
import { PageRoute } from '../types';

interface HomeExploreSectionProps {
  onNavigate: (page: PageRoute) => void;
}

export const HomeExploreSection: React.FC<HomeExploreSectionProps> = ({ onNavigate }) => {
  const pages = [
    {
      id: 'fabrica' as PageRoute,
      badge: 'Indústria & Escala',
      title: 'NOSSA FÁBRICA',
      subtitle: 'Onde qualidade encontra escala.',
      description: 'Conheça nossa estrutura industrial, maquinários de precisão e processos padronizados.',
      icon: Factory,
      cta: 'Conhecer Fábrica',
      highlight: 'Alta Capacidade',
    },
    {
      id: 'qualidade' as PageRoute,
      badge: 'Padrão & Controle',
      title: 'QUALIDADE',
      subtitle: 'Um bom produto começa muito antes da prateleira.',
      description: 'Jornada completa do produto: matéria-prima, processos, acondicionamento e logística.',
      icon: Award,
      cta: 'Ver Jornada de Qualidade',
      highlight: 'Rigor Técnico',
    },
    {
      id: 'esg' as PageRoute,
      badge: 'Responsabilidade',
      title: 'ESG & SUSTENTABILIDADE',
      subtitle: 'Crescer também significa fazer escolhas responsáveis.',
      description: 'Práticas ambientais conscientes, valorização de pessoas e governança transparente.',
      icon: Leaf,
      cta: 'Nossas Práticas ESG',
      highlight: 'Consciência',
    },
    {
      id: 'produtos' as PageRoute,
      badge: 'Mix & Portfólio',
      title: 'NOSSOS PRODUTOS',
      subtitle: 'Equilíbrio sensorial e alto giro.',
      description: 'Linhas completas de condimentos nobres, alhos, ervas e blends em embalagens para varejo e food service.',
      icon: ShoppingBag,
      cta: 'Ver Produtos',
      highlight: 'Mix Completo',
    },
    {
      id: 'parceiros' as PageRoute,
      badge: 'Oportunidades Comerciais',
      title: 'PARCEIROS',
      subtitle: 'O próximo ponto de venda Mister Britz pode ser o seu.',
      description: 'Condições exclusivas para distribuidoras, redes de supermercados, lojas e food service.',
      icon: Handshake,
      cta: 'Seja um Parceiro',
      highlight: 'Crescimento B2B',
    },
    {
      id: 'contato' as PageRoute,
      badge: 'Atendimento Direto',
      title: 'CONTATO',
      subtitle: 'Fale com a Mister Britz.',
      description: 'Atendimento corporativo ágil via WhatsApp, telefone e equipe de suporte comercial.',
      icon: Phone,
      cta: 'Canais de Contato',
      highlight: 'Suporte Ágil',
    },
  ];

  return (
    <section className="relative w-full bg-[#070302] text-[#F7F1E8] py-16 sm:py-20 lg:py-24 border-t border-white/10 overflow-hidden">
      <div className="relative z-10 w-full max-w-[1920px] mx-auto px-5 sm:px-10 md:px-16 lg:px-[240px]">
        {/* Section Header */}
        <div className="mb-14 sm:mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-[1px] bg-[#E8C991]" />
            <span className="text-xs uppercase tracking-[3px] text-[#E8C991] font-semibold font-sans-clean">
              Ecossistema & Páginas Dedicadas
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-editorial font-bold tracking-[2px] text-white uppercase leading-tight">
            CONHEÇA MAIS SOBRE A MISTER BRITZ
          </h2>

          <p className="mt-2 text-xl sm:text-2xl text-[#E8C991] font-editorial italic font-normal">
            Navegue pelos detalhes da nossa operação, qualidade e oportunidades comerciais.
          </p>
        </div>

        {/* 6 Cards Grid (3x2 on desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pages.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.id}
                onClick={() => onNavigate(p.id)}
                className="group p-5 sm:p-7 rounded-2xl bg-[#190B08] border border-white/10 hover:border-[#E8C991] transition-all duration-300 hover:-translate-y-1.5 active:scale-[0.99] flex flex-col justify-between cursor-pointer shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#25100B] border border-[#E8C991]/30 flex items-center justify-center text-[#E8C991] group-hover:bg-[#E8C991] group-hover:text-[#190B08] transition-colors">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-sans-clean font-semibold uppercase tracking-wider text-[#E8C991] px-2 py-0.5 rounded bg-[#25100B] border border-white/5">
                      {p.highlight}
                    </span>
                  </div>

                  <span className="text-[11px] font-sans-clean uppercase tracking-widest text-white/50 block mb-1">
                    {p.badge}
                  </span>

                  <h3 className="text-xl font-editorial font-bold text-white mb-2 group-hover:text-[#E8C991] transition-colors">
                    {p.title}
                  </h3>

                  <p className="text-xs text-white/75 font-sans-clean leading-relaxed mb-4">
                    {p.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-sans-clean font-semibold text-[#E8C991] group-hover:text-white transition-colors">
                  <span className="whitespace-nowrap">{p.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform shrink-0" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { ProductItem } from '../types';
import { ShieldCheck, Info, Sparkles, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/productsData';

interface NutritionalTableProps {
  product: ProductItem;
  compact?: boolean;
}

export const NutritionalTable: React.FC<NutritionalTableProps> = ({
  product,
  compact = false,
}) => {
  return (
    <div className="w-full flex flex-col gap-4 text-[#F4EEE7]">
      {/* Official Brazilian Nutrition Facts Card */}
      <div className="w-full rounded-2xl bg-[#090302] border-2 border-[#E8C991]/40 overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.8)] font-sans-clean">
        {/* Table Title Header */}
        <div className="bg-[#1C0B08] px-4 py-3 border-b-2 border-[#E8C991]/50 flex flex-wrap items-center justify-between gap-2">
          <div>
            <span className="text-[11px] uppercase tracking-[2px] font-bold text-[#E8C991] block">
              Tabela Oficial de Rotulagem
            </span>
            <h4 className="text-[16px] sm:text-[18px] font-black tracking-wider text-white uppercase">
              INFORMAÇÃO NUTRICIONAL
            </h4>
          </div>
          <div className="px-2.5 py-1 rounded bg-[#E8C991]/15 border border-[#E8C991]/40 text-[#E8C991] text-[12px] font-bold">
            Porção: {product.portion}
          </div>
        </div>

        {/* Nutritional Values Grid / Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-[13px] sm:text-[14px]">
            <thead>
              <tr className="bg-[#140604] border-b border-[#E8C991]/30 text-white font-bold">
                <th className="py-2.5 px-3 sm:px-4 font-semibold text-white/90">Nutriente</th>
                <th className="py-2.5 px-3 sm:px-4 text-center font-semibold text-white/90">Quantidade</th>
                <th className="py-2.5 px-3 sm:px-4 text-right font-semibold text-[#E8C991]">%VD (*)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {product.nutritionalTable.map((row, idx) => {
                const isHighlight = row.nutrient.includes('Valor energético') || row.nutrient.includes('Sódio');
                const isSubItem = row.nutrient.includes('Açúcares') || row.nutrient.includes('Gorduras saturadas') || row.nutrient.includes('Gorduras trans');

                return (
                  <tr
                    key={idx}
                    className={`transition-colors hover:bg-white/[0.03] ${
                      isHighlight ? 'bg-white/[0.02] font-semibold text-white' : 'text-white/80'
                    }`}
                  >
                    <td className={`py-2 px-3 sm:px-4 ${isSubItem ? 'pl-6 sm:pl-7 text-white/70 text-[12px] sm:text-[13px]' : ''}`}>
                      {row.nutrient}
                    </td>
                    <td className="py-2 px-3 sm:px-4 text-center font-mono text-[13px] text-white/90 whitespace-nowrap">
                      {row.amount}
                    </td>
                    <td className="py-2 px-3 sm:px-4 text-right font-mono font-medium text-[#E8C991] whitespace-nowrap">
                      {row.vd}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {/* Footnotes & Regulatory Declarations */}
        <div className="bg-[#100604] p-3 sm:p-4 border-t border-[#E8C991]/25 text-[11px] sm:text-[12px] text-white/60 space-y-1.5 leading-relaxed">
          <p>
            * % Valores Diários de referência com base em uma dieta de 2.000 kcal ou 8.400 kJ. Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas.
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-white/75 font-medium pt-1 border-t border-white/5">
            <span><strong>NS</strong> = quantidade não significativa declarada no rótulo.</span>
            <span><strong>“—”</strong> = informação não apresentada separadamente.</span>
            {product.energyKj && (
              <span className="text-[#E8C991]">
                <strong>Nota:</strong> Declara também {product.energyKj} de valor energético.
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Ingredientes & Alergênicos */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#150906] border border-[#E8C991]/25 space-y-3 font-sans-clean">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-4 h-4 text-[#E8C991]" />
            <h5 className="text-[13px] uppercase tracking-wider font-bold text-[#E8C991]">
              Lista de Ingredientes
            </h5>
          </div>
          <p className="text-[14px] sm:text-[15px] text-white/90 leading-relaxed font-normal">
            {product.ingredients}
          </p>
        </div>

        {/* Regulatory Badges: NÃO CONTÉM GLÚTEN & Conservação */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-white/10">
          {/* Gluten Free Badge */}
          <div className="p-3 rounded-xl bg-[#230C08] border border-[#C11D31]/40 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#C11D31]/20 border border-[#C11D31] flex items-center justify-center text-[#E8C991] shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#E8C991]" />
            </div>
            <div>
              <span className="text-[10px] text-white/50 uppercase tracking-widest font-semibold block">
                Regulatório ANVISA
              </span>
              <strong className="text-[13px] sm:text-[14px] text-white tracking-wide uppercase font-bold">
                {COMPANY_INFO.glutenStatement}
              </strong>
            </div>
          </div>

          {/* Origem */}
          <div className="p-3 rounded-xl bg-[#230C08] border border-white/10 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#E8C991] shrink-0">
              <CheckCircle2 className="w-5 h-5 text-[#E8C991]" />
            </div>
            <div>
              <span className="text-[10px] text-white/50 uppercase tracking-widest font-semibold block">
                Origem &amp; Fabricante
              </span>
              <span className="text-[13px] text-white font-medium block">
                {COMPANY_INFO.origin}
              </span>
            </div>
          </div>
        </div>

        {/* Conservação */}
        <div className="p-3.5 rounded-xl bg-[#1C0E0A] border border-[#E8C991]/30 flex items-start gap-3">
          <Info className="w-4 h-4 text-[#E8C991] shrink-0 mt-0.5" />
          <div className="text-[12px] sm:text-[13px] text-white/80 leading-relaxed">
            <strong className="text-[#E8C991] block mb-0.5">Modo de Conservação:</strong>
            {product.conservation}
          </div>
        </div>
      </div>
    </div>
  );
};

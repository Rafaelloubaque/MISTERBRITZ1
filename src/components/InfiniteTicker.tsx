import React from 'react';
import { Handshake, Truck, TrendingUp, Gem } from 'lucide-react';

interface InfiniteTickerProps {
  className?: string;
  speed?: 'normal' | 'fast' | 'slow';
}

export const InfiniteTicker: React.FC<InfiniteTickerProps> = ({
  className = '',
}) => {
  const items = [
    {
      icon: Handshake,
      title: 'QUALIDADE QUE GERA CONFIANÇA',
      lines: ['QUALIDADE', 'QUE GERA', 'CONFIANÇA'],
    },
    {
      icon: Truck,
      title: 'PARCERIA EM CADA ENTREGA',
      lines: ['PARCERIA', 'EM CADA', 'ENTREGA'],
    },
    {
      icon: TrendingUp,
      title: 'MAIS SABOR PARA GRANDES NEGÓCIOS',
      lines: ['MAIS SABOR', 'PARA GRANDES', 'NEGÓCIOS'],
    },
  ];

  // Repeat sequence 4 times for seamless infinite scroll
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div
      className={`relative w-full overflow-hidden bg-black/60 border-y border-white/10 backdrop-blur-md py-3.5 sm:py-4 select-none ${className}`}
    >
      {/* Subtle edge fades */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#0D0503] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#0D0503] to-transparent z-10 pointer-events-none" />

      {/* Infinite scrolling row */}
      <div className="flex w-max items-center animate-[ticker_26s_linear_infinite] hover:[animation-play-state:paused]">
        {repeated.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="flex items-center gap-6 sm:gap-8 px-6 sm:px-10 shrink-0"
            >
              {/* Item capsule / inline block */}
              <div className="flex items-center gap-3.5 group">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#B81D2E]/25 border border-[#B81D2E]/60 flex items-center justify-center text-[#E8C991] shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" strokeWidth={1.75} />
                </div>
                <div className="flex items-center gap-2 font-sans-clean font-bold text-[11px] sm:text-[13px] tracking-[2px] sm:tracking-[2.5px] uppercase text-[#F4EEE7] whitespace-nowrap">
                  <span>{item.lines[0]}</span>
                  <span className="text-[#E8C991] font-extrabold">{item.lines[1]}</span>
                  <span className="text-white">{item.lines[2]}</span>
                </div>
              </div>

              {/* Red diamond separator between ticker items */}
              <div className="w-1.5 h-1.5 rotate-45 bg-[#B81D2E] opacity-70 shrink-0" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

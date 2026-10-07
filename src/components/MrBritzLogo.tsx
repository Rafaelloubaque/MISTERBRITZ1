import React from 'react';
import mrBritzLogoImg from '../assets/images/Ativo 2-8.png';

interface LogoProps {
  className?: string;
  size?: number;
}

export const MrBritzLogo: React.FC<LogoProps> = ({ className = '', size = 83 }) => {
  return (
    <div
      className={`relative flex items-center justify-start select-none group cursor-pointer transition-transform duration-300 hover:scale-[1.03] ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
      aria-label="MR. BRITZ FOODS - Indústria e Distribuição de Alimentos"
    >
      <img
        src={mrBritzLogoImg}
        alt="MR. BRITZ FOODS"
        width={size}
        height={size}
        style={{ width: `${size}px`, height: `${size}px` }}
        className="w-full h-full object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.55)]"
      />
    </div>
  );
};


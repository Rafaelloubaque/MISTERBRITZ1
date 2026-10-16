import React from "react";
import ativoLogo from "../assets/Ativo 2-8 (1).png";
import logo2 from "../assets/logo-2.png";
import logoOriginal from "../assets/LOGO.png";
import logo3 from "../assets/logo3.png";

interface ImageCubeProps {
  className?: string;
}

export default function ImageCube({ className }: ImageCubeProps) {
  const images = [
    {
      id: 1,
      src: ativoLogo,
      alt: "Mister Britz - Marca Principal",
    },
    {
      id: 2,
      src: logo2,
      alt: "Mister Britz - Selo Qualidade Ouro",
    },
    {
      id: 3,
      src: logoOriginal,
      alt: "Mister Britz - Foods Emblem",
    },
    {
      id: 4,
      src: logo3,
      alt: "Mister Britz - Selo Tradicional",
    },
  ];

  return (
    <div className={className ?? "flex min-h-screen items-center justify-center bg-black"}>
      {/* Área de perspectiva 3D com interatividade no hover */}
      <div
        className="cube-wrapper relative group cursor-grab active:cursor-grabbing select-none"
        style={{
          width: "var(--cube-size)",
          height: "var(--cube-size)",
          perspective: "1400px",
        }}
      >
        {/* Cubo com rotação contínua e pausa no hover */}
        <div
          className="relative h-full w-full animate-[cubeInfinite_26s_linear_infinite] group-hover:[animation-play-state:paused]"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* 4 Faces Principais com as Logos Solicitadas */}
          {images.map((image, index) => (
            <div
              key={image.id}
              className="absolute inset-0 overflow-hidden rounded-2xl bg-gradient-to-br from-[#1C0E0B] via-[#0E0604] to-[#060202] border border-[#E8C991]/35 shadow-[0_25px_60px_rgba(0,0,0,0.95)] flex items-center justify-center p-3.5 sm:p-5 md:p-6 backdrop-blur-md transition-all duration-300"
              style={{
                transform: `rotateY(${index * 90}deg) translateZ(var(--cube-depth))`,
                backfaceVisibility: "hidden",
              }}
            >
              {/* Moldura interna sutil com brilho premium */}
              <div className="absolute inset-2 sm:inset-3 rounded-xl border border-white/10 pointer-events-none" />
              
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-contain drop-shadow-[0_10px_25px_rgba(0,0,0,0.85)] select-none pointer-events-none transition-transform duration-300 group-hover:scale-[1.02]"
                loading="eager"
              />
            </div>
          ))}

          {/* Tampa Superior do Cubo (Top Face) */}
          <div
            className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#24120D] to-[#0A0402] border border-[#E8C991]/20 shadow-inner flex items-center justify-center pointer-events-none"
            style={{
              transform: "rotateX(90deg) translateZ(var(--cube-depth))",
              backfaceVisibility: "hidden",
            }}
          >
            <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full border border-[#E8C991]/25 bg-[#E8C991]/5 flex items-center justify-center">
              <div className="w-8 h-8 rounded-full bg-[#E8C991]/15" />
            </div>
          </div>

          {/* Tampa Inferior do Cubo (Bottom Face) */}
          <div
            className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#24120D] to-[#0A0402] border border-[#E8C991]/20 shadow-2xl pointer-events-none"
            style={{
              transform: "rotateX(-90deg) translateZ(var(--cube-depth))",
              backfaceVisibility: "hidden",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes cubeInfinite {
          from {
            transform: rotateY(0deg);
          }

          to {
            transform: rotateY(-360deg);
          }
        }
      `}</style>
    </div>
  );
}

export { ImageCube };

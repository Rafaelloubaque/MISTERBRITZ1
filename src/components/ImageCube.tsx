import React from "react";
import logo2 from "../assets/logo-2.png";
import logo3 from "../assets/logo3.png";
import logoOriginal from "../assets/LOGO.png";
import ativoLogo from "../assets/Ativo 2-8 (1).png";

interface ImageCubeProps {
  className?: string;
}

export default function ImageCube({ className }: ImageCubeProps) {
  const images = [
    {
      id: 1,
      src: logo2,
      alt: "Nutribrasil Logo 2",
    },
    {
      id: 2,
      src: logo3,
      alt: "Nutribrasil Logo 3",
    },
    {
      id: 3,
      src: logoOriginal,
      alt: "Nutribrasil Logo",
    },
    {
      id: 4,
      src: ativoLogo,
      alt: "Nutribrasil Marca",
    },
  ];

  return (
    <div className={className ?? "flex min-h-screen items-center justify-center bg-black"}>
      {/* Área de perspectiva */}
      <div
        className="cube-wrapper relative"
        style={{
          width: "var(--cube-size)",
          height: "var(--cube-size)",
          perspective: "1400px",
        }}
      >
        {/* Cubo */}
        <div
          className="relative h-full w-full animate-[cubeInfinite_28s_linear_infinite]"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {images.map((image, index) => (
            <div
              key={image.id}
              className="absolute inset-0 overflow-hidden rounded-2xl bg-black border border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.95)] flex items-center justify-center p-4 sm:p-7 md:p-8 backdrop-blur-sm"
              style={{
                transform: `rotateY(${index * 90}deg) translateZ(var(--cube-depth))`,
                backfaceVisibility: "hidden",
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-contain drop-shadow-2xl select-none pointer-events-none"
              />
            </div>
          ))}
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

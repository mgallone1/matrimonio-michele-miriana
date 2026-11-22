import React, { useRef } from 'react';
import gsap from 'gsap';
import { TattooHeart } from './TattooHeart';
import { Sparkles } from 'lucide-react';

interface InvitationCardModalProps {
  isOpen: boolean;
  onOpen: () => void;
}

export const InvitationCardModal: React.FC<InvitationCardModalProps> = ({ isOpen, onOpen }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const handleReveal = () => {
    if (!overlayRef.current || !cardRef.current) {
      onOpen();
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        onOpen();
      },
    });

    tl.to(cardRef.current, {
      scale: 0.96,
      y: -20,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.inOut',
    }).to(
      overlayRef.current,
      {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
      },
      '-=0.3'
    );
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#1a120e]/75 backdrop-blur-md overflow-y-auto"
      aria-modal="true"
      role="dialog"
    >
      <div
        ref={cardRef}
        className="relative w-full max-w-lg bg-white rounded-3xl p-7 sm:p-11 border border-champagne shadow-2xl text-center overflow-hidden flex flex-col items-center justify-center my-auto"
      >
        {/* 
          Ghirlanda floreale zoomata dall'angolo superiore destro:
          Esattamente identica e coerente con la composizione dell'Hero
        */}
        <div className="absolute top-0 right-0 w-[240px] sm:w-[310px] pointer-events-none select-none z-0">
          <img
            src="./images/corner_floreale_top_right.png"
            alt=""
            className="w-full h-auto object-contain filter contrast-[1.02] opacity-95"
            loading="eager"
          />
        </div>

        {/* 
          Acquerello della Tenuta Tana di Volpe in trasparenza sullo sfondo:
          Luminoso, tenue e identico al tema generale
        */}
        <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center overflow-hidden">
          <picture className="w-full h-full flex items-center justify-center">
            <source srcSet="./images/webp/casale_acquerello_hero.webp" type="image/webp" />
            <img
              src="./images/casale_acquerello_hero.png"
              alt=""
              className="w-full h-full object-contain max-h-[380px] opacity-[0.16] filter contrast-[1.05]"
              loading="eager"
            />
          </picture>
        </div>

        {/* Contenuto dell'invito con z-10 */}
        <div className="relative z-10 w-full flex flex-col items-center">
          {/* Il Simbolo Ufficiale: Il Tatuaggio Cuore M & M */}
          <div className="flex justify-center mb-3 sm:mb-4">
            <TattooHeart className="w-13 h-13 sm:w-15 sm:h-15 text-burgundy transition-transform hover:scale-105 duration-300" />
          </div>

          <p className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.35em] text-sage font-medium mb-3 sm:mb-4">
            Partecipazione di Nozze
          </p>

          {/* 
            NOMI IN CORSIVO ORIGINALE ALEX BRUSH con & gigante centrale cipria
            Perfettamente coerenti con l'Hero del sito
          */}
          <div className="font-script text-burgundy font-normal select-none drop-shadow-sm mb-3 sm:mb-4 tracking-wide w-full max-w-sm relative">
            {/* & gigante al centro in X e Y, colore blush cipria */}
            <span
              className="font-serif italic text-6xl sm:text-8xl text-[#d2928d]/65 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 leading-none pointer-events-none z-0 select-none"
              aria-hidden="true"
            >
              &amp;
            </span>

            {/* Michele in alto a sinistra */}
            <span className="block text-center -translate-x-4 sm:-translate-x-8 text-5xl sm:text-6xl leading-none relative z-10">
              Michele
            </span>

            {/* Spaziatore armonico */}
            <div className="h-2 sm:h-3" />

            {/* Miriana in basso a destra */}
            <span className="block text-center translate-x-4 sm:translate-x-8 text-5xl sm:text-6xl leading-none relative z-10">
              Miriana
            </span>
          </div>

          <p className="font-serif italic text-[#2c2c2c] text-sm sm:text-base max-w-xs sm:max-w-sm mx-auto mb-5 sm:mb-6 font-light leading-relaxed">
            Hanno il piacere di invitarvi a celebrare il loro matrimonio
          </p>

          {/* Data e Luogo nobili e ariosi, con data calligrafica script senza box rigido */}
          <div className="mb-6 sm:mb-8 text-center space-y-1">
            <p className="font-script text-4xl sm:text-5xl text-burgundy font-normal select-none leading-none tracking-wide">
              2 Luglio 2027
            </p>
            <p className="font-sans text-[11px] sm:text-xs tracking-[0.2em] text-sage uppercase font-medium pt-1">
              Tenuta Tana di Volpe • Albanella (SA)
            </p>
          </div>

          {/* Pulsante Entra con stile nobile e bagliore dorato */}
          <button
            type="button"
            onClick={handleReveal}
            className="btn-primary w-full max-w-xs py-3 sm:py-3.5 px-6 rounded-full shadow-lg hover:shadow-xl active:scale-98 transition-all flex items-center justify-center gap-2 group text-xs sm:text-sm uppercase tracking-wider font-semibold"
          >
            <Sparkles className="w-4 h-4 text-champagne/80 group-hover:scale-110 transition-transform" />
            <span>Entra nell’Invito</span>
          </button>
        </div>
      </div>
    </div>
  );
};

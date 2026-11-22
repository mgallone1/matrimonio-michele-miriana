import React, { useRef } from 'react';
import gsap from 'gsap';
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
        className="relative w-full max-w-lg bg-white rounded-3xl p-8 sm:p-12 border border-champagne shadow-2xl text-center overflow-hidden flex flex-col items-center justify-center my-auto"
      >
        {/* Contenuto dell'invito con z-10 */}
        <div className="relative z-10 w-full flex flex-col items-center">
          {/* 
            Al posto del tatuaggio: Dalia chiara ad acquerello abbastanza grande e luminosa
          */}
          <div className="flex justify-center mb-4 sm:mb-5 pointer-events-none select-none">
            <img
              src="./images/dalia_chiara_invito.png"
              alt="Dalia chiara ad acquerello"
              className="w-24 h-24 sm:w-32 sm:h-32 object-contain filter contrast-[1.03] drop-shadow-sm transition-transform hover:scale-105 duration-300"
              loading="eager"
            />
          </div>

          {/* 
            NOMI SU UNA SOLA RIGA con font calligrafico ed e commerciale normale
          */}
          <h1 className="font-script text-4xl sm:text-5xl md:text-[54px] text-burgundy font-normal select-none drop-shadow-sm mb-4 sm:mb-5 tracking-wide w-full whitespace-nowrap">
            Michele &amp; Miriana
          </h1>

          {/* Frase richiesta: 'Hanno il piacere di invitarvi al loro matrimonio' */}
          <p className="font-serif italic text-[#2c2c2c] text-base sm:text-lg max-w-xs sm:max-w-sm mx-auto mb-6 sm:mb-8 font-light leading-relaxed">
            Hanno il piacere di invitarvi al loro matrimonio
          </p>

          {/* Data e Luogo in stile sartoriale pulito */}
          <div className="mb-8 text-center space-y-1.5">
            <p className="font-script text-4xl sm:text-5xl text-burgundy font-normal select-none leading-none tracking-wide">
              2 Luglio 2027
            </p>
            <p className="font-sans text-[11px] sm:text-xs tracking-[0.2em] text-sage uppercase font-medium pt-1">
              Tenuta Tana di Volpe • Albanella (SA)
            </p>
          </div>

          {/* Pulsante Entra neutro, sofisticato ed elegante (non bordeaux) */}
          <button
            type="button"
            onClick={handleReveal}
            className="w-full max-w-xs py-3.5 px-6 rounded-full bg-[#FAF7F2] hover:bg-[#F2ECE1] text-[#2c2c2c] border border-champagne hover:border-[#bfa780] shadow-sm hover:shadow-md active:scale-98 transition-all flex items-center justify-center gap-2 group text-xs sm:text-sm uppercase tracking-[0.18em] font-medium font-sans cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-sage group-hover:scale-110 transition-transform" />
            <span>Entra nell’Invito</span>
          </button>
        </div>
      </div>
    </div>
  );
};

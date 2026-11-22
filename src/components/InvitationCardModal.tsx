import React, { useRef } from 'react';
import gsap from 'gsap';
import { TattooHeart } from './TattooHeart';

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
      scale: 0.97,
      y: -15,
      opacity: 0,
      duration: 0.65,
      ease: 'power3.inOut',
    }).to(
      overlayRef.current,
      {
        opacity: 0,
        duration: 0.45,
        ease: 'power2.out',
      },
      '-=0.25'
    );
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1a120e]/65 backdrop-blur-md"
      aria-modal="true"
      role="dialog"
    >
      <div
        ref={cardRef}
        className="relative w-full max-w-lg bg-white rounded-3xl p-8 sm:p-12 border border-champagne shadow-2xl text-center overflow-hidden"
      >
        {/* Il Simbolo Ufficiale: Il Tatuaggio Cuore M & M */}
        <div className="flex justify-center mb-5">
          <TattooHeart className="w-16 h-16 text-burgundy transition-transform hover:scale-105 duration-300" />
        </div>

        <p className="font-sans text-[11px] uppercase tracking-[0.3em] text-sage font-medium mb-3">
          Partecipazione di Nozze
        </p>

        {/* Nomi con font calligrafico autentico */}
        <h1 className="font-script text-4xl sm:text-6xl text-burgundy font-normal tracking-wide mb-4 select-none">
          Michele &amp; Miriana
        </h1>

        <p className="font-serif italic text-[#2c2c2c] text-base sm:text-lg max-w-sm mx-auto mb-8 font-light">
          Hanno il piacere di invitarvi a celebrare il loro matrimonio
        </p>

        {/* Data e Luogo */}
        <div className="py-4 border-y border-champagne mb-8 space-y-1.5 bg-[#faf8f5] rounded-xl">
          <p className="font-serif text-xl sm:text-2xl text-[#1a1a1a] font-medium">
            2 Luglio 2027
          </p>
          <p className="font-sans text-xs tracking-widest text-sage uppercase font-medium">
            Tenuta Tana di Volpe • Albanella (Salerno)
          </p>
        </div>

        {/* Pulsante Entra */}
        <button
          type="button"
          onClick={handleReveal}
          className="btn-primary w-full shadow-lg"
        >
          Entra nell’Invito
        </button>
      </div>
    </div>
  );
};

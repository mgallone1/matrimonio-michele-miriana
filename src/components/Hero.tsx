import React from 'react';
import { Magnetic } from './reactbits/Magnetic';

export const Hero: React.FC = () => {
  return (
    <header className="relative pt-14 sm:pt-20 pb-16 sm:pb-24 px-4 text-center overflow-hidden min-h-[500px] sm:min-h-[560px] flex items-center justify-center bg-white">
      {/* 
        Acquerello della Tenuta come SFONDO TENUE su BIANCO PURO (#FFFFFF):
        Opacità al 22%, luminoso, fresco e discreto.
      */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center overflow-hidden">
        <picture className="w-full max-w-5xl h-full flex items-center justify-center">
          <source srcSet="./images/webp/casale_acquerello_hero.webp" type="image/webp" />
          <img
            src="./images/casale_acquerello_hero.png"
            alt="Tenuta Tana di Volpe Acquerello"
            className="w-full h-full object-contain max-h-[520px] opacity-[0.22] filter contrast-[1.05]"
            loading="eager"
          />
        </picture>
      </div>

      <div className="max-w-3xl mx-auto relative z-10 w-full">
        {/* Sovratitolo in Verde Salvia Nobile (#4f523f) */}
        <p className="font-sans text-xs uppercase tracking-[0.35em] text-sage font-medium mb-3">
          Partecipazione di Nozze
        </p>

        {/* NOMI CENTRALI GRANDI con Great Vibes in Bordeaux nobile (#530c1e) */}
        <h1 className="font-script text-5xl sm:text-7xl md:text-8xl text-burgundy font-normal leading-tight mb-6 select-none drop-shadow-sm">
          Michele &amp; Miriana
        </h1>

        {/* 
          Come richiesto: NESSUN simbolo del tatuaggio sotto i nomi, nessuna linea o divisore.
          Si passa DIRETTAMENTE alla frase romantica in nero profondo ed elegante.
        */}
        <p className="font-serif italic text-[#1a1a1a] text-base sm:text-xl max-w-lg mx-auto mb-8 font-light leading-relaxed">
          «Una promessa che dura per sempre, una festa che comincia oggi insieme a voi.»
        </p>

        {/* Box Data Pulito ed Essenziale: SOLO 2 LUGLIO 2027 */}
        <div className="py-3 px-8 border-y border-champagne max-w-xs sm:max-w-sm mx-auto mb-10 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm">
          <p className="font-serif text-2xl sm:text-3xl font-medium tracking-wide text-burgundy">
            2 Luglio 2027
          </p>
        </div>

        {/* Indicazione per scorrere */}
        <div className="flex justify-center">
          <Magnetic distance={0.25}>
            <a
              href="#cerimonia"
              className="text-[#1a1a1a] hover:text-burgundy transition-colors py-2.5 px-6 rounded-full border border-champagne text-xs font-sans uppercase tracking-[0.22em] inline-flex items-center gap-2 bg-white/90 shadow-sm"
              aria-label="Scopri la cerimonia"
            >
              <span>Scopri la Cerimonia ↓</span>
            </a>
          </Magnetic>
        </div>
      </div>
    </header>
  );
};

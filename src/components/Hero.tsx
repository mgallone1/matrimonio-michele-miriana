import React from 'react';

export const Hero: React.FC = () => {
  return (
    <header className="relative pt-10 sm:pt-16 pb-6 sm:pb-8 px-4 text-center overflow-hidden flex items-center justify-center bg-white">
      {/* 
        Acquerello della Tenuta come SFONDO TENUE su BIANCO PURO (#FFFFFF):
        Opacità calibrata al 20%, luminoso, fresco e discreto.
      */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center overflow-hidden">
        <picture className="w-full max-w-5xl h-full flex items-center justify-center">
          <source srcSet="./images/webp/casale_acquerello_hero.webp" type="image/webp" />
          <img
            src="./images/casale_acquerello_hero.png"
            alt="Tenuta Tana di Volpe Acquerello"
            className="w-full h-full object-contain max-h-[460px] opacity-[0.20] filter contrast-[1.05]"
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
        <h1 className="font-script text-5xl sm:text-7xl md:text-8xl text-burgundy font-normal leading-tight mb-4 select-none drop-shadow-sm">
          Michele &amp; Miriana
        </h1>

        {/* Frase romantica direttamente sotto i nomi, senza elementi intermedi */}
        <p className="font-serif italic text-[#1a1a1a] text-base sm:text-xl max-w-lg mx-auto mb-6 font-light leading-relaxed">
          «Una promessa che dura per sempre, una festa che comincia oggi insieme a voi.»
        </p>

        {/* Box Data Pulito: SOLO 2 LUGLIO 2027 */}
        <div className="py-2 px-8 border-y border-champagne max-w-xs sm:max-w-sm mx-auto mb-2 bg-white/90 backdrop-blur-sm rounded-xl shadow-sm">
          <p className="font-serif text-2xl sm:text-3xl font-medium tracking-wide text-burgundy">
            2 Luglio 2027
          </p>
        </div>
      </div>
    </header>
  );
};

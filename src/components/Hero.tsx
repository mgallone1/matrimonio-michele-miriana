import React from 'react';

export const Hero: React.FC = () => {
  return (
    <header className="relative pt-10 sm:pt-16 pb-6 sm:pb-8 px-4 text-center overflow-hidden flex items-center justify-center bg-white">
      {/* 
        Dalia acquerellata in alto nell'angolo:
        Raffinata, sfumata, nei toni bordeaux, blush e salvia per portare calore e luce
      */}
      <div className="absolute top-0 right-0 sm:top-2 sm:right-2 w-28 sm:w-44 md:w-56 pointer-events-none select-none z-0 opacity-85 rotate-6 transform translate-x-4 -translate-y-4 sm:translate-x-2 sm:translate-y-0">
        <img
          src="./images/dalia_angolo_acquerello.png"
          alt="Dalia botanica acquerellata"
          className="w-full h-auto object-contain filter drop-shadow-sm"
          loading="eager"
        />
      </div>

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

        {/* Data del matrimonio senza riquadro, in font script come i nomi (+50% dimensione) */}
        <div className="max-w-md mx-auto mb-2 text-center">
          <p className="font-script text-4xl sm:text-5xl md:text-6xl text-burgundy font-normal select-none leading-tight">
            2 Luglio 2027
          </p>
        </div>
      </div>
    </header>
  );
};

import React from 'react';

export const Hero: React.FC = () => {
  return (
    <header className="relative pt-8 sm:pt-12 pb-6 sm:pb-8 px-4 text-center overflow-hidden flex items-center justify-center bg-white">
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
        {/* 
          Cornice floreale di Dalie in alto:
          Corolle più grandi, distanziate ed eleganti con foglie di salvia ed eucalipto,
          posizionata in cima sopra la scritta Partecipazione di Nozze
        */}
        <div className="max-w-md sm:max-w-xl md:max-w-2xl mx-auto mb-2 sm:mb-3 pointer-events-none select-none">
          <img
            src="./images/cornice_dalie_alta.png"
            alt="Cornice botanica di dalie in alto"
            className="w-full h-auto object-contain filter drop-shadow-sm opacity-95"
            loading="eager"
          />
        </div>

        {/* Sovratitolo in Verde Salvia Nobile (#626a3a) */}
        <p className="font-sans text-xs uppercase tracking-[0.35em] text-sage font-medium mb-3">
          Partecipazione di Nozze
        </p>

        {/* NOMI CENTRALI GRANDI con Great Vibes in Bordeaux nobile (#4a0d1b) */}
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

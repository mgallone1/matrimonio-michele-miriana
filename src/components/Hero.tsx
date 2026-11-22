import React from 'react';

export const Hero: React.FC = () => {
  return (
    <header className="relative pt-0 pb-6 sm:pb-8 px-4 text-center overflow-hidden flex flex-col items-center justify-center bg-white">
      {/* 
        Fregio / Banner floreale dritto edge-to-edge a tutta larghezza in cima:
        Con sfumatura morbida ai bordi (stile acquerello cappella) per fondersi dolcemente con lo sfondo bianco
      */}
      <div className="w-full max-w-5xl mx-auto -mt-2 sm:-mt-4 mb-1 pointer-events-none select-none z-10 px-0 sm:px-2">
        <img
          src="./images/fregio_dalie_top_sfumato.png"
          alt="Bordo floreale di dalie sfumato ad acquerello"
          className="w-full h-auto object-cover max-h-[160px] sm:max-h-[220px] object-top filter contrast-[1.02] opacity-95"
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

      <div className="max-w-3xl mx-auto relative z-10 w-full -mt-2 sm:-mt-3">
        {/* Sovratitolo in Verde Salvia Nobile (#626a3a) con spaziatura inferiore aurea aumentata */}
        <p className="font-sans text-xs uppercase tracking-[0.35em] text-sage font-medium mb-3 sm:mb-4">
          Partecipazione di Nozze
        </p>

        {/* NOMI CENTRALI GRANDI con Alex Brush in Bordeaux nobile (#4a0d1b) e tratto sottile ed elegante */}
        <h1 className="font-script text-6xl sm:text-8xl md:text-9xl text-burgundy font-normal leading-tight mb-4 select-none drop-shadow-sm tracking-wide">
          Michele &amp; Miriana
        </h1>

        {/* Frase romantica direttamente sotto i nomi, senza elementi intermedi */}
        <p className="font-serif italic text-[#1a1a1a] text-base sm:text-xl max-w-xl mx-auto mb-4 font-light leading-relaxed">
          &ldquo;E se la vita &egrave; un viaggio fatto di strade imprevedibili, noi abbiamo scelto di percorrerle insieme, tenendoci per mano, ogni giorno.&rdquo;
        </p>

        {/* Data del matrimonio senza riquadro, in font script Alex Brush come i nomi */}
        <div className="max-w-md mx-auto mb-1 text-center">
          <p className="font-script text-5xl sm:text-6xl md:text-7xl text-burgundy font-normal select-none leading-tight tracking-wide">
            2 Luglio 2027
          </p>
        </div>
      </div>
    </header>
  );
};

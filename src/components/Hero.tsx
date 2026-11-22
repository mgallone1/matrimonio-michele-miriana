import React from 'react';

export const Hero: React.FC = () => {
  return (
    <header className="relative pt-32 sm:pt-36 md:pt-40 pb-8 sm:pb-12 px-4 text-center overflow-hidden flex flex-col items-center justify-center bg-white">
      {/* 
        Ghirlanda Floreale Botanica di Dalie e Fogliame zoomata dall'angolo:
        - I fiori principali partono direttamente dall'angolo superiore destro (tagliati a filo in alto e a destra per dare massimo zoom e presenza scultorea)
        - Il ramo di foglie a sinistra si estende organicamente finendo poco oltre la 'P' di Partecipazione
        - Dimensioni calibrate: w-[355px] sm:w-[480px] md:w-[600px] lg:w-[700px]
      */}
      <div className="absolute top-0 right-0 w-[355px] sm:w-[480px] md:w-[600px] lg:w-[700px] pointer-events-none select-none z-0">
        <img
          src="./images/corner_floreale_top_right.png"
          alt="Angolo floreale di dalie ad acquerello esteso dall'angolo"
          className="w-full h-auto object-contain filter contrast-[1.02] opacity-95"
          loading="eager"
        />
      </div>

      {/* 
        Acquerello autentico della Cappella storica con gli Sposi su BIANCO PURO (#FFFFFF):
        Opacità calibrata al 20%, luminoso, fresco e discreto.
      */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center overflow-hidden">
        <picture className="w-full max-w-5xl h-full flex items-center justify-center">
          <source srcSet="./images/cappella_acquerello_sposi_v2.png" type="image/png" />
          <img
            src="./images/cappella_acquerello_sposi_v2.png"
            alt="Tenuta Tana di Volpe Acquerello con gli Sposi"
            className="w-full h-full object-contain max-h-[460px] opacity-[0.20] filter contrast-[1.05]"
            loading="eager"
          />
        </picture>
      </div>

      {/* 
        Contenitore Testi compatto e perfettamente distanziato:
        Abbassato di pochissimo (pt-32 sm:pt-36 + mt-2) per evitare qualsiasi sovrapposizione con le foglie del bouquet.
      */}
      <div className="max-w-3xl mx-auto relative z-10 w-full mt-2 sm:mt-3">
        {/* Sovratitolo in Verde Salvia Nobile (#626a3a) con spaziatura inferiore aurea aumentata */}
        <p className="font-sans text-xs uppercase tracking-[0.35em] text-sage font-medium mb-3 sm:mb-4">
          Partecipazione di Nozze
        </p>

        {/* 
          NOMI IN CORSIVO ORIGINALE ALEX BRUSH (Michele in alto a sinistra, Miriana in basso a destra)
          con la & gigante posizionata esattamente al centro in X e Y, posta SOTTO come livello
          e con il colore della dalia chiara in alto a sinistra (#d2928d / #e8a59f)
        */}
        <h1 className="font-script text-burgundy font-normal select-none drop-shadow-sm mb-4 tracking-wide max-w-md mx-auto relative">
          {/* 
            La & gigante al centro perfetto (X e Y):
            Posta SOTTO come livello (z-0), con il colore rosato cipria della dalia chiara in alto a sinistra
          */}
          <span 
            className="font-serif italic text-7xl sm:text-8xl md:text-9xl text-[#d2928d]/70 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 leading-none pointer-events-none z-0 select-none"
            aria-hidden="true"
          >
            &amp;
          </span>

          {/* Michele in alto a sinistra, z-10 sopra la & */}
          <span className="block text-center -translate-x-6 sm:-translate-x-12 text-6xl sm:text-7xl md:text-8xl leading-none relative z-10">
            Michele
          </span>

          {/* Spazio verticale armonico */}
          <div className="h-2 sm:h-4" />

          {/* Miriana in basso a destra, z-10 sopra la & */}
          <span className="block text-center translate-x-6 sm:translate-x-12 text-6xl sm:text-7xl md:text-8xl leading-none relative z-10">
            Miriana
          </span>
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

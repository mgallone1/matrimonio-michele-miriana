import React from 'react';
import { Magnetic } from './reactbits/Magnetic';
import { TattooHeart } from './TattooHeart';
import { DahliaFlower } from './DahliaFlower';

export const Hero: React.FC = () => {
  return (
    <header className="relative pt-12 sm:pt-16 pb-16 sm:pb-20 px-4 text-center overflow-hidden min-h-[520px] sm:min-h-[580px] flex items-center justify-center bg-white">
      {/* 
        Acquerello della Tenuta come SFONDO TENUE su BIANCO PURO (#FFFFFF):
        Opacità al 26%, visibile con naturalezza dietro la composizione.
      */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center overflow-hidden">
        <picture className="w-full max-w-5xl h-full flex items-center justify-center">
          <source srcSet="./images/webp/casale_acquerello_hero.webp" type="image/webp" />
          <img
            src="./images/casale_acquerello_hero.png"
            alt="Tenuta Tana di Volpe Acquerello"
            className="w-full h-full object-contain max-h-[520px] opacity-[0.26] filter contrast-[1.05]"
            loading="eager"
          />
        </picture>
      </div>

      {/* Dalia Acquerello artistica e discreta all'angolo superiore */}
      <div className="absolute top-4 right-4 sm:top-8 sm:right-12 pointer-events-none opacity-40 hover:opacity-70 transition-opacity">
        <DahliaFlower size={72} />
      </div>

      <div className="max-w-3xl mx-auto relative z-10 w-full">
        {/* Sovratitolo in Verde Salvia Nobile (#4f523f) */}
        <p className="font-sans text-xs uppercase tracking-[0.35em] text-sage font-medium mb-4">
          Partecipazione di Nozze
        </p>

        {/* NOMI CENTRALI GRANDI con Great Vibes in Bordeaux nobile (#530c1e) */}
        <h1 className="font-script text-5xl sm:text-7xl md:text-8xl text-burgundy font-normal leading-tight mb-4 select-none drop-shadow-sm">
          Michele &amp; Miriana
        </h1>

        {/* Divisore nobile con il Tatuaggio M&M affiancato da piccole Dalie in palette */}
        <div className="flex items-center justify-center gap-3 my-4">
          <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-champagne to-champagne" />
          <DahliaFlower size={18} />
          <TattooHeart className="w-5 h-5 text-burgundy/90 mx-1" />
          <DahliaFlower size={18} />
          <div className="w-12 sm:w-16 h-px bg-gradient-to-l from-transparent via-champagne to-champagne" />
        </div>

        {/* Frase Romantica in Nero profondo (#1a1a1a) per massima nitidezza */}
        <p className="font-serif italic text-[#1f1f1f] text-base sm:text-xl max-w-lg mx-auto mb-8 font-normal leading-relaxed">
          «Una promessa che dura per sempre, una festa che comincia oggi insieme a voi.»
        </p>

        {/* Box Data Pulito: SOLO LA DATA, senza giorno della settimana, orario o luogo */}
        <div className="py-4 px-8 border-y border-champagne max-w-xs sm:max-w-sm mx-auto mb-8 bg-white/95 backdrop-blur-sm rounded-xl shadow-sm">
          <p className="font-serif text-2xl sm:text-3xl font-medium tracking-wide text-burgundy">
            2 Luglio 2027
          </p>
        </div>

        {/* Indicazione per scorrere al programma e scoprire i dettagli */}
        <div className="flex justify-center mt-2">
          <Magnetic distance={0.25}>
            <a
              href="#cerimonia"
              className="text-[#1f1f1f]/80 hover:text-burgundy transition-colors py-2 px-4 rounded-full border border-champagne text-xs font-sans uppercase tracking-[0.22em] inline-flex items-center gap-2 bg-white/80 shadow-sm"
              aria-label="Scopri la cerimonia e il programma"
            >
              <span>Scopri la Cerimonia &amp; Ricevimento ↓</span>
            </a>
          </Magnetic>
        </div>
      </div>
    </header>
  );
};

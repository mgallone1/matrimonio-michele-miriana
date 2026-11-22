import React from 'react';
import { Magnetic } from './reactbits/Magnetic';
import { TattooHeart } from './TattooHeart';

export const Hero: React.FC = () => {
  return (
    <header className="relative pt-12 sm:pt-16 pb-20 sm:pb-24 px-4 text-center overflow-hidden min-h-[580px] sm:min-h-[640px] flex items-center justify-center bg-white">
      {/* 
        Acquerello della Tenuta come SFONDO TENUE su BIANCO PURO (#FFFFFF):
        Opacità al 28%, visibile con naturalezza dietro la composizione.
      */}
      <div className="absolute inset-0 pointer-events-none -z-10 flex items-center justify-center overflow-hidden">
        <picture className="w-full max-w-5xl h-full flex items-center justify-center">
          <source srcSet="/images/webp/casale_acquerello_hero.webp" type="image/webp" />
          <img
            src="/images/casale_acquerello_hero.png"
            alt="Tenuta Tana di Volpe Acquerello"
            className="w-full h-full object-contain max-h-[540px] opacity-[0.28] filter contrast-[1.05]"
            loading="eager"
          />
        </picture>
      </div>

      <div className="max-w-3xl mx-auto relative z-10 w-full">
        {/* Sovratitolo in Verde Salvia Nobile (#4f523f) */}
        <p className="font-sans text-xs uppercase tracking-[0.35em] text-sage font-medium mb-4">
          Partecipazione di Nozze
        </p>

        {/* NOMI CENTRALI GRANDI con Great Vibes in Bordeaux (#530c1e) */}
        <h1 className="font-script text-5xl sm:text-7xl md:text-8xl text-burgundy font-normal leading-tight mb-4 select-none drop-shadow-sm">
          Michele &amp; Miriana
        </h1>

        {/* Divisore con il Simbolo Tatuaggio in miniatura */}
        <div className="floral-divider">
          <TattooHeart className="w-5 h-5 text-burgundy/80" />
        </div>

        {/* Frase Romantica in Espresso (#523c2f) */}
        <p className="font-serif italic text-espresso text-base sm:text-xl max-w-lg mx-auto mb-10 font-light leading-relaxed">
          «Una promessa che dura per sempre, una festa che comincia oggi insieme a voi.»
        </p>

        {/* Box Data e Luogo in Bianco con bordo dorato Champagne (#dacdbd) e Data fissa ben visibile */}
        <div className="py-5 px-6 border-y border-champagne max-w-xl mx-auto mb-10 space-y-2 bg-white/95 backdrop-blur-sm rounded-xl shadow-sm">
          <p className="font-serif text-2xl sm:text-3xl font-medium tracking-wide text-burgundy">
            Venerdì, 2 Luglio 2027 • Ore 16:30
          </p>
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-sage font-semibold">
            Rito Civile &amp; Ricevimento
          </p>
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-espresso/70">
            Tenuta Tana di Volpe • Albanella, Salerno
          </p>
        </div>

        {/* Pulsanti: Bordeaux e Verde Salvia */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <Magnetic distance={0.25}>
            <a href="#rsvp" className="btn-primary shadow-lg">
              Conferma la Presenza
            </a>
          </Magnetic>
          <Magnetic distance={0.25}>
            <a href="#location" className="btn-secondary">
              Scopri la Tenuta
            </a>
          </Magnetic>
        </div>

        <div className="flex justify-center">
          <a
            href="#timeline"
            className="text-espresso/50 hover:text-burgundy transition-colors p-2 font-sans text-xs uppercase tracking-[0.25em]"
            aria-label="Scorri al programma"
          >
            Il Programma delle Nozze ↓
          </a>
        </div>
      </div>
    </header>
  );
};

import React from 'react';
import { Clock, MapPin, Heart, Sparkles } from 'lucide-react';
import { DahliaFlower } from './DahliaFlower';

export const CeremonyCard: React.FC = () => {
  return (
    <section id="cerimonia" className="py-12 px-4 max-w-4xl mx-auto scroll-mt-14">
      {/* Blocco Nobilitato Unico: Data, Orario, Luogo & Tipologia Rito */}
      <div className="relative rounded-3xl bg-white border border-champagne p-8 sm:p-12 shadow-sm text-center overflow-hidden">
        {/* Dalie ad acquerello decorative agli angoli */}
        <div className="absolute -top-4 -left-4 pointer-events-none opacity-40">
          <DahliaFlower size={80} />
        </div>
        <div className="absolute -bottom-4 -right-4 pointer-events-none opacity-40">
          <DahliaFlower size={80} />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne-light/80 border border-champagne mb-4">
            <Sparkles className="w-3.5 h-3.5 text-burgundy" />
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-espresso font-medium">
              Rito Civile &amp; Ricevimento
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#1a1a1a] font-normal mb-3">
            La Nostra Giornata
          </h2>

          <p className="font-serif italic text-[#333333] text-base sm:text-lg mb-8 font-light">
            Saremo felici di accogliervi per celebrare insieme il momento del sì e proseguire con i festeggiamenti fino a sera.
          </p>

          {/* Griglia Informazioni a contrasto elegante */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-champagne py-6 mb-8 text-left bg-paper-subtle/40 rounded-2xl p-4">
            {/* Data e Giorno */}
            <div className="flex items-start gap-3 p-2">
              <div className="w-9 h-9 rounded-full bg-champagne-light border border-champagne flex items-center justify-center shrink-0 text-burgundy mt-0.5">
                <Heart className="w-4 h-4 fill-burgundy/10 text-burgundy" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-sage font-medium font-sans block mb-0.5">
                  Quando
                </span>
                <strong className="font-serif text-lg text-[#1a1a1a] block font-medium">
                  Venerdì
                </strong>
                <span className="text-xs text-[#444444] font-sans">
                  2 Luglio 2027
                </span>
              </div>
            </div>

            {/* Orario */}
            <div className="flex items-start gap-3 p-2 border-t sm:border-t-0 sm:border-l border-champagne/60 sm:pl-4">
              <div className="w-9 h-9 rounded-full bg-champagne-light border border-champagne flex items-center justify-center shrink-0 text-sage mt-0.5">
                <Clock className="w-4 h-4 text-sage" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-sage font-medium font-sans block mb-0.5">
                  Orario d'Inizio
                </span>
                <strong className="font-serif text-lg text-[#1a1a1a] block font-medium">
                  Ore 16:30
                </strong>
                <span className="text-xs text-[#444444] font-sans">
                  Arrivo ospiti e benvenuto
                </span>
              </div>
            </div>

            {/* Luogo */}
            <div className="flex items-start gap-3 p-2 border-t sm:border-t-0 sm:border-l border-champagne/60 sm:pl-4">
              <div className="w-9 h-9 rounded-full bg-champagne-light border border-champagne flex items-center justify-center shrink-0 text-burgundy mt-0.5">
                <MapPin className="w-4 h-4 text-burgundy" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-sage font-medium font-sans block mb-0.5">
                  Dove
                </span>
                <strong className="font-serif text-lg text-[#1a1a1a] block font-medium">
                  Tenuta Tana di Volpe
                </strong>
                <span className="text-xs text-[#444444] font-sans">
                  Albanella (Salerno) • Cilento
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#location"
              className="btn-secondary text-[11px] uppercase tracking-wider py-2.5 px-5 font-sans"
            >
              Guarda la Tenuta &amp; Indicazioni stradali
            </a>
            <a
              href="#timeline"
              className="btn-primary text-[11px] uppercase tracking-wider py-2.5 px-5 font-sans"
            >
              Scopri il Programma
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Clock, MapPin, Sparkles } from 'lucide-react';

export const CeremonyCard: React.FC = () => {
  return (
    <section id="cerimonia" className="pt-2 pb-12 sm:pb-16 px-4 max-w-4xl mx-auto scroll-mt-6 bg-white">
      {/* 
        Acquerello autentico della Cappella storica con bouganville 
        simbolo iconico della Tenuta Tana di Volpe - Posizionato subito in alto
      */}
      <div className="mb-8 max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-lg border border-champagne bg-white p-2.5 sm:p-3">
        <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] bg-[#faf8f5]">
          <img
            src="./images/cappella_acquerello.jpg"
            alt="La Cappella Storica di Tenuta Tana di Volpe dipinta ad acquerello"
            className="w-full h-full object-cover object-center filter contrast-[1.03]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-4 sm:p-5">
            <p className="text-white text-xs sm:text-sm font-sans tracking-wider uppercase font-medium drop-shadow-md">
              La Cappella Storica e i Giardini • Tenuta Tana di Volpe
            </p>
          </div>
        </div>
      </div>

      {/* Blocco Nobilitato Unico: Data, Orario, Luogo e Tipologia Rito */}
      <div className="relative rounded-3xl bg-white border border-champagne p-6 sm:p-10 shadow-sm text-center overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-champagne-light border border-champagne mb-3">
            <Sparkles className="w-3.5 h-3.5 text-burgundy" />
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-espresso font-medium">
              Rito Civile e Ricevimento
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#1a1a1a] font-normal mb-2.5">
            La Nostra Giornata
          </h2>

          <p className="font-serif italic text-[#333333] text-base sm:text-lg mb-6 font-light">
            Saremo felici di accogliervi per celebrare insieme il momento del sì e proseguire con i festeggiamenti tra i giardini in fiore e il verde delle colline cilentane.
          </p>

          {/* Griglia Informazioni a contrasto chiaro */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 border-y border-champagne py-5 mb-6 text-left bg-[#faf8f5] rounded-2xl p-5">
            {/* Orario */}
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-full bg-white border border-champagne flex items-center justify-center shrink-0 text-burgundy shadow-sm mt-0.5">
                <Clock className="w-5 h-5 text-burgundy" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-sage font-medium font-sans block mb-0.5">
                  Orario d'Inizio
                </span>
                <strong className="font-serif text-xl text-[#1a1a1a] block font-medium">
                  Ore 16:30
                </strong>
                <span className="text-xs text-[#555555] font-sans">
                  Venerdì 2 Luglio 2027 • Accoglienza e cerimonia
                </span>
              </div>
            </div>

            {/* Luogo */}
            <div className="flex items-start gap-3.5 border-t sm:border-t-0 sm:border-l border-champagne/60 pt-4 sm:pt-0 sm:pl-6">
              <div className="w-10 h-10 rounded-full bg-white border border-champagne flex items-center justify-center shrink-0 text-sage shadow-sm mt-0.5">
                <MapPin className="w-5 h-5 text-sage" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-sage font-medium font-sans block mb-0.5">
                  Location
                </span>
                <strong className="font-serif text-xl text-[#1a1a1a] block font-medium">
                  Tenuta Tana di Volpe
                </strong>
                <span className="text-xs text-[#555555] font-sans">
                  Via S. Nicola • Albanella (Salerno)
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="#location"
              className="btn-secondary text-xs uppercase tracking-wider py-2 px-5 font-sans"
            >
              Guarda la Tenuta e Indicazioni stradali
            </a>
            <a
              href="#timeline"
              className="btn-primary text-xs uppercase tracking-wider py-2 px-5 font-sans"
            >
              Scopri il Programma
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

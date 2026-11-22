import React from 'react';
import { Clock, MapPin } from 'lucide-react';

export const CeremonyCard: React.FC = () => {
  return (
    <section id="cerimonia" className="pt-2 pb-10 sm:pb-14 px-4 max-w-4xl mx-auto scroll-mt-6 bg-white">
      {/* 
        Acquerello autentico della Cappella storica con gli sposi 
        Sfumato con effetto delicato ai bordi senza stacchi netti o riquadri
      */}
      <div className="mb-6 max-w-2xl mx-auto text-center px-2">
        <div className="relative inline-block w-full">
          <img
            src="./images/cappella_acquerello_sposi_v2.png"
            alt="Tenuta Tana di Volpe dipinta ad acquerello con gli sposi"
            className="w-full h-auto max-h-[380px] object-contain mx-auto filter contrast-[1.03]"
            loading="eager"
          />
          <p className="font-serif italic text-sm sm:text-base text-[#444444] mt-2 font-normal tracking-wide">
            Tenuta Tana di Volpe
          </p>
        </div>
      </div>

      {/* Sezione Cerimonia e Ricevimento: stile aperto, raffinato ed essenziale senza riquadri rigidi */}
      <div className="relative text-center py-6 sm:py-8">
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-rose-mauve font-semibold mb-2">
            Rito Civile e Ricevimento
          </p>

          <h2 className="font-serif italic text-3xl sm:text-5xl text-[#1a1a1a] font-normal mb-3">
            La Nostra Giornata
          </h2>

          <p className="font-serif italic text-[#333333] text-base sm:text-lg mb-8 font-light">
            Saremo felici di accogliervi per celebrare insieme il momento del sì e proseguire con i festeggiamenti tra i giardini in fiore e il verde della tenuta.
          </p>

          {/* Griglia Informazioni fluida su fondo aperto */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-6 mb-8 text-left border-y border-champagne/40">
            {/* Orario */}
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-champagne/20 flex items-center justify-center shrink-0 text-burgundy mt-0.5">
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
            <div className="flex items-start gap-4 sm:border-l sm:border-champagne/40 sm:pl-8">
              <div className="w-11 h-11 rounded-full bg-champagne/20 flex items-center justify-center shrink-0 text-sage mt-0.5">
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
                  Via Provinciale, 19 • Matinella di Albanella (SA)
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

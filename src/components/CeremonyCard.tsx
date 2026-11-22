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

          <div className="mb-8 max-w-xl mx-auto">
            <p className="font-serif italic text-[#333333] text-base sm:text-lg font-light leading-relaxed">
              Saremo felici di accogliervi per celebrare insieme il momento del sì e proseguire con i festeggiamenti tra i giardini in fiore e il verde della tenuta.
            </p>
          </div>

          {/* 
            Griglia Informazioni: Orario e Location a sinistra,
            Composizione floreale verticale di fianco a destra ANCHE SU IPHONE (flex row affiancato sempre)
          */}
          <div className="relative border-y border-champagne/40 py-6 sm:py-8 mb-8">
            <div className="flex flex-row items-center justify-between gap-3 sm:gap-6 text-left">
              {/* Parte Sinistra (62%): Orario e Location */}
              <div className="flex-1 space-y-5 sm:space-y-6 z-10 min-w-0">
                {/* Orario */}
                <div className="flex items-start gap-2.5 sm:gap-4">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-champagne/20 flex items-center justify-center shrink-0 text-burgundy mt-0.5">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-burgundy" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[10px] sm:text-xs uppercase tracking-wider text-sage font-medium font-sans block mb-0.5 sm:mb-1">
                      Orario d'Inizio
                    </span>
                    <strong className="font-serif text-lg sm:text-2xl text-[#1a1a1a] block font-medium leading-tight">
                      Ore 16:30
                    </strong>
                    <span className="text-[11px] sm:text-xs text-[#555555] font-sans block leading-tight mt-0.5">
                      Venerdì 2 Luglio 2027
                    </span>
                  </div>
                </div>

                {/* Divisore interno */}
                <div className="border-t border-champagne/30 pt-4 sm:pt-5">
                  {/* Luogo */}
                  <div className="flex items-start gap-2.5 sm:gap-4">
                    <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-champagne/20 flex items-center justify-center shrink-0 text-sage mt-0.5">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-sage" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-[10px] sm:text-xs uppercase tracking-wider text-sage font-medium font-sans block mb-0.5 sm:mb-1">
                        Location
                      </span>
                      <strong className="font-serif text-lg sm:text-2xl text-[#1a1a1a] block font-medium leading-tight">
                        Tenuta Tana di Volpe
                      </strong>
                      <span className="text-[11px] sm:text-xs text-[#555555] font-sans block leading-tight mt-0.5">
                        Matinella di Albanella (SA)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Parte Destra (38%): Composizione floreale proporzionata sempre a fianco anche su iPhone */}
              <div className="w-[105px] sm:w-36 md:w-44 shrink-0 flex justify-end items-center pointer-events-none select-none z-10 pl-1">
                <img
                  src="./images/composizione_floreale_verticale.png"
                  alt="Composizione botanica ad acquerello con dalie e boccioli"
                  className="w-full h-auto max-h-[220px] sm:max-h-[280px] object-contain drop-shadow-sm"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* 
            Acquerello autentico della facciata con l'edera
            Con le stesse dimensioni e lo stesso sfocato morbido ai bordi della cappella
          */}
          <div className="mb-6 max-w-2xl mx-auto text-center px-2">
            <div className="relative inline-block w-full">
              <img
                src="./images/casale_acquerello_sfumato.png"
                alt="Facciata storica con edera di Tenuta Tana di Volpe ad acquerello"
                className="w-full h-auto max-h-[380px] object-contain mx-auto filter contrast-[1.03]"
                loading="lazy"
              />
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

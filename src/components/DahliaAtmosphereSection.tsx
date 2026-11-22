import React from 'react';
import { Sparkles } from 'lucide-react';

export const DahliaAtmosphereSection: React.FC = () => {
  return (
    <section className="py-14 px-4 max-w-5xl mx-auto bg-white">
      <div className="relative rounded-3xl bg-[#faf8f5] border border-champagne overflow-hidden shadow-sm p-6 sm:p-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Foto reale dell'allestimento con dalie e candelieri dorati */}
          <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-md border border-champagne bg-white">
            <img
              src="./images/dalie_composizione_tavoli.jpg"
              alt="Allestimento tavoli di nozze con dalie in palette e candelabri dorati"
              className="w-full h-full object-cover filter contrast-[1.04]"
              loading="lazy"
            />
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[11px] font-sans uppercase tracking-widest text-burgundy font-medium border border-champagne">
              Ispirazione Allestimento
            </div>
          </div>

          {/* Testo poetico dedicato alle Dalie e all'atmosfera */}
          <div className="space-y-4 text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-champagne-light text-sage border border-champagne text-xs font-sans font-medium uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-burgundy" />
              <span>La Nostra Atmosfera Floreale</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-[#1a1a1a] font-normal leading-tight">
              Le Dalie, la Luce e i Colori del Nostro Ricevimento
            </h3>

            <p className="font-serif italic text-[#333333] text-sm sm:text-base leading-relaxed font-light">
              «I toni caldi del bordeaux, le sfumature delicate del blush e il tocco dorato delle candele: abbiamo scelto le dalie per raccontare la bellezza e la gioia della nostra giornata insieme a voi.»
            </p>

            <div className="pt-2 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden border border-champagne shadow-sm shrink-0">
                <img
                  src="./images/dalia_acquerello_dettaglio.jpg"
                  alt="Dettaglio Dalia ad acquerello"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-xs font-sans text-[#555555]">
                <strong className="block text-[#1a1a1a]">Fiori Ufficiali delle Nozze</strong>
                <span>Dalie in palette nobile, cristalli e accenti naturali</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

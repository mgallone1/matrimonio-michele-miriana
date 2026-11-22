import React from 'react';
import { Shirt, Footprints, Hotel, HelpCircle } from 'lucide-react';

export const DetailsSection: React.FC = () => {
  const accommodations = [
    {
      name: 'Camere Tana di Volpe',
      type: 'All’interno della Tenuta',
      note: 'Disponibilità limitata, contattare direttamente gli sposi',
    },
    {
      name: 'Hotel & Relais a Paestum',
      type: 'A circa 15 min dalla Tenuta',
      note: 'Strutture vista templi o vicine al mare',
    },
    {
      name: 'B&B & Agriturismi ad Albanella',
      type: 'A 5-10 min dalla Tenuta',
      note: 'Immersi nella tranquillità delle colline cilentane',
    },
  ];

  return (
    <section id="details" className="py-16 px-4 max-w-4xl mx-auto scroll-mt-10">
      <div className="text-center mb-12">
        <p className="font-serif italic text-espresso/70 text-base mb-1">Tutto quello che c’è da sapere</p>
        <h2 className="font-serif text-3xl sm:text-4xl text-espresso font-medium">
          Dettagli &amp; Consigli Utili
        </h2>
        <div className="flex justify-center my-4">
          <img src="/icons/dahlia-divider.svg" alt="" className="h-6 opacity-60 text-burgundy max-w-xs" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Dress Code & Scarpe */}
        <div className="py-6 sm:py-8">
          <div className="w-12 h-12 rounded-full bg-champagne/30 text-burgundy flex items-center justify-center mb-4">
            <Shirt className="w-6 h-6" />
          </div>
          <h3 className="font-serif italic text-2xl font-normal text-espresso mb-2">
            Dress Code: Elegante Estivo
          </h3>
          <p className="text-espresso/75 text-sm leading-relaxed mb-4 font-serif">
            Gradito abito scuro o spezzato estivo per i signori e abito lungo o cocktail per le signore. Ispiratevi ai colori caldi della natura e dell’estate cilentana.
          </p>

          <div className="py-3.5 border-t border-champagne/40 flex items-start gap-3">
            <Footprints className="w-5 h-5 text-sage shrink-0 mt-0.5" />
            <p className="text-xs text-espresso/80">
              <strong>Nota Calzature:</strong> La cerimonia civile e l’aperitivo si terranno sui prati all’inglese della tenuta. Si consigliano tacchi comodi, blocchi o zeppe (forniremo comunque salva-tacchi all’ingresso!).
            </p>
          </div>
        </div>

        {/* Dove Dormire */}
        <div className="py-6 sm:py-8">
          <div className="w-12 h-12 rounded-full bg-champagne/30 text-burgundy flex items-center justify-center mb-4">
            <Hotel className="w-6 h-6" />
          </div>
          <h3 className="font-serif italic text-2xl font-normal text-espresso mb-2">
            Alloggi &amp; Pernottamento
          </h3>
          <p className="text-espresso/75 text-sm leading-relaxed mb-4 font-serif">
            Per chi desidera fermarsi per il weekend e scoprire il Cilento o i Templi di Paestum, ecco le migliori opzioni di pernottamento:
          </p>

          <div className="space-y-2.5">
            {accommodations.map((acc, idx) => (
              <div key={idx} className="py-2.5 border-b border-champagne/30 text-xs">
                <div className="flex justify-between items-center mb-0.5">
                  <span className="font-semibold text-espresso">{acc.name}</span>
                  <span className="text-[10px] text-sage font-medium uppercase">{acc.type}</span>
                </div>
                <span className="text-espresso/60">{acc.note}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Box Domande & Contatti aperto */}
      <div className="py-6 text-center max-w-xl mx-auto border-t border-champagne/40">
        <HelpCircle className="w-6 h-6 text-burgundy mx-auto mb-2" />
        <h4 className="font-serif text-lg font-medium text-espresso mb-1">
          Hai domande o esigenze particolari?
        </h4>
        <p className="text-xs text-espresso/70 mb-3">
          Non esitare a contattarci direttamente per qualsiasi necessità logistica.
        </p>
        <p className="text-sm font-serif font-medium text-burgundy">
          Michele &amp; Miriana
        </p>
      </div>
    </section>
  );
};

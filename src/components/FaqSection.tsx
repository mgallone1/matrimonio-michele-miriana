import React, { useState } from 'react';
import { ChevronDown, Hotel } from 'lucide-react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const faqs: FaqItem[] = [
    {
      id: 'faq-1',
      question: 'Entro quale data dobbiamo dare conferma della nostra presenza?',
      answer:
        'Vi preghiamo gentilmente di inviare la vostra conferma entro e non oltre il 30 Aprile 2027 attraverso l’apposito modulo RSVP presente su questo sito, indicando anche eventuali accompagnatori e intolleranze.',
    },
    {
      id: 'faq-2',
      question: 'C’è un parcheggio disponibile all’interno della Tenuta?',
      answer:
        'Sì! Tenuta Tana di Volpe dispone di un ampio parcheggio interno privato e gratuito a disposizione di tutti gli invitati, con personale per l’accoglienza all’arrivo.',
    },
    {
      id: 'faq-3',
      question: 'L’evento si svolgerà all’aperto o al chiuso? Cosa succede in caso di pioggia?',
      answer:
        'Il rito civile e l’aperitivo al tramonto si terranno nei giardini all’aperto della tenuta. In caso di condizioni meteo avverse o temperature estive elevate, la tenuta dispone di sale climatizzate e di ampi porticati storici coperti che garantiscono totale serenità e comfort.',
    },
    {
      id: 'faq-4',
      question: 'Qual è il dress code consigliato e che scarpe scegliere?',
      answer:
        'Dress Code: Elegante Estivo. Ispiratevi ai toni della natura, del blush e dell’estate cilentana. Per le signore: la cerimonia e l’aperitivo si svolgeranno sui prati all’inglese, consigliamo scarpe con tacco comodo, plateau o zeppa.',
    },
    {
      id: 'faq-5',
      question: 'Possiamo portare i bambini? Ci sarà un menu speciale per loro?',
      answer:
        'Assolutamente sì! I bambini sono i benvenuti e avranno a disposizione un menu baby dedicato e spazi all’aperto per giocare in sicurezza. Ricordatevi di indicarli nel modulo RSVP.',
    },
    {
      id: 'faq-6',
      question: 'Come posso segnalare allergie, celiachia o diete particolari?',
      answer:
        'Nel modulo RSVP troverete campi dedicati a intolleranze alimentari, allergie, celiachia o scelte vegetariane/vegane per voi e per ciascun accompagnatore. Lo chef preparerà portate dedicate.',
    },
    {
      id: 'faq-7',
      question: 'Possiamo scattare fotografie e condividerle?',
      answer:
        'Durante il rito civile vi invitiamo a vivere il momento con il cuore e a lasciare spazio ai fotografi ufficiali. Per tutto il resto della festa siete caldamente invitati a scattare! Troverete dei QR code sui tavoli per caricare i vostri scatti migliori.',
    },
    {
      id: 'faq-8',
      question: 'A chi possiamo rivolgerci il giorno delle nozze per dubbi urgenti?',
      answer:
        'Per permetterci di goderci appieno la giornata, per qualsiasi necessità logistica o domanda dell’ultimo minuto troverete a disposizione i nostri testimoni e il wedding coordinator della Tenuta.',
    },
  ];

  const accommodations = [
    {
      name: 'Camere Tenuta Tana di Volpe',
      type: 'All’interno della Tenuta',
      note: 'Disponibilità limitata per parenti stretti, contattare gli sposi',
    },
    {
      name: 'Relais & Hotel a Paestum',
      type: 'A circa 15 min dalla Tenuta',
      note: 'Strutture vicine al Parco Archeologico dei Templi o al mare',
    },
    {
      name: 'B&B & Agriturismi ad Albanella',
      type: 'A 5-10 min dalla Tenuta',
      note: 'Accoglienti strutture immerse nel verde delle colline salernitane',
    },
  ];

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 px-4 max-w-4xl mx-auto scroll-mt-10 bg-white">
      <div className="text-center mb-16">
        <p className="font-sans text-xs uppercase tracking-[0.35em] text-sage font-medium mb-3">
          Domande Frequenti &amp; Info
        </p>
        <h2 className="font-serif text-3xl sm:text-5xl text-espresso font-normal">
          Dettagli &amp; Consigli Utili
        </h2>
        <div className="floral-divider">
          <img src="/icons/dahlia.svg" alt="" className="w-4 h-4 text-blush opacity-90" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-12">
        <div className="lg:col-span-2 space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-champagne bg-white shadow-sm overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-3 text-espresso hover:text-burgundy transition-colors"
                >
                  <span className="font-serif text-lg sm:text-xl font-normal">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-sage shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-burgundy' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-espresso/75 font-sans leading-relaxed border-t border-champagne/40 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="p-7 rounded-3xl white-card space-y-4">
          <div className="flex items-center gap-2.5 text-espresso font-serif text-xl font-normal pb-3 border-b border-champagne">
            <Hotel className="w-5 h-5 text-sage" />
            <span>Dove Soggiornare</span>
          </div>

          <p className="text-xs text-espresso/70 font-sans leading-relaxed">
            Per chi desidera fermarsi per il weekend e visitare Paestum o la costa cilentana:
          </p>

          <div className="space-y-3">
            {accommodations.map((acc, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-white border border-champagne text-xs">
                <span className="font-semibold text-espresso block text-sm">{acc.name}</span>
                <span className="text-[10px] uppercase tracking-wider text-sage font-medium block my-0.5">
                  {acc.type}
                </span>
                <span className="text-espresso/60 block">{acc.note}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

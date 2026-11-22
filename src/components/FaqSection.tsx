import React, { useState } from 'react';
import { ChevronDown, Hotel } from 'lucide-react';
import { DahliaFlower } from './DahliaFlower';

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
      question: 'Avete previsto una navetta o transfer?',
      answer:
        'Sì! Per chi arriva in treno alla stazione di Paestum/Capaccio o per gli ospiti che alloggiano nelle vicinanze senza automobile, è possibile richiedere il servizio navetta selezionando l’opzione direttamente nel modulo RSVP.',
    },
  ];

  const accommodations = [
    {
      name: 'B&B & Agriturismi Tenuta Tana di Volpe',
      zone: 'Albanella (a 2-5 min dalla Tenuta)',
      note: 'Strutture immerse negli uliveti convenzionate per le nozze',
    },
    {
      name: 'Hotel & Resort Zona Paestum Templi',
      zone: 'Capaccio Paestum (12-15 min)',
      note: 'Strutture 4 stelle vicine al Parco Archeologico e al mare',
    },
  ];

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 px-4 max-w-5xl mx-auto scroll-mt-10 bg-white">
      <div className="text-center mb-16">
        <p className="font-sans text-xs uppercase tracking-[0.35em] text-sage font-medium mb-3">
          Domande Frequenti &amp; Info
        </p>
        <h2 className="font-serif text-3xl sm:text-5xl text-[#1a1a1a] font-normal">
          Dettagli &amp; Consigli Utili
        </h2>
        <div className="floral-divider">
          <DahliaFlower size={18} />
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
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-3 text-[#1a1a1a] hover:text-burgundy transition-colors"
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
                  <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-[#333333] font-sans leading-relaxed border-t border-champagne/40 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="p-7 rounded-3xl white-card space-y-4">
          <div className="flex items-center gap-2.5 text-[#1a1a1a] font-serif text-xl font-normal pb-3 border-b border-champagne">
            <Hotel className="w-5 h-5 text-sage" />
            <span>Dove Soggiornare</span>
          </div>

          <p className="text-xs text-[#444444] font-sans leading-relaxed">
            Per chi desidera pernottare nei dintorni della tenuta, ecco alcune zone consigliate nelle immediate vicinanze:
          </p>

          <div className="space-y-3 pt-2">
            {accommodations.map((acc, idx) => (
              <div key={idx} className="p-3.5 rounded-xl bg-paper-subtle/50 border border-champagne/70 text-xs">
                <strong className="block font-medium text-[#1a1a1a] font-serif text-sm">
                  {acc.name}
                </strong>
                <span className="text-sage block mt-0.5 font-sans">{acc.zone}</span>
                <span className="text-[#666666] block mt-1 font-sans text-[11px]">{acc.note}</span>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-[#666666] font-sans pt-2 border-t border-champagne/40">
            Per suggerimenti personalizzati o supporto con le prenotazioni, scriveteci nel modulo RSVP.
          </p>
        </div>
      </div>
    </section>
  );
};

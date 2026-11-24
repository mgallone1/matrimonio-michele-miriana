import React from 'react';
import { motion } from 'framer-motion';

interface TimelineStep {
  time: string;
  title: string;
  subtitle: string;
  description: string;
}

export const Timeline: React.FC = () => {
  const steps: TimelineStep[] = [
    {
      time: '16:30',
      title: 'Arrivo degli Ospiti & Benvenuto',
      subtitle: 'La Corte Storica di Tenuta Tana di Volpe',
      description: 'Accoglienza fresca tra calici di bollicine, musica soffusa e la brezza collinare.',
    },
    {
      time: '17:00',
      title: 'Rito Civile di Nozze',
      subtitle: 'Il Prato all’Inglese tra gli Ulivi',
      description: 'Lo scambio delle nostre promesse e delle fedi, circondati dal vostro affetto e dai giardini.',
    },
    {
      time: '18:15',
      title: 'Aperitivo & Isole Gastronomiche',
      subtitle: 'Il Giardino delle Bouganville',
      description: 'Specialità cilentane, show cooking a vista e brindisi al tramonto sulle colline.',
    },
    {
      time: '20:00',
      title: 'Cena Nuziale Placée',
      subtitle: 'La Terrazza degli Ulivi',
      description: 'Un percorso di sapori tipici campani, abbinamenti di vini e atmosfera romantica.',
    },
    {
      time: '22:30',
      title: 'Taglio della Torta & Sweet Table',
      subtitle: 'La Corte Illuminata dai Filari di Luci',
      description: 'La torta nuziale, il buffet dei dolci, la fontana di cioccolato e il brindisi d’augurio.',
    },
    {
      time: '23:30',
      title: 'Open Bar & DJ Set',
      subtitle: 'Fino a Notte Fonda',
      description: 'Cocktail d’autore, musica, balli scatenati e festeggiamenti sotto le stelle.',
    },
  ];

  return (
    <section id="timeline" className="pt-4 sm:pt-6 pb-10 sm:pb-12 px-4 max-w-4xl mx-auto scroll-mt-10 bg-white">
      {/* 
        Acquerello autentico della Cerimonia nel Giardino
        Con le stesse dimensioni, proporzioni e sfocato rettangolare morbido ai bordi della facciata
      */}
      <div className="mb-5 sm:mb-6 max-w-2xl mx-auto text-center px-2">
        <div className="relative inline-block w-full">
          <img
            src="./images/cerimonia_giardino_sfumato.png?v=2"
            alt="Rito civile ad acquerello tra gli alberi di Tenuta Tana di Volpe"
            className="w-full h-auto max-h-[380px] object-contain mx-auto filter contrast-[1.03]"
            loading="lazy"
          />
        </div>
      </div>

      <div className="text-center mb-12">
        <p className="font-sans text-xs uppercase tracking-[0.35em] text-sage font-medium mb-3">
          I Momenti della Giornata
        </p>
        <h2 className="font-serif text-3xl sm:text-5xl text-[#1a1a1a] font-normal">
          Il Programma delle Nozze
        </h2>
      </div>

      <div className="relative">
        {/* Accento floreale acquerellato discreto sul lato destro del programma */}
        <div className="absolute -top-12 -right-8 w-24 sm:w-36 pointer-events-none select-none opacity-40 hidden md:block">
          <img
            src="./images/dalia_scura_burgundy.png"
            alt=""
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>

        <div className="absolute left-6 sm:left-1/2 top-4 bottom-4 w-[1px] bg-champagne -translate-x-1/2 hidden sm:block" />
        <div className="absolute left-6 top-4 bottom-4 w-[1px] bg-champagne sm:hidden" />

        <div className="space-y-10 sm:space-y-14">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                  isEven ? 'sm:flex-row-reverse' : ''
                }`}
              >
                <div className="hidden sm:block sm:w-1/2 px-8" />

                {/* Nodo tipografico centrale Salvia & Burgundy */}
                <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 z-10 w-9 h-9 rounded-full bg-white border border-champagne shadow-sm flex items-center justify-center">
                  <span className="w-2.5 h-2.5 rounded-full bg-burgundy" />
                </div>

                <div
                  className={`w-full sm:w-1/2 pl-14 sm:pl-0 ${
                    isEven ? 'sm:pl-8 sm:text-left' : 'sm:pr-8 sm:text-right'
                  }`}
                >
                  <div className="py-4 px-2 inline-block w-full">
                    <span className="font-serif text-2xl font-normal text-burgundy tracking-wide block mb-1">
                      {step.time}
                    </span>
                    <h3 className="font-serif italic text-2xl font-normal text-[#1a1a1a] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-sage font-sans font-medium mb-2">
                      {step.subtitle}
                    </p>
                    <p className="text-sm text-[#444444] font-serif leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 
        Acquerello della Cena Sotto le Stelle e Filari di Luci dopo l'Open Bar
        Stesse dimensioni e proporzioni delle altre illustrazioni della tenuta, senza spazi superflui
      */}
      <div className="mt-8 sm:mt-10 max-w-2xl mx-auto text-center px-2">
        <div className="relative inline-block w-full">
          <img
            src="./images/cena_luci_sfumato.png?v=5"
            alt="Cena nuziale e festeggiamenti sotto i filari di luci a Tenuta Tana di Volpe"
            className="w-full h-auto max-h-[380px] object-contain mx-auto filter contrast-[1.03]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

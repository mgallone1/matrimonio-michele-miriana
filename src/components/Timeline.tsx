import React from 'react';
import { motion } from 'framer-motion';

interface TimelineStep {
  time: string;
  title: string;
  description: string;
  detail: string;
}

export const Timeline: React.FC = () => {
  const steps: TimelineStep[] = [
    {
      time: '16:30',
      title: 'Accoglienza nel Parco',
      description: 'Benvenuto agli ospiti con rinfresco e acque aromatizzate tra gli ulivi secolari.',
      detail: 'Parco della Tenuta',
    },
    {
      time: '17:15',
      title: 'Il Rito Civile',
      description: 'Celebrazione delle nozze all’aperto, avvolti dalla quiete e dai colori di Tana di Volpe.',
      detail: 'Prato all’Inglese',
    },
    {
      time: '18:30',
      title: 'Aperitivo al Tramonto',
      description: 'Isole gastronomiche cilentane, calici di benvenuto e musica dal vivo nella luce dorata.',
      detail: 'Giardino delle Bouganville',
    },
    {
      time: '20:30',
      title: 'Cena Nuziale Sotto le Stelle',
      description: 'Banchetto conviviale nella corte del casale tra profumi mediterranei e filari di luce.',
      detail: 'La Corte del Casale',
    },
    {
      time: '23:30',
      title: 'Taglio Torta & Party',
      description: 'Momento dolce, brindisi augurale, open bar e danze fino a notte inoltrata.',
      detail: 'Bordo Piscina & Parco',
    },
  ];

  return (
    <section id="timeline" className="py-20 px-4 max-w-4xl mx-auto scroll-mt-10 bg-white">
      <div className="text-center mb-16">
        <p className="font-sans text-xs uppercase tracking-[0.35em] text-sage font-medium mb-3">
          I Momenti della Giornata
        </p>
        <h2 className="font-serif text-3xl sm:text-5xl text-espresso font-normal">
          Il Programma delle Nozze
        </h2>
        <div className="floral-divider">
          <img src="/icons/dahlia.svg" alt="" className="w-4 h-4 text-blush opacity-90" />
        </div>
      </div>

      <div className="relative">
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

                <div className="w-full sm:w-1/2 pl-16 sm:pl-8 sm:pr-8">
                  <div className="p-6 sm:p-7 rounded-2xl white-card white-card-hover">
                    <div className="flex items-baseline justify-between gap-3 mb-2">
                      <span className="font-serif text-2xl sm:text-3xl font-normal text-burgundy">
                        {step.time}
                      </span>
                      <span className="font-sans text-[11px] uppercase tracking-widest text-sage font-medium">
                        {step.detail}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-medium text-espresso mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-espresso/75 font-sans leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

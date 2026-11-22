import React, { useState } from 'react';
import { ExternalLink, Navigation, MapPin } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<number>(0);

  // Foto reali della Tenuta Tana di Volpe con descrizioni fedeli a ciascuno scatto
  const photos = [
    {
      src: './images/cappella_storica.jpg',
      webp: './images/webp/cappella_storica.webp',
      title: 'La Cappella Storica e la Torre',
      subtitle: 'L’antico torrione circolare in pietra avvolto dalla bouganville in fiore, simbolo della tenuta',
    },
    {
      src: './images/casale_facciata_luci.jpg',
      webp: './images/webp/casale_facciata_luci.webp',
      title: 'La Corte in Pietra del Casale',
      subtitle: 'La corte pavimentata e la facciata rustica del casale principale immerso nel verde',
    },
    {
      src: './images/giardino_bouganville.jpg',
      webp: './images/webp/giardino_bouganville.webp',
      title: 'Il Portico e l’Area Relax',
      subtitle: 'Lo spazio coperto con arredi caldi e dettagli in cotto affacciato sulla corte',
    },
    {
      src: './images/parco_prato_all_inglese.jpg',
      webp: './images/webp/parco_prato_all_inglese.webp',
      title: 'Il Grande Prato all’Inglese',
      subtitle: 'L’ampia distesa verde con alberi secolari e vista aperta sulle colline di Albanella',
    },
  ];

  const fullAddress = 'Via Provinciale, 19, 84044 Matinella di Albanella SA';
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Via Provinciale, 19, Matinella, 84044 Albanella SA')}`;
  const appleMapsUrl = `https://maps.apple.com/?q=${encodeURIComponent('Via Provinciale, 19, Matinella, 84044 Albanella SA')}`;

  return (
    <section id="location" className="py-12 sm:py-16 px-4 max-w-5xl mx-auto scroll-mt-8 bg-white">
      <div className="text-center mb-8 sm:mb-10">
        <p className="font-sans text-xs uppercase tracking-[0.35em] text-sage font-medium mb-2">
          La Cornice delle Nozze
        </p>
        <h2 className="font-serif text-3xl sm:text-5xl text-[#1a1a1a] font-normal">
          Tenuta Tana di Volpe
        </h2>
        <p className="font-sans text-xs uppercase tracking-[0.25em] text-sage font-medium mt-1.5 flex items-center justify-center gap-1.5">
          <MapPin className="w-3.5 h-3.5 text-burgundy" />
          <span>Via Provinciale, 19 • Matinella di Albanella (SA)</span>
        </p>
      </div>

      {/* Galleria Scenografica con foto e descrizioni autentiche */}
      <div className="p-4 sm:p-6 mb-10 rounded-3xl white-card">
        <div className="relative rounded-2xl overflow-hidden aspect-[16/10] sm:aspect-[21/9] mb-4 bg-espresso/5">
          <picture className="w-full h-full">
            <source srcSet={photos[activePhoto].webp} type="image/webp" />
            <img
              src={photos[activePhoto].src}
              alt={photos[activePhoto].title}
              className="w-full h-full object-cover transition-all duration-500"
              loading="lazy"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6 sm:p-8">
            <div className="text-white">
              <h3 className="font-serif text-2xl sm:text-3xl font-normal drop-shadow-sm">
                {photos[activePhoto].title}
              </h3>
              <p className="text-xs sm:text-sm text-white/90 font-sans mt-1">
                {photos[activePhoto].subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Selettore miniature con bordo champagne & burgundy */}
        <div className="grid grid-cols-4 gap-2 sm:gap-4">
          {photos.map((photo, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActivePhoto(idx)}
              className={`relative rounded-xl overflow-hidden aspect-[4/3] border-2 transition-all duration-200 ${
                activePhoto === idx
                  ? 'border-burgundy ring-2 ring-burgundy/25 scale-95'
                  : 'border-transparent opacity-75 hover:opacity-100'
              }`}
              title={photo.title}
            >
              <picture className="w-full h-full">
                <source srcSet={photo.webp} type="image/webp" />
                <img src={photo.src} alt="" className="w-full h-full object-cover" loading="lazy" />
              </picture>
            </button>
          ))}
        </div>
      </div>

      {/* Riquadro Dettaglio Luogo con Badge Maps Esatto */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <div className="p-8 sm:p-10 rounded-3xl white-card flex flex-col justify-between">
          <div>
            <p className="font-sans text-xs uppercase tracking-[0.25em] text-burgundy font-medium mb-3">
              Indirizzo Ufficiale Ricevimento
            </p>

            <h4 className="font-serif text-2xl font-normal text-[#1a1a1a] mb-2">
              Tenuta Tana di Volpe
            </h4>

            <p className="font-sans text-sm font-semibold text-[#1a1a1a] mb-4">
              {fullAddress}
            </p>

            <p className="text-[#444444] text-sm leading-relaxed mb-6 font-serif">
              La tenuta è situata nella frazione Matinella di Albanella, facilmente raggiungibile a 15 minuti dagli scavi di Paestum e dalla costa.
            </p>

            <div className="space-y-3 text-xs text-[#555555] font-sans border-t border-champagne pt-5 mb-8">
              <p>
                <strong className="text-[#1a1a1a]">Come arrivare:</strong> Dalla SS18 Tirrena Inferiore prendere l'uscita per Matinella / Albanella e proseguire lungo la Via Provinciale fino al numero 19.
              </p>
              <p>
                <strong className="text-[#1a1a1a]">Parcheggio:</strong> Area sosta interna privata, gratuita e custodita direttamente all'ingresso della villa.
              </p>
            </div>
          </div>

          {/* Pulsanti con icone Maps chiare */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-[11px] py-2.5 px-3 text-center flex items-center justify-center gap-2 shadow-sm"
            >
              <Navigation className="w-3.5 h-3.5 text-white shrink-0" />
              <span>Apri Google Maps</span>
              <ExternalLink className="w-3 h-3 shrink-0 opacity-80" />
            </a>

            <a
              href={appleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-[11px] py-2.5 px-3 text-center flex items-center justify-center gap-2"
            >
              <MapPin className="w-3.5 h-3.5 text-sage shrink-0" />
              <span>Apple Maps</span>
              <ExternalLink className="w-3 h-3 shrink-0 opacity-60" />
            </a>
          </div>
        </div>

        {/* Riquadro Mappa Embed centrato esattamente su Via Provinciale 19, Matinella di Albanella */}
        <div className="rounded-3xl overflow-hidden border border-champagne shadow-sm bg-white min-h-[320px] relative">
          <iframe
            title="Mappa Posizione Esatta: Via Provinciale 19, Matinella di Albanella"
            src="https://maps.google.com/maps?q=Via%20Provinciale%2C%2019%2C%20Matinella%2C%2084044%20Albanella%20SA&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            className="w-full h-full min-h-[340px] border-0"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* Badge con indicatore Maps sovrapposto */}
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm border border-champagne py-1.5 px-3 rounded-full shadow-md flex items-center gap-1.5 text-xs font-sans font-medium text-espresso pointer-events-none">
            <span className="w-2.5 h-2.5 rounded-full bg-burgundy animate-ping" />
            <MapPin className="w-3.5 h-3.5 text-burgundy" />
            <span>Via Provinciale 19, Matinella (SA)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

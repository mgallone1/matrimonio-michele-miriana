import React, { useState } from 'react';
import { ExternalLink, Navigation } from 'lucide-react';
import { DahliaFlower } from './DahliaFlower';

export const LocationSection: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<number>(0);

  const photos = [
    {
      src: './images/casale_facciata_luci.jpg',
      webp: './images/webp/casale_facciata_luci.webp',
      title: 'Il Casale Storico',
      subtitle: 'La corte illuminata dai filari di luci per il ricevimento serale',
    },
    {
      src: './images/giardino_bouganville.jpg',
      webp: './images/webp/giardino_bouganville.webp',
      title: 'Il Giardino delle Bouganville',
      subtitle: 'Colori vivaci e profumi mediterranei per l’aperitivo al tramonto',
    },
    {
      src: './images/parco_scenografico.jpg',
      webp: './images/webp/parco_scenografico.webp',
      title: 'Il Parco degli Ulivi',
      subtitle: 'Oltre 40 ettari di oasi naturale affacciata sulle colline cilentane',
    },
    {
      src: './images/parco_prato_all_inglese.jpg',
      webp: './images/webp/parco_prato_all_inglese.webp',
      title: 'L’Area Cerimonia Civile',
      subtitle: 'Il prato verde curato per lo scambio delle nostre promesse',
    },
  ];

  const googleMapsUrl = 'https://maps.google.com/?q=Tenuta+Tana+di+Volpe+Albanella';
  const appleMapsUrl = 'https://maps.apple.com/?q=Tenuta+Tana+di+Volpe+Albanella';

  return (
    <section id="location" className="py-20 px-4 max-w-5xl mx-auto scroll-mt-10 bg-white">
      <div className="text-center mb-16">
        <p className="font-sans text-xs uppercase tracking-[0.35em] text-sage font-medium mb-3">
          La Cornice delle Nozze
        </p>
        <h2 className="font-serif text-3xl sm:text-5xl text-[#1a1a1a] font-normal">
          Tenuta Tana di Volpe
        </h2>
        <p className="font-sans text-xs uppercase tracking-[0.25em] text-sage font-medium mt-2">
          Albanella (Salerno) • Cilento
        </p>
        <div className="floral-divider">
          <DahliaFlower size={18} />
        </div>
      </div>

      {/* Galleria Scenografica in Bianco Puro con bordo Champagne (#dacdbd) */}
      <div className="p-4 sm:p-6 mb-12 rounded-3xl white-card">
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
          <div className="absolute inset-0 bg-gradient-to-t from-espresso/80 via-espresso/20 to-transparent flex items-end p-6 sm:p-8">
            <div className="text-white">
              <h3 className="font-serif text-2xl sm:text-3xl font-normal">
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

      {/* Info Logistica & Mappa */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <div className="p-8 sm:p-10 rounded-3xl white-card flex flex-col justify-between">
          <div>
            <h4 className="font-serif text-2xl font-normal text-[#1a1a1a] mb-1">
              Come Raggiungerci
            </h4>
            <p className="font-sans text-xs text-sage uppercase tracking-wider mb-6 font-medium">
              Via S. Nicola, 84044 Albanella (SA)
            </p>

            <p className="text-[#333333] text-sm sm:text-base leading-relaxed mb-6 font-serif">
              Tenuta Tana di Volpe sorge tra le dolci colline di Albanella, a soli 15 minuti dagli storici Templi di Paestum e dal litorale cilentano.
            </p>

            <div className="space-y-3 text-xs text-[#444444] font-sans border-t border-champagne pt-6 mb-8">
              <p>
                <strong className="text-[#1a1a1a]">In auto:</strong> Autostrada A2 del Mediterraneo, uscita Battipaglia o Eboli; proseguire lungo la SS18 in direzione Paestum/Albanella.
              </p>
              <p>
                <strong className="text-[#1a1a1a]">Parcheggio:</strong> Ampia area parcheggio interna gratuita e custodita per tutti gli ospiti.
              </p>
            </div>
          </div>

          {/* Pulsanti Navigazione (Google Maps e Apple Maps, escluso Waze) */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-[11px] py-2.5 px-3 text-center flex items-center justify-center gap-1.5"
            >
              <Navigation className="w-3.5 h-3.5 text-burgundy shrink-0" />
              <span>Google Maps</span>
              <ExternalLink className="w-3 h-3 shrink-0 opacity-60" />
            </a>

            <a
              href={appleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-[11px] py-2.5 px-3 text-center flex items-center justify-center gap-1.5"
            >
              <Navigation className="w-3.5 h-3.5 text-sage shrink-0" />
              <span>Apple Maps</span>
              <ExternalLink className="w-3 h-3 shrink-0 opacity-60" />
            </a>
          </div>
        </div>

        {/* Riquadro Mappa Embed */}
        <div className="rounded-3xl overflow-hidden border border-champagne shadow-sm bg-white min-h-[320px]">
          <iframe
            title="Mappa di Tenuta Tana di Volpe ad Albanella"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.879893504313!2d15.08332157643547!3d40.48906915124016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13395914fa65b6bf%3A0xe5ea8cb83bf0c202!2sTenuta%20Tana%20di%20Volpe!5e0!3m2!1sit!2sit!4v1700000000000!5m2!1sit!2sit"
            width="100%"
            height="100%"
            className="w-full h-full min-h-[340px] border-0"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

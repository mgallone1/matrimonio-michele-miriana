import React, { useState } from 'react';
import { InvitationCardModal } from './components/InvitationCardModal';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { Timeline } from './components/Timeline';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { GiftSection } from './components/GiftSection';
import { RsvpForm } from './components/RsvpForm';
import { AdminModal } from './components/AdminModal';
import { TattooHeart } from './components/TattooHeart';
import { Lock } from 'lucide-react';
import { SmoothScroll } from './components/reactbits/SmoothScroll';

export const App: React.FC = () => {
  const [isInvitationOpen, setIsInvitationOpen] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('preview') === 'site') return false;
    }
    return true;
  });

  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false);

  const handleOpenInvitation = () => {
    setIsInvitationOpen(false);
  };

  const handleReopenInvitation = () => {
    setIsInvitationOpen(true);
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-white text-espresso flex flex-col selection:bg-blush/30 selection:text-burgundy">
        {/* Invito a Schermo Intero con il Tatuaggio M&M */}
        <InvitationCardModal isOpen={isInvitationOpen} onOpen={handleOpenInvitation} />

        {/* 
          Barra di Navigazione:
          - Layout a 3 colonne perfettamente simmetrico (logo a sinistra, menu al centro perfetto, RSVP / azioni a destra)
          - Altezza contenuta e pulita, allineamento verticale esatto
        */}
        <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-champagne/60 py-2.5 px-4 sm:px-8">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 items-center">
            {/* Colonna Sinistra: Logo Tatuaggio M&M */}
            <div className="flex items-center justify-start">
              <a
                href="#"
                className="flex items-center group text-burgundy transition-transform hover:scale-105"
                title="Michele & Miriana"
              >
                <TattooHeart className="w-11 h-11 sm:w-12 sm:h-12 text-burgundy" />
              </a>
            </div>

            {/* Colonna Centrale: Voci di Navigazione perfettamente centrate e allineate */}
            <div className="hidden md:flex items-center justify-center gap-7 text-[12px] uppercase tracking-[0.22em] font-medium text-espresso/80 font-sans">
              <a href="#timeline" className="hover:text-burgundy transition-colors py-1">
                Programma
              </a>
              <a href="#location" className="hover:text-burgundy transition-colors py-1">
                La Tenuta
              </a>
              <a href="#faq" className="hover:text-burgundy transition-colors py-1">
                FAQ &amp; Info
              </a>
              <a href="#gift" className="hover:text-burgundy transition-colors py-1">
                Lista Nozze
              </a>
            </div>

            {/* Colonna Destra: Tasto Invito + Pulsante RSVP bilanciato */}
            <div className="flex items-center justify-end gap-4">
              <button
                type="button"
                onClick={handleReopenInvitation}
                className="hidden sm:inline-block text-[11px] font-sans font-medium text-espresso/60 hover:text-burgundy transition-colors tracking-widest uppercase"
                title="Riapri l'invito iniziale"
              >
                Invito
              </button>
              <a
                href="#rsvp"
                className="btn-primary text-[11px] py-1.5 px-5 font-sans shadow-sm tracking-wider"
              >
                RSVP
              </a>
            </div>
          </div>
        </nav>

        {/* Contenuto Principale */}
        <main className="flex-1 bg-white">
          <Hero />
          <Countdown />
          <Timeline />
          <LocationSection />
          <FaqSection />
          <GiftSection />
          <RsvpForm />
        </main>

        {/* Footer con il Simbolo Tatuaggio */}
        <footer className="border-t border-champagne/60 bg-white py-16 px-4 text-center">
          <div className="max-w-xl mx-auto">
            <div className="flex justify-center mb-5">
              <TattooHeart className="w-12 h-12 text-burgundy/80" />
            </div>

            <h3 className="font-script text-4xl sm:text-5xl text-burgundy mb-3 select-none">
              Michele &amp; Miriana
            </h3>
            <p className="font-serif italic text-espresso/70 text-base mb-8 font-light">
              Non vediamo l’ora di celebrare il nostro amore insieme a voi.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-espresso/60 font-sans border-t border-champagne/40 pt-8 tracking-wider uppercase">
              <span>2 Luglio 2027 • Tenuta Tana di Volpe, Albanella (SA)</span>
              <span className="hidden sm:inline">•</span>
              <button
                type="button"
                onClick={() => setIsAdminOpen(true)}
                className="inline-flex items-center gap-1.5 hover:text-burgundy transition-colors text-espresso/60"
              >
                <Lock className="w-3 h-3 text-burgundy" />
                <span>Area Sposi</span>
              </button>
            </div>
          </div>
        </footer>

        {/* Modal Pannello Sposi con Gestione Ospiti + Gestione IBAN */}
        <AdminModal isOpen={isAdminOpen} onClose={() => setIsAdminOpen(false)} />
      </div>
    </SmoothScroll>
  );
};

export default App;

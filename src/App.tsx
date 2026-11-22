import React, { useState } from 'react';
import { InvitationCardModal } from './components/InvitationCardModal';
import { Hero } from './components/Hero';
import { CeremonyCard } from './components/CeremonyCard';
import { Countdown } from './components/Countdown';
import { Timeline } from './components/Timeline';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { GiftSection } from './components/GiftSection';
import { RsvpForm } from './components/RsvpForm';
import { AdminModal } from './components/AdminModal';
import { TattooHeart } from './components/TattooHeart';
import { Lock, Menu, X, Calendar, MapPin, Gift, HelpCircle, Send } from 'lucide-react';
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
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleOpenInvitation = () => {
    setIsInvitationOpen(false);
  };

  const handleReopenInvitation = () => {
    setIsInvitationOpen(true);
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: '#cerimonia', label: 'Cerimonia & Ricevimento', icon: Calendar },
    { href: '#timeline', label: 'Programma della Giornata', icon: Calendar },
    { href: '#location', label: 'La Tenuta & Indicazioni', icon: MapPin },
    { href: '#faq', label: 'FAQ, Dress Code & Alloggi', icon: HelpCircle },
    { href: '#gift', label: 'Lista Nozze & Coordinate IBAN', icon: Gift },
    { href: '#rsvp', label: 'Conferma Presenza (RSVP)', icon: Send, highlight: true },
  ];

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-white text-[#1a1a1a] flex flex-col selection:bg-blush/30 selection:text-burgundy">
        {/* Invito a Schermo Intero con il Tatuaggio M&M */}
        <InvitationCardModal isOpen={isInvitationOpen} onOpen={handleOpenInvitation} />

        {/* 
          Barra di Navigazione:
          - Logo Tatuaggio a sinistra (chiaro, grande e definito)
          - Toast / Menu a tre righe a destra per aprire il menu a scomparsa
        */}
        <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-champagne/60 py-2.5 px-4 sm:px-8">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            {/* Colonna Sinistra: Logo Tatuaggio M&M */}
            <div className="flex items-center">
              <a
                href="#"
                className="flex items-center group text-burgundy transition-transform hover:scale-105"
                title="Michele & Miriana"
              >
                <TattooHeart className="w-11 h-11 sm:w-12 sm:h-12 text-burgundy" />
              </a>
            </div>

            {/* Voci di navigazione desktop discrete */}
            <div className="hidden lg:flex items-center gap-7 text-[12px] uppercase tracking-[0.2em] font-medium text-[#222222] font-sans">
              <a href="#cerimonia" className="hover:text-burgundy transition-colors py-1">
                Cerimonia
              </a>
              <a href="#timeline" className="hover:text-burgundy transition-colors py-1">
                Programma
              </a>
              <a href="#location" className="hover:text-burgundy transition-colors py-1">
                La Tenuta
              </a>
              <a href="#faq" className="hover:text-burgundy transition-colors py-1">
                Info &amp; FAQ
              </a>
              <a href="#gift" className="hover:text-burgundy transition-colors py-1">
                Lista Nozze
              </a>
            </div>

            {/* Colonna Destra: Tasto a tre righe (Hamburger/Toast) per richiamare i sottomenu */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 sm:px-3.5 sm:py-2 rounded-full border border-champagne bg-white hover:border-burgundy/50 text-[#1a1a1a] hover:text-burgundy transition-colors flex items-center gap-2 shadow-sm font-sans"
                title="Menu della partecipazione"
                aria-label="Apri menu sezioni"
              >
                <Menu className="w-5 h-5 text-burgundy" />
                <span className="hidden sm:inline text-xs uppercase tracking-wider font-medium">
                  Menu
                </span>
              </button>
            </div>
          </div>
        </nav>

        {/* 
          Menu Toast Laterale a Scomparsa (apribile dal tasto a 3 righe) 
        */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 flex justify-end bg-[#1a120e]/40 backdrop-blur-sm animate-fadeIn">
            <div className="w-full max-w-sm bg-white h-full shadow-2xl border-l border-champagne flex flex-col p-6 sm:p-8 animate-slideLeft">
              <div className="flex items-center justify-between pb-6 border-b border-champagne/60 mb-6">
                <div className="flex items-center gap-2">
                  <TattooHeart className="w-8 h-8 text-burgundy" />
                  <span className="font-serif text-lg text-burgundy font-normal">
                    Michele &amp; Miriana
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-paper-subtle text-[#1a1a1a] transition-colors"
                  aria-label="Chiudi menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 space-y-2 overflow-y-auto">
                <p className="text-[10px] uppercase tracking-[0.25em] text-sage font-medium font-sans px-3 mb-2">
                  Sezioni della Partecipazione
                </p>
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center gap-3 px-3.5 py-3 rounded-xl transition-all font-sans text-xs uppercase tracking-wider font-medium ${
                        link.highlight
                          ? 'bg-burgundy text-white shadow-md'
                          : 'text-[#1a1a1a] hover:bg-paper-subtle hover:text-burgundy'
                      }`}
                    >
                      <Icon className={`w-4 h-4 shrink-0 ${link.highlight ? 'text-white' : 'text-sage'}`} />
                      <span>{link.label}</span>
                    </a>
                  );
                })}

                <div className="pt-4 border-t border-champagne/60 mt-6 space-y-2">
                  <button
                    type="button"
                    onClick={handleReopenInvitation}
                    className="w-full text-left flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs uppercase tracking-wider text-[#444444] hover:text-burgundy hover:bg-paper-subtle font-sans font-medium"
                  >
                    <span>Riapri l'Invito Iniziale</span>
                  </button>
                </div>
              </div>

              <div className="pt-6 border-t border-champagne/60 text-center">
                <p className="text-xs font-serif italic text-[#555555]">
                  2 Luglio 2027 • Tenuta Tana di Volpe
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Contenuto Principale con Flusso Riorganizzato */}
        <main className="flex-1 bg-white">
          <Hero />
          <CeremonyCard />
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
            <p className="font-serif italic text-[#444444] text-base mb-8 font-light">
              Non vediamo l’ora di celebrare il nostro amore insieme a voi.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-[#555555] font-sans border-t border-champagne/40 pt-8 tracking-wider uppercase">
              <span>2 Luglio 2027 • Tenuta Tana di Volpe, Albanella (SA)</span>
              <span className="hidden sm:inline">•</span>
              <button
                type="button"
                onClick={() => setIsAdminOpen(true)}
                className="inline-flex items-center gap-1.5 hover:text-burgundy transition-colors text-[#555555]"
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

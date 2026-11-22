import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
import { Lock, X, Calendar, MapPin, Gift, HelpCircle, Send } from 'lucide-react';
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
    { href: '#cerimonia', label: 'Cerimonia e Ricevimento', icon: Calendar },
    { href: '#timeline', label: 'Programma della Giornata', icon: Calendar },
    { href: '#location', label: 'La Tenuta e Indicazioni', icon: MapPin },
    { href: '#faq', label: 'FAQ, Dress Code e Alloggi', icon: HelpCircle },
    { href: '#gift', label: 'Lista Nozze e Coordinate IBAN', icon: Gift },
    { href: '#rsvp', label: 'Conferma Presenza (RSVP)', icon: Send, highlight: true },
  ];

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-white text-[#1a1a1a] flex flex-col selection:bg-blush/30 selection:text-burgundy">
        {/* Invito a Schermo Intero con il Tatuaggio M&M */}
        <InvitationCardModal isOpen={isInvitationOpen} onOpen={handleOpenInvitation} />

        {/* 
          Barra di Navigazione:
          - Logo Tatuaggio M&M sulla sinistra
          - Menu orizzontale discreto al centro
          - Icona Hamburger a 3 righe pulita SENZA cerchio
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

            {/* Voci di navigazione desktop chiare */}
            <div className="hidden md:flex items-center gap-7 text-[12px] uppercase tracking-[0.2em] font-medium text-[#222222] font-sans">
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
                Info e FAQ
              </a>
              <a href="#gift" className="hover:text-burgundy transition-colors py-1">
                Lista Nozze
              </a>
            </div>

            {/* Colonna Destra: Hamburger a 3 righe minimale e senza cerchio */}
            <div className="flex items-center">
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-[#1a1a1a] hover:text-burgundy transition-colors flex flex-col justify-center items-end gap-1.5 group cursor-pointer"
                title="Menu"
                aria-label="Apri menu sezioni"
              >
                <span className="w-6 h-0.5 bg-current rounded-full transition-all duration-300 group-hover:w-7" />
                <span className="w-4 h-0.5 bg-current rounded-full transition-all duration-300 group-hover:w-7" />
                <span className="w-5 h-0.5 bg-current rounded-full transition-all duration-300 group-hover:w-7" />
              </button>
            </div>
          </div>
        </nav>

        {/* 
          Menu Hamburger a Scomparsa Laterale con Motion Naturale & Fluido (Framer Motion)
          Curve cubic-bezier d'alta gamma per eliminare qualsiasi apertura brusca
        */}
        <AnimatePresence>
          {isMenuOpen && (
            <div className="fixed inset-0 z-50 flex justify-end">
              {/* Backdrop con dissolvenza morbida */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setIsMenuOpen(false)}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm"
              />

              {/* Drawer laterale con scivolamento e smorzamento naturale (spring / smooth ease) */}
              <motion.div
                initial={{ x: '100%', opacity: 0.6 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '100%', opacity: 0 }}
                transition={{
                  duration: 0.55,
                  ease: [0.16, 1, 0.3, 1], // Cubic-bezier naturale
                }}
                className="relative z-10 w-full max-w-sm bg-white h-full shadow-2xl border-l border-champagne flex flex-col p-6 sm:p-8 overflow-y-auto"
              >
                <div className="flex items-center justify-between pb-6 border-b border-champagne/60 mb-6">
                  <div className="flex items-center gap-2">
                    <TattooHeart className="w-8 h-8 text-burgundy" />
                    <span className="font-script text-3xl text-burgundy font-normal leading-none">
                      Michele &amp; Miriana
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 text-[#1a1a1a] hover:text-burgundy transition-colors"
                    aria-label="Chiudi menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex-1 space-y-2">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-sage font-medium font-sans px-3 mb-3">
                    Sezioni della Partecipazione
                  </p>
                  {navLinks.map((link, idx) => {
                    const Icon = link.icon;
                    return (
                      <motion.a
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + idx * 0.05, duration: 0.4 }}
                        className={`flex items-center gap-3 px-3.5 py-3 rounded-xl transition-all font-sans text-xs uppercase tracking-wider font-medium ${
                          link.highlight
                            ? 'bg-burgundy text-white shadow-md'
                            : 'text-[#1a1a1a] hover:bg-paper-subtle hover:text-burgundy'
                        }`}
                      >
                        <Icon className={`w-4 h-4 shrink-0 ${link.highlight ? 'text-white' : 'text-sage'}`} />
                        <span>{link.label}</span>
                      </motion.a>
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
              </motion.div>
            </div>
          )}
        </AnimatePresence>

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

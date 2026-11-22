import React, { useState, useEffect } from 'react';
import { Magnetic } from './reactbits/Magnetic';
import { getBankSettings, BankSettings } from '../lib/bankSettings';

export const GiftSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [bankData, setBankData] = useState<BankSettings>(getBankSettings);

  useEffect(() => {
    const handleUpdate = () => {
      setBankData(getBankSettings());
    };
    window.addEventListener('bank_settings_updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);
    return () => {
      window.removeEventListener('bank_settings_updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  const cleanIban = bankData.iban.replace(/\s+/g, '');

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(cleanIban);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <section id="gift" className="py-20 px-4 max-w-3xl mx-auto scroll-mt-10 bg-white">
      <div className="text-center mb-12">
        <p className="font-sans text-xs uppercase tracking-[0.35em] text-sage font-medium mb-3">
          Un Pensiero per il Nostro Futuro
        </p>
        <h2 className="font-serif text-3xl sm:text-5xl text-espresso font-normal">
          Lista Nozze &amp; Luna di Miele
        </h2>
        <div className="floral-divider">
          <img src="/icons/dahlia.svg" alt="" className="w-4 h-4 text-blush opacity-90" />
        </div>
      </div>

      <div className="p-8 sm:p-12 rounded-3xl white-card text-center relative overflow-hidden">
        <p className="text-espresso/80 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-8 font-serif font-light">
          «Il regalo più bello sarà averti con noi per festeggiare, ridere e ballare. 
          Se desideri accompagnare i nostri primi passi e contribuire al nostro viaggio di nozze, puoi farlo qui:»
        </p>

        {/* Box IBAN su fondo bianco pulito con bordo dorato Champagne */}
        <div className="p-6 sm:p-8 rounded-2xl border border-champagne max-w-xl mx-auto text-left bg-white shadow-sm">
          <div className="flex items-center justify-between gap-2 mb-4">
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-espresso/60 font-sans">
              Coordinate Bancarie (IBAN)
            </span>
            <span className="text-[11px] text-sage font-medium font-sans uppercase tracking-wider">
              {bankData.banca || 'Bonifico Bancario'}
            </span>
          </div>

          <div className="p-4 bg-white rounded-xl border border-champagne flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <span className="font-mono text-xs sm:text-sm md:text-[15px] font-semibold text-burgundy tracking-wide whitespace-nowrap overflow-x-auto select-all max-w-full">
              {bankData.iban}
            </span>
            <Magnetic distance={0.2}>
              <button
                type="button"
                onClick={handleCopy}
                className="btn-secondary text-[11px] py-2 px-4 uppercase tracking-wider shrink-0 min-w-[110px]"
                title="Copia IBAN negli appunti"
              >
                {copied ? 'Copiato!' : 'Copia IBAN'}
              </button>
            </Magnetic>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-espresso/70 font-sans border-t border-champagne/60 pt-4">
            <div>
              <span className="block text-espresso/50 mb-0.5">Intestatari del conto:</span>
              <strong className="text-espresso font-medium text-sm">{bankData.intestatari}</strong>
            </div>
            <div>
              <span className="block text-espresso/50 mb-0.5">Causale suggerita:</span>
              <strong className="text-espresso font-medium text-sm">{bankData.causale}</strong>
            </div>
          </div>
        </div>

        <p className="text-xs text-espresso/50 font-sans mt-6">
          Grazie di vero cuore per essere parte del nostro cammino.
        </p>
      </div>
    </section>
  );
};

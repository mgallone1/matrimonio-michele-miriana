import React, { useState, useEffect } from 'react';
import { Magnetic } from './reactbits/Magnetic';
import { getBankSettings, BankSettings } from '../lib/bankSettings';
import { Check, Copy } from 'lucide-react';

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

  // Rimozione totale di qualsiasi spazio quando l'ospite copia l'IBAN
  const cleanIban = bankData.iban.replace(/\s+/g, '').trim();

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
        <h2 className="font-serif text-3xl sm:text-5xl text-[#1a1a1a] font-normal">
          Lista Nozze &amp; Luna di Miele
        </h2>
      </div>

      <div className="py-6 sm:py-10 text-center relative overflow-hidden">
        {/* Accento floreale acquerellato chiaro nell'angolo della lista nozze */}
        <div className="absolute -bottom-8 -left-8 w-28 sm:w-36 pointer-events-none select-none opacity-45">
          <img
            src="./images/dalia_chiara_blush_destra.png"
            alt=""
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>

        <p className="text-[#2c2c2c] text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-8 font-serif font-light italic">
          «Il regalo più bello sarà averti con noi per festeggiare, ridere e ballare. 
          Se desideri accompagnare i nostri primi passi e contribuire al nostro viaggio di nozze, puoi farlo qui:»
        </p>

        {/* Box IBAN essenziale senza riquadri pesanti */}
        <div className="py-6 max-w-xl mx-auto text-left border-y border-champagne/50">
          <div className="flex items-center justify-between gap-2 mb-4">
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#1a1a1a]/70 font-sans">
              Coordinate Bancarie (IBAN)
            </span>
            <span className="text-[11px] text-sage font-medium font-sans uppercase tracking-wider">
              {bankData.banca || 'Bonifico Bancario'}
            </span>
          </div>

          <div className="py-3 px-2 flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
            <span className="font-mono text-sm sm:text-base md:text-lg font-semibold text-[#1a1a1a] tracking-wider select-all">
              {cleanIban}
            </span>
            <Magnetic distance={0.2}>
              <button
                type="button"
                onClick={handleCopy}
                className="btn-secondary text-[11px] py-2 px-4 uppercase tracking-wider shrink-0 min-w-[125px] flex items-center justify-center gap-1.5"
                title="Copia IBAN senza spazi negli appunti"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-sage" />
                    <span>Copiato!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-burgundy" />
                    <span>Copia IBAN</span>
                  </>
                )}
              </button>
            </Magnetic>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans border-t border-champagne/40 pt-4">
            <div>
              <span className="block text-[#555555] mb-0.5">Intestatari del conto:</span>
              <strong className="text-[#1a1a1a] font-medium text-sm">{bankData.intestatari}</strong>
            </div>
            <div>
              <span className="block text-[#555555] mb-0.5">Causale suggerita:</span>
              <strong className="text-[#1a1a1a] font-medium text-sm">{bankData.causale}</strong>
            </div>
          </div>
        </div>

        <p className="text-xs text-[#666666] font-sans mt-6">
          Grazie di vero cuore per essere parte del nostro cammino.
        </p>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { RsvpSubmission, Companion } from '../types/wedding';
import { saveRsvp } from '../lib/supabase';
import { sanitizeText, isValidPhone } from '../lib/security';

export const RsvpForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    attendance: 'attending' as 'attending' | 'declined',
    adultsCount: 1,
    childrenCount: 0,
    dietaryNotes: '',
    songSuggestion: '',
    wishesMessage: '',
    needTransfer: false,
  });

  const [companions, setCompanions] = useState<Companion[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleAdultsChange = (num: number) => {
    setFormData((prev) => ({ ...prev, adultsCount: num }));
    adjustCompanions(num, formData.childrenCount);
  };

  const handleChildrenChange = (num: number) => {
    setFormData((prev) => ({ ...prev, childrenCount: num }));
    adjustCompanions(formData.adultsCount, num);
  };

  const adjustCompanions = (adults: number, children: number) => {
    setCompanions((prev) => {
      const next: Companion[] = [];
      const additionalAdults = Math.max(0, adults - 1);

      for (let i = 0; i < additionalAdults; i++) {
        const existing = prev[i] && !prev[i].isChild ? prev[i] : null;
        next.push(
          existing || {
            id: `comp_adult_${i + 1}`,
            fullName: '',
            isChild: false,
            dietaryTags: [],
            dietaryNotes: '',
          }
        );
      }

      for (let j = 0; j < children; j++) {
        const existingIdx = additionalAdults + j;
        const existing = prev[existingIdx] && prev[existingIdx].isChild ? prev[existingIdx] : null;
        next.push(
          existing || {
            id: `comp_child_${j + 1}`,
            fullName: '',
            isChild: true,
            dietaryTags: [],
            dietaryNotes: '',
          }
        );
      }

      return next;
    });
  };

  const updateCompanion = (index: number, field: keyof Companion, value: any) => {
    setCompanions((prev) => {
      const copy = [...prev];
      copy[index] = { ...copy[index], [field]: value };
      return copy;
    });
  };

  const commonDietaryTags = [
    'Senza Glutine (Celiachia)',
    'Vegetariano',
    'Vegano',
    'Senza Lattosio',
    'No Frutti di Mare/Crostacei',
    'Nessuna limitazione',
  ];

  const handleTagToggle = (tag: string) => {
    if (tag === 'Nessuna limitazione') {
      setSelectedTags(['Nessuna limitazione']);
      return;
    }

    const withoutNone = selectedTags.filter((t) => t !== 'Nessuna limitazione');
    if (selectedTags.includes(tag)) {
      setSelectedTags(withoutNone.filter((t) => t !== tag));
    } else {
      setSelectedTags([...withoutNone, tag]);
    }
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#530c1e', '#bf9d9b', '#4f523f', '#dacdbd', '#FFFFFF'],
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setStatus('error');
      setErrorMessage('Per favore, inserisci nome e cognome per confermare.');
      return;
    }

    if (formData.phone && !isValidPhone(formData.phone)) {
      setStatus('error');
      setErrorMessage('Il numero di telefono inserito non sembra corretto.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    const submission: RsvpSubmission = {
      fullName: sanitizeText(formData.fullName, 100),
      phone: sanitizeText(formData.phone, 30),
      attendance: formData.attendance,
      adultsCount: Number(formData.adultsCount),
      childrenCount: Number(formData.childrenCount),
      companions: companions.map((c) => ({
        id: c.id,
        fullName: sanitizeText(c.fullName, 100),
        isChild: Boolean(c.isChild),
        dietaryTags: c.dietaryTags || [],
        dietaryNotes: sanitizeText(c.dietaryNotes || '', 200),
      })),
      dietaryNotes: sanitizeText(formData.dietaryNotes, 300),
      dietaryTags: selectedTags,
      songSuggestion: sanitizeText(formData.songSuggestion, 120),
      wishesMessage: sanitizeText(formData.wishesMessage, 500),
      needTransfer: Boolean(formData.needTransfer),
      createdAt: new Date().toISOString(),
    };

    try {
      const result = await saveRsvp(submission);
      if (result.success) {
        setStatus('success');
        if (formData.attendance === 'attending') {
          triggerConfetti();
        }
      } else {
        setStatus('error');
        setErrorMessage(result.error || 'Errore durante l’invio. Riprova tra poco.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Impossibile completare la richiesta. Verifica la connessione.');
    }
  };

  return (
    <section id="rsvp" className="py-20 px-4 max-w-3xl mx-auto scroll-mt-10 bg-white">
      <div className="text-center mb-16">
        <p className="font-sans text-xs uppercase tracking-[0.35em] text-sage font-medium mb-3">
          Conferma di Presenza
        </p>
        <h2 className="font-serif text-3xl sm:text-5xl text-espresso font-normal">
          RSVP &amp; Partecipazione
        </h2>
        <p className="font-sans text-xs uppercase tracking-[0.25em] text-sage font-medium mt-2">
          Gradita gentile conferma entro il 30 Aprile 2027
        </p>
      </div>

      <div className="py-6 sm:py-10 max-w-2xl mx-auto">
        {status === 'success' ? (
          <div className="py-12 text-center">
            <div className="w-16 h-16 rounded-full bg-sage/10 text-sage mx-auto flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-3xl font-normal text-espresso mb-3">
              Grazie di cuore, {formData.fullName}!
            </h3>
            <p className="text-espresso/70 text-base max-w-md mx-auto mb-8 font-serif leading-relaxed">
              Abbiamo registrato con gioia la tua risposta per il 2 Luglio 2027 a Tana di Volpe.
            </p>
            <button
              type="button"
              onClick={() => {
                setStatus('idle');
                setFormData({
                  fullName: '',
                  phone: '',
                  attendance: 'attending',
                  adultsCount: 1,
                  childrenCount: 0,
                  dietaryNotes: '',
                  songSuggestion: '',
                  wishesMessage: '',
                  needTransfer: false,
                });
                setCompanions([]);
                setSelectedTags([]);
              }}
              className="btn-secondary text-xs"
            >
              Invia un’altra risposta o modifica
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {/* Scelta Presenza su fondo bianco con bordi dorati */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, attendance: 'attending' })}
                className={`p-5 rounded-2xl border text-left transition-all ${
                  formData.attendance === 'attending'
                    ? 'border-burgundy bg-white ring-2 ring-burgundy/15 shadow-sm'
                    : 'border-champagne hover:border-burgundy/40 bg-white'
                }`}
              >
                <p className="font-serif text-lg font-medium text-espresso mb-0.5">Sì, sarò presente!</p>
                <p className="text-xs text-espresso/60 font-sans">Festeggeremo insieme a Tana di Volpe</p>
              </button>

              <button
                type="button"
                onClick={() => setFormData({ ...formData, attendance: 'declined' })}
                className={`p-5 rounded-2xl border text-left transition-all ${
                  formData.attendance === 'declined'
                    ? 'border-burgundy bg-white ring-2 ring-burgundy/15 shadow-sm'
                    : 'border-champagne hover:border-burgundy/40 bg-white'
                }`}
              >
                <p className="font-serif text-lg font-medium text-espresso mb-0.5">Non potrò esserci</p>
                <p className="text-xs text-espresso/60 font-sans">Vi sarò vicino con il pensiero</p>
              </button>
            </div>

            {/* Nome e Cognome */}
            <div>
              <label htmlFor="fullName" className="block text-xs uppercase tracking-[0.2em] font-medium text-espresso/80 font-sans mb-2">
                Nome e Cognome <span className="text-burgundy">*</span>
              </label>
              <input
                id="fullName"
                type="text"
                required
                maxLength={100}
                placeholder="Es. Mario Rossi"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl border border-champagne focus:border-burgundy focus:ring-2 focus:ring-burgundy/15 bg-white text-espresso placeholder:text-espresso/35 text-sm font-sans"
              />
            </div>

            {/* Telefono / WhatsApp */}
            <div>
              <label htmlFor="phone" className="block text-xs uppercase tracking-[0.2em] font-medium text-espresso/80 font-sans mb-2">
                Telefono / WhatsApp <span className="text-espresso/50 font-normal lowercase">(facoltativo)</span>
              </label>
              <input
                id="phone"
                type="tel"
                placeholder="Es. 333 1234567"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl border border-champagne focus:border-burgundy focus:ring-2 focus:ring-burgundy/15 bg-white text-espresso placeholder:text-espresso/35 text-sm font-sans"
              />
            </div>

            {/* Conteggio Ospiti */}
            {formData.attendance === 'attending' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-5 rounded-2xl bg-white border border-champagne">
                  <div>
                    <label htmlFor="adultsCount" className="block text-xs uppercase tracking-[0.2em] font-medium text-espresso/80 font-sans mb-1.5">
                      Numero Adulti
                    </label>
                    <select
                      id="adultsCount"
                      value={formData.adultsCount}
                      onChange={(e) => handleAdultsChange(Number(e.target.value))}
                      className="w-full px-4 py-3 rounded-xl border border-champagne focus:border-burgundy bg-white text-espresso text-sm font-sans"
                    >
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 1 ? 'Adulto' : 'Adulti'}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="childrenCount" className="block text-xs uppercase tracking-[0.2em] font-medium text-espresso/80 font-sans mb-1.5">
                      Bambini (Menù Baby)
                    </label>
                    <select
                      id="childrenCount"
                      value={formData.childrenCount}
                      onChange={(e) => handleChildrenChange(Number(e.target.value))}
                      className="w-full px-4 py-3 rounded-xl border border-champagne focus:border-burgundy bg-white text-espresso text-sm font-sans"
                    >
                      {[0, 1, 2, 3, 4].map((num) => (
                        <option key={num} value={num}>
                          {num} {num === 0 ? 'Nessun bambino' : num === 1 ? '1 Bambino' : `${num} Bambini`}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Dettaglio Accompagnatori Selezionati */}
                {companions.length > 0 && (
                  <div className="p-5 rounded-2xl bg-white border border-champagne shadow-sm space-y-3">
                    <p className="text-xs uppercase tracking-[0.2em] font-semibold text-espresso font-sans">
                      Dettaglio Accompagnatori ({companions.length})
                    </p>

                    <div className="space-y-3">
                      {companions.map((comp, idx) => (
                        <div key={comp.id || idx} className="p-3.5 rounded-xl bg-white border border-champagne/80 text-xs">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-espresso text-sm font-serif">
                              {comp.isChild ? `Bambino ${idx + 1}` : `Accompagnatore Adulto ${idx + 1}`}
                            </span>
                            <span className="text-[10px] uppercase tracking-wider text-sage font-medium font-sans">
                              {comp.isChild ? 'Menù Baby' : 'Ospite'}
                            </span>
                          </div>
                          <input
                            type="text"
                            placeholder={comp.isChild ? "Nome del bambino ed età" : "Nome e Cognome accompagnatore"}
                            maxLength={80}
                            value={comp.fullName}
                            onChange={(e) => updateCompanion(idx, 'fullName', e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-champagne bg-white text-espresso text-xs mb-2 font-sans"
                          />
                          <input
                            type="text"
                            placeholder="Eventuali intolleranze o allergie alimentari"
                            maxLength={150}
                            value={comp.dietaryNotes || ''}
                            onChange={(e) => updateCompanion(idx, 'dietaryNotes', e.target.value)}
                            className="w-full px-3 py-2 rounded-lg border border-champagne bg-white text-espresso text-xs font-sans"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Intolleranze e Regimi Alimentari */}
            {formData.attendance === 'attending' && (
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] font-medium text-espresso/80 font-sans mb-2.5">
                  Allergie, Intolleranze o Preferenze Alimentari
                </label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {commonDietaryTags.map((tag) => {
                    const isSelected = selectedTags.includes(tag);
                    return (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => handleTagToggle(tag)}
                        className={`text-xs px-3.5 py-2 rounded-full border transition-all font-sans ${
                          isSelected
                            ? 'bg-sage text-white border-sage shadow-sm font-medium'
                            : 'bg-white text-espresso/80 border-champagne hover:border-burgundy'
                        }`}
                      >
                        {tag}
                      </button>
                    );
                  })}
                </div>
                <input
                  type="text"
                  placeholder="Note aggiuntive per la cucina..."
                  maxLength={300}
                  value={formData.dietaryNotes}
                  onChange={(e) => setFormData({ ...formData, dietaryNotes: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-champagne focus:border-burgundy bg-white text-espresso placeholder:text-espresso/35 text-sm font-sans"
                />
              </div>
            )}

            {/* Brano Musicale */}
            {formData.attendance === 'attending' && (
              <div>
                <label htmlFor="song" className="block text-xs uppercase tracking-[0.2em] font-medium text-espresso/80 font-sans mb-2">
                  Un brano che vorresti ascoltare durante la festa?
                </label>
                <input
                  id="song"
                  type="text"
                  placeholder="Titolo e Autore (es. Coldplay - Viva La Vida)"
                  maxLength={120}
                  value={formData.songSuggestion}
                  onChange={(e) => setFormData({ ...formData, songSuggestion: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-champagne focus:border-burgundy bg-white text-espresso placeholder:text-espresso/35 text-sm font-sans"
                />
              </div>
            )}

            {/* Richiesta Transfer */}
            {formData.attendance === 'attending' && (
              <div className="p-4 rounded-xl bg-white border border-champagne flex items-start gap-3">
                <input
                  id="needTransfer"
                  type="checkbox"
                  checked={formData.needTransfer}
                  onChange={(e) => setFormData({ ...formData, needTransfer: e.target.checked })}
                  className="mt-1 h-4 w-4 rounded border-champagne text-burgundy focus:ring-burgundy"
                />
                <label htmlFor="needTransfer" className="text-xs text-espresso leading-relaxed cursor-pointer font-sans">
                  <span className="font-semibold block text-espresso mb-0.5">
                    Richiesta Informazioni Navetta / Transfer
                  </span>
                  <span className="text-espresso/70">
                    Spunta se prevedi di arrivare in treno (Stazione Capaccio / Paestum) o necessiti di supporto logistico.
                  </span>
                </label>
              </div>
            )}

            {/* Messaggio per gli Sposi */}
            <div>
              <label htmlFor="message" className="block text-xs uppercase tracking-[0.2em] font-medium text-espresso/80 font-sans mb-2">
                Un pensiero o messaggio per noi <span className="text-espresso/50 font-normal lowercase">(facoltativo)</span>
              </label>
              <textarea
                id="message"
                rows={3}
                placeholder="Scrivi qui i tuoi auguri per Michele e Miriana..."
                maxLength={500}
                value={formData.wishesMessage}
                onChange={(e) => setFormData({ ...formData, wishesMessage: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-champagne focus:border-burgundy bg-white text-espresso placeholder:text-espresso/35 text-sm font-sans"
              />
            </div>

            {status === 'error' && (
              <div className="p-4 rounded-xl bg-burgundy/10 border border-burgundy/30 text-burgundy text-xs flex items-center gap-2 font-sans">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Bottone di Invio */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full text-sm py-4 shadow-lg"
              >
                {status === 'loading' ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Invio in corso...</span>
                  </span>
                ) : (
                  <span>Conferma Partecipazione RSVP</span>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

import React, { useState, useEffect } from 'react';
import { X, Utensils, Music, Download, Lock, RefreshCw, Bus, CreditCard, Users, Check } from 'lucide-react';
import { RsvpSubmission } from '../types/wedding';
import { getAllRsvps } from '../lib/supabase';
import { getBankSettings, saveBankSettings, BankSettings } from '../lib/bankSettings';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({ isOpen, onClose }) => {
  const [pin, setPin] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<'guests' | 'iban'>('guests');
  const [rsvps, setRsvps] = useState<RsvpSubmission[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState<'all' | 'attending' | 'declined'>('all');

  // Gestione stato dati bancari
  const [bankFormData, setBankFormData] = useState<BankSettings>(getBankSettings);
  const [bankSaved, setBankSaved] = useState(false);

  const CORRECT_PIN = '2027';

  const loadData = async () => {
    setIsLoading(true);
    const data = await getAllRsvps();
    setRsvps(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadData();
      setBankFormData(getBankSettings());
    }
  }, [isAuthenticated]);

  if (!isOpen) return null;

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === CORRECT_PIN || pin === 'MM2027') {
      setIsAuthenticated(true);
    } else {
      alert('PIN non corretto. Inserisci 2027.');
    }
  };

  const handleSaveBank = (e: React.FormEvent) => {
    e.preventDefault();
    saveBankSettings(bankFormData);
    setBankSaved(true);
    setTimeout(() => setBankSaved(false), 3000);
  };

  const attendingList = rsvps.filter((r) => r.attendance === 'attending');
  const declinedList = rsvps.filter((r) => r.attendance === 'declined');
  const totalAdults = attendingList.reduce((acc, curr) => acc + (curr.adultsCount || 1), 0);
  const totalChildren = attendingList.reduce((acc, curr) => acc + (curr.childrenCount || 0), 0);
  const transferRequests = attendingList.filter((r) => r.needTransfer).length;

  const dietaryMap: Record<string, number> = {};
  attendingList.forEach((r) => {
    (r.dietaryTags || []).forEach((tag) => {
      if (tag !== 'Nessuna limitazione') {
        dietaryMap[tag] = (dietaryMap[tag] || 0) + 1;
      }
    });
  });

  const exportCsv = () => {
    const headers = [
      'Data Ricezione',
      'Nome e Cognome',
      'Presenza',
      'Adulti',
      'Bambini',
      'Accompagnatori',
      'Telefono',
      'Intolleranze Selezionate',
      'Note Cucina',
      'Richiesta Transfer',
      'Canzone Suggerita',
      'Messaggio',
    ];

    const rows = rsvps.map((r) => [
      new Date(r.createdAt).toLocaleDateString('it-IT'),
      `"${r.fullName.replace(/"/g, '""')}"`,
      r.attendance === 'attending' ? 'Presente' : 'Non presente',
      r.adultsCount,
      r.childrenCount,
      `"${(r.companions || []).map((c) => `${c.fullName} (${c.isChild ? 'Bambino' : 'Adulto'}${c.dietaryNotes ? ' - ' + c.dietaryNotes : ''})`).join(' | ').replace(/"/g, '""')}"`,
      `"${(r.phone || '').replace(/"/g, '""')}"`,
      `"${(r.dietaryTags || []).join(', ')}"`,
      `"${(r.dietaryNotes || '').replace(/"/g, '""')}"`,
      r.needTransfer ? 'Sì' : 'No',
      `"${(r.songSuggestion || '').replace(/"/g, '""')}"`,
      `"${(r.wishesMessage || '').replace(/"/g, '""')}"`,
    ]);

    const csvContent =
      'data:text/csv;charset=utf-8,\uFEFF' +
      [headers.join(';'), ...rows.map((row) => row.join(';'))].join('\r\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute(
      'download',
      `rsvp-matrimonio-michele-miriana-${new Date().toISOString().slice(0, 10)}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const filteredRsvps = rsvps.filter((r) => {
    if (filter === 'all') return true;
    return r.attendance === filter;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#281D17]/70 backdrop-blur-md">
      <div className="bg-white rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl border border-champagne p-6 sm:p-8 relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-paper-subtle text-espresso transition-colors"
          title="Chiudi"
        >
          <X className="w-6 h-6" />
        </button>

        {!isAuthenticated ? (
          <div className="max-w-md mx-auto py-12 text-center">
            <div className="w-14 h-14 rounded-full bg-blush/20 text-burgundy mx-auto flex items-center justify-center mb-4 border border-blush/30">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-medium text-espresso mb-2">
              Area Riservata agli Sposi
            </h3>
            <p className="text-xs text-espresso/70 mb-6 font-sans">
              Inserisci il PIN per visualizzare gli ospiti confermati o modificare le coordinate bancarie per la lista nozze.
            </p>
            <form onSubmit={handlePinSubmit} className="space-y-4">
              <input
                type="password"
                placeholder="PIN (es. 2027)"
                value={pin}
                onChange={(e) => setPin(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-champagne focus:border-burgundy focus:ring-2 focus:ring-burgundy/20 text-center text-lg font-mono tracking-widest bg-white"
                autoFocus
              />
              <button type="submit" className="btn-primary w-full text-sm">
                Accedi alla Dashboard
              </button>
            </form>
          </div>
        ) : (
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-champagne/60 mb-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-burgundy font-sans">
                  Pannello di Controllo Sposi
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-espresso font-normal">
                  Michele &amp; Miriana • Nozze 2027
                </h3>
              </div>

              {/* Tab Selector */}
              <div className="flex items-center gap-1.5 p-1 bg-paper-subtle rounded-xl border border-champagne/60 self-start sm:self-auto">
                <button
                  type="button"
                  onClick={() => setActiveTab('guests')}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors font-sans ${
                    activeTab === 'guests'
                      ? 'bg-burgundy text-white shadow-sm'
                      : 'text-espresso/70 hover:text-espresso'
                  }`}
                >
                  <Users className="w-3.5 h-3.5" />
                  <span>Ospiti ({rsvps.length})</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('iban')}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors font-sans ${
                    activeTab === 'iban'
                      ? 'bg-burgundy text-white shadow-sm'
                      : 'text-espresso/70 hover:text-espresso'
                  }`}
                >
                  <CreditCard className="w-3.5 h-3.5" />
                  <span>Gestione IBAN</span>
                </button>
              </div>
            </div>

            {/* TAB 1: GESTIONE IBAN E COORDINATE */}
            {activeTab === 'iban' && (
              <div className="max-w-2xl mx-auto py-4">
                <div className="p-6 rounded-2xl border border-champagne bg-paper-subtle/50 mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <CreditCard className="w-5 h-5 text-burgundy" />
                    <h4 className="font-serif text-xl font-medium text-espresso">
                      Coordinate Bancarie &amp; Lista Nozze
                    </h4>
                  </div>
                  <p className="text-xs text-espresso/70 font-sans leading-relaxed">
                    Modifica qui le informazioni che compaiono nella sezione <strong>Lista Nozze &amp; Luna di Miele</strong> del sito. I cambiamenti avranno effetto immediato sul sito.
                  </p>
                </div>

                <form onSubmit={handleSaveBank} className="space-y-5 bg-white p-6 rounded-2xl border border-champagne shadow-sm">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-espresso mb-1.5 font-sans">
                      Codice IBAN
                    </label>
                    <input
                      type="text"
                      value={bankFormData.iban}
                      onChange={(e) => setBankFormData({ ...bankFormData, iban: e.target.value })}
                      placeholder="es. IT60 X 05428 11101 000000123456"
                      className="w-full px-4 py-2.5 rounded-xl border border-champagne focus:border-burgundy focus:ring-2 focus:ring-burgundy/20 font-mono text-sm tracking-wide bg-white"
                      required
                    />
                    <p className="text-[11px] text-espresso/50 mt-1 font-sans">
                      Puoi inserire l'IBAN con o senza spazi: il pulsante "Copia" sul sito copierà automaticamente la versione pulita.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-espresso mb-1.5 font-sans">
                        Intestatari del Conto
                      </label>
                      <input
                        type="text"
                        value={bankFormData.intestatari}
                        onChange={(e) => setBankFormData({ ...bankFormData, intestatari: e.target.value })}
                        placeholder="Michele & Miriana"
                        className="w-full px-4 py-2.5 rounded-xl border border-champagne focus:border-burgundy focus:ring-2 focus:ring-burgundy/20 text-sm font-sans bg-white"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-espresso mb-1.5 font-sans">
                        Nome Banca / Modalità
                      </label>
                      <input
                        type="text"
                        value={bankFormData.banca}
                        onChange={(e) => setBankFormData({ ...bankFormData, banca: e.target.value })}
                        placeholder="es. Bonifico Bancario / Intesa Sanpaolo"
                        className="w-full px-4 py-2.5 rounded-xl border border-champagne focus:border-burgundy focus:ring-2 focus:ring-burgundy/20 text-sm font-sans bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-espresso mb-1.5 font-sans">
                      Causale Suggerita
                    </label>
                    <input
                      type="text"
                      value={bankFormData.causale}
                      onChange={(e) => setBankFormData({ ...bankFormData, causale: e.target.value })}
                      placeholder="Regalo Nozze Michele e Miriana"
                      className="w-full px-4 py-2.5 rounded-xl border border-champagne focus:border-burgundy focus:ring-2 focus:ring-burgundy/20 text-sm font-sans bg-white"
                      required
                    />
                  </div>

                  <div className="pt-3 flex items-center justify-between border-t border-champagne/60">
                    {bankSaved ? (
                      <span className="text-xs text-sage font-medium font-sans flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-sage" />
                        Coordinate salvate e aggiornate con successo!
                      </span>
                    ) : (
                      <span className="text-xs text-espresso/50 font-sans">
                        Le modifiche saranno visibili a tutti i visitatori.
                      </span>
                    )}

                    <button
                      type="submit"
                      className="btn-primary text-xs py-2.5 px-6 font-sans shadow-md"
                    >
                      Salva Coordinate
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* TAB 2: LISTA OSPITI & RSVP */}
            {activeTab === 'guests' && (
              <>
                <div className="flex items-center justify-end gap-2 mb-6">
                  <button
                    type="button"
                    onClick={loadData}
                    disabled={isLoading}
                    className="btn-secondary text-xs py-2 px-3 gap-1.5"
                    title="Aggiorna dati"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
                    Aggiorna
                  </button>
                  <button
                    type="button"
                    onClick={exportCsv}
                    className="btn-primary text-xs py-2 px-3 gap-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Esporta CSV
                  </button>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 mb-8">
                  <div className="bg-white p-4 rounded-2xl border border-champagne shadow-sm">
                    <span className="text-xs text-espresso/60 block font-sans">Adulti</span>
                    <span className="font-serif text-3xl font-light text-burgundy">{totalAdults}</span>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-champagne shadow-sm">
                    <span className="text-xs text-espresso/60 block font-sans">Bambini</span>
                    <span className="font-serif text-3xl font-light text-sage">{totalChildren}</span>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-champagne shadow-sm">
                    <span className="text-xs text-espresso/60 block font-sans">Famiglie OK</span>
                    <span className="font-serif text-3xl font-light text-espresso">{attendingList.length}</span>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-champagne shadow-sm">
                    <span className="text-xs text-espresso/60 block font-sans">Transfer</span>
                    <span className="font-serif text-3xl font-light text-burgundy/80">{transferRequests}</span>
                  </div>
                  <div className="bg-white p-4 rounded-2xl border border-champagne shadow-sm">
                    <span className="text-xs text-espresso/60 block font-sans">Assenti</span>
                    <span className="font-serif text-3xl font-light text-espresso/50">{declinedList.length}</span>
                  </div>
                </div>

                {/* Riepilogo Intolleranze per lo Chef */}
                {Object.keys(dietaryMap).length > 0 && (
                  <div className="bg-white p-4 sm:p-5 rounded-2xl border border-champagne mb-8 shadow-sm">
                    <div className="flex items-center gap-2 text-espresso font-serif text-base font-medium mb-3">
                      <Utensils className="w-4 h-4 text-burgundy" />
                      <span>Riepilogo Intolleranze per la Cucina:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {Object.entries(dietaryMap).map(([tag, count]) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full bg-sage-light text-sage text-xs font-medium border border-sage/20"
                        >
                          {tag}: <strong>{count}</strong>
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Filtro per stato presenza */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xs font-medium text-espresso/60 font-sans">Filtra:</span>
                  <div className="flex gap-1">
                    {(['all', 'attending', 'declined'] as const).map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => setFilter(mode)}
                        className={`text-xs px-3 py-1 rounded-full border transition-colors font-sans ${
                          filter === mode
                            ? 'bg-burgundy text-white border-burgundy'
                            : 'bg-white text-espresso/70 border-champagne hover:border-burgundy/40'
                        }`}
                      >
                        {mode === 'all' && `Tutti (${rsvps.length})`}
                        {mode === 'attending' && `Presenti (${attendingList.length})`}
                        {mode === 'declined' && `Assenti (${declinedList.length})`}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Elenco Ospiti */}
                {filteredRsvps.length === 0 ? (
                  <div className="text-center py-12 text-espresso/50 text-sm font-sans">
                    Nessuna risposta registrata con questo filtro.
                  </div>
                ) : (
                  <div className="divide-y divide-champagne/60 bg-white rounded-2xl border border-champagne overflow-hidden shadow-sm">
                    {filteredRsvps.map((item) => (
                      <div key={item.id} className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-start justify-between gap-4 hover:bg-paper-subtle/30 transition-colors">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span
                              className={`w-2.5 h-2.5 rounded-full ${
                                item.attendance === 'attending' ? 'bg-sage' : 'bg-espresso/40'
                              }`}
                            />
                            <h4 className="font-serif text-lg text-espresso font-medium">
                              {item.fullName}
                            </h4>
                            <span className="text-xs text-espresso/60 font-sans">
                              {item.phone && `• Tel: ${item.phone}`}
                            </span>
                          </div>

                          <div className="text-xs text-espresso/70 font-sans">
                            {item.attendance === 'attending' ? (
                              <span>
                                Confermati: <strong>{item.adultsCount} Adulti</strong>
                                {item.childrenCount ? `, <strong>${item.childrenCount} Bambini</strong>` : ''}
                              </span>
                            ) : (
                              <span className="text-espresso/50 italic">Non potrà essere presente</span>
                            )}
                          </div>

                          {item.companions && item.companions.length > 0 && (
                            <div className="mt-1.5 p-2.5 rounded-xl bg-paper-subtle/80 border border-champagne/60 text-xs space-y-1">
                              <span className="font-semibold text-espresso block text-[10px] uppercase tracking-wider font-sans">
                                Accompagnatori Registrati:
                              </span>
                              {item.companions.map((comp, cIdx) => (
                                <div key={cIdx} className="text-espresso/80 font-sans">
                                  • <strong>{comp.fullName || 'Accompagnatore'}</strong> ({comp.isChild ? 'Bambino' : 'Adulto'})
                                  {comp.dietaryNotes && <span className="text-burgundy"> - Note: {comp.dietaryNotes}</span>}
                                </div>
                              ))}
                            </div>
                          )}

                          {item.needTransfer && (
                            <p className="text-xs text-sage font-medium mt-1 font-sans flex items-center gap-1">
                              <Bus className="w-3.5 h-3.5" />
                              <span>Richiesta navetta/transfer da stazione o alloggio</span>
                            </p>
                          )}

                          {(item.dietaryTags?.length > 0 || item.dietaryNotes) && (
                            <p className="text-xs text-burgundy mt-1 font-sans">
                              <strong>Note Cucina:</strong> {item.dietaryTags?.join(', ')}{' '}
                              {item.dietaryNotes ? `(${item.dietaryNotes})` : ''}
                            </p>
                          )}

                          {item.songSuggestion && (
                            <p className="text-xs text-sage mt-1 flex items-center gap-1 font-sans">
                              <Music className="w-3 h-3" />
                              <span>Canzone: {item.songSuggestion}</span>
                            </p>
                          )}

                          {item.wishesMessage && (
                            <p className="text-xs italic text-espresso/70 mt-1 bg-paper-subtle p-2 rounded-lg font-serif">
                              «{item.wishesMessage}»
                            </p>
                          )}
                        </div>

                        <div className="text-right text-[11px] text-espresso/50 shrink-0 font-sans">
                          {new Date(item.createdAt).toLocaleDateString('it-IT', {
                            day: '2-digit',
                            month: 'short',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

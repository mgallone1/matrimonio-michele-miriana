export interface BankSettings {
  iban: string;
  intestatari: string;
  banca: string;
  causale: string;
}

export const DEFAULT_BANK_SETTINGS: BankSettings = {
  iban: 'IT02 L 12345 67890 000000123456',
  intestatari: 'Michele & Miriana',
  banca: 'Banca Nazionale del Lavoro (BNL)',
  causale: 'Regalo Nozze Michele e Miriana',
};

const BANK_STORAGE_KEY = 'michele_miriana_bank_settings_v1';

export function getBankSettings(): BankSettings {
  if (typeof window === 'undefined') return DEFAULT_BANK_SETTINGS;
  try {
    const raw = localStorage.getItem(BANK_STORAGE_KEY);
    if (!raw) return DEFAULT_BANK_SETTINGS;
    const parsed = JSON.parse(raw);
    return {
      iban: (parsed.iban && typeof parsed.iban === 'string') ? parsed.iban.trim() : DEFAULT_BANK_SETTINGS.iban,
      intestatari: (parsed.intestatari && typeof parsed.intestatari === 'string') ? parsed.intestatari.trim() : DEFAULT_BANK_SETTINGS.intestatari,
      banca: (parsed.banca && typeof parsed.banca === 'string') ? parsed.banca.trim() : DEFAULT_BANK_SETTINGS.banca,
      causale: (parsed.causale && typeof parsed.causale === 'string') ? parsed.causale.trim() : DEFAULT_BANK_SETTINGS.causale,
    };
  } catch {
    return DEFAULT_BANK_SETTINGS;
  }
}

export function saveBankSettings(settings: BankSettings): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(BANK_STORAGE_KEY, JSON.stringify(settings));
    window.dispatchEvent(new CustomEvent('bank_settings_updated', { detail: settings }));
  } catch (err) {
    console.warn('Errore nel salvataggio impostazioni bancarie:', err);
  }
}

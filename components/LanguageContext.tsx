'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Locale, TranslationKey, t as translate, LOCALES } from '@/lib/i18n';

const VALID_LOCALES = new Set(LOCALES.map(l => l.code));

interface LanguageContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: TranslationKey) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  locale: 'en',
  setLocale: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  // Load saved language on mount — validate it's still a supported locale
  useEffect(() => {
    const saved = localStorage.getItem('bridged-locale');
    if (saved && VALID_LOCALES.has(saved as Locale)) {
      setLocaleState(saved as Locale);
    } else if (saved) {
      // Stale locale (e.g. 'bn' or 'fa' removed in update) — clear it
      localStorage.removeItem('bridged-locale');
    }
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem('bridged-locale', l);
  };

  const t = (key: TranslationKey) => translate(locale, key);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

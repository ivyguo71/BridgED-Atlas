'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Locale, TranslationKey, t as translate } from '@/lib/i18n';

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

  // Load saved language on mount
  useEffect(() => {
    const saved = localStorage.getItem('bridged-locale') as Locale | null;
    if (saved) setLocaleState(saved);
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

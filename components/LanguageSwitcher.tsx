'use client';
import { LOCALES } from '@/lib/i18n';
import { useLanguage } from './LanguageContext';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  return (
    <div className="sticky top-0 z-50 bg-[var(--forest)] overflow-x-auto scrollbar-hide">
      <div className="flex items-center max-w-none px-5">
        {LOCALES.map((l) => (
          <button
            key={l.code}
            onClick={() => setLocale(l.code)}
            aria-label={`Switch to ${l.label}`}
            className={`shrink-0 px-2 py-1.5 text-[10px] font-bold tracking-widest uppercase transition-colors whitespace-nowrap
              ${locale === l.code
                ? 'text-[var(--terra2)]'
                : 'text-white/30 hover:text-white/60'
              }`}
          >
            {l.code}
          </button>
        ))}
      </div>
    </div>
  );
}

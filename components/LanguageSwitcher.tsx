'use client';
import { LOCALES } from '@/lib/i18n';
import { useLanguage } from './LanguageContext';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  return (
    <div className="sticky top-0 z-50 bg-[var(--green)] border-b border-white/10">
      <div className="flex items-center gap-0 px-6 overflow-x-auto scrollbar-hide max-w-none">
        {LOCALES.map((l, i) => (
          <button
            key={l.code}
            onClick={() => setLocale(l.code)}
            aria-label={`Switch to ${l.label}`}
            className={`shrink-0 px-2.5 py-2 text-[11px] font-semibold transition-colors whitespace-nowrap
              ${locale === l.code
                ? 'text-[oklch(0.62_0.17_40)] border-b-2 border-[oklch(0.62_0.17_40)]'
                : 'text-white/40 hover:text-white/80'
              }`}
          >
            {l.flag} {l.code.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
}

'use client';
import { useLanguage } from './LanguageContext';

interface HotlineStripProps {
  name: string;
  desc: string;
  phone?: string;
  url?: string;
  color?: 'red' | 'green' | 'blue';
}


export default function HotlineStrip({ name, desc, phone, url, color = 'blue' }: HotlineStripProps) {
  const { t } = useLanguage();
  const isRed = color === 'red';

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-5 border-b border-[var(--rule)]">
      <div className="flex-1 min-w-0">
        <div className="font-semibold text-[var(--ink)] text-sm">{name}</div>
        <div className="text-[var(--muted)] text-xs mt-0.5">{desc}</div>
      </div>
      <div className="shrink-0">
        {phone ? (
          <a
            href={`tel:${phone.replace(/[^+\d]/g, '')}`}
            className={`font-display text-xl tracking-tight hover:opacity-80 transition-opacity ${isRed ? 'text-[var(--terra)]' : 'text-[var(--sage)]'}`}
          >
            {phone}
          </a>
        ) : url ? (
          <a href={url} target="_blank" rel="noopener noreferrer"
            className="text-sm font-semibold text-[var(--sage)] underline hover:opacity-80">
            {t('ui.visit')} →
          </a>
        ) : null}
      </div>
    </div>
  );
}

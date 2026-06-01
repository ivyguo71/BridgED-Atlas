'use client';
import { useLanguage } from './LanguageContext';

interface HotlineStripProps {
  name: string;
  desc: string;
  phone?: string;
  url?: string;
  color?: 'red' | 'green' | 'blue';
}

const colorMap = {
  red: { bg: 'bg-red-50', border: 'border-red-200', badge: 'bg-red-600', text: 'text-red-700', phone: 'text-red-800' },
  green: { bg: 'bg-green-50', border: 'border-green-200', badge: 'bg-[#1A6B4A]', text: 'text-green-800', phone: 'text-green-900' },
  blue: { bg: 'bg-blue-50', border: 'border-blue-200', badge: 'bg-blue-700', text: 'text-blue-800', phone: 'text-blue-900' },
};

export default function HotlineStrip({ name, desc, phone, url, color = 'blue' }: HotlineStripProps) {
  const { t } = useLanguage();
  const c = colorMap[color];

  const isRed = color === 'red';

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 py-5 border-b border-[var(--line)]">
      <div className="flex-1 min-w-0">
        <div className="font-semibold text-[var(--ink)] text-sm">{name}</div>
        <div className="text-[var(--muted)] text-xs mt-0.5">{desc}</div>
      </div>
      <div className="shrink-0">
        {phone ? (
          <a
            href={`tel:${phone.replace(/[^+\d]/g, '')}`}
            className={`font-display text-xl tracking-tight hover:opacity-80 transition-opacity ${isRed ? 'text-[var(--terra)]' : 'text-[var(--green2)]'}`}
          >
            {phone}
          </a>
        ) : url ? (
          <a href={url} target="_blank" rel="noopener noreferrer"
            className="text-sm font-semibold text-[var(--green2)] underline hover:opacity-80">
            {t('ui.visit')} →
          </a>
        ) : null}
      </div>
    </div>
  );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useLanguage } from '@/components/LanguageContext';
import EmergencyBox from '@/components/EmergencyBox';

const resources = [
  { key: 'r1', icon: '🏛️', phone: '0570-078377', href: null },
  { key: 'r2', icon: '⚖️', phone: '03-6435-3040', href: null },
  { key: 'r3', icon: '🗂️', phone: null, href: null },
  { key: 'r4', icon: '🤝', phone: null, href: 'https://apfs.jp/en/talkwithapfs/' },
  { key: 'r5', icon: '🛡️', phone: null, href: null },
] as const;

export default function LegalPage() {
  const { t } = useLanguage();
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="text-[var(--terra)] text-xs font-bold uppercase tracking-widest mb-4">{t('page.legal.badge')}</p>
        <h1 className="font-display text-[var(--green)] mb-4" style={{fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '-0.03em', lineHeight: '1'}}>
          {t('legal.title')}
        </h1>
        <p className="text-[var(--muted)] text-lg leading-relaxed">{t('legal.subtitle')}</p>
      </div>

      <div className="mb-12">
        <EmergencyBox title={t('legal.emergency.title')} body={t('legal.emergency.body')} />
      </div>

      <div className="divide-y divide-[var(--line)]">
        {resources.map((r) => (
          <div key={r.key} className="py-8 flex gap-5">
            <span className="text-2xl shrink-0 mt-0.5">{r.icon}</span>
            <div className="flex-1">
              <h2 className="font-display text-[var(--ink)] text-lg mb-1.5" style={{letterSpacing: '-0.02em'}}>
                {t(`legal.${r.key}.title` as any)}
              </h2>
              <p className="text-[var(--muted)] text-sm leading-relaxed mb-3">{t(`legal.${r.key}.desc` as any)}</p>
              {r.phone && (
                <a href={`tel:${r.phone.replace(/[^+\d]/g, '')}`}
                  className="font-display text-xl text-[var(--green2)] hover:opacity-80 transition-opacity tracking-tight">
                  {r.phone}
                </a>
              )}
              {r.href && (
                <a href={r.href} target="_blank" rel="noopener noreferrer"
                  className="text-sm font-semibold text-[var(--terra)] hover:opacity-80 transition-opacity">
                  {t('ui.visit')} →
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

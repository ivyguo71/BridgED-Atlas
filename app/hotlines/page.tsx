/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useLanguage } from '@/components/LanguageContext';
import HotlineStrip from '@/components/HotlineStrip';
import EmergencyBox from '@/components/EmergencyBox';

const hotlines = [
  { key: 'h1', phone: '0120-279-338', color: 'green' },
  { key: 'h2', phone: '0570-078377',  color: 'green' },
  { key: 'h3', phone: '0570-00-6110', color: 'green' },
  { key: 'h4', phone: '03-6435-3040', color: 'green' },
  { key: 'h5', phone: '0570-013904',  color: 'green' },
  { key: 'h6', phone: '0120-279-889', color: 'green' },
  { key: 'h7', phone: '+81-3-5796-7112', color: 'green' },
  { key: 'h8', phone: '110',          color: 'red' },
  { key: 'h9', phone: '119',          color: 'red' },
  { key: 'h10', url: 'https://apfs.jp/en/talkwithapfs/', color: 'green' },
] as const;

export default function HotlinesPage() {
  const { t } = useLanguage();
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="text-[var(--terra)] text-xs font-bold uppercase tracking-widest mb-4">{t('page.hotlines.badge')}</p>
        <h1 className="font-display text-[var(--forest)] mb-4" style={{fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '-0.03em', lineHeight: '1'}}>
          {t('hotlines.title')}
        </h1>
        <p className="text-[var(--muted)] text-lg leading-relaxed">{t('hotlines.subtitle')}</p>
      </div>
      <div className="mb-10">
        <EmergencyBox title={t('ui.emergency')} body={t('hotlines.emergency')} />
      </div>
      <div>
        {hotlines.map((h) => (
          <HotlineStrip
            key={h.key}
            name={t(`hotlines.${h.key}` as any)}
            desc={t(`hotlines.${h.key}.desc` as any)}
            phone={'phone' in h ? h.phone : undefined}
            url={'url' in h ? h.url : undefined}
            color={h.color}
          />
        ))}
      </div>
    </div>
  );
}

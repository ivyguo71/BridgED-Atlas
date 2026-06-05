'use client';
import { Scale, Handshake, Clock, Banknote, Palmtree, Shield } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import EmergencyBox from '@/components/EmergencyBox';
import Checklist from '@/components/Checklist';

const sections = [
  { title: 'rights.s1.title' as const, body: 'rights.s1.body' as const, Icon: Scale },
  { title: 'rights.s2.title' as const, body: 'rights.s2.body' as const, Icon: Handshake },
  { title: 'rights.s3.title' as const, body: 'rights.s3.body' as const, Icon: Clock },
  { title: 'rights.s4.title' as const, body: 'rights.s4.body' as const, Icon: Banknote },
  { title: 'rights.s5.title' as const, body: 'rights.s5.body' as const, Icon: Palmtree },
  { title: 'rights.s6.title' as const, body: 'rights.s6.body' as const, Icon: Shield },
];

export default function RightsPage() {
  const { t } = useLanguage();
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="text-[var(--terra)] text-xs font-bold uppercase tracking-widest mb-4">{t('page.rights.badge')}</p>
        <h1 className="font-display text-[var(--forest)] mb-4" style={{fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '-0.03em', lineHeight: '1'}}>
          {t('rights.title')}
        </h1>
        <p className="text-[var(--muted)] text-lg leading-relaxed">{t('rights.subtitle')}</p>
      </div>

      <div className="mb-12">
        <EmergencyBox title={t('rights.s7.title')} body={t('rights.s7.body')} />
      </div>

      <div className="divide-y divide-[var(--rule)] mb-12">
        {sections.map((s) => (
          <div key={s.title} className="py-8 flex gap-5">
            <s.Icon size={20} className="shrink-0 mt-1 text-[var(--sage)]" strokeWidth={1.75} />
            <div>
              <h2 className="font-display text-[var(--ink)] text-lg mb-2" style={{letterSpacing: '-0.02em'}}>{t(s.title)}</h2>
              <p className="text-[var(--muted)] text-sm leading-relaxed">{t(s.body)}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mb-12">
        <Checklist title={t('rights.checklist.title')} items={[
          t('rights.checklist.1'), t('rights.checklist.2'),
          t('rights.checklist.3'), t('rights.checklist.4'),
        ]} />
      </div>

      <div className="bg-[var(--forest)] text-white rounded-2xl px-6 py-5">
        <h3 className="font-semibold text-base mb-2">{t('rights.pdf.title')}</h3>
        <a href="https://hataraku.metro.tokyo.lg.jp/multilingual/" target="_blank" rel="noopener noreferrer"
          className="text-white/70 hover:text-white underline text-sm transition-colors">
          {t('rights.pdf.link')}
        </a>
      </div>
    </div>
  );
}

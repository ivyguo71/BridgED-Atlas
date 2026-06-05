'use client';
import { Hospital, Briefcase, ClipboardList, Clock, Globe, Brain, Stethoscope } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';

const sections = [
  { title: 'health.s1.title' as const, body: 'health.s1.body' as const, Icon: Hospital },
  { title: 'health.s2.title' as const, body: 'health.s2.body' as const, Icon: Briefcase },
  { title: 'health.s3.title' as const, body: 'health.s3.body' as const, Icon: ClipboardList },
  { title: 'health.s4.title' as const, body: 'health.s4.body' as const, Icon: Clock },
  { title: 'health.s5.title' as const, body: 'health.s5.body' as const, Icon: Globe },
  { title: 'health.s6.title' as const, body: 'health.s6.body' as const, Icon: Brain },
  { title: 'health.s7.title' as const, body: 'health.s7.body' as const, Icon: Stethoscope },
];

export default function HealthPage() {
  const { t } = useLanguage();
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="text-[var(--terra)] text-xs font-bold uppercase tracking-widest mb-4">{t('page.health.badge')}</p>
        <h1 className="font-display text-[var(--forest)] mb-4" style={{fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '-0.03em', lineHeight: '1'}}>
          {t('health.title')}
        </h1>
        <p className="text-[var(--muted)] text-lg leading-relaxed">{t('health.subtitle')}</p>
      </div>
      <div className="divide-y divide-[var(--rule)]">
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
    </div>
  );
}

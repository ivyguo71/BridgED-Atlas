'use client';
import { Building2, CreditCard, Landmark, Home, BookOpen, GraduationCap, FileText } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import Checklist from '@/components/Checklist';

const sections = [
  { title: 'daily.s1.title' as const, body: 'daily.s1.body' as const, Icon: Building2 },
  { title: 'daily.s2.title' as const, body: 'daily.s2.body' as const, Icon: CreditCard },
  { title: 'daily.s3.title' as const, body: 'daily.s3.body' as const, Icon: Landmark },
  { title: 'daily.s4.title' as const, body: 'daily.s4.body' as const, Icon: Home },
  { title: 'daily.s5.title' as const, body: 'daily.s5.body' as const, Icon: BookOpen },
  { title: 'daily.s6.title' as const, body: 'daily.s6.body' as const, Icon: GraduationCap },
  { title: 'daily.s7.title' as const, body: 'daily.s7.body' as const, Icon: FileText },
];

export default function DailyPage() {
  const { t } = useLanguage();
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="text-[var(--terra)] text-xs font-bold uppercase tracking-widest mb-4">{t('page.daily.badge')}</p>
        <h1 className="font-display text-[var(--forest)] mb-4" style={{fontSize: 'clamp(2rem, 5vw, 3rem)', letterSpacing: '-0.03em', lineHeight: '1'}}>
          {t('daily.title')}
        </h1>
        <p className="text-[var(--muted)] text-lg leading-relaxed">{t('daily.subtitle')}</p>
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
      <Checklist title={t('daily.checklist.title')} numbered items={[
        t('daily.checklist.1'), t('daily.checklist.2'), t('daily.checklist.3'),
        t('daily.checklist.4'), t('daily.checklist.5'), t('daily.checklist.6'),
      ]} />
    </div>
  );
}

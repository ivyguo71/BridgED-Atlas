'use client';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageContext';

const topics = [
  {
    href: '/rights',
    emoji: '⚖️',
    titleKey: 'nav.rights' as const,
    descKey: 'home.cards.rights.desc' as const,
  },
  {
    href: '/health',
    emoji: '🏥',
    titleKey: 'nav.health' as const,
    descKey: 'home.cards.health.desc' as const,
  },
  {
    href: '/legal',
    emoji: '🤝',
    titleKey: 'nav.legal' as const,
    descKey: 'home.cards.legal.desc' as const,
  },
  {
    href: '/daily',
    emoji: '🏠',
    titleKey: 'nav.daily' as const,
    descKey: 'home.cards.daily.desc' as const,
  },
];

export default function HomePage() {
  const { t } = useLanguage();
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-[var(--green)] px-6 pt-16 pb-20">
        <div className="max-w-6xl mx-auto">

          {/* Kicker */}
          <p className="text-white/40 text-xs tracking-widest uppercase mb-10">
            APFS Network · Japan
          </p>

          {/* Headline — fills the space like the reference */}
          <h1
            className="font-display text-white leading-[0.92] mb-10"
            style={{
              fontSize: 'clamp(3rem, 10vw, 5.5rem)',
              letterSpacing: '-0.03em',
              textWrap: 'balance',
            }}
          >
            {t('home.hero.title')}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
            <p className="text-white/60 text-base max-w-sm leading-relaxed">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex gap-3 shrink-0">
              <Link
                href="/rights"
                className="bg-[var(--terra)] text-white font-bold px-7 py-3.5 rounded-full text-sm hover:opacity-90 transition-opacity"
              >
                {t('home.hero.cta2')}
              </Link>
              <Link
                href="/hotlines"
                className="border border-white/30 text-white/80 font-medium px-7 py-3.5 rounded-full text-sm hover:bg-white/10 transition-colors"
              >
                {t('nav.hotlines')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4 TOPICS — plain columns, no cards ─── */}
      <section className="bg-[var(--bg)] px-6 py-20 border-b border-[var(--line)]">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-x-8 gap-y-12">
          {topics.map((topic) => (
            <Link
              key={topic.href}
              href={topic.href}
              className="group flex flex-col gap-3"
            >
              <span className="text-3xl">{topic.emoji}</span>
              <strong className="font-display text-[var(--ink)] text-base group-hover:text-[var(--terra)] transition-colors" style={{letterSpacing: '-0.01em'}}>
                {t(topic.titleKey)}
              </strong>
              <p className="text-[var(--muted)] text-sm leading-relaxed">
                {t(topic.descKey)}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── EMERGENCY — plain text block, no card ─── */}
      <section className="bg-[var(--bg)] px-6 py-16">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-8">
          <div className="max-w-lg">
            <p className="text-[var(--terra)] text-xs font-bold uppercase tracking-widest mb-3">
              {t('ui.emergency')}
            </p>
            <p className="text-[var(--ink)] text-lg font-semibold leading-snug mb-2">
              {t('home.emergency.body')}
            </p>
          </div>
          <Link
            href="/hotlines"
            className="shrink-0 bg-[var(--green)] text-white font-bold px-7 py-4 rounded-full text-sm hover:opacity-90 transition-opacity"
          >
            {t('nav.hotlines')} →
          </Link>
        </div>
      </section>
    </>
  );
}

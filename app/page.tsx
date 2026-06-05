'use client';
import Link from 'next/link';
import { Scale, HeartPulse, Handshake, House, Phone, Link as LinkIcon, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';

const topics = [
  { href: '/rights',   Icon: Scale,      key: 'nav.rights' as const,  desc: 'home.cards.rights.desc' as const },
  { href: '/health',   Icon: HeartPulse, key: 'nav.health' as const,   desc: 'home.cards.health.desc' as const },
  { href: '/legal',    Icon: Handshake,  key: 'nav.legal' as const,    desc: 'home.cards.legal.desc' as const },
  { href: '/daily',    Icon: House,      key: 'nav.daily' as const,    desc: 'home.cards.daily.desc' as const },
];

export default function HomePage() {
  const { t } = useLanguage();
  return (
    <div>

      {/* ─── HERO ─── */}
      <section className="bg-[var(--cream)] px-5 sm:px-8 pt-10 pb-0 border-b border-[var(--rule)]">
        <div className="max-w-none">
          <h1
            className="font-display text-[var(--forest)] leading-[0.88]"
            style={{ fontSize: 'clamp(3.5rem, 12vw, 9rem)', letterSpacing: '-0.04em' }}
          >
            {t('home.hero.title')}
          </h1>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mt-8 pb-10 border-t border-[var(--rule)] pt-6">
            <p className="text-[var(--muted)] text-sm max-w-sm leading-relaxed">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex gap-2.5 shrink-0">
              <Link href="/rights"
                className="bg-[var(--terra)] text-white font-bold text-sm px-6 py-3 rounded-full hover:bg-[var(--terra2)] transition-colors flex items-center gap-1.5">
                {t('home.hero.cta2')} <ArrowRight size={14} />
              </Link>
              <Link href="/hotlines"
                className="border border-[var(--ink)] text-[var(--ink)] font-semibold text-sm px-6 py-3 rounded-full hover:bg-[var(--ink)] hover:text-[var(--cream)] transition-colors flex items-center gap-1.5">
                <Phone size={13} /> {t('nav.hotlines')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TOPICS ─── */}
      <section className="bg-[var(--white)]">
        {topics.map((topic) => (
          <Link key={topic.href} href={topic.href}
            className="group flex items-center justify-between px-5 sm:px-8 py-6 border-b border-[var(--rule)] hover:bg-[var(--cream)] transition-colors"
          >
            <div className="flex items-center gap-4 min-w-0">
              <topic.Icon
                size={20}
                className="shrink-0 text-[var(--muted)] group-hover:text-[var(--terra)] transition-colors"
                strokeWidth={1.75}
              />
              <span
                className="font-display text-[var(--forest)] group-hover:text-[var(--terra)] transition-colors"
                style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)', letterSpacing: '-0.02em' }}
              >
                {t(topic.key)}
              </span>
            </div>
            <div className="flex items-center gap-6 shrink-0 ml-4">
              <span className="hidden sm:block text-[var(--muted)] text-xs max-w-xs text-right leading-relaxed">
                {t(topic.desc)}
              </span>
              <ArrowRight size={16} className="text-[var(--muted)] group-hover:text-[var(--terra)] transition-colors" />
            </div>
          </Link>
        ))}
      </section>

      {/* Quick links */}
      <div className="bg-[var(--white)] border-b border-[var(--rule)] px-5 sm:px-8 py-4 flex gap-6">
        <Link href="/hotlines" className="flex items-center gap-1.5 text-sm font-semibold text-[var(--terra)] hover:opacity-70 transition-opacity">
          <Phone size={13} /> {t('nav.hotlines')}
        </Link>
        <Link href="/links" className="flex items-center gap-1.5 text-sm font-semibold text-[var(--sage)] hover:opacity-70 transition-opacity">
          <LinkIcon size={13} /> {t('nav.links')}
        </Link>
      </div>

      {/* ─── EMERGENCY BAR ─── */}
      <section className="bg-[var(--forest)] px-5 sm:px-8 py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <p className="text-[var(--terra2)] text-xs font-bold uppercase tracking-widest mb-1">{t('ui.emergency')}</p>
          <p className="text-white text-sm leading-relaxed max-w-lg">{t('home.emergency.body')}</p>
        </div>
        <div className="flex flex-col gap-1.5 shrink-0">
          <a href="tel:110" className="font-display text-white text-3xl hover:text-[var(--terra2)] transition-colors" style={{letterSpacing: '-0.03em'}}>110</a>
          <a href="tel:0570078377" className="font-display text-white/60 text-xl hover:text-[var(--terra2)] transition-colors" style={{letterSpacing: '-0.02em'}}>0570-078377</a>
        </div>
      </section>

    </div>
  );
}

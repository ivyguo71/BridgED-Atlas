'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from './LanguageContext';

export default function Navbar() {
  const { t } = useLanguage();
  const pathname = usePathname();

  const links = [
    { href: '/rights', label: t('nav.rights') },
    { href: '/health', label: t('nav.health') },
    { href: '/legal', label: t('nav.legal') },
    { href: '/daily', label: t('nav.daily') },
    { href: '/hotlines', label: t('nav.hotlines') },
    { href: '/links', label: t('nav.links') },
  ];

  return (
    <nav className="bg-[var(--cream)] border-b border-[var(--rule)] sticky top-[26px] z-40">
      <div className="flex items-center justify-between px-6 h-12 max-w-none">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          {/* Logo mark: bridge arch over a globe grid */}
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            {/* Globe circle */}
            <circle cx="14" cy="14" r="12" stroke="var(--forest)" strokeWidth="1.75" fill="none"/>
            {/* Latitude lines */}
            <ellipse cx="14" cy="14" rx="6" ry="12" stroke="var(--forest)" strokeWidth="1.25" fill="none"/>
            <line x1="2" y1="14" x2="26" y2="14" stroke="var(--forest)" strokeWidth="1.25"/>
            {/* Bridge arch over the top half */}
            <path d="M6 14 Q14 3 22 14" stroke="var(--terra)" strokeWidth="2.25" fill="none" strokeLinecap="round"/>
            {/* Bridge pillars */}
            <line x1="10" y1="14" x2="10" y2="10" stroke="var(--terra)" strokeWidth="1.75" strokeLinecap="round"/>
            <line x1="18" y1="14" x2="18" y2="10" stroke="var(--terra)" strokeWidth="1.75" strokeLinecap="round"/>
          </svg>
          <span className="font-display text-[var(--forest)] text-sm" style={{letterSpacing: '-0.01em'}}>
            BridgED Atlas
          </span>
        </Link>
        <div className="flex items-center overflow-x-auto scrollbar-hide gap-0">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-3 py-2.5 text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-colors
                ${pathname === l.href ? 'text-[var(--terra)]' : 'text-[var(--muted)] hover:text-[var(--ink)]'}`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

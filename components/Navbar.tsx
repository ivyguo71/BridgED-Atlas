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
    <nav className="bg-[var(--bg)] border-b border-[var(--line)]">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
        <Link href="/" className="font-display text-[var(--green)] text-lg tracking-tight shrink-0" style={{letterSpacing: '-0.02em'}}>
          BridgED Atlas
        </Link>
        <div className="flex items-center gap-0 overflow-x-auto scrollbar-hide">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`px-4 py-4 text-sm whitespace-nowrap transition-colors font-medium
                ${pathname === l.href
                  ? 'text-[var(--ink)]'
                  : 'text-[var(--muted)] hover:text-[var(--ink)]'
                }`}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}

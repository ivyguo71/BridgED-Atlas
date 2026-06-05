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
        <Link href="/" className="font-display text-[var(--forest)] text-sm shrink-0" style={{letterSpacing: '-0.01em'}}>
          BridgED Atlas
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

'use client';
import Link from 'next/link';
import { useLanguage } from './LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-[var(--green)] text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full bg-[oklch(0.62_0.16_40)] flex items-center justify-center">
                <span className="text-white text-[10px] font-black">BA</span>
              </div>
              <span className="font-display text-base tracking-tight">BridgED Atlas</span>
            </div>
            <p className="text-[oklch(0.62_0.07_155)] text-sm max-w-xs leading-relaxed">{t('footer.tagline')}</p>
          </div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-2.5 text-sm">
            {[
              { href: '/rights', label: t('nav.rights') },
              { href: '/health', label: t('nav.health') },
              { href: '/legal', label: t('nav.legal') },
              { href: '/daily', label: t('nav.daily') },
              { href: '/hotlines', label: t('nav.hotlines') },
              { href: '/links', label: t('nav.links') },
            ].map(l => (
              <Link key={l.href} href={l.href} className="text-[oklch(0.62_0.07_155)] hover:text-white transition-colors font-medium">{l.label}</Link>
            ))}
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-[oklch(0.48_0.05_155)]">
          <div>{t('footer.powered')}</div>
          <div>{t('footer.disclaimer')}</div>
        </div>
      </div>
    </footer>
  );
}

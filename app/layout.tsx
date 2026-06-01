import type { Metadata } from 'next';
import './globals.css';
import { LanguageProvider } from '@/components/LanguageContext';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'BridgED Atlas — Migrant Worker Resource Hub Japan',
  description: 'Multilingual resource hub for foreign workers in Japan. Labor rights, healthcare, legal aid, and emergency support. Powered by APFS Network.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">Skip to main content</a>
        <LanguageProvider>
          <LanguageSwitcher />
          <Navbar />
          <main id="main-content">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}

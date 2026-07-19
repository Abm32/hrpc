import { Search, Menu, X } from 'lucide-react';
import { useState } from 'react';

import { useLang } from '../i18n/LanguageContext';
import hrpcLogo from '../assets/hrpc_logo.png';

export default function SiteHeader() {
  const { t, lang, toggleLang } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: t('nav.home'), active: true },
    { label: t('nav.about'), active: false },
    { label: t('nav.activities'), active: false },
    { label: t('nav.services'), active: false },
    { label: t('nav.contact'), active: false },
  ];

  return (
    <header className="sticky top-0 w-full z-50 bg-white gov-shadow border-b border-outline-variant">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center gap-3 min-h-[4.5rem] lg:min-h-24 py-2.5 lg:py-3">
        <div className="flex items-center gap-2.5 sm:gap-3 lg:gap-4 min-w-0">
          <img
            src={hrpcLogo}
            alt="Human Rights Protection Council of Kerala logo"
            className="h-11 sm:h-14 lg:h-16 w-auto object-contain shrink-0"
          />
          <div className="flex flex-col border-l border-outline-variant pl-2.5 sm:pl-3 lg:pl-4 min-w-0">
            <span className="font-headline text-sm sm:text-base lg:text-xl font-bold text-primary leading-tight">
              {t('header.orgName')}
            </span>
            <span className="text-[11px] sm:text-xs lg:text-sm font-semibold text-secondary tracking-wider uppercase">
              HRPC KERALA
            </span>
            <span className="text-[9px] sm:text-[10px] text-gray-400 italic leading-tight">
              {t('header.regLine')}
            </span>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex gap-6 items-center shrink-0">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              className={
                link.active
                  ? 'text-primary font-bold border-b-2 border-primary py-1'
                  : 'text-on-surface hover:text-primary font-medium transition-colors'
              }
            >
              {link.label}
            </a>
          ))}
          <div className="flex gap-2 items-center ml-4">
            <button
              onClick={toggleLang}
              aria-label={lang === 'ml' ? 'Switch to English' : 'മലയാളത്തിലേക്ക് മാറുക'}
              className="bg-primary text-on-primary px-4 py-1.5 rounded text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              {lang === 'ml' ? t('header.toggleToEn') : t('header.toggleToMl')}
            </button>
            <button
              aria-label={t('header.search')}
              className="p-2 hover:bg-surface-container rounded-full transition-colors text-primary"
            >
              <Search size={20} />
            </button>
          </div>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-primary shrink-0 p-1"
          aria-label={menuOpen ? t('header.closeMenu') : t('header.openMenu')}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          className="lg:hidden border-t border-outline-variant bg-white px-4 sm:px-6 py-3"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href="#"
                  onClick={() => setMenuOpen(false)}
                  className={
                    link.active
                      ? 'block py-3 border-b border-outline-variant text-primary font-bold'
                      : 'block py-3 border-b border-outline-variant text-on-surface font-medium hover:text-primary transition-colors'
                  }
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 mt-4">
            <button
              onClick={toggleLang}
              aria-label={lang === 'ml' ? 'Switch to English' : 'മലയാളത്തിലേക്ക് മാറുക'}
              className="flex-1 bg-primary text-on-primary px-4 py-2.5 rounded text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              {lang === 'ml' ? t('header.toggleToEn') : t('header.toggleToMl')}
            </button>
            <button
              aria-label={t('header.search')}
              className="p-2.5 border border-outline-variant rounded-full transition-colors text-primary hover:bg-surface-container"
            >
              <Search size={20} />
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}

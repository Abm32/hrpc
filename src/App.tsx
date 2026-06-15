import { Megaphone } from 'lucide-react';

import { LanguageProvider, useLang } from './i18n/LanguageContext';
import TopBar from './components/TopBar';
import SiteHeader from './components/SiteHeader';
import HeroSection from './components/HeroSection';
import NewsSection from './components/NewsSection';
// import ServicesSection from './components/ServicesSection'; // Hidden for now
import OfficeBearers from './components/OfficeBearers';
import FilingGuide from './components/FilingGuide';
import SiteFooter from './components/SiteFooter';

function AppContent() {
  const { t } = useLang();

  return (
    <div className="bg-background text-on-surface font-body antialiased">
      <TopBar />
      <SiteHeader />
      <main>
        <HeroSection />
        <NewsSection />
        {/* <ServicesSection /> */}
        <OfficeBearers />
        <FilingGuide />
      </main>
      <SiteFooter />

      {/* Floating Action Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-40">
        <button className="bg-secondary text-on-secondary px-4 py-3 sm:px-6 rounded-full flex items-center gap-2 shadow-2xl hover:scale-105 active:scale-95 transition-all font-bold">
          <Megaphone size={18} className="shrink-0" />
          <span className="text-xs sm:text-sm">{t('fab.fileComplaint')}</span>
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

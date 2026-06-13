import { Megaphone } from 'lucide-react';

import TopBar from './components/TopBar';
import SiteHeader from './components/SiteHeader';
import HeroSection from './components/HeroSection';
import NewsSection from './components/NewsSection';
import ServicesSection from './components/ServicesSection';
import OfficeBearers from './components/OfficeBearers';
import FilingGuide from './components/FilingGuide';
import SiteFooter from './components/SiteFooter';

export default function App() {
  return (
    <div className="bg-background text-on-surface font-body antialiased">
      <TopBar />
      <SiteHeader />
      <main>
        <HeroSection />
        <NewsSection />
        <ServicesSection />
        <OfficeBearers />
        <FilingGuide />
      </main>
      <SiteFooter />

      {/* Floating Action Button */}
      <div className="fixed bottom-8 right-8 z-40">
        <button className="bg-secondary text-on-secondary px-6 py-3 rounded-full flex items-center gap-2 shadow-2xl hover:scale-105 active:scale-95 transition-all font-bold">
          <Megaphone size={18} />
          <span className="text-sm">പരാതി നൽകുക</span>
        </button>
      </div>
    </div>
  );
}

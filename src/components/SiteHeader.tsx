import { Search, Menu } from 'lucide-react';

const EMBLEM_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBvwXH6qkqXVsIR6xE9be2mWZZ8frY4v1I_-qxdHWaXaLkr_WLWflF_QyjmRd57gSjPTPhAZR89nli0rBWVvS4hJN2E89qJ7RmptzgAVcUBEvP7ReT0g1Rg9RsPuviFO54zGLZMqIoqXChsVqF7grTVY0tuyakuUUMt6VpQY0jJ3MyZDobkiRNY8VsRVJ1-LjF67ECHPOt2YdnEIDuiVXP_FI41_prPl4ztCgoB6miGxcc-lg42qOzaiTyBidBpG37V6A27Fu0dJXg5';

const navLinks = [
  { label: 'ഹോം', active: true },
  { label: 'ഞങ്ങളെക്കുറിച്ച്', active: false },
  { label: 'പ്രവർത്തനങ്ങൾ', active: false },
  { label: 'സേവനങ്ങൾ', active: false },
  { label: 'ബന്ധപ്പെടുക', active: false },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 w-full z-50 bg-white gov-shadow border-b border-outline-variant">
      <div className="max-w-container-max mx-auto px-10 flex justify-between items-center h-24">
        <div className="flex items-center gap-4">
          <img
            src={EMBLEM_URL}
            alt="Kerala State Emblem"
            className="h-16 w-auto object-contain"
          />
          <div className="flex flex-col border-l border-outline-variant pl-4">
            <span className="font-headline text-xl font-bold text-primary leading-tight">
              കേരള മനുഷ്യാവകാശ സംരക്ഷണ സമിതി
            </span>
            <span className="text-sm font-semibold text-secondary tracking-wider uppercase">
              HRPS KERALA
            </span>
            <span className="text-[10px] text-gray-400 italic">
              Reg. No. Q. 966/2001 | Estd. 1995
            </span>
          </div>
        </div>

        <nav className="hidden lg:flex gap-6 items-center">
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
            <button className="bg-primary text-on-primary px-4 py-1.5 rounded text-sm font-semibold hover:opacity-90 transition-opacity">
              English
            </button>
            <button className="p-2 hover:bg-surface-container rounded-full transition-colors text-primary">
              <Search size={20} />
            </button>
          </div>
        </nav>

        <button className="lg:hidden text-primary">
          <Menu size={30} />
        </button>
      </div>
    </header>
  );
}

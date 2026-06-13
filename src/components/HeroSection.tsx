import { ChevronRight, FileText } from 'lucide-react';

const HERO_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBuuRRKIYY7tipopWgguUYn1J-HutkHoPFJvCfocEVZgkRKYyK-fKSQbFM42BmYfHP9nPe1JucqO6jL9kXcXpicLWfgBTw7AxZWrtBW_06khk6aBmD9JWczI2KpvUd2z4Fl4AriRc1JV_J5UYsYaXZbi_HYOZfdGgcic1uuv9J8ImwK3GavrXmP0TJk5HRIo3PdXzPLvBJSgvp4dot9eY71dSWbvH0AhCoVKhMchEcFaioA0s1d8_8srSu14aX8R6MzU2TLnT8OJm9P';

export default function HeroSection() {
  return (
    <section id="main" className="relative py-16 bg-white overflow-hidden border-b border-outline-variant">
      <div className="max-w-container-max mx-auto px-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        <div className="lg:col-span-7">
          <nav aria-label="Breadcrumb" className="flex mb-6 text-sm text-gray-400 gap-2 items-center">
            <a href="#" className="hover:text-primary transition-colors">ഹോം</a>
            <ChevronRight size={14} />
            <span className="text-primary font-semibold">മുഖ്യ വാർത്തകൾ</span>
          </nav>

          <h1 className="font-headline text-4xl lg:text-5xl text-primary mb-6 leading-[1.2]">
            മനുഷ്യാവകാശ സംരക്ഷണത്തിനും പരിസ്ഥിതി പരിരക്ഷയ്ക്കുമായി ഒരു ഔദ്യോഗിക വേദി.
          </h1>

          <p className="text-lg text-gray-500 mb-8 max-w-2xl leading-relaxed">
            കേരളത്തിലെ സാധാരണക്കാരുടെ അവകാശങ്ങൾ സംരക്ഷിക്കുന്നതിനും പരിസ്ഥിതി സംരക്ഷണ
            പ്രവർത്തനങ്ങൾ ഏകോപിപ്പിക്കുന്നതിനും 1995 മുതൽ പ്രവർത്തിച്ചുവരുന്ന സമിതി.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-primary text-on-primary px-8 py-3.5 rounded font-bold shadow-md hover:opacity-95 flex items-center gap-2 transition-opacity">
              <FileText size={18} /> പരാതി സമർപ്പിക്കുക
            </button>
            <button className="border border-primary text-primary px-8 py-3.5 rounded font-bold hover:bg-primary/5 transition-colors">
              കൂടുതൽ അറിയുക
            </button>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded overflow-hidden gov-shadow border border-outline-variant relative">
            <img
              src={HERO_IMAGE}
              alt="Justice Scales"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute bottom-0 w-full bg-black/60 backdrop-blur-sm p-4 text-white">
              <p className="font-headline italic text-lg text-center leading-snug">
                "ഇന്ന് നട്ട ഒരു തൈ നാളെയുടെ ജീവവായുവാണ്"
              </p>
              <p className="text-xs text-right mt-2 opacity-80">- പരിസ്ഥിതി ദിനം 2024</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

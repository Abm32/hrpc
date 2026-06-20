import {
  LayoutGrid,
  Calendar,
  Newspaper,
  AlertCircle,
  Phone,
  FileText,
  Download,
  MapPin,
  ArrowRight,
  ChevronUp,
} from 'lucide-react';
import { useState } from 'react';

import { useLang } from '../i18n/LanguageContext';
import bloodCamp1 from '../assets/bloodcamp/photo_2026-06-13_23-19-29.jpg';
import bloodCamp2 from '../assets/bloodcamp/photo_2026-06-13_23-19-41.jpg';
import hrpcEvent from '../assets/hrpc_event.jpg';

// A single news article. Content stays in Malayalam (not translated), matching
// the existing editorial convention for local event reports.
interface Article {
  id: string;
  image: string;
  imageAlt: string;
  date: string;
  title: string;
  /** First paragraph shows collapsed; the rest reveal on "read full". */
  paragraphs: string[];
}

// Full blood-donation camp report (Malayalam content — kept as-is, not translated).
const BLOOD_CAMP_PARAGRAPHS = [
  'കൊല്ലം: ലോക രക്തദാന ദിനാചരണത്തോടനുബന്ധിച്ച് ജോയ് ആലുക്കാസ് ഫൗണ്ടേഷന്റെ നേതൃത്വത്തിൽ സംഘടിപ്പിച്ച വിപുലമായ രക്തദാന ക്യാമ്പ് ശ്രദ്ധേയമായി. വിവിധ സാമൂഹിക സംഘടനകൾ, രക്തദാന സേനകൾ, വിദ്യാഭ്യാസ സ്ഥാപനങ്ങൾ, സന്നദ്ധ പ്രവർത്തകർ, ജോയ് ആലുക്കാസ്, ജോളി സിൽക്ക്സ് ജീവനക്കാർ എന്നിവർ പങ്കെടുത്ത ക്യാമ്പിൽ നിരവധി യൂണിറ്റ് രക്തം ശേഖരിക്കപ്പെട്ടു.',
  'കൊല്ലം ജില്ലാ ആശുപത്രി ബ്ലഡ് ബാങ്കിന്റെ സഹകരണത്തോടെയാണ് ക്യാമ്പ് സംഘടിപ്പിച്ചത്. ബ്ലഡ് ബാങ്ക് മെഡിക്കൽ ഓഫീസർ ഡോ. ലാലു സുന്ദർ, ഡോ. ക്രയോഷിജ, ഹൗസ് സർജൻ ഡോ. ജെറിൻ ജെയിംസ് എന്നിവർ ക്യാമ്പിന് നേതൃത്വം നൽകി. ബ്ലഡ് ബാങ്ക് കൗൺസിലർ സനൂപ്, ടെക്നീഷ്യൻമാരായ അനാജു സേവ്യർ, നീതു സിലേഷ്, നഴ്സിംഗ് അസിസ്റ്റന്റ് സബീന, ബി.ടി.വി. ഡ്രൈവർ ബാബു പ്രശാന്ത്, അറ്റൻഡർ രഞ്ജിത്ത്, സ്റ്റാഫ് നഴ്സ് ലിജിയ സേവ്യർ എന്നിവരും സേവന രംഗത്ത് സജീവമായി പ്രവർത്തിച്ചു.',
  'ജോയി ആലുക്കാസ് ഫൗണ്ടേഷനെ പ്രതിനിധീകരിച്ച് മാനേജർ പ്രതീഷ് പി.വി, അസിസ്റ്റന്റ് മാനേജർ സുർജിത്, പി.ആർ.ഒ. എൻ. വിശ്വേശ്വരൻ പിള്ള, മാർക്കറ്റിംഗ് എക്സിക്യൂട്ടീവ് പ്രവീൺ, എച്ച്.ആർ. എക്സിക്യൂട്ടീവ് അലൻ ഷാജി, ഫ്ലോർ മാനേജർമാരായ ഉമേഷ്, അനൂപ്, ഭഗീഷ് മർക്കന്റൈസർ അരുൺ, അഭിലാഷ്, ആൽബിൻ ബാബു, കിഷോർ, ശില്പ, രോഷ്നി, ആതിര എന്നിവരും ക്യാമ്പിന്റെ വിജയത്തിനായി പ്രവർത്തിച്ചു.',
  'കേരള മനുഷ്യാവകാശ സംരക്ഷണ സമിതി സംസ്ഥാന പ്രസിഡന്റ് ഡോ. അയത്തിൽ അൻസർ രക്തം ദാനം ചെയ്തു കൊണ്ട് ഉദ്ഘാടനം ചെയ്തു. സാമൂഹിക പ്രവർത്തകനായ ഷിബു റാവുത്തർ രക്തദാന സന്ദേശം നൽകി, മിനിമോൾ മെമ്മോറിയൽ ഫൗണ്ടേഷൻ രക്തദാന സേന കോർഡിനേറ്റർ സെബാസ്റ്റ്യൻ, വഹാബ് അയത്തിൽ, മിത്രയ ബ്ലഡ് ഡൊണേഷൻ കോർഡിനേറ്റർ ശ്യാം മിത്രയ, ആർദ്രം രക്തദാന സേന കോർഡിനേറ്റർ അജിത് കുമാർ, ഫാത്തിമ മാതാ നാഷണൽ കോളേജിലെ എൻ.എസ്.എസ്. പ്രോഗ്രാം ഓഫീസർ ഡോ. മഞ്ജു സെബാസ്റ്റ്യൻ ജോയ് ആലുക്കാസ് ജോളി സിൽക്ക്സ് സ്റ്റാഫുകൾ എന്നിവർ ചടങ്ങിൽ പങ്കെടുത്തു.',
  'മിനിമോൾ മെമ്മോറിയൽ ഫൗണ്ടേഷൻ രക്തദാന സേന, മിത്രയ ബ്ലഡ് ഡൊണേഷൻ, ആർദ്രം രക്തദാന സേന, കൊല്ലം സൗഹൃദ കൂട്ടായ്മ, ഫാത്തിമ മാതാ നാഷണൽ കോളേജ്, കോളേജ് ഓഫ് എഞ്ചിനീയറിംഗ് പെരുമൺ എൻ.എസ്.എസ് യൂണിറ്റിലെ അംഗങ്ങൾ ഐറ്റിഐ ചന്ദനത്തോപ്പ്, എസ് എൻ പോളി ടെക്നിക് എന്നിവയിലെ വിദ്യാർത്ഥികൾ സജീവമായി രക്തദാനം നടത്തി.',
  'ജോയിആലുക്കാസിലെയും ജോളി സിൽക്ക്സിലെയും ജീവനക്കാരും രക്തദാനം നടത്തി മാതൃകയായി. മനുഷ്യജീവൻ രക്ഷിക്കുന്ന മഹത്തായ സേവനത്തിൽ പങ്കാളികളാകാൻ സമൂഹത്തിലെ കൂടുതൽ പേർ മുന്നോട്ടുവരണമെന്ന് സംഘാടകർ അഭ്യർത്ഥിച്ചു.',
  'ചടങ്ങിൽ കേരള മനുഷ്യാവകാശ സംരക്ഷണ സമിതി സംസ്ഥാന പ്രസിഡന്റ് ഡോ. അയത്തിൽ അൻസർ തന്റെ 55-ാം വയസ്സിൽ 55-ാം തവണ രക്തദാനം നടത്തി മാതൃകയായി. അദ്ദേഹത്തിന്റെ ഈ പ്രവർത്തനം യുവജനങ്ങൾക്ക് വലിയ പ്രചോദനമായി മാറി.',
  '"രക്തദാനം മഹാദാനം, നിങ്ങളുടെ ഒരു യൂണിറ്റ് രക്തം മറ്റൊരാളുടെ ജീവിത പ്രതീക്ഷയാണ്" എന്ന സന്ദേശം ഉയർത്തിപ്പിടിച്ചുകൊണ്ടാണ് ക്യാമ്പ് സമാപിച്ചത്.',
];

// Articles available to feature. The first is shown by default; the rest appear
// as clickable items in the side panel and can be promoted to the main feature.
const ARTICLES: Article[] = [
  {
    id: 'minister-meeting',
    image: hrpcEvent,
    imageAlt: 'കേരള ആഭ്യന്തര മന്ത്രിയുമായുള്ള കൂടിക്കാഴ്ച',
    date: 'ജൂൺ 20, 2025',
    title:
      'കേരള മനുഷ്യാവകാശ സംരക്ഷണ സമിതി സംസ്ഥാന എക്സിക്യൂട്ടീവ് അംഗവും കേരളത്തിന്റെ ആഭ്യന്തര മന്ത്രിയുമായുള്ള കൂടിക്കാഴ്ച',
    paragraphs: [
      'കേരള മനുഷ്യാവകാശ സംരക്ഷണ സമിതിയുടെ സംസ്ഥാന എക്സിക്യൂട്ടീവ് അംഗവും കേരളത്തിന്റെ ആഭ്യന്തര മന്ത്രിയുമായി നടന്ന കൂടിക്കാഴ്ച ശ്രദ്ധേയമായി. സംസ്ഥാനത്തെ മനുഷ്യാവകാശ സംരക്ഷണ പ്രവർത്തനങ്ങളും പൊതുജന പരാതി പരിഹാരവും സംബന്ധിച്ച വിഷയങ്ങൾ കൂടിക്കാഴ്ചയിൽ ചർച്ച ചെയ്തു.',
    ],
  },
  {
    id: 'blood-camp',
    image: bloodCamp1,
    imageAlt: 'ലോക രക്തദാന ദിന ക്യാമ്പ്',
    date: 'ജൂൺ 14, 2025',
    title:
      '🩸 ലോക രക്തദാന ദിനാചരണത്തിന്റെ ഭാഗമായി വിപുലമായ രക്തദാന ക്യാമ്പ്; നിരവധി പേർ ജീവൻദാനത്തിന് കൈകോർത്തു 🩸',
    paragraphs: BLOOD_CAMP_PARAGRAPHS,
  },
  {
    id: 'env-seminar',
    image: bloodCamp2,
    imageAlt: 'പരിസ്ഥിതി സെമിനാർ - തിരുവനന്തപുരം',
    date: 'ഓഗസ്റ്റ് 02, 2025',
    title: 'പരിസ്ഥിതി സെമിനാർ - തിരുവനന്തപുരം',
    paragraphs: [
      'തിരുവനന്തപുരത്ത് സംഘടിപ്പിച്ച പരിസ്ഥിതി സെമിനാർ വിജയകരമായി പൂർത്തിയായി. പ്രകൃതി വിഭവ സംരക്ഷണവും പരിസ്ഥിതി അവബോധവും സംബന്ധിച്ച വിഷയങ്ങൾ സെമിനാറിൽ ചർച്ച ചെയ്തു.',
    ],
  },
];

export default function NewsSection() {
  const { t } = useLang();
  // Which article is shown as the main feature (defaults to the first/newest).
  const [activeId, setActiveId] = useState<string>(ARTICLES[0].id);
  // Whether the main feature is expanded to show all paragraphs.
  const [expanded, setExpanded] = useState(false);

  const activeArticle = ARTICLES.find((a) => a.id === activeId) ?? ARTICLES[0];
  const otherArticles = ARTICLES.filter((a) => a.id !== activeId);

  const visibleParagraphs = expanded
    ? activeArticle.paragraphs
    : activeArticle.paragraphs.slice(0, 1);

  // When the user picks a different article, show it collapsed from the top.
  function selectArticle(id: string) {
    setActiveId(id);
    setExpanded(false);
  }

  return (
    <section className="py-10 sm:py-14 lg:py-16 bg-surface-container/30">
      <div className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline mb-8 sm:mb-10 border-b border-outline-variant pb-4">
          <h2 className="font-headline text-2xl sm:text-3xl text-primary flex items-center gap-3">
            <LayoutGrid size={26} className="text-secondary shrink-0" />
            {t('news.heading')}
          </h2>
          <a href="#" className="text-primary font-bold hover:underline mt-3 md:mt-0">
            {t('news.viewAll')}
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Feature — the single active article */}
          <div className="lg:col-span-2 bg-white rounded gov-shadow overflow-hidden border border-outline-variant flex flex-col">
            <img
              src={activeArticle.image}
              alt={activeArticle.imageAlt}
              className="w-full h-48 sm:h-64 object-cover"
            />
            <div className="p-5 sm:p-8 flex flex-col flex-1">
              <div className="flex items-center flex-wrap gap-2 mb-4">
                <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-bold uppercase">
                  {t('news.badge')}
                </span>
                <span className="text-sm text-gray-400 flex items-center gap-1">
                  <Calendar size={14} /> {activeArticle.date}
                </span>
              </div>
              <h3 className="font-headline text-xl sm:text-2xl text-primary mb-4 leading-snug">
                {activeArticle.title}
              </h3>

              <div className="text-gray-600 leading-relaxed flex-1 space-y-4">
                {visibleParagraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}

                {/* Blood-camp's second photo shows only in the expanded view. */}
                {expanded && activeArticle.id === 'blood-camp' && (
                  <img
                    src={bloodCamp2}
                    alt="രക്തദാന ക്യാമ്പ്, ചടങ്ങ്"
                    className="w-full rounded border border-outline-variant mt-2"
                  />
                )}
              </div>

              {/* Only show the toggle when there's more than one paragraph. */}
              {activeArticle.paragraphs.length > 1 && (
                <button
                  onClick={() => setExpanded((v) => !v)}
                  aria-expanded={expanded}
                  className="self-start mt-6 inline-flex items-center gap-1 text-primary font-bold hover:gap-2 transition-all"
                >
                  {expanded ? (
                    <>
                      {t('news.showLess')} <ChevronUp size={18} />
                    </>
                  ) : (
                    <>
                      {t('news.readFull')} <ArrowRight size={18} />
                    </>
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Side Panel */}
          <div className="flex flex-col gap-6">
            {/* Other Reports — clickable; selecting one features it on the left */}
            <div className="bg-white p-6 rounded border-l-4 border-primary gov-shadow border border-outline-variant">
              <h4 className="font-bold text-primary mb-4 flex items-center gap-2">
                <Newspaper size={16} /> {t('news.otherReports')}
              </h4>
              <div className="space-y-3">
                {otherArticles.map((article) => (
                  <button
                    key={article.id}
                    onClick={() => selectArticle(article.id)}
                    className="w-full text-left flex gap-3 items-start group rounded p-1 -m-1 hover:bg-surface-container/60 transition-colors"
                  >
                    <img
                      src={article.image}
                      alt={article.imageAlt}
                      className="w-16 h-16 rounded object-cover shrink-0 border border-outline-variant"
                    />
                    <div className="min-w-0">
                      <p className="font-semibold text-sm leading-snug text-on-surface group-hover:text-primary transition-colors line-clamp-2">
                        {article.title}
                      </p>
                      <p className="text-[12px] text-gray-400 mt-1 flex items-center gap-1">
                        <Calendar size={12} /> {article.date}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Emergency Helpline */}
            <div className="bg-primary text-on-primary p-6 rounded gov-shadow">
              <h4 className="font-bold mb-2 flex items-center gap-2 text-lg">
                <AlertCircle size={22} /> {t('news.helplineTitle')}
              </h4>
              <p className="text-sm opacity-90 mb-4">
                {t('news.helplineDesc')}
              </p>
              <div className="text-xl sm:text-2xl font-bold font-headline flex items-center gap-2 flex-wrap">
                <Phone size={22} className="shrink-0" /> +91 9526775936
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-surface p-6 rounded border border-outline-variant border-dashed">
              <h4 className="font-bold text-on-surface mb-4">{t('news.quickLinks')}</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-sm flex items-center gap-2 hover:text-primary transition-colors">
                    <FileText size={15} /> {t('news.rtiAct')}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm flex items-center gap-2 hover:text-primary transition-colors">
                    <Download size={15} /> {t('news.appForms')}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm flex items-center gap-2 hover:text-primary transition-colors">
                    <MapPin size={15} /> {t('news.offices')}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

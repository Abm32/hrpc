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
  Youtube,
} from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

import { useLang } from '../i18n/LanguageContext';
import type { TranslatedString } from '../i18n/translations';
import bloodCamp1 from '../assets/bloodcamp/photo_2026-06-13_23-19-29.jpg';
import bloodCamp2 from '../assets/bloodcamp/photo_2026-06-13_23-19-41.jpg';
import env1 from '../assets/env1.jpg';
import env2 from '../assets/env2.jpg';
import hrpcEvent from '../assets/hrpc_event.jpg';

// A single news article. Every text field is bilingual ({ ml, en }) so the
// whole report renders in the active language.
interface Article {
  id: string;
  image: string;
  imageAlt: TranslatedString;
  date: TranslatedString;
  title: TranslatedString;
  /** First paragraph shows collapsed; the rest reveal on "read full". */
  paragraphs: TranslatedString[];
  /** Optional second photo shown only in the expanded view. */
  secondImage?: string;
  secondImageAlt?: TranslatedString;
  /** Optional YouTube (or other) video link shown in the expanded view. */
  videoUrl?: string;
}

// Full blood-donation camp report (bilingual).
const BLOOD_CAMP_PARAGRAPHS: TranslatedString[] = [
  {
    ml: 'കൊല്ലം: ലോക രക്തദാന ദിനാചരണത്തോടനുബന്ധിച്ച് ജോയ് ആലുക്കാസ് ഫൗണ്ടേഷന്റെ നേതൃത്വത്തിൽ സംഘടിപ്പിച്ച വിപുലമായ രക്തദാന ക്യാമ്പ് ശ്രദ്ധേയമായി. വിവിധ സാമൂഹിക സംഘടനകൾ, രക്തദാന സേനകൾ, വിദ്യാഭ്യാസ സ്ഥാപനങ്ങൾ, സന്നദ്ധ പ്രവർത്തകർ, ജോയ് ആലുക്കാസ്, ജോളി സിൽക്ക്സ് ജീവനക്കാർ എന്നിവർ പങ്കെടുത്ത ക്യാമ്പിൽ നിരവധി യൂണിറ്റ് രക്തം ശേഖരിക്കപ്പെട്ടു.',
    en: 'Kollam: A large blood-donation camp organised under the leadership of the Joy Alukkas Foundation as part of World Blood Donor Day drew wide attention. Several units of blood were collected at the camp, which saw participation from various social organisations, blood-donor forces, educational institutions, volunteers, and the staff of Joy Alukkas and Jolly Silks.',
  },
  {
    ml: 'കൊല്ലം ജില്ലാ ആശുപത്രി ബ്ലഡ് ബാങ്കിന്റെ സഹകരണത്തോടെയാണ് ക്യാമ്പ് സംഘടിപ്പിച്ചത്. ബ്ലഡ് ബാങ്ക് മെഡിക്കൽ ഓഫീസർ ഡോ. ലാലു സുന്ദർ, ഡോ. ക്രയോഷിജ, ഹൗസ് സർജൻ ഡോ. ജെറിൻ ജെയിംസ് എന്നിവർ ക്യാമ്പിന് നേതൃത്വം നൽകി. ബ്ലഡ് ബാങ്ക് കൗൺസിലർ സനൂപ്, ടെക്നീഷ്യൻമാരായ അനാജു സേവ്യർ, നീതു സിലേഷ്, നഴ്സിംഗ് അസിസ്റ്റന്റ് സബീന, ബി.ടി.വി. ഡ്രൈവർ ബാബു പ്രശാന്ത്, അറ്റൻഡർ രഞ്ജിത്ത്, സ്റ്റാഫ് നഴ്സ് ലിജിയ സേവ്യർ എന്നിവരും സേവന രംഗത്ത് സജീവമായി പ്രവർത്തിച്ചു.',
    en: 'The camp was organised with the cooperation of the Kollam District Hospital Blood Bank. Blood Bank Medical Officer Dr. Lalu Sundar, Dr. Krayoshija, and House Surgeon Dr. Jerin James led the camp. Blood Bank Counsellor Sanoop, technicians Anaju Xavier and Neethu Silesh, Nursing Assistant Sabeena, BTV driver Babu Prashanth, attender Ranjith, and Staff Nurse Lijiya Xavier were also actively involved in the service.',
  },
  {
    ml: 'ജോയി ആലുക്കാസ് ഫൗണ്ടേഷനെ പ്രതിനിധീകരിച്ച് മാനേജർ പ്രതീഷ് പി.വി, അസിസ്റ്റന്റ് മാനേജർ സുർജിത്, പി.ആർ.ഒ. എൻ. വിശ്വേശ്വരൻ പിള്ള, മാർക്കറ്റിംഗ് എക്സിക്യൂട്ടീവ് പ്രവീൺ, എച്ച്.ആർ. എക്സിക്യൂട്ടീവ് അലൻ ഷാജി, ഫ്ലോർ മാനേജർമാരായ ഉമേഷ്, അനൂപ്, ഭഗീഷ് മർക്കന്റൈസർ അരുൺ, അഭിലാഷ്, ആൽബിൻ ബാബു, കിഷോർ, ശില്പ, രോഷ്നി, ആതിര എന്നിവരും ക്യാമ്പിന്റെ വിജയത്തിനായി പ്രവർത്തിച്ചു.',
    en: 'Representing the Joy Alukkas Foundation, Manager Pratheesh P.V., Assistant Manager Surjith, PRO N. Visweswaran Pillai, Marketing Executive Praveen, HR Executive Alan Shaji, floor managers Umesh, Anoop and Bhageesh, merchandiser Arun, Abhilash, Albin Babu, Kishore, Shilpa, Roshni and Athira also worked towards the success of the camp.',
  },
  {
    ml: 'കേരള മനുഷ്യാവകാശ സംരക്ഷണ സമിതി സംസ്ഥാന പ്രസിഡന്റ് ഡോ. അയത്തിൽ അൻസർ രക്തം ദാനം ചെയ്തു കൊണ്ട് ഉദ്ഘാടനം ചെയ്തു. സാമൂഹിക പ്രവർത്തകനായ ഷിബു റാവുത്തർ രക്തദാന സന്ദേശം നൽകി, മിനിമോൾ മെമ്മോറിയൽ ഫൗണ്ടേഷൻ രക്തദാന സേന കോർഡിനേറ്റർ സെബാസ്റ്റ്യൻ, വഹാബ് അയത്തിൽ, മിത്രയ ബ്ലഡ് ഡൊണേഷൻ കോർഡിനേറ്റർ ശ്യാം മിത്രയ, ആർദ്രം രക്തദാന സേന കോർഡിനേറ്റർ അജിത് കുമാർ, ഫാത്തിമ മാതാ നാഷണൽ കോളേജിലെ എൻ.എസ്.എസ്. പ്രോഗ്രാം ഓഫീസർ ഡോ. മഞ്ജു സെബാസ്റ്റ്യൻ ജോയ് ആലുക്കാസ് ജോളി സിൽക്ക്സ് സ്റ്റാഫുകൾ എന്നിവർ ചടങ്ങിൽ പങ്കെടുത്തു.',
    en: 'Kerala Human Rights Protection Society State President Dr. Ayathil Ansar inaugurated the camp by donating blood. Social worker Shibu Rawther delivered the blood-donation message. Minimol Memorial Foundation blood-donor force coordinator Sebastian, Wahab Ayathil, Mithraya Blood Donation coordinator Shyam Mithraya, Ardram blood-donor force coordinator Ajith Kumar, and Fathima Matha National College NSS Programme Officer Dr. Manju Sebastian, along with the staff of Joy Alukkas and Jolly Silks, took part in the function.',
  },
  {
    ml: 'മിനിമോൾ മെമ്മോറിയൽ ഫൗണ്ടേഷൻ രക്തദാന സേന, മിത്രയ ബ്ലഡ് ഡൊണേഷൻ, ആർദ്രം രക്തദാന സേന, കൊല്ലം സൗഹൃദ കൂട്ടായ്മ, ഫാത്തിമ മാതാ നാഷണൽ കോളേജ്, കോളേജ് ഓഫ് എഞ്ചിനീയറിംഗ് പെരുമൺ എൻ.എസ്.എസ് യൂണിറ്റിലെ അംഗങ്ങൾ ഐറ്റിഐ ചന്ദനത്തോപ്പ്, എസ് എൻ പോളി ടെക്നിക് എന്നിവയിലെ വിദ്യാർത്ഥികൾ സജീവമായി രക്തദാനം നടത്തി.',
    en: 'Members of the Minimol Memorial Foundation blood-donor force, Mithraya Blood Donation, Ardram blood-donor force, the Kollam Sauhrida collective, Fathima Matha National College and the NSS unit of the College of Engineering Perumon, along with students of ITI Chandanathope and SN Polytechnic, actively donated blood.',
  },
  {
    ml: 'ജോയിആലുക്കാസിലെയും ജോളി സിൽക്ക്സിലെയും ജീവനക്കാരും രക്തദാനം നടത്തി മാതൃകയായി. മനുഷ്യജീവൻ രക്ഷിക്കുന്ന മഹത്തായ സേവനത്തിൽ പങ്കാളികളാകാൻ സമൂഹത്തിലെ കൂടുതൽ പേർ മുന്നോട്ടുവരണമെന്ന് സംഘാടകർ അഭ്യർത്ഥിച്ചു.',
    en: 'Employees of Joy Alukkas and Jolly Silks set an example by donating blood. The organisers appealed for more people from the community to come forward and take part in this noble service of saving human lives.',
  },
  {
    ml: 'ചടങ്ങിൽ കേരള മനുഷ്യാവകാശ സംരക്ഷണ സമിതി സംസ്ഥാന പ്രസിഡന്റ് ഡോ. അയത്തിൽ അൻസർ തന്റെ 55-ാം വയസ്സിൽ 55-ാം തവണ രക്തദാനം നടത്തി മാതൃകയായി. അദ്ദേഹത്തിന്റെ ഈ പ്രവർത്തനം യുവജനങ്ങൾക്ക് വലിയ പ്രചോദനമായി മാറി.',
    en: 'At the function, Kerala Human Rights Protection Society State President Dr. Ayathil Ansar set an example by donating blood for the 55th time at the age of 55. His act became a great inspiration to the youth.',
  },
  {
    ml: '"രക്തദാനം മഹാദാനം, നിങ്ങളുടെ ഒരു യൂണിറ്റ് രക്തം മറ്റൊരാളുടെ ജീവിത പ്രതീക്ഷയാണ്" എന്ന സന്ദേശം ഉയർത്തിപ്പിടിച്ചുകൊണ്ടാണ് ക്യാമ്പ് സമാപിച്ചത്.',
    en: 'The camp concluded upholding the message: "Blood donation is the greatest gift; your one unit of blood is another person\'s hope for life."',
  },
];

// Articles available to feature. The first is shown by default; the rest appear
// as clickable items in the side panel and can be promoted to the main feature.
const ARTICLES: Article[] = [
  {
    id: 'minister-meeting',
    image: hrpcEvent,
    imageAlt: {
      ml: 'കേരള ആഭ്യന്തര മന്ത്രിയുമായുള്ള കൂടിക്കാഴ്ച',
      en: 'Meeting with the Home Minister of Kerala',
    },
    date: { ml: 'ജൂൺ 20, 2025', en: 'June 20, 2025' },
    title: {
      ml: 'കേരള മനുഷ്യാവകാശ സംരക്ഷണ സമിതി സംസ്ഥാന എക്സിക്യൂട്ടീവ് അംഗവും കേരളത്തിന്റെ ആഭ്യന്തര മന്ത്രിയുമായുള്ള കൂടിക്കാഴ്ച',
      en: 'Meeting between a State Executive member of the Kerala Human Rights Protection Society and the Home Minister of Kerala',
    },
    paragraphs: [
      {
        ml: 'കേരള മനുഷ്യാവകാശ സംരക്ഷണ സമിതിയുടെ സംസ്ഥാന എക്സിക്യൂട്ടീവ് അംഗവും കേരളത്തിന്റെ ആഭ്യന്തര മന്ത്രിയുമായി നടന്ന കൂടിക്കാഴ്ച ശ്രദ്ധേയമായി. സംസ്ഥാനത്തെ മനുഷ്യാവകാശ സംരക്ഷണ പ്രവർത്തനങ്ങളും പൊതുജന പരാതി പരിഹാരവും സംബന്ധിച്ച വിഷയങ്ങൾ കൂടിക്കാഴ്ചയിൽ ചർച്ച ചെയ്തു.',
        en: 'A notable meeting was held between a State Executive member of the Kerala Human Rights Protection Society and the Home Minister of Kerala. Matters concerning human-rights protection activities in the state and the redressal of public grievances were discussed at the meeting.',
      },
    ],
  },
  {
    id: 'blood-camp',
    image: bloodCamp1,
    imageAlt: { ml: 'ലോക രക്തദാന ദിന ക്യാമ്പ്', en: 'World Blood Donor Day camp' },
    date: { ml: 'ജൂൺ 14, 2025', en: 'June 14, 2025' },
    title: {
      ml: '🩸 ലോക രക്തദാന ദിനാചരണത്തിന്റെ ഭാഗമായി വിപുലമായ രക്തദാന ക്യാമ്പ്; നിരവധി പേർ ജീവൻദാനത്തിന് കൈകോർത്തു 🩸',
      en: '🩸 Large blood-donation camp held as part of World Blood Donor Day; many joined hands to give the gift of life 🩸',
    },
    paragraphs: BLOOD_CAMP_PARAGRAPHS,
    secondImage: bloodCamp2,
    secondImageAlt: { ml: 'രക്തദാന ക്യാമ്പ്, ചടങ്ങ്', en: 'Blood-donation camp, function' },
  },
  {
    id: 'env-seminar',
    image: env1,
    imageAlt: {
      ml: 'ലോക പരിസ്ഥിതി ദിനാചരണം - ചാത്തന്നൂർ ശ്രീനാരായണ കോളേജ്',
      en: 'World Environment Day - Chathannoor Sree Narayana College',
    },
    date: { ml: 'ജൂൺ 05, 2025', en: 'June 05, 2025' },
    title: {
      ml: 'കേരള മനുഷ്യാവകാശ സംരക്ഷണ സമിതിയുടെ നേതൃത്വത്തിൽ ലോക പരിസ്ഥിതി ദിനാചരണം ചാത്തന്നൂർ ശ്രീനാരായണ കോളേജിൽ സംഘടിപ്പിച്ചു',
      en: 'World Environment Day observed at Chathannoor Sree Narayana College under the leadership of the Kerala Human Rights Protection Society',
    },
    paragraphs: [
      {
        ml: 'ലോക പരിസ്ഥിതി ദിനത്തോടനുബന്ധിച്ച് കേരള മനുഷ്യാവകാശ സംരക്ഷണ സമിതിയുടെ നേതൃത്വത്തിലും ചാത്തന്നൂർ ശ്രീനാരായണ കോളേജ് എൻ.സി.സി, എൻ.എസ്.എസ് യൂണിറ്റുകളുടെ സംയുക്താഭിമുഖ്യത്തിലും വിദ്യാർത്ഥികൾക്കായി ജൈവ പച്ചക്കറി തൈ വിതരണവും പരിസ്ഥിതി ബോധവൽക്കരണ പരിപാടിയും സംഘടിപ്പിച്ചു.',
        en: 'In connection with World Environment Day, a distribution of organic vegetable saplings and an environmental-awareness programme were organised for students under the leadership of the Kerala Human Rights Protection Society and jointly with the NCC and NSS units of Chathannoor Sree Narayana College.',
      },
      {
        ml: 'പരിസ്ഥിതി സംരക്ഷണത്തിന്റെ പ്രാധാന്യം ഓർമ്മപ്പെടുത്തുന്നതിനായി എല്ലാ വർഷവും ജൂൺ 5-ന് ലോക പരിസ്ഥിതി ദിനം ആചരിക്കുന്നു. പ്രകൃതിയെ സംരക്ഷിക്കുക, മരങ്ങൾ നട്ടുപിടിപ്പിക്കുക, പ്ലാസ്റ്റിക് ഉപയോഗം കുറയ്ക്കുക, ജലസ്രോതസ്സുകൾ സംരക്ഷിക്കുക തുടങ്ങിയ പ്രവർത്തനങ്ങളിലൂടെ പരിസ്ഥിതി സംരക്ഷണത്തിൽ ഓരോരുത്തരും പങ്കാളികളാകണമെന്ന് ഈ ദിനം ആഹ്വാനം ചെയ്യുന്നു.',
        en: 'World Environment Day is observed on June 5 every year to remind us of the importance of environmental protection. The day calls on everyone to take part in protecting the environment through activities such as conserving nature, planting trees, reducing plastic use, and protecting water sources.',
      },
      {
        ml: '"ഇന്നത്തെ നമ്മുടെ പ്രവർത്തനങ്ങളാണ് നാളത്തെ ഭൂമിയുടെ ഭാവി നിർണയിക്കുന്നത്" എന്ന സന്ദേശം ഉയർത്തിപ്പിടിച്ച് സംഘടിപ്പിച്ച പരിപാടിയിൽ സമിതി സംസ്ഥാന പ്രസിഡന്റ് ഡോ. അയത്തിൽ അൻസർ ജൈവ പച്ചക്കറി തൈകളുടെ വിതരണോദ്ഘാടനം നിർവഹിച്ചു. സമിതി സംസ്ഥാന ചീഫ് മീഡിയ കോർഡിനേറ്റർ ഷിബു റാവുത്തർ അധ്യക്ഷത വഹിച്ചു.',
        en: 'Held upholding the message "Our actions today decide the future of tomorrow\'s earth", the programme saw Society State President Dr. Ayathil Ansar inaugurate the distribution of organic vegetable saplings. Society State Chief Media Coordinator Shibu Rawther presided over the event.',
      },
      {
        ml: 'എൻ.സി.സി പ്രോഗ്രാം ഓഫീസർ ഡോ. ശില്പ ശശാങ്കൻ പരിസ്ഥിതി പ്രതിജ്ഞ ചൊല്ലിക്കൊടുത്തു. കോളേജ് പ്രിൻസിപ്പൽ ഡോ. ഹരിലക്ഷ്മി വി.എസ്., എൻ.എസ്.എസ് പ്രോഗ്രാം ഓഫീസർമാരായ ഡോ. നിഷ സോമരാജൻ, ഡോ. സ്മിത പ്രകാശ്, സമിതി സംസ്ഥാന വനിതാ വിംഗ് ജനറൽ സെക്രട്ടറി സുനിത നിസാർ, കൊല്ലം ജില്ലാ സെക്രട്ടറി മുഹമ്മദ് സുഹൈൽ, സുഭാഷ് മുഖത്തല എന്നിവർ സംസാരിച്ചു.',
        en: 'NCC Programme Officer Dr. Shilpa Sasankan administered the environmental pledge. College Principal Dr. Harilakshmi V.S., NSS Programme Officers Dr. Nisha Somarajan and Dr. Smitha Prakash, Society State Women\'s Wing General Secretary Sunitha Nisar, Kollam District Secretary Muhammed Suhail and Subhash Mukhathala addressed the gathering.',
      },
      {
        ml: '"ഒരു വിദ്യാർത്ഥി - ഒരു തൈ" എന്ന സന്ദേശം ഉയർത്തിപ്പിടിച്ച് സംഘടിപ്പിച്ച പരിപാടി വിദ്യാർത്ഥികളിൽ പരിസ്ഥിതി അവബോധം വളർത്തുന്നതിനും പ്രകൃതി സംരക്ഷണ പ്രവർത്തനങ്ങളിൽ സജീവ പങ്കാളിത്തം ഉറപ്പാക്കുന്നതിനും സഹായകമായി. തൈകൾ നട്ടാൽ മാത്രം പോരാ, അവ സംരക്ഷിച്ച് വളർത്തുന്നതും ഓരോരുത്തരുടെയും ഉത്തരവാദിത്തമാണെന്ന് ചടങ്ങിൽ ഡോ. അയത്തിൽ അൻസർ അഭിപ്രായപ്പെട്ടു.',
        en: 'Organised upholding the message "One student - one sapling", the programme helped foster environmental awareness among students and ensure their active participation in nature-conservation efforts. Dr. Ayathil Ansar remarked at the event that it is not enough merely to plant saplings; protecting and nurturing them is the responsibility of each individual.',
      },
      {
        ml: '"ഇന്ന് നട്ട ഒരു തൈ നാളെയുടെ ജീവവായുവാണ്" എന്ന സന്ദേശത്തോടെ വിദ്യാർത്ഥികൾ പരിസ്ഥിതി സംരക്ഷണ പ്രതിജ്ഞ ഏറ്റെടുത്തു. ഹരിതഭാവിക്കായി പ്രവർത്തിക്കുമെന്ന ഉറപ്പും അവർ നൽകി.',
        en: 'With the message "A sapling planted today is tomorrow\'s breath of life", the students took the environmental-protection pledge. They also gave an assurance to work for a green future.',
      },
      {
        ml: 'ചടങ്ങിൽ സമിതിയുടെ സംസ്ഥാന, ജില്ലാ ഭാരവാഹികൾ, അധ്യാപകർ, വിദ്യാർത്ഥികൾ എന്നിവർ ഉൾപ്പെടെ നിരവധി പേർ പങ്കെടുത്തു. കോളേജ് ക്യാമ്പസിൽ നട്ടുപിടിപ്പിക്കുന്നതിനായി ഹൈബ്രിഡ് ഇനത്തിലുള്ള ഫലവൃക്ഷ തൈകളും വിതരണം ചെയ്തു.',
        en: 'Many people, including the Society\'s state and district office bearers, teachers and students, took part in the function. Hybrid-variety fruit-tree saplings were also distributed for planting on the college campus.',
      },
      {
        ml: '"ഭൂമിയെ സംരക്ഷിക്കാം... ഹരിത നാളേക്കായി കൈകോർക്കാം" എന്ന സന്ദേശത്തോടെയാണ് പരിപാടി സമാപിച്ചത്.',
        en: 'The programme concluded with the message: "Let us protect the earth... let us join hands for a green tomorrow."',
      },
    ],
    secondImage: env2,
    secondImageAlt: {
      ml: 'ലോക പരിസ്ഥിതി ദിനാചരണം - തൈ വിതരണം',
      en: 'World Environment Day - sapling distribution',
    },
    videoUrl: 'https://youtu.be/0ZuRuDRqWoA',
  },
];

export default function NewsSection() {
  const { t, lang } = useLang();
  // Which article is shown as the main feature (defaults to the first/newest).
  const [activeId, setActiveId] = useState<string>(ARTICLES[0].id);
  // Whether the main feature is expanded to show all paragraphs.
  const [expanded, setExpanded] = useState(false);
  // Pause auto-rotation while the user is hovering/interacting with the section.
  const [paused, setPaused] = useState(false);

  const activeArticle = ARTICLES.find((a) => a.id === activeId) ?? ARTICLES[0];
  const otherArticles = ARTICLES.filter((a) => a.id !== activeId);

  const visibleParagraphs = expanded
    ? activeArticle.paragraphs
    : activeArticle.paragraphs.slice(0, 1);

  // Keep the latest activeId in a ref so the interval can advance without
  // being torn down and recreated on every article change.
  const activeIdRef = useRef(activeId);
  activeIdRef.current = activeId;

  // Auto-advance to the next article every few seconds, looping back to the
  // start. Pauses while an article is expanded for reading or on hover.
  useEffect(() => {
    if (ARTICLES.length <= 1 || expanded || paused) return;

    const ROTATE_MS = 6000;
    const timer = setInterval(() => {
      const currentIndex = ARTICLES.findIndex((a) => a.id === activeIdRef.current);
      const nextIndex = (currentIndex + 1) % ARTICLES.length;
      setActiveId(ARTICLES[nextIndex].id);
    }, ROTATE_MS);

    return () => clearInterval(timer);
  }, [expanded, paused]);

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

        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Main Feature — the single active article */}
          <div className="lg:col-span-2 bg-white rounded gov-shadow overflow-hidden border border-outline-variant flex flex-col transition-opacity duration-500">
            <img
              src={activeArticle.image}
              alt={activeArticle.imageAlt[lang]}
              className="w-full h-48 sm:h-64 object-cover"
            />
            <div className="p-5 sm:p-8 flex flex-col flex-1">
              <div className="flex items-center flex-wrap gap-2 mb-4">
                <span className="bg-secondary/10 text-secondary px-3 py-1 rounded-full text-xs font-bold uppercase">
                  {t('news.badge')}
                </span>
                <span className="text-sm text-gray-400 flex items-center gap-1">
                  <Calendar size={14} /> {activeArticle.date[lang]}
                </span>
              </div>
              <h3 className="font-headline text-xl sm:text-2xl text-primary mb-4 leading-snug">
                {activeArticle.title[lang]}
              </h3>

              <div className="text-gray-600 leading-relaxed flex-1 space-y-4">
                {visibleParagraphs.map((para, i) => (
                  <p key={i}>{para[lang]}</p>
                ))}

                {/* Optional second photo shows only in the expanded view. */}
                {expanded && activeArticle.secondImage && (
                  <img
                    src={activeArticle.secondImage}
                    alt={(activeArticle.secondImageAlt ?? activeArticle.imageAlt)[lang]}
                    className="w-full rounded border border-outline-variant mt-2"
                  />
                )}

                {/* Optional video link shows only in the expanded view. */}
                {expanded && activeArticle.videoUrl && (
                  <a
                    href={activeArticle.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-2 text-secondary font-bold hover:underline"
                  >
                    <Youtube size={20} /> {t('news.watchVideo')}
                  </a>
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
                      alt={article.imageAlt[lang]}
                      className="w-16 h-16 rounded object-cover shrink-0 border border-outline-variant"
                    />
                    <div className="min-w-0">
                      <p className="font-semibold text-sm leading-snug text-on-surface group-hover:text-primary transition-colors line-clamp-2">
                        {article.title[lang]}
                      </p>
                      <p className="text-[12px] text-gray-400 mt-1 flex items-center gap-1">
                        <Calendar size={12} /> {article.date[lang]}
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

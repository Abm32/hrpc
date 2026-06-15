// Central place for every UI string in both languages.
// Add a key here, then use `t('section.key')` anywhere via the useLang() hook.
// Member names / district lists / local event reports stay in Malayalam only
// (see src/data/members.ts) and are intentionally NOT translated here.

export type Lang = 'ml' | 'en';

// A translated string: one value per supported language.
export type TranslatedString = Record<Lang, string>;

export const translations = {
  topBar: {
    govLabel: {
      ml: 'കേരള സർക്കാർ ഔദ്യോഗിക വെബ്സൈറ്റ്',
      en: 'Official Website',
    },
    skipToContent: {
      ml: 'സ്കിപ്പ് ടു മെയിൻ കണ്ടന്റ്',
      en: 'Skip to main content',
    },
    decreaseFont: { ml: 'അക്ഷര വലുപ്പം കുറയ്ക്കുക', en: 'Decrease font size' },
    resetFont: { ml: 'അക്ഷര വലുപ്പം പുനഃസജ്ജമാക്കുക', en: 'Reset font size' },
    increaseFont: { ml: 'അക്ഷര വലുപ്പം കൂട്ടുക', en: 'Increase font size' },
  },

  header: {
    orgName: {
      ml: 'കേരള മനുഷ്യാവകാശ സംരക്ഷണ സമിതി',
      en: 'Kerala Human Rights Protection Society',
    },
    regLine: { ml: 'Reg. No. Q. 966/2001 | Estd. 1995', en: 'Reg. No. Q. 966/2001 | Estd. 1995' },
    search: { ml: 'തിരയുക', en: 'Search' },
    openMenu: { ml: 'മെനു തുറക്കുക', en: 'Open menu' },
    closeMenu: { ml: 'മെനു അടയ്ക്കുക', en: 'Close menu' },
    // Label shown ON the toggle button = the language you switch TO.
    toggleToEn: { ml: 'English', en: 'English' },
    toggleToMl: { ml: 'മലയാളം', en: 'മലയാളം' },
  },

  nav: {
    home: { ml: 'ഹോം', en: 'Home' },
    about: { ml: 'ഞങ്ങളെക്കുറിച്ച്', en: 'About Us' },
    activities: { ml: 'പ്രവർത്തനങ്ങൾ', en: 'Activities' },
    services: { ml: 'സേവനങ്ങൾ', en: 'Services' },
    contact: { ml: 'ബന്ധപ്പെടുക', en: 'Contact' },
  },

  hero: {
    breadcrumbCurrent: { ml: 'മുഖ്യ വാർത്തകൾ', en: 'Highlights' },
    heading: {
      ml: 'കേരള മനുഷ്യാവകാശ സംരക്ഷണ സമിതി — അവകാശ സംരക്ഷണത്തിന്റെ ഔദ്യോഗിക വേദി.',
      en: 'Kerala Human Rights Protection Society — the official forum for protecting your rights.',
    },
    subheading: {
      ml: 'കേരളത്തിലെ സാധാരണക്കാരുടെ അവകാശങ്ങൾ സംരക്ഷിക്കുന്നതിനും പരിസ്ഥിതി സംരക്ഷണ പ്രവർത്തനങ്ങൾ ഏകോപിപ്പിക്കുന്നതിനും 1995 മുതൽ പ്രവർത്തിച്ചുവരുന്ന സമിതി.',
      en: 'Working since 1995 to protect the rights of ordinary citizens of Kerala and to coordinate environmental conservation efforts.',
    },
    fileComplaint: { ml: 'പരാതി സമർപ്പിക്കുക', en: 'File a Complaint' },
    learnMore: { ml: 'കൂടുതൽ അറിയുക', en: 'Learn More' },
    imageQuote: {
      ml: '"ഇന്ന് നട്ട ഒരു തൈ നാളെയുടെ ജീവവായുവാണ്"',
      en: '"A sapling planted today is tomorrow\'s breath of life"',
    },
    imageCaption: { ml: '- പരിസ്ഥിതി ദിനം 2024', en: '- Environment Day 2024' },
  },

  news: {
    heading: { ml: 'വാർത്തകളും പ്രവർത്തനങ്ങളും', en: 'News & Activities' },
    viewAll: { ml: 'എല്ലാ റിപ്പോർട്ടുകളും കാണുക →', en: 'View all reports →' },
    badge: { ml: 'വാർത്ത', en: 'News' },
    readFull: { ml: 'പൂർണ്ണരൂപം വായിക്കാം', en: 'Read full report' },
    showLess: { ml: 'ചുരുക്കുക', en: 'Show less' },
    upcomingEvents: { ml: 'വരാനിരിക്കുന്ന പരിപാടികൾ', en: 'Upcoming Events' },
    helplineTitle: { ml: 'എമർജൻസി ഹെൽപ്പ് ലൈൻ', en: 'Emergency Helpline' },
    helplineDesc: {
      ml: 'അടിയന്തര മനുഷ്യാവകാശ ലംഘനങ്ങൾ റിപ്പോർട്ട് ചെയ്യാൻ വിളിക്കുക.',
      en: 'Call to report urgent human rights violations.',
    },
    quickLinks: { ml: 'ദ്രുത ലിങ്കുകൾ', en: 'Quick Links' },
    rtiAct: { ml: 'വിവരാവകാശ നിയമം', en: 'Right to Information Act' },
    appForms: { ml: 'അപേക്ഷാ ഫോറങ്ങൾ', en: 'Application Forms' },
    offices: { ml: 'ഓഫീസുകൾ', en: 'Offices' },
  },

  services: {
    heading: { ml: 'പ്രധാന സേവനങ്ങൾ', en: 'Key Services' },
    legalAidTitle: { ml: 'നിയമ സഹായം', en: 'Legal Aid' },
    legalAidDesc: {
      ml: 'അർഹരായവർക്ക് സൗജന്യ നിയമോപദേശവും സഹായവും നൽകുന്നു.',
      en: 'Free legal advice and assistance for those in need.',
    },
    environmentTitle: { ml: 'പരിസ്ഥിതി സംരക്ഷണം', en: 'Environmental Protection' },
    environmentDesc: {
      ml: 'പ്രകൃതി വിഭവങ്ങളുടെ സംരക്ഷണത്തിനായി വിവിധ പദ്ധതികൾ.',
      en: 'Various initiatives to conserve natural resources.',
    },
    justiceTitle: { ml: 'സാമൂഹിക നീതി', en: 'Social Justice' },
    justiceDesc: {
      ml: 'പാർശ്വവൽക്കരിക്കപ്പെട്ടവർക്ക് നീതി ഉറപ്പാക്കുന്ന പ്രവർത്തനങ്ങൾ.',
      en: 'Efforts to ensure justice for the marginalized.',
    },
    grievanceTitle: { ml: 'പരാതി പരിഹാരം', en: 'Grievance Redressal' },
    grievanceDesc: {
      ml: 'ലഭിക്കുന്ന പരാതികളിൽ കൃത്യമായ നടപടികൾ സ്വീകരിക്കുന്നു.',
      en: 'Precise action is taken on every complaint received.',
    },
  },

  members: {
    heading: { ml: 'ഭാരവാഹികൾ', en: 'Office Bearers' },
    subheading: {
      ml: 'സംസ്ഥാന മനുഷ്യാവകാശ സംരക്ഷണ സമിതിയുടെ നേതൃനിര',
      en: 'Leadership of the State Human Rights Protection Society',
    },
    committeeState: { ml: 'സംസ്ഥാന കമ്മിറ്റി', en: 'State Committee' },
  },

  filing: {
    heading: { ml: 'പരാതി സമർപ്പിക്കുന്നതിനുള്ള ഘട്ടങ്ങൾ', en: 'Steps to File a Complaint' },
    step1Title: { ml: 'റിപ്പോർട്ട് തയ്യാറാക്കുക', en: 'Prepare the Report' },
    step1Desc: {
      ml: 'പരാതിയും അനുബന്ധ തെളിവുകളും ശേഖരിക്കുക.',
      en: 'Gather the complaint and supporting evidence.',
    },
    step2Title: { ml: 'ഓൺലൈനായി സമർപ്പിക്കുക', en: 'Submit Online' },
    step2Desc: {
      ml: 'ഔദ്യോഗിക പോർട്ടൽ വഴി പരാതി അപ്‌ലോഡ് ചെയ്യുക.',
      en: 'Upload the complaint through the official portal.',
    },
    step3Title: { ml: 'പരിശോധന', en: 'Review' },
    step3Desc: {
      ml: 'സമിതിയുടെ നിയമ വിദഗ്ദ്ധർ പരാതി പരിശോധിക്കുന്നു.',
      en: 'The society\'s legal experts review the complaint.',
    },
    step4Title: { ml: 'നടപടി', en: 'Action' },
    step4Desc: {
      ml: 'നിയമപരമായ നടപടികളോ ഒത്തുതീർപ്പോ നടക്കുന്നു.',
      en: 'Legal action or resolution is carried out.',
    },
  },

  footer: {
    about: {
      ml: 'കേരള മനുഷ്യാവകാശ സംരക്ഷണ സമിതി (HRPS) എല്ലാ പൗരന്മാരുടെയും അവകാശങ്ങൾ സംരക്ഷിക്കുന്നതിനും കേരളത്തിന്റെ പ്രകൃതി സമ്പത്ത് നിലനിർത്തുന്നതിനും പ്രതിജ്ഞാബദ്ധമാണ്.',
      en: 'The Kerala Human Rights Protection Society (HRPS) is committed to protecting the rights of all citizens and preserving the natural wealth of Kerala.',
    },
    linksTitle: { ml: 'ലിങ്കുകൾ', en: 'Links' },
    privacy: { ml: 'സ്വകാര്യതാ നയം', en: 'Privacy Policy' },
    terms: { ml: 'നിബന്ധനകളും വ്യവസ്ഥകളും', en: 'Terms & Conditions' },
    rti: { ml: 'വിവരാവകാശ നിയമം (RTI)', en: 'Right to Information (RTI)' },
    volunteers: { ml: 'സന്നദ്ധ പ്രവർത്തകർക്ക്', en: 'For Volunteers' },
    addressTitle: { ml: 'ഓഫീസ് വിലാസം', en: 'Office Address' },
    addressLine1: { ml: 'രജിസ്റ്റർഡ് ഓഫീസ്: കൊല്ലം ജില്ല,', en: 'Registered Office: Kollam District,' },
    addressLine2: { ml: 'കേരള സംസ്ഥാനം, ഇന്ത്യ.', en: 'Kerala State, India.' },
    addressLine3: { ml: 'രജി. നമ്പർ: Q. 966/2001', en: 'Reg. No: Q. 966/2001' },
    secretaryLabel: { ml: 'സംസ്ഥാന സെക്രട്ടറി', en: 'State Secretary' },
    copyright: {
      ml: '© 2024 കേരള മനുഷ്യാവകാശ സംരക്ഷണ സമിതി (HRPS). രജി. നമ്പർ Q. 966/2001. എല്ലാ അവകാശങ്ങളും സംരക്ഷിതം.',
      en: '© 2024 Kerala Human Rights Protection Society (HRPS). Reg. No. Q. 966/2001. All rights reserved.',
    },
    managedBy: {
      ml: 'Official Portal Content Managed by HRPS Kerala Secretariat.',
      en: 'Official Portal Content Managed by HRPS Kerala Secretariat.',
    },
  },

  fab: {
    fileComplaint: { ml: 'പരാതി നൽകുക', en: 'File a Complaint' },
  },
} as const;

export type Translations = typeof translations;

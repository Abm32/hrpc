import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

import { translations, type Lang, type TranslatedString } from './translations';

const STORAGE_KEY = 'hrps-lang';
const DEFAULT_LANG: Lang = 'ml'; // Malayalam-first, by design.

// Helper: resolve a dotted path like "hero.heading" against the translations tree.
function resolve(path: string): TranslatedString | undefined {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let node: any = translations;
  for (const key of path.split('.')) {
    if (node == null) return undefined;
    node = node[key];
  }
  return node as TranslatedString | undefined;
}

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
  /** Translate a dotted key, e.g. t('hero.heading'). Falls back to the key if missing. */
  t: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return DEFAULT_LANG;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === 'ml' || stored === 'en' ? stored : DEFAULT_LANG;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  // Persist + reflect on <html lang="..."> for accessibility/SEO.
  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => setLangState(next), []);
  const toggleLang = useCallback(
    () => setLangState((prev) => (prev === 'ml' ? 'en' : 'ml')),
    [],
  );

  const t = useCallback(
    (path: string) => {
      const entry = resolve(path);
      if (!entry) {
        // Surface missing keys during development instead of failing silently.
        if (import.meta.env.DEV) console.warn(`[i18n] missing translation key: ${path}`);
        return path;
      }
      return entry[lang];
    },
    [lang],
  );

  const value = useMemo(
    () => ({ lang, setLang, toggleLang, t }),
    [lang, setLang, toggleLang, t],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within a LanguageProvider');
  return ctx;
}

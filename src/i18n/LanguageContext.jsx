import { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { translations, getByPath } from './translations';

const STORAGE_KEY = 'portfolio-lang';

function detectInitialLang() {
  if (typeof window === 'undefined') return 'pt';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'pt' || stored === 'en') return stored;
  const nav = window.navigator?.language?.toLowerCase() || '';
  return nav.startsWith('pt') ? 'pt' : 'en';
}

export const LanguageContext = createContext({
  lang: 'pt',
  setLang: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(detectInitialLang);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.setAttribute('lang', lang);
      document.title = translations[lang].pageTitle;
    }
  }, [lang]);

  const setLang = useCallback((next) => {
    if (next === 'pt' || next === 'en') setLangState(next);
  }, []);

  const t = useCallback(
    (key) => {
      const value = getByPath(translations[lang], key);
      return value !== undefined ? value : key;
    },
    [lang]
  );

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

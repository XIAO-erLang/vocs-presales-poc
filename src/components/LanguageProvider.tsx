"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

export type SiteLanguage = "zh" | "en";

const LANGUAGE_STORAGE_KEY = "sourcelink-site-language";

type LanguageContextValue = {
  language: SiteLanguage;
  setLanguage: (language: SiteLanguage) => void;
  t: <T,>(copy: { zh: T; en: T }) => T;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<SiteLanguage>("zh");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
      if (saved === "zh" || saved === "en") {
        setLanguageState(saved);
      }
    } catch {
      // Keep Chinese as the default if browser storage is unavailable.
    }
  }, []);

  function setLanguage(language: SiteLanguage) {
    setLanguageState(language);
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
      // Language switching should still work for the current session.
    }
  }

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      t: (copy) => copy[language]
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useSiteLanguage() {
  const value = useContext(LanguageContext);

  if (!value) {
    throw new Error("useSiteLanguage must be used inside LanguageProvider");
  }

  return value;
}

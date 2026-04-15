"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { translations, Locale, TranslationKeys } from "@/lib/translations";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: TranslationKeys;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");

  useEffect(() => {
    const saved =
      typeof window !== "undefined"
        ? (window.localStorage.getItem("cafe-locale") as Locale | null)
        : null;
    if (saved === "es" || saved === "en") setLocaleState(saved);
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("cafe-locale", l);
      document.documentElement.lang = l;
    }
  };

  const value: LanguageContextValue = {
    locale,
    setLocale,
    t: translations[locale],
  };

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { translations, Locale, TranslationKeys } from "@/lib/translations";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: TranslationKeys;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "cafe-locale";

function readStoredLocale(): Locale {
  if (typeof window === "undefined") return "es";
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "es" || saved === "en") return saved;
  } catch {
    // ignore
  }
  return "es";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Lazy initializer runs on first client render, so we pick up the saved
  // locale immediately instead of flashing default Spanish then switching.
  const [locale, setLocaleState] = useState<Locale>(readStoredLocale);

  // Sync <html lang> with the current locale on every change.
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    if (typeof window !== "undefined") {
      try {
        window.localStorage.setItem(STORAGE_KEY, l);
      } catch {
        // ignore storage errors (private mode, disabled, etc.)
      }
      document.documentElement.lang = l;
    }
  };

  const value: LanguageContextValue = {
    locale,
    setLocale,
    t: translations[locale],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx)
    throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}

import { createContext, useContext, useState, type ReactNode } from "react";

export type Lang = "en" | "zh";

type LangContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  pick: <T>(obj: { en: T; zh: T }) => T;
};

const LangContext = createContext<LangContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const value: LangContextType = {
    lang,
    setLang,
    toggle: () => setLang((p) => (p === "en" ? "zh" : "en")),
    pick: (obj) => obj[lang],
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}

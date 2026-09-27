"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { copy, type Lang } from "@/lib/content";
import { Cursor } from "@/components/cursor";
import { Preloader } from "@/components/preloader";
import { ScrollProgress } from "@/components/scroll-progress";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (typeof copy)[Lang];
};

type ReadyContextValue = {
  ready: boolean;
  setReady: (value: boolean) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);
const ReadyContext = createContext<ReadyContextValue | null>(null);

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within Providers");
  }
  return ctx;
}

export function useReady() {
  const ctx = useContext(ReadyContext);
  if (!ctx) {
    throw new Error("useReady must be used within Providers");
  }
  return ctx;
}

export function Providers({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("dn-lang");
    if (saved === "en" || saved === "vi") {
      const frame = window.requestAnimationFrame(() => setLangState(saved));
      return () => window.cancelAnimationFrame(frame);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "vi" ? "vi" : "en";
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem("dn-lang", next);
  }, []);

  const languageValue = useMemo(
    () => ({ lang, setLang, t: copy[lang] }),
    [lang, setLang],
  );

  const readyValue = useMemo(() => ({ ready, setReady }), [ready]);

  return (
    <LanguageContext.Provider value={languageValue}>
      <ReadyContext.Provider value={readyValue}>
        <div className="grain" aria-hidden="true" />
        <div className="spotlight" aria-hidden="true" />
        <Preloader />
        <Cursor />
        <ScrollProgress />
        {children}
      </ReadyContext.Provider>
    </LanguageContext.Provider>
  );
}

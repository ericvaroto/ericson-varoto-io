import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { ptBR } from "./ptBR";
import { enUS } from "./enUS";

export type Lang = "pt-BR" | "en-US";

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  stack: string;
}

export interface FocusCard {
  title: string;
  desc: string;
}

export interface Translation {
  meta: { title: string; description: string };
  nav: {
    about: string;
    skills: string;
    experience: string;
    focus: string;
    certifications: string;
    education: string;
    contact: string;
    linkedin: string;
    languageLabel: string;
  };
  hero: {
    headline: string;
    short: string;
    primary: string;
    secondary: string;
    secondaryComingSoon: string;
  };
  about: {
    title: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    interests: string;
  };
  skills: {
    title: string;
    groups: { backend: string; cloud: string; arch: string; tools: string };
  };
  experience: { title: string; present: string; items: ExperienceItem[] };
  focus: { title: string; cards: FocusCard[] };
  certifications: {
    title: string;
    certificationsLabel: string;
    awardsLabel: string;
    certifications: string[];
    awards: string[];
  };
  education: { title: string; school: string; course: string; period: string };
  contact: { title: string; text: string; cta: string };
  footer: { text: string };
}

const translations: Record<Lang, Translation> = { "pt-BR": ptBR, "en-US": enUS };
const STORAGE_KEY = "ev_lang";

function detectLang(): Lang {
  if (typeof window === "undefined") return "en-US";
  const saved = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
  if (saved === "pt-BR" || saved === "en-US") return saved;
  const nav = window.navigator.language || "en";
  return nav.toLowerCase().startsWith("pt") ? "pt-BR" : "en-US";
}

interface I18nContextValue {
  lang: Lang;
  t: Translation;
  setLang: (l: Lang) => void;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => detectLang());

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "pt-BR" ? "pt-BR" : "en";
  }, [lang]);

  const value = useMemo<I18nContextValue>(
    () => ({ lang, t: translations[lang], setLang }),
    [lang, setLang]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used inside I18nProvider");
  return ctx;
}

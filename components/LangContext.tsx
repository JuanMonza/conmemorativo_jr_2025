import { createContext } from "react";

type LangContextType = {
  lang: 'es' | 'en';
  setLang: (lang: 'es' | 'en') => void;
};

export const LangContext = createContext<LangContextType | undefined>(undefined);
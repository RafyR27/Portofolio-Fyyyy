"use client";

import { createContext, useContext, useState } from "react";

type TLanguage = "en" | "id";

const LanguagesContext = createContext<{
  language: TLanguage;
  setLanguage: (lang: TLanguage) => void;
}>({
  language: "en",
  setLanguage: () => {},
});

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState<TLanguage>("en");

  const contextValue = {
    language,
    setLanguage,
  };

  return (
    <LanguagesContext.Provider value={contextValue}>
      {children}
    </LanguagesContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguagesContext);

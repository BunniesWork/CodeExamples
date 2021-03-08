import { useState, createContext, useContext } from 'react';

import { languageOptions, dictionaryList } from '../languages';

// create the language context with default selected language
export const BunniesWorkLang = createContext({
  userLanguage: 'en',
  dictionary: dictionaryList.en
});

// it provides the language context to app
export function LanguageProvider({ children }) {

  let defaultLanguage = "";
  if (typeof window !== "undefined") { defaultLanguage = window.localStorage.getItem('BunniesWork-lang')}
  
  
  const [userLanguage, setUserLanguage] = useState(defaultLanguage || 'en');

  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange: selected => {
      const newLanguage = languageOptions[selected] ? selected : 'en'
      setUserLanguage(newLanguage);
      if (typeof window !== "undefined") {window.localStorage.setItem('BunniesWork-lang', newLanguage)}
    }
  };

  return (
    <BunniesWorkLang.Provider value={provider}>
      {children}
    </BunniesWorkLang.Provider>
  );
};

// get text according to id & current language
export function Text({ tid }) {
  const BunniesWorkLang = useContext(BunniesWorkLang);

  return BunniesWorkLang.dictionary[tid] || tid;
};

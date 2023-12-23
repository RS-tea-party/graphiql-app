import { FC, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { LocaleContext } from '../LocaleContext/LocaleContext';
import { Lang, Locales, SpellingList } from '../../dto/types';
import { localesObj } from '../../dto/locales';

const App: FC = () => {
  const initialLang = (localStorage.getItem('lang') || 'en') as Lang;
  const [lang, setLang] = useState<Lang>(initialLang);
  const [locales] = useState<Locales>(localesObj);
  const [spellingList, setSpellingList] = useState<SpellingList>(
    localesObj[initialLang]
  );

  useEffect(() => setSpellingList(localesObj[lang]), [lang]);

  return (
    <LocaleContext.Provider value={{ locales, lang, setLang, spellingList }}>
      <Outlet />
    </LocaleContext.Provider>
  );
};

export default App;

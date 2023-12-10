import { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { LocaleContext } from '../LocaleContext/LocaleContext';
import { Lang, Locales } from '../../dto/types';
import { localesObj } from '../../dto/locales';

const App: FC = () => {
  const initialLang = (localStorage.getItem('lang') as Lang) || 'en';
  const [lang, setLang] = useState<Lang>(initialLang);
  const [locales] = useState<Locales>(localesObj);

  return (
    <LocaleContext.Provider value={{ locales, lang, setLang }}>
      <Outlet />
    </LocaleContext.Provider>
  );
};

export default App;

import { FC, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { LocaleContext } from '../LocaleContext/LocaleContext';
import { Lang, Locales } from '../../dto/types';
import { localesObj } from '../../dto/locales';
import { auth } from '../../helpers/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { login } from '../../store/slices/userSlice';

const App: FC = () => {
  const [user] = useAuthState(auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user) dispatch(login());
  }, [dispatch, user]);

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

import { Dispatch, SetStateAction, createContext } from 'react';
import { localesObj } from '../../dto/locales';
import type { Lang, Locales } from '../../dto/types';

export interface LocaleContext {
  locales: Locales;
  lang: Lang;
  setLang: Dispatch<SetStateAction<Lang>>;
}

export const LocaleContext = createContext<LocaleContext>({
  locales: localesObj,
  lang: 'en',
  setLang: () => {},
});

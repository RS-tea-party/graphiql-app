import { Dispatch, SetStateAction, createContext } from 'react';
import { localesObj } from '../../dto/locales';
import type { Lang, Locales, SpellingList } from '../../dto/types';

export interface LocaleContext {
  locales: Locales;
  lang: Lang;
  setLang: Dispatch<SetStateAction<Lang>>;
  spellingList: SpellingList;
}

export const LocaleContext = createContext<LocaleContext>({
  locales: localesObj,
  lang: 'en',
  setLang: () => {},
  spellingList: localesObj.en,
});

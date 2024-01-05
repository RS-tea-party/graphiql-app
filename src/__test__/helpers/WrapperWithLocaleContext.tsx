import { useState, type FC, type PropsWithChildren, useEffect } from 'react';
import { LocaleContext } from '../../components/LocaleContext/LocaleContext';
import { Lang, Locales, SpellingList } from '../../dto/types';
import { localesObj } from '../../dto/locales';

interface WrapperWithLocaleContextProps {
  lang: Lang;
}

const WrapperWithLocaleContext: FC<
  PropsWithChildren<WrapperWithLocaleContextProps>
> = ({ children, lang }) => {
  const [langState, setLang] = useState<Lang>(lang);
  const [locales] = useState<Locales>(localesObj);
  const [spellingList, setSpellingList] = useState<SpellingList>(
    localesObj[lang]
  );
  useEffect(() => {
    setSpellingList(localesObj[langState]);
  }, [langState]);
  return (
    <LocaleContext.Provider
      value={{ locales, lang: langState, setLang, spellingList }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

export default WrapperWithLocaleContext;

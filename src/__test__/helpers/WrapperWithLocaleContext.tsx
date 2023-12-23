import type { FC, PropsWithChildren } from 'react';
import { LocaleContext } from '../../components/LocaleContext/LocaleContext';
import { Lang } from '../../dto/types';
import { localesObj } from '../../dto/locales';

interface WrapperWithLocaleContextProps {
  lang: Lang;
}

const WrapperWithLocaleContext: FC<
  PropsWithChildren<WrapperWithLocaleContextProps>
> = ({ children, lang }) => {
  const spellingList = localesObj[lang];
  return (
    <LocaleContext.Provider
      value={{ locales: localesObj, lang, setLang: () => {}, spellingList }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

export default WrapperWithLocaleContext;

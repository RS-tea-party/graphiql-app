import { FC, useContext } from 'react';
import { LocaleContext } from '../../components/LocaleContext/LocaleContext';

const Welcome: FC = () => {
  const { locales, lang } = useContext(LocaleContext);

  return (
    <>{locales[lang].welcome.greeting}</>
  );
};

export default Welcome;

import { FC, useContext } from 'react';
import { Button } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';
import { LocaleContext } from '../../components/LocaleContext/LocaleContext';
import { Paths } from '../../dto/constants';

const NotFound: FC = () => {
  const { locales, lang } = useContext(LocaleContext);
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-10">
      <h1 className="text-3xl">{locales[lang].notFound.h1}</h1>
      <NavLink to={Paths.WELCOME}>
        <Button variant="outlined">{locales[lang].notFound.button}</Button>
      </NavLink>
    </div>
  );
};

export default NotFound;

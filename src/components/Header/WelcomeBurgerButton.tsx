import { FC, useContext } from 'react';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { LocaleContext } from '../LocaleContext/LocaleContext';
import { Paths } from '../../dto/constants';

const WelcomeBurgerButton: FC = () => {
  const { locales, lang } = useContext(LocaleContext);
  const navigate = useNavigate();
  return (
    <Button
      variant="outlined"
      size="sm"
      className="min-w-[50%] focus:ring-peachFuzz-200"
      onClick={() => navigate(Paths.WELCOME)}
    >
      <span>{`${locales[lang].welcome.greeting} `}</span>
    </Button>
  );
};

export default WelcomeBurgerButton;

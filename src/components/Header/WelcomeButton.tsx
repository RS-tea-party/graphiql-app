import { FC, useContext } from 'react';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { LocaleContext } from '../LocaleContext/LocaleContext';
import { Paths } from '../../dto/constants';

const WelcomeButton: FC = () => {
  const { locales, lang } = useContext(LocaleContext);
  const navigate = useNavigate();

  return (
    <Button
      variant="text"
      size="md"
      className="hidden lg:inline-block text-base"
      onClick={() => navigate(Paths.WELCOME)}
    >
      <span>{`${locales[lang].welcome.greeting} `}</span>
    </Button>
  );
};

export default WelcomeButton;

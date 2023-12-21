import { FC, useContext } from 'react';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { LocaleContext } from '../LocaleContext/LocaleContext';
import { Paths } from '../../dto/constants';

const WelcomeButton: FC = () => {
  const { spellingList } = useContext(LocaleContext);
  const navigate = useNavigate();

  return (
    <Button
      variant="text"
      size="md"
      className="hidden lg:inline-block text-base"
      onClick={() => navigate(Paths.WELCOME)}
    >
      <span>{`${spellingList.welcome.greeting} `}</span>
    </Button>
  );
};

export default WelcomeButton;

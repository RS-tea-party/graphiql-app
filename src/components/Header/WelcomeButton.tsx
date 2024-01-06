import { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LocaleContext } from '../LocaleContext/LocaleContext';
import { Paths } from '../../dto/constants';
import ButtonHeader from '../_ui/ButtonHeader/ButtonHeader';

const WelcomeButton: FC = () => {
  const { spellingList } = useContext(LocaleContext);
  const navigate = useNavigate();

  return (
    <ButtonHeader
      onClick={() => navigate(Paths.WELCOME)}
      data-testid="welcome-button"
    >
      <span>{`${spellingList.welcome.greeting} `}</span>
    </ButtonHeader>
  );
};

export default WelcomeButton;

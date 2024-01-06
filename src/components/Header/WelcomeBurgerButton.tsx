import { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LocaleContext } from '../LocaleContext/LocaleContext';
import { Paths } from '../../dto/constants';
import ButtonHeaderBurger from '../_ui/ButtonHeader/ButtonHeaderBurger';

const WelcomeBurgerButton: FC = () => {
  const { spellingList } = useContext(LocaleContext);
  const navigate = useNavigate();
  return (
    <ButtonHeaderBurger
      onClick={() => navigate(Paths.WELCOME)}
      data-testid="welcome-burger-button"
    >
      <span>{`${spellingList.welcome.greeting} `}</span>
    </ButtonHeaderBurger>
  );
};

export default WelcomeBurgerButton;

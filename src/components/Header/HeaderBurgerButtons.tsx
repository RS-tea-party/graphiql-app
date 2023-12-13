import { FC, useContext } from 'react';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import { authSelector } from '../../store/slices/userSlice';
import { LocaleContext } from '../LocaleContext/LocaleContext';
import { Paths } from '../../dto/constants';
import { loginPath, regPath } from '../../store/slices/authPathSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';

const HeaderBurgerButtons: FC = () => {
  let buttons: JSX.Element;
  const isAuth = useAppSelector(authSelector);
  const dispatch = useAppDispatch();
  const { locales, lang } = useContext(LocaleContext);
  const navigate = useNavigate();
  const isWelcomePage = location.pathname === Paths.WELCOME;

  const onLogout = () => {
    //signOut();
  };
  const onSignIn = () => {
    dispatch(loginPath());
    navigate(Paths.AUTH);
  };
  const onSignUp = () => {
    dispatch(regPath());
    navigate(Paths.AUTH);
  };

  if (isAuth) {
    buttons = (
      <>
        {isWelcomePage && (
          <Button
            variant="outlined"
            size="sm"
            className="w-1/2"
            onClick={() => navigate(Paths.MAIN)}
          >
            <span>{`${locales[lang].headerButton.mainPage} `}</span>
          </Button>
        )}
        <Button
          variant="outlined"
          size="sm"
          className="w-1/2"
          onClick={onLogout}
        >
          <span>{`${locales[lang].headerButton.logOut} `}</span>
        </Button>
      </>
    );
  } else {
    buttons = (
      <>
        <Button
          variant="outlined"
          size="sm"
          className="w-1/2"
          onClick={onSignIn}
        >
          <span>{`${locales[lang].headerButton.signIn} `}</span>
        </Button>
        <Button
          variant="outlined"
          size="sm"
          className="w-1/2"
          onClick={onSignUp}
        >
          <span>{`${locales[lang].headerButton.signUp} `}</span>
        </Button>
      </>
    );
  }

  return <>{buttons}</>;
};

export default HeaderBurgerButtons;

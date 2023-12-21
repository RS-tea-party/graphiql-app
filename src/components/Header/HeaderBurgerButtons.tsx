import { FC, useContext } from 'react';
import { Button } from '@material-tailwind/react';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import { authSelector, logout } from '../../store/slices/userSlice';
import { LocaleContext } from '../LocaleContext/LocaleContext';
import { Paths } from '../../dto/constants';
import { loginPath, regPath } from '../../store/slices/authPathSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { signOut } from 'firebase/auth';
import { auth } from '../../helpers/firebase';

const HeaderBurgerButtons: FC = () => {
  let buttons: JSX.Element;
  const isAuth = useAppSelector(authSelector);
  const dispatch = useAppDispatch();
  const { spellingList } = useContext(LocaleContext);
  const navigate = useNavigate();
  const isWelcomePage = location.pathname === Paths.WELCOME;

  const onLogout = () => {
    dispatch(logout());
    signOut(auth);
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
            className="min-w-[50%] focus:ring-peachFuzz-200"
            onClick={() => navigate(Paths.MAIN)}
          >
            <span>{`${spellingList.headerButton.mainPage} `}</span>
          </Button>
        )}
        <Button
          variant="outlined"
          size="sm"
          className="min-w-[50%] focus:ring-peachFuzz-200"
          onClick={onLogout}
        >
          <span>{`${spellingList.headerButton.logOut} `}</span>
        </Button>
      </>
    );
  } else {
    buttons = (
      <>
        <Button
          variant="outlined"
          size="sm"
          className="min-w-[50%] focus:ring-peachFuzz-200"
          onClick={onSignIn}
        >
          <span>{`${spellingList.headerButton.signIn} `}</span>
        </Button>
        <Button
          variant="outlined"
          size="sm"
          className="min-w-[50%] focus:ring-peachFuzz-200"
          onClick={onSignUp}
        >
          <span>{`${spellingList.headerButton.signUp} `}</span>
        </Button>
      </>
    );
  }

  return <>{buttons}</>;
};

export default HeaderBurgerButtons;

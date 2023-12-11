import { FC, useContext, useEffect, useState } from 'react';
import { Navbar, Collapse, Button, IconButton } from '@material-tailwind/react';
import LangSwitcher from './LangSwitcher';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../public/graphql-logo.svg';
import { useAppSelector } from '../../hooks/useAppSelector';
import { authSelector } from '../../store/slices/userSlice';
import { LocaleContext } from '../LocaleContext/LocaleContext';
import { Paths } from '../../dto/constants';

const Header: FC = () => {
  const [sticky, setSticky] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const isAuth = useAppSelector(authSelector);
  const { locales, lang } = useContext(LocaleContext);
  const navigate = useNavigate();
  const isWelcomePage = location.pathname === Paths.WELCOME;

  const handleScroll = () => {
    const windowScrollTop = window.scrollY;
    windowScrollTop > 10 ? setSticky(true) : setSticky(false);
  };
  const onLogout = () => {
    //signOut();
  };
  const onSignIn = () => {
    navigate(Paths.AUTH);
  };
  const onSignUp = () => {
    navigate(Paths.AUTH);
  };
  useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getHeaderButtons = (): JSX.Element | null => {
    if (isAuth) {
      const isWelcomePage = location.pathname === '/';
      return (
        <>
          {isWelcomePage && (
            <a href="/graphiql">
              <Button
                variant="text"
                size="md"
                className="hidden lg:inline-block text-base"
              >
                <span>{`${locales[lang].headerButton.mainPage} `}</span>
              </Button>
            </a>
          )}
          <Button
            variant="text"
            size="md"
            className="hidden lg:inline-block text-base"
            onClick={onLogout}
          >
            <span>{`${locales[lang].headerButton.logOut} `}</span>
          </Button>
        </>
      );
    } else {
      return (
        <>
          <a href="/auth">
            <Button
              variant="text"
              size="md"
              className="hidden lg:inline-block text-base"
            >
              <span>{`${locales[lang].headerButton.signIn} `}</span>
            </Button>
          </a>
          <a href="/auth">
            <Button
              variant="text"
              size="md"
              className="hidden lg:inline-block text-base"
            >
              <span>{`${locales[lang].headerButton.signUp} `}</span>
            </Button>
          </a>
        </>
      );
    }
  };

  const getBurgerButtons = (): JSX.Element | null => {
    if (isAuth) {
      return (
        <>
          {isWelcomePage && (
            <a href="/graphiql">
              <Button fullWidth variant="outlined" size="sm" className="">
                <span>{`${locales[lang].headerButton.mainPage} `}</span>
              </Button>
            </a>
          )}
          <Button
            fullWidth
            variant="outlined"
            size="sm"
            className=""
            onClick={onLogout}
          >
            <span>{`${locales[lang].headerButton.logOut} `}</span>
          </Button>
        </>
      );
    } else {
      return (
        <>
          <Button
            fullWidth
            variant="outlined"
            size="sm"
            className=""
            onClick={onSignIn}
          >
            <span>{`${locales[lang].headerButton.signIn} `}</span>
          </Button>
          <Button
            fullWidth
            variant="outlined"
            size="sm"
            className=""
            onClick={onSignUp}
          >
            <span>{`${locales[lang].headerButton.signUp} `}</span>
          </Button>
        </>
      );
    }
  };

  return (
    <div className="h-22 w-full flex dark:bg-blue-gray-900">
      <Navbar
        className={
          sticky
            ? 'sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4 bg-peachFuzz-200 border-transparent'
            : 'sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4  bg-peachFuzz-500 border-transparent'
        }
        onScroll={handleScroll}
      >
        <div className="flex items-center justify-between text-blue-gray-900">
          <Link to="/">
            <img className="block pt-2" src={logo} alt="logoGraphQl" />
          </Link>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">
              <LangSwitcher />
            </div>
            <div className="flex items-center gap-x-1">
              {getHeaderButtons()}
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          <div className="flex items-center gap-x-1">{getBurgerButtons()}</div>
          <div className="flex items-center gap-x-1 justify-center">
            <LangSwitcher />
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

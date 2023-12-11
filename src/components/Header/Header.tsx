import { FC, useEffect, useState } from 'react';
import { Navbar, Collapse, IconButton } from '@material-tailwind/react';
import LangSwitcher from './LangSwitcher';
import { Link } from 'react-router-dom';
import logo from '../../../public/graphql-logo.svg';
import { Paths } from '../../dto/constants';
import HeaderButtons from './HeaderButtons';
import HeaderBurgerButtons from './HeaderBurgerButtons';

const Header: FC = () => {
  const [sticky, setSticky] = useState(false);
  const [openNav, setOpenNav] = useState(false);

  const handleScroll = () => {
    const windowScrollTop = window.scrollY;
    windowScrollTop > 10 ? setSticky(true) : setSticky(false);
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
          <Link to={Paths.WELCOME}>
            <img className="block pt-2" src={logo} alt="logoGraphQl" />
          </Link>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">
              <LangSwitcher />
            </div>
            <div className="flex items-center gap-x-1">
              <HeaderButtons />
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
          <div className="flex items-center gap-x-1">
            <HeaderBurgerButtons />
          </div>
          <div className="flex items-center gap-x-1 justify-center">
            <LangSwitcher />
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;

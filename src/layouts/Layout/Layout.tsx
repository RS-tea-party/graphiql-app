import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Layout: FC = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className="flex flex-grow items-center justify-center">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;

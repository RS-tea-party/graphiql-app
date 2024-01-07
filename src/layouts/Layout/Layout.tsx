import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const Layout: FC = () => {
  return (
    <>
      <header className="sticky top-0 z-50">
        <Header />
      </header>
      <main className="relative flex flex-grow items-center justify-center">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;

import { FC, Suspense, lazy } from 'react';
import Loader from '../../components/Loader/Loader';

const Welcome: FC = () => {
  const LazyAbout = lazy(() => import('../../components/About/About'));

  return (
    <Suspense fallback={<Loader />}>
      <section data-testid="welcome-page">
        <LazyAbout />
      </section>
    </Suspense>
  );
};

export default Welcome;

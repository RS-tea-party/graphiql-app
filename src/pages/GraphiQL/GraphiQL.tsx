import { FC, Suspense, lazy } from 'react';
import Loader from '../../components/Loader/Loader';

const GraphiQL: FC = () => {
  const LazyControlPanel = lazy(
    () => import('../../components/GraphiQL/ControlPanel')
  );
  const LazyEditorsSection = lazy(
    () => import('../../components/GraphiQL/EditorsSection')
  );
  const LazyResultsSection = lazy(
    () => import('../../components/GraphiQL/ResultsSection')
  );

  return (
    <Suspense fallback={<Loader />}>
      <section
        className="flex flex-col w-full h-full md:max-h-[calc(100vh-149.6px)]"
        data-testid={'graphql-page'}
      >
        <LazyControlPanel />
        <div className="flex flex-col md:flex-row justify-center md:justify-around items-center w-full md:h-[calc(100%-60px)] md:overflow-auto p-2 pt-0">
          <LazyEditorsSection />
          <LazyResultsSection />
        </div>
      </section>
    </Suspense>
  );
};

export default GraphiQL;

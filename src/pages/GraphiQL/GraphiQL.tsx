import { FC, Suspense, lazy } from 'react';
import Loader from '../../components/Loader/Loader';
import DocsModal from '../../components/GraphiQL/DocsModal';
import { useAppSelector } from '../../hooks/useAppSelector';
import { closeDocs, docsShown } from '../../store/slices/docsSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';

const GraphiQL: FC = () => {
  const dispatch = useAppDispatch();
  const isDocsShown = useAppSelector(docsShown);

  const handleCloseDocs = () => {
    dispatch(closeDocs());
  };
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
        data-testid="graphql-page"
      >
        <LazyControlPanel />
        <div className="flex flex-col md:flex-row justify-center md:justify-around items-center w-full md:h-[calc(100%-60px)] md:overflow-auto p-2 pt-0">
          <LazyEditorsSection />
          <LazyResultsSection />
        </div>
      </section>
      {isDocsShown && (
        <div
          className="absolute bg-black opacity-20 cursor-pointer w-full h-full max-h-full md:max-h-[calc(100vh-117.6px)] lg:max-h-[calc(100vh-149.6px)] z-20"
          onClick={handleCloseDocs}
        />
      )}
      {isDocsShown && <DocsModal />}
    </Suspense>
  );
};

export default GraphiQL;

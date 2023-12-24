import { FC } from 'react';
import ControlPanel from '../../components/GraphiQL/ControlPanel';
import EditorsSection from '../../components/GraphiQL/EditorsSection';
import ResultsSection from '../../components/GraphiQL/ResultsSection';
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
  return (
    <>
      <div className="flex flex-col w-full h-full md:max-h-[calc(100vh-117.6px)] lg:max-h-[calc(100vh-149.6px)]">
        <ControlPanel />
        <div className="flex flex-col md:flex-row justify-center md:justify-around items-center w-full md:h-[calc(100%-60px)] md:overflow-auto p-2 pt-0">
          <EditorsSection />
          <ResultsSection />
        </div>
      </div>
      {isDocsShown && (
        <div
          className="absolute bg-black opacity-20 w-full h-full max-h-full md:max-h-[calc(100vh-117.6px)] lg:max-h-[calc(100vh-149.6px)] z-20"
          onClick={handleCloseDocs}
        />
      )}
      {isDocsShown && <DocsModal />}
    </>
  );
};

export default GraphiQL;

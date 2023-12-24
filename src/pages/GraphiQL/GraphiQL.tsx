import { FC } from 'react';
import ControlPanel from '../../components/GraphiQL/ControlPanel';
import EditorsSection from '../../components/GraphiQL/EditorsSection';
import ResultsSection from '../../components/GraphiQL/ResultsSection';

const GraphiQL: FC = () => {
  return (
    <div
      className="flex flex-col w-full md:h-full"
      data-testid={'graphql-page'}
    >
      <ControlPanel />
      <div className="flex flex-col md:flex-row justify-center md:justify-around items-center w-full md:h-[calc(100%-60px)] md:overflow-auto p-2 pt-0">
        <EditorsSection />
        <ResultsSection />
      </div>
    </div>
  );
};

export default GraphiQL;

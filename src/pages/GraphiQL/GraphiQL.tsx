import { FC } from 'react';
import { createTheme } from '@uiw/codemirror-themes';
import { tags as t } from '@lezer/highlight';
import ControlPanel from '../../components/GraphiQL/ControlPanel';
import EditorsSection from '../../components/GraphiQL/EditorsSection';
import ResultsSection from '../../components/GraphiQL/ResultsSection';

export const myTheme = createTheme({
  theme: 'light',
  settings: {
    background: '#ffffff',
    backgroundImage: '',
    foreground: '#1a1a19',
    caret: '#AEAFAD',
    selection: '#c9c9c9',
    selectionMatch: '#ffbe98',
    gutterBackground: '#ffdecb',
    gutterForeground: '#4D4D4C',
    gutterBorder: '#dddddd',
    gutterActiveForeground: '',
    lineHighlight: '#ffe9dc',
  },
  styles: [
    { tag: t.comment, color: '#787b80' },
    { tag: t.definition(t.typeName), color: '#194a7b' },
    { tag: t.typeName, color: '#194a7b' },
    { tag: t.tagName, color: '#008a02' },
    { tag: t.variableName, color: '#1a00db' },
    { tag: t.propertyName, color: '#16777e' },
    { tag: t.attributeName, color: '#b21f1f' },
    { tag: t.string, color: '#bf7c08' },
    { tag: t.attributeValue, color: '#317fc9' },
    { tag: t.number, color: '#057a0d' },
    { tag: t.bool, color: '#1ab7ad' },
  ],
});

const GraphiQL: FC = () => {
  return (
    <div className="flex flex-col w-full md:h-full">
      <ControlPanel />
      <div className="flex flex-col md:flex-row justify-center md:justify-around items-center w-full md:h-[calc(100%-60px)] md:overflow-auto p-2 pt-0">
        <EditorsSection />
        <ResultsSection />
      </div>
    </div>
  );
};

export default GraphiQL;

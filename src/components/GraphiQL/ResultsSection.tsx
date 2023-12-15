import CodeMirror from '@uiw/react-codemirror';
import { myTheme } from '../../pages/GraphiQL/GraphiQL';

const ResultsSection = () => {
  return (
    <div className="w-1/2 h-full  pl-2 overflow-auto">
      <CodeMirror
        theme={myTheme}
        className="text-sm"
        value={`a`.repeat(200) + `a\n`.repeat(200)}
        basicSetup={{
          lineNumbers: false,
          foldGutter: false,
        }}
        readOnly={true}
        editable={false}
      />
    </div>
  );
};

export default ResultsSection;

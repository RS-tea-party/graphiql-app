import CodeMirror from '@uiw/react-codemirror';
import { myTheme } from '../../pages/GraphiQL/GraphiQL';

const ResultsSection = () => {
  return (
    <div className="w-1/2 h-full overflow-auto px-[20px] border-2 ml-[5px]">
      <CodeMirror
        theme={myTheme}
        className="text-sm"
        value={`a`.repeat(45) + `a\n`.repeat(45)}
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

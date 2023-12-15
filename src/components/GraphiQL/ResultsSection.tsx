import CodeMirror from '@uiw/react-codemirror';
import { resultsTheme } from '../../themes/codemirror';

const ResultsSection = () => {
  return (
    <div className="w-full md:w-1/2 md:h-full overflow-auto px-[20px] border-2 ml-[5px]">
      <CodeMirror
        theme={resultsTheme}
        className="text-sm"
        value={`a`.repeat(25) + `a\n`.repeat(15)}
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

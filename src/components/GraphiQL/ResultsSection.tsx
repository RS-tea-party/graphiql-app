import CodeMirror from '@uiw/react-codemirror';
import { resultsTheme } from '../../themes/codemirror';
import { Button, Tooltip } from '@material-tailwind/react';

const ResultsSection = () => {
  return (
    <div className="w-full md:w-1/2 md:h-full overflow-auto px-[20px] border-2 md:ml-[5px]">
      <div className="sticky top-0 right-0 z-10">
        <div className="absolute top-0 right-0">
          <Tooltip
            content="Documentation"
            placement="bottom"
            className="border-peachFuzz bg-peachFuzz text-black"
          >
            <Button
              className="opacity-50 rounded-xl px-3 py-2 hover:bg-peachFuzz"
              size="sm"
              variant="text"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
            </Button>
          </Tooltip>
        </div>
      </div>
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

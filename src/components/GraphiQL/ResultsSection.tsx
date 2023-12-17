import { Button, Tooltip } from '@material-tailwind/react';
import CodeEditor from './CodeEditor';
import { useContext } from 'react';
import { LocaleContext } from '../LocaleContext/LocaleContext';

const ResultsSection = () => {
  const { locales, lang } = useContext(LocaleContext);
  return (
    <section className="w-full md:w-1/2 md:h-full overflow-auto px-[20px] border-2 md:ml-[5px]">
      <CodeEditor mode="viewer">
        <Tooltip
          content={locales[lang].graphiQL.docs}
          placement="left"
          className="border-peachFuzz bg-peachFuzz text-black"
        >
          <Button
            className="opacity-50 rounded-xl p-2 border-peachFuzz hover:bg-peachFuzz"
            size="sm"
            variant="outlined"
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
      </CodeEditor>
    </section>
  );
};

export default ResultsSection;

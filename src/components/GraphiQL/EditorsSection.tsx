import SecondaryEditor from './SecondaryEditor';
import CodeEditor from './CodeEditor';
import { useContext, useRef } from 'react';
import { LocaleContext } from '../LocaleContext/LocaleContext';
import ButtonThemed from '../_ui/ButtonThemed/ButtonThemed';
import { isValidSelector, urlSelector } from '../../store/slices/endpointSlice';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { changeResult } from '../../store/slices/resultSlice';
import { ReactCodeMirrorRef } from '@uiw/react-codemirror';

const EditorsSection = () => {
  const { spellingList } = useContext(LocaleContext);
  const isValid = useAppSelector(isValidSelector);

  const dispatch = useAppDispatch();

  const url = useAppSelector(urlSelector);

  const editorRef = useRef<ReactCodeMirrorRef>(null);

  const sendHandler = () => {
    const query = editorRef.current?.editor?.textContent?.split('›')[1] || '';
    if (url) {
      dispatch(changeResult({ url, query }));
    }
  };

  return (
    <section className="flex flex-col w-full md:max-h-full md:w-1/2 md:h-full px-[20px] my-2 md:my-0 border-2 md:mr-[5px]">
      <CodeEditor
        mode="editor"
        defaultValue={`{` + `\n`.repeat(2) + `}` + `\n`}
        ref={editorRef}
      >
        <ButtonThemed
          className="opacity-50 rounded-full p-2 border-peachFuzz hover:bg-peachFuzz"
          variant="outlined"
          disabled={isValid ? false : true}
          tooltip={{ text: spellingList.graphiQL.send, position: 'left' }}
          onClick={sendHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
            />
          </svg>
        </ButtonThemed>
        <ButtonThemed
          className="opacity-50 rounded-full p-2 border-peachFuzz hover:bg-peachFuzz"
          variant="outlined"
          tooltip={{ text: spellingList.graphiQL.prettify, position: 'left' }}
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
              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
            />
          </svg>
        </ButtonThemed>
      </CodeEditor>
      <div className="flex w-full">
        <SecondaryEditor />
      </div>
    </section>
  );
};

export default EditorsSection;

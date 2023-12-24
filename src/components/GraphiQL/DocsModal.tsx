import { FC, useContext } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { closeDocs, docsSelector } from '../../store/slices/docsSlice';
import { prettify } from '../../helpers/prettify';
import CodeEditor from './CodeEditor';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import ButtonThemed from '../_ui/ButtonThemed/ButtonThemed';
import { LocaleContext } from '../LocaleContext/LocaleContext';

const DocsModal: FC = () => {
  const docs = useAppSelector(docsSelector);
  const dispatch = useAppDispatch();
  const { spellingList } = useContext(LocaleContext);
  const genericHamburgerLine = `h-0.5 w-5 my-1 rounded-full bg-blue-gray-900 transition ease transform duration-300`;

  const handleCloseDocs = () => {
    dispatch(closeDocs());
  };

  return (
    <div className="flex border-4 border-white rounded-lg absolute z-20 w-[85%] max-h-[calc(100vh-169.6px)]">
      <CodeEditor mode="docs" defaultValue={prettify(docs)}>
        <ButtonThemed
          className="opacity-50 rounded-full p-2 hover:bg-peachFuzz"
          variant="outlined"
          tooltip={{ text: spellingList.graphiQL.close, position: 'left' }}
          onClick={handleCloseDocs}
        >
          <div
            className={`${genericHamburgerLine} ${'rotate-45 translate-y-1.5 group-hover:opacity-100'}`}
          />
          <div className={`${genericHamburgerLine} ${'opacity-0'}`} />
          <div
            className={`${genericHamburgerLine} ${'-rotate-45 -translate-y-1.5 group-hover:opacity-100'}`}
          />
        </ButtonThemed>
      </CodeEditor>
    </div>
  );
};

export default DocsModal;

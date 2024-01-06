import { FC, Suspense, useContext, useEffect } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import {
  closeDocs,
  docsShown as docsShownSelector,
} from '../../store/slices/docsSlice';
import { prettify } from '../../helpers/prettify';
import CodeEditor from './CodeEditor';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import ButtonThemed from '../_ui/ButtonThemed/ButtonThemed';
import { LocaleContext } from '../LocaleContext/LocaleContext';
import Loader from '../Loader/Loader';
import { urlSelector } from '../../store/slices/endpointSlice';
import { useLazyGetSchemaQuery } from '../../services/api';
import { Typography } from '@material-tailwind/react';
import { toast } from 'react-toastify';

const DocsModal: FC = () => {
  const docsShown = useAppSelector(docsShownSelector);
  const url = useAppSelector(urlSelector);
  const [trigger, result] = useLazyGetSchemaQuery();
  const { data, isSuccess, isError } = result;
  const dispatch = useAppDispatch();
  const { spellingList } = useContext(LocaleContext);
  const genericHamburgerLine = `h-0.5 w-5 my-1 rounded-full bg-blue-gray-900 transition ease transform duration-300`;

  const handleCloseDocs = () => {
    dispatch(closeDocs());
  };
  useEffect(() => {
    if (!isSuccess && !isError) trigger({ url });
    if (isSuccess)
      toast.success(spellingList.graphiQLApiStatus.API_FETCH_SUCCESS, {
        draggable: true,
      });
    if (isError)
      toast.error(spellingList.graphiQLApiStatus.API_FETCH_ERROR, {
        draggable: false,
      });
  }, [result, spellingList, docsShown, trigger, url, isError, isSuccess]);

  return (
    <section className="flex border-4 border-white rounded-lg absolute z-20 w-[85%] max-h-[calc(100vh-169.6px)] min-h-[50px] bg-white">
      <Suspense fallback={<Loader />}>
        {isSuccess ? (
          <CodeEditor mode="docs" defaultValue={prettify(JSON.stringify(data))}>
            <ButtonThemed
              className="opacity-50 rounded-full p-2 hover:bg-peachFuzz"
              variant="outlined"
              tooltip={{ text: spellingList.graphiQL.close, position: 'left' }}
              onClick={handleCloseDocs}
              zindex="z-20"
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
        ) : isError ? (
          <Typography
            variant="h4"
            color="blue-gray"
            className="mb-2 w-full text-center"
          >
            Nothing found
          </Typography>
        ) : (
          <Loader />
        )}
      </Suspense>
    </section>
  );
};

export default DocsModal;

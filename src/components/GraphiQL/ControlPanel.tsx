import { Input } from '@material-tailwind/react';
import ButtonThemed from '../_ui/ButtonThemed/ButtonThemed';
import { useContext, useRef, useState } from 'react';
import { LocaleContext } from '../LocaleContext/LocaleContext';
import { useAppSelector } from '../../hooks/useAppSelector';
import {
  isValidSelector,
  setEndpointUrl,
  urlSelector,
} from '../../store/slices/endpointSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useGetSchemaQuery } from '../../services/api';

const ControlPanel = () => {
  const { spellingList } = useContext(LocaleContext);
  const isValid = useAppSelector(isValidSelector);

  const dispatch = useAppDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const applyHandler = () => {
    if (inputRef.current?.value) {
      dispatch(setEndpointUrl(inputRef.current.value));
      setEditMode(false);
    }
  };

  const changeHandler = () => {
    if (inputRef.current?.value) {
      setEditMode(true);
    }
  };

  const endpointUrl = useAppSelector(urlSelector);
  useGetSchemaQuery({ url: endpointUrl });

  const [editMode, setEditMode] = useState<boolean>(true);

  return (
    <div className="flex flex-wrap sticky top-[78px] gap-1 w-full p-2.5 items-center z-20 bg-white gap-x-3">
      {!isValid || editMode ? (
        <ButtonThemed onClick={applyHandler}>
          {spellingList.graphiQL.apply}
        </ButtonThemed>
      ) : (
        <ButtonThemed onClick={changeHandler}>
          {spellingList.graphiQL.change}
        </ButtonThemed>
      )}
      <div className="w-auto grow">
        <Input
          disabled={!editMode && isValid}
          className="px-3"
          crossOrigin=""
          variant="standard"
          label="Endpoint"
          inputRef={inputRef}
          defaultValue={'https://graphql-pokemon2.vercel.app/'}
        />
      </div>
    </div>
  );
};

export default ControlPanel;

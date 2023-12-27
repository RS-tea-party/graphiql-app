import { Input } from '@material-tailwind/react';
import ButtonThemed from '../_ui/ButtonThemed/ButtonThemed';
import { useContext, useRef, useState } from 'react';
import { LocaleContext } from '../LocaleContext/LocaleContext';
import { useAppSelector } from '../../hooks/useAppSelector';
import {
  isValidSelector,
  setEndpointUrl,
} from '../../store/slices/endpointSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useLazyGetSchemaQuery } from '../../services/api';

const ControlPanel = () => {
  const { spellingList } = useContext(LocaleContext);
  const isValid = useAppSelector(isValidSelector);

  const dispatch = useAppDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const [editMode, setEditMode] = useState<boolean>(true);

  const [trigger] = useLazyGetSchemaQuery();

  const applyHandler = () => {
    if (inputRef.current?.value) {
      dispatch(setEndpointUrl(inputRef.current.value));
      trigger({ url: inputRef.current.value });
      setEditMode(false);
    }
  };

  const changeHandler = () => {
    if (inputRef.current?.value) {
      setEditMode(true);
    }
  };

  return (
    <div className="flex flex-wrap sticky top-[78px] w-full p-2.5 items-center z-20 bg-white gap-3">
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
          className="px-3 disabled:rounded-lg"
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

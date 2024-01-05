import { FC, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LocaleContext } from '../../components/LocaleContext/LocaleContext';
import { Paths } from '../../dto/constants';
import ButtonThemed from '../../components/_ui/ButtonThemed/ButtonThemed';

const NotFound: FC = () => {
  const { spellingList } = useContext(LocaleContext);
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center gap-10"
      data-testid="not-found-page"
    >
      <h1 className="text-3xl">{spellingList.notFound.h1}</h1>
      <NavLink to={Paths.WELCOME}>
        <ButtonThemed variant="outlined">
          {spellingList.notFound.button}
        </ButtonThemed>
      </NavLink>
    </div>
  );
};

export default NotFound;

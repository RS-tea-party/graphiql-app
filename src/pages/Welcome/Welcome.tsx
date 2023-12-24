import { FC, useContext } from 'react';
import { LocaleContext } from '../../components/LocaleContext/LocaleContext';

const Welcome: FC = () => {
  const { spellingList } = useContext(LocaleContext);

  return (
    <div data-testid={'welcome-page'}>{spellingList.welcome.greeting}</div>
  );
};

export default Welcome;

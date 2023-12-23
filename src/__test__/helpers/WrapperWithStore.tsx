import type { FC, PropsWithChildren } from 'react';
import { store } from '../../store/store';
import { Provider } from 'react-redux';

const WrapperWithStore: FC<PropsWithChildren> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default WrapperWithStore;

import { FC } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Navigate } from 'react-router-dom';

const GraphiQL: FC = () => {
  const { isAuth } = useAppSelector((state) => state.user);

  if (!isAuth) {
    return <Navigate to={'/'} replace />;
  }

  return <>GraphiQL Page</>;
};

export default GraphiQL;

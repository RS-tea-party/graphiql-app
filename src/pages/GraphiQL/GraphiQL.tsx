import { FC } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Navigate } from 'react-router-dom';
import { authSelector } from '../../store/slices/userSlice';

const GraphiQL: FC = () => {
  const isAuth = useAppSelector(authSelector);

  if (!isAuth) {
    return <Navigate to={'/'} replace />;
  }

  return <>GraphiQL Page</>;
};

export default GraphiQL;

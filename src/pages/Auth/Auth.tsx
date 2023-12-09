import { FC } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Navigate } from 'react-router-dom';

const Auth: FC = () => {
  const { isAuth } = useAppSelector((state) => state.user);

  if (isAuth) {
    return <Navigate to={'/'} replace />;
  }

  return <>Auth Page</>;
};

export default Auth;

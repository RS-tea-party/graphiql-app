import { FC } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Navigate } from 'react-router-dom';
import { authSelector } from '../../store/slices/userSlice';

const Auth: FC = () => {
  const isAuth = useAppSelector(authSelector);

  if (isAuth) {
    return <Navigate to={'/graphiql'} replace />;
  }

  return <>Auth Page</>;
};

export default Auth;

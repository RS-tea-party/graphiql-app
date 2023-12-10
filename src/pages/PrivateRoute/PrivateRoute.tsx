import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useAppSelector';
import { PrivateRouteProps } from '../../dto/types';

const PrivateRoute: FC<PrivateRouteProps> = ({ redirectPath }) => {
  const { isAuth } = useAppSelector((state) => state.user);

  if (!isAuth) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;

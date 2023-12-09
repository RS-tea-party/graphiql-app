import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

interface PrivateRouteRoute {
  isAuth: boolean;
  redirectPath: string;
}

const PrivateRoute: FC<PrivateRouteRoute> = ({
  isAuth,
  redirectPath,
}) => {
  if (!isAuth) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;

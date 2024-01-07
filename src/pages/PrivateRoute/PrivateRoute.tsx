import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { PrivateRouteProps } from '../../dto/types';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../services/firebase';

const PrivateRoute: FC<PrivateRouteProps> = ({ redirectPath }) => {
  const [user] = useAuthState(auth);
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }
  return <Outlet />;
};

export default PrivateRoute;

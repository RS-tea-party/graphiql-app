import { FC } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Navigate } from 'react-router-dom';
import { authSelector } from '../../store/slices/userSlice';
import { Paths } from '../../dto/constants';
import SignIn from '../../components/Forms/SignIn';

const Auth: FC = () => {
  const isAuth = useAppSelector(authSelector);
  if (isAuth) {
    return <Navigate to={Paths.MAIN} replace />;
  }
  return (
    <section
      className="flex flex-grow items-center justify-center truncate"
      data-testid="auth-page"
    >
      <SignIn />
    </section>
  );
};

export default Auth;

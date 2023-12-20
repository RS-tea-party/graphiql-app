import { FC, useEffect } from 'react';
import ControlPanel from '../../components/GraphiQL/ControlPanel';
import EditorsSection from '../../components/GraphiQL/EditorsSection';
import ResultsSection from '../../components/GraphiQL/ResultsSection';
import { useAppSelector } from '../../hooks/useAppSelector';
import useTokenExpiration from '../../hooks/useTokenExpiration';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { Paths } from '../../dto/constants';
import { Navigate } from 'react-router';
import { logout } from '../../store/slices/userSlice';

const GraphiQL: FC = () => {
  const { token } = useAppSelector((state) => state.user);
  const isTokenExpired = useTokenExpiration();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token !== null && isTokenExpired) {
      dispatch(logout());
      <Navigate to={Paths.WELCOME} replace />;
    }
  }, [dispatch, isTokenExpired, token]);

  return (
    <div className="flex flex-col w-full md:h-full">
      <ControlPanel />
      <div className="flex flex-col md:flex-row justify-center md:justify-around items-center w-full md:h-[calc(100%-60px)] md:overflow-auto p-2 pt-0">
        <EditorsSection />
        <ResultsSection />
      </div>
    </div>
  );
};

export default GraphiQL;

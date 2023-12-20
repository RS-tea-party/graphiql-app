import { DecodeToken } from '../dto/types';
//import { useAppSelector } from './useAppSelector';
import { jwtDecode } from 'jwt-decode';

const useTokenExpiration = () => {
  //const { token } = useAppSelector((state) => state.user);
  const token = localStorage.getItem('id_token');
  if (!token) {
    return true;
  }
  const decodedToken = jwtDecode<DecodeToken>(token);
  if (!decodedToken.exp) {
    return true;
  }
  const currentTime = Date.now() / 1000;
  const checkToken = decodedToken.exp < currentTime;
  if (checkToken) {
    localStorage.removeItem('id_token');
  }

  return checkToken;
};

export default useTokenExpiration;

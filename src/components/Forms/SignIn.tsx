import { FC, useContext } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Navigate } from 'react-router-dom';
import { authSelector } from '../../store/slices/userSlice';
import { Paths } from '../../dto/constants';
import { Card, Input, Button, Typography } from '@material-tailwind/react';
import { authPathSelector, regPath } from '../../store/slices/authPathSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { LocaleContext } from '../LocaleContext/LocaleContext';
import SubSide from './SubSide';

const SignIn: FC = () => {
  //const isAuth = useAppSelector(authSelector);
  const isLoginPath = useAppSelector(authPathSelector);
  const dispatch = useAppDispatch();
  const { locales, lang } = useContext(LocaleContext);

  // if (isAuth) {
  //   return <Navigate to={Paths.MAIN} replace />;
  // }

  return (
    <Card
      color="transparent"
      shadow={true}
      className="mt-6 w-896 truncate h-600 mx-auto my-0 bg-peachFuzz-200 maxmd:items-center"
    >
      <div
        className={`sign_in ease-in-out duration-1000 flex flex-col items-center relative w-640 py-12 px-8 ${
          isLoginPath ? '' : 'translate-x-200% maxmd:h-0 maxmd:py-0 maxmd:px-0'
        } `}
      >
        <Typography variant="h4" color="blue-gray">
          {`${locales[lang].headerButton.signIn}`}
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          {`${locales[lang].forms.signInText}`}
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-16 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              {`${locales[lang].forms.email}`}
            </Typography>
            <Input
              size="lg"
              crossOrigin=""
              placeholder="name@mail.com"
              className=" !border-gray-500 focus:!border-gray-900"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              {`${locales[lang].forms.password}`}
            </Typography>
            <Input
              type="password"
              size="lg"
              crossOrigin=""
              placeholder="********"
              className=" !border-gray-500 focus:!border-gray-900"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
            />
          </div>
          <Button
            className="mt-6 bg-peachFuzz-500 text-gray-900"
            variant="filled"
            fullWidth
          >
            {`${locales[lang].headerButton.signIn}`}
          </Button>
          <Typography
            color="gray"
            className="mt-4 text-center font-normal hidden maxmd:block"
          >
            {`${locales[lang].forms.notAccount}`}{' '}
            <span
              className="font-medium text-gray-900"
              onClick={() => dispatch(regPath())}
            >
              {`${locales[lang].headerButton.signUp}`}
            </span>
          </Typography>
        </form>
      </div>
      <SubSide />
    </Card>
  );
};

export default SignIn;

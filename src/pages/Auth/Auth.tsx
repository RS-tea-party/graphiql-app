import { FC } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Navigate } from 'react-router-dom';
import { authSelector } from '../../store/slices/userSlice';
import { Paths } from '../../dto/constants';
import { Card, Input, Button, Typography } from '@material-tailwind/react';
import {
  authPathSelector,
  loginPath,
  regPath,
} from '../../store/slices/authPathSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';

const Auth: FC = () => {
  const isAuth = useAppSelector(authSelector);
  const isLoginPath = useAppSelector(authPathSelector);
  const dispatch = useAppDispatch();

  if (isAuth) {
    return <Navigate to={Paths.MAIN} replace />;
  }

  return (
    <Card
      color="transparent"
      shadow={true}
      className="mt-6 w-896 truncate h-560 mx-auto my-0 bg-peachFuzz-200 maxmd:items-center"
    >
      <div
        className={`sign_in ease-in-out duration-1000 flex flex-col items-center relative w-640 py-12 px-8 ${
          isLoginPath ? '' : 'translate-x-200%'
        } `}
      >
        <Typography variant="h4" color="blue-gray">
          Sign In
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Nice to meet you! Enter your details to login.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-16 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
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
              Password
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
            sign in
          </Button>
        </form>
      </div>
      <div
        className={`sub_content truncate absolute top-0 left-640 lg:pl-260px ease-in-out duration-1000 w-896 h-full ${
          isLoginPath ? '' : '-translate-x-640'
        }`}
      >
        <div
          className="side truncate absolute left-0 top-0 w-260 z-10 pt-350px hidden lg:block
        before:absolute before:top-0 before:right-0 before:w-full before:h-full
        after:absolute after:top-0 after:right-0 after:w-full after:h-full after:bg-gray-400 opacity-90"
        >
          <div
            className={`side_up absolute w-full left-0 top-14 px-4 text-center duration-1000 ease-in-out text-gray-900 tex z-10 ${
              isLoginPath ? '' : 'translate-x-full'
            }`}
          >
            <Typography variant="h6" color="blue-gray">
              Don&apos;t have an account? <br></br> Please Sign up!
            </Typography>
          </div>
          <div
            className={`side_in absolute w-full left-0 top-14 px-4 text-center duration-1000 ease-in-out text-gray-900 z-10 ${
              isLoginPath ? '-translate-x-200%' : 'translate-x-0'
            }`}
          >
            <Typography variant="h6" color="blue-gray">
              If you already has an account, <br></br> just Sign in.
            </Typography>
          </div>
          <div className="side_btn truncate relative z-10 mb-14">
            <Button
              className={`mx-16 my-5 w-1/2 duration-1000 ease-in-out text-gray-900 ${
                isLoginPath ? '' : 'translate-x-200%'
              }`}
              variant="outlined"
              onClick={() => dispatch(regPath())}
            >
              sign up
            </Button>
            <Button
              className={`mx-16 my-5 w-1/2 duration-1000 ease-in-out block text-gray-900 ${
                isLoginPath ? '-translate-x-200%' : 'translate-x-0'
              }`}
              variant="outlined"
              onClick={() => dispatch(loginPath())}
            >
              sign in
            </Button>
          </div>
        </div>
        <div
          className={`sign_up ease-in-out duration-1000 flex flex-col items-center relative w-640 py-12 px-8 ${
            isLoginPath ? '-translate-x-200%' : 'translate-x-0'
          }`}
        >
          <Typography variant="h4" color="blue-gray">
            Sign Up
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter your details to register.
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Name
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
                Your Email
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
                Password
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
              sign up
            </Button>
          </form>
        </div>
      </div>
    </Card>
  );
};

export default Auth;

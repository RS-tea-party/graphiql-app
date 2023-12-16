import { FC, useContext } from 'react';
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
import { LocaleContext } from '../LocaleContext/LocaleContext';

const SignIn: FC = () => {
  const isAuth = useAppSelector(authSelector);
  const isLoginPath = useAppSelector(authPathSelector);
  const dispatch = useAppDispatch();
  const { locales, lang } = useContext(LocaleContext);

  if (isAuth) {
    return <Navigate to={Paths.MAIN} replace />;
  }

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
      <div
        className={`sub_content truncate absolute top-0 left-640 lg:pl-260px ease-in-out duration-1000 lg:w-896 h-full ${
          isLoginPath ? '' : 'maxmd:relative -translate-x-640'
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
              {`${locales[lang].forms.notAccount}`} <br></br>{' '}
              {`${locales[lang].forms.please}`} <br></br>{' '}
              {`${locales[lang].forms.pleaseSignUp}`}
            </Typography>
          </div>
          <div
            className={`side_in absolute w-full left-0 top-14 px-4 text-center duration-1000 ease-in-out text-gray-900 z-10 ${
              isLoginPath ? '-translate-x-200%' : 'translate-x-0'
            }`}
          >
            <Typography variant="h6" color="blue-gray">
              {`${locales[lang].forms.hasAccount}`} <br></br>{' '}
              {`${locales[lang].forms.justSignIn}`}
            </Typography>
          </div>
          <div className="side_btn truncate relative z-10 mb-[5.5rem]">
            <Button
              className={`mx-16 my-5 w-1/2 duration-1000 ease-in-out text-gray-900 ${
                isLoginPath ? '' : 'translate-x-200%'
              }`}
              variant="outlined"
              onClick={() => dispatch(regPath())}
            >
              {`${locales[lang].headerButton.signUp}`}
            </Button>
            <Button
              className={`mx-16 my-5 w-1/2 duration-1000 ease-in-out block text-gray-900 ${
                isLoginPath ? '-translate-x-200%' : 'translate-x-0'
              }`}
              variant="outlined"
              onClick={() => dispatch(loginPath())}
            >
              {`${locales[lang].headerButton.signIn}`}
            </Button>
          </div>
        </div>
        <div
          className={`sign_up ease-in-out duration-1000 flex flex-col items-center relative w-640 py-12 px-8 ${
            isLoginPath ? '-translate-x-200%' : 'translate-x-0'
          }`}
        >
          <Typography variant="h4" color="blue-gray">
            {`${locales[lang].headerButton.signUp}`}
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            {`${locales[lang].forms.signUpText}`}
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                {`${locales[lang].forms.name}`}
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
              {`${locales[lang].headerButton.signUp}`}
            </Button>
            <Typography
              color="gray"
              className="mt-4 text-center font-normal hidden maxmd:block"
            >
              {`${locales[lang].forms.hasAccount}`}{' '}
              <span
                className="font-medium text-gray-900"
                onClick={() => dispatch(loginPath())}
              >
                {`${locales[lang].headerButton.signIn}`}
              </span>
            </Typography>
          </form>
        </div>
      </div>
    </Card>
  );
};

export default SignIn;

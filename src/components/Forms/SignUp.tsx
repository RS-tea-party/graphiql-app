import { FC, useContext } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Input, Button, Typography } from '@material-tailwind/react';
import { authPathSelector, loginPath } from '../../store/slices/authPathSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { LocaleContext } from '../LocaleContext/LocaleContext';

const SignUp: FC = () => {
  const isLoginPath = useAppSelector(authPathSelector);
  const dispatch = useAppDispatch();
  const { locales, lang } = useContext(LocaleContext);

  return (
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
  );
};

export default SignUp;

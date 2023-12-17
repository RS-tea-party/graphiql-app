import { FC, useContext } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Input, Button, Typography } from '@material-tailwind/react';
import { authPathSelector, loginPath } from '../../store/slices/authPathSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { LocaleContext } from '../LocaleContext/LocaleContext';
import { object, string } from 'yup';
import { SignInFormReg } from '../../dto/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

const SignUp: FC = () => {
  const isLoginPath = useAppSelector(authPathSelector);
  const dispatch = useAppDispatch();
  const { locales, lang } = useContext(LocaleContext);

  const schemaReg = object({
    name: string().required(`${locales[lang].forms.requiredError}`),
    email: string()
      .required(`${locales[lang].forms.requiredError}`)
      .email(`${locales[lang].forms.emailError}`),
    password: string()
      .required(`${locales[lang].forms.requiredError}`)
      .matches(/^(?=.*[0-9])/, `${locales[lang].forms.passwordErrorDigit}`)
      .matches(/^(?=.*[A-Za-z])/, `${locales[lang].forms.passwordErrorLetter}`)
      .matches(
        /^(?=.*[!@#%&$^*()?><|+=])/,
        `${locales[lang].forms.passwordErrorChar}`
      )
      .matches(
        /^[\w\Wa-zA-Z0-9!@#%&$^*()?><|+=]{8,}$/,
        `${locales[lang].forms.passwordErrorCount}`
      ),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<SignInFormReg>({
    mode: 'onSubmit',
    resolver: yupResolver(schemaReg),
    reValidateMode: 'onSubmit',
  });

  const onSubmit = async (data: SignInFormReg) => {};

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
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-1 flex flex-col gap-3">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            {`${locales[lang].forms.name}`}
          </Typography>
          <Input
            {...register('name')}
            size="lg"
            crossOrigin=""
            placeholder="name"
            className=" !border-gray-500 focus:!border-gray-900"
            labelProps={{
              className: 'before:content-none after:content-none',
            }}
          />
          <span className="form__error text-red-500">
            {errors.name?.message ? errors.name?.message : ''}
          </span>
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            {`${locales[lang].forms.email}`}
          </Typography>
          <Input
            {...register('email')}
            size="lg"
            crossOrigin=""
            placeholder="name@mail.com"
            className=" !border-gray-500 focus:!border-gray-900"
            labelProps={{
              className: 'before:content-none after:content-none',
            }}
          />
          <span className="form__error text-red-500">
            {errors.email?.message ? errors.email?.message : ''}
          </span>
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            {`${locales[lang].forms.password}`}
          </Typography>
          <Input
            {...register('password')}
            type="password"
            size="lg"
            crossOrigin=""
            placeholder="********"
            className=" !border-gray-500 focus:!border-gray-900"
            labelProps={{
              className: 'before:content-none after:content-none',
            }}
          />
          <span className="form__error text-red-500">
            {errors.password?.message ? errors.password?.message : ''}
          </span>
        </div>
        <Button
          type="submit"
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

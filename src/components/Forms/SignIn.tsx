import { FC, useContext } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useForm } from 'react-hook-form';
import { Card, Input, Button, Typography } from '@material-tailwind/react';
import { authPathSelector, regPath } from '../../store/slices/authPathSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { LocaleContext } from '../LocaleContext/LocaleContext';
import SubSide from './SubSide';
import { object, string } from 'yup';
import { SignInForm } from '../../dto/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { login } from '../../store/slices/userSlice';
import { Navigate } from 'react-router-dom';
import { Paths } from '../../dto/constants';
import { FirebaseError } from 'firebase/app';
import { auth } from '../../services/firebase';
import { toast } from 'react-toastify';

const SignIn: FC = () => {
  const isLoginPath = useAppSelector(authPathSelector);
  const dispatch = useAppDispatch();
  const { spellingList } = useContext(LocaleContext);
  let errorCode: string;
  const schemaLogin = object({
    email: string()
      .required(`${spellingList.forms.requiredError}`)
      .email(`${spellingList.forms.emailError}`),
    password: string()
      .required(`${spellingList.forms.requiredError}`)
      .matches(/^(?=.*[0-9])/, `${spellingList.forms.passwordErrorDigit}`)
      .matches(
        /^(?=.*[A-Za-zА-Яа-я])/,
        `${spellingList.forms.passwordErrorLetter}`
      )
      .matches(
        /^(?=.*[!@#%&$^*()?><|+=])/,
        `${spellingList.forms.passwordErrorChar}`
      )
      .matches(
        /^[\w\Wa-zA-Z0-9!@#%&$^*()?><|+=]{8,}$/,
        `${spellingList.forms.passwordErrorCount}`
      ),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<SignInForm>({
    mode: 'onSubmit',
    resolver: yupResolver(schemaLogin),
    reValidateMode: 'onSubmit',
  });

  const onSubmit = async (data: SignInForm) => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        dispatch(login());
        toast.success(`${spellingList.forms.success}`, { draggable: true });
        <Navigate to={Paths.MAIN} replace />;
      })
      .catch((error) => {
        if (error instanceof FirebaseError) {
          switch (error.code) {
            case 'auth/internal-error':
              errorCode = `${spellingList.forms.firebaseErrorInternal}`;
              break;
            case 'auth/invalid-credential':
              errorCode = `${spellingList.forms.firebaseErrorInvalidCredential}`;
              break;
            case 'auth/network-request-failed':
              errorCode = `${spellingList.forms.firebaseErrorNetwork}`;
              break;
            case 'auth/too-many-requests':
              errorCode = `${spellingList.forms.firebaseErrorMany}`;
              break;
            default:
              errorCode = error.code;
          }
          toast.error(`${errorCode}`, { draggable: false });
        }
      });
    reset();
  };

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
          {`${spellingList.headerButton.signIn}`}
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          {`${spellingList.forms.signInText}`}
        </Typography>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-16 flex flex-col gap-3">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              {`${spellingList.forms.email}`}
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
              {`${spellingList.forms.password}`}
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
            className="mt-6 bg-peachFuzz-500 text-gray-900"
            variant="filled"
            fullWidth
            type="submit"
          >
            {`${spellingList.headerButton.signIn}`}
          </Button>
          <Typography
            color="gray"
            className="mt-4 text-center font-normal hidden maxmd:block"
          >
            {`${spellingList.forms.notAccount}`}{' '}
            <span
              role="button"
              className="font-medium text-gray-900 hover:text-gray-700 cursor-pointer"
              onClick={() => dispatch(regPath())}
            >
              {`${spellingList.headerButton.signUp}`}
            </span>
          </Typography>
        </form>
      </div>
      <SubSide />
    </Card>
  );
};

export default SignIn;

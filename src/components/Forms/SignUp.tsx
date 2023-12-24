import { FC, useContext } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Input, Button, Typography } from '@material-tailwind/react';
import { authPathSelector, loginPath } from '../../store/slices/authPathSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { LocaleContext } from '../LocaleContext/LocaleContext';
import { object, string } from 'yup';
import { SignUpForm } from '../../dto/types';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Navigate } from 'react-router-dom';
import { Paths } from '../../dto/constants';
import { login } from '../../store/slices/userSlice';
import { FirebaseError } from 'firebase/app';
import { auth } from '../../helpers/firebase';
import { toast } from 'react-toastify';

const SignUp: FC = () => {
  const isLoginPath = useAppSelector(authPathSelector);
  const dispatch = useAppDispatch();
  const { spellingList } = useContext(LocaleContext);
  let errorCode: string;
  const schemaReg = object({
    name: string().required(`${spellingList.forms.requiredError}`),
    email: string()
      .required(`${spellingList.forms.requiredError}`)
      .email(`${spellingList.forms.emailError}`),
    password: string()
      .required(`${spellingList.forms.requiredError}`)
      .matches(/^(?=.*[0-9])/, `${spellingList.forms.passwordErrorDigit}`)
      .matches(
        /^(?=.*[a-zA-Zа-яА-Я])/,
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
  } = useForm<SignUpForm>({
    mode: 'onSubmit',
    resolver: yupResolver(schemaReg),
    reValidateMode: 'onSubmit',
  });

  const onSubmit = async (data: SignUpForm) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(() => {
        dispatch(login());
        auth.currentUser &&
          updateProfile(auth.currentUser, {
            displayName: data.name,
          })
            .then(() => {})
            .catch((error) => {
              if (error instanceof FirebaseError) {
                errorCode = `${spellingList.forms.firebaseErrorInternal}`;
                toast.error(`${errorCode}`, { draggable: false });
              }
            });
        toast.success(`${spellingList.forms.success}`, { draggable: false });
        <Navigate to={Paths.MAIN} replace />;
      })
      .catch((error) => {
        if (error instanceof FirebaseError) {
          switch (error.code) {
            case 'auth/internal-error':
              errorCode = `${spellingList.forms.firebaseErrorInternal}`;
              break;
            case 'auth/email-already-in-use':
              errorCode = `${spellingList.forms.firebaseErrorEmail}`;
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
    <div
      className={`sign_up ease-in-out duration-1000 flex flex-col items-center relative w-640 py-12 px-8 ${
        isLoginPath ? '-translate-x-200%' : 'translate-x-0'
      }`}
    >
      <Typography variant="h4" color="blue-gray">
        {`${spellingList.headerButton.signUp}`}
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        {`${spellingList.forms.signUpText}`}
      </Typography>
      <form
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="mb-1 flex flex-col gap-3">
          <Typography variant="h6" color="blue-gray" className="-mb-3">
            {`${spellingList.forms.name}`}
          </Typography>
          <Input
            {...register('name')}
            size="lg"
            crossOrigin=""
            placeholder={spellingList.forms.namePlaceholder}
            className=" !border-gray-500 focus:!border-gray-900"
            labelProps={{
              className: 'before:content-none after:content-none',
            }}
          />
          <span className="form__error text-red-500">
            {errors.name?.message ? errors.name?.message : ''}
          </span>
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
          type="submit"
          className="mt-6 bg-peachFuzz-500 text-gray-900"
          variant="filled"
          fullWidth
        >
          {`${spellingList.headerButton.signUp}`}
        </Button>
        <Typography
          color="gray"
          className="mt-4 text-center font-normal hidden maxmd:block"
        >
          {`${spellingList.forms.hasAccount}`}{' '}
          <span
            className="font-medium text-gray-900"
            onClick={() => dispatch(loginPath())}
          >
            {`${spellingList.headerButton.signIn}`}
          </span>
        </Typography>
      </form>
    </div>
  );
};

export default SignUp;

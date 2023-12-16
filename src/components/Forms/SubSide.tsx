import { FC, useContext } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';
import { Button, Typography } from '@material-tailwind/react';
import {
  authPathSelector,
  loginPath,
  regPath,
} from '../../store/slices/authPathSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { LocaleContext } from '../LocaleContext/LocaleContext';
import SignUp from './SignUp';

const SubSide: FC = () => {
  const isLoginPath = useAppSelector(authPathSelector);
  const dispatch = useAppDispatch();
  const { locales, lang } = useContext(LocaleContext);

  return (
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
      <SignUp />
    </div>
  );
};

export default SubSide;

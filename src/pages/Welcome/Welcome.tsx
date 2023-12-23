import { FC, useContext } from 'react';
import { LocaleContext } from '../../components/LocaleContext/LocaleContext';
import { useAppSelector } from '../../hooks/useAppSelector';
import { authSelector } from '../../store/slices/userSlice';
import ButtonThemed from '../../components/_ui/ButtonThemed/ButtonThemed';
import { Paths } from '../../dto/constants';
import { Link } from 'react-router-dom';
import DeveloperCard from '../../components/Welcome/DeveloperCard';
import { Typography } from '@material-tailwind/react';

const Welcome: FC = () => {
  const { locales, lang } = useContext(LocaleContext);
  const isAuth = useAppSelector(authSelector);

  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full justify-end end gap-2 p-6">
        {isAuth ? (
          <Link to={Paths.MAIN}>
            <ButtonThemed>{locales[lang].headerButton.mainPage}</ButtonThemed>
          </Link>
        ) : (
          <>
            <Link to={Paths.AUTH}>
              <ButtonThemed>{locales[lang].headerButton.signIn}</ButtonThemed>
            </Link>
            <Link to={Paths.AUTH}>
              <ButtonThemed>{locales[lang].headerButton.signUp}</ButtonThemed>
            </Link>
          </>
        )}
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="flex gap-8 w-full justify-center p-8 bg-peachFuzz-50 flex-wrap">
          <DeveloperCard
            name={'Inga Moshkareva'}
            descr={'Belarus, junior Front-End Developer.'}
            avatarUrl={'https://avatars.githubusercontent.com/u/76948119?v=4'}
            position={'Developer'}
            githubName={'ingamuse'}
            githubLink={'https://github.com/ingamuse'}
          />
          <DeveloperCard
            name={'Dmitry Novik'}
            descr={'Bachelor of Economics, junior Front-End Developer.'}
            avatarUrl={'https://avatars.githubusercontent.com/u/58699696?v=4'}
            position={'Team Leader'}
            githubName={'rebel228'}
            githubLink={'https://github.com/rebel228/'}
          />
          <DeveloperCard
            name={'Maksim Sinelnikau'}
            descr={'Belarus, junior Front-End Developer.'}
            avatarUrl={'https://avatars.githubusercontent.com/u/96006023?v=4'}
            position={'Developer'}
            githubName={'maxsimusprime'}
            githubLink={'https://github.com/maxsimusprime'}
          />
        </div>

        <div className="p-6">
          <Typography variant="h3">About the project</Typography>
          <Typography variant="paragraph" className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </div>
        <div className="p-6 bg-peachFuzz-50">
          <Typography variant="h3">About the course</Typography>
          <Typography variant="paragraph" className="text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

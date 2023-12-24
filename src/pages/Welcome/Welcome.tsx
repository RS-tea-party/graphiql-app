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
  const { spellingList } = useContext(LocaleContext);
  const isAuth = useAppSelector(authSelector);

  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full justify-end end gap-2 p-6">
        {isAuth ? (
          <Link to={Paths.MAIN}>
            <ButtonThemed>{spellingList.headerButton.mainPage}</ButtonThemed>
          </Link>
        ) : (
          <>
            <Link to={Paths.AUTH}>
              <ButtonThemed>{spellingList.headerButton.signIn}</ButtonThemed>
            </Link>
            <Link to={Paths.AUTH}>
              <ButtonThemed>{spellingList.headerButton.signUp}</ButtonThemed>
            </Link>
          </>
        )}
      </div>
      <div className="flex flex-col items-center w-full">
        <div className="flex gap-8 w-full justify-center p-8 bg-peachFuzz-50 flex-wrap">
          <DeveloperCard
            name={'Inga Moshkareva'}
            descr={spellingList.welcome.ingamuseDescr}
            avatarUrl={'https://avatars.githubusercontent.com/u/76948119?v=4'}
            position={spellingList.welcome.developer}
            githubName={'ingamuse'}
            githubLink={'https://github.com/ingamuse'}
          />
          <DeveloperCard
            name={'Dmitry Novik'}
            descr={spellingList.welcome.rebelDescr}
            avatarUrl={'https://avatars.githubusercontent.com/u/58699696?v=4'}
            position={spellingList.welcome.teamLead}
            githubName={'rebel228'}
            githubLink={'https://github.com/rebel228/'}
          />
          <DeveloperCard
            name={'Maksim Sinelnikau'}
            descr={spellingList.welcome.maximusDescr}
            avatarUrl={'https://avatars.githubusercontent.com/u/96006023?v=4'}
            position={spellingList.welcome.developer}
            githubName={'maxsimusprime'}
            githubLink={'https://github.com/maxsimusprime'}
          />
        </div>

        <div className="w-full p-6">
          <Typography variant="h3">
            {spellingList.welcome.aboutProjectTitle}
          </Typography>
          <Typography variant="paragraph" className="text-justify">
            {spellingList.welcome.aboutProject}
          </Typography>
        </div>
        <div className="w-full p-6 bg-peachFuzz-50">
          <Typography variant="h3">
            {spellingList.welcome.aboutCourseTitle}
          </Typography>
          <Typography variant="paragraph" className="text-justify">
            {spellingList.welcome.aboutCourse}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

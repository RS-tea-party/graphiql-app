import { FC, useContext } from 'react';
import { LocaleContext } from '../../components/LocaleContext/LocaleContext';
import { useAppSelector } from '../../hooks/useAppSelector';
import { authSelector } from '../../store/slices/userSlice';
import ButtonThemed from '../../components/_ui/ButtonThemed/ButtonThemed';
import { Paths } from '../../dto/constants';
import { useNavigate } from 'react-router-dom';
import DeveloperCard from '../../components/Welcome/DeveloperCard';
import { Typography } from '@material-tailwind/react';
import { loginPath, regPath } from '../../store/slices/authPathSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';

const About: FC = () => {
  const { spellingList } = useContext(LocaleContext);
  const isAuth = useAppSelector(authSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSignIn = () => {
    dispatch(loginPath());
    navigate(Paths.AUTH);
  };
  const onSignUp = () => {
    dispatch(regPath());
    navigate(Paths.AUTH);
  };
  const onMainPage = () => {
    navigate(Paths.MAIN);
  };

  return (
    <div className="flex flex-col w-full">
      <section className="flex w-full justify-end end gap-2 p-6">
        {isAuth ? (
          <ButtonThemed onClick={onMainPage}>
            {spellingList.headerButton.mainPage}
          </ButtonThemed>
        ) : (
          <>
            <ButtonThemed onClick={onSignIn}>
              {spellingList.headerButton.signIn}
            </ButtonThemed>
            <ButtonThemed onClick={onSignUp}>
              {spellingList.headerButton.signUp}
            </ButtonThemed>
          </>
        )}
      </section>
      <section className="flex flex-col items-center w-full">
        <article className="flex gap-8 w-full justify-center p-8 bg-peachFuzz-50 flex-wrap">
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
        </article>

        <article className="w-full p-6">
          <Typography variant="h3">
            {spellingList.welcome.aboutProjectTitle}
          </Typography>
          <Typography variant="paragraph" className="text-justify">
            {spellingList.welcome.aboutProject}
          </Typography>
        </article>
        <article className="w-full p-6 bg-peachFuzz-50">
          <Typography variant="h3">
            {spellingList.welcome.aboutCourseTitle}
          </Typography>
          <Typography variant="paragraph" className="text-justify">
            {spellingList.welcome.aboutCourse}
          </Typography>
        </article>
      </section>
    </div>
  );
};

export default About;

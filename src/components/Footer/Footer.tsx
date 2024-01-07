import { FC } from 'react';
import rsschoolIcon from '../../assets/rsschoolIcon.svg';
import githubIcon from '../../assets/githubIcon.svg';

const Footer: FC = () => {
  return (
    <div className="flex flex-row justify-between h-22 w-full px-4 py-2 lg:px-8 lg:py-4 bg-peachFuzz-500">
      <div className="flex flex-row px-5">
        <a href="https://github.com/rebel228">
          <img
            className="w-8 h-6 cursor-pointer hover:scale-120 ease-out duration-500"
            src={githubIcon}
            alt="Dima github"
          />
        </a>
        <a href="https://github.com/maxsimusprime">
          <img
            className="w-8 h-6 cursor-pointer hover:scale-120 ease-out duration-500"
            src={githubIcon}
            alt="Max github"
          />
        </a>
        <a href="https://github.com/IngaMuse">
          <img
            className="w-8 h-6 cursor-pointer hover:scale-120 ease-out duration-500"
            src={githubIcon}
            alt="Inga github"
          />
        </a>
      </div>
      <p className="text-base text-gray-900">&copy;2024</p>
      <div className="px-5">
        <a href="https://rs.school/react/">
          <img
            className="w-24 h-6 cursor-pointer hover:scale-120 ease-out duration-500"
            src={rsschoolIcon}
            alt="RS School"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;

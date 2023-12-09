import { FC } from 'react';
import LangSwitcher from './LangSwitcher';

const Header: FC = () => {
  return (
    <div className="h-20 w-full flex items-center justify-center bg-indigo-200 dark:bg-indigo-500">
      <LangSwitcher />
    </div>
  );
};

export default Header;

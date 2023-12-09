import { FC } from 'react';
import { Button } from '@material-tailwind/react';

const Header: FC = () => {
  return (
    <div className="h-20 w-full flex items-center justify-center bg-indigo-200 dark:bg-indigo-500">
      <Button color="red" variant="gradient">
        MUI Button
      </Button>
    </div>
  );
};

export default Header;

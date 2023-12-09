import { FC } from 'react';
import { Button } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';

const NotFound: FC = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center gap-10'>
      <h1 className='text-3xl'>404 Page Not Found</h1>
      <NavLink to={'/'}>
        <Button variant="outlined">GO ROOT PAGE</Button>
      </NavLink>
    </div>
  );
};

export default NotFound;

import { Spinner } from '@material-tailwind/react';
import { FC } from 'react';

const Loader: FC = () => {
  return (
    <div
      className="z-[999] absolute top-0 left-0 w-full h-full bg-gray-300/50 overscroll-contain"
      data-testid="loader"
    >
      <Spinner
        className="h-8 w-8 absolute"
        style={{ top: 'calc(50% - 1rem)', left: 'calc(50% - 1rem)' }}
      />
    </div>
  );
};

export default Loader;

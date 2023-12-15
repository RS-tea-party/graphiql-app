import { Button } from '@material-tailwind/react';
import { FC, PropsWithChildren } from 'react';

const ButtonThemed: FC<PropsWithChildren> = ({ children, ...props }) => {
  return (
    <Button
      size="sm"
      variant="outlined"
      className="border-peachFuzz bg-peachFuzz"
      {...props}
    >
      {children}
    </Button>
  );
};

export default ButtonThemed;

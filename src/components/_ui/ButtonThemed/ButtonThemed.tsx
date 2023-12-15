import { Button } from '@material-tailwind/react';
import { FC, PropsWithChildren } from 'react';

interface ButtonThemedProps extends PropsWithChildren {
  className?: string;
}

const ButtonThemed: FC<ButtonThemedProps> = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      size="sm"
      variant="outlined"
      className={`${
        props.className && props.className
      } border-peachFuzz bg-peachFuzz`}
    >
      {children}
    </Button>
  );
};

export default ButtonThemed;

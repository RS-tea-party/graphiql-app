import { Button } from '@material-tailwind/react';
import { FC, PropsWithChildren } from 'react';

interface ButtonThemedProps extends PropsWithChildren {
  className?: string;
  disabled?: boolean;
  variant?: 'filled' | 'outlined' | 'gradient' | 'text';
}

const ButtonThemed: FC<ButtonThemedProps> = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      size="sm"
      variant={props.variant || 'outlined'}
      className={`${
        props.className && props.className
      } border-peachFuzz bg-peachFuzz`}
    >
      {children}
    </Button>
  );
};

export default ButtonThemed;

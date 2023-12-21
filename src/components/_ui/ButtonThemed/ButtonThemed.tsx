import { Button } from '@material-tailwind/react';
import { FC, MouseEventHandler, PropsWithChildren } from 'react';

interface ButtonThemedProps extends PropsWithChildren {
  className?: string;
  disabled?: boolean;
  variant?: 'filled' | 'outlined' | 'gradient' | 'text';
  onClick?: MouseEventHandler;
}

const ButtonThemed: FC<ButtonThemedProps> = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      size="sm"
      variant={props.variant || 'outlined'}
      className={`${
        props.className && props.className
      } border-peachFuzz bg-peachFuzz disabled:bg-peachGray disabled:border-peachGray-100 disabled:text-peachGray-100`}
    >
      {children}
    </Button>
  );
};

export default ButtonThemed;

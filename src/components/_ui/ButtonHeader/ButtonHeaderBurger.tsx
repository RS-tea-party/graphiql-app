import { Button } from '@material-tailwind/react';
import { FC, PropsWithChildren } from 'react';

interface ButtonHeaderProps extends PropsWithChildren {
  className?: string;
  variant?: 'outlined' | 'text';
  size?: 'md' | 'sm';
  onClick?: (event: React.MouseEvent) => void;
}

const ButtonHeaderBurger: FC<ButtonHeaderProps> = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      size={props.size || 'sm'}
      variant={props.variant || 'outlined'}
      className={props.className || 'min-w-[50%] focus:ring-peachFuzz-200'}
    >
      {children}
    </Button>
  );
};

export default ButtonHeaderBurger;

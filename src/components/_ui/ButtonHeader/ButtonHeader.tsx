import { Button } from '@material-tailwind/react';
import { FC, PropsWithChildren } from 'react';

interface ButtonHeaderProps extends PropsWithChildren {
  className?: string;
  variant?: 'outlined' | 'text';
  size?: 'md' | 'sm';
  onClick?: (event: React.MouseEvent) => void;
}

const ButtonHeader: FC<ButtonHeaderProps> = ({ children, ...props }) => {
  return (
    <Button
      {...props}
      size={props.size || 'md'}
      variant={props.variant || 'text'}
      className={props.className || 'hidden lg:inline-block text-base'}
    >
      {children}
    </Button>
  );
};

export default ButtonHeader;

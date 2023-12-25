import { Button, ThemeProvider, Tooltip } from '@material-tailwind/react';
import { FC, MouseEventHandler, PropsWithChildren } from 'react';
import { tooltipTheme } from '../../../themes/tooltip';
import { zIndexes } from '../../../dto/types';

interface ButtonThemedProps extends PropsWithChildren {
  className?: string;
  disabled?: boolean;
  variant?: 'filled' | 'outlined' | 'gradient' | 'text';
  onClick?: MouseEventHandler;
  tooltip?: {
    text: string;
    position: 'top' | 'bottom' | 'left' | 'right';
  };
  zindex?: zIndexes;
}

const ButtonThemed: FC<ButtonThemedProps> = ({ children, ...props }) => {
  return (
    <ThemeProvider value={tooltipTheme(props.zindex)}>
      <Tooltip
        content={props.tooltip?.text}
        className={`${props.tooltip || 'hidden'}`}
      >
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
      </Tooltip>
    </ThemeProvider>
  );
};

export default ButtonThemed;

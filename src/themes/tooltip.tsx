import { zIndexes } from '../dto/types';

export const tooltipTheme = (zIndex?: zIndexes) => {
  return {
    tooltip: {
      defaultProps: {
        interactive: false,
        placement: 'left',
        dismiss: { enabled: true, outsidePress: true, ancestorScroll: true },
        animate: {
          unmount: {},
          mount: {},
        },
        classname: '',
      },
      styles: {
        base: {
          bg: 'bg-peachFuzz',
          py: 'py-1.5',
          px: 'px-3',
          borderRadius: 'rounded-lg',
          fontFamily: 'font-sans',
          fontSize: 'text-sm',
          fontWeight: 'font-normal',
          color: 'black',
          outline: 'focus:outline-none',
          overflowWrap: 'break-words',
          zIndex: zIndex || 'z-10',
          whiteSpace: 'whitespace-normal',
        },
      },
    },
  };
};

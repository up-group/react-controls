import { style } from 'typestyle';

export const getWrapperStyle = (): string => {
  return style({
    width: '50px',
    cursor: 'pointer',
    opacity: 0.7,
    transition: 'opacity .5s',
    $nest: {
      '&:hover': {
        opacity: 1,
      },
    },
  });
};

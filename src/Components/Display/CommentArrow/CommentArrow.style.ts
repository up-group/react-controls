import { style } from 'typestyle';
import { ThemeInterface } from '../../../Common/theming/types';
export const getWrapperStyles = (theme: ThemeInterface): string =>
  style({
    cursor: 'pointer',
    opacity: 0.9,
    transition: 'opacity .5s',
    $nest: {
      '&:hover': {
        opacity: 1,
      },
    },
  });

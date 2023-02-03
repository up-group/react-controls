import { style } from 'typestyle';
import { ThemeInterface } from '../../../../Common/theming/types';

export const getWrapperStyles = (theme: ThemeInterface): string =>
  style({
    border: `1px solid ${theme.colorMap.darkSilver}`,
    borderRadius: '18px',
    opacity: 1,
    padding: '16px',
    minHeight: '138px',
  });

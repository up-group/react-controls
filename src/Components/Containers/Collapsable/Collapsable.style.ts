import { style } from 'typestyle';
import { ThemeInterface } from '../../../Common/theming/types';

export const getWrapperStyles = (theme: ThemeInterface, withBorders: boolean): string =>
  style({
    border: withBorders ? `1px solid ${theme.colorMap.darkSilver}` : 'none',
    display: 'flex',
    flexDirection: 'column',
    opacity: 1,
    padding: '17px 23px',
  });

export const getHeaderStyles = (theme: ThemeInterface): string =>
  style({
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'baseline',
    userSelect: 'none',
    fontWeight: 'bold',
  });

export const getTitleStyles = (theme: ThemeInterface): string =>
  style({
    color: `${theme.colorMap.grey1}`,
    flex: 1,
    fontSize: '18px',
    margin: 0,
    textTransform: 'uppercase',
  });

export const getContentStyles = (): string =>
  style({
    paddingTop: '20px',
  });

export const getStatusIndicatorStyles = (theme: ThemeInterface, isOpened: boolean): string =>
  style({
    fontSize: '30px',
    color: `${theme.colorMap.primary}`,
    transition: 'rotate .3s',
    // @ts-ignore
    rotate: isOpened ? '90deg' : 'none',
  });

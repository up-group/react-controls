import { ThemeInterface } from '../../../Common/theming/types';
import { style } from 'typestyle';

export const getWrapperStyles = (theme: ThemeInterface): string =>
  style({
    overflow: 'hidden',
  });

export const getContentWrapperStyles = (theme: ThemeInterface): string =>
  style({
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
  });
export const getCommentsWrapperStyles = (theme: ThemeInterface): string =>
  style({
    display: 'flex',
    flexFlow: 'row nowrap',
    flex: 1,
    position: 'absolute',
    paddingLeft: '14px',
  });
export const getControlsWrapperStyle = (theme: ThemeInterface): string =>
  style({
    display: 'flex',
    justifyContent: 'space-between',
    flexFlow: 'row nowrap',
    padding: '10px 0',
  });

export const getHrStyle = (theme: ThemeInterface): string => style({});

export const getItemsWrapperStyle = (theme: ThemeInterface): string =>
  style({
    borderTop: `solid 1px ${theme.colorMap.darkSilver}`,
    flex: 1,
  });

import { ThemeInterface } from '../../../Common/theming/types';
import { style } from 'typestyle';

export const getWrapperStyles = (theme: ThemeInterface): string => style({});

export const getContentWrapperStyles = (theme: ThemeInterface, hasContent: boolean): string =>
  style({
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: hasContent ? 'baseline' : 'center',
    padding: '10px 0',
  });
export const getCommentsWrapperStyles = (theme: ThemeInterface): string =>
  style({
    display: 'flex',
    flexFlow: 'row nowrap',
    paddingLeft: '14px',
  });
export const getControlsWrapperStyle = (theme: ThemeInterface): string =>
  style({
    display: 'flex',
    justifyContent: 'space-between',
    flexFlow: 'row nowrap',
    padding: '10px 0',
  });

export const getItemsWrapperStyle = (theme: ThemeInterface): string =>
  style({
    borderTop: `solid 1px ${theme.colorMap.darkSilver}`,
    flex: 1,
  });

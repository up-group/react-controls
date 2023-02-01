import { style } from 'typestyle';
import { ThemeInterface } from '../../../Common/theming/types';

export const getWrapperStyles = (): string => style({});

export const getActionsStyles = (): string =>
  style({
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
  });

export const getTextStyles = (theme: ThemeInterface): string =>
  style({
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    overflowWrap: 'break-word',
    color: `${theme.colorMap.grey1}`,
    lineHeight: '16px',
    fontSize: '14px',
  });

import { style } from 'typestyle';
import { ThemeInterface } from '../../../../Common/theming/types';

export const getWrapperStyles = (theme: ThemeInterface): string =>
  style({
    border: `1px solid ${theme.colorMap.primary}`,
    borderRadius: '18px',
    opacity: 1,
    padding: '13px',
    minHeight: '256px',
    display: 'flex',
    flexFlow: 'column nowrap',
  });

export const getActionsStyles = (): string =>
  style({
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  });

export const getInputStyles = (theme: ThemeInterface): string =>
  style({
    color: `${theme.colorMap.grey1}`,
    lineHeight: '16px',
    fontSize: '14px',
    background: 'transparent',
    outline: 'none',
    border: 'none',
    width: '100%',
    resize: 'none',
    flex: 1,
  });

export const getActionsIconStyles = (): string =>
  style({
    width: '28px',
    marginLeft: '8px',
    cursor: 'pointer',
  });

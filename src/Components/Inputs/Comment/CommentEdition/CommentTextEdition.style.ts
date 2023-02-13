import { style } from 'typestyle';
import { ThemeInterface } from '../../../../Common/theming/types';

export const getWrapperStyles = (theme: ThemeInterface, hasReachedLimit: boolean): string =>
  style({
    border: `1px solid ${hasReachedLimit ? theme.colorMap.error : theme.colorMap.primary}`,
    borderRadius: '18px',
    opacity: 1,
    padding: '13px',
    minHeight: '127px',
    maxHeight: '323px',
    display: 'flex',
    flexFlow: 'column nowrap',
    width: '240px',
  });

export const getActionsStyles = (): string =>
  style({
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-end',
    alignItems: 'center',
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
    cursor: 'pointer',
  });

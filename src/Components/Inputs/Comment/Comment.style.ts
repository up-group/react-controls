import { style } from 'typestyle';
import { ThemeInterface } from '../../../Common/theming/types';

export const getWrapperStyles = (theme: ThemeInterface): string =>
  style({
    display: 'flex',
    flexFlow: 'row nowrap',
    color: `${theme.colorMap.darkGray4}`,
    fontSize: '12px',
    letterSpacing: '0px',
    paddingBottom: '6px',
    position: 'relative',
    top: '-14px',
    flex: 1,
  });

export const getContentWrapperStyles = (): string =>
  style({
    paddingTop: '24px',
    minWidth: '200px',
    maxWidth: '240px',
    display: 'flex',
    flexFlow: 'column nowrap',
  });

export const getAuthorWrapperStyles = (theme: ThemeInterface): string =>
  style({
    color: `${theme.colorMap.grey1}`,
    fontSize: '14px',
    fontWeight: 'bold',
    letterSpacing: '0px',
    padding: '2px',
    opacity: 1,
  });

export const getDateWrapperStyles = (theme: ThemeInterface): string =>
  style({
    color: `${theme.colorMap.grey1}`,
    fontSize: '14px',
    fontWeight: 'bold',
    letterSpacing: '0px',
    padding: '2px',
    opacity: 1,
    width: '90px',
    borderTop: `1px solid ${theme.colorMap.grey1}`,
  });

export const getInfoWrapperStyles = (theme: ThemeInterface): string =>
  style({
    color: `${theme.colorMap.darkGray4}`,
    fontSize: '12px',
    letterSpacing: '0px',
    paddingBottom: '6px',
  });

export const getPlusIconStyles = (): string =>
  style({
    width: '30px',
  });

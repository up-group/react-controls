import { style } from 'typestyle';
import { ThemeInterface } from '../../../Common/theming/types';

export const getWrapperStyles = (): string =>
  style({
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    fontFamily: 'Roboto',
  });

export const getButtonStyles = (theme: ThemeInterface): string =>
  style({
    display: 'flex',
    flexFlow: 'row nowrap',
    width: '191px',
    cursor: 'pointer',
    padding: '10px',
    alignItems: 'center',
    border: `1px solid ${theme.colorMap.darkSilver}`,
    borderRadius: '11px',
    opacity: 0.9,
    transition: 'opacity .5s',
    $nest: {
      '&:hover': {
        opacity: 1,
      },
    },
    background: `${theme.colorMap.white}`,
  });

export const getPlusIconStyles = (): string =>
  style({
    width: '30px',
  });

export const getLabelStyles = (): string =>
  style({
    textAlign: 'left',
    letterSpacing: '0px',
    color: '#4E5B59',
    paddingLeft: '14px',
    cursor: 'pointer',
  });

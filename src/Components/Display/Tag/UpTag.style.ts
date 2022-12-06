import { style } from 'typestyle';
import { ThemeInterface } from '../../../Common/theming/types';

export const getTagStyle = (theme: ThemeInterface, isSelected: boolean): string => {
  return style({
    backgroundColor: isSelected ? theme.colorMap.primary : 'white',
    color: isSelected ? theme.colorMap.white : 'black',
    border: isSelected ? 'none' : `1px solid ${theme.colorMap.darkSilver}`,
    borderRadius: '19px',
    fontWeight: isSelected ? 'bold' : 'normal',
    fontSize: '14px',
    lineHeight: '16px',
    opacity: 1,
    padding: '9px 20px',
    marginRight: '9px',
    cursor: 'pointer',
    userSelect: 'none',
    transition: 'color .3s, background-color .3s',
  });
};

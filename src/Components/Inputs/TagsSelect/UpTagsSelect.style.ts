import { style } from 'typestyle';
import { ThemeInterface } from '../../../Common/theming/types';

export const getTagsWrapperStyles = (theme: ThemeInterface): string => style({
    display: "flex"
})


export const getLabelWrapperStyles = (theme: ThemeInterface): string => style({
    display: "flex",
    borderBottom: `1px solid  ${theme.colorMap.darkGray4}`,
    letterSpacing: '0px',
    marginBottom: '11px',
    textAlign: 'left',
    userSelect: 'none',
    opacity: 1,
})


export const getLabelStyles = (theme: ThemeInterface): string => style({
    color: `${theme.colorMap.darkGray4}`,
    fontSize: '12px',
    letterSpacing: '0px',
    paddingBottom: '6px',
})




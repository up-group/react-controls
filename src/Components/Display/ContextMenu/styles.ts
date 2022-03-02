import { style } from 'typestyle';
import { NestedCSSProperties } from 'typestyle/lib/types';
import { toRem } from '../../../Common/theming/utils';

export const MenuStyle = (theme, { top, left, isVisible }) =>
  style({
    position: 'fixed',
    top: top,
    left: left,
    padding: `${toRem(5)} 0`,
    margin: `${toRem(2)} 0 0`,
    fontSize: toRem(16),
    color: theme.colorMap.primaryFg,
    textAlign: 'left',
    backgroundColor: '#fff',
    backgroundClip: 'padding-box',
    border: '1px solid rgba(0,0,0,.15)',
    borderRadius: toRem(4),
    outline: 'none',
    opacity: isVisible ? 1 : 0,
    zIndex: isVisible ? 9999 : -1,
    pointeEvents: isVisible ? 'auto' : 'none',
    $nest: {
      '& .up-contextmenu-link': {
        display: 'inline-block',
        width: '100%',
        padding: `${toRem(3)} ${toRem(20)}`,
        clear: 'both',
        fontWeight: 400,
        lineHeight: 1.5,
        color: theme.colorMap.primary,
        textAlign: 'inherit',
        whiteSpace: 'nowrap',
        background: 'transparent',
        border: 0,
        textDecoration: 'none',
      },
      '& .up-contextmenu-link.active,& .up-contextmenu-link:hover': {
        color: theme.colorMap.primaryFg,
        backgroundColor: theme.colorMap.primary,
        borderColor: theme.colorMap.primaryDark,
        textDecoration: 'none',
      },
      '& .up-contextmenu-item.submenu > a': {
        paddingRight: toRem(27),
      },
      '& .up-contextmenu-item.submenu > a:after': {
        content: '▶',
        display: 'inline-block',
        position: 'absolute',
        right: toRem(7),
      },
    },
  } as NestedCSSProperties);

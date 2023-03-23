import { DeviceLRTablets, DeviceSmartphones } from '../../../Common/utils/device';
import { media, style } from 'typestyle';
import { UpMenuProps, UpMenuState } from './UpMenu';
import { WithThemeProps } from '../../../Common/theming';
import { CustomStyles, getCustomStyles } from '../../../Common/theming/types';
import { NestedCSSProperties } from 'typestyle/lib/types';
import { toRem } from '../../../Common/theming/utils';
export type UpMenuCustomStylesKeys = 'menu' | 'nav' | 'content' | 'header' | 'footer';

export type UpMenuCustomStyles = CustomStyles<UpMenuCustomStylesKeys, Partial<UpMenuProps>, UpMenuState>;

export const getMenuCustomStyle = (
  key: UpMenuCustomStylesKeys,
  customStyles: UpMenuCustomStyles,
  props: Partial<UpMenuProps>,
  state?: UpMenuState
) => {
  return getCustomStyles<UpMenuCustomStylesKeys, Partial<UpMenuProps>, UpMenuState>(key, customStyles, props, state);
};

export const MenuStyles = (props: UpMenuProps & WithThemeProps & UpMenuState): string => {
  let defaultMenuStyles: NestedCSSProperties = {
    width: props.minified ? toRem(76) : toRem(props.width),
    minWidth: toRem(76),
    zIndex: 1000,
    position: 'relative',
    height: '100vh',
    backgroundColor: '#4E5B59',
    transition: 'width 0.5s',
    padding: toRem(14),
    paddingRight: 0,
  };

  let defaultFooterStyles: NestedCSSProperties = {
    position: 'absolute',
    bottom: toRem(8),
    width: 'calc(100% - 28px)',
  };

  let defaultHeaderStyles: NestedCSSProperties = {
    display: 'flex',
    flexDirection: props.minified ? 'column' : 'row',
    alignItems: props.minified ? 'flex-start' : 'center',
    paddingRight: toRem(14),
  };

  let defaultNavStyles: NestedCSSProperties = {
    overflowY: 'auto',
    height: props.minified ? '79vh' : '84vh',
  };

  let defaultContentStyles: NestedCSSProperties = {};

  if (props.customStyles) {
    defaultMenuStyles = {
      ...defaultMenuStyles,
      ...getMenuCustomStyle('menu', props.customStyles, props),
    };
    defaultHeaderStyles = {
      ...defaultHeaderStyles,
      ...getMenuCustomStyle('header', props.customStyles, props),
    };
    defaultFooterStyles = {
      ...defaultFooterStyles,
      ...getMenuCustomStyle('footer', props.customStyles, props),
    };
    defaultNavStyles = {
      ...defaultNavStyles,
      ...getMenuCustomStyle('nav', props.customStyles, props),
    };
    defaultContentStyles = {
      ...defaultContentStyles,
      ...getMenuCustomStyle('content', props.customStyles, props),
    };
  }

  return style(
    {
      $nest: {
        '&.up-menu': defaultMenuStyles,
        '&.up-menu .up-menu-cotent': defaultContentStyles,
        '&.up-menu .up-menu-nav': defaultNavStyles,
        '&.up-menu .up-menu-header': defaultHeaderStyles,
        '&.up-menu .up-menu-footer': defaultFooterStyles,
        '&.up-menu li a': {
          color: '#ffffff',
          textDecoration: 'none',
        },
        '&.up-menu ul, &.up-menu ul li': {
          margin: 0,
          padding: 0,
          listStyle: 'none',
        },
        '&.up-menu nav > ul li.separator': {
          margin: `${toRem(27)} 0 !important`,
          padding: 0,
          width: 'auto',
          lineHeight: '3px',
        },
        '&.up-menu ul li .up-icon-wrapper.colored svg, .up-menu ul li .up-icon-wrapper.colored svg path, .up-menu ul li .up-icon-wrapper.colored svg polygon, .up-menu ul li .up-icon-wrapper.colored svg polyline':
          {
            fill: props.theme.colorMap.white,
            cursor: 'pointer',
          },
        '&.up-menu ul li.active .up-icon-wrapper.colored:first-of-type svg, .up-menu ul li.active .up-icon-wrapper.colored:first-of-type svg path, .up-menu ul li.active .up-icon-wrapper.colored:first-of-type svg polygon, .up-menu ul li.active .up-icon-wrapper.colored:first-of-type svg polyline':
          {
            fill: props.theme.colorMap.white,
          },
        '&.up-menu ul li .up-icon-wrapper.colored.chevron': {
          '-webkit-transition-property': 'transform',
          '-webkit-transition-duration': '.3s',
          transitionProperty: 'transform',
          transitionDuration: '.3s',
          display: props.minified ? 'none' : 'initial',
        },
        '&.up-menu ul li:hover > a > .up-icon-wrapper.chevron': {
          transform: 'rotate(90deg)',
        },
        '&.up-menu ul li.active > a > .up-icon-wrapper.chevron': {
          transform: 'rotate(90deg)',
        },
        '&.up-menu ul li:hover .up-icon-wrapper.colored:first-of-type svg, .up-menu ul li:hover .up-icon-wrapper.colored:first-of-type svg path, .up-menu ul li:hover .up-icon-wrapper.colored:first-of-type svg polygon, .up-menu ul li:hover .up-icon-wrapper.colored:first-of-type svg polyline':
          {
            fill: props.theme.colorMap.white,
          },
        '&.up-menu nav > ul > li .up-menu-item-title': {
          display: props.minified ? 'none' : 'inherit',
          fontSize: toRem(14),
          fontWeight: 500,
          textAlign: 'left',
          marginLeft: toRem(14),
        },
        '&.up-menu ul li.active > a > .up-menu-item-title': {
          color: props.theme.colorMap.primary,
        },
        '&.up-menu ul li.active > a > .up-icon-wrapper.colored *': {
          color: `${props.theme.colorMap.primary} !important`,
          fill: `${props.theme.colorMap.primary} !important`,
        },
        '&.up-menu ul li ul li > a > .up-menu-item-title': {
          color: props.theme.colorMap.white,
        },
        '&.up-menu ul li ul li:hover > a > .up-menu-item-title': {
          color: props.theme.colorMap.primary,
        },
        '&.up-menu nav > ul > li': {
          position: 'relative',
          overflow: 'hidden',
        },
        '&.up-menu nav > ul > li:hover': {
          overflow: 'visible',
        },
        '&.up-menu nav > ul > li:hover > a': {
          backgroundColor: '#424C4A',
          borderTopLeftRadius: toRem(24),
          borderBottomLeftRadius: toRem(24),
        },
        '&.up-menu nav .up-sub-menu li.hasChildren > a > .up-icon-wrapper': {
          marginRight: toRem(14),
        },
        '&.up-menu nav > ul > li a': {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: toRem(12),
        },
        '&.up-menu nav > ul > li > ul > li a': {
          padding: 0,
          paddingLeft: `${toRem(50)} !important`,
        },
        '&.up-menu nav > ul > li > ul > li > ul > li a': {
          padding: 0,
          paddingLeft: `${toRem(70)} !important`,
        },
        '&.up-menu nav ul > li.active:not(.hasChildren) a': {
          backgroundColor: 'white',
          borderTopLeftRadius: toRem(24),
          borderBottomLeftRadius: toRem(24),
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: toRem(12),
        },
        '&.up-menu  nav > ul > li.active.hasChildren > a': {
          backgroundColor: props.minified ? 'white' : 'transparent',
          borderTopLeftRadius: toRem(24),
          borderBottomLeftRadius: toRem(24),
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          padding: toRem(12),
        },
        '&.up-menu nav > ul > li > a': {
          width: '100%',
        },
        '&.up-menu nav > ul > li .up-sub-menu-title': {
          display: 'none',
          color: props.theme.colorMap.white,
          fontSize: toRem(14),
          fontWeight: 500,
        },
        '&.up-menu nav > ul > li:not(:last-child)': {
          marginBottom: toRem(6),
        },
        '&.up-menu nav  ul li > ul': {
          display: 'none',
          transform: 'scaleY(0)',
          minWidth: toRem(180),
        },
        '&.up-menu nav > ul li.active > ul': {
          display: props.minified ? 'none' : 'inherit',
        },
        '&.up-menu nav > ul > li:hover ul': {
          backgroundColor: '#4E5B59',
          top: props.minified ? 0 : 'inherit',
          left: props.minified ? toRem(48) : 'inherit',
          position: props.minified ? 'absolute' : 'inherit',
          padding: `${toRem(16)} 0 ${toRem(30)} 0`,
          width: 'auto',
          opacity: 1,
          transform: 'scaleY(1)',
          transformOrigin: '50% 0',
          transition: 'transform 0.5s ease',
          zIndex: 1000,
          borderBottomRightRadius: props.theme.borderRadius,
          borderTopRightRadius: props.theme.borderRadius,
        },
        '&.up-menu nav > ul > li.active:not(:hover) ul': {
          padding: `${toRem(16)} 0 ${toRem(30)} 0`,
          width: 'auto',
          opacity: 1,
          transform: 'scaleY(1)',
          transformOrigin: '50% 0',
          transition: 'transform 0.5s ease',
        },
        '&.up-menu nav > ul ul ul:last-child': {
          paddingBottom: '0 !important',
        },
        '&.up-menu nav > ul > li ul li:not(:last-child)': {
          marginBottom: toRem(25),
        },
        '&.up-menu .up-menu-actions': {
          marginTop: toRem(28),
          marginBottom: toRem(28),
          paddingLeft: toRem(12),
          paddingRight: toRem(12),
        },
        '&.up-menu .up-menu-toggle': {
          cursor: 'pointer',
        },
        '&.up-menu .up-menu-toggle.colored svg, .up-menu .up-menu-toggle.colored svg path, .up-menu .up-menu-toggle.colored svg polygon, .up-menu .up-menu-toggle.colored svg polyline':
          {
            fill: '#ffffff',
            cursor: 'pointer',
          },
        '&.up-menu .up-menu-toggle.colored:hover svg, .up-menu .up-menu-toggle.colored:hover svg path, .up-menu .up-menu-toggle.colored:hover svg polygon, .up-menu .up-menu-toggle.colored:hover svg polyline':
          {
            fill: props.theme.colorMap.primary,
          },
        '&.up-menu nav ul.up-sub-menu': {
          paddingRight: '0 !important',
        },
        '&.up-menu nav ul.up-sub-menu > li > a.active': {
          paddingRight: '0 !important',
          paddingTop: `${toRem(16)} !important`,
          paddingBottom: `${toRem(16)} !important`,
        },
      },
    },
    media(DeviceLRTablets, {
      $nest: {
        '.skin-up.main-header.navbar.dropdown-menu li.divider': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },
        '.skin-up.main-header.navbar.dropdown-menu li a': {
          color: props.theme.colorMap.white,
        },
        '.skin-up.main-header.navbar.dropdown-menu li a: hover': {
          background: 'rgb(0, 170, 212)',
        },
      },
    }),
    media(DeviceSmartphones, {
      $nest: {
        '&.up-menu': {
          padding: 0,
          width: '100%',
          height: 60,
          position: 'relative',
        },
        '&.up-menu .up-menu-header': {
          flexDirection: 'row',
          height: '100%',
          padding: 5,
          alignItems: 'center',
        },
        '&.up-menu .up-menu-actions': {
          margin: '13px 5px',
        },
        '&.up-menu .up-menu-nav': {
          backgroundColor: '#4E5B59',
          width: '100%',
          height: props.minified ? 0 : 'auto',
        },
        '&.up-menu nav > ul > li': {
          maxWidth: '100%',
          margin: 0,
          marginTop: '10px !important',
        },
        '&.up-menu nav > ul > li.separator': {
          margin: '10px 0 !important',
        },
        '&.up-menu nav > ul > li > a': {
          width: '100%',
        },
        '&.up-menu nav > ul > li > ul': {
          padding: '10px !important',
        },
        '&.up-menu nav > ul > li ul li:not(:last-child)': {
          marginBottom: 10,
        },
        '&.up-menu .up-menu-footer': {
          position: 'relative',
          backgroundColor: '#4E5B59',
          width: '100%',
          bottom: 0,
          display: props.minified ? 'none' : 'block',
          padding: 6,
          overflow: 'hidden',
        },
      },
    })
  );
};

// Styles UpMenuOH
export const heightTopBar = 60;
export const widthLeftMenuStandard = 300;
export const widthLeftMenuCollapse = 64;

export const styleMenuOh = style({
  backgroundColor: '#f5f5f5',
  overflow: 'hidden',
  height: '100%', // window.innerHeight,
  width: '100%', // window.innerWidth,
});

export const styleLeftMenu = style({
  zIndex: 1,
  position: 'absolute',
  left: 0,
  top: 0,
  height: '100%',
  width: widthLeftMenuStandard,
  backgroundColor: '#4e5b59',
  alignItems: 'center',
  transition: 'width 0.5s',
  overflow: 'hidden',
  $nest: {
    '& i': {
      cursor: 'pointer',
    },
    '& a': {
      textDecoration: 'none',
    },
  },
});

export const imgHomelink = style({ display: 'inline' });

export const styleLeftMenuCollapse = style({
  width: widthLeftMenuCollapse,
  $nest: {
    '& a': {
      display: 'none',
    },
    ['& .' + imgHomelink]: {
      display: 'inline',
    },
  },
});

export const rightSpace = style({
  position: 'absolute',
  top: 0,
  right: 0,
  left: widthLeftMenuStandard,
  height: '100%',
  transition: 'left 0.5s',
  overflow: 'hidden',
});

export const rightSpaceCollapse = style({
  left: widthLeftMenuCollapse,
});

export const styleTopbar = style({
  width: '100%',
  left: 0,
  top: 0,
  position: 'absolute',
  height: heightTopBar,
  backgroundColor: '#ffffff',
  textAlign: 'right',
});

export const styleContenu = style({
  position: 'absolute',
  left: 0,
  top: heightTopBar,
  bottom: 0,
  right: 0,
  overflow: 'hidden',
});

export const styleUserExpand = style({
  position: 'absolute',
  top: heightTopBar,
  right: toRem(128),
  overflow: 'visible',
});

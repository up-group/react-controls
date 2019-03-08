import colorMap from './colorMap';
import iconMap from './iconMap';
import typography from './typography';

import { ThemeInterface, WithThemeProps } from './types';

import { ThemeProvider as UpThemeProvider } from './ThemeProvider'
import { Dictionary } from '../utils/types';
import { NestedCSSProperties } from 'typestyle/lib/types';
import withTheme from './withTheme';

const defaultColor = '#979797'

const defaultStyles = new Dictionary<string, NestedCSSProperties>([
  {
    key: "input",
    value: {
      $nest: {
        "& .up-input" :
        { color: "#000",
          borderColor: defaultColor,
        },
        "& .up-icon-wrapper.colored svg, & .up-icon-wrapper.colored svg path,& .up-icon-wrapper.colored svg polygon, & .up-icon-wrapper.colored svg polyline": {
          fill: defaultColor
        }
      }
    }
  }
]);

const defaultTheme: ThemeInterface = {
  colorMap: colorMap,
  inputBorderLess: true,
  gridGutter: 30,
  intentTypeIcons : iconMap,
  typography : typography,
  styles : defaultStyles,
  borderRadius: '4px',
  notificationIconSize: '64px',
  minButtonSize: 44,
}

export { UpThemeProvider, ThemeInterface as UpThemeInterface, colorMap as UpThemeColorMap, WithThemeProps, withTheme } 

export default defaultTheme ;

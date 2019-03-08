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
      color: defaultColor,
      borderColor: defaultColor,
      $nest: {
        "& .up-input-group .colored svg, & .up-input-group .colored svg path,& .up-input-group .colored svg polygon, & .up-input-group .colored svg polyline": {
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

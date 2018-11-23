import colorMap from './colorMap';
import iconMap from './iconMap';
import typography from './typography';

import { ThemeInterface, WithThemeProps } from './types';

import { ThemeProvider as UpThemeProvider } from './ThemeProvider'
import { Dictionary } from '../utils/types';
import { NestedCSSProperties } from 'typestyle/lib/types';
import withTheme from './withTheme';

const defaultStyles = new Dictionary<string, NestedCSSProperties>([{
  key : 'input', value : {
    color: '#354052',
    borderColor: '#979797',
    $nest : {
      '& .up-input-group svg,& .up-input-group svg path,& .up-input-group svg polygon' : {
        fill : '#979797'
      }
    }
  }}]) ;

const defaultTheme: ThemeInterface = {
  colorMap: colorMap,
  inputBorderLess: true,
  gridGutter: 30,
  intentTypeIcons : iconMap,
  typography : typography,
  styles : defaultStyles,
  borderRadius: '6px',
}

export { UpThemeProvider, ThemeInterface as UpThemeInterface, colorMap as UpThemeColorMap, WithThemeProps, withTheme } 

export default defaultTheme ;

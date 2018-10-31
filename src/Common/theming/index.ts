import colorMap from './colorMap';
import iconMap from './iconMap';
import { ThemeInterface } from './types';

import { ThemeProvider as UpThemeProvider } from './ThemeProvider'

const defaultTheme: ThemeInterface = {
  colorMap: colorMap,
  gridGutter: 30,
  intentTypeIcons : iconMap
}

export { UpThemeProvider, ThemeInterface as UpThemeInterface, colorMap as UpThemeColorMap  } 

export default defaultTheme ;

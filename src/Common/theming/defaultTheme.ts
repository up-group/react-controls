import colorMap from './colorMap';
import iconMap from './iconMap';
import typography from './typography';
import { Dictionary } from '../utils/types';
import { NestedCSSProperties } from 'typestyle/lib/types';
import { ThemeInterface, WithThemeProps } from './types';

const defaultColor = '#979797';

const defaultStyles = new Dictionary<string, NestedCSSProperties>([
  {
    key: 'input',
    value: {
      $nest: {
        '& .up-input': {
          color: '#000',
          borderColor: defaultColor,
        },
        '& .up-icon-wrapper.colored svg, & .up-icon-wrapper.colored svg path,& .up-icon-wrapper.colored svg polygon, & .up-icon-wrapper.colored svg polyline':
          {
            fill: defaultColor,
          },
      },
    },
  },
]);

const defaultTheme: ThemeInterface = {
  colorMap: colorMap,
  inputBorderLess: true,
  gridGutter: 30,
  intentTypeIcons: iconMap,
  typography: typography,
  styles: defaultStyles,
  borderRadius: '4px',
  notificationIconSize: '64px',
  minButtonSize: 44,
};

export default defaultTheme;

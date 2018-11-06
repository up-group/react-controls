import { keyframes } from 'typestyle';
import { NestedCSSProperties } from 'typestyle/lib/types';
import { LoadingIndicatorProps } from './UpLoadingIndicator';
import { WithThemeProps } from '../../../Common/theming/withTheme';

const draw = keyframes({
  from : {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(360deg)',
  },
});

const color = (props : WithThemeProps) => keyframes({
  from : {
    stroke: props.theme.colorMap.primary,
  },
  to : {
    stroke: props.theme.colorMap.primaryDark,
  }
});

export const circleStyle = (props : WithThemeProps) : NestedCSSProperties => ({
  strokeDasharray: [89,200],
  strokeDashoffset: '-10',
  strokeLinecap: 'round',
  animation: `${color(props)} 2s ease-in-out infinite`
})

export const svgStyle: NestedCSSProperties = {
  width: '48px',
  height: '48px',
  strokeDasharray: [151, 151],
  strokeDashoffset: 0,
  animation: `${draw} 2s infinite ease-in-out`,
}

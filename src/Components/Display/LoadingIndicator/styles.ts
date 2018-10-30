import { keyframes } from 'typestyle';
import { NestedCSSProperties } from 'typestyle/lib/types';

const draw = keyframes({
  from : {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(360deg)',
  },
});

const color = keyframes({
  from : {
    stroke: '#007acc',
  },
  to : {
    stroke: '#293953',
  }
});

export const circleStyle : NestedCSSProperties = {
  strokeDasharray: [89,200],
  strokeDashoffset: '-10',
  strokeLinecap: 'round',
  animation: `${color} 2s ease-in-out infinite`
}

export const svgStyle: NestedCSSProperties = {
  width: '48px',
  height: '48px',
  strokeDasharray: [151, 151],
  strokeDashoffset: 0,
  animation: `${draw} 2s infinite ease-in-out`,
}

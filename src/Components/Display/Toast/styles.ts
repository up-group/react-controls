import colorMap from '../../../Common/theming/colorMap';
import { NestedCSSProperties } from 'typestyle/lib/types';
import { keyframes, style } from 'typestyle';
import { Status, UpToastStyledProps } from './UpToast';

const backgroundColor = (status: Status) : NestedCSSProperties => (
  {
    backgroundColor: colorMap[status] || colorMap.offwhite,
    color: colorMap[`{status}_fg`] || colorMap.black1,
  }
)

const unmount = keyframes({
  from : {
    transform: 'translateX(0%)',
    opacity: 1,
  },
  to : {
    transform: 'translateX(50%)', 
    opacity: 0,
  }
});

const mount = keyframes({
  from : {
    transform: 'translateX(50%)',
    opacity: 0,
  },
  to : {
    transform: 'translateX(0%)',
    opacity: 1,
  }
})

export const buttonStyle : NestedCSSProperties = {
  backgroundColor: 'transparent',
  border: '0px',
  color: '#333',
  cursor: 'pointer',
  fontSize: '2rem',
};

export const getStyle = (props: UpToastStyledProps) : string => (
  style({
    position: 'fixed',
    backgroundColor: '#333', /* Black background color */
    color: '#fff', /* White text color */
    fontSize: '1.3rem',
    top: '30px', /* 30px from the top */
    right:'30px',
    zIndex: 100,
    display: 'flex',
    '-webkit-box-shadow': '10px 10px 5px 0px #656565',
    boxShadow: '10px 10px 5px 0px #656565',
    filter:'progid:DXImageTransform.Microsoft.Shadow(color=#656565, Direction=134, Strength=5)',
    '-webkit-border-radius': '4px',
    borderRadius: '4px',
    textAlign: 'center', /* Centered text */ 
    padding: '10px', /* Padding */
    minWidth: '250px', /* Set a default minimum width */
    flexDirection: 'row',
    ...backgroundColor(props.status),
    animation: `${props.isUnmounting ? unmount : mount} 1.5s`
  })
) ;

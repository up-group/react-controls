import * as React from 'react';
import { SvgProps } from './types';
import styled from '../../../Common/theming/themedComponents';

import Icons from './icons';

const SvgIconWrapper = styled.div`
    float: left;
    display: inline;
    width: ${ props => props.width}px ;
    height:${ props => props.height}px ;
    margin: 4px;
    svg {
      fill:${ props => props.color} ;
    }
`
export type Props = SvgProps & React.HTMLProps<typeof SvgIcon>;
export default function SvgIcon({
  children,
  viewBox,
  iconName,
  color,
  ...others,
}: Props): JSX.Element {

  const height = others.height || 24 ;
  const width = others.height || 24 ;
   
  if(iconName) {
    return (
      <SvgIconWrapper color={color} height={height} width={width}
        //{...others}
        dangerouslySetInnerHTML={{__html: Icons[iconName]}}
      ></SvgIconWrapper>
    );
  } else {
    const defaultViewBox = `0 0 ${width} ${height}` ;
    const viewBoxProps = viewBox || defaultViewBox;

    return (
      <svg
        //{...others}
        fill={color}
        viewBox={viewBoxProps}>
        {children}
      </svg>);
  }
}

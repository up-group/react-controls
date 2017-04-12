import * as React from 'react';
import { SvgProps } from './types';
import styled from '../theming/themedComponents';

import Icons from './_getIcons';

const SvgIconWrapper = styled.div`
    float: left;
    display: inline;
    width: ${ props => props.width}px ;
    height:${ props => props.height}px ;
    margin: 4px;
`

export type Props = SvgProps & React.HTMLProps<typeof SvgIcon>;
export default function SvgIcon({
  children,
  viewBox,
  iconName,
  ...rest,
}: Props): JSX.Element {

  const height = rest.height || 24 ;
  const width = rest.height || 24 ;
   
  if(iconName) {
    return (
      <SvgIconWrapper height={height} width={width}
        //{...rest}
        dangerouslySetInnerHTML={{__html: Icons[iconName]}}
      ></SvgIconWrapper>
    );
  } else {
    const defaultViewBox = `0 0 ${width} ${height}` ;
    const viewBoxProps = viewBox || defaultViewBox;

    return (
      <svg
        //{...rest}
        viewBox={viewBoxProps}>
        {children}
      </svg>);
  }
}

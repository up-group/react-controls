import * as React from 'react';
import { SvgProps } from './types';

import Icons from './_getIcons';

export type Props = SvgProps & React.HTMLProps<typeof SvgIcon>;
export default function SvgIcon({
  children,
  viewBox,
  iconName,
  ...rest,
}: Props): JSX.Element {
  const viewBoxProps = viewBox || '0 0 24 24';
  if(iconName) {
    return (
      <svg
        //{...rest}
        dangerouslySetInnerHTML={{__html: Icons[iconName]}}
        viewBox={viewBoxProps}
      ></svg>
    );
  } else {
    return (
      <svg
        //{...rest}
        viewBox={viewBoxProps}>
        {children}
      </svg>);
  }
}

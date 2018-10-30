import * as React from 'react';
import { style } from 'typestyle';
import { NestedCSSProperties } from 'typestyle/lib/types';
import Icons, { IconName } from '../../../Common/theming/icons';
import * as classnames from 'classnames' ;

export interface SvgProps extends React.SVGProps<{}> {
    iconName?: IconName;
    dataFor?:string; // For tooltip management
}

export interface SvgIconWrapperProps {
  className:string;
  color:string;
  height:any;
  width:any;
  dangerouslySetInnerHTML:any;
  dataFor?:string;
  children?: Array<React.ReactNode>;
}

const getStyles = (props : SvgIconWrapperProps) : NestedCSSProperties => ({
    display: 'inline-block',
    width:  `${props.width}px`,
    height: `${props.height}px`,
    margin: '1px',
    $nest : {
        svg : {
            fill: props.color,
        }
    }
} as NestedCSSProperties);

const SvgIconWrapper : React.StatelessComponent<SvgIconWrapperProps> = (props : SvgIconWrapperProps) => {
    const {children, ...othersProps} = props ;
    return <div {...othersProps} className={classnames('up-icon-wrapper', style(getStyles(props)))}>
        {children}
    </div>
}

export type UpSvgIconProps = SvgProps & React.HTMLProps<SVGSVGElement>;

const UpSvgIcon : React.StatelessComponent<UpSvgIconProps> = ({
  children,
  viewBox,
  iconName,
  className,
  color,
  dataFor,
  ...others
}: UpSvgIconProps) => {

  const height = others.height || 20 ;
  const width = others.height || 20 ;
   
  if(iconName) {
    const SvgIconElement = () => <SvgIconWrapper className={className} color={color} height={height} width={width}
      //{...others}
      dangerouslySetInnerHTML={{__html: Icons[iconName]}}
    ></SvgIconWrapper> ;

    if(dataFor != null) {
      return (
        <div style={{display:"inline-block"}} data-for={dataFor} data-tip={"tooltip"}>
          <SvgIconElement />
        </div>
        );
    } else {
      return (
          <SvgIconElement />
      );
    }
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

export default UpSvgIcon

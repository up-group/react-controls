import * as React from 'react';
import { style, media } from 'typestyle';
import { NestedCSSProperties } from 'typestyle/lib/types';
import Icons, { IconName } from '../../../Common/theming/icons';
import * as classnames from 'classnames' ;
import { DeviceSmartphones, DeviceLaptops } from '../../../Common/utils/device';
import { isString } from '../../../Common/utils';

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

const getStyles = (props : SvgIconWrapperProps) : string => style({
    display: 'inline-block',
    width:  `${props.width}`,
    height: `${props.height}`,
    margin: '1px',
    $nest : {
        '& svg, & svg path, & svg polygon' : {
            fill: props.color,
        }
    }
});

const SvgIconWrapper : React.StatelessComponent<SvgIconWrapperProps> = (props : SvgIconWrapperProps) => {
    const {children, className, height, width, ...othersProps} = props ;
    return <div {...othersProps} className={classnames('up-icon-wrapper', className, getStyles(props))}>
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
  width,
  height,
  ...others
}: UpSvgIconProps) => {

  const finalHeight = height && !isString(height) ? `${height}px` : height || '20px' ;
  const finalWidth = width && !isString(width) ? `${width}px` : width || '20px' ;
   
  if(iconName) {
    const SvgIconElement = () => <SvgIconWrapper className={className} color={color} height={finalHeight} width={finalWidth}
      {...others}
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
        {...others}
        fill={color}
        viewBox={viewBoxProps}>
        {children}
      </svg>);
  }
}

export default UpSvgIcon

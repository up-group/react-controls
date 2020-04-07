import * as React from 'react';
import { style, cssRaw } from 'typestyle';
import Icons, { IconName } from '../../../Common/theming/icons';
import Mentors, { MentorName } from "../../../Common/theming/mentors";
import Illustrations, { IllustrationName } from "../../../Common/theming/illustrations";
import * as classnames from 'classnames' ;
import { isString } from '../../../Common/utils';
import { NestedCSSProperties } from 'typestyle/lib/types';
import { WithThemeProps } from 'theming';

export interface SvgProps extends React.SVGProps<{}> {
  iconName?: IconName | MentorName | IllustrationName;
  iconHtml?: string;
  dataFor?: string; // For tooltip management
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

const getIconData = (iconName: string): string => {
  if(Icons[iconName] !== undefined) {
    return Icons[iconName];
  } 
  if (Illustrations[iconName] !== undefined) {
    return Illustrations[iconName];
  }
  if (Mentors[iconName] !== undefined) {
    return Mentors[iconName];
  }
  return null;
}

const isColorMustNotBeOverrided = (iconName: string): boolean =>
  Illustrations[iconName] !== undefined || Mentors[iconName] !== undefined;

const getStyles = (props : SvgIconWrapperProps) : string => {
    const styles : NestedCSSProperties = {
      display: 'inline-block',
      width:  `${props.width}`,
      height: `${props.height}`,
      margin: '1px',
    }
    if(props.color) {
      styles["$nest"] = {
        "&.colored svg :not(.uncolored), &.colored svg path :not(.uncolored), &.colored svg polygon :not(.uncolored), &.colored svg polyline :not(.uncolored)": {
          fill: props.color
        }
      };
    }
    return style(styles);
  };

const SvgIconWrapper : React.StatelessComponent<SvgIconWrapperProps> = (props : SvgIconWrapperProps) => {
    const {children, className, height, width, color, ...othersProps} = props ;
    return <div {...othersProps} className={classnames('up-icon-wrapper', className, getStyles(props))}>
        {children}
    </div>
}

export type UpSvgIconProps = SvgProps & React.HTMLProps<SVGSVGElement>;

const UpSvgIcon : React.StatelessComponent<UpSvgIconProps & WithThemeProps> = ({
  children,
  viewBox,
  iconName,
  iconHtml,
  className,
  color,
  dataFor,
  width,
  height,
  theme,
  ...others
}) => {

  const finalHeight = height && !isString(height) ? `${height}px` : height || '20px' ;
  const finalWidth = width && !isString(width) ? `${width}px` : width || '20px' ;
   
  const iconData = iconName ? getIconData(iconName) : iconHtml ? iconHtml : null ;
  let mentorOrIllustrationStyles = null ;
  if (iconName && !isColorMustNotBeOverrided(iconName)) {
    mentorOrIllustrationStyles = 'colored' ;
  }
  if(iconData) {
    const SvgIconElement = () => <SvgIconWrapper className={classnames(className, mentorOrIllustrationStyles)} color={color} height={finalHeight} width={finalWidth}
      {...others}
      dangerouslySetInnerHTML={{__html: iconData}}
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

export const UpSvgIconSparkles : React.StatelessComponent<UpSvgIconProps> = (props: UpSvgIconProps) => {
  return(
    <div style={{ ...props.style,position:"relative"}}>
      <UpSvgIcon width={Number(props.width)+12} height={props.height} iconName={"sparkles"} style={{position:"absolute",top:-Number(props.height)/3,left:-Number(props.width)/5}}></UpSvgIcon>
      <UpSvgIcon {...props} style={{}}></UpSvgIcon>
    </div>
  )
}

export default UpSvgIcon

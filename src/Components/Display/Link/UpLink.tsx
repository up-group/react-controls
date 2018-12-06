// Imports
import * as React from 'react';
import { getStyles } from './styles';
import UpDefaultTheme, { WithThemeProps, withTheme } from '../../../Common/theming';

const MethodTypePush = 'push';

// Exports
export type Method = 'push' | 'replace';
export interface UpLinkProps extends React.Props<UpLink> {
  path?: string;
  plain?: boolean;
  href?: string;
  label?: string;
  color?: string;
  method?: Method;
  dataFor?: string; // tooltip 
  onClick:(e:React.MouseEvent<HTMLAnchorElement>)=>void;
}

export class UpLink extends React.Component<UpLinkProps & WithThemeProps> {
  public static defaultProps: UpLinkProps & WithThemeProps = {
    method: MethodTypePush,
    onClick:(e:React.MouseEvent<HTMLAnchorElement>)=>{},
    theme: UpDefaultTheme,
  };

  public constructor(props:UpLinkProps) {
    super(props) ;
  }

  private handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    this.props.onClick(e) ;
  }

  public render() {
    const {
      label,
      children,
      color,
      dataFor,
      href,
    } = this.props;
    
    var tooltipProps = {} ;
    if (dataFor) {
        tooltipProps = {
            "data-tip": "tooltip",
            "data-for": dataFor
        }
    }

    return (
      <a
        className={getStyles(this.props)}
        href={href}
        color={color}
        {...tooltipProps}
        onClick={this.handleClick}>
        {label || children}
      </a>
    );
  }
}

export default withTheme<UpLinkProps>(UpLink);
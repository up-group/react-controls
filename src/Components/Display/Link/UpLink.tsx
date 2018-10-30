// Imports
import * as React from 'react';
import { getStyles } from './styles';

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
  onClick:(e:React.MouseEvent<HTMLAnchorElement>)=>void;
}

export class UpLink extends React.Component<UpLinkProps> {
  public static defaultProps: UpLinkProps = {
    method: MethodTypePush,
    onClick:(e:React.MouseEvent<HTMLAnchorElement>)=>{}
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
      href,
    } = this.props;

    return (
      <a
        className={getStyles(this.props)}
        href={href}
        color={color}
        onClick={this.handleClick}>
        {label || children}
      </a>
    );
  }
}

export default UpLink;
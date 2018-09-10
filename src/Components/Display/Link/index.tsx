// Imports
import * as React from 'react';
//import LinkStyled from './styles';

const MethodTypePush = 'push';

// Exports
export type Method = 'push' | 'replace';
export interface LinkProps extends React.Props<Link> {
  path?: string;
  plain?: boolean;
  href?: string;
  label?: string;
  color?: string;
  method?: Method;
  onClick:(e:React.MouseEvent<HTMLAnchorElement>)=>void;
}

export class Link extends React.Component<LinkProps, undefined> {
  public static defaultProps: LinkProps = {
    method: MethodTypePush,
    onClick:(e:React.MouseEvent<HTMLAnchorElement>)=>{}
  };

  public constructor(props:LinkProps) {
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
      plain,
    } = this.props;

    return (
      <a
        //plain={plain}
        href={href}
        color={color}
        onClick={this.handleClick}>
        {label || children}
      </a>
    );
  }
}

export default Link;

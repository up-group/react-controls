import * as React from 'react';
import AnchorStyled from './styles';

const MethodTypePush = 'push';

type Method = 'push' | 'replace';
export interface Props extends React.Props<Anchor> {
  path?: string;
  plain?: boolean;
  href?: string;
  label?: string;
  color?: string;
  method?: Method;
  onClick?:(e:React.MouseEvent<HTMLAnchorElement>)=>void;
}

class Anchor extends React.Component<Props, undefined> {
  public static defaultProps: Props = {
    method: MethodTypePush,
  };

  public constructor(props:Props) {
    super(props) ;
    this.handleClick = this.handleClick.bind(this) ;
  }

  private handleClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
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
      <AnchorStyled
        plain={plain}
        href={href}
        color={color}
        onClick={this.handleClick}>
        {label || children}
      </AnchorStyled>
    );
  }
}

export default Anchor;

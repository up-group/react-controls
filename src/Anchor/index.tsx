import * as React from 'react';
import Component from './styles';

const MethodTypePush = 'push';

type Method = 'push' | 'replace';
export interface Props extends React.Props<Anchor> {
  path?: string;
  plain?: boolean;
  href?: string;
  label?: string;
  color?: string;
  method?: Method;
}

class Anchor extends React.Component<Props, undefined> {
  public static defaultProps: Props = {
    method: MethodTypePush,
  };

  private handleClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    const {path} = this.props;
    if (path) {
      e.preventDefault();
    }
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
      <Component
        plain={plain}
        href={href}
        color={color}
        onClick={this.handleClick}
      >
        {label || children}
      </Component>
    );
  }
}

export default Anchor;

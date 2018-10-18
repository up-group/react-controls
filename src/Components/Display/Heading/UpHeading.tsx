// Imports
import * as React from 'react';
import { H1, H2, H3, H4, H5 } from './styles';
import { UpHeadingProps } from './'

export default class UpHeading extends React.Component<UpHeadingProps> {
  public static defaultProps: UpHeadingProps = {
    color: '#007acc',
    textAlign: 'center',
    tag: 'h1',
    truncate: false,
    upcase: false,
    margin: 'medium',
  };
  public render() {
    const { children, tag, ...others } = this.props;
    switch (tag) {
    case 'h2':
      return (
      <H2 tag={tag} {...others}>
        {children}
      </H2>
      );
    case 'h3':
      return (
      <H3 tag={tag} {...others}>
        {children}
      </H3>
      );
    case 'h4':
      return (
      <H4 tag={tag} {...others}>
        {children}
      </H4>
      );
    case 'h5':
      return (
      <H5 tag={tag} {...others}>
        {children}
      </H5>
      );
    default:
      return (
        <H1 tag={tag} {...others}>
          {children}
        </H1>
      );
    }
  }
}

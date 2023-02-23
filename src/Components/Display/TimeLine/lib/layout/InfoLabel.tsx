import * as React from 'react';

export default class InfoLabel extends React.Component<any, any> {
  static defaultProps = {
    label: '',
  };

  render() {
    return <div className="rct-infolabel">{this.props.label}</div>;
  }
}

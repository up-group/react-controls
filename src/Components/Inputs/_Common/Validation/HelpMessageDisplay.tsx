import React from 'react';
import { style } from 'typestyle';
import defaultTheme, { WithThemeProps } from '../../../../Common/theming';

export interface HelpMessageDisplayProps {
  helpMessageText: string;
}

const HelpMessageDisplayStyle = props =>
  style({
    position: 'relative',
    cursor: 'help',
    height: '100%',
    $nest: {
      '& .up-wrapper-help-message-inline': {
        display: 'inline-block',
        color: props.theme.colorMap.default,
        fontSize: '8pt',
      },
    },
  });

export default class HelpMessageDisplay extends React.Component<HelpMessageDisplayProps & WithThemeProps> {
  static defaultProps = {
    theme: defaultTheme,
  };

  constructor(p, c) {
    super(p, c);
  }

  render() {
    return (
      <div className={HelpMessageDisplayStyle(this.props)}>
        {this.props.children}
        <div className={'up-wrapper-help-message-inline'}>{this.props.helpMessageText}</div>
      </div>
    );
  }
}

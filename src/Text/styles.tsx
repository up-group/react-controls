import * as React from 'react'
import styled, {css} from 'styled-components'
import { UpTextProps } from './types'

const BaseDateComponent: React.StatelessComponent<UpTextProps> = (props) => {
    const {className} = props;

    return <textarea
        type="text"
        className={className}
        onChange={this.onChange} ></textarea>;
}

const base = props => css`
`;

const error = props => css`
  border : 1px solid red;
`;

export const BaseTextStyle = styled<UpTextProps>(BaseDateComponent) `
${(props: UpTextProps) => base(props) }
${(props: UpTextProps) => props.hasError? error(props):css``}
`;

class TextStyle extends React.Component<UpTextProps, undefined> {
  public static defaultProps: UpTextProps = {
    hasError: false,
    onChange: (event:any) => {}
  };

  public render() {
    const {children, ...rest} = this.props ;
    return (
      <div>
      <BaseTextStyle {...rest} />
      {children}
      </div>
    );
  }
}

export default TextStyle;

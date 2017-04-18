import * as React from 'react'
import styled, {css} from 'styled-components'
import { UpTextProps } from './types'
import Textarea from 'react-textarea-autosize'
import {DefaultInputStyle} from '../Input/styles'

const BaseTextArea: React.StatelessComponent<UpTextProps> = (props) => {
    const {className, value, onChange} = props;

    return <Textarea value={value}
        className={className}
        onChange={onChange}></Textarea>;
}

const base = props => css`
  ${(props) => DefaultInputStyle}
  min-height:60px;
  width:100%;
`;

const error = props => css`
  border : 1px solid red;
`;

export const BaseTextStyle = styled<UpTextProps>(BaseTextArea) `
${(props: UpTextProps) => base(props) }
${(props: UpTextProps) => props.hasError? error(props):css``}
`;

class TextStyle extends React.Component<UpTextProps, undefined> {
  public static defaultProps: UpTextProps = {
    hasError: false,
    onChange: (event:any) => {},
    value:""
  };

  public render() {
    const {children, ...rest} = this.props ;
    return (
        <BaseTextStyle {...rest} />
    );
  }
}

export default TextStyle;
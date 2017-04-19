import * as React from 'react'
import styled, {css} from 'styled-components'
import Textarea from 'react-textarea-autosize'

export interface TextAreaPropsStyle {
    value?:string;
    disabled?: boolean;
    readOnly?: boolean;
    placeholder?: string;
    // height?: HeightSize;
    // width?: WidthSize;

     color?: string;
    backgroundColor?: string;
    borderColor?: string;
    // type?: InputType;
    // iconName?: iconName;
    hasError?: boolean;
    onChange?: (data: any) => void;
    className?: string;
}

const BaseTextArea: React.StatelessComponent<TextAreaPropsStyle> = (props) => {
    const {className, value, onChange} = props;

    return <Textarea value={value}
        className={className}
        onChange={onChange}></Textarea>;
}

const base = props => css`
`;

const error = props => css`
  border : 1px solid red;
`;

export const TexAreatStyled = styled<TextAreaPropsStyle>(BaseTextArea) `
${(props: TextAreaPropsStyle) => base(props) }
${(props: TextAreaPropsStyle) => props.hasError? error(props):css``}
`;

/*class TextStyle extends React.Component<UpTextProps, undefined> {
  public static defaultProps: UpTextProps = {
    hasError: false,
    onChange: (event:any) => {},
    value:""
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
}*/

export default TexAreatStyled;
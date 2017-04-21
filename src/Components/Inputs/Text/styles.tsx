// Imports
import * as React from 'react'
import styled, {css} from '../../../Common/theming/themedComponents';
import Textarea from 'react-textarea-autosize'
import { ThemeInterface } from "../../../Common/theming/types";
import { defaultStyles } from '../_Common/Styled/Input/styles'

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
  min-height:80px;
`;

const error = props => css`
  border : 1px solid ${props.theme.danger};
`;

export const TexAreatStyled = styled<TextAreaPropsStyle>(BaseTextArea) `
${(props: TextAreaPropsStyle) => base(props) }
${(props) => defaultStyles}
${(props: TextAreaPropsStyle) => props.hasError? error(props):css``}
`;

export default TexAreatStyled;
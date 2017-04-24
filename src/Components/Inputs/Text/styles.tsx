// Imports
import * as React from 'react'
import styled, {css} from '../../../Common/theming/themedComponents';
import Textarea from 'react-textarea-autosize'
import { ThemeInterface } from "../../../Common/theming/types";
import { defaultStyles } from '../_Common/Styled/Input/styles'
import { UpTextStyledProps } from './'

const sizeMap = {
    xsmall: "100px",
    small: "150px",
    medium: "350px",
    large: "450px",
    xlarge: "600px",
    xxlarge: "700px",
    fill: "100%",
};

const BaseTextArea: React.StatelessComponent<UpTextStyledProps> = (props) => {
    const {className, value, onChange} = props;

    return <Textarea value={value}
        className={className}
        onChange={onChange}></Textarea>;
}

const base = props => css`
  min-height:80px;
  width: ${(props: UpTextStyledProps) => sizeMap[props.width]};
`;

const error = props => css`
  border : 1px solid ${props.theme.danger};
`;

export const TexAreatStyled = styled<UpTextStyledProps>(BaseTextArea) `
${(props: UpTextStyledProps) => base(props) }
${(props) => defaultStyles}
${(props: UpTextStyledProps) => props.hasError? error(props):css``}
`;

export default TexAreatStyled;
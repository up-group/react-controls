// Imports
import * as React from 'react'
import styled, { css } from '../../../Common/theming/themedComponents';
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

export class BaseTextArea extends React.Component<UpTextStyledProps, undefined> {

    textArea: any;
    constructor(p, c) {
        super(p, c);
    }

    setInput = (input) => {
        // The ref function is called twice, 
        // the first one with the component instance (as React) 
        // and the second one with the DOM node instance
        if (this.textArea == undefined) {
            this.textArea = input;
        }
    }

    componentDidMount() {
        var _props = this.props as UpTextStyledProps;
        if (_props.dataFor && this.textArea) {
            this.textArea._rootDOMNode.setAttribute('data-tip', 'tooltip');
            this.textArea._rootDOMNode.setAttribute('data-for', _props.dataFor);
        }
    }

    render() {
        const {className, value, onChange} = this.props;

        return <Textarea value={value}
            ref={this.setInput}
            className={className}
            onChange={onChange}></Textarea>;
    }
}

const base = props => css`
  min-height:80px;
  width: ${(props: UpTextStyledProps) => sizeMap[props.width]};
  padding:10px;
`;

const error = props => css`
  border : 1px solid ${props.theme.danger};
`;

export const TexAreatStyled = styled<UpTextStyledProps>(BaseTextArea) `
${(props) => defaultStyles}
${(props: UpTextStyledProps) => base(props)}
${(props: UpTextStyledProps) => props.hasError ? error(props) : css``}
`;

export default TexAreatStyled;
// Imports
import * as React from "react"
import { BaseControlComponent } from "../_Common/BaseControl/BaseControl"
import defaultTheme from '../../../Common/theming'

import Textarea from 'react-textarea-autosize'
import { UpTextProps } from "./types";
import { getStyles } from "./styles";

import * as classnames from 'classnames'

class BaseTextArea extends React.Component<UpTextProps> {

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
        if (this.props.dataFor && this.textArea) {
            this.textArea._rootDOMNode.setAttribute('data-tip', 'tooltip');
            this.textArea._rootDOMNode.setAttribute('data-for', this.props.dataFor);
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

// Exports
export default class UpText extends BaseControlComponent<UpTextProps, string> {
    
    public static defaultProps:UpTextProps = {
        width: 'xlarge',
        showError: true,
        theme:defaultTheme
    }
    
    constructor(p, c) {
        super(p, c);
        this.getValue = this.getValue.bind(this) ;
        this.state = {
            value:p.value
        }
    }
    
    onChange(event) {
        this.handleChangeEvent(event, event.target.value);
    }

    renderControl(): JSX.Element {
        const {value, onChange, className, readonly, tooltip, ...others} = this.props ;
        return <BaseTextArea className={classnames(getStyles(this.props), className)} 
                value={this.state.value} 
                onChange={this.onChange} {...others} />
    }

    getValue(event: any) {
        return (event != null && event.target != null) ? event.target.value : event ;
    }
}
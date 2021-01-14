// Imports
import * as React from 'react';
import { BaseControlComponent } from '../_Common/BaseControl/BaseControl';
import defaultTheme from '../../../Common/theming'
import Textarea from 'react-textarea-autosize'
import { UpTextProps } from './types';
import { getStyles } from './styles';
import * as classnames from 'classnames';

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
        const {className, value,  onChange, name, tabIndex,placeholder, readonly, maxChar, maxCharMsg, maxCharMsgShowNumber } = this.props;
        
        const shouldDisplayMaxCharMsg = maxCharMsgShowNumber ? (value?.length > maxCharMsgShowNumber) : true
        return (
        <>
            <Textarea value={value}
                readOnly={readonly}
                name={name}
                placeholder={placeholder}
                ref={this.setInput}
                tabIndex={tabIndex}
                className={classnames(className, 'up-text')}
                onChange={e => onChange(e, null)}
            />
            {maxChar && shouldDisplayMaxCharMsg &&
                <div className={classnames(className, 'up-text-max-characters')}>
                    <span className={classnames(className, 'up-text-max-characters-msg')}>{maxCharMsg}</span>
                    <span>{value ? maxChar - value?.length : maxChar}/{maxChar}</span>
                </div>
            }
        </>
        );
    }
}
// Exports
export default class UpText extends BaseControlComponent<UpTextProps, string> {

    public static defaultProps: UpTextProps = {
        width: 'fill',
        showError: true,
        theme: defaultTheme,
        readonly: false,
        maxCharMsg: "Le text doit contenir au maximum",
    }

    constructor(p, c) {
        super(p, c);
        this.getValue = this.getValue.bind(this);
        this.state = {
            value: p.value
        }
    }

    onChange = (event) => {
        event.persist();
        this.handleChangeEvent(event, event.target.value);
    }

    showError() {
        return this.props.showError !== undefined
            ? this.props.showError === true
            : this.hasError;
    }

    showSuccess() {
        return this.props.showSuccess;
    }

    getValue(event: any) {
        return (event != null && event.target != null) ? event.target.value : event;
    }

    renderControl(): JSX.Element {
        const { onChange, className, tooltip, value, ...others } = this.props;

        return (
            <BaseTextArea className={classnames(getStyles(this.props), className)}
                value={this.currentValue}
                onChange={this.onChange} {...others} />
        )
    }
};
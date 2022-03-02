// Imports
import * as React from 'react';
import classnames from 'classnames';
import { BaseControlComponent } from '../_Common/BaseControl/BaseControl';
import { RadioGroupStyles, getStyles } from './styles';
import { style } from 'typestyle';
import withTheme, { WithThemeProps } from '../../../Common/theming/withTheme';
import defaultTheme from '../../../Common/theming';
import UpSvgIcon from '../../Display/SvgIcon';
import { RadioGroupProps, UpRadioProps, UpRadioStyledProps } from './types';

const RadioGroup: React.FunctionComponent<RadioGroupProps & WithThemeProps> = props => {
    const { children, className } = props;
    return (
        <div
            onClick={(e) => { e.stopPropagation() }}
            className={classnames(className, style(RadioGroupStyles(props)))}
        >
            {children}
        </div>
    )
};

const BaseRadioButton: React.FunctionComponent<UpRadioStyledProps & WithThemeProps> = (props: UpRadioStyledProps & WithThemeProps) => {
    const {
        checked,
        iconName,
        className,
        name,
        text,
        value,
        onChange,
        intent,
        toggledElement: field,
        tabIndex,
        readonly,
        additionalData
    } = props;

    const isTextArray = Array.isArray(text);
    const radioContent = Array.isArray(text) ? (
        text.map((currentElement, index) =>
            <span key={index}>
                <span>
                    <b>{currentElement.title} :{' '}</b>
                </span>
                <span>{currentElement.value}</span>
                {(index === 0 && additionalData) &&
                    <span style={{ color: additionalData.color, marginLeft: '10px' }}>
                        <b>{additionalData.value}</b>
                    </span>
                }
            </span>
        )) : (
            <span>{text}</span>
        );

    return (
        <>
            <label className={classnames("up-control", "up-radio", getStyles(props), intent ? `up-intent-${intent}` : null, className)}>
                <input
                    checked={checked}
                    onChange={(e) => { e.persist(); !readonly && onChange(e) }}
                    name={name}
                    type="radio"
                    value={value}
                    tabIndex={tabIndex}
                />
                <span className={`up-control-wrapper ${isTextArray ? "up-control-wrapper--adaptive-height" : "up-control-wrapper--fixed-height"}`}>
                    <span className="up-control-indicator"></span>
                </span>
                <span className={`up-control-text ${isTextArray ? "up-control-text--adaptive-height" : "up-control-text--fixed-height"}`}>
                    {iconName && <UpSvgIcon iconName={iconName} />}
                    {radioContent}
                </span>
            </label>
            {checked && field}
        </>
    )
};

class UpRadio extends BaseControlComponent<UpRadioProps, any> {

    public static defaultProps: UpRadioProps = {
        alignMode: "horizontal",
        displayMode: "normal",
        options: [],
        name: "option",
        showError: true,
        theme: defaultTheme,
    }

    constructor(props) {
        super(props);
    }

    getValue(data: any) {
        return (data == null) ? null : data.target != null ? data.target.value : data;
    }

    public dispatchOnChange = (data: any, event?, error?: string) => {
        if (this.props.onChange !== undefined) {
            this.props.onChange(event, data, error);
        }
    }

    get isControlled() {
        return this.props.value !== undefined;
    }

    get currentValue() {
        return this.isControlled ? this.props.value : this.state.value;
    }

    showError() {
        return this.props.showError !== undefined ? typeof this.props.showError === "function" ? (this.props.showError as Function)(this.state) : this.props.showError === true : this.hasError;
    }

    showSuccess() {
        return this.props.showSuccess;
    }

    renderControl() {
        const options = this.props.options;
        const radioGroupClass = `upContainer__groupradio upContainer__groupradio-${this.props.displayMode} upContainer__groupradio-${this.props.alignMode}`;

        return (
            <RadioGroup
                readonly={this.props.readonly}
                className={radioGroupClass}
                gutter={this.props.gutter}
                flexWrap={this.props.flexWrap}
                nbItemsPerRow={this.props.nbItemsPerRow}
                theme={this.props.theme}
            >
                {/* Avoid set active element when using the component inside a label */}
                <label style={{ display: "none" }}>
                    <input type="radio" />
                </label>
                {options.map((option) => {
                    return (
                        <BaseRadioButton
                            key={`Key_${this.props.name}_${option.value}`}
                            intent={option.intent}
                            onChange={this.handleChangeEvent}
                            name={this.props.name}
                            checked={this.currentValue != null && this.currentValue === option.value}
                            text={option.text}
                            additionalData={option.additionalData}
                            readonly={this.props.readonly}
                            iconName={option.iconName}
                            theme={this.props.theme}
                            value={option.value}
                            toggledElement={option.toggledElement}
                            tabIndex={this.props.tabIndex}>
                        </BaseRadioButton>
                    )
                })}
            </RadioGroup>
        );
    }
};

export { UpRadio };
export default withTheme<UpRadioProps>(UpRadio);
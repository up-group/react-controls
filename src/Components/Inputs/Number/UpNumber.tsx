import * as React from 'react';
import UpInput from '../Input';
import { BaseControlComponent } from '../_Common/BaseControl/BaseControl';
import TypeNumberControl from '../_Common/Validation/TypeNumberControl';
import { UpNumberProps } from './types';
import UpBox from '../../Containers/Box';
import withTheme from '../../../Common/theming/withTheme';
import defaultTheme from '../../../Common/theming';
import UpButton from '../Button/UpButton';
import { eventFactory } from '../../../Common/utils/eventListener';
import classnames from 'classnames';
import { wrapperNumberButtonsStyles, wrapperNumberStyles } from './styles';

class UpNumber extends BaseControlComponent<UpNumberProps, number | string> {

    public static defaultProps: UpNumberProps = {
        showError: true,
        max: Infinity,
        min: -Infinity,
        theme: defaultTheme,
    };

    constructor(p, c) {
        super(p, c);
        this.state = {
            value: p.value
        }
        this._validationManager.addControl(new TypeNumberControl(this.props.decimalPlace === 0, this.props.min, this.props.max));
    }

    isValueMatched = (value: string) => {
        const { seperatorForDecimalNumbers } = this.props;
        if(value != null) {
          switch (seperatorForDecimalNumbers) {
            case 'comma':
              return value.match(/^(\d+([,]\d*)?)?$/);
            case 'point' : 
              return value.match(/^(\d+([.]\d*)?)?$/);  
            default:
              return value.match(/^(\d+([,.]\d*)?)?$/);  
          }
        }
    };

    displayDecimalWithComma = (numberAsString: string) => {
        return numberAsString.replace('.', ',');
    }

    applyDecimalPlace = (value: string) => {
        if (value == null || isNaN(parseFloat(value.replace(',', '.')))) {
            return '';
        }
        if (this.props.decimalPlace != null) {
            //replace , by . to convert correctly the string with parseFloat
            let _value: number = parseFloat(value.replace(',', '.'));
            return _value.toFixed(this.props.decimalPlace)
        }
        return value;
    }

    handleNumericChange = (event: React.ChangeEvent<any>, valueAsString: string) => {
        if (this.isValueMatched(valueAsString)) {
            const currentValue = valueAsString.replace(',', '.');
            if ((this.props.max && parseFloat(currentValue)) > this.props.max || (this.props.min && parseFloat(currentValue)) < this.props.min) {
                return null;
            }
            this.handleChangeEvent(event, valueAsString);
        }
    }

    handleNumericBlur = (event: React.ChangeEvent<any>) => {
        let value = event.target.value.replace(',', '.');
        if (this.isValueMatched(value)) {
            value = this.displayDecimalWithComma(this.applyDecimalPlace(value));
            event.target.value = value
            this.handleChangeEvent(event, value);
        }
    }

    getValue(value) {
        return value;
    }

    increment = () => {
        let newValue: number = parseFloat((this.currentValue || 0).toString().replace(',', '.'));
        let newValueAsString: string = newValue.toString();

        if (isNaN(newValue)) {
            newValue = 0;
        }

        newValue += this.props.stepSize ? this.props.stepSize : 1;

        if (this.props.max != null && newValue > this.props.max) {
            newValue = this.props.max
        }

        if (this.props.decimalPlace != null) {
            newValueAsString = this.applyDecimalPlace(newValue.toString());
        }
        else {
            newValueAsString = Number(newValue.toFixed(10)).toString();
        }

        newValueAsString = this.displayDecimalWithComma(newValueAsString);

        this.setState({ value: newValueAsString }, () => {
            this.handleChangeEvent(eventFactory(this.props.name, this.state.value), this.state.value);
        })
    }

    decrement = () => {
        let newValue: number = parseFloat((this.currentValue || 0).toString().replace(',', '.'));
        let newValueAsString: string = newValue.toString();

        if (isNaN(newValue)) {
            newValue = 0;
        }

        newValue -= this.props.stepSize ? this.props.stepSize : 1;

        if (this.props.min != null && newValue < this.props.min) {
            newValue = this.props.min
        }

        if (this.props.decimalPlace != null) {
            newValueAsString = this.applyDecimalPlace(newValue.toString());
        } else {
            newValueAsString = Number(newValue.toFixed(10)).toString();
        }

        newValueAsString = this.displayDecimalWithComma(newValueAsString);

        this.setState({ value: newValueAsString }, () => {
            this.handleChangeEvent(eventFactory(this.props.name, this.state.value), this.state.value);
        });
    }

    showError() {
        return this.props.showError !== undefined ? typeof this.props.showError === "function" ? (this.props.showError as Function)(this.state) : this.props.showError === true : this.hasError;
    }

    showSuccess() {
        return false;
    }

    renderControl() {
        const {
            className,
            isRequired,
            theme,
            readonly,
            tooltip,
            placeholder,
            name,
            autoFocus,
            floatingLabel
        } = this.props;

        return (
            <div className={classnames(wrapperNumberStyles(this.props), 'up-number')}>
                <UpInput
                    className={className}
                    floatingLabel={floatingLabel}
                    placeholder={placeholder}
                    name={name}
                    tabIndex={this.props.tabIndex}
                    tooltip={tooltip}
                    readonly={readonly}
                    isRequired={isRequired}
                    autoFocus={autoFocus}
                    value={this.currentValue != null ? this.currentValue.toString() : ''}
                    onChange={(event, value) => {
                        event.persist();
                        this.handleNumericChange(event, value)
                    }}
                    onFocus={this.props.onFocus}
                    onBlur={(event) => {
                        if (this.props.onBlur)
                            this.props.onBlur(event);
                        event.persist();
                        this.handleNumericBlur(event)
                    }} />
                {!this.props.hideButtons &&
                    <UpBox
                        className={wrapperNumberButtonsStyles(this.props)}
                        flexDirection={theme.inputBorderLess ? 'row' : 'column-reverse'}>
                        <UpButton
                            intent={'primary'}
                            borderless={true}
                            width={'icon'}
                            iconSize={9}
                            height={'xsmall'}
                            onClick={this.decrement}
                            iconName={'arrow-down'}>
                        </UpButton>
                        <UpButton
                            intent={'primary'}
                            borderless={true}
                            width={'icon'}
                            iconSize={9}
                            height={'xsmall'}
                            onClick={this.increment}
                            iconName={'arrow-up'}>
                        </UpButton>
                    </UpBox>
                }
            </div>
        );
    }
}

export { UpNumber };
export default withTheme<UpNumberProps>(UpNumber);
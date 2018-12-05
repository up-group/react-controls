import * as React from 'react';
import UpInput, { CommonProps } from "../Input";
import { BaseControlComponent } from "../_Common/BaseControl/BaseControl";
import TypeNumberControl from "../_Common/Validation/TypeNumberControl";
import { style } from "typestyle";
import UpBox from '../../Containers/Box';
import withTheme from '../../../Common/theming/withTheme';
import defaultTheme from '../../../Common/theming';
import UpButton from '../Button/UpButton';
import { UpButtonProps } from '../Button';

export interface UpNumberProps extends CommonProps<number | string> {
   max?: number;
   min?: number;
   stepSize?: number;
   decimalPlace?: number;
   value?: number | string;
}

export interface UpNumberStyledProps extends UpNumberProps {
   dataFor?: string; // For tooltip
   handleNumericChange?: (valueAsNumber: number, valueAsString: string) => void;
}

const wrapperNumberStyles = (props : UpNumberProps) => style({
    position: 'relative',
    $nest : {
        'input' : {
            textAlign: 'right',
            paddingRight : props.theme.inputBorderLess ? '42px !important' : '26px !important',
        },
        '.up-btn-wrapper' : {
            height: '16px',
        }
    }
})

const wrapperNumberButtonsStyles = (props : UpNumberProps) => style({
    position: 'absolute', 
    right: props.theme.inputBorderLess ? '0px' : '2px',
    bottom: props.theme.inputBorderLess ? '9px' : '3px',
    $nest : {
        '& .up-btn-wrapper .up-btn .up-icon-wrapper svg' : {
            margin: '0px',
        },
        '& .up-btn-wrapper .up-btn' : {
            marginLeft: '4px',
        },
    },
})

class UpNumber extends BaseControlComponent<UpNumberProps, number | string> {
   
    public static defaultProps : UpNumberProps = {
       decimalPlace: 2,
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

   round = (value, decimals) => {
       decimals = Math.abs(parseInt(decimals)) || 0;
       var multiplier = Math.pow(10, decimals);
       return Math.round(value * multiplier) / multiplier;
   }

   handleNumericChange = (event: React.ChangeEvent<any>, valueAsNumber: number, valueAsString: string) => {
       if (this.props.decimalPlace != null) {
           var _newValue = this.round(valueAsNumber, this.props.decimalPlace);
           if (isNaN(valueAsNumber)) {
               this.handleChangeEvent(event, this.state.value);
           } else if (_newValue === valueAsNumber && _newValue.toString() !== valueAsString) {
               this.handleChangeEvent(event, valueAsString);
           } else {
               this.handleChangeEvent(event, valueAsNumber);
           }
       } else {
           this.handleChangeEvent(event, valueAsNumber);
       }
   }

   getValue(value) {
       return value;
   }

   increment = () => {
        let newValue = parseFloat(this.state.value as string);
        if(isNaN(newValue)) {
            newValue = 0 ;
        }

        newValue += this.props.stepSize ? this.props.stepSize : 1 ;

        if(this.props.max && newValue > this.props.max) {
            newValue == this.props.max
        }
        this.setState({ value: newValue}) 
   }

   decrement = () => {
        let newValue = parseFloat(this.state.value as string) ;
        if(isNaN(newValue)) {
            newValue = 0 ;
        }
        
        newValue -= this.props.stepSize ? this.props.stepSize : 1 ;
      
        if(this.props.max && newValue < this.props.min) {
            newValue == this.props.max
        }
        this.setState({ value: newValue}) 
   }

   renderControl() {
       const { isRequired, theme, readonly, tooltip } = this.props;
    
       return (
           <div className={wrapperNumberStyles(this.props)}>
            <UpInput  
                    tooltip={tooltip}
                    readonly={readonly}
                    isRequired={isRequired}
                    value={ this.state.value ? this.state.value.toString() : "" } 
                    onChange={(event, value) => { event.persist() ; this.handleNumericChange(event, parseFloat(value), value) }} />
             <UpBox className={wrapperNumberButtonsStyles(this.props)} flexDirection={theme.inputBorderLess ? 'row' : 'column-reverse'}>
                <UpButton intent={'primary'} width={'icon'} iconSize={9} height={'xsmall'} onClick={this.decrement} iconName={'arrow-down'}></UpButton>
                <UpButton intent={'primary'} width={'icon'} iconSize={9} height={'xsmall'} onClick={this.increment} iconName={'arrow-up'}></UpButton>
             </UpBox>
           </div>
       );
   }
}

export default withTheme<UpNumberProps>(UpNumber)
import * as React from 'react'
import BaseNewInput, { TextInputProps, ValidationReturn } from "../_Common/BaseControl/BaseNewInput"


export interface UpPhoneProps {
    type?: "tel";
}

export interface UpPhoneState {

}

export default class UpPhone extends React.Component<UpPhoneProps & TextInputProps, UpPhoneState>  {

    constructor(p, c) {
        super(p, c);
        this.state = {};
    }

    render() {

        return <BaseNewInput Validate={this.validate} type={"tel"}  {...this.props} ></BaseNewInput>
    }

    phoneHandleChangeEvent = (event) => {
        this.handleChangeEvent(event) ;
    }   

    renderControl() {
        return (
            <UpInput iconName="phone" 
                validation={[{
                    pattern: /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/,
                    errorMessage: "Le champ doit être un numéro de téléphone "
                }]} 
                value={this.state.value} onChange={this.phoneHandleChangeEvent} 
                isRequired={this.props.isRequired}
                showError={this.props.showError} />
        );
    }
}


//// Imports
//import * as React from 'react'
//import { BaseControlComponent } from '../_Common/BaseControl/BaseControl'
//import { UpPhoneProps } from './'
//import UpInput from '../Input'
//import { CommonInputTextProps } from "../_Common/BaseControl/BaseInput"

//export interface UpPhoneProps extends CommonInputTextProps { }


//// Exports
//export default class UpPhone extends BaseControlComponent<UpPhoneProps, string> {
//    public static defaultProps: UpPhoneProps = {
//        showError: true,
//        width: "medium",
//        defaultValue: ""
//    };

//    constructor(p, c) {
//        super(p, c);
//    }

//    getValue(event: any) {
//        return event;
//    }

//    phoneHandleChangeEvent = (event) => {
//        console.log('Phone change event') ;
//        console.log(event) ;
//        this.handleChangeEvent(event) ;
//    }   

//    renderControl() {
//        return (
//            <UpInput iconName="phone" 
//                validation={[{
//                    pattern: /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/,
//                    errorMessage: "Le champ doit être un numéro de téléphone "
//                }]} 
//                value={this.state.value} onChange={this.phoneHandleChangeEvent} 
//                isRequired={this.props.isRequired}
//                showError={this.props.showError} />
//        );
//    }
//}

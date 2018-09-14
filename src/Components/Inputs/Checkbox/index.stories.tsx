import * as React from 'react'
import { storiesOf } from '@storybook/react'


import UpCheckbox from './UpCheckBox'
import UpLabel from '../../Display/Label'

var onOptionChange = () => { }
var state = {
    activation: false,
    majeur: false,
    homme: true,
    grand: false,
    couleur: "red",
    selection: null //{id: 3, text : ""}
}

var onActivationChange = () => {
    state.activation = !state.activation;
}



export interface ComponentNameProps {
}

export interface ComponentNameState {
    check: boolean;
}

export class TestState extends React.Component<ComponentNameProps, ComponentNameState>{
    constructor(p, c) {
        super(p, c);
        this.state = {
            check: true
        };
    }

    render() {
        return <div style={{border:"1px solid black"}}>
            <input type="checkbox" checked={this.state.check} onChange={(e) => { this.setState({ check: e.target.checked }) }} />
            <UpCheckbox text="local state" checked={this.state.check} onChange={(e) => { this.setState({ check: e.target.checked }) }} />
            value local state {String(this.state.check)}
        </div>
    }
}


storiesOf('UpCheckbox', module)
    .addWithInfo('Simple usage', 'Utilisation avec plusieurs options',
        () => (
            <div style={{ padding: 10 }}>
                <UpCheckbox text="empty" />
                <UpCheckbox text="test" checked={true} />
                <UpCheckbox checked={true}>true</UpCheckbox>
                <UpCheckbox checked={true} disabled={true}>true disabled</UpCheckbox>
                <TestState />
            </div>
        ))
    .addWithInfo('Multiple usage', 'Utilisation avec plusieurs options',
        () => (
            <UpCheckbox

            //    options={[{
            //    text: "Vous êtes majeur ?",
            //    name: "Option1",
            //    onChange: onOptionChange,
            //    value: true,
            //    checked: state.majeur === true
            //}, {
            //    text: "Vous êtes Homme ?",
            //    name: "Option2",
            //    onChange: onOptionChange,
            //    value: true,
            //    checked: state.homme === true
            //}, {
            //    text: "Vous êtes grand ?",
            //    name: "Option3",
            //    onChange: onOptionChange,
            //    value: true,
            //    checked: state.grand === true
            //        }]}
            />
        ));
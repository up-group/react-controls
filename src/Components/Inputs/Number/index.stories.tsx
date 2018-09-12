import * as React from 'react'
import { storiesOf } from '@storybook/react'


import UpNumber from './UpNumber'
import UpLabel from '../../Display/Label'





export interface Test1Props {

}

export interface Test1State {
    nb: number
}

export class Test1 extends React.Component<Test1Props, Test1State>{
    public static defaultProps: Test1Props = {};

    constructor(p, c) {
        super(p, c);
        this.state = {
            nb: 0
        };
    }
    myinput;

    handleClick = () => {
        this.setState({ nb: this.state.nb + 1 })
        var event = new Event('change', { bubbles: true });
        this.myinput.dispatchEvent(event);
    }

    force = () => {
        this.setState({ nb: this.state.nb + 1 });
        console.log("a")
        if ("createEvent" in document) {
            var evt = document.createEvent("HTMLEvents");
            evt.initEvent("change", false, true);
            this.myinput.dispatchEvent(evt);
        }
        else
            this.myinput.fireEvent("onchange");
    }

    onChange = (a) => {
        console.log(a);
    }

    render() {
        return <div>
            <input type="button" onClick={this.force} />
            <input ref={(input) => this.myinput = input} value={this.state.nb} type="number" onChange={this.onChange} />
            <button onClick={this.force}>Change Input</button>
        </div>

    }
}





storiesOf('UpNumber', module)
    .addWithInfo('Simple usage', 'Utilisation avec plusieurs options',
        () => (

            <div style={{ padding: "16px" }} >
                <UpNumber label="nothing"/>
                <UpNumber label={"disabled"} disabled={true} />
                <UpNumber label={"focus"} autoFocus={true} />
                <br/>
                <UpNumber label={'onchange'} onChange={console.log} />
                <UpNumber />
                <UpNumber />
                <br/>
                <UpNumber label={"min 5"} min={5} />
                <UpNumber label={"max 10"} max={10} />
                <UpNumber label={"max 100 min 150"} min={100} max={150} />
                <input type='number'  min={100} max={150} />
                <br />
                <UpNumber label={"value 5"} value={5} />
                <UpNumber label={"value null "} value={0} />
                <UpNumber label={"value"} value={10.4} />
                <br />
            </div>

        ))
    .addWithInfo('Integer', 'Only greather than 0',
        () => (

            <div>
            </div>

        ))

    .addWithInfo('ohter Test', 'Only greather than 0',
        () => (
            <Test1 />

        ));
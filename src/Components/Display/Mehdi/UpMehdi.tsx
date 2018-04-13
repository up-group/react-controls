
import * as React from "react"
import { style } from "typestyle"

export interface UpMehdiProps {
}

export interface UpMehdiState {
    color: string;
    pateat?: string;
    data: string[];

}

export default class UpMehdi extends React.Component<UpMehdiProps, UpMehdiState>{


    constructor(p, c) {
        super(p, c);

        this.state = {
            color: "red",
            pateat: "test",
            data: []
        }

    }

    render() {
        var arr = [];
        for (var i = 0; i < this.state.data.length; i++) {
            arr.push(<UpMehdi2 key={i} text={this.state.data[i]}>
            </UpMehdi2>)
        }

        //var arr = this.state.data.map((x,index) => {

        //});


        var i = 4;
        return <div >
            <input onChange={this.onch} value={this.state.color} type="text" />
            <input onClick={this.onclick} type="button" value="test" />
            <br />
            {arr}


            {this.props.children}

        </div>
    }

    onch = (a) => {
        this.setState({ color: a.target.value });
    }

    onclick = () => {
        var dataTemp = this.state.data;
        dataTemp.push(this.state.color);
        this.setState({ data: dataTemp });
    }


}



export interface UpMehdiProps2 {
    text: string;
}

export interface UpMehdiState2 {

}

export class UpMehdi2 extends React.Component<UpMehdiProps2, UpMehdiState2>{


    constructor(p, c) {
        super(p, c);

    }

    render() {

        var styleUpMehdi2 = style({
            color: this.props.text,
            $nest: {
                '&:hover': {
                    fontSize: "xx-large"
                }
            }
        });


        return <h2 className={styleUpMehdi2} >{this.props.text}</h2>
    }


}
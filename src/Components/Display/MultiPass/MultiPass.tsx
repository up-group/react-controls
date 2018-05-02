import * as React from "react"
import { style } from "typestyle"
var LSWA = require("./LSWA.png")
var Perceval = require("./Perceval.png")


export interface MultiPassProps {
    clientId: string;
}

interface Message {
    Type: string;
    Logiciel: string;
    Email: string;
    Contenu: string;
}

interface SendAgentMessageCommandArgs {
    Message: Message;
}


export interface MultiPassState {
}

export default class MultiPass extends React.Component<MultiPassProps, MultiPassState>{
    constructor(p, c) {
        super(p, c);

        this.state = {

        }
    }
    render() {
        var AppIcon= style({
            cursor:" pointer",
            position: "fixed",
            paddingLeft:"2%",
            bottom: "2%",
        });
        return <div className={AppIcon}>
            <div>
                <a onClick={this.onSolutionwebClick}>
                    <img src={LSWA} />
                </a>
            </div>
            <div >
                <a onClick={this.onPercevalClick} > 
                    <img src={Perceval} />
                </a>
            </div>
        </div>
    }
    private onSolutionwebClick = () => {
        var message: Message = {
                Type: "MESSAGE",
                Logiciel: "LSWA",
                Email: "mehdi.smail@softeam.fr",
                Contenu: "{'action':'OPEN_CLIENT','params': {'client': 'clientId'}}",
        }
        var args: SendAgentMessageCommandArgs = {
                Message: message
        }

        $.ajax({
            url: "api/domain/Message/SendAgentMessageCommand/Execute",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            type: "post",
            data: JSON.stringify(args),
            success: function (url) {
            },
            error: function (err) {
            }
        });
    }
    private onPercevalClick = () => {
        var args: Message = {
            Type: "MESSAGE",
            Logiciel: "Perceval",
            Email: "mehdi.smail@softeam.fr",
            Contenu: "{'action':'OPEN_CLIENT','params': {'client': 'clientId'}}",
        }
        $.ajax({
            url: "api/domain/Message/SendAgentMessageCommand/Execute",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            type: "post",
            success: function (url) {
            },
            error: function (err) {
            }
        });
    }
}
import * as React from "react"
import { style } from "typestyle"
import SvgIcon from "../SvgIcon/index"
import { IconName } from "../SvgIcon/icons"
import Header from "../TimeLine/lib/layout/Header";

export interface UpBulleProps {
    BackgroundImage: string;
    Message: string;
    icon: IconName;
    Valeur: number
}
export interface UpBulleState {
    
}
export default class UpBulle extends React.Component<UpBulleProps, UpBulleState>{
    constructor(p, c) {
        super(p, c);

        this.state = {
           
        }
    }
    render() { 
        var BulleStyle = style({
            fontSize: "12px",
            cursor: "pointer",
            color:"white",
            width: "228px",
            height: "50px",
            borderRadius: "4px",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            padding: "7px 10px 5px 5px",
            margin: "0px 25px 25px 0px",
            float: "left",
        });
        var IconStyle = style({
            margin: "5px",
        });
        return <div className={BulleStyle} style={{ backgroundImage: this.props.BackgroundImage }}>
            <SvgIcon className={IconStyle} iconName={this.props.icon} color={"white"} />
            <p style={{ padding: "0px 5px 5px 10px", float: "left", fontSize: "24px" }}>{this.props.Valeur}      </p>
            <p style={{ paddingTop: "6px", float: "left", wordWrap: "break-word", width:"150px" }}>{this.props.Message}     </p>
            <p style={{ padding: "0px 5px 5px 10px", float: "left" }}>{this.props.children}    </p>
        </div>
    }
}
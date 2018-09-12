import * as React from "react"
import SvgIcon from "../SvgIcon/index"
import { IconName } from "../SvgIcon/icons"
import UpTooltip, { Tooltip } from '../../Display/Tooltip/index'
import UpBut from "../../Inputs/Button/UpButton"


export interface UpLogoAlerteProps {
    icon: IconName;
    title?: string;
    alerteNumber?: number;
    //intenet: IntentType
}

export interface UpLogoAlerteState {

}

export default class UpLogoAlerte extends React.Component<UpLogoAlerteProps, UpLogoAlerteState>{
    public static defaultProps: UpLogoAlerteProps = {
        //intenet: "default",
        alerteNumber: 0,
        title: "",
        icon: "none"
    };

    constructor(p, c) {
        super(p, c);
        this.state = {};
    }



    render() {

        var styleLogoAlerte: React.CSSProperties = {
            width: 50,
            margin: "0 5px"
        }

        var backgroundColor = "green";
        var borderColor = "green";
        var texteColor = "green";




        //switch (this.props.intenet) {
        //    case 'primary':
        //        backgroundColor = "#0073b7";
        //        borderColor = "#addaf1";
        //        texteColor = "#337ab7";
        //        break;
        //    case 'danger':
        //        backgroundColor = "#dd4b39";
        //        borderColor = "#eea59c";
        //        texteColor = "#a94442";
        //        break;
        //    case 'warning':
        //        backgroundColor = "#f39c12";
        //        borderColor = "#f9cd88";
        //        texteColor = "#f39c12";
        //        break;
        //    case 'success':
        //        backgroundColor = "#00a65a";
        //        borderColor = "#7FD2AC";
        //        texteColor = "#3c763d";
        //        break;
        //    case 'info':
        //    case 'default':
        //    default:
        //        backgroundColor = "#3c8dbc";
        //        borderColor = "#7FDFF7";
        //        texteColor = "#00c0ef";
        //        break;
        //}


        var StyleLogoAlerteIcon: React.CSSProperties = {
            backgroundColor: backgroundColor,
            borderRadius: "35px",
            boxShadow: "1px 1px 8px #aaa",
            fontSize: "24px",
            height: "50px",
            lineHeight: "36px",
            textAlign: "center",
            width: "50px",
            border: "7px solid " + borderColor,
            padding: "0px 4px"
        }

        var styleTexteLogo: React.CSSProperties = {
            display: " block",
            textAlign: "center",
            fontWeight: 300,
            fontSize: 30,
            color: texteColor
        }

        //return <UpBut tooltip="test" actionType="add" onClick={() => { }}></UpBut>


        return <UpTooltip content={this.props.title}>
            <div style={styleLogoAlerte}>
                <div style={StyleLogoAlerteIcon} className="logoAlerte">
                    <SvgIcon height={24} iconName={this.props.icon} />
                </div>
                <div style={styleTexteLogo}>
                    <span>{this.props.alerteNumber}</span>
                </div>
            </div>
        </UpTooltip>
    }
}

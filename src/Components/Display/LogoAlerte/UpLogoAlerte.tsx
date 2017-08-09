import * as React from "react"
import SvgIcon from "../SvgIcon/index"
import { IconName } from "../SvgIcon/icons"
import { ThemedProps, IntentType } from '../../../Common/theming/types'
import UpTooltip, { Tooltip } from '../../Display/Tooltip/index'
import UpBut from "../../Inputs/Button/index"


export interface UpLogoAlerteProps {
    icon: IconName;
    title?: string;
    alerteNumber?: number;
    intenet?: IntentType
}

export interface UpLogoAlerteState {

}

export default class UpLogoAlerte extends React.Component<UpLogoAlerteProps, UpLogoAlerteState>{
    public static defaultProps: UpLogoAlerteProps = {
        intenet: "default",
        alerteNumber: 0,
        title: "",
        icon : "none"
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

        var StyleLogoAlerteIcon: React.CSSProperties = {
            borderRadius: "35px",
            boxShadow: "1px 1px 8px #aaa",
            fontSize: "24px",
            height: "50px",
            lineHeight: "36px",
            textAlign: "center",
            width: "50px",
            border: "7px solid #7FD2AC",
            padding: "0px 4px"
        }

        var styleTexteLogo: React.CSSProperties = {
            display: " block",
            textAlign: "center",
            fontWeight: 300,
            fontSize: 30
        }

        //return <UpBut tooltip="test" actionType="add" onClick={() => { }}></UpBut>


        return <UpTooltip content={this.props.title}>
            <div style={styleLogoAlerte}>
                <div style={StyleLogoAlerteIcon} className="logoAlerte bg-green">
                    <SvgIcon height={24} iconName={this.props.icon} />
                </div>
                <div style={styleTexteLogo} className="texteLogo">
                    <span className="nombre text-success">{this.props.alerteNumber}</span>
                </div>
            </div>
        </UpTooltip>
    }
}

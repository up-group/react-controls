
import * as React from "react"
import LoadingIndicator from "../LoadingIndicator/index"

export interface UpLoadingIndicatorZoneProps {
    isLoading: boolean;
}

export interface UpLoadingIndicatorZoneState {

}

export default class UpLoadingIndicatorZone extends React.Component<UpLoadingIndicatorZoneProps, UpLoadingIndicatorZoneState>{
    public static defaultProps: LoadingIndicatorZoneProps = {
        isLoading: false
    };
    constructor(p, c) {
        super(p, c);
        this.state = {};
    }

    render() {
        var containerStyle: React.CSSProperties = {
            position: "relative",
            display: "block"
        };

        const baseOverlayStyle: React.CSSProperties = {
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
            display: this.props.isLoading ? "block" : "none",
        }

        return <div style={containerStyle}>
            {this.props.children}
            <div style={baseOverlayStyle} >
                <div style={{ marginLeft: "50%" }}>
                    <LoadingIndicator isLoading={true} />
                </div>
            </div>
        </div>
    }



}

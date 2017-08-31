
import * as React from "react"
import LoadingIndicator from "../LoadingIndicator/index"

export interface LoadingIndicatorZoneProps {
    isLoading: boolean;
}

export interface LoadingIndicatorZoneState {

}

export default class LoadingIndicatorZone extends React.Component<LoadingIndicatorZoneProps, LoadingIndicatorZoneState>{
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

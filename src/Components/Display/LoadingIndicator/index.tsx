// Adapted from https://grommet.github.io/docs/spinning
import * as React from 'react';
import Box from '../../Containers/Box';
import { UpGrid, UpRow, UpCol } from '../../Containers/Grid'
import SvgIcon from '../SvgIcon';
//import SvgIcon, { Circle } from './styles';
export type LoadingIndicatorDisplayMode = "inline" | "modal" | "zone"


export interface LoadingIndicatorProps {
    isLoading: boolean;
    displayMode?: LoadingIndicatorDisplayMode;
    message?: string;
    title?: string;
}

export interface LoadingIndicatorState {

}

export default class LoadingIndicator extends React.Component<LoadingIndicatorProps, LoadingIndicatorState>{
    constructor(p, c) {
        super(p, c);
        this.state = {};
    }

    render() {
        var _displayMode = this.props.displayMode;
        if (_displayMode == null) {
            _displayMode = "inline";
        }

        var _title = this.props.title;
        if (_title == null) {
            _title = "Veuillez patienter...";
        }

        if (!this.props.isLoading && _displayMode != "zone") {
            return null;
        }

        if (_displayMode == "zone") {

            var container: React.CSSProperties = {
                position: "relative",
                display: "block"
            };

            var overlay: React.CSSProperties = {
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                backgroundColor: "rgba(0,0,0,0.4)",
                display: this.props.isLoading ? "block" : "none",
            }
            var circle: React.CSSProperties = {
                padding: 40,
                textAlign: "center"
            }

            return <div style={container}>
                {this.props.children}
                <div style={overlay} >
                    <div style={circle}>
                        <SvgIcon viewBox="0 0 48 48">
                            <circle cx="24" cy="24" r="21" stroke="#007acc" strokeWidth="6" fill="none" />
                        </SvgIcon>
                    </div>
                </div>
            </div >

        } else if (_displayMode == "inline") {

            return <Box boxSize={"auto"} pad={"none"} margin={'none'} alignItems="center" justifyContent="center">
                <SvgIcon viewBox="0 0 48 48">
                    <circle cx="24" cy="24" r="21" stroke="#007acc" strokeWidth="6" fill="none" />
                </SvgIcon>
                {
                    this.props.message &&
                    <p>{this.props.message}</p>
                }
            </Box >;
        } else {
            return <aside
                className="loading-screen" style={{ "position": "fixed", "top": 0, "right": 0, "bottom": 0, "left": 0, "zIndex": 9999, backgroundColor: "white", "opacity": 0.8 }}>
                <div style={{ "position": "absolute", "top": "50%", "left": "40%", "marginTop": "-7em" }}>
                    <UpGrid>
                        <UpRow>
                            <UpCol span={6}>
                                <SvgIcon viewBox="0 0 48 48">
                                    <circle
                                        cx="24"
                                        cy="24"
                                        r="21"
                                        stroke="#007acc"
                                        strokeWidth="6"
                                        fill="none"
                                    />
                                </SvgIcon>
                            </UpCol>
                            <UpCol span={18}>
                                <UpGrid>
                                    <UpRow>
                                        <UpCol span={24}>
                                            <hgroup style={{ "textShadow": "0px 0px 0.1ex" }} className="">
                                                <h3 style={{ "fontSize": "22px" }}>
                                                    <span>{_title}</span>
                                                </h3>
                                            </hgroup>
                                        </UpCol>
                                    </UpRow>
                                    <UpRow>
                                        <UpCol span={24}>
                                            <p className="loading-status text-info"
                                                style={{ "textAlign": "left" }}>{this.props.message}</p>
                                        </UpCol>
                                    </UpRow>
                                </UpGrid>
                            </UpCol>
                        </UpRow>
                    </UpGrid>
                </div>
            </aside>;

        }
    }
}

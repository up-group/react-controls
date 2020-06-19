
import * as React from "react"
import * as classnames from 'classnames' ;

import './bootstrap-grid.css'
import SvgIcon from "../../Display/SvgIcon/index";

import UpPanel from "../Panel/index"

import { TitleStyles } from './styles' ;

export interface UpTileProps {
    Title?: string
    size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
    footer?: JSX.Element;
    maxHeight?: number | string;
}

export interface UpTileState {
    isCollapse: boolean;
}

export default class UpTile extends React.Component<UpTileProps, UpTileState>{
    public static defaultProps: UpTileProps = {
        size: 4
    };

    constructor(p, c) {
        super(p, c);
        this.state = {
            isCollapse: false
        };
    }

    render() {
        var style = {
            margin: 0,
            float: "left",
            width: "100%",
            minHeight: 1,
            paddingRight: 15,
            paddingLeft: 15,
            display: "block"
        }
        var footer = null;
        if (this.props.footer != null) {
            footer = <div className="box-footer text-center">
                {this.props.footer}
            </div>
        }

        var styleOverFlow: React.CSSProperties = null;

        if (this.props.maxHeight != null) {
            styleOverFlow = {
                maxHeight: this.props.maxHeight,
                overflowY: "auto"
            }
        }

        return <div className={classnames('UpTile', TitleStyles)}>
            <div style={null}>
                <div className={"box box-home" + (!this.state.isCollapse ? "" : " collapsed-box")}>
                    <div className="box-header with-border">
                        <h3 className="box-title">
                            {this.props.Title}
                        </h3>
                        <div className="box-tools pull-right">
                            <button data-widget="collapse" type="button" className="btn btn-box-tool" onClick={this.collapse}>
                                <SvgIcon height={20} iconName={this.state.isCollapse ? "plus" : "minus"} />
                            </button>
                        </div>
                    </div>
                    <div className="box-body" style={{}}>
                        <div style={styleOverFlow} >
                            {this.props.children}
                        </div>
                    </div>
                    {footer}
                </div>
            </div>
        </div>
    }

    collapse = () => {
        this.setState({ isCollapse: !this.state.isCollapse });
    }
}

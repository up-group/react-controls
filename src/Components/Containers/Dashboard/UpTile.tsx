
import * as React from "react"
import './UpTile.css'
import './bootstrap-grid.css'
import * as $ from 'jquery'
import SvgIcon from "../../Display/SvgIcon/index";

import UpPanel from "../Panel/index"

export interface UpTileProps {
    Title?: string
    size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12
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
            width: "33%",
            minHeight: 1,
            paddingRight: 15,
            paddingLeft: 15,
            display: "block"
        }
        // < span data-toggle="tooltip" title= "" className= "badge bg-red" data- original - title="4 messages non lus" > 4</span >

        return <div style={null} className={"col-md-" + this.props.size}>
            <div className={"box box-up box-home" + (!this.state.isCollapse ? "" : " collapsed-box")}>
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
                    {this.props.children}
                </div>
                <div className="box-footer text-center">
                    <a href="#" className="col-md-10">Voir tous les messages</a>
                    <div className="btnAjoutMessage col-md-2"><a href="#"><i className="pe pe-7s-plus fa-2x"></i></a></div>
                </div>
            </div>
        </div>
    }

    collapse = () => {
        this.setState({ isCollapse: !this.state.isCollapse });
    }
}

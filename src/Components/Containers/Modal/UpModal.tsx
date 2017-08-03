import * as React from "react"


export interface UpModalProps {
    showModal?: boolean;
    header?: string | JSX.Element;
    footer?: JSX.Element;
}

export interface UpModalState {

}

export default class UpModal extends React.Component<UpModalProps, UpModalState>{
    public static defaultProps: UpModalProps = {
        showModal: true
    };

    constructor(p, c) {
        super(p, c);
        this.state = {};
    }

    render() {

        var header = null;

        if (header) {
            if (typeof (header) === "string") {
                header = <div className="modal-header">
                    <h4 className="modal-title">{this.props.header}</h4>
                </div>
            } else {
                header = <div className="modal-header">
                    {this.props.header}
                </div>
            }
        }

        var footer = null;
        if (this.props.footer) {
            footer = <div className="modal-footer">
                {this.props.footer}
            </div>
        }

        return <div style={{ display: this.props.showModal ? "block" : "none" }} className="modal" id="myModal" role="dialog" aria-labelledby="myModalLabel">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    {header}
                    <div className="modal-body">
                        {this.props.children}
                    </div>
                    {footer}
                </div>
            </div>
        </div>

    }
}

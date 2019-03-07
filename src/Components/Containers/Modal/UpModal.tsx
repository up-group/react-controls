import * as React from "react"
import * as ReactDOM from "react-dom"
import * as classnames from 'classnames'
import {style, media, keyframes} from 'typestyle' 

import UpSvgIcon from '../../Display/SvgIcon'
import UpDefaultTheme, { withTheme, WithThemeProps,  } from "../../../Common/theming";

export interface UpModalProps {
    showModal?: boolean;
    header?: string | JSX.Element;
    footer?: JSX.Element;
    html?:string;
    onClose?: () => void
}

export interface UpModalState {
    showModal?: boolean;
}

const HeaderFooterAfterBeforeStyle = {
    display: "table",
    content: " "
};

const appearFromTop = keyframes({
    from : {
        marginTop: '-50%',
    },
    to : {
        marginTop : 0,
    }
})

const ModalStyle = (props: WithThemeProps) => style({
    $nest: {
        "& .up-modal" : {
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 1050,
            overflowY: "auto",
            //-webkit-overflow-scrolling: touch,
            outline: 0,
            opacity:0
        },
        "& .up-modal-open" :{
            overflow: "hidden"
        },
        "& .up-modal.fade" : {
            visibility:"hidden",
            transition: ".5s ease-in-out",
            "-webkit-transition": ".5s ease-in-out",
            "-moz-transition": ".5s ease-in-out",
            "-o-transition": ".5s ease-in-out",
            opacity:0
        },
        "& .up-modal.in" : {
            visibility:"visible",
            transition: ".5s ease-in-out",
            "-webkit-transition": ".5s ease-in-out",
            "-moz-transition": ".5s ease-in-out",
            "-o-transition": ".5s ease-in-out",
            opacity: 1,
            animationDuration: '1s',
            animationName: appearFromTop,
        },
        "& .up-modal.fade .up-modal-dialog" : {
            transition: "transform 1s ease-out",
            transform: "translate(0, -25%)"
        },
        "& .up-modal.in .up-modal-dialog" : {
            transition: "transform 1s ease-out",
            transform: "translate(0, 0)"
        },
        "& .up-modal-open .modal" : {
            overflowX: "hidden",
            overflowY: "auto"
        },
        "& .up-modal-dialog " : {
            position: "relative",
            width: "auto",
            margin: "10px"
        },
        "& .up-modal-content" : {
            position: "relative",
            backgroundColor: "#fff",
            backgroundClip: "padding-box",
            border: "1px solid #999",
            borderRadius: "6px",
            outline: 0,
            boxShadow: "0 3px 9px rgba(0, 0, 0, .5)"
        },
        "& .up-modal-backdrop" : {
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: 1040,
            backgroundColor: "#000"
        },
        "& .up-modal-backdrop.fade" : {
            filter: "alpha(opacity=0)",
            opacity: 0
        },
        "& .up-modal-backdrop.in" : {
            filter: "alpha(opacity=50)",
            opacity: 0.5
        },
        "& .up-modal-header" : {
            padding: "15px",
            minHeight: '40px',
            borderBottom: "1px solid #e5e5e5",
            position:"relative"
        },
        "& .up-modal-header .close" : {
            marginTop: "-2px"
        },
        "& .up-modal-title" : {
            margin: 0,
            lineHeight: 1.42857143
        },
        "& .up-modal-body" : {
            position: "relative",
            padding: "15px",
            width:"100%",
            height:"100%"
        },
        "& .up-modal-footer": {
            padding: "15px",
            textAlign: "right",
            borderTop: "1px solid #e5e5e5"
        },
        "& .up-modal-footer .btn + .btn" : {
            marginBottom: 0,
            marginLeft: "5px"
        },
        "& .up-modal-footer .btn-group .btn + .btn" : {
            marginLeft: "-1px"
        },
        "& .up-modal-footer .btn-block + .btn-block": {
            marginLeft: 0
        },
        "& .up-modal-close" : {
            position: "absolute",
            top:"8px",
            right:"8px",
            fontSize: "21px",
            fontWeight: "bold",
            lineHeight: 1,
            color: "#000",
        },
        "& .up-modal-close svg, & .up-modal-close svg g, & .up-modal-close svg path, & .up-modal-close svg polygon" : {
            fill: props.theme.colorMap.primary,
            stroke: props.theme.colorMap.primary,
        },
        "& .up-modal-close:hover, & .up-modal-close:focus" : {
            color: props.theme.colorMap.primaryDark,
            textDecoration: "none",
            cursor: "pointer",
            filter: "alpha(opacity=50)",
            opacity: 0.5
        },
        "& .up-modal-scrollbar-measure": {
            position: "absolute",
            top: "-9999px",
            width: "50px",
            height: "50px",
            overflow: "scroll"
        },
        "& .up-modal-header:before" : {
            display: "table",
            content: " "
        },
        "& .up-modal-footer:before" : {
            display: "table",
            content: " "
        },
        "& .up-modal-header:after" : {
            display: "table",
            content: " ",
            clear: "both"
        },
        "& .up-modal-footer:after" : {
            display: "table",
            content: " ",
            clear: "both"
        },
        "& .up-modal-disabler" : {
            position:"fixed",
            top:0,
            left:0,
            background:"#0d0e0e",
            opacity:0.7,
            width:"10000px",
            height:"10000px",
            zIndex:1039,
            overflow:"hidden"
        }
    }},
    media({minWidth:768}, {$nest : {
            "& .up-modal-dialog" : {
                width:"auto",
                minWidth: "600px",
                maxWidth: "70%",
                margin: "30px auto"
            },
            "& .up-modal-content" : {
                boxShadow: "0 5px 15px rgba(0, 0, 0, .5)"
            },
            "& .up-modal-sm": {
                width: "300px"
            }
        }
    }),
    media({minWidth:992}, {$nest : {
        "& .up-modal-lg": {
            width:"auto",
            minWidth: "900px",
            maxWidth: "80%"
        }
    }
})
) ;

class UpModal extends React.Component<UpModalProps & WithThemeProps, UpModalState>{
    public static defaultProps: UpModalProps & WithThemeProps = {
        showModal: true,
        theme: UpDefaultTheme,
    };

    constructor(p, c) {
        super(p, c);
        this.state = {showModal: this.props.showModal};
    }

    closeModal = () => {
        this.setState({showModal:false}) ;
        if(this.props.onClose) {
            this.props.onClose() ;
        }
    }

    onDisabler = (event) => {
        event.stopPropagation() ;
        event.preventDefault() ;
    }

    componentWillReceiveProps(nextProps) {
        this.setState({showModal:nextProps.showModal}) ;
    }

    setHtml = (iframe) => {
        // Set the innerHTML of the iframe
        if(iframe) {
            iframe.contentDocument.write(this.props.html) ;
        }
    }

    render() {
        var header = null;
        var headerContent:any = "" 
        if (this.props.header != null) {
            headerContent = this.props.header ;
        }

        if (typeof (this.props.header) === "string") {
            header = <div className="up-modal-header">
                <h4 className="up-modal-title">{this.props.header}</h4>
                <span onClick={this.closeModal} className="up-modal-close"><UpSvgIcon iconName={'close'}></UpSvgIcon></span>
            </div>
        } else {
            header = <div className="up-modal-header">
                {this.props.header}
                <span onClick={this.closeModal} className="up-modal-close">
                    <UpSvgIcon iconName={'close'}></UpSvgIcon>
                </span>
            </div>
        }

        var footer = null;
        if (this.props.footer) {
            footer = <div className="up-modal-footer">
                {this.props.footer}
            </div>
        }

        return (
            <div className={ModalStyle(this.props)}> 
                <div className={classnames("up-modal", (this.state.showModal===true) ? "in" : "fade", appearFromTop)}  id="myModal" role="dialog" aria-labelledby="myModalLabel">
                    <div className="up-modal-dialog" role="document">
                        <div className="up-modal-content">
                            {header}
                            <div className="up-modal-body">
                                {this.props.children}
                                {this.props.html != null &&
                                    <iframe ref={this.setHtml} style={{width:"100%", minHeight:"800px", minWidth:"600px", border:"0px"}} />
                                }
                            </div>
                            {footer}
                        </div>
                    </div>
                </div>
                <div style={{display:(this.state.showModal===true)?"block":"none"}} className="up-modal-disabler" onClick={this.onDisabler}></div>
            </div>) ;
    }
}

export default withTheme<UpModalProps>(UpModal) ;

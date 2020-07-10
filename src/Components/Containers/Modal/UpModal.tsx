import * as React from "react"
import * as ReactDOM from "react-dom"
import * as classnames from 'classnames'
import {style, media, keyframes} from 'typestyle' 

import UpSvgIcon from '../../Display/SvgIcon'
import UpDefaultTheme, { withTheme, WithThemeProps,  } from "../../../Common/theming";
import {animateFromRight,animateFromLeft,animateFromTop, animateFromBottom}from '../../../Common/theming/animations'
export type DsiplayMode = 'fromTop' | 'fromBottom' | 'fromRight' | 'fromLeft'
export type ModalPosition = 'half' | 'full' | 'default'
export interface UpModalProps {
    showModal?: boolean;
    header?: string | JSX.Element;
    footer?: JSX.Element;
    html?:string;
    onClose?: () => void;
    displayMode?:  DsiplayMode;
    fullHeight?: boolean;
    modalWidth?: ModalPosition;
    closeIconSize?: number;
    withHeaderSeparator?: boolean;
    closeOnClickOutside?: boolean
}

export interface UpModalState {
    showModal?: boolean;
    modalStatus: string
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

const ModalStyle = (props: WithThemeProps & UpModalProps) =>
  style(
    {
      $nest: {
        "& .up-modal": {
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: 1050,
          overflowY: "auto",
          //-webkit-overflow-scrolling: touch,
          outline: 0,
          opacity: 0,
          visibility: !props.showModal ?"hidden":'visible',
        },
        "& .up-modal-open": {
          overflow: "hidden"
        },
        "& .up-modal.fade": {
          visibility: "hidden",
          transition: ".5s ease-in-out",
          "-webkit-transition": ".5s ease-in-out",
          "-ms-transition": ".5s ease-in-out",
          opacity: 0
        },
        "& .up-modal.in": {
          visibility: "visible",
          transition: ".5s ease-in-out",
          "-webkit-transition": ".5s ease-in-out",
          "-ms-transition": ".5s ease-in-out",
          opacity: 1,
          animationDuration: "1s",
          animationName: appearFromTop
        },
        "& .up-modal.fade .up-modal-dialog": {
          transition: "transform 1s ease-out",
          transform: "translate(0, -25%)"
        },
        "& .up-modal.in .up-modal-dialog": {
          transition: "transform 1s ease-out",
          transform: "translate(0, 0)"
        },
        "& .up-modal-open .modal": {
          overflowX: "hidden",
          overflowY: "auto"
        },
        "& .up-modal-dialog ": {
          position: "relative",
          width: "auto",
          margin: "10px"
        },
        "& .up-modal-content": {
          position: "relative",
          backgroundColor: "#fff",
          backgroundClip: "padding-box",
          border: "1px solid #999",
          borderRadius: "6px",
          outline: 0,
          boxShadow: "0 3px 9px rgba(0, 0, 0, .5)"
        },
        "& .up-modal-backdrop": {
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: 1040,
          backgroundColor: "#000"
        },
        "& .up-modal-backdrop.fade": {
          filter: "alpha(opacity=0)",
          opacity: 0
        },
        "& .up-modal-backdrop.in": {
          filter: "alpha(opacity=50)",
          opacity: 0.5
        },
        "& .up-modal-header": {
          padding: "15px",
          minHeight: "40px",
          borderBottom: `${props.withHeaderSeparator ? "1px solid #e5e5e5":0 }`,
          position: "relative",
          display:'flex',
        },
        "& .up-modal-header .close": {
          marginTop: "-2px",
        },
        "& .up-modal-title": {
          margin: 0,
          lineHeight: 1.42857143,
          fontWeight: 400,
          color: props.theme.colorMap.grey1
        },
        "& .up-modal-body": {
          position: "relative",
          padding: "15px",
          width: "100%",
          height: "100%",
        },
        "& .up-modal-footer": {
          padding: "15px",
          textAlign: "right",
          borderTop: "1px solid #e5e5e5",
        },
        "& .up-modal-footer .btn + .btn": {
          marginBottom: 0,
          marginLeft: "5px"
        },
        "& .up-modal-footer .btn-group .btn + .btn": {
          marginLeft: "-1px"
        },
        "& .up-modal-footer .btn-block + .btn-block": {
          marginLeft: 0
        },
        "& .up-modal-close": {
          fontSize: "21px",
          fontWeight: "bold",
          lineHeight: 1,
          color: "#000",
          position:'absolute',
          right:'50px'
        },
        "& .up-modal-close .up-icon-wrapper": {
          width: `${props.closeIconSize}px`,
          height: `${props.closeIconSize}px`
        },
        "& .up-modal-close .colored svg, & .up-modal-close .colored svg path, & .up-modal-close .colored svg polygon, & .up-modal-close .colored svg polyline": {
          fill: props.theme.colorMap.grey1,
          
        },
        "& .up-modal-close:hover, & .up-modal-close:focus": {
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
        "& .up-modal-header:before": {
          display: "table",
          content: " "
        },
        "& .up-modal-footer:before": {
          display: "table",
          content: " "
        },
        "& .up-modal-header:after": {
          display: "table",
          content: " ",
          clear: "both"
        },
        "& .up-modal-footer:after": {
          display: "table",
          content: " ",
          clear: "both"
        },
        "& .up-modal-disabler": {
          position: "fixed",
          top: 0,
          left: 0,
          background: "#0d0e0e",
          opacity: 0.7,
          width: "10000px",
          height: "10000px",
          zIndex: 1039,
          overflow: "hidden"
        }
      }
    },
   props.modalWidth === 'default' ? media(
      { minWidth: 768 },
      {
        $nest: {
          "& .up-modal-dialog": {
            width: "auto",
            minWidth: "600px",
            maxWidth: "70%",
            margin: "30px auto"
          },
          "& .up-modal-content": {
            boxShadow: "0 5px 15px rgba(0, 0, 0, .5)"
          },
          "& .up-modal-sm": {
            width: "300px"
          }
        }
      }
    ):null,
    props.modalWidth === 'default' ? media(
      { minWidth: 992 },
     
    ):null
  );

  const customModalStyle = (props:UpModalProps & WithThemeProps) => {
    
    const animation = (fade) =>{
      if(fade ==='fadeIn') {
        return  props.displayMode === 'fromRight'
        ? {
            ...animateFromRight(
              0.5,
              'ease',
              fade,
            )
          }
        : props.displayMode === 'fromLeft'
        ? {
            ...animateFromLeft(1, 'ease', fade)
          }
        : props.displayMode === 'fromTop'
        ? { ...animateFromTop(0.5, 'ease', fade) }
        : props.displayMode === 'fromBottom'
        ? { ...animateFromBottom(0.5, 'ease', fade) }
        : {};
      }
    }
     
    return style({
      $nest: {
        '& .up-modal-dialog': {
          width: 'auto',
          minWidth: 'unset',
          maxWidth: `${props.modalWidth === 'half' ? 50 : 100}%`,
          marginTop: props.fullHeight && '0',
          marginLeft: props.fullHeight && '0'
        },
        '& .up-modal-content': {
          display: 'flex',
          flexDirection: 'column',
          height: props.fullHeight && '100vh',
          borderRadius: '0px'
        },
        '& .up-modal-footer': {
          width: '100%'
        },
        '& .up-modal.in': {
          visibility: 'visible',

          ...animation('fadeIn'),
          transition: 'unest',
          transform: 'unset'
        },
        '& .up-modal.in .up-modal-dialog': {
          margin: 0,
          marginLeft:
            props.displayMode === 'fromRight' &&
            (props.modalWidth === 'full'
              ? '0px'
              : props.modalWidth === 'half'
              ? '50%'
              : 'unset'),
          marginRight:
            props.displayMode === 'fromLeft' &&
            (props.modalWidth === 'full'
              ? '0px'
              : props.modalWidth === 'half'
              ? '50%'
              : 'unset'),
          overflowY: 'hidden',
          transition: 'unset',
          transform: 'unset'
        },
        '& .up-modal.fade': {
          margin: 0
        },
        '& .up-modal.fade .up-modal-dialog': {
          margin: 0,
          overflowY: 'hidden',
          maxWidth: props.modalWidth === 'half' && '50%',
          marginLeft:
            props.displayMode === 'fromRight' &&
            (props.modalWidth === 'full'
              ? '0px'
              : props.modalWidth === 'half'
              ? '50%'
              : 'unset'),
          transition: 'unset',
          transform: 'unset'
        }
      }
    });
}

const getStyle = (props: UpModalProps & WithThemeProps)=> {
  return classnames(ModalStyle(props),props.modalWidth !== 'default' && customModalStyle(props))
}

class UpModal extends React.Component<UpModalProps & WithThemeProps, UpModalState>{
    public static defaultProps: UpModalProps & WithThemeProps = {
        showModal: false,
        theme: UpDefaultTheme,
        modalWidth: 'default',
        displayMode: 'fromTop',
        fullHeight: false,
        withHeaderSeparator: true,
    };
  wrapperRef: any

    constructor(p, c) {
        super(p, c);
        this.state = {showModal: this.props.showModal,modalStatus: ''};
        this.wrapperRef = React.createRef();
    }
  componentDidMount() {
    console.log('didMount')
      if(this.props.closeOnClickOutside) document.addEventListener('mousedown', this.handleClickOutside);
  }
  componentWillUnmount () {
      if(this.props.closeOnClickOutside)  document.removeEventListener('mousedown', this.handleClickOutside);
  }
  handleClickOutside= (event)=> {
      if (
        this.props.closeOnClickOutside &&
        this.wrapperRef &&
        !this.wrapperRef.current.contains(event.target)
      ) {
        this.closeModal();
      }
  }
    

    closeModal = () => {
        this.setState({showModal:false, modalStatus:'fade'}) ;
        if(this.props.onClose) {
            this.props.onClose() ;
        }
    }

    onDisabler = (event) => {
        event.stopPropagation() ;
        event.preventDefault() ;
    }

    componentWillReceiveProps(nextProps) {
        this.setState({showModal:nextProps.showModal,modalStatus: nextProps.showModal ? 'in':'fade'}) ;
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
            header = (
              <div className="up-modal-header">
                <h4 className="up-modal-title">
                  {this.props.header}
                </h4>
                <span
                  onClick={this.closeModal}
                  className="up-modal-close">
                  <UpSvgIcon
                  
                    iconName={'close'}></UpSvgIcon>
                </span>
              </div>
            );
        } else {
            header = <div className="up-modal-header">
                {this.props.header}
                <span onClick={this.closeModal} className="up-modal-close">
                    <UpSvgIcon  iconName={'close'}></UpSvgIcon>
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
            <div  className={getStyle(this.props)}> 
                <div className={classnames("up-modal", this.state.modalStatus , appearFromTop)}  id="myModal" role="dialog" aria-labelledby="myModalLabel">
                    <div ref={this.wrapperRef}  className="up-modal-dialog" role="document">
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

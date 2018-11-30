import * as React from 'react';

import { style, keyframes, media } from 'typestyle';

import { color } from 'csx';
import { NestedCSSProperties } from 'typestyle/lib/types';
import * as classnames from 'classnames';
import UpHeading from '../Heading';
import { IntentType, WithThemeProps } from '../../../Common/theming/types';
import { DeviceSmartphones } from '../../../Common/utils/device';
import colorMap from '../../../Common/theming/colorMap';
import defaultTheme, { withTheme } from '../../../Common/theming';
import UpNotification from '../Notification';

const mapIntentColor = (props) => ({
  default :  { fg : colorMap.blue1, bg : color(colorMap.blue1).lighten('60%').toHexString() },
  info :  { fg : colorMap.blue1, bg : color(colorMap.blue1).lighten('60%').toHexString() },
  error : { fg : colorMap.blue1, bg : '#fbeded' },
  danger : { fg : colorMap.blue1, bg : '#fbeded' },
  warning : { fg : colorMap.blue1, bg : color(colorMap.blue1).lighten('50%').toHexString() },
  success : { fg : colorMap.blue1, bg : '#eef7ee' },
});

const mapIntentIconClass = {
  default : 'icon-donut_large',
  info :  'icon-info',
  error : 'icon-Lexclamation',
  danger : 'icon-Lexclamation',
  warning : 'icon-Lwarning',
  success : 'icon-Lcheck',
};

const mapIntentIcon = {
  default : <span className={classnames(mapIntentIconClass['default'])}></span>,
  info : <span className={classnames(mapIntentIconClass['info'])}></span>,
  danger : <span className={classnames(mapIntentIconClass['danger'])}></span>,
  error : <span className={classnames(mapIntentIconClass['error'])}></span>,
  warning : <span className={classnames(mapIntentIconClass['warning'])}></span>,
  success : <span className={classnames(mapIntentIconClass['success'])}></span>,
};

export const getIntentColor = (intent, theme) => {
  return { 
    fg : theme.colorMap[`${intent}Dark`] ||  theme.colorMap.darkGray5, 
    bg : theme.colorMap[`${intent}Light`] || theme.colorMap.white3 
  }
};

export const getIntentIcon = (intent) : React.ReactNode => {
  return  mapIntentIcon.hasOwnProperty(intent) ? mapIntentIcon[intent] : null ;
};

export const getIntentIconClass = (intent) : React.ReactNode => {
  return  mapIntentIconClass.hasOwnProperty(intent) ? mapIntentIconClass[intent] : null ;
};

export const getIntentStyle = (intent, theme) : any => {
  const intentColors = getIntentColor(intent, theme) ;
  return  {
    color : intentColors.fg,
    backgroundColor: intentColors.bg,
    $nest : {
      p : {
        color : intentColors.fg,
      },
    },
  };
};

export const getHoverColor = (hexaColor : string) => color(hexaColor).darken('10%').toHexString();

const unmount = keyframes({
  '0%' : {
    transform: 'translateX(0%)',
    opacity: 1,
  },
  '100%' : {
    transform: 'translateX(50%)',
    opacity: 0,
  },
});
const mount = keyframes({
  '0%' : {
    transform: 'translateX(50%)',
    opacity: 0,
  },
  '100%' : {
    transform: 'translateX(0%)',
    opacity: 1,
  },
});

export const buttonStyle = style({
  fontFamily:'materialinear',
  backgroundColor: 'transparent',
  border: '0px',
  cursor: 'pointer',
  fontSize: '2rem',
  position:'absolute',
  top: '0px',
  right:'2px',
});

const wrapperToastCss : NestedCSSProperties = {
  position: 'fixed',
  fontSize: '1rem',
  bottom: '10px',
  right:'30px',
  borderRadius: '6px',
  zIndex: 999999,
  display: 'flex',
  boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
  textAlign: 'center',
  padding: '0px',
  minWidth: '400px',
  flexDirection: 'column',
  $nest : {
    '.up-toast-body' : {
      padding: '12px',
    },
    '.up-toast-message' : {
      border: '0px',
      marginBottom:'12px',
    },
  },
};

const toastTitleStyle = style({
  padding:'6px',
  borderTopLeftRadius: '6px',
  borderTopRightRadius: '6px',
  width:'100%',
  margin: '0px 0px 10px 0px',
}, media(DeviceSmartphones, {

}));

export interface IToastProps {
  message?: JSX.Element | string ;
  children?: JSX.Element;
  onClose?: () => void;
  intent?: IntentType;
  autoDismissable?:boolean;
  duration?:number;
  title?: string;
  subtitle?: string;
  icon?: JSX.Element;
}

export interface IToastState {
  isVisible: boolean;
  isUnmounting: boolean;
}

class UpToast extends React.Component<IToastProps & WithThemeProps, IToastState> {

  manualClosingTimeout ;
  autoClosingTimeout ;

  public static defaultProps : IToastProps & WithThemeProps = {
    intent: 'default',
    title: 'Notification',
    duration : 5000,
    autoDismissable: true,
    theme: defaultTheme,
  };

  constructor(props, context) {
    super(props, context);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      isVisible: true,
      isUnmounting: false,
    };
  }

  setAutoClosing = () => {
    if (this.autoClosingTimeout) {
      clearTimeout(this.autoClosingTimeout);
    }
    if (this.props.autoDismissable) {
      this.autoClosingTimeout = setTimeout(() => {
        this.handleClose();
      }, this.props.duration);
    }
  }

  public componentDidMount() {
    this.setAutoClosing();
  }

  private handleClose() {
    this.setState({
      isUnmounting: true,
    });

    this.manualClosingTimeout = setTimeout(() => {
      if (this.props.onClose) {
        this.props.onClose();
      }
      this.setState({
        isUnmounting: false,
        isVisible: false,
      });
    }, 100);
  }

  componentDidUpdate() {
    this.setAutoClosing();
  }

  componentWillUnmount() {
    if (this.autoClosingTimeout) {
      clearTimeout(this.autoClosingTimeout);
    }
    if (this.manualClosingTimeout) {
      clearTimeout(this.manualClosingTimeout);
    }
  }

  render() {
    const { isVisible, isUnmounting } = this.state;
    const { message, children, intent, title, theme } = this.props;

    if (!isVisible) {
      return null;
    }

    const wrapperToastStyle = style({
      ...wrapperToastCss,
      animationName : isUnmounting ? unmount : mount,
      animationDuration : ' 1s',
    });

    return (
      <div className={classnames(wrapperToastStyle, getIntentStyle(intent, theme))} >
        <UpHeading tag={'h4'} margin={'none'} className={classnames(toastTitleStyle, 'up-toast-title')}>{title}</UpHeading>
        <div className={classnames(buttonStyle, 'up-toast-close', 'icon-close')} onClick={this.handleClose}></div>
        <div className={'up-toast-body'}>
          {message != null  &&
            <UpNotification iconWidth={6} className={'up-toast-message'} message={message} intent={intent} />
          }
          {children != null  && children}
        </div>
      </div>
    );
  }
}
export default withTheme<IToastProps>(UpToast) ;

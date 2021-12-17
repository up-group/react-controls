import * as React from 'react';
import { style, keyframes } from 'typestyle';
import {
  getFontClassName,
  isNullOrUndef,
  stringIsNullOrEmpty,
  AttributPolice,
  getFontSizeNumber,
} from '../../../Common/utils/helpers';

export interface AlertIconProps {
  IconSize: string | number;
  className?: string;

  AlertNumber: string | number;
  AlertFont?: AttributPolice;
  AlertCircle?: {
    Active: boolean;
    Color?: string;
  };
}
export interface AlertIconState {}
export class AlertIcon extends React.Component<AlertIconProps, AlertIconState> {
  constructor(p, c) {
    super(p, c);
  }

  render() {
    const fontSize: string = (getFontSizeNumber(this.props.IconSize) * 0.6).toString() + 'px';
    const nbChar: number = this.props.AlertNumber.toString().length;

    const styleAlerteG = style({
      position: 'relative',
    });
    let styleAlerteNumber = style({
      position: 'absolute',
      top: '-0.5em',
      right: '-' + (0.3 * nbChar).toString() + 'em',
      fontSize: fontSize,
    });

    if (isNullOrUndef(this.props.AlertFont) === false) {
      this.props.AlertFont.fontSize = fontSize;
      styleAlerteNumber += ' ' + getFontClassName(this.props.AlertFont);
    }

    if (isNullOrUndef(this.props.AlertCircle) === false && this.props.AlertCircle.Active) {
      styleAlerteNumber +=
        ' ' +
        style({
          padding: '0.1em 0.3em',
          borderRadius: '50%',
          backgroundColor: this.props.AlertCircle.Color,
        });
    }

    return (
      <span className={this.props.className + ' ' + styleAlerteG}>
        {this.props.children}
        <span className={styleAlerteNumber}>{this.props.AlertNumber}</span>
      </span>
    );
  }
}

export interface IconProps {
  Color?: string;
  BackgroundColor?: string;
  AvecCercle?: boolean;
  IconSize?: string | number;

  className?: string;
  tabIndex?: number;
  onClick?: (event) => void;
  onMouseDown?: (event) => void;
  onFocus?: (event) => void;
  onBlur?: (event) => void;

  fontWeight?: any;
  fontStyle?: any;
  fontStrech?: any;
  lineHeight?: any;
  letterSpacing?: any;

  AlertNumber?: string | number;
  AlertFont?: AttributPolice;
  AlertCircle?: {
    Active: boolean;
    Color?: string;
  };
}
export interface IconState {}

export enum DirectionEnum {
  Haut,
  Bas,
  Gauche,
  Droite,
}
export interface OrientedIconProps extends IconProps {
  Direction: DirectionEnum;
}
export type OrientedIconState = IconState;

export interface MaterialIconProps extends IconProps {
  IconName: string;
}

export const MaterialinearIcon: React.FunctionComponent<MaterialIconProps> = props => {
  const styleFocus = style({
    $nest: {
      '&:focus': {
        outline: 'none',
      },
    },
  });
  const styleIcone =
    style({
      backgroundColor: props.BackgroundColor ? props.BackgroundColor : '',
      padding: props.AvecCercle ? '5px' : '0',
      borderRadius: props.AvecCercle ? '50%' : '0',
      cursor: props.onClick || props.onMouseDown ? 'pointer' : 'auto',
    }) +
    (props.className ? ' ' + props.className : '') +
    ' ' +
    getFontClassName({
      fontSize: props.IconSize.toString(),
      color: props.Color,
      fontWeight: props.fontWeight,
      fontStyle: props.fontStyle,
      fontStrech: props.fontStrech,
      lineHeight: props.lineHeight,
      letterSpacing: props.letterSpacing,
    });

  const iconeName: string = 'icon-' + props.IconName;

  return (
    <span
      onClick={props.onClick}
      tabIndex={props.tabIndex}
      className={styleFocus}
      onFocus={props.onFocus}
      onBlur={props.onBlur}
      onMouseDown={props.onMouseDown}
    >
      {isNullOrUndef(props.AlertNumber) ? (
        <span className={iconeName + ' ' + styleIcone} />
      ) : (
        <AlertIcon
          IconSize={props.IconSize}
          className={styleIcone}
          AlertNumber={props.AlertNumber}
          AlertCircle={props.AlertCircle}
          AlertFont={props.AlertFont}
        >
          <span className={iconeName} />
        </AlertIcon>
      )}
      {props.children}
    </span>
  );
};

export class IconInformations extends React.Component<IconProps, IconState> {
  static defaultProps = {
    Color: '#7a756f',
    BackgroundColor: '#ffffff',
    IconSize: '16px',
    AvecCercle: false,
  };
  constructor(p, c) {
    super(p, c);
  }
  render() {
    return <MaterialinearIcon {...this.props} IconName="Lclipboard-text" />;
  }
}
export class IconInfos extends React.Component<IconProps, IconState> {
  static defaultProps = {
    IconSize: '12px',
    AvecCercle: false,
    backgroundColor: '#ffffff',
    Color: '#c5d0de',
  };
  constructor(p, c) {
    super(p, c);
  }
  render() {
    return <MaterialinearIcon {...this.props} IconName="info" />;
  }
}
export class IconSuccess extends React.Component<IconProps, IconState> {
  static defaultProps = {
    IconSize: '12px',
    AvecCercle: false,
    backgroundColor: '#05c591',
    Color: '#ffffff',
  };
  constructor(p, c) {
    super(p, c);
  }
  render() {
    return <MaterialinearIcon {...this.props} IconName="check_circle" />;
  }
}
export class IconError extends React.Component<IconProps, IconState> {
  static defaultProps = {
    IconSize: '12px',
    AvecCercle: false,
    backgroundColor: '#c50e1f',
    Color: '#ffffff',
  };
  constructor(p, c) {
    super(p, c);
  }
  render() {
    const className =
      (stringIsNullOrEmpty(this.props.className) ? '' : this.props.className + ' ') +
      style({
        display: 'inline-block',
        transform: 'rotateZ(0.125turn)',
      });
    return <MaterialinearIcon className={className} {...this.props} IconName="add_circle" />;
  }
}
export class IconEdit extends React.Component<IconProps, IconState> {
  static defaultProps = {
    Color: '#f39100',
    BackgroundColor: '#ffffff',
    IconSize: '24px',
    AvecCercle: false,
    lineHeight: 1.33,
  };
  constructor(p, c) {
    super(p, c);
  }
  render() {
    return <MaterialinearIcon {...this.props} IconName="mode_edit" />;
  }
}
export class IconCarte extends React.Component<IconProps, IconState> {
  static defaultProps = {
    Color: '#f39100',
    BackgroundColor: '#ffffff',
    IconSize: '16px',
    AvecCercle: false,
  };
  constructor(p, c) {
    super(p, c);
  }
  render() {
    return <MaterialinearIcon {...this.props} IconName="room" />;
  }
}
export class IconEntourage extends React.Component<IconProps, IconState> {
  static defaultProps = {
    Color: '#ffffff',
    BackgroundColor: '#f1c40f',
    IconSize: '10px',
    AvecCercle: true,
    lineHeight: 1.2,
  };
  constructor(p, c) {
    super(p, c);
  }
  render() {
    return <MaterialinearIcon {...this.props} IconName="Lusers2" />;
  }
}
export class IconCorrespondant extends React.Component<IconProps, IconState> {
  static defaultProps = {
    Color: '#ffffff',
    BackgroundColor: '#26d5ae',
    IconSize: '10px',
    AvecCercle: true,
    lineHeight: 1.2,
  };
  constructor(p, c) {
    super(p, c);
  }
  render() {
    return <MaterialinearIcon {...this.props} IconName="Lfirst-aid" />;
  }
}
export class IconSalarie extends React.Component<IconProps, IconState> {
  static defaultProps = {
    Color: '#ffffff',
    BackgroundColor: '#7ad032',
    IconSize: '10px',
    AvecCercle: true,
    lineHeight: 1.2,
  };
  constructor(p, c) {
    super(p, c);
  }
  render() {
    return <MaterialinearIcon {...this.props} IconName="Lfirst-aid" />;
  }
}
export class IconPatient extends React.Component<IconProps, IconState> {
  static defaultProps = {
    Color: '#ffffff',
    BackgroundColor: '#4a90e2',
    IconSize: '10px',
    AvecCercle: true,
    lineHeight: 1.2,
  };
  constructor(p, c) {
    super(p, c);
  }
  render() {
    return <MaterialinearIcon {...this.props} IconName="Luser" />;
  }
}
export class IconUtilisateur extends React.Component<IconProps, IconState> {
  static defaultProps = {
    Color: '#ffffff',
    BackgroundColor: '#7ad032',
    IconSize: '10px',
    AvecCercle: true,
    lineHeight: 1.2,
  };
  constructor(p, c) {
    super(p, c);
  }
  render() {
    return <MaterialinearIcon {...this.props} IconName="Luser" />;
  }
}
export class IconAjout extends React.Component<IconProps, IconState> {
  static defaultProps = {
    Color: '#f39100',
    BackgroundColor: '#ffffff',
    IconSize: '24px',
    AvecCercle: false,
    lineHeight: 1.33,
  };
  constructor(p, c) {
    super(p, c);
  }
  render() {
    return <MaterialinearIcon {...this.props} IconName="add" />;
  }
}
export class IconWarning extends React.Component<IconProps, IconState> {
  static defaultProps = {
    Color: '#f39100',
    BackgroundColor: '#ffffff',
    IconSize: '28px',
    AvecCercle: false,
  };
  constructor(p, c) {
    super(p, c);
  }
  render() {
    return <MaterialinearIcon {...this.props} IconName="warning" />;
  }
}
export class IconOpenInNew extends React.Component<IconProps, IconState> {
  static defaultProps = {
    Color: '#f39100',
    BackgroundColor: '#ffffff',
    IconSize: '16px',
    AvecCercle: false,
  };
  constructor(p, c) {
    super(p, c);
  }
  render() {
    return <MaterialinearIcon {...this.props} IconName="open_in_new" />;
  }
}
export class IconChevron extends React.Component<OrientedIconProps, OrientedIconState> {
  static defaultProps = {
    Color: '#ccc8c5',
    BackgroundColor: '#ffffff',
    IconSize: '24px',
    AvecCercle: false,
  };
  constructor(p, c) {
    super(p, c);
  }
  render() {
    let iconName = 'keyboard_arrow_';
    switch (this.props.Direction) {
      case DirectionEnum.Haut:
        iconName += 'up';
        break;
      case DirectionEnum.Bas:
        iconName += 'down';
        break;
      case DirectionEnum.Gauche:
        iconName += 'left';
        break;
      case DirectionEnum.Droite:
        iconName += 'right';
        break;
    }
    return <MaterialinearIcon {...this.props} IconName={iconName} />;
  }
}
export class IconConversation extends React.Component<IconProps, IconState> {
  static defaultProps = {
    Color: '#7a756f',
    BackgroundColor: '#ffffff',
    IconSize: '44px',
    AvecCercle: false,
    lineHeight: 1.36,
  };
  constructor(p, c) {
    super(p, c);
  }
  render() {
    return <MaterialinearIcon {...this.props} IconName="Lbubbles" />;
  }
}
export class IconCheckBox_Check extends React.Component<IconProps, IconState> {
  static defaultProps = {
    Color: '#7a756f',
    BackgroundColor: '#ffffff',
    IconSize: '16px',
    AvecCercle: false,
  };
  constructor(p, c) {
    super(p, c);
  }
  render() {
    return <MaterialinearIcon {...this.props} IconName="check_box" />;
  }
}
export class IconCheckBox_Empty extends React.Component<IconProps, IconState> {
  static defaultProps = {
    Color: '#7a756f',
    BackgroundColor: '#ffffff',
    IconSize: '16px',
    AvecCercle: false,
  };
  constructor(p, c) {
    super(p, c);
  }
  render() {
    return <MaterialinearIcon {...this.props} IconName="check_box_outline_blank" />;
  }
}
export class IconPlaning extends React.Component<IconProps, IconState> {
  static defaultProps = {
    Color: '#3f3b37',
    BackgroundColor: '#ffffff',
    IconSize: '16px',
    AvecCercle: false,
  };
  constructor(p, c) {
    super(p, c);
  }
  render() {
    return <MaterialinearIcon {...this.props} IconName="Lclock3" />;
  }
}
export class IconActe extends React.Component<IconProps, IconState> {
  static defaultProps = {
    Color: '#3f3b37',
    BackgroundColor: '#ffffff',
    IconSize: '16px',
    AvecCercle: false,
  };
  constructor(p, c) {
    super(p, c);
  }
  render() {
    return <MaterialinearIcon {...this.props} IconName="Ldocument" />;
  }
}
export class IconCommentaire extends React.Component<IconProps, IconState> {
  static defaultProps = {
    Color: '#3f3b37',
    BackgroundColor: '#ffffff',
    IconSize: '16px',
    AvecCercle: false,
  };
  constructor(p, c) {
    super(p, c);
  }
  render() {
    return <MaterialinearIcon {...this.props} IconName="Lbubble-text" />;
  }
}
export class IconDeconnexion extends React.Component<IconProps, IconState> {
  static defaultProps = {
    Color: '#4a4a4a',
    IconSize: '20px',
    AvecCercle: false,
    lineHeight: 1.14,
  };
  constructor(p, c) {
    super(p, c);
  }
  render() {
    return <MaterialinearIcon {...this.props} IconName="Lpower-switch" />;
  }
}
export class IconCarteContour extends React.Component<IconProps, IconState> {
  static defaultProps = {
    Color: '#ffffff',
    BackgroundColor: '#3f3b37',
    IconSize: '14px',
    AvecCercle: false,
    lineHeight: 1.14,
  };
  constructor(p, c) {
    super(p, c);
  }
  render() {
    return <MaterialinearIcon {...this.props} IconName="Lmap-marker" />;
  }
}
export class IconRecherche extends React.Component<IconProps, IconState> {
  static defaultProps = {
    Color: '#7a756f',
    BackgroundColor: '#3f3b37',
    IconSize: '24px',
    AvecCercle: false,
    lineHeight: 1.33,
  };
  constructor(p, c) {
    super(p, c);
  }
  render() {
    return <MaterialinearIcon {...this.props} IconName="search" />;
  }
}
export class IconVerrou extends React.Component<IconProps, IconState> {
  static defaultProps = {
    IconSize: '14px',
    AvecCercle: false,
  };
  constructor(p, c) {
    super(p, c);
  }
  render() {
    return <MaterialinearIcon {...this.props} IconName="Llock" />;
  }
}
export class IconAlertes extends React.Component<IconProps, IconState> {
  static defaultProps = {
    IconSize: '14px',
    AvecCercle: false,
  };
  constructor(p, c) {
    super(p, c);
  }
  render() {
    return <MaterialinearIcon {...this.props} IconName="Lbell" />;
  }
}
export class IconMaison extends React.Component<IconProps, IconState> {
  static defaultProps = {
    Color: '7a756f',
    BackgroundColor: '#ffffff',
    IconSize: '14px',
    AvecCercle: false,
  };
  constructor(p, c) {
    super(p, c);
  }
  render() {
    return <MaterialinearIcon {...this.props} IconName="Lhome" />;
  }
}
export class IconVieuxTelephone extends React.Component<IconProps, IconState> {
  static defaultProps = {
    Color: '7a756f',
    BackgroundColor: '#ffffff',
    IconSize: '14px',
    AvecCercle: false,
  };
  constructor(p, c) {
    super(p, c);
  }
  render() {
    return <MaterialinearIcon {...this.props} IconName="Ltelephone2" />;
  }
}
export class IconRepresentantLegal extends React.Component<IconProps, IconState> {
  static defaultProps = {
    Color: '7a756f',
    BackgroundColor: '#ffffff',
    IconSize: '14px',
    AvecCercle: false,
  };
  constructor(p, c) {
    super(p, c);
  }
  render() {
    return <MaterialinearIcon {...this.props} IconName="Luser-lock" />;
  }
}
export class IconPersonneConfiance extends React.Component<IconProps, IconState> {
  static defaultProps = {
    Color: '7a756f',
    BackgroundColor: '#ffffff',
    IconSize: '14px',
    AvecCercle: false,
  };
  constructor(p, c) {
    super(p, c);
  }
  render() {
    return <MaterialinearIcon {...this.props} IconName="people_outline" />;
  }
}
export class IconSerrure extends React.Component<IconProps, IconState> {
  static defaultProps = {
    Color: '7a756f',
    BackgroundColor: '#ffffff',
    IconSize: '14px',
    AvecCercle: false,
  };
  constructor(p, c) {
    super(p, c);
  }
  render() {
    return <MaterialinearIcon {...this.props} IconName="Lkey-hole" />;
  }
}
export class IconProcheAidant extends React.Component<IconProps, IconState> {
  static defaultProps = {
    Color: '7a756f',
    BackgroundColor: '#ffffff',
    IconSize: '14px',
    AvecCercle: false,
  };
  constructor(p, c) {
    super(p, c);
  }
  render() {
    return <MaterialinearIcon {...this.props} IconName="Lusers-add" />;
  }
}
export class IconCalendrier extends React.Component<IconProps, IconState> {
  static defaultProps = {
    Color: '#7a756f',
    BackgroundColor: '#ffffff',
    IconSize: '14px',
    AvecCercle: false,
  };
  constructor(p, c) {
    super(p, c);
  }
  render() {
    return <MaterialinearIcon {...this.props} IconName="Lcalendar-full" />;
  }
}
export class IconOeil extends React.Component<IconProps, IconState> {
  static defaultProps = {
    Color: '#f39100',
    BackgroundColor: '#ffffff',
    IconSize: '24px',
    AvecCercle: false,
  };
  constructor(p, c) {
    super(p, c);
  }
  render() {
    return <MaterialinearIcon {...this.props} IconName="visibility" />;
  }
}
export class IconRenouveler extends React.Component<IconProps, IconState> {
  static defaultProps = {
    Color: '#f39100',
    BackgroundColor: '#ffffff',
    IconSize: '24px',
    AvecCercle: false,
  };
  render() {
    return <MaterialinearIcon {...this.props} IconName="sync" />;
  }
}

export class IconLswaLink extends React.Component<IconProps, IconState> {
  render() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const imgLswa = require('./logoLswa_' + this.props.IconSize + 'px.png');
    const styleCurseur = style({
      cursor: this.props.onClick ? 'pointer' : 'auto',
    });
    return (
      <span
        className={styleCurseur}
        onClick={this.props.onClick}
        tabIndex={this.props.tabIndex}
        onFocus={this.props.onFocus}
        onBlur={this.props.onBlur}
        onMouseDown={this.props.onMouseDown}
      >
        {/* <img src={imgLswa} /> */}
        {isNullOrUndef(this.props.AlertNumber) ? (
          <img src={imgLswa} />
        ) : (
          <AlertIcon
            IconSize={this.props.IconSize}
            AlertNumber={this.props.AlertNumber}
            AlertCircle={this.props.AlertCircle}
            AlertFont={this.props.AlertFont}
          >
            <img src={imgLswa} />
          </AlertIcon>
        )}
        {this.props.children}
      </span>
    );
  }
}
export class IconPercevalLink extends React.Component<IconProps, IconState> {
  render() {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const imgPerceval = require('./logoPerceval_' + this.props.IconSize + 'px.png');
    const styleCurseur = style({
      cursor: this.props.onClick ? 'pointer' : 'auto',
    });
    return (
      <span
        className={styleCurseur}
        onClick={this.props.onClick}
        tabIndex={this.props.tabIndex}
        onFocus={this.props.onFocus}
        onBlur={this.props.onBlur}
        onMouseDown={this.props.onMouseDown}
      >
        {/* <img src={imgPerceval} /> */}
        {isNullOrUndef(this.props.AlertNumber) ? (
          <img src={imgPerceval} />
        ) : (
          <AlertIcon
            IconSize={this.props.IconSize}
            AlertNumber={this.props.AlertNumber}
            AlertCircle={this.props.AlertCircle}
            AlertFont={this.props.AlertFont}
          >
            <img src={imgPerceval} />
          </AlertIcon>
        )}
        {this.props.children}
      </span>
    );
  }
}

export type IconLoadingProps = IconProps;
export interface IconLoadingState extends IconState {
  NewSize: number;
}
export class IconLoading extends React.Component<IconLoadingProps, IconLoadingState> {
  static defaultProps = {
    Color: '#3f3b37',
    backgroundColor: '#ffffff',
    IconSize: '14px',
    AvecCercle: false,
  };

  private _relativeIconSize: boolean;

  constructor(p, c) {
    super(p, c);
    this._relativeIconSize = false;
    this.state = {
      NewSize: null,
    };
  }

  componentDidMount() {
    if (this._relativeIconSize) {
      const ref: any = this.refs.iconLoad;
      const hauteur: number | string = ref.parentNode.clientHeight;
      this.setState({
        NewSize: (getFontSizeNumber(hauteur) * getFontSizeNumber(this.props.IconSize)) / 100,
      });
    }
  }

  render() {
    let tailleIcon: number = getFontSizeNumber(this.state.NewSize === null ? this.props.IconSize : this.state.NewSize);
    const largeurCercle: number = tailleIcon / 5.75;

    const ratioTaille: number = tailleIcon / 7;
    const temps: number = ratioTaille / Math.sqrt(ratioTaille); // Parce que pourquoi pas, ça fait jolie comme ça

    tailleIcon -= largeurCercle * 2;

    const animation = keyframes({
      from: {
        transform: 'rotate(0deg)',
      },
      to: {
        transform: 'rotate(360deg)',
      },
    });

    let styleG = style({
      borderRadius: '50%',
      height: tailleIcon,
      width: tailleIcon,
      border: largeurCercle + 'px solid ' + this.props.Color,
      borderRight: largeurCercle + 'px solid ' + this.props.BackgroundColor,
      backgroundColor: this.props.BackgroundColor,
      //animation: animation + " " + temps.toString() + "s linear infinite",
      //"-webkit-animation": animation + " " + temps.toString() + "s linear infinite",
      display: 'inline-block',
      boxSizing: 'initial',
      margin: this.props.AvecCercle ? '5px' : '0',
      cursor: this.props.onClick ? 'pointer' : 'auto',
    });

    if (this.props.className) {
      styleG += ' ' + this.props.className;
    }

    return (
      <span
        ref="iconLoad"
        onClick={this.props.onClick}
        tabIndex={this.props.tabIndex}
        onFocus={this.props.onFocus}
        onBlur={this.props.onBlur}
        onMouseDown={this.props.onMouseDown}
      >
        {/* <span className={styleG} /> */}

        {isNullOrUndef(this.props.AlertNumber) ? (
          <span className={styleG} />
        ) : (
          <AlertIcon
            IconSize={this.props.IconSize}
            AlertNumber={this.props.AlertNumber}
            AlertCircle={this.props.AlertCircle}
            AlertFont={this.props.AlertFont}
          >
            <span className={styleG} />
          </AlertIcon>
        )}

        {this.props.children}
      </span>
    );
  }
}

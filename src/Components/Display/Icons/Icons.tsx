import * as React from "react"
import { style } from "typestyle";
import { getFontClassName, isNullOrUndef, stringIsNullOrEmpty, AttributPolice, getFontSizeNumber } from "../../../Common/utils/helpers";
import { keyframes } from "../../../Common/theming/themedComponents";


export interface AlertIconProps {
    IconSize: string | number;
    className?: string;

    AlertNumber: string | number;
    AlertFont?: AttributPolice;
    AlertCircle?: {
        Active: boolean;
        Color?: string;
    }
}
export interface AlertIconState {
}
export class AlertIcon extends React.Component<AlertIconProps, AlertIconState> {
    constructor(p, c) {
        super(p, c);
    }

    render() {
        var fontSize: string = (getFontSizeNumber(this.props.IconSize) * 0.6).toString() + "px";
        var nbChar: number = this.props.AlertNumber.toString().length;

        var styleAlerteG = style({
            position: "relative",
        });
        var styleAlerteNumber =  style({
            position: "absolute",
            top: "-0.5em",
            right: "-" + (0.3 * nbChar).toString() + "em",
            fontSize: fontSize,
        });

        if (isNullOrUndef(this.props.AlertFont) === false) {
            this.props.AlertFont.fontSize = fontSize;
            styleAlerteNumber += " " + getFontClassName(this.props.AlertFont);
        }

        if (isNullOrUndef(this.props.AlertCircle) === false && this.props.AlertCircle.Active) {
            styleAlerteNumber += " " + style({
                padding: "0.1em 0.3em",
                borderRadius: "50%",
                backgroundColor: this.props.AlertCircle.Color,
            });
        }

        return <span className={this.props.className + " " + styleAlerteG} >
            {this.props.children}
            <span className={styleAlerteNumber} >{this.props.AlertNumber}</span>
        </span>
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
    }
}
export interface IconState {
}

export enum DirectionEnum {
    Haut,
    Bas,
    Gauche,
    Droite,
}
export interface OrientedIconProps extends IconProps {
    Direction: DirectionEnum;
}
export interface OrientedIconState extends IconState {
}


export interface MaterialIconProps extends IconProps {
    IconName: string;
}
export interface MaterialIconState extends IconState {
}
export class MaterialinearIcon extends React.Component<MaterialIconProps, MaterialIconState> {
    constructor(p, c) {
        super(p, c);
    }
    render() {
        var styleFocus = style({
            $nest: {
                "&:focus": {
                    outline: "none",
                },
            },
        });
        var styleIcone = style({
            backgroundColor: this.props.BackgroundColor ? this.props.BackgroundColor : "",
            padding: this.props.AvecCercle ? "5px" : "0",
            borderRadius: this.props.AvecCercle ? "50%" : "0",
            cursor: this.props.onClick || this.props.onMouseDown ? "pointer" : "auto",
        }) + (this.props.className ? " " + this.props.className : "") + " " 
            + getFontClassName({ fontSize: this.props.IconSize.toString(), color: this.props.Color,
                fontWeight: this.props.fontWeight, fontStyle: this.props.fontStyle, fontStrech: this.props.fontStrech,
                lineHeight: this.props.lineHeight, letterSpacing: this.props.letterSpacing, });

        var iconeName: string = "icon-" + this.props.IconName;

        return <span onClick={this.props.onClick} tabIndex={this.props.tabIndex} className={styleFocus}
                onFocus={this.props.onFocus} onBlur={this.props.onBlur} onMouseDown={this.props.onMouseDown} >
            { isNullOrUndef(this.props.AlertNumber) ?
                <span className={iconeName + " " + styleIcone} /> :
                <AlertIcon IconSize={this.props.IconSize} className={styleIcone}
                        AlertNumber={this.props.AlertNumber} AlertCircle={this.props.AlertCircle} AlertFont={this.props.AlertFont} >
                    <span className={iconeName} />
                </AlertIcon>
            }
            {this.props.children}
        </span>;
    }
}

export class IconInformations extends React.Component<IconProps, IconState> {
    static defaultProps = {
        Color: "#7a756f",
        BackgroundColor: "#ffffff",
        IconSize: "16px",
        AvecCercle: false,
    }
    constructor(p, c) {
        super(p, c);
    }
    render() {
        return <MaterialinearIcon {...this.props} IconName="Lclipboard-text" />;
    }
}
export class IconInfos extends React.Component<IconProps, IconState> {
    static defaultProps = {
        IconSize: "12px",
        AvecCercle: false,
        backgroundColor: "#ffffff",
        Color: "#c5d0de"
    }
    constructor(p, c) {
        super(p, c);
    }
    render() {
        return <MaterialinearIcon {...this.props} IconName="info" />;
    }
}
export class IconSuccess extends React.Component<IconProps, IconState> {
    static defaultProps = {
        IconSize: "12px",
        AvecCercle: false,
        backgroundColor: "#05c591",
        Color: "#ffffff"
    }
    constructor(p, c) {
        super(p, c);
    }
    render() {
        return <MaterialinearIcon {...this.props} IconName="check_circle" />;
    }
}
export class IconError extends React.Component<IconProps, IconState> {
    static defaultProps = {
        IconSize: "12px",
        AvecCercle: false,
        backgroundColor: "#c50e1f",
        Color: "#ffffff"
    }
    constructor(p, c) {
        super(p, c);
    }
    render() {
        var className = (stringIsNullOrEmpty(this.props.className) ? "" : (this.props.className + " ")) + style({
            display: "inline-block",
            transform: "rotateZ(0.125turn)"
        });
        return <MaterialinearIcon className={className} {...this.props} IconName="add_circle" />;
    }
}
export class IconEdit extends React.Component<IconProps, IconState> {
    static defaultProps = {
        Color: "#f39100",
        BackgroundColor: "#ffffff",
        IconSize: "24px",
        AvecCercle: false,
        lineHeight: 1.33,
    }
    constructor(p, c) {
        super(p, c);
    }
    render() {
        return <MaterialinearIcon {...this.props} IconName="mode_edit" />;
    }
}
export class IconCarte extends React.Component<IconProps, IconState> {
    static defaultProps = {
        Color: "#f39100",
        BackgroundColor: "#ffffff",
        IconSize: "16px",
        AvecCercle: false,
    }
    constructor(p, c) {
        super(p, c);
    }
    render() {
        return <MaterialinearIcon {...this.props} IconName="room" />;
    }
}
export class IconEntourage extends React.Component<IconProps, IconState> {
    static defaultProps = {
        Color: "#ffffff",
        BackgroundColor: "#f1c40f",
        IconSize: "10px",
        AvecCercle: true,
        lineHeight: 1.2,
    }
    constructor(p, c) {
        super(p, c);
    }
    render() {
        return <MaterialinearIcon {...this.props} IconName="Lusers2" />; 
    }
}
export class IconCorrespondant extends React.Component<IconProps, IconState> {
    static defaultProps = {
        Color: "#ffffff",
        BackgroundColor: "#26d5ae",
        IconSize: "10px",
        AvecCercle: true,
        lineHeight: 1.2,
    }
    constructor(p, c) {
        super(p, c);
    }
    render() {
        return <MaterialinearIcon {...this.props} IconName="Lfirst-aid" />; 
    }
}
export class IconPatient extends React.Component<IconProps, IconState> {
    static defaultProps = {
        Color: "#ffffff",
        BackgroundColor: "#4a90e2",
        IconSize: "10px",
        AvecCercle: true,
        lineHeight: 1.2,
    }
    constructor(p, c) {
        super(p, c);
    }
    render() {
        return <MaterialinearIcon {...this.props} IconName="Luser" />; 
    }
}
export class IconUtilisateur extends React.Component<IconProps, IconState> {
    static defaultProps = {
        Color: "#ffffff",
        BackgroundColor: "#7ad032",
        IconSize: "10px",
        AvecCercle: true,
        lineHeight: 1.2,
    }
    constructor(p, c) {
        super(p, c);
    }
    render() {
        return <MaterialinearIcon {...this.props} IconName="Luser" />; 
    }
}
export class IconAjout extends React.Component<IconProps, IconState> {
    static defaultProps = {
        Color: "#f39100",
        BackgroundColor: "#ffffff",
        IconSize: "24px",
        AvecCercle: false,
        lineHeight: 1.33,
    }
    constructor(p, c) {
        super(p, c);
    }
    render() {
        return <MaterialinearIcon {...this.props} IconName="add" />;
    }
}
export class IconWarning extends React.Component<IconProps, IconState> {
    static defaultProps = {
        Color: "#f39100",
        BackgroundColor: "#ffffff",
        IconSize: "28px",
        AvecCercle: false,
    }
    constructor(p, c) {
        super(p, c);
    }
    render() {
        return <MaterialinearIcon {...this.props} IconName="warning" />;
    }
}
export class IconOpenInNew extends React.Component<IconProps, IconState> {
    static defaultProps = {
        Color: "#f39100",
        BackgroundColor: "#ffffff",
        IconSize: "16px",
        AvecCercle: false,
    }
    constructor(p, c) {
        super(p, c);
    }
    render() {
        return <MaterialinearIcon {...this.props} IconName="open_in_new" />;
    }
}
export class IconChevron extends React.Component<OrientedIconProps, OrientedIconState> {
    static defaultProps = {
        Color: "#ccc8c5",
        BackgroundColor: "#ffffff",
        IconSize: "24px",
        AvecCercle: false,
    }
    constructor(p, c) {
        super(p, c);
    }
    render() {
        var iconName: string = "keyboard_arrow_";
        switch (this.props.Direction) {
            case DirectionEnum.Haut: iconName += "up"; break;
            case DirectionEnum.Bas: iconName += "down"; break;
            case DirectionEnum.Gauche: iconName += "left"; break;
            case DirectionEnum.Droite: iconName += "right"; break;
        }
        return <MaterialinearIcon {...this.props} IconName={iconName} />;
    }
}
export class IconConversation extends React.Component<IconProps, IconState> {
    static defaultProps = {
        Color: "#7a756f",
        BackgroundColor: "#ffffff",
        IconSize: "44px",
        AvecCercle: false,
        lineHeight: 1.36,
    }
    constructor(p, c) {
        super(p, c);
    }
    render() {
        return <MaterialinearIcon {...this.props} IconName="Lbubbles" />;
    }
}
export class IconCheckBox_Check extends React.Component<IconProps, IconState> {
    static defaultProps = {
        Color: "#7a756f",
        BackgroundColor: "#ffffff",
        IconSize: "16px",
        AvecCercle: false,
    }
    constructor(p, c) {
        super(p, c);
    }
    render() {
        return <MaterialinearIcon {...this.props} IconName="check_box" />;
    }
}
export class IconCheckBox_Empty extends React.Component<IconProps, IconState> {
    static defaultProps = {
        Color: "#7a756f",
        BackgroundColor: "#ffffff",
        IconSize: "16px",
        AvecCercle: false,
    }
    constructor(p, c) {
        super(p, c);
    }
    render() {
        return <MaterialinearIcon {...this.props} IconName="check_box_outline_blank" />;
    }
}
export class IconPlaning extends React.Component<IconProps, IconState> {
    static defaultProps = {
        Color: "#3f3b37",
        BackgroundColor: "#ffffff",
        IconSize: "16px",
        AvecCercle: false,
    }
    constructor(p, c) {
        super(p, c);
    }
    render() {
        return <MaterialinearIcon {...this.props} IconName="Lclock3" />;
    }
}
export class IconActe extends React.Component<IconProps, IconState> {
    static defaultProps = {
        Color: "#3f3b37",
        BackgroundColor: "#ffffff",
        IconSize: "16px",
        AvecCercle: false,
    }
    constructor(p, c) {
        super(p, c);
    }
    render() {
        return <MaterialinearIcon {...this.props} IconName="Ldocument" />;
    }
}
export class IconCommentaire extends React.Component<IconProps, IconState> {
    static defaultProps = {
        Color: "#3f3b37",
        BackgroundColor: "#ffffff",
        IconSize: "16px",
        AvecCercle: false,
    }
    constructor(p, c) {
        super(p, c);
    }
    render() {
        return <MaterialinearIcon {...this.props} IconName="Lbubble-text" />;
    }
}
export class IconDeconnexion extends React.Component<IconProps, IconState> {
    static defaultProps = {
        Color: "#4a4a4a",
        IconSize: "20px",
        AvecCercle: false,
        lineHeight: 1.14,
    }
    constructor(p, c) {
        super(p, c);
    }
    render() {
        return <MaterialinearIcon {...this.props} IconName="Lpower-switch" />;
    }
}
export class IconCarteContour extends React.Component<IconProps, IconState> {
    static defaultProps = {
        Color: "#ffffff",
        BackgroundColor: "#3f3b37",
        IconSize: "14px",
        AvecCercle: false,
        lineHeight: 1.14,
    }
    constructor(p, c) {
        super(p, c);
    }
    render() {
        return <MaterialinearIcon {...this.props} IconName="Lmap-marker" />;
    }
}
export class IconRecherche extends React.Component<IconProps, IconState> {
    static defaultProps = {
        Color: "#7a756f",
        BackgroundColor: "#3f3b37",
        IconSize: "24px",
        AvecCercle: false,
        lineHeight: 1.33,
    }
    constructor(p, c) {
        super(p, c);
    }
    render() {
        return <MaterialinearIcon {...this.props} IconName="search" />;
    }
}
export class IconVerrou extends React.Component<IconProps, IconState> {
    static defaultProps = {
        IconSize: "14px",
        AvecCercle: false,
    }
    constructor(p, c) {
        super(p, c);
    }
    render() {
        return <MaterialinearIcon {...this.props} IconName="Llock" />;
    }
}
export class IconAlertes extends React.Component<IconProps, IconState> {
    static defaultProps = {
        IconSize: "14px",
        AvecCercle: false,
    }
    constructor(p, c) {
        super(p, c);
    }
    render() {
        return <MaterialinearIcon {...this.props} IconName="Lbell" />;
    }
}
export class IconMaison extends React.Component<IconProps, IconState> {
    static defaultProps = {
        Color: "7a756f",
        BackgroundColor: "#ffffff",
        IconSize: "14px",
        AvecCercle: false,
    }
    constructor(p, c) {
        super(p, c);
    }
    render() {
        return <MaterialinearIcon {...this.props} IconName="Lhome" />;
    }
}
export class IconVieuxTelephone extends React.Component<IconProps, IconState> {
    static defaultProps = {
        Color: "7a756f",
        BackgroundColor: "#ffffff",
        IconSize: "14px",
        AvecCercle: false,
    }
    constructor(p, c) {
        super(p, c);
    }
    render() {
        return <MaterialinearIcon {...this.props} IconName="Ltelephone2" />;
    }
}
export class IconRepresentantLegal extends React.Component<IconProps, IconState> {
    static defaultProps = {
        Color: "7a756f",
        BackgroundColor: "#ffffff",
        IconSize: "14px",
        AvecCercle: false,
    }
    constructor(p, c) {
        super(p, c);
    }
    render() {
        return <MaterialinearIcon {...this.props} IconName="Luser-lock" />;
    }
}
export class IconPersonneConfiance extends React.Component<IconProps, IconState> {
    static defaultProps = {
        Color: "7a756f",
        BackgroundColor: "#ffffff",
        IconSize: "14px",
        AvecCercle: false,
    }
    constructor(p, c) {
        super(p, c);
    }
    render() {
        return <MaterialinearIcon {...this.props} IconName="people_outline" />;
    }
}
export class IconSerrure extends React.Component<IconProps, IconState> {
    static defaultProps = {
        Color: "7a756f",
        BackgroundColor: "#ffffff",
        IconSize: "14px",
        AvecCercle: false,
    }
    constructor(p, c) {
        super(p, c);
    }
    render() {
        return <MaterialinearIcon {...this.props} IconName="Lkey-hole" />;
    }
}
export class IconProcheAidant extends React.Component<IconProps, IconState> {
    static defaultProps = {
        Color: "7a756f",
        BackgroundColor: "#ffffff",
        IconSize: "14px",
        AvecCercle: false,
    }
    constructor(p, c) {
        super(p, c);
    }
    render() {
        return <MaterialinearIcon {...this.props} IconName="Lusers-add" />;
    }
}


export class IconLswaLink extends React.Component<IconProps, IconState> {
    constructor(p, c) {
        super(p, c);
    }
    render() {
        var imgLswa = require("./logoLswa_" + this.props.IconSize + "px.png");
        var styleCurseur = style({
            cursor: this.props.onClick ? "pointer" : "auto",
        });
        return <span className={styleCurseur} onClick={this.props.onClick} tabIndex={this.props.tabIndex} 
                onFocus={this.props.onFocus} onBlur={this.props.onBlur} onMouseDown={this.props.onMouseDown} >
            {/* <img src={imgLswa} /> */}            
            { isNullOrUndef(this.props.AlertNumber) ?
                <img src={imgLswa} /> :
                <AlertIcon IconSize={this.props.IconSize} AlertNumber={this.props.AlertNumber}
                        AlertCircle={this.props.AlertCircle} AlertFont={this.props.AlertFont} >
                    <img src={imgLswa} />
                </AlertIcon>
            }
            {this.props.children}
        </span>;
    }
}
export class IconPercevalLink extends React.Component<IconProps, IconState> {
    constructor(p, c) {
        super(p, c);
    }
    render() {
        var imgPerceval = require("./logoPerceval_" + this.props.IconSize + "px.png");
        var styleCurseur = style({
            cursor: this.props.onClick ? "pointer" : "auto",
        });
        return <span className={styleCurseur} onClick={this.props.onClick} tabIndex={this.props.tabIndex} 
                onFocus={this.props.onFocus} onBlur={this.props.onBlur} onMouseDown={this.props.onMouseDown} >
            {/* <img src={imgPerceval} /> */}
            { isNullOrUndef(this.props.AlertNumber) ?
                <img src={imgPerceval} /> :
                <AlertIcon IconSize={this.props.IconSize} AlertNumber={this.props.AlertNumber}
                        AlertCircle={this.props.AlertCircle} AlertFont={this.props.AlertFont} >
                    <img src={imgPerceval} />
                </AlertIcon>
            }
            {this.props.children}
        </span>;
    }
}


export interface IconLoadingProps extends IconProps {    
}
export interface IconLoadingState extends IconState {
    NewSize: number;
}
export class IconLoading extends React.Component<IconLoadingProps, IconLoadingState> {
    static defaultProps = {
        Color: "#3f3b37",
        backgroundColor: "#ffffff",
        IconSize: "14px",
        AvecCercle: false,
    }

    private _relativeIconSize: boolean;

    constructor(p, c) {
        super(p, c);
        this._relativeIconSize = false;
        this.state = {
            NewSize: null,
        }
    }

    componentDidMount() {
        if (this._relativeIconSize) {
            var ref: any = this.refs.iconLoad;
            var hauteur: number | string = ref.parentNode.clientHeight;
            this.setState({ NewSize: getFontSizeNumber(hauteur) * getFontSizeNumber(this.props.IconSize) / 100 });
        }
    }

    render() {
        var tailleIcon: number = getFontSizeNumber(this.state.NewSize === null ? this.props.IconSize : this.state.NewSize);
        var largeurCercle: number = tailleIcon / 5.75;

        var ratioTaille: number = tailleIcon / 7;
        var temps: number = ratioTaille / Math.sqrt(ratioTaille); // Parce que pourquoi pas, ça fait jolie comme ça

        tailleIcon -= largeurCercle * 2;

        const animation = keyframes`
            0% {
            transform: rotate(0deg);
            }
            100% {
            transform: rotate(360deg);
            }
        `;

        var styleG = style({
            borderRadius: "50%",
            height: tailleIcon,
            width: tailleIcon,
            border: largeurCercle + "px solid " + this.props.Color,
            borderRight: largeurCercle + "px solid " + this.props.BackgroundColor,
            backgroundColor: this.props.BackgroundColor,
            animation: animation + " " + temps.toString() + "s linear infinite",
            "-webkit-animation": animation + " " + temps.toString() + "s linear infinite",
            display: "inline-block",
            boxSizing: "initial",
            margin: this.props.AvecCercle ? "5px" : "0",
            cursor: this.props.onClick ? "pointer" : "auto",
        });

        if (this.props.className) {
            styleG += " " + this.props.className;
        }

        return <span ref="iconLoad" onClick={this.props.onClick} tabIndex={this.props.tabIndex} 
                onFocus={this.props.onFocus} onBlur={this.props.onBlur} onMouseDown={this.props.onMouseDown} > 
            {/* <span className={styleG} /> */}
            
            { isNullOrUndef(this.props.AlertNumber) ?
                <span className={styleG} /> :
                <AlertIcon IconSize={this.props.IconSize} AlertNumber={this.props.AlertNumber} 
                        AlertCircle={this.props.AlertCircle} AlertFont={this.props.AlertFont} >
                    <span className={styleG} />
                </AlertIcon>
            } 
           
            {this.props.children}
        </span>
    }
}
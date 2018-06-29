import * as React from "react"
import { style } from "typestyle";
import { getFontClassName } from "../../../Common/utils/helpers";


export interface IconProps {
    Color?: string;
    BackgroundColor?: string;
    IconSize?: string | number;
    AvecCercle?: boolean;

    className?: string;
    onClick?: () => void;

    fontWeight?: any;
    fontStyle?: any;
    fontStrech?: any;
    lineHeight?: any;
    letterSpacing?: any;
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
        var className = "icon-" + this.props.IconName + " " 
            + getFontClassName({ fontSize: this.props.IconSize.toString(), color: this.props.Color, fontWeight: this.props.fontWeight, 
                fontStyle: this.props.fontStyle, fontStrech: this.props.fontStrech, lineHeight: this.props.lineHeight, letterSpacing: this.props.letterSpacing, }) + " " 
            + style({
                backgroundColor: this.props.BackgroundColor,
                padding: this.props.AvecCercle ? "5px" : "0",
                borderRadius: this.props.AvecCercle ? "50%" : "0",
                cursor: this.props.onClick ? "pointer" : "auto",
            });

        if (this.props.className) {
            className += " " + this.props.className;
        }
        return <span onClick={this.props.onClick} >
            <span className={className} />
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
        Color: "#ffffff",
        BackgroundColor: "#3f3b37",
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


export class IconLswaLink extends React.Component<IconProps, IconState> {
    constructor(p, c) {
        super(p, c);
    }
    render() {
        var imgLswa = require("./logoLswa_" + this.props.IconSize + "px.png");
        var styleCurseur = style({
            cursor: this.props.onClick ? "pointer" : "auto",
        });
        return <span className={styleCurseur} onClick={this.props.onClick} >
            <img src={imgLswa} />
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
        return <span className={styleCurseur} onClick={this.props.onClick} >
            <img src={imgPerceval} />
            {this.props.children}
        </span>;
    }
}
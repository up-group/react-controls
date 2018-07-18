import * as React from "react"
import { style } from "typestyle";
import { getFontClassName, isNullOrUndef, stringIsNullOrEmpty } from "../../../Common/utils/helpers";
import { keyframes } from "../../../Common/theming/themedComponents";


export interface IconProps {
    Color?: string;
    BackgroundColor?: string;
    IconSize?: string | number;
    AvecCercle?: boolean;

    className?: string;
    onClick?: (event) => void;

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


export class IconLoading extends React.Component<IconProps, IconState> {
    static defaultProps = {
        Color: "#000000",
        BackgroundColor: "#ffffff",
        IconSize: "14px",
        AvecCercle: false,
    }

    constructor(p, c) {
        super(p, c);
    }

    getFontSizeNumber = (size: number | string): number => {
        if (typeof(size) === "number") {
            return size;
        }
        var regex = / *([0-9]*)(.*)/i.exec(size);
        var taille: number = parseInt(regex[1], 10);
        var unite: string = regex[2];

        if (isNullOrUndef(taille)) {
            return 0;
        }
        if (stringIsNullOrEmpty(unite)) {
            return taille;
        }

        switch (unite) {
            // static units
            // 1in = 96px = 2.54cm = 72pt = 6pc
            case "px":
                return taille;
            case "in": 
                return taille * 96;
            case "cm": 
                return taille * 96 / 2.54;
            case "mm":
                return taille * 96 / 0.254;
            case "pt":
                return taille * 96 / 72;
            case "pc": 
                return taille * 96 / 6;

            // relative units
            case "em":
            case "ex":
            case "ch":
            case "rem":
            case "vw":
            case "vh":
            case "vmin":
            case "vmax":
            case "%":
                // pas encore géré
                break;
        }

        return taille;
    }

    render() {
        var tailleIcon: number = this.getFontSizeNumber(this.props.IconSize);
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
            margin: this.props.AvecCercle ? "5px" : "0",
            cursor: this.props.onClick ? "pointer" : "auto",
        });

        return <span onClick={this.props.onClick} > 
            <span className={styleG} />
            <span className={this.props.className} >{this.props.children}</span>
        </span>
    }
}
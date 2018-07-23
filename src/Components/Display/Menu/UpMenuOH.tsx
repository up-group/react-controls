import * as React from "react"
import { style } from "typestyle"

import { getFontClassName, stringIsNullOrEmpty, isNullOrUndef, addZeroBeforeNumber } from "../../../Common/utils/helpers";
import { IconChevron, IconUtilisateur, IconDeconnexion, DirectionEnum, IconVerrou, IconAlertes } from "../Icons/Icons";
import { Scrollbars } from 'react-custom-scrollbars';
import UpHover from '../../Containers/Hover/UpHover';


var UP = require("./up.png");
var widthLeftMenu: number | string = 300;
var heightTopBar: number | string = 60;


function getWidthDroite(): string {
    var tailleBody: number = window.innerWidth;

    if (typeof widthLeftMenu === "number") {
        return (tailleBody - widthLeftMenu).toString() + "px";
    }

    var taille: number = parseInt(widthLeftMenu);
    var unite: string = widthLeftMenu.substring(taille.toString().length);

    switch (unite) {
        case "%":
            return (100 - taille).toString() + "%";

        case "px":
            return (tailleBody - taille).toString() + "px";

        default:
            return (tailleBody - taille).toString() + "px";
    }
}
function getHeightContent(): string {
    var tailleBody: number = window.innerHeight;

    if (typeof heightTopBar === "number") {
        return (tailleBody - heightTopBar).toString() + "px";
    }

    var taille: number = parseInt(heightTopBar);
    var unite: string = heightTopBar.substring(taille.toString().length);

    switch (unite) {
        case "%":
            return (100 - taille).toString() + "%";

        case "px":
            return (tailleBody - taille).toString() + "px";

        default:
            return (tailleBody - taille).toString() + "px";
    }
}


class branchIdHelper {
    static toArray(id: string) {
        return id.split(/(\d{1,})/).filter(x => { return x !== "" });
    }

    static getLevel(id: string) {
        return this.toArray(id).length / 2;
    }

    static hasChild(id: string) {
        return id.substr(id.length - 1, 1) === "*";
    }
}

export interface Utilisateur { 
    Nom: string; 
    DerniereConnexion: Date;
    NomBinome: string;
    onChangeMdpClick: () => void; 
    Alertes: { 
        NonLues: number; 
        onClick: () => void 
    } 
}


var menuOh = style({
    backgroundColor: "#f5f5f5",
    overflow: "hidden",
    height:/*"100%"*/window.innerHeight,
    width: /*"100%"*/window.innerWidth,
});
var rightSpace = style({
    position: "fixed",
    top: 0,
    right: 0,
    left: widthLeftMenu,
    height: "100%",
    transition: "left 0.5s",
});
var rightSpaceCollapse = style({
    left: 60,
    transition: "left 0.5s",
});
var leftSpace = style({
    zIndex: 1,
    position: "fixed",
    left: 0,
    top: 0,
    height: "100%",
    backgroundColor: "#4e5b59",
    alignItems: "center",
    $nest: {
        '& i': {
            cursor: "pointer",
        },
        '& a': {
            textDecoration: "none",
        },
    },
    width: widthLeftMenu,
    transition: "width 0.5s",
});
var leftSpaceCollapse = style({
    width: 60,
    transition: "width 0.5s",
});
var styleTopbar = style({
    width: "100%",
    right: 0,
    top: 0,
    position: "relative",

    //width: getWidthDroite(),
    height: heightTopBar,
    //padding: "16px 32px 16px 60px",
    backgroundColor: "#ffffff",
    textAlign: "right",
});
var styleContenu = style({
    minHeight: 250,
    //position: "relative",
    left: widthLeftMenu,
    right: 0,
    //width: getWidthDroite(),
    top: 0,
    height: getHeightContent(),
});
var styleUserExpand = style({
    position: "absolute",
    top: "60px",
    right: "128px",
    overflow: "visible",
});


export interface MenuItemData {
    icon?: string;
    title: JSX.Element | string;
    uri: string;
    isVisible: boolean;
    childMenuItems?: MenuItemData[];
    styleType?: "button";
}


export interface UpMenuProps {
    menuItems: MenuItemData[];
    onMenuClick?: (uri: string) => boolean | void;
    onHomeClick?: () => void
    Recherche: JSX.Element;
    Antennes: JSX.Element;
    Utilisateur: Utilisateur;
    onDeconnexionClick: () => void;
    selectMenu?: (menu: MenuItemData) => boolean;
}

export interface UpMenuState {
    selectedBranchId?: string;
    collapseActive: boolean;
    collapse: boolean;
    hoverMenu: boolean;
}

export default class UpMenuOH extends React.Component<UpMenuProps, UpMenuState> {
    constructor(p, c) {
        super(p, c);
        this.state = {
            selectedBranchId: "",
            collapse: false,
            hoverMenu: false,
            collapseActive: false,
        };
    }

    render() {
        var right = rightSpace + (this.state.collapseActive ? " " + rightSpaceCollapse : "")

        return <div className={menuOh} >
            <LeftMenu
                onHover={this.onHover}
                onCollapseChange={this.onCollapseChange} collapse={this.state.collapse} selectedBranchId={this.state.selectedBranchId} onBranchClick={this.onBranchClick}
                onHomeClick={this.props.onHomeClick} menuItems={this.props.menuItems} onMenuClick={this.props.onMenuClick} />

            <div className={right}>
                <TopMenu Recherche={this.props.Recherche} Antennes={this.props.Antennes}
                    Utilisateur={this.props.Utilisateur} onDeconnexionClick={this.props.onDeconnexionClick} />

                <div className={styleContenu} >
                    {this.props.children}
                </div>
            </div>
        </div>;
    }

    onCollapseChange = () => {
        if (this.state.collapseActive) {
            widthLeftMenu = 300;
            this.setState({ collapseActive: false, collapse: false });
        } else {
            widthLeftMenu = 70;
            this.setState({ collapseActive: true, collapse: true });
        }
    }

    onHover = (hover: boolean) => {
        if (this.state.collapseActive) {
            widthLeftMenu = hover ? 300 : 70;
            console.log(hover)
            this.setState({ collapse: !hover });
        }
    }

    componentDidUpdate() {
        if (this.props.selectMenu != null) {
            var idSelected = this.findSelected(this.props.menuItems);
            if (this.state.selectedBranchId !== idSelected && idSelected != null) {
                this.setState({ selectedBranchId: idSelected });
            }
        }
    }

    private findSelected(MenuItemData: MenuItemData[]): string {
        for (var i = 0; i < MenuItemData.length; i++) {
            var localId = i + (MenuItemData[i].childMenuItems != null && MenuItemData[i].childMenuItems.length != 0 ? "*" : "-");
            if (this.props.selectMenu(MenuItemData[i]) == true) {
                return localId;
            } else {
                if (MenuItemData[i].childMenuItems != null && MenuItemData[i].childMenuItems.length != 0) {
                    var child = this.findSelected(MenuItemData[i].childMenuItems);
                    if (child != null) {
                        return localId + child.toString();
                    }
                }
            }
        }
        return null;
    }

    private onBranchClick = (branchId: string) => {
        this.setState({ selectedBranchId: branchId, });
    }
}


export interface LeftMenuProps {
    onBranchClick: (branchId: string) => void;
    menuItems: MenuItemData[];
    onHomeClick?: () => void;
    onMenuClick?: (uri: string) => boolean | void;
    selectedBranchId?: string;
    onCollapseChange: () => void;
    onHover: (hover: boolean) => void;
    collapse: boolean;
}

export interface LeftMenuState {
}

export class LeftMenu extends React.Component<LeftMenuProps, LeftMenuState> {
    constructor(p, c) {
        super(p, c);
        this.state = {
            selectedBranchId: "",
        };
    }

    render() {
        var img_space = style({
            //width: "100%",
            height: 60,
            margin: 24
        });
        var img_style = style({
            //width: "100%",
            maxHeight: "100%",
            maxWidth: "100%"
            //width: this.props.collapse ? 30 : 60
        });
        var div_style = style({
            height: 45,
            paddingLeft: 25,
            color: "#FFF",
            fontSize: 25
        });
        var firstSub = style({
            marginLeft: 24
        });

        var left = leftSpace + (this.props.collapse ? " " + leftSpaceCollapse : "");

        // <input type="button" value="TTT" onClick={this.props.onCollapseChange} />

        return <aside className={left} >
            <div className={img_space}>
                <a onClick={this.props.onHomeClick} >
                    <img className={img_style} src={UP} ></img>
                </a>
            </div>
            <div className={div_style} >
                <span className={"icon-Lmenu"} onClick={this.props.onCollapseChange} />
            </div>
            <UpHover onHoverChange={this.props.onHover}>
                <div className={firstSub} >
                    {<SubMenu
                        open={false}
                        onBranchClick={this.props.onBranchClick}
                        branchId={""}
                        selectedBranchId={this.props.selectedBranchId}
                        onMenuClick={this.props.onMenuClick}
                        childMenuItems={this.props.menuItems}
                        top={false}
                        collapse={this.props.collapse}
                    />}
                </div>
            </UpHover>
        </aside>
    }
}


export interface TopMenuProps {
    Recherche: JSX.Element;
    Antennes: JSX.Element;
    Utilisateur: Utilisateur;
    onDeconnexionClick: () => void;
}

export interface TopMenuState {
    UserExpand: boolean;
}

export class TopMenu extends React.Component<TopMenuProps, TopMenuState> {
    constructor(p, c) {
        super(p, c);
        this.state = {
            UserExpand: false,
        };
    }

    onUserClick = () => {
        this.setState({ UserExpand: true, });
    }
    onUserBlur = () => {
        this.setState({ UserExpand: false, });
    }

    render() {
        var styleGauche = style({
            width: "25%",
            height: "40px",
            float: "left",
            marginTop: "10px",
            marginLeft: "60px",
        });
        var styleDroite = getFontClassName({ fontSize: "14px", color: "#4a4a4a", }) + " " + style({
            marginTop: "16px",
            marginRight: "60px",
            display: "inline-block",
        });
        var styleInfosTexte = style({
            marginRight: "48px",
            $nest: {
                "& > i": {
                    fontStyle: "normal",
                    margin: "0 8px",
                },
                "& *:focus": {
                    outline: "none",
                },
            },
        });

        return <div className={styleTopbar} >
            { isNullOrUndef(this.props.Antennes) ? null :
                <div className={styleGauche} >
                    {this.props.Antennes}
                </div>
            }

            { isNullOrUndef(this.props.Recherche) ? null :
                <div className={styleGauche} >
                    {this.props.Recherche}
                </div>
            }

            <span className={styleDroite} >
                { isNullOrUndef(this.props.Utilisateur) ? null :
                    <IconUtilisateur IconSize="14px" lineHeight={1.14} AvecCercle={false} Color="#4a4a4a" BackgroundColor="#ffffff" >
                        <span className={styleInfosTexte} >
                            <i>{this.props.Utilisateur.Nom}</i>
                            <IconChevron Direction={DirectionEnum.Bas} Color="#4a4a4a" BackgroundColor="#ffffff" IconSize="14px" 
                                onClick={this.onUserClick} tabIndex={-1} onBlur={this.onUserBlur} />
                                
                            { this.state.UserExpand ? <UserExpand Utilisateur={this.props.Utilisateur} /> : null }
                        </span>
                    </IconUtilisateur>
                }

                <IconDeconnexion onClick={this.props.onDeconnexionClick} />
            </span>
        </div>
    }
}


export interface UserExpandProps {
    Utilisateur: Utilisateur;
}

export interface UserExpandState {
}

export class UserExpand extends React.Component<UserExpandProps, UserExpandState> {
    constructor(p, c) {
        super(p, c);
    }

    private writeDateTime = (dateTime: Date): string => {
        if (isNullOrUndef(dateTime)) {
            return null;
        }
        return addZeroBeforeNumber(dateTime.getDate(), 2) + "/" 
            + addZeroBeforeNumber(dateTime.getMonth(), 2) + "/" 
            + addZeroBeforeNumber(dateTime.getFullYear(), 4) + " "
            + addZeroBeforeNumber(dateTime.getHours(), 2) + ":" 
            + addZeroBeforeNumber(dateTime.getMinutes(), 2) + ":" 
            + addZeroBeforeNumber(dateTime.getSeconds(), 2);
    }

    render() {
        var styleG = style({
            padding: "16px 16px 6px",
            zIndex: 9998,
            backgroundColor: "#ffffff",
            borderRadius: "4px",
            boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            border: "1px solid #eaeae9",
            textAlign: "left",
        });
        var styleChangeMdp = style({
            cursor: "pointer",
            marginLeft: "8px",
        });
        var styleAlertes = style({
            cursor: isNullOrUndef(this.props.Utilisateur.Alertes) || isNullOrUndef(this.props.Utilisateur.Alertes.onClick) ? "auto" : "pointer",
            marginLeft: "8px",
        });

        var derniereCo: string = this.writeDateTime(this.props.Utilisateur.DerniereConnexion);
        var nbAlerte: string = isNullOrUndef(this.props.Utilisateur.Alertes.NonLues) ? null :
            isNaN(this.props.Utilisateur.Alertes.NonLues) ? null :
                this.props.Utilisateur.Alertes.NonLues <= 0 ? null : 
                    this.props.Utilisateur.Alertes.NonLues > 99 ? "99+" : 
                        this.props.Utilisateur.Alertes.NonLues.toString();

        return <div className={styleUserExpand + " " + styleG} >
            { derniereCo === null ? null :
                <p>Dernière connexion : {derniereCo}</p> 
            }
            { stringIsNullOrEmpty(this.props.Utilisateur.NomBinome) ? null :
                <p>Votre binôme : {this.props.Utilisateur.NomBinome}</p>
            }
            { isNullOrUndef(this.props.Utilisateur.onChangeMdpClick) ? null :
                <p >
                    <IconVerrou onMouseDown={this.props.Utilisateur.onChangeMdpClick} >
                        <span className={styleChangeMdp} > Changer votre mot de passe</span>
                    </IconVerrou>
                </p>
            }
            { isNullOrUndef(this.props.Utilisateur.Alertes) ? null :
                <p>
                    <IconAlertes AlertNumber={nbAlerte} AlertCircle={{Active: true, Color: "#f44336"}} 
                            AlertFont={{fontSize: "8px", color: "#ffffff"}} // la taille de la police va ici être écrasée par l'alerte
                            onMouseDown={this.props.Utilisateur.Alertes.onClick} >
                        <span className={styleAlertes} > Alertes utilisateur</span>
                    </IconAlertes>
                </p>
            }
        </div>;
    }
}


export interface SubMenuProps {
    childMenuItems?: MenuItemData[];
    onMenuClick: (uri: string) => void;
    open: boolean;
    onBranchClick: (branchId: string) => void;
    branchId: string;
    selectedBranchId: string;
    top: boolean;
    collapse: boolean;
}

export interface SubMenuState {
}

export class SubMenu extends React.Component<SubMenuProps, SubMenuState> {
    constructor(p, c) {
        super(p, c);
        this.state = {};
    }

    startsWith(str: string, search: string) {
        return str.substr(0, search.length) === search;
    }

    render() {
        if (this.props.childMenuItems == null || this.props.childMenuItems.length == 0) {
            return null;
        }

        var srcMenu = this.props.childMenuItems;

        var lis = srcMenu.map((v, i, arr) => {
            var localId = this.props.branchId + i + (v.childMenuItems != null && v.childMenuItems.length != 0 ? "*" : "-");

            return <SubItems
                sibling={arr}
                top={this.props.top}
                icon={v.icon}
                selectedBranchId={this.props.selectedBranchId}
                branchId={localId}
                onBranchClick={this.props.onBranchClick}
                key={i}
                open={this.props.open}
                onMenuClick={this.props.onMenuClick}
                uri={v.uri}
                title={v.title}
                isVisible={v.isVisible}
                childMenuItems={v.childMenuItems}
                collapse={this.props.collapse}
                styleType={v.styleType}
            />
        });

        if (this.props.branchId === "") {
            // var scroll = style({
            //     overflow: "auto",
            //     height: window.innerHeight - 150,
            // });

            return <Scrollbars style={{ height: window.innerHeight - 150 }}>
                {lis}
            </Scrollbars>;
        } else {
            return <div>
                {lis}
            </div>;
        }
    }

    private getMenuItemfromId(branchid: string, menu: MenuItemData[]) {
        var first = branchid.substr(0, 2);
        var rest = branchid.substr(2, branchid.length);

        var find = menu.filter((x) => { return x.isVisible === true })[first.substr(0, 1)].childMenuItems;

        if (find.length == 0) {
            return menu;
        }

        if (rest == "") {
            return find
        }
        return this.getMenuItemfromId(rest, find);
    }

    get levelselectedBranchId() {
        return branchIdHelper.getLevel(this.props.selectedBranchId);
    }

    get selectedBranchIdHasChild() {
        return branchIdHelper.hasChild(this.props.selectedBranchId);
    }
}


export interface SubItemsProps extends MenuItemData {
    onMenuClick: (uri: string) => boolean | void;
    open: boolean;
    onBranchClick: (branchId: string) => void;
    branchId: string;
    selectedBranchId: string;
    top: boolean;
    sibling: MenuItemData[];
    collapse: boolean;
}

export interface SubItemsState {
    active: boolean;
}

export class SubItems extends React.Component<SubItemsProps, SubItemsState> {
    constructor(p, c) {
        super(p, c);
        this.state = { active: false };
    }

    startsWith(str: string, search: string) {
        return str.substr(0, search.length) === search;
    }

    render() {
        var branch = style({
            paddingLeft: this.level == 1 ? 0 : this.level == 2 ? 60 : 20,// 20 + (this.hasIcon ? 0 : 0),/*+ (this.level * 10),*/
            display: this.props.isVisible === false ? "none" : "inherit",
            position: "relative",
            // $nest: {
            // }
        })
        var link = style({
            color: this.isMenuSelected ? "#f39100" : this.props.top ? "#FFF" : "#FFF",
            display: this.props.collapse ? "none" : "initial",
            paddingLeft: this.level == 1 ? 15 : 0,
        });
        var branchItem = style({
            marginTop: this.props.styleType === "button" ? 15 : 0,
            fontSize: 14,
            fontWeight: 500,
            fontStyle: "normal",
            fontStretch: "normal",
            //lineHeight: 2.29,
            height: this.level === 1 ? 42 : 32,
            letterSpacing: "normal",
            color: this.isMenuSelected ? "#f39100" : this.props.top ? "#FFF" : "#FFF",
            $nest: {
                ["& a"]: {
                    color: this.isMenuSelected ? "#f39100" : this.props.top ? "#FFF" : "#FFF",
                    //display: this.props.collapse ? "none" : "initial",
                },
            }
        });
        var meunuIcon = style({
            color: "#FFF",
            marginTop: 3,
            //position: this.props.collapse ? "relative" : "absolute",
            position: "relative",

            fontSize: 25,
            display: this.hasIcon ? "initial" : "none",
        });
        var innnerSubmenu = style({
            display: this.props.collapse ? "none" : "initial",
        });

        if (this.props.collapse) {
            return <div className={branch} data-branch={this.props.branchId} >
                <div className={branchItem} onClick={this.onClick} >
                    <span className={meunuIcon} >
                        <i className={this.props.icon} onClick={this.onClick} />
                    </span>
                    {this.textContentColapse}
                </div>
            </div>
        }

        var content = this.props.title

        if (this.props.styleType === "button") {
            content = <span
                    style={{
                        paddingRight: 53,
                        paddingBottom: 12,
                        paddingLeft: 53,
                        paddingTop: 12,
                        borderRadius: 30,
                        borderColor: this.isMenuSelected ? "#f39100" : this.props.top ? "#FFF" : "#FFF",
                        borderWidth: 1,
                        borderStyle: "solid",
                    }}
                >
                {this.props.title}
            </span>
        }

        return <div className={branch} data-branch={this.props.branchId} >
            <div className={branchItem} onClick={this.onClick} >
                <span className={meunuIcon} >
                    <i className={this.props.icon} onClick={this.onClick} />
                </span>
                <a className={link} onClick={this.onClickA} href={this.props.uri} >
                    {content}
                </a>
            </div>
            <div className={innnerSubmenu} >
                {this.anyChild && (this.state.active || this.isMenuSelected) ?
                    <SubMenu
                        top={this.props.top}
                        onBranchClick={this.props.onBranchClick}
                        branchId={this.props.branchId}
                        selectedBranchId={this.props.selectedBranchId}
                        open={this.props.open}
                        onMenuClick={this.props.onMenuClick}
                        childMenuItems={this.props.childMenuItems}
                        collapse={this.props.collapse}
                    /> : null}
            </div>
        </div>
    }

    get textContentColapse() {
        if (this.props.icon != null && this.props.icon != "") {
            return null;
        }
        if (this.props.title != null && typeof (this.props.title) === "string") {
            return <span
                    style={{
                        paddingRight: 10,
                        paddingBottom: 5,
                        paddingLeft: 10,
                        paddingTop: 5,
                        borderRadius: 30,
                        borderColor: this.isMenuSelected ? "#f39100" : this.props.top ? "#FFF" : "#FFF",
                        borderWidth: 1,
                        borderStyle: "solid"
                    }}
                >
                { this.props.title.substr(0, 2) }
            </span>
        }

        return null;
    }

    get hasIcon() {
        return this.props.icon != null && this.props.icon != "";
    }
    get level() {
        return branchIdHelper.getLevel(this.props.branchId);
    }

    LightenDarkenColor = (col: string, amt: number) => {
        var usePound = false;

        if (col[0] == "#") {
            col = col.slice(1);
            usePound = true;
        }

        var num = parseInt(col, 16);

        var r = (num >> 16) + amt;

        if (r > 255) r = 255;
        else if (r < 0) r = 0;

        var b = ((num >> 8) & 0x00FF) + amt;

        if (b > 255) b = 255;
        else if (b < 0) b = 0;

        var g = (num & 0x0000FF) + amt;

        if (g > 255) g = 255;
        else if (g < 0) g = 0;

        return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
    }

    get anyChild() {
        var child = this.props.childMenuItems == null ? [] : this.props.childMenuItems.filter(x => x.isVisible == true && x.title != null);
        return child.length != 0;
    }

    get isMenuSelected() {
        if (this.props.top === false) {
            return this.props.selectedBranchId.substr(0, this.props.branchId.length) === this.props.branchId;
        }

        return this.props.selectedBranchId === this.props.branchId;
    }
    
    onClick = (e) => {
        if (this.props.selectedBranchId.substr(0, this.props.branchId.length) === this.props.branchId) {
            this.SendBranchClick();
        } else {
            this.SendBranchClick();
        }

        this.setState({ active: false });
        e.preventDefault();
        e.stopPropagation();
        return false;
    }

    onClickA = (e) => {
        this.SendBranchClick();
        var value = this.props.onMenuClick(this.props.uri);
        e.preventDefault();
    }

    private SendBranchClick = () => {
        this.props.onBranchClick(this.props.branchId);
    }

    private SendBranchParentClick = () => {
        var idParent = this.props.branchId.substr(0, this.props.branchId.length - 2);//this.props.branchId.substr(0, this.props.branchId.lastIndexOf("-"));
        this.props.onBranchClick(idParent);
    }
}
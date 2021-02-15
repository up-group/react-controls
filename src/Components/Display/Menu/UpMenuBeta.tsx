
import * as React from "react";
import SvgIcon from "../SvgIcon/index";
import { style } from "typestyle";
import Text from "../../Inputs/Input/index";
import "./sources/up.png";
import { toRem } from "../../../Common/theming/utils";

//Types
export interface UpMenuProps {
    username?: string;
    menuItems: MenuItemData[];
    topMenuItems?: TopMenuItemProps[];
    onMenuClick?: (uri: string) => boolean | void;
    onDeconnexionClick?: () => void;
    onReglagesClick?: () => void;
    onUpClick?: () => void;
    onHomeClick?: () => void;
};

export interface UpMenuState {
    open: boolean;
};
//Fin types

export default class UpMenuBeta extends React.Component<UpMenuProps, UpMenuState>{
    constructor(p, c) {
        super(p, c);
        this.state = {
            open: false,
        };
    }

    clickCollapse = () => {
        this.setState({ open: !this.state.open })
    }

    render() {
        const styleContentWrapper = style({
            minHeight: 250
        });

        const styleContent = style({
            margin: "auto",
        });

        return (
            <div className="">
                <div >
                    <TopMenu
                        username={this.props.username}
                        open={this.state.open}
                        childMenuItems={this.props.topMenuItems}
                        onUpClick={this.props.onUpClick}
                        onHomeClick={this.props.onHomeClick}
                        onReglagesClick={this.props.onReglagesClick}
                        onDeconnexionClick={this.props.onDeconnexionClick}
                    />
                    <LeftMenu
                        clickCollapse={this.clickCollapse}
                        open={this.state.open}
                        menuItems={this.props.menuItems}
                        onMenuClick={this.props.onMenuClick}
                    />
                    <div className={styleContentWrapper} >
                        <section className={styleContent} >
                            {this.props.children}
                        </section>
                    </div>
                </div>
            </div>
        )
    }
};

//Types
export interface SubMenuProps {
    childMenuItems?: MenuItemData[];
    onMenuClick: (uri: string) => void;
    open: boolean;
    onBranchClick: (branchId: string) => void;
    branchId: string;
    selectedBranchId: string;
}

export interface SubMenuState { };
//Fin types

export class SubMenu extends React.Component<SubMenuProps, SubMenuState>{

    constructor(p, c) {
        super(p, c);
        this.state = {};
    }

    render() {
        if (this.props.childMenuItems == null || this.props.childMenuItems.length == 0) {
            return null;
        }

        const list = style({
            backgroundColor: "#003845",
            listStyle: "none",
            $nest: {
                '& ul': {
                    paddingLeft: toRem(40),
                },
                '& a': {
                    $nest: {
                        '&:hover': {
                        },

                    }
                },

            }
        })

        const lis = this.props.childMenuItems
            .filter((v) => {
                return v.isVisible !== false
            })
            .map((v, i) => {
                const localId = (this.props.branchId != null ? this.props.branchId + "-" : "") + i;

                return (
                    <SubItems
                        selectedBranchId={this.props.selectedBranchId}
                        branchId={localId}
                        onBranchClick={this.props.onBranchClick}
                        key={i}
                        open={this.props.open}
                        onMenuClick={this.props.onMenuClick}
                        uri={v.uri} title={v.title}
                        isVisible={v.isVisible}
                        isSelected={v.isSelected}
                        icon={v.icon}
                        childMenuItems={v.childMenuItems} />
                )
            })

        return (
            <div className={list}>
                {lis}
            </div>
        )
    }
};

//Types
export interface SubItemsProps extends MenuItemData {
    onMenuClick: (uri: string) => boolean | void;
    open: boolean;
    onBranchClick: (branchId: string) => void;
    branchId: string;
    selectedBranchId: string;
};

export interface SubItemsState {
    active: boolean;
};
//Fin types

export class SubItems extends React.Component<SubItemsProps, SubItemsState>{

    constructor(p, c) {
        super(p, c);
        this.state = { active: false };
    }

    get anyChild() {
        return this.props.childMenuItems != null && this.props.childMenuItems.length != 0;
    }

    get isMenuSelected() {
        return this.props.isSelected || this.props.selectedBranchId.substr(0, this.props.branchId.length) === this.props.branchId;
    }

    onClick = (e) => {
        this.props.onBranchClick(this.props.branchId);
        this.setState({ active: !this.state.active });
        e.preventDefault();
        e.stopPropagation();
        return false;
    }

    onClickA = (e) => {
        this.props.onBranchClick(this.props.branchId);
        const value = this.props.onMenuClick(this.props.uri);

        if (value === false) {
            e.preventDefault();
        }
    }

    render() {
        const liElment = style({
            paddingLeft: toRem(20),
            position: "relative"
        })

        const inlie = style({
            display: "inline-block",
            $nest: {
                "i": {
                    display: "inline",
                    position: "absolute",
                    fontSize: toRem(25),
                    fontWeight: 900,
                    cursor: "pointer"
                }
            }
        })

        const inliei = style({
            display: "inline",
            position: "absolute",
            top: 0,
            left: 0,
            fontSize: toRem(25),
            fontWeight: 900,
            cursor: "pointer"
        });

        const liLine = style({
            padding: toRem(5),
            color: "#8aa4af",
            $nest: {
                ["&:hover"]: {
                    color: "white",
                    backgroundColor: "#194B57"
                },
                ["&:hover > a"]: {
                    color: "white",
                },
                ["&:hover > i"]: {
                    color: "white",
                },

                ["& > a"]: {
                    color: (this.state.active || this.isMenuSelected) ? "white" : "#8aa4af",
                },
                ["& > i"]: {
                    color: (this.state.active || this.isMenuSelected) ? "white" : "#8aa4af",
                }
            }
        })

        const hide = this.props.isVisible === false ? " hide" : "";
        const active = this.state.active || this.props.isSelected ? "active" : "";

        return (
            <div className={liElment} >
                <div className={liLine}>
                    {this.anyChild ?
                        <i onClick={this.onClick} className={inliei + " " + ((this.state.active || this.isMenuSelected) ? "pe-7s-angle-down" : "pe-7s-angle-right")} ></i>
                        :
                        null
                    }
                    <a className={inlie} onClick={this.onClickA} href={this.props.uri}>
                        {this.props.title}
                    </a>
                </div>
                {this.anyChild && (this.state.active || this.isMenuSelected) ? <SubMenu onBranchClick={this.props.onBranchClick} branchId={this.props.branchId} selectedBranchId={this.props.selectedBranchId} open={this.props.open} onMenuClick={this.props.onMenuClick} childMenuItems={this.props.childMenuItems} /> : null}
            </div>
        )
    }
}

//Types
export interface TopMenuProps {
    username: string;
    onDeconnexionClick: () => void;
    onReglagesClick: () => void;
    onUpClick: () => void;
    onHomeClick: () => void;
    childMenuItems: TopMenuItemProps[];
    open: boolean;
};

export interface TopMenuState {
    strSearch: string
};
//Fin types

export class TopMenu extends React.Component<TopMenuProps, TopMenuState>{

    constructor(p, c) {
        super(p, c);
        this.state = {
            strSearch: ""
        };
    }

    onSearchChange = (str: string) => {
        this.setState({ strSearch: str })
    }

    render() {
        let topMenuItem = [];
        if (this.props.childMenuItems && this.props.childMenuItems.length) {
            topMenuItem = this.props.childMenuItems.map((v, i) => {
                return <TopMenuItem key={i} title={v.title} icon={v.icon} action={v.action} />
            });
        }

        const iconBtn = style({
            cursor: "pointer",
            padding: `${toRem(0)} ${toRem(10)}`,
            minWidth: toRem(50),
            fontSize: toRem(25),
            color: "white",
            lineHeight: 2,
            $nest: {
                ["&:hover"]: {
                    backgroundColor: "#00AAD4"
                },
                ["&:hover > i"]: {
                    color: "white",
                }
            }
        });


        const inputDiv = style({
            padding: toRem(5)
        });

        const floatLeft = style({
            float: "left",
            $nest: {
                ["& > div"]: {
                    float: "left"
                }
            }
        });

        const floatRight = style({
            float: "right",
            $nest: {
                ["& > div"]: {
                    float: "left"
                }
            }
        });

        const main = style({
            backgroundColor: "#00BBD3",
            display: "block",
            zIndex: 1000,
            height: toRem(75)
        });

        return (
            <div className={main}>
                <div className={floatLeft}>
                    <div className={iconBtn} onClick={this.props.onUpClick} >
                        <img src="./up.png" alt="" /> ONE HOME
                </div>
                    <div className={inputDiv} >
                    </div>
                </div>

                <div className={floatRight}>
                    {
                        this.props.username == null ? null :
                            <div className={iconBtn} >
                                <a id="imageProfil" data-toggle="dropdown" aria-expanded="true">
                                    <span >{this.props.username}</span>
                                </a>
                            </div>
                    }
                    {
                        this.props.onReglagesClick == null ? null :
                            <div className={iconBtn} onClick={this.props.onReglagesClick} >
                                <i className="pe pe-7s-edit" />
                            </div>
                    }
                    {
                        this.props.onDeconnexionClick == null ? null :
                            <div className={iconBtn} onClick={this.props.onDeconnexionClick} >
                                <i className="pe pe-7s-power" />
                            </div>
                    }
                </div>
            </div>
        )
    }
};

//Types
export interface TopMenuItemProps {
    title: string;
    action: string | (() => void);
    icon: string;
};

export interface TopMenuItemState { };
//Fin types

export class TopMenuItem extends React.Component<TopMenuItemProps, TopMenuItemState>{

    constructor(p, c) {
        super(p, c);
        this.state = {};
    }

    render() {
        if (typeof (this.props.action) === "string") {
            return (
                <li title={this.props.title} data-toggle="tooltip" data-placement="bottom">
                    <a href={this.props.action}>
                        <i className={this.props.icon}></i>
                    </a>
                </li>
            )
        } else {
            return (
                <li title={this.props.title} data-toggle="tooltip" data-placement="bottom">
                    <a onClick={this.props.action}>
                        <i className={this.props.icon}></i>
                    </a>
                </li>
            )
        }
    }
};

//Types
export interface LeftMenuProps {
    menuItems: MenuItemData[];
    clickCollapse: () => void;
    onMenuClick?: (uri: string) => boolean | void;
    open: boolean
};

export interface LeftMenuState {
    selectedBranchId: string;
};
//Fin types

export class LeftMenu extends React.Component<LeftMenuProps, LeftMenuState>{

    constructor(p, c) {
        super(p, c);
        this.state = {
            selectedBranchId: ""
        };
    }

    onBranchClick = (branchId: string) => {
        this.setState({ selectedBranchId: branchId })
    }

    render() {
        const mainSideBar = style({
            backgroundColor: "#FAFAFA",
            width: "15%",
            height: "10%",
            $nest: {
                '& a': {
                    color: "black",
                    textDecoration: "none",
                    $nest: {
                        '&:hover': {
                            color: "white",
                            textDecoration: "none",
                        },
                    }
                },
                '& i': {
                    color: "black",
                    cursor: "pointer",
                    $nest: {
                        '&:hover': {
                            color: "white",
                        }
                    }
                }

            }
        });

        const expandIcon = style({
            fontSize: toRem(25),
            padding: toRem(10)
        });

        const menu = this.props.menuItems
            .filter((v) => {
                return v.isVisible !== false
            })
            .map((v, i) => {
                return (
                    <MenuItem
                        onBranchClick={this.onBranchClick}
                        branchId={i.toString()}
                        selectedBranchId={this.state.selectedBranchId}
                        open={this.props.open}
                        key={i}
                        onMenuClick={this.props.onMenuClick}
                        title={v.title}
                        icon={v.icon}
                        uri={v.uri}
                        isSelected={v.isSelected}
                        isVisible={v.isVisible}
                        childMenuItems={v.childMenuItems} />
                )
            });

        return (
            <aside className={mainSideBar}>
                <section className="" >
                    <div className="">
                        <div className={expandIcon} onClick={this.props.clickCollapse}>
                            <i className="pe p7 pe-7s-menu"></i>
                        </div>
                        <div className="">
                            {menu}
                        </div>
                    </div>
                </section>
            </aside>
        )
    }
};

//Types
export interface MenuItemData {
    title: string;
    uri: string;
    icon: string;
    isSelected: boolean;
    isVisible: boolean;
    childMenuItems?: MenuItemData[];
};

export interface MenuItemProps extends MenuItemData {
    onMenuClick?: (uri: string) => boolean | void;
    open: boolean;
    onBranchClick: (branchId: string) => void;
    branchId: string;
    selectedBranchId: string;
};

export interface MenuItemState {
    active: boolean;
};
//Fin types

export class MenuItem extends React.Component<MenuItemProps, MenuItemState>{

    constructor(p, c) {
        super(p, c);
        this.state = { active: false };
    }

    get isMenuSelected() {
        return this.props.isSelected || this.props.selectedBranchId.substr(0, this.props.branchId.length) === this.props.branchId;
    }

    iconClick = (e) => {
        this.props.onBranchClick(this.props.branchId);
        this.setState({ active: !this.state.active });
        e.stopPropagation();
    }

    onClickA = (e) => {
        const value = this.props.onMenuClick(this.props.uri);
        e.preventDefault();
        if (value === false) { }
    }

    render() {
        const subMenu = style({});

        const menuItem = style({
            borderTopRightRadius: toRem(5),
            position: "relative",
            display: "list-item",
            overflow: "hidden",
            minHeight: 37,
            $nest: {
                ["." + subMenu]: {
                    display: this.props.open === true && this.state.active === true ? "block" : "none",
                },
                ['&:hover']: this.props.open === false ?
                    {
                        backgroundColor: "rgb(0, 74, 92)",
                        minWidth: 250,
                        overflow: "visible",
                    }
                    : null,
                ['&:hover > .' + subMenu]: this.props.open === false ?
                    {
                        display: "block",
                        paddingLeft: 50,
                        position: "absolute",
                        minWidth: 250
                    }
                    : null,
                ['&:hover > .' + subMenu + " > div"]: this.props.open === false ?
                    {
                        paddingTop: 0,
                        paddingBottom: toRem(10)
                    }
                    : null
            },
        })

        const meunuIcon = style({
            fontSize: toRem(25),
            paddingBottom: toRem(5),
            paddingRight: toRem(10),
            //display: "inline-block"
        });

        const slectedMenu = {
            background: "rgba(0, 74, 92, 1) none repeat scroll 0 0",
            borderLeft: "3px solid #F39C12"
        }

        const menuItemHover = style({
            borderLeft: this.isMenuSelected ? "3px solid #F39C12" : "",
            paddingLeft: toRem(10),
            borderTopRightRadius: toRem(5),
            $nest: {
                ["&:hover"]: slectedMenu,
                ['&:hover > .' + meunuIcon + " > i"]:
                {
                    color: "white"
                },
                ["&:hover >  a"]:
                {
                    color: "white"
                }
            }
        });

        const menuLink = style(
            {
                minWidth: 200,
                position: "absolute",
                padding: toRem(10),
                left: toRem(45),
            }
        );

        const hide = this.props.isVisible === false ? "hide " : "";
        const active = this.state.active || this.props.isSelected ? " active" : "";

        return (
            <div className={menuItem} >
                <div className={menuItemHover}>
                    <span className={meunuIcon}>
                        <i className={this.props.icon} onClick={this.iconClick} />
                    </span>
                    <a className={menuLink} onClick={this.onClickA} href={this.props.uri}>
                        {this.props.title}
                    </a>
                </div >
                <div className={subMenu}>
                    <SubMenu
                        selectedBranchId={this.props.selectedBranchId}
                        onBranchClick={this.props.onBranchClick}
                        branchId={this.props.branchId}
                        open={this.props.open}
                        onMenuClick={this.props.onMenuClick}
                        childMenuItems={this.props.childMenuItems}
                    />
                </div>
            </div >
        )
    }
};


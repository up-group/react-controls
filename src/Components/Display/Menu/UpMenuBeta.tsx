
import * as React from "react"
import SvgIcon from "../SvgIcon/index"
import { IconName } from "../SvgIcon/icons"
import { style } from "typestyle"
import Text from "../../Inputs/Input/index"

import "./up.png"



export interface UpMenuProps {
    username?: string;
    menuItems: MenuItemData[];
    topMenuItems?: TopMenuItemProps[];
    onMenuClick?: (uri: string) => boolean | void;


    onDeconnexionClick?: () => void;
    onReglagesClick?: () => void;
    onUpClick?: () => void;
    onHomeClick?: () => void;
}

export interface UpMenuState {
    open: boolean;
}

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

        var styleContentWrapper = style({
        
            minHeight: 250
        });

        var styleContent = style({

            margin: "auto",
        });

        return <div className="">
            <div >
                <TopMenu username={this.props.username} open={this.state.open} childMenuItems={this.props.topMenuItems} onUpClick={this.props.onUpClick} onHomeClick={this.props.onHomeClick} onReglagesClick={this.props.onReglagesClick} onDeconnexionClick={this.props.onDeconnexionClick} />

                <LeftMenu clickCollapse={this.clickCollapse} open={this.state.open} menuItems={this.props.menuItems} onMenuClick={this.props.onMenuClick} />

                <div className={styleContentWrapper} >
                    <section className={styleContent} >
                        {this.props.children}
                    </section>
                </div>
            </div>
        </div>
    }

}




export interface SubMenuProps {
    childMenuItems?: MenuItemData[];
    onMenuClick: (uri: string) => void;
    open: boolean;


    onBranchClick: (branchId: string) => void;
    branchId: string;
    selectedBranchId: string;
}

export interface SubMenuState {
}

export class SubMenu extends React.Component<SubMenuProps, SubMenuState>{

    constructor(p, c) {
        super(p, c);
        this.state = {};
    }

    render() {
        if (this.props.childMenuItems == null || this.props.childMenuItems.length == 0) {
            return null;
        }
        var list = style({
            backgroundColor: "#003845",
            listStyle: "none",
            $nest: {
                '& ul': {
                    paddingLeft: 40,
                },
                '& a': {
                    $nest: {
                        '&:hover': {
                        },

                    }
                },

            }
        })

        var lis = this.props.childMenuItems
            .filter((v) => {
                return v.isVisible !== false
            })
            .map((v, i) => {
                var localId = (this.props.branchId != null ? this.props.branchId + "-" : "") + i;

                return <SubItems
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
            })

        return <div className={list}>
            {lis}
        </div>
    }

}

export interface SubItemsProps extends MenuItemData {
    onMenuClick: (uri: string) => boolean | void;
    open: boolean;




    onBranchClick: (branchId: string) => void;
    branchId: string;
    selectedBranchId: string;
}

export interface SubItemsState {
    active: boolean;
}

export class SubItems extends React.Component<SubItemsProps, SubItemsState>{

    constructor(p, c) {
        super(p, c);
        this.state = { active: false };
    }

    render() {
        var liElment = style({
            paddingLeft: 20,
            position: "relative"
        })

        var inlie = style({
            display: "inline-block",
            $nest: {
                "i": {
                    display: "inline",
                    position: "absolute",
                    fontSize: 25,
                    fontWeight: 900,
                    cursor: "pointer"
                }
            }
        })


        var inliei = style({

            display: "inline",
            position: "absolute",
            top: 0,
            left: 0,
            fontSize: 25,
            fontWeight: 900,
            cursor: "pointer"
        });

        var liLine = style({
            padding: 5,
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

        var hide = this.props.isVisible === false ? " hide" : "";
        var active = this.state.active || this.props.isSelected ? "active" : "";

        return <div className={liElment} >
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
        var value = this.props.onMenuClick(this.props.uri);

        if (value === false) {
            e.preventDefault();
        }
    }
}

export interface TopMenuProps {
    username: string;
    onDeconnexionClick: () => void;
    onReglagesClick: () => void;
    onUpClick: () => void;
    onHomeClick: () => void;
    childMenuItems: TopMenuItemProps[];
    open: boolean;
}

export interface TopMenuState {
    strSearch: string
}

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

        var topMenuItem = [];
        if (this.props.childMenuItems && this.props.childMenuItems.length) {
            topMenuItem = this.props.childMenuItems.map((v, i) => {
                return <TopMenuItem key={i} title={v.title} icon={v.icon} action={v.action} />
            });
        }

        var iconBtn = style({
            cursor: "pointer",
            padding: "0 10px",
            minWidth: 50,
            fontSize: 25,
            color: "white",
            lineHeight: "50px",
            $nest: {
                ["&:hover"]: {
                    backgroundColor: "#00AAD4"
                },
                ["&:hover > i"]: {
                    color: "white",
                }
            }
        });


        var inputDiv = style({
            padding: 5
        });

        var floatLeft = style({
            float: "left",
            $nest: {
                ["& > div"]: {
                    float: "left"
                }
            }
        });

        var floatRight = style({
            float: "right",
            $nest: {
                ["& > div"]: {
                    float: "left"
                }
            }
        });

        var main = style({
            backgroundColor: "#00BBD3",
            display: "block",
            zIndex: 1000,
            height: 75
        });
        return <div className={main}>
            <div className={floatLeft}>
                <div className={iconBtn} onClick={this.props.onUpClick} >
                    <img src="./up.png" alt="" /> 
                    ONE HOME
                </div>
                <div className={inputDiv} >
                    <Text value={this.state.strSearch} onChange={this.onSearchChange}  iconName="search" />
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
    }
}


export interface TopMenuItemProps {
    title: string;
    action: string | (() => void);
    icon: string;
}

export interface TopMenuItemState {

}

export class TopMenuItem extends React.Component<TopMenuItemProps, TopMenuItemState>{

    constructor(p, c) {
        super(p, c);
        this.state = {};
    }

    render() {
        if (typeof (this.props.action) === "string") {
            return <li title={this.props.title} data-toggle="tooltip" data-placement="bottom">
                <a href={this.props.action}>
                    <i className={this.props.icon}></i>
                </a>
            </li>
        } else {
            return <li title={this.props.title} data-toggle="tooltip" data-placement="bottom">
                <a onClick={this.props.action}>
                    <i className={this.props.icon}></i>
                </a>
            </li>
        }


    }
}




export interface LeftMenuProps {
    menuItems: MenuItemData[];
    clickCollapse: () => void;
    onMenuClick?: (uri: string) => boolean | void;
    open: boolean
}

export interface LeftMenuState {
    selectedBranchId: string;
}

export class LeftMenu extends React.Component<LeftMenuProps, LeftMenuState>{

    constructor(p, c) {
        super(p, c);
        this.state = {
            selectedBranchId: ""
        };
    }

    render() {
        var mainSideBar = style({
            backgroundColor:"#FAFAFA",
            width:"15%",           
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

        var expandIcon = style({
            fontSize: 25,
            padding: 10
        });

        var menu = this.props.menuItems
            .filter((v) => {
                return v.isVisible !== false
            })
            .map((v, i) => {
                return <MenuItem
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
            });

        return <aside className={mainSideBar}>

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

    }

    onBranchClick = (branchId: string) => {
        this.setState({ selectedBranchId: branchId })
    }

}



export interface MenuItemData {
    title: string;
    uri: string;
    icon: string;
    isSelected: boolean;
    isVisible: boolean;
    childMenuItems?: MenuItemData[];

}

export interface MenuItemProps extends MenuItemData {
    onMenuClick?: (uri: string) => boolean | void;
    open: boolean;

    onBranchClick: (branchId: string) => void;
    branchId: string;
    selectedBranchId: string;
}

export interface MenuItemState {
    active: boolean;
}

export class MenuItem extends React.Component<MenuItemProps, MenuItemState>{

    constructor(p, c) {
        super(p, c);
        this.state = { active: false };
    }


    render() {

        var subMenu = style({
        })
        var menuItem = style({
            borderTopRightRadius: 5,
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
                        paddingBottom: 10
                    }
                    : null
            },
        })

        var meunuIcon = style({
            fontSize: 25,
            paddingBottom: 5,
            paddingRight: 10,
            //display: "inline-block"
        });

        var slectedMenu = {
            background: "rgba(0, 74, 92, 1) none repeat scroll 0 0",
            borderLeft: "3px solid #F39C12"
        }

        var menuItemHover = style(
            {
                borderLeft: this.isMenuSelected ? "3px solid #F39C12" : "",
                paddingLeft: 10,
                borderTopRightRadius: 5,


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

        var menuLink = style(
            {
                minWidth: 200,
                position: "absolute",
                padding: 10,
                left: 45,

            }
        )


        var hide = this.props.isVisible === false ? "hide " : "";
        var active = this.state.active || this.props.isSelected ? " active" : "";

        return <div className={menuItem} >
            <div className={menuItemHover}>
                <span className={meunuIcon}>
                    <i className={this.props.icon} onClick={this.iconClick} />
                </span>
                <a className={menuLink} onClick={this.onClickA} href={this.props.uri}>
                    {this.props.title}
                </a>
            </div >
                <div className={subMenu}>
                    <SubMenu selectedBranchId={this.props.selectedBranchId} onBranchClick={this.props.onBranchClick} branchId={this.props.branchId} open={this.props.open} onMenuClick={this.props.onMenuClick} childMenuItems={this.props.childMenuItems} />
                </div>
        </div >


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
        var value = this.props.onMenuClick(this.props.uri);
        e.preventDefault();
        if (value === false) {

        }
    }
}


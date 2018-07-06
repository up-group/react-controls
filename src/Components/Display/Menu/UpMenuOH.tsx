import * as React from "react"
import { style } from "typestyle"
// import Text from "../../Inputs/Input/index"
import "./up.png"
// import { IconDeconnexion, IconCarteContour, IconUtilisateur, IconChevron, DirectionEnum, IconCheckBox_Check, IconCheckBox_Empty } from "../Icons/Icons";
// import { getFontClassName, stringIsNullOrEmpty, arrayIsNullOrEmpty } from "../../../Common/utils/helpers";
// import Search from "../../Inputs/Input/Search";
// import { UpLoadingIndicator } from "../../..";


var UP = require("./UP_OneHome.png");

export interface AntennesUtilisateur {
    Antennes: string[];
    IdxAntennesActives: number[];
    Utilisateur: string;
}


export interface UpMenuProps {
    menuItems: MenuItemData[];
    // topMenuItems?: TopMenuItemProps[];
    onMenuClick?: (uri: string) => boolean | void;
    onHomeClick?: () => void
    // clientId?: string;
}

export interface UpMenuState {
}

export default class UpMenuOH extends React.Component<UpMenuProps, UpMenuState> {
    constructor(p, c) {
        super(p, c);
    }

    render() {
        return <LeftMenu onHomeClick={this.props.onHomeClick} menuItems={this.props.menuItems} onMenuClick={this.props.onMenuClick} />;
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

export class SubMenu extends React.Component<SubMenuProps, SubMenuState> {
    constructor(p, c) {
        super(p, c);
    }

    render() {
        if (this.props.childMenuItems == null || this.props.childMenuItems.length == 0) {
            return null;
        }

        var list = style({
            backgroundColor: "#00BBD3",
            listStyle: "none",
            display: "block",
            marginLeft: "8%",
            zIndex: 1,
            position: "relative",
            $nest: {
                '& ul': {
                    paddingLeft: 40,
                },
                '& a': {
                    $nest: {
                        '&:hover': {},
                    },
                },
            },
        });

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
                    childMenuItems={v.childMenuItems} />;
            });

        return <div className={list} >
            {lis}
        </div>;
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

export class SubItems extends React.Component<SubItemsProps, SubItemsState> {
    constructor(p, c) {
        super(p, c);
        this.state = {
            active: false 
        };
    }

    render() {
        var liElment = style({
            paddingLeft: 20,
            position: "relative",
            zIndex: 1,
        });
        var inlie = style({
            display: "inline-block",
            $nest: {
                "i": {
                    display: "inline",
                    position: "absolute",
                    fontSize: 25,
                    fontWeight: 900,
                    cursor: "pointer",
                },
            },
        });
        var inliei = style({
            display: "inline",
            position: "absolute",
            top: 0,
            left: 0,
            fontSize: 25,
            fontWeight: 900,
            cursor: "pointer",
        });
        var liLine = style({
            padding: 5,
            color: "#8aa4af",
            $nest: {
                ["&:hover"]: {
                    color: "white",
                },
                ["&:hover > a"]: {
                    color: "white",
                },
                ["&:hover > i"]: {
                    color: "white",
                },
                ["& > a"]: {
                    color: (this.state.active || this.isMenuSelected) ? "white" : "black",
                },
                ["& > i"]: {
                    color: (this.state.active || this.isMenuSelected) ? "white" : "balck" ,
                },
            },
        });

        // var hide = this.props.isVisible === false ? " hide" : "";
        // var active = this.state.active || this.props.isSelected ? "active" : "";

        return <div className={liElment} data-branch={this.props.branchId} >
            <div className={liLine} >
                { this.anyChild ?
                    <i onClick={this.onClick} className={inliei + " " + ((this.state.active || this.isMenuSelected) ? "pe-7s-angle-down" : "pe-7s-angle-right")} ></i>
                    : null
                }
                <a className={inlie} onClick={this.onClickA} href={this.props.uri} >
                    {this.props.title}
                </a>
            </div>
            { this.anyChild && (this.state.active || this.isMenuSelected) ? 
                <SubMenu onBranchClick={this.props.onBranchClick} branchId={this.props.branchId} selectedBranchId={this.props.selectedBranchId} 
                    open={this.props.open} onMenuClick={this.props.onMenuClick} childMenuItems={this.props.childMenuItems} /> 
                : null
            }
        </div>
    }

    get anyChild() {
        return this.props.childMenuItems != null && this.props.childMenuItems.length != 0;
    }

    get isMenuSelected() {
        return this.props.isSelected || this.props.selectedBranchId.substr(0, this.props.branchId.length) === this.props.branchId;
    }

    onClick = (e) => {
        if (this.props.selectedBranchId.substr(0, this.props.branchId.length) === this.props.branchId) {
            var idParent = this.props.branchId.substr(0, this.props.branchId.lastIndexOf("-"));
            this.props.onBranchClick(idParent);
        } else {
            this.props.onBranchClick(this.props.branchId);
        }

        this.setState({ active: false });
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


export interface TopMenuItemProps {
    title: string;
    action: string | (() => void);
    icon: string;
}

export interface TopMenuItemState {
}

export class TopMenuItem extends React.Component<TopMenuItemProps, TopMenuItemState> {
    constructor(p, c) {
        super(p, c);
    }

    render() {
        if (typeof (this.props.action) === "string") {
            return <li title={this.props.title} data-toggle="tooltip" data-placement="bottom" >
                <a href={this.props.action} >
                    <i className={this.props.icon} ></i>
                </a>
            </li>
        } else {
            return <li title={this.props.title} data-toggle="tooltip" data-placement="bottom" >
                <a onClick={this.props.action} >
                    <i className={this.props.icon} ></i>
                </a>
            </li>
        }
    }
}


export interface LeftMenuProps {
    menuItems: MenuItemData[];
    onHomeClick?: () => void;
    onMenuClick?: (uri: string) => boolean | void;
}

export interface LeftMenuState {
    selectedBranchId: string;
}

export class LeftMenu extends React.Component<LeftMenuProps, LeftMenuState> {
    constructor(p, c) {
        super(p, c);
        this.state = {
            selectedBranchId: "",
        };
    }

    render() {
        // var expandIcon = style({
        //     fontSize: 25,
        //     padding: 10
        // });
        // var Homeimage = style({
        //     cursor:"pointer",
        //     float:"left",
        //     width:"100%",
        //     height:30,
        //     position:"absolute"
        // });
        var mainSideBar = style({
            top:0,
            backgroundColor:"#FAFAFA",
            float: "left",
            alignItems: "center",
            position: "absolute",
            width: "14%",
            minHeight: "100%",
            $nest: {
                '& a': {
                    color: "black",
                    textDecoration: "none",
                    $nest: {
                        '&:hover': {
                            color: "white",
                            textDecoration: "none",
                        },
                    },
                },
                '& i': {
                    color: "black",
                    cursor: "pointer",
                    $nest: {
                        '&:hover': {
                            color: "white",
                        },
                    },
                },
            },
        });
        var img_style = style({
            width: "75%",
            height: "70%"
        });
        var div_style = style({
            borderBottom: "solid 1px #eaeae9",
            marginTop:"10%",
        });

        var menu = this.props.menuItems
            .filter((v) => {
                return v.isVisible !== false;
            })
            .map((v, i) => {
                return <MenuItem
                    onBranchClick={this.onBranchClick}
                    branchId={i.toString()}
                    selectedBranchId={this.state.selectedBranchId}
                    key={i}
                    onMenuClick={this.props.onMenuClick}
                    title={v.title}
                    icon={v.icon}
                    uri={v.uri}
                    isSelected={v.isSelected}
                    isVisible={v.isVisible}
                    childMenuItems={v.childMenuItems} />;
            });

        return <aside className={mainSideBar}>
            <section className="" >
                <div className="">
                    <a onClick={this.props.onHomeClick} >
                        <img className={img_style} src={UP}></img>
                    </a>
                    <div className={div_style}>
                    </div>
                    <br />
                    <div className="">
                        {menu}
                    </div>
                    {/* <br />
                    <div className="">
                        
                    </div> */}
                </div>
            </section>
        </aside>;
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
                    display: this.state.active === true ? "block" : "none",
                },
                ['&:hover']: this.state.active === false ?
                    {
                        backgroundColor: "rgb(0, 74, 92)",
                        minWidth: 300,
                        overflow: "visible",
                    }
                    : null,
                ['&:hover > .' + subMenu]: this.state.active === false ?
                    {
                        display: "block",
                        position: "absolute",
                        minWidth: 300
                    }
                    : null,
                ['&:hover > .' + subMenu + " > div"]: this.state.active === false ?
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
                <SubMenu selectedBranchId={this.props.selectedBranchId} onBranchClick={this.props.onBranchClick} branchId={this.props.branchId} onMenuClick={this.props.onMenuClick} childMenuItems={this.props.childMenuItems} open={this.state.active} />
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

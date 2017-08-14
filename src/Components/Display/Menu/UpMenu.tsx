
import "./test.css"
import * as React from "react"
import SvgIcon from "../SvgIcon/index"
import { IconName } from "../SvgIcon/icons"




export interface UpMenuProps {
    menuItems: MenuItemData[];
    onMenuClick: (uri: string) => boolean | void;
}

export interface UpMenuState {
    col: boolean;
}

export default class UpMenu extends React.Component<UpMenuProps, UpMenuState>{


    constructor(p, c) {
        super(p, c);
        this.state = {
            col: true,
        };
    }

    clickCollapse = () => {
        this.setState({ col: !this.state.col })
    }

    render() {

        var menu = this.props.menuItems.map((v, i) => {
            return <MenuItem onMenuClick={this.props.onMenuClick} key={i} title={v.title} icon={v.icon} uri={v.uri} isSelected={v.isSelected} isVisible={v.isVisible} childMenuItems={v.childMenuItems} />
        });


        return <div className={"sidebar-mini skin-up" + (this.state.col ? " sidebar-collapse" : "")}>
            <aside className="main-sidebar">

                <section className="sidebar" >

                    <div className="user-panel">
                        <a className="sidebar-toggle" onClick={this.clickCollapse}>
                            <i className="pe p7 pe-7s-menu"></i>

                            <span className="sr-only">Bouton Menu</span>
                        </a>


                    </div>
                    <ul className="sidebar-menu">
                        {menu}
                    </ul>
                </section>
            </aside>
        </div>
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

        var hide = this.props.isVisible === false ? "hide " : "";

        return <li className={hide + "treeview" + (this.state.active ? " active" : "")}>
            <a onClick={this.onClickA} href={this.props.uri}>
                <i className={this.props.icon} onClick={this.iconClick}></i>
                <span>{this.props.title}</span>
            </a>
            <SubMenu onMenuClick={this.props.onMenuClick} childMenuItems={this.props.childMenuItems} />
        </li>
    }

    iconClick = () => {
        this.setState({ active: !this.state.active });
    }

    onClickA = (e) => {
        var value = this.props.onMenuClick(this.props.uri);
        if (value === false) {
            e.preventDefault();
        }
    }
}




export interface SubMenuProps {
    childMenuItems?: MenuItemData[];
    onMenuClick: (uri: string) => void;
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

        var lis = this.props.childMenuItems.map((v, i) => {
            return <SubItems key={i} onMenuClick={this.props.onMenuClick} uri={v.uri} title={v.title} isVisible={v.isVisible} isSelected={v.isSelected} icon={v.icon} childMenuItems={v.childMenuItems} />
        })

        return <ul className="treeview-menu menu-open">
            {lis}
        </ul>
    }

}




export interface SubItemsProps extends MenuItemData {
    onMenuClick: (uri: string) => boolean | void;
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
        var hide = this.props.isVisible === false ? " hide" : "";


        return <li className={(this.state.active ? "active" : "") + hide}>
            <a onClick={this.onClickA} href={this.props.uri}>
                {this.anyChild ?
                    <i onClick={this.onClick} className={(this.state.active ? "pe-7s-angle-down" : "pe-7s-angle-right")} ></i>
                    :
                    <i></i>
                }
                {this.props.title}
            </a>
            {this.anyChild ? <SubMenu onMenuClick={this.props.onMenuClick} childMenuItems={this.props.childMenuItems} /> : null}
        </li>
    }
    get anyChild() {
        return this.props.childMenuItems != null && this.props.childMenuItems.length != 0;
    }

    onClick = () => {
        this.setState({ active: !this.state.active });
    }

    onClickA = (e) => {
        var value = this.props.onMenuClick(this.props.uri);
        if (value === false) {
            e.preventDefault();
        }
    }
}



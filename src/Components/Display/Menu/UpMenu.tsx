import * as React from "react"
import { WithThemeProps, withTheme, } from "../../../Common/theming";
import defaultTheme from '../../../Common/theming';
import { isFunction } from "../../../Common/utils";

import "./UpMenu.scss"
import UpSvgIcon from "../SvgIcon";
import { IconName } from "theming/icons";

type RenderCallback = (state: UpMenuState) => JSX.Element;

export interface UpMenuProps {
    title?:string;
    icon?: RenderCallback | JSX.Element;
    header?: RenderCallback | JSX.Element;
    menuItems: MenuItemData[];
    footer?: RenderCallback | JSX.Element;
    children?: RenderCallback | React.ReactNode;
    onMenuClick?: (uri: string) => boolean | void;
}

export interface UpMenuState {
    minified: boolean;
}

class UpMenu extends React.Component<UpMenuProps & WithThemeProps, UpMenuState>{

    static defaultProps = {
        theme: defaultTheme,
    }

    constructor(p, c) {
        super(p, c);
        this.state = {
            minified: true,
        };
    }

    toggleMinification = () => {
        this.setState({ minified: !this.state.minified });
    }

    render() {
        const { title, header, icon, footer, menuItems, children } = this.props;

        var menu = menuItems.map((v, i) => {
            return <MenuItem onMenuClick={this.props.onMenuClick} key={i} title={v.title} icon={v.icon} uri={v.uri} isSelected={v.isSelected} isVisible={v.isVisible} childMenuItems={v.childMenuItems} />
        });

        let renderChildren = children;

        if (children != null && isFunction(children)) {
            const childrenAsFunction = children as (state: UpMenuState) => JSX.Element;
            renderChildren = childrenAsFunction(this.state);
        }
        let renderHeader = header;

        if (header != null && isFunction(header)) {
            const childrenAsFunction = children as (state: UpMenuState) => JSX.Element;
            renderChildren = childrenAsFunction(this.state);
        }

        let renderFooter = footer

        if (footer != null && isFunction(footer)) {
            const footerAsFunction = footer as (state: UpMenuState) => JSX.Element;
            renderFooter = footerAsFunction(this.state);
        }

        let renderIcon = icon;

        if (icon != null && isFunction(icon)) {
            const iconAsFunction = icon as (state: UpMenuState) => JSX.Element;
            renderIcon = iconAsFunction(this.state);
        }

        return (
            <div className="UpMenu">
                <div className={"sidebar-mini skin-up" + (this.state.minified ? " sidebar-collapse" : "")}>
                    <div className="icon-wrapper">
                        <section className="icon">
                            {renderIcon}
                        </section>
                    </div>
                    <div className="header-wrapper">
                        <section className="header">
                            {renderHeader}
                        </section>
                    </div>
                    <aside className="main-sidebar">
                        <section className="sidebar" >
                            <div className="sidebar-actions">
                                <a className="sidebar-toggle" onClick={this.toggleMinification}>
                                    <i className="pe p7 pe-7s-menu"></i>
                                    <span className="sr-only">{title}</span>
                                </a>
                            </div>
                            <ul className="sidebar-menu">
                                {menu}
                            </ul>
                        </section>
                    </aside>
                    <div className="content-wrapper">
                        <section className="content">
                            {renderChildren}
                        </section>
                    </div>
                    <div className="footer-wrapper">
                        <section className="footer">
                            {renderFooter}
                        </section>
                    </div>
                </div>
            </div>
        );
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
        var active = this.state.active || this.props.isSelected ? " active" : "";

        return <li className={hide + "treeview" + active}>
            <a onClick={this.onItemClick} href={this.props.uri}>
                <UpSvgIcon onClick={this.onIconClick} iconName={this.props.icon as IconName}></UpSvgIcon>
                <span>{this.props.title}</span>
            </a>
            <SubMenu onMenuClick={this.props.onMenuClick} childMenuItems={this.props.childMenuItems} />
        </li>
    }

    onIconClick = () => {
        this.setState({ active: !this.state.active });
    }

    onItemClick = (e) => {
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

export class SubMenu extends React.Component<SubMenuProps, SubMenuState> {

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
        var active = this.state.active || this.props.isSelected ? "active" : "";

        return <li className={active + hide}>
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

    onClick = (e) => {
        this.setState({ active: !this.state.active });
        e.preventDefault();
        e.stopPropagation();
        return false;
    }

    onClickA = (e) => {
        var value = this.props.onMenuClick(this.props.uri);
        if (value === false) {
            e.preventDefault();
        }
    }
}

export default withTheme<UpMenuProps>(UpMenu);

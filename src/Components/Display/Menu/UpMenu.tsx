﻿import * as React from "react"
import { WithThemeProps, withTheme, } from "../../../Common/theming";
import defaultTheme from '../../../Common/theming';
import { isFunction, isEmpty } from "../../../Common/utils";

import UpSvgIcon from "../SvgIcon";
import { IconName } from "theming/icons";
import { MenuStyles } from "./styles";
import * as classnames from 'classnames';

const logo = require('./logo-up-square.svg');

type RenderCallback = (state: UpMenuState) => JSX.Element;

export interface UpMenuProps {
    title?:string;
    icon?: RenderCallback | JSX.Element;
    header?: RenderCallback | JSX.Element;
    menuItems: MenuItemData[];
    footer?: RenderCallback | JSX.Element;
    children?: RenderCallback | React.ReactNode;
    onClick?: (uri: string) => boolean | void;
}

export interface UpMenuState {
    minified: boolean;
}

class UpMenu extends React.Component<UpMenuProps & WithThemeProps, UpMenuState>{

    static defaultProps = {
        theme: defaultTheme,
        icon: (props) => <UpSvgIcon width={48} height={48} iconHtml={logo}></UpSvgIcon>
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
            return <MenuItem onClick={this.props.onClick} key={i} title={v.title} icon={v.icon} uri={v.uri} isSelected={v.isSelected} isVisible={v.isVisible} childMenuItems={v.childMenuItems} />
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
            <aside className={classnames("up-menu", MenuStyles({ ...this.props, ...this.state }))}>
                {renderIcon &&
                    <section className="up-app-icon-wrapper">
                        {renderIcon}
                    </section>
                }
                {renderHeader && 
                    <section className="up-menu-header">
                        {renderHeader}
                    </section>
                }
                <section className="up-menu-nav" >
                    <div className="up-menu-actions">
                        <UpSvgIcon iconName={'burger-menu'} 
                            className="up-menu-toggle" onClick={this.toggleMinification}>
                        </UpSvgIcon>
                    </div>
                    <nav>
                        <ul>
                            {menu}
                        </ul>
                    </nav>
                </section>
                {renderChildren && 
                    <section className="up-menu-content">
                        {renderChildren}
                    </section>
                }
                {renderFooter &&
                    <section className="up-menu-footer">
                        {renderFooter}
                    </section>
                }
            </aside>
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
    onClick?: (uri: string) => boolean | void;
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
        const hide = this.props.isVisible === false;
        const active = this.props.isSelected;
        const hasChilren = !isEmpty(this.props.childMenuItems);

        return <li className={classnames("treeview", { "hide": hide, "active": active, 'hasChildren': hasChilren})}>
            <a onClick={this.onItemClick} href={this.props.uri}>
                <UpSvgIcon title={this.props.title} width={24} height={24} iconName={this.props.icon as IconName}></UpSvgIcon>
                <span className={'up-menu-item-title'}>{this.props.title}</span>
            </a>
            {!isEmpty(this.props.childMenuItems) &&
                <SubMenu title={this.props.title} onClick={this.props.onClick} childMenuItems={this.props.childMenuItems} />
            }
        </li>
    }

    onItemClick = (e) => {
        const value = this.props.onClick(this.props.uri);
        if (value === false) {
            e.preventDefault();
            e.stopPropagation();
        }
    }
}

export interface SubMenuProps {
    title?:string;
    childMenuItems?: MenuItemData[];
    onClick: (uri: string) => void;
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

        var items = this.props.childMenuItems.map((v, i) => {
            return <SubItems key={i} onClick={this.props.onClick} uri={v.uri} title={v.title} isVisible={v.isVisible} isSelected={v.isSelected} icon={v.icon} childMenuItems={v.childMenuItems} />
        })

        return <>
            <ul className="up-sub-menu">
                {this.props.title &&
                    <span className={'up-sub-menu-title'}>{this.props.title}</span>
                }
                {items}
            </ul>
        </>
    }
}

export interface SubItemsProps extends MenuItemData {
    onClick: (uri: string) => boolean | void;
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
                {this.anyChild &&
                    <i onClick={this.onClick} className={(this.state.active ? "pe-7s-angle-down" : "pe-7s-angle-right")} ></i>
                }
                <span className={'up-menu-item-title'}>{this.props.title}</span>
            </a>
            {this.anyChild ? <SubMenu onClick={this.props.onClick} childMenuItems={this.props.childMenuItems} /> : null}
        </li>
    }
    get anyChild() {
        return this.props.childMenuItems != null && this.props.childMenuItems.length != 0;
    }

    onClick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.setState({ active: !this.state.active });
        return false;
    }

    onClickA = (e) => {
        var value = this.props.onClick(this.props.uri);
        if (value === false) {
            e.preventDefault();
        }
    }
}

export default withTheme<UpMenuProps>(UpMenu);

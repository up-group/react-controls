import * as React from "react"
import { WithThemeProps, withTheme, } from "../../../Common/theming";
import defaultTheme from '../../../Common/theming';
import { isFunction, isEmpty } from "../../../Common/utils";

import UpSvgIcon from "../SvgIcon";
import { IconName } from "../../../Common/theming/icons";
import { MenuStyles } from "./styles";
import * as classnames from 'classnames';

import { isEqual } from 'lodash' ;

const logo = require('./logo-up-square.svg');

type RenderCallback = (props: Partial<UpMenuProps>, state: UpMenuState) => JSX.Element;

export interface UpMenuProps {
    title?:string;
    icon?: RenderCallback | JSX.Element;
    header?: RenderCallback | JSX.Element;
    menuItems: MenuItemData[];
    footer?: RenderCallback | JSX.Element;
    children?: RenderCallback | React.ReactNode;
    width?: number;
    minified?: boolean,
    blocked?: boolean,
    onClick?: (uri: string) => boolean | void;
    onMinifiedChange?:(minified?:boolean)=>void;
}

export interface UpMenuState {
    minified: boolean;
}

class UpMenu extends React.Component<UpMenuProps & WithThemeProps, UpMenuState>{

    static defaultProps = {
        theme: defaultTheme,
        icon: () => <UpSvgIcon width={48} height={48} iconHtml={logo}></UpSvgIcon>,
        width: 300,
    }

    constructor(p, c) {
        super(p, c);
        this.state = {
            minified: false,
        };
    }

    toggleMinification = () => {
        if(this.isMinifiedControlled && this.props.onMinifiedChange)
        {
            this.props.onMinifiedChange(!this.currentMinifiedValue);
        }
        else {
            this.setState({ minified: !this.currentMinifiedValue },()=>{
                if(this.props.onMinifiedChange){
                    this.props.onMinifiedChange(this.currentMinifiedValue);
                }
            });
        }
    }
    
    get isMinifiedControlled() {
        return this.props.minified !== undefined;
    }

    get currentMinifiedValue() {
        return this.isMinifiedControlled ? this.props.minified : this.state.minified;
    }

    render() {
        const { header, icon, footer, menuItems, children, ...others } = this.props;

        var menu = menuItems.map((v, i) => {
            if(v.render != null) {
                return v.render(
                    v,
                    others,
                    this.state,
                );
            }
            return <MenuItem onClick={this.props.onClick} key={i} title={v.title} icon={v.icon} uri={v.uri} isSelected={v.isSelected} isVisible={v.isVisible} childMenuItems={v.childMenuItems} isSeparator={v.isSeparator} />
        });

        let renderChildren = children;

        if (children != null && isFunction(children)) {
            renderChildren = (children as RenderCallback)(
              this.props,
              this.state
            );
        }

        let renderHeader = header;

        if (header != null && isFunction(header)) {
            renderHeader = (header as RenderCallback) (this.props, this.state);
        }

        let renderFooter = footer

        if (footer != null && isFunction(footer)) {
            renderFooter = (footer as RenderCallback)(this.props, this.state);
        }

        let renderIcon = icon;

        if (icon != null && isFunction(icon)) {
            renderIcon = (icon as RenderCallback)(
              this.props,
              this.state
            );
        }

        return (
            <aside className={classnames("up-menu", MenuStyles({...this.props, minified:this.currentMinifiedValue }))}>
                <section className="up-menu-header">
                    {renderIcon &&
                        <section className="up-app-icon-wrapper">
                            {renderIcon}
                        </section>
                    }
                    {renderHeader}
                    <div className="up-menu-actions">
                    {!this.props.blocked &&
                        <UpSvgIcon width={18} height={18} iconName={'burger-menu2'} 
                            className="up-menu-toggle" onClick={this.toggleMinification}>
                        </UpSvgIcon>}
                    </div>
                </section>
                <section className="up-menu-nav" >
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
  title?: string;
  uri?: string;
  icon?: string;
  isSelected?: boolean;
  isVisible?: boolean;
  childMenuItems?: MenuItemData[];
  isSeparator?: boolean;
  render?: (item: MenuItemData, props?: Partial<UpMenuProps>, state?: UpMenuState) => JSX.Element;
}

export interface MenuItemProps extends MenuItemData {
    onClick?: (uri: string) => boolean | void;
}

export class MenuItem extends React.Component<MenuItemProps>{

    constructor(p, c) {
        super(p, c);
    }

    shouldComponentUpdate(nextProps) {
        return !isEqual(this.props, nextProps) ;
    }

    render() {
        const hide = this.props.isVisible === false;
        const active = this.props.isSelected;
        const hasChilren = !isEmpty(this.props.childMenuItems);
        const isSeparator = this.props.isSeparator;
        
        return <li className={classnames("treeview", { "hide": hide, "active": active, 'hasChildren': hasChilren, 'separator': isSeparator })}>
            {this.props.uri && 
            <a onClick={this.onItemClick} href={this.props.uri}>
                <UpSvgIcon title={this.props.title} width={22} height={22} iconName={this.props.icon as IconName}></UpSvgIcon>
                <span className={'up-menu-item-title'}>{this.props.title}</span>
            </a>
            }
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

export class SubMenu extends React.Component<SubMenuProps> {

    constructor(p, c) {
        super(p, c);
        this.state = {};
    }

    shouldComponentUpdate(nextProps) {
        return !isEqual(this.props, nextProps);
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

    shouldComponentUpdate(nextProps, nextState) {
        return !isEqual(this.props, nextProps) || !isEqual(this.state, nextState);
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

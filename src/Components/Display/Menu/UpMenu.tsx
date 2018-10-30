
import "./UpMenu.scss"
import * as React from "react"

export interface UpMenuProps {
    menuItems: MenuItemData[];
    topMenuItems?: TopMenuItemProps[];
    onMenuClick?: (uri: string) => boolean | void;
    onDeconnexionClick?: () => void;
    onReglagesClick?: () => void;
    onUpClick?: () => void;
    onHomeClick?: () => void;
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


        return <div className="UpMenu">
            <div className={"sidebar-mini skin-up" + (this.state.col ? " sidebar-collapse" : "")}>
                <TopMenu childMenuItems={this.props.topMenuItems} onUpClick={this.props.onUpClick} onHomeClick={this.props.onHomeClick} onReglagesClick={this.props.onReglagesClick} onDeconnexionClick={this.props.onDeconnexionClick} />
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
                <div className="content-wrapper" style={{ minHeight: 415 }}>
                    <section className="content">
                        {this.props.children}
                    </section>
                </div>
            </div>
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
        var active = this.state.active || this.props.isSelected ? " active" : "";

        return <li className={hide + "treeview" + active}>
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

export interface TopMenuProps {
    onDeconnexionClick: () => void;
    onReglagesClick: () => void;
    onUpClick: () => void;
    onHomeClick: () => void;
    childMenuItems: TopMenuItemProps[];
}

export interface TopMenuState {

}

export class TopMenu extends React.Component<TopMenuProps, TopMenuState>{

    constructor(p, c) {
        super(p, c);
        this.state = {};
    }

    render() {

        var topMenuItem = [];
        if (this.props.childMenuItems && this.props.childMenuItems.length) {
            topMenuItem = this.props.childMenuItems.map((v, i) => {
                return <TopMenuItem key={i} title={v.title} icon={v.icon} action={v.action} />
            });
        }

        return <header className="main-header">

            <a onClick={this.props.onUpClick} className="logo">
                <span className="logo-mini"><span className="up-logo" /></span>
                <span className="logo-lg"><span className="up-logo" />OneHome</span>
            </a>

            <nav className="navbar navbar-static-top" role="navigation">
                <a onClick={this.props.onHomeClick} className="sidebar-toggle" data-toggle="" role="button">
                    <span className="sr-only">Bouton Menu</span>
                </a>
                <div className="col-md-4">
                    <div className="input-group">
                        <input type="text" className="form-control" placeholder="Nom usager, n° téléphone,..." />
                        <span className="input-group-addon" id="basic-addon2"><i className="pe pe-7s-search"></i>
                        </span>
                    </div>
                </div>
                <div className="navbar-custom-menu">
                    <ul className="nav navbar-nav">
                        {topMenuItem}
                        <li className="dropdown user user-menu open">
                            <a id="imageProfil" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="true">
                                <span className="hidden-xs">Stéphane ROMANO</span>
                            </a>
                        </li>
                        <li title="Réglages" data-toggle="tooltip" data-placement="bottom" data-original-title="Réglages">
                            <a onClick={this.props.onReglagesClick} data-toggle="control-sidebar">
                                <i className="pe pe-7s-edit"></i>
                            </a>
                        </li>
                        <li title="Déconnexion" data-toggle="tooltip" data-placement="bottom">
                            <a onClick={this.props.onDeconnexionClick}>
                                <i className="pe pe-7s-power"></i>
                            </a>
                        </li>

                    </ul>
                </div>
            </nav>
        </header>
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
    //public static defaultProps: TopMenuItemProps = {};

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
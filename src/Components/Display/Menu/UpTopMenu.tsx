import * as React from "react"
import { WithThemeProps, } from "theming";
import defaultTheme from '../../../Common/theming';

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

export class TopMenuItem extends React.Component<TopMenuItemProps, TopMenuItemState> {
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
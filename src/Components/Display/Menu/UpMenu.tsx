
import "./test.css"
import * as React from "react"
import SvgIcon from "../SvgIcon/index"
import { IconName } from "../SvgIcon/icons"

export interface UpMenuProps {
    menuItems: string[]
}

export interface UpMenuState {
    col: boolean;
}

export default class UpMenu extends React.Component<UpMenuProps, UpMenuState>{


    constructor(p, c) {
        super(p, c);
        this.state = {
            col: true
        };
    }

    clickCollapse = () => {
        this.setState({ col: !this.state.col })
    }

    render() {

        var menu = this.props.menuItems.map((v, i) => {
            return <MenuItem title={v} key={i} classIcon="up up-dossier" />
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



//<li className="treeview">
//    <a href="#">
//        <i className="pe pe-7s-tools"></i>
//        <span>Paramétrage</span>
//        <span className="pull-right-container">
//            <i className="fa fa-angle-left pull-right"></i>

//        </span>
//    </a>
//    <ul className="treeview-menu menu-open">
//        <li><a href="pages/charts/chartjs.html"><i className="pe-7s-angle-right"></i> Paramétrage général</a></li>
//        <li><a href="pages/charts/morris.html"><i className="pe-7s-angle-right"></i> Habilitaions</a></li>
//        <li><a href="pages/charts/flot.html"><i className="pe-7s-angle-right"></i> Fiche Service d'aide</a></li>
//        <li><a href="pages/charts/inline.html"><i className="pe-7s-angle-right"></i> Financeurs</a></li>
//    </ul>
//</li>



export interface MenuItemProps {
    title: string;
    classIcon: string
}

export interface MenuItemState {

}

export class MenuItem extends React.Component<MenuItemProps, MenuItemState>{

    constructor(p, c) {
        super(p, c);
        this.state = {};
    }

    render() {
        return <li className="treeview">
            <a href="/etudes/cakeOneHome/Home/homeusager">
                <i className={this.props.classIcon}></i>
                <span>{this.props.title}</span>
            </a>
        </li>
    }
}




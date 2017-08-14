
import "./test.css"
import * as React from "react"
import SvgIcon from "../SvgIcon/index"
import { IconName } from "../SvgIcon/icons"




export interface UpMenuProps {
    menuItems: MenuItemProps[]
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
            return <MenuItem key={i} title={v.title} icon={v.icon} uri={v.uri} isSelected={v.isSelected} isVisible={v.isVisible} childMenuItems={v.childMenuItems} />
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
    uri: string;
    icon: string;
    isSelected: boolean;
    isVisible: boolean;
    childMenuItems?: MenuItemProps[];


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
            <a href={this.props.uri}>
                <i className={this.props.icon} onClick={this.iconClick}></i>
                <span>{this.props.title}</span>
            </a>
            <SubMenu childMenuItems={this.props.childMenuItems} />
        </li>
    }

    iconClick = () => {
        this.setState({ active: !this.state.active });
    }
}




export interface SubMenuProps {
    childMenuItems?: MenuItemProps[];



}

export interface SubMenuState {
}

export class SubMenu extends React.Component<SubMenuProps, SubMenuState>{
    public static defaultProps: SubMenuProps = {};

    constructor(p, c) {
        super(p, c);
        this.state = {};
    }

    render() {
        if (this.props.childMenuItems == null || this.props.childMenuItems.length == 0) {
            return null;
        }

        var lis = this.props.childMenuItems.map((v, i) => {
            return <SubItems {...v} />
        })

        return <ul className="treeview-menu menu-open">
            {lis}

        </ul>
    }
}




export interface SubItemsProps extends MenuItemProps {

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
            <a href={this.props.uri}>
                {this.anyChild ?
                    <i onClick={this.onClick} className={(this.state.active ? "pe-7s-angle-down" : "pe-7s-angle-right")} ></i>
                    :
                    <i></i>
                }
                {this.props.title}
            </a>
            {this.anyChild ? <SubMenu childMenuItems={this.props.childMenuItems} /> : null}
        </li>
    }
    get anyChild() {
        return this.props.childMenuItems != null && this.props.childMenuItems.length != 0;
    }

    onClick = () => {
        this.setState({ active: !this.state.active });
    }
}



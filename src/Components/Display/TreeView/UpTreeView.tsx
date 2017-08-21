import * as React from "react"

export interface UpTreeViewProps {
    childMenuItems?: MenuItemData[];
}

export interface UpTreeViewState {

}

export default class UpTreeView extends React.Component<UpTreeViewProps, UpTreeViewState>{
    public static defaultProps: UpTreeViewProps = {};

    constructor(p, c) {
        super(p, c);
        this.state = {};
    }

    render() {
        return <SubMenu childMenuItems={this.props.childMenuItems} onMenuClick={this.onMenuClick} />
    }

    onMenuClick = (uri: string) => {
        console.log(uri);

    }

}




export interface MenuItemData {
    id: string;
    title: string;
    isSelected: boolean;
    isVisible: boolean;
    childMenuItems?: MenuItemData[];

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
            return <SubItems
                key={i}
                id={v.id}
                onMenuClick={this.props.onMenuClick}
                title={v.title}
                isVisible={v.isVisible}
                isSelected={v.isSelected}
                childMenuItems={v.childMenuItems}
            />
        })
        var s = {
            listStyle: "none",
            marginTop: 0
        }

        return <ul style={s} >
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

        var s = {
            display: hide ? "none" : ""
        };

        return <li style={s} className={active}>
            <a onClick={this.onClickA}>
                {this.anyChild ?
                    <i onClick={this.onClick} className={(this.state.active ? "pe-7s-angle-down" : "pe-7s-angle-right")} ></i>
                    :
                    <i></i>
                }
                {this.props.title}
            </a>
            {this.anyChild && active ? <SubMenu onMenuClick={this.props.onMenuClick} childMenuItems={this.props.childMenuItems} /> : null}
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
        var value = this.props.onMenuClick(this.props.id);
        if (value === false) {
            e.preventDefault();
        }
    }
}
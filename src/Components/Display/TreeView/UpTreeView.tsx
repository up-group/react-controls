import * as React from "react"

export interface UpTreeViewProps {
    onBranchClick: (data: MenuItemData) => void;
    childMenuItems?: MenuItemData[];
}

export interface UpTreeViewState {

}

export default class UpTreeView extends React.Component<UpTreeViewProps, UpTreeViewState>{
    constructor(p, c) {
        super(p, c);
        this.state = {};
    }

    render() {
        return <SubMenu childMenuItems={this.props.childMenuItems} onBranchClick={this.props.onBranchClick} />
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
    onBranchClick: (data: MenuItemData) => void;
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
                onBranchClick={this.props.onBranchClick}
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
    onBranchClick: (uri: MenuItemData) => void;
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
            {this.anyChild && active ? <SubMenu onBranchClick={this.props.onBranchClick} childMenuItems={this.props.childMenuItems} /> : null}
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

        var data: MenuItemData = {
            id: this.props.id,
            title: this.props.title,
            isSelected: this.props.isSelected,
            isVisible: this.props.isVisible,
            childMenuItems: this.props.childMenuItems
        }

        var value = this.props.onBranchClick(data);

    }
}
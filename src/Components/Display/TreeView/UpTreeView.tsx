import * as React from "react"

export interface UpTreeViewProps {
    onBranchClick?: (data: MenuItemData) => void;
    childMenuItems?: MenuItemData[];
}

export interface UpTreeViewState {
    selectedBranchId: string;
}

export default class UpTreeView extends React.Component<UpTreeViewProps, UpTreeViewState>{
    constructor(p, c) {
        super(p, c);
        this.state = {
            selectedBranchId: ""
        };
    }

    render() {
        return <SubMenu selectedBranchId={this.state.selectedBranchId} childMenuItems={this.props.childMenuItems} onBranchClick={this.onBranchClick} />
    }

    onBranchClick = (data: MenuItemData, branchId: string) => {
        this.setState({ selectedBranchId: branchId })
        if (this.props.onBranchClick) {
            this.props.onBranchClick(data);
        }
    }

}




export interface MenuItemData {
    id: string;
    text: string;
    isSelected: boolean;
    isVisible: boolean;
    childMenuItems?: MenuItemData[];

}

export interface SubMenuProps {
    childMenuItems?: MenuItemData[];
    onBranchClick: (data: MenuItemData, branchId: string) => void;
    branchId?: string;
    selectedBranchId?: string;
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
        var localId = this.props.branchId != null ? this.props.branchId + "-" : "";
        var lis = this.props.childMenuItems.map((v, i) => {
            return <SubItems
                branchId={localId + i.toString()}
                selectedBranchId={this.props.selectedBranchId}
                key={i}
                id={v.id}
                onBranchClick={this.props.onBranchClick}
                text={v.text}
                isVisible={v.isVisible}
                isSelected={v.isSelected}
                childMenuItems={v.childMenuItems}
            />
        });
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
    onBranchClick: (data: MenuItemData, branchId: string) => void;
    branchId: string;
    selectedBranchId: string;
}

export interface SubItemsState {
    active: boolean;
}

export class SubItems extends React.Component<SubItemsProps, SubItemsState>{

    constructor(p, c) {
        super(p, c);
        this.state = {
            active: false
        };
    }

    render() {
        var hide = this.props.isVisible === false ? " hide" : "";
        var active = this.state.active || this.props.isSelected ? "active" : "";

        var s = {
            display: hide ? "none" : "",
        };

        var styleSelected: React.CSSProperties = {
            border: "1px solid #137cbd",
            borderRadius: 5
        }

        return <li style={s} className={active}>
            <a className={"aaaaa"} onClick={this.onClickA}>
                {this.anyChild ?
                    <i onClick={this.onClick} className={(this.state.active ? "pe-7s-angle-down" : "pe-7s-angle-right")} ></i>
                    :
                    <i></i>
                }
                <span style={this.props.branchId == this.props.selectedBranchId ? styleSelected : {}}>
                    {this.props.text}
                </span>
            </a>
            {this.anyChild && active ? <SubMenu selectedBranchId={this.props.selectedBranchId} branchId={this.props.branchId} onBranchClick={this.props.onBranchClick} childMenuItems={this.props.childMenuItems} /> : null}
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
            text: this.props.text,
            isSelected: this.props.isSelected,
            isVisible: this.props.isVisible,
            childMenuItems: this.props.childMenuItems
        }
        this.props.onBranchClick(data, this.props.branchId);



    }
}
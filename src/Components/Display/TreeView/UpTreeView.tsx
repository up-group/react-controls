import * as React from "react"

import { style } from 'typestyle'


export interface UpTreeViewProps {
    onBranchClick?: (data: MenuItemData) => void;
    childMenuItems?: MenuItemData[];
    showInvisible?: boolean;
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
        return <SubMenu showInvisible={this.props.showInvisible} selectedBranchId={this.state.selectedBranchId} childMenuItems={this.props.childMenuItems} onBranchClick={this.onBranchClick} />
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
    isSelected?: boolean;
    isVisible?: boolean;
    childMenuItems?: MenuItemData[];
}

export interface SubMenuProps {
    childMenuItems?: MenuItemData[];
    onBranchClick: (data: MenuItemData, branchId: string) => void;
    branchId?: string;
    selectedBranchId?: string;
    showInvisible: boolean;
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
                showInvisible={this.props.showInvisible}
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
    showInvisible: boolean;
}

export interface SubItemsState {
    expand: boolean;
}

export class SubItems extends React.Component<SubItemsProps, SubItemsState>{

    constructor(p, c) {
        super(p, c);
        this.state = {
            expand: false
        };
    }

    render() {

        var styleBranch = style({
            display: this.props.isVisible === false && this.props.showInvisible !== true ? "none" : "inherit",
            $nest: {
                "span": {
                    color: this.props.isVisible === false ? "#7F7F7F" : "inherit",
                    border: this.props.branchId == this.props.selectedBranchId ? "1px solid #116FAA" : "",
                    borderRadius: 5
                },
                "span:hover": {
                    border: "1px solid #116FAA",
                }
            }
        });

        return <li className={styleBranch}>
            <i className={(this.state.expand ? "pe-7s-angle-down" : "pe-7s-angle-right")}
                style={{ visibility: this.anyChild ? "visible" : "hidden" }}
                onClick={this.onExpandClick}
            />
            <span onClick={this.onClickA} >
                {this.props.text}
            </span>
            {this.anyChild === true && this.state.expand === true ? <SubMenu showInvisible={this.props.showInvisible} selectedBranchId={this.props.selectedBranchId} branchId={this.props.branchId} onBranchClick={this.props.onBranchClick} childMenuItems={this.props.childMenuItems} /> : null}
        </li>
    }

    get anyChild() {
        return this.props.childMenuItems != null && this.props.childMenuItems.length != 0;
    }

    onExpandClick = (e) => {
        this.setState({ expand: !this.state.expand });
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
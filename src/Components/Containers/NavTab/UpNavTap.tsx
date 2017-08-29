import * as React from "react"


export interface tab {
    head: string | JSX.Element;
    content: JSX.Element;
}


export interface UpNavTabProps {
    tabs: tab[]
}

export interface UpNavTabState {
    selectedTabKey: number;
}

export default class UpNavTab extends React.Component<UpNavTabProps, UpNavTabState>{

    constructor(p, c) {
        super(p, c);
        this.state = {
            selectedTabKey: this.props.tabs.length != 0 ? 0 : -1
        };
    }

    render() {
        var contents = this.props.tabs.filter((v, i) => { return i === this.state.selectedTabKey })
        var content = contents.length != 0 ? contents[0].content : null;
        return <div>
            <TabHeads selectTabKey={this.selectTabKey} heads={this.props.tabs} selectedTabKey={this.state.selectedTabKey} />
            {content}
        </div>
    }

    selectTabKey = (tabKey: number) => {
        this.setState({ selectedTabKey: tabKey });
    }
}




export interface TabHeadsProps {
    heads: tab[];
    selectedTabKey: number;
    selectTabKey: (tabkey: number) => void;

}

export interface TabHeadsState {

}

export class TabHeads extends React.Component<TabHeadsProps, TabHeadsState>{

    constructor(p, c) {
        super(p, c);
        this.state = {};
    }

    render() {
        var heads = this.props.heads.map((v, i) => { return <TabHead selectTabKey={this.props.selectTabKey} tab={v} key={i} tabKey={i} selectedTabKey={this.props.selectedTabKey} /> });

        return <div style={{ display: "flow-root", borderBottom: "1px solid #ddd" }}>
            {heads}
        </div>
    }
}




export interface TabHeadProps {
    tab: tab;
    tabKey: number;
    selectedTabKey: number;
    selectTabKey: (tabkey: number) => void;
}

export interface TabHeadState {

}

export class TabHead extends React.Component<TabHeadProps, TabHeadState>{

    constructor(p, c) {
        super(p, c);
        this.state = {};
    }

    render() {
        var style: React.CSSProperties = {
            marginRight: 2,
            position: "relative",
            display: "block",
            padding: "10px 15px",
            float: "left",
            cursor: "pointer"
        }

        if (this.props.selectedTabKey == this.props.tabKey) {
            style.borderRadius = "4px 4px 0 0";
            style.borderTop = "1px solid #ddd";
            style.borderLeft = "1px solid #ddd";
            style.borderRight = "1px solid #ddd";
        }

        return <div onClick={() => { this.props.selectTabKey(this.props.tabKey); }} style={style}>
            {this.props.tab.head}
        </div>
    }
}

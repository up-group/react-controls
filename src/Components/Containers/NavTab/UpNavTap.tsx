import * as React from "react"

export interface Tab {
    head: string | JSX.Element;
    content: JSX.Element;
}


export type LoadType = "onShow" | "onLoad";

export interface UpNavTabProps {
    tabs: Tab[],
    loadType?: LoadType
}

export interface UpNavTabState {
    selectedTabKey: number;
}

export default class UpNavTab extends React.Component<UpNavTabProps, UpNavTabState>{
    public static defaultProps: UpNavTabProps = {
        loadType: "onLoad",
        tabs: []
    };

    constructor(p, c) {
        super(p, c);
        this.state = {
            selectedTabKey: this.props.tabs.length != 0 ? 0 : -1
        };
    }

    render() {

        if (this.props.loadType === "onShow") {
            var contents = this.props.tabs.filter((v, i) => { return i === this.state.selectedTabKey })
            var content = contents.length != 0 ? contents[0].content : null;
            return <div>
                <TabHeads selectTabKey={this.selectTabKey} heads={this.props.tabs} selectedTabKey={this.state.selectedTabKey} />
                {content}
            </div>

        }
        else if (this.props.loadType === "onLoad") {
            var a = this.props.tabs.map((v, i) => {
                <div key={i} style={{ display: i === this.state.selectedTabKey ? "" : "none" }}>{v}</div>
            })
            return <div>
                <TabHeads selectTabKey={this.selectTabKey} heads={this.props.tabs} selectedTabKey={this.state.selectedTabKey} />
                <TabContents loadType={this.props.loadType} selectedTabKey={this.state.selectedTabKey} contents={this.props.tabs} />
            </div>

        }


    }

    selectTabKey = (tabKey: number) => {
        this.setState({ selectedTabKey: tabKey });
    }
}

export interface TabContentsProps {
    contents: Tab[];
    selectedTabKey: number;
    loadType: LoadType

}

export interface TabContentsState {

}

export class TabContents extends React.Component<TabContentsProps, TabContentsState>{

    constructor(p, c) {
        super(p, c);
        this.state = {};
    }

    render() {
        var contents = this.props.contents.map((v, i) => { return <TAbContent loadType={this.props.loadType} selectedTabKey={this.props.selectedTabKey} tab={v} key={i} tabKey={i} /> });

        return <div>
            {contents}
        </div>
    }
}

export interface TabContentProps {
    tab: Tab;
    tabKey: number;
    selectedTabKey: number;
    loadType: LoadType
}

export interface TabContentState {

}

export class TAbContent extends React.Component<TabContentProps, TabContentState>{

    constructor(p, c) {
        super(p, c);
        this.state = {};
    }

    render() {
        var style: any = {};

        if (this.props.selectedTabKey != this.props.tabKey) {
            style.display = "none"
        }

        return <div style={style}>{this.props.tab.content}</div>
    }
}




export interface TabHeadsProps {
    heads: Tab[];
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

        var headsStyle: React.CSSProperties = { marginBotom: 10, display: "flex", borderBottom: "1px solid #ddd" }

        return <div style={headsStyle}>
            {heads}
        </div>
    }
}

export interface TabHeadProps {
    tab: Tab;
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
            cursor: "pointer",
            borderRadius : "4px 4px 0 0",
            backgroundColor: "white"

        }

        if (this.props.selectedTabKey == this.props.tabKey) {

            style.borderTop = "1px solid #ddd";
            style.borderLeft = "1px solid #ddd";
            style.borderRight = "1px solid #ddd";
        }

        return <div onClick={() => { this.props.selectTabKey(this.props.tabKey); }} style={style}>
            {this.props.tab.head}
        </div>
    }
}
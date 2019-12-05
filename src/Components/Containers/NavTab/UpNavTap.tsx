import * as React from "react"
import { style } from 'typestyle';
import { UpGrid, UpRow, UpCol } from "../Grid";

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
        var contents = this.props.contents.map((v, i) => { return <TabContent loadType={this.props.loadType} selectedTabKey={this.props.selectedTabKey} tab={v} key={i} tabKey={i} /> });

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

export class TabContent extends React.Component<TabContentProps, TabContentState>{

    constructor(p, c) {
        super(p, c);
        this.state = {};
    }

    render() {
        var style: any = { paddingTop: "7px" };

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
        var heads = this.props.heads.map((v, i) => { return <TabHead md={Math.floor(24 / this.props.heads.length)} selectTabKey={this.props.selectTabKey} tab={v} key={i} tabKey={i} selectedTabKey={this.props.selectedTabKey} /> });

        return <UpGrid gutter={0}>
            <UpRow>
                {heads}
            </UpRow>
        </UpGrid>

    }
}

export interface TabHeadProps {
    tab: Tab;
    tabKey: number;
    selectedTabKey: number;
    md: number;
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
        var commonStyle = style({
            marginRight: 2,
            position: "relative",
            display: "block",
            padding: "10px 15px",
            float: "left",
            cursor: "pointer",
            borderRadius: "4px 4px 0 0",
            backgroundColor: "white",
            textAlign: "center",
            width: "100%",
            height: "45px",
            color: "#4E5B59",
            fontFamily: "Roboto",
            fontSize: '14px'
        });

        var selectedTabStyle = style({
            fontWeight: 'bold',
            $nest: {
                '&::before': {
                    content: `''`,
                    color: "transparent",
                    position: "absolute",
                    bottom: "-11px",
                    left: "0",
                    right: "0",
                    margin: "auto",
                    borderWidth: "11px 12px 0px 12px",
                    borderColor: "#F59100 transparent",
                    borderStyle: "solid",
                    "-ms-background-position-x": "-100px",
                    width: 0,
                },
                '&::after': {
                    background: "#F59100",
                    display: "block",
                    width: "100%",
                    height: "5px",
                    content: `''`,
                    left: 0,
                    position: "absolute",
                    bottom: "0px"
                }
            }
        })
        let selectedTabClass = (this.props.selectedTabKey == this.props.tabKey) ? selectedTabStyle : "";
        return <UpCol md={this.props.md}  ><div onClick={() => { this.props.selectTabKey(this.props.tabKey); }} className={`${commonStyle} ${selectedTabClass}`}>
            {this.props.tab.head}
        </div>
        </UpCol>
    }
}
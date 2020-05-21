import * as React from "react"
import { style } from 'typestyle';
import * as classnames from 'classnames';
import { motion, AnimateSharedLayout } from 'framer-motion';
import { NestedCSSProperties } from 'typestyle/lib/types';
import { CustomStyles, getCustomStyles } from '../../../Common/theming/types';

export type UpNavTabCustomStylesKeys = 'navTabWrapper' | 'headWrapper' | 'headItem' | 'content' | 'contentWrapper' ;
export type UpNavTabCustomStyles = CustomStyles<UpNavTabCustomStylesKeys, Partial<UpNavTabProps & TabHeadProps>, UpNavTabState> ;
function getNavTabCustomStyle(key : UpNavTabCustomStylesKeys, customStyles: UpNavTabCustomStyles, props: Partial<UpNavTabProps & TabHeadProps>, state? : UpNavTabState) {
    return getCustomStyles<UpNavTabCustomStylesKeys, Partial<UpNavTabProps & TabHeadProps>, UpNavTabState>(key, customStyles, props, state) ;
}

/// NavTab
export interface Tab {
    head: string | JSX.Element;
    content: JSX.Element;
}

export type LoadType = "onShow" | "onLoad";

export interface UpNavTabProps {
    tabs: Tab[],
    loadType?: LoadType;
    customStyles?: UpNavTabCustomStyles;
}

export interface UpNavTabState {
    selectedTabKey: number;
}

const navTabWrapperStyle = {}

const navTabContentWrapperStyle = {
    marginTop: "20px",
}

const navTabContentStyle = { paddingTop: "14px" };

const navTabHeadsStyle : NestedCSSProperties = {
    listStyle: "none",
    padding: 0,
    margin: 0,
    userSelect: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

const navTabHeadsItemStyle = (props : TabHeadProps) : NestedCSSProperties => ({
    listStyle: "none",
    margin: 0,
    userSelect: "none",
    fontSize: props.tabKey === props.selectedTabKey ? "24px" : "18px",
    marginLeft: "20px",
    position: "relative",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 2,
    padding: "10px 15px",
    borderRadius: "4px 4px 0 0",
    backgroundColor: "white",
    textAlign: "center",
    width: "100%",
    height: "45px",
    fontWeight : props.tabKey === props.selectedTabKey ? 700 : 500,
    color: props.tabKey === props.selectedTabKey ? "#F59100" : "#4E5B59",
    fontFamily: "Roboto, sans-serif"
})

export default function UpNavTab({loadType = "onLoad", tabs =[], customStyles} : UpNavTabProps) {
    const [selectedTabKey, selectTabKey] = React.useState(tabs.length != 0 ? 0 : -1)

    if (loadType === "onShow") {
        const contents = tabs.filter((v, i) => { return i === selectedTabKey })
        const content = contents.length != 0 ? contents[0].content : null;
        return <div>
            <TabHeads selectTabKey={selectTabKey} heads={tabs} selectedTabKey={selectedTabKey} />
            {content}
        </div>
    }
    else if (loadType === "onLoad") {
        const a = tabs.map((tab, index) => {
            <div key={index} style={{ display: index === selectedTabKey ? "" : "none" }}>{tab}</div>
        })
        return <div className={style({...navTabWrapperStyle, ...getNavTabCustomStyle('navTabWrapper', customStyles, {loadType, tabs}, {selectedTabKey})})}>
            <TabHeads selectTabKey={selectTabKey} heads={tabs} selectedTabKey={selectedTabKey} customStyles={customStyles} />
            <TabContents loadType={loadType} selectedTabKey={selectedTabKey} contents={tabs} customStyles={customStyles} />
        </div>
    }
}

/// TabContents

export interface TabContentsProps {
    contents: Tab[];
    selectedTabKey: number;
    loadType: LoadType;
    customStyles?: UpNavTabCustomStyles;
}

export function TabContents(props: TabContentsProps) {
    const contents = props.contents.map((v, i) => { return <TabContent loadType={props.loadType} selectedTabKey={props.selectedTabKey} tab={v} key={i} tabKey={i} /> });
    return <div className={style({...navTabContentWrapperStyle, ...getNavTabCustomStyle('contentWrapper', props.customStyles, null, {selectedTabKey:props.selectedTabKey})})}>
        {contents}
    </div>
}

/// TabContent

export interface TabContentProps {
    tab: Tab;
    tabKey: number;
    selectedTabKey: number;
    loadType: LoadType;
    customStyles?: UpNavTabCustomStyles;
}

export function TabContent( props : TabContentProps) {
    const forceStyle: any = {};

    if (props.selectedTabKey != props.tabKey) {
        forceStyle.display = "none"
    }

    return <div className={style({...navTabContentStyle, ...getNavTabCustomStyle('content', props.customStyles, null, {selectedTabKey:props.selectedTabKey})})} 
                style={forceStyle}>
                {props.tab.content}
            </div>
}

/// TabHeads

export interface TabHeadsProps {
    heads: Tab[];
    selectedTabKey: number;
    selectTabKey: (tabkey: number) => void;
    customStyles?: UpNavTabCustomStyles;
}

export function TabHeads(props: TabHeadsProps) {
    
    var heads = props.heads.map((v, i) => { 
        return <TabHead selectTabKey={props.selectTabKey} tab={v} key={i} tabKey={i} selectedTabKey={props.selectedTabKey} /> 
    });

    const customStyles = getNavTabCustomStyle('headWrapper', props.customStyles, null, {selectedTabKey : props.selectedTabKey} ) ;

    return <AnimateSharedLayout>
      <ol className={classnames('up-nav-tab', style({...navTabHeadsStyle, ...customStyles}))} style={{ transform: "translateZ(0)" }}>
        {heads}
      </ol>
     </AnimateSharedLayout>
}

/// TabHead

export interface TabHeadProps {
    tab: Tab;
    tabKey: number;
    selectedTabKey: number;
    selectTabKey: (tabkey: number) => void;
    customStyles?: UpNavTabCustomStyles;
}

const layoutClass = style({
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
    opacity: 1,
})

const arrowLayoutClass = style({
    background: "#F59100",
    display: "block",
    width: "100%",
    height: "5px",
    left: 0,
    position: "absolute",
    bottom: "0px",
    opacity: 1,
})

export function TabHead(props:TabHeadProps) {

    let selectedTabClass = (props.selectedTabKey == props.tabKey) ?  "up-nav-tab-item__selected" : "";
    
    return <motion.li
            animate
            className={classnames('up-nav-tab-item', style({...navTabHeadsItemStyle(props), ...getNavTabCustomStyle('headItem', props.customStyles, props)}))}
            onClick={() => { props.selectTabKey(props.tabKey); }}>
            {props.selectedTabKey == props.tabKey && (
            <>
                <motion.div
                    animate
                    layoutId={layoutClass}
                    className={layoutClass}
                />
                <motion.div
                    animate
                    layoutId={arrowLayoutClass}
                    className={arrowLayoutClass}
                />
            </>
            )}
            {props.tab.head}
        </motion.li>
}
import { CustomStyles, getCustomStyles } from '../../../Common/theming/types';
 
 export type upNavTabCustomStylesKeys = 'navTabWrapper' | 'headWrapper' | 'headItem' | 'content' | 'contentWrapper';
 export type loadType = 'onShow' | 'onLoad';

// Nav Tab Element
export interface Tab {
    head: string | JSX.Element;
    content: JSX.Element;
}

// Tab 
export interface UpNavTabProps {
    tabs: Tab[],
    loadType?: loadType;
    onSelectedTabChanged?: (selectTabKey: number, tab: Tab) => void;
};

// Tab Content
export interface TabContentProps {
    tab: Tab;
    tabKey: number;
    selectedTabKey: number;
    loadType: loadType;
};

// Tab Header
export interface TabHeadsProps {
    heads: Tab[];
    selectedTabKey: number;
    selectTabKey: (tabkey: number) => void;
};

// Tab Header Item 
export interface TabHeadProps {
    tab: Tab;
    tabKey: number;
    selectedTabKey: number;
    selectTabKey: (tabkey: number) => void;
    customStyles: any;
};
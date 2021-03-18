export type LoadType = 'onShow' | 'onLoad';

export interface Tab {
    head: string | JSX.Element;
    content: JSX.Element;
};

export interface UpNavTabProps {
    /** Tabs  */
    tabs: Tab[],
    /** To change the load mode : display tabs in the same or in different containers */
    loadType?: LoadType;
    /** Callback to execute after tab changing  */
    onSelectedTabChanged?: (selectTabKey: number, tab: Tab) => void;
    /** Tab to display when first displaying */
    selectedTabOnLoad?: number
};

export interface TabContentProps {
    tab: Tab;
    tabKey: number;
    selectedTabKey: number;
    loadType: LoadType;
};

export interface TabContentsProps {
    contents: Tab[];
    selectedTabKey: number;
    loadType: LoadType;
};

export interface TabHeadsProps {
    heads: Tab[];
    selectedTabKey: number;
    selectTabKey: (tabkey: number) => void;
};

export interface TabHeadItemProps {
    tab: Tab;
    tabKey: number;
    selectedTabKey: number;
    selectTabKey: (tabkey: number) => void;
};
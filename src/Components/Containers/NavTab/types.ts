export type LoadType = 'onShow' | 'onLoad';

export interface Tab {
    head: string | JSX.Element;
    content: JSX.Element;
};

export interface UpNavTabProps {
    tabs: Tab[],
    loadType?: LoadType;
    onSelectedTabChanged?: (selectTabKey: number, tab: Tab) => void;
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
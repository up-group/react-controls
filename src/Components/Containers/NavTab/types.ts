import { CustomStyles, getCustomStyles } from '../../../Common/theming/types';

export type UpNavTabCustomStylesKeys = 'navTabWrapper' | 'headWrapper' | 'headItem' | 'content' | 'contentWrapper';
export type LoadType = 'onShow' | 'onLoad';

export type UpNavTabCustomStyles = CustomStyles<UpNavTabCustomStylesKeys, Partial<UpNavTabProps & TabHeadItemProps>, UpNavTabState>;

export interface UpNavTabState {
    selectedTabKey: number;
};

export const getNavTabCustomStyle = (
    key: UpNavTabCustomStylesKeys,
    customStyles: UpNavTabCustomStyles,
    props: Partial<UpNavTabProps & TabHeadItemProps>,
    state?: UpNavTabState
) => getCustomStyles<UpNavTabCustomStylesKeys, Partial<UpNavTabProps & TabHeadItemProps>, UpNavTabState>(key, customStyles, props, state);

export interface Tab {
    head: string | JSX.Element;
    content: JSX.Element;
};

export interface UpNavTabProps {
    tabs: Tab[],
    loadType?: LoadType;
    onSelectedTabChanged?: (selectTabKey: number, tab: Tab) => void;
    customStyles?: UpNavTabCustomStyles;
};

export interface TabContentProps {
    tab: Tab;
    tabKey: number;
    selectedTabKey: number;
    loadType: LoadType;
    customStyles?: UpNavTabCustomStyles;
};

export interface TabContentsProps {
    contents: Tab[];
    selectedTabKey: number;
    loadType: LoadType;
    customStyles?: UpNavTabCustomStyles;
};

export interface TabHeadsProps {
    heads: Tab[];
    selectedTabKey: number;
    selectTabKey: (tabkey: number) => void;
    customStyles?: UpNavTabCustomStyles;//
};

export interface TabHeadItemProps {
    tab: Tab;
    tabKey: number;
    selectedTabKey: number;
    selectTabKey: (tabkey: number) => void;
    customStyles?: UpNavTabCustomStyles;
};
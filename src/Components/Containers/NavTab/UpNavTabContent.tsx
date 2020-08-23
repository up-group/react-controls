import * as React from 'react';
import { style } from 'typestyle';
import { tabContent } from './styles';
import { TabContentsProps, TabContentProps, getNavTabCustomStyle } from './types';


export const TabContentWrapper = (props: TabContentsProps) => {
    const contents = props.contents.map((v, i) => <TabContent loadType={props.loadType} selectedTabKey={props.selectedTabKey} tab={v} key={i} tabKey={i} />);

    return (
        <div className={style({ ...getNavTabCustomStyle('contentWrapper', props.customStyles, null, { selectedTabKey: props.selectedTabKey }) })}>
            {contents}
        </div>
    )
};

const TabContent = (props: TabContentProps) => {
    const forceStyle: any = {};

    if (props.selectedTabKey != props.tabKey) {
        forceStyle.display = 'none';
    }

    return (
        <div
            className={style({ ...tabContent, ...getNavTabCustomStyle('content', props.customStyles, null, { selectedTabKey: props.selectedTabKey }) })}
            style={forceStyle}
        >
            {props.tab.content}
        </div>
    )
};
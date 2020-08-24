import * as React from 'react';
import { TabHeads } from './UpNavTabHead';
import { TabContentWrapper } from './UpNavTabContent'
import { UpNavTabProps } from './types';

const UpNavTab = ({ loadType = 'onLoad', tabs = [], onSelectedTabChanged }: UpNavTabProps) => {

    const [selectedTabKey, selectTabKey] = React.useState<number>(tabs.length !== 0 ? 0 : -1);

    React.useEffect(() => {
        if (onSelectedTabChanged) {
            const tab = tabs.find((v, i) => i === selectedTabKey);
            onSelectedTabChanged(selectedTabKey, tab);
        }
    }, [selectedTabKey]);

    if (loadType === 'onShow') {
        const contents = tabs.filter((v, i) => { return i === selectedTabKey; });
        const content = contents.length !== 0 ? contents[0].content : null;
        return (
            <div>
                <TabHeads
                    selectTabKey={selectTabKey}
                    heads={tabs}
                    selectedTabKey={selectedTabKey}
                />
                {content}
            </div>
        );
    }
    else if (loadType === 'onLoad') {
        return (
            <div>
                <TabHeads
                    selectTabKey={selectTabKey}
                    heads={tabs}
                    selectedTabKey={selectedTabKey}
                />
                <TabContentWrapper
                    loadType={loadType}
                    selectedTabKey={selectedTabKey}
                    contents={tabs}
                />
            </div>
        )
    }
};

export default UpNavTab;
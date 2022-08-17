import * as React from 'react';
import { TabHeads } from './UpNavTabHead';
import { TabContentWrapper } from './UpNavTabContent';
import { UpNavTabProps } from './types';

const UpNavTab: React.FunctionComponent<UpNavTabProps> = ({
  loadType = 'onLoad',
  tabs = [],
  onSelectedTabChanged,
  selectedTabOnLoad = null,
}) => {
  const [selectedTabKey, selectTabKey] = React.useState<number>(tabs.length !== 0 ? selectedTabOnLoad || 0 : -1);

  React.useEffect(() => {
    if (onSelectedTabChanged) {
      const tab = tabs.find((v, i) => i === selectedTabKey);
      onSelectedTabChanged(selectedTabKey, tab);
    }
  }, [selectedTabKey]);

  let tabsToDisplay = tabs;
  let tabKeyToDisplay = selectedTabKey;

  if (loadType === 'onShow') {
    tabsToDisplay = tabs.filter((v, i) => {
      return i === selectedTabKey;
    });
    tabKeyToDisplay = 0;
  }

  return (
    <div>
      <TabHeads selectTabKey={selectTabKey} heads={tabs} selectedTabKey={selectedTabKey} />
      <TabContentWrapper loadType={loadType} selectedTabKey={tabKeyToDisplay} contents={tabsToDisplay} />
    </div>
  );
};

export default UpNavTab;

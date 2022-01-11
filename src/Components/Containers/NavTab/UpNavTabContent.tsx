import * as React from 'react';
import { style } from 'typestyle';
import { tabContent } from './styles';
import { TabContentsProps, TabContentProps } from './types';

export const TabContentWrapper = (props: TabContentsProps) => (
  <>
    {props.contents.map((v, i) => (
      <TabContent loadType={props.loadType} selectedTabKey={props.selectedTabKey} tab={v} key={i} tabKey={i} />
    ))}
  </>
);

const TabContent = (props: TabContentProps) => {
  const forceStyle: any = {};

  if (props.selectedTabKey != props.tabKey) {
    forceStyle.display = 'none';
  }

  return (
    <div className={style({ ...tabContent })} style={forceStyle}>
      {props.tab.content}
    </div>
  );
};

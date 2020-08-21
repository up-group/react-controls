// export function TabContents(props: TabContentsProps) {
//     const contents = props.contents.map((v, i) => { return <TabContent loadType={props.loadType} selectedTabKey={props.selectedTabKey} tab={v} key={i} tabKey={i} /> });
//     return <div className={style({ ...navTabContentWrapperStyle, ...getNavTabCustomStyle('contentWrapper', props.customStyles, null, { selectedTabKey: props.selectedTabKey }) })}>
//         {contents}
//     </div>
// }

// /// TabContent
// export function TabContent(props: TabContentProps) {
//     const forceStyle: any = {};

//     if (props.selectedTabKey != props.tabKey) {
//         forceStyle.display = "none"
//     }

//     return <div className={style({ ...navTabContentStyle, ...getNavTabCustomStyle('content', props.customStyles, null, { selectedTabKey: props.selectedTabKey }) })}
//         style={forceStyle}>
//         {props.tab.content}
//     </div>
// }
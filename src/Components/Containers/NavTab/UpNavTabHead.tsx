// export function TabHeads(props: TabHeadsProps) {

//     var heads = props.heads.map((v, i) => {
//         return <TabHead selectTabKey={props.selectTabKey} tab={v} key={i} tabKey={i} selectedTabKey={props.selectedTabKey} />
//     });

//     const customStyles = getNavTabCustomStyle('headWrapper', props.customStyles, null, { selectedTabKey: props.selectedTabKey });

//     return <AnimateSharedLayout>
//         <ol className={classnames('up-nav-tab', style({ ...navTabHeadsStyle, ...customStyles }))} style={{ transform: "translateZ(0)" }}>
//             {heads}
//         </ol>
//     </AnimateSharedLayout>
// }

// /// TabHead

// export function TabHead(props: TabHeadProps) {

//     let selectedTabClass = (props.selectedTabKey == props.tabKey) ? "up-nav-tab-item__selected" : "";

//     return <motion.li
//         animate
//         className={classnames('up-nav-tab-item', selectedTabClass, style({ ...navTabHeadsItemStyle(props), ...getNavTabCustomStyle('headItem', props.customStyles, props) }))}
//         onClick={() => { props.selectTabKey(props.tabKey); }}>
//         {props.selectedTabKey == props.tabKey && (
//             <>
//                 <motion.div
//                     animate
//                     layoutId={layoutClass}
//                     className={layoutClass}
//                 />
//                 <motion.div
//                     animate
//                     layoutId={arrowLayoutClass}
//                     className={arrowLayoutClass}
//                 />
//             </>
//         )}
//         {props.tab.head}
//     </motion.li>
// }
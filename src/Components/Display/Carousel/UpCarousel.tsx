// Imports
import * as React from 'react';
import * as classnames from 'classnames';
import useHoverIntent from '../../../Common/hooks/useHoverIntent';
import { motion } from "framer-motion";
import { NestedCSSProperties } from 'typestyle/lib/types';
import { style } from 'typestyle';

function getCustomStyle(key : keyof UpCarouselCustomStyles, props : Partial<UpCarouselProps>, selectedItem: CarouselItemProps, item?: CarouselItemProps) : NestedCSSProperties {
  if(props.customStyles && props.customStyles[key]) {
      return props.customStyles[key](props, selectedItem) ;
  }
  return {}
}

 export interface UpCarouselItem {
   key: string;
   title: string;
   logo?: string | unknown;
   color?: string;
   description?: string;
   action?: (item : UpCarouselItem) => Promise<unknown>;
   parameters?: unknown;
 }

export interface UpCarouselProps {
  customStyles?: UpCarouselCustomStyles;
  items: UpCarouselItem[];
  renderItem? : (isOpen:boolean, item: UpCarouselItem) => JSX.Element;
}

export interface CarouselItemProps {
  item: UpCarouselItem;
  currentItem?:UpCarouselItem;
  setCurrentItem?: (item:UpCarouselItem) => void;
  customStyles?: UpCarouselCustomStyles;
}

const getListStyles = (props: Partial<UpCarouselProps>, selectedItem: CarouselItemProps, item? :CarouselItemProps) : NestedCSSProperties => ({
  borderRadius: "25px",
  display: "flex",
  flexDirection: "row",
  listStyle: "none",
  height: "126px",
  padding: 0,
  width: "100%",
  marginLeft: "20px",
  $nest : {
    "ul.up-carousel li:first-child" : {
      marginLeft: selectedItem != null ? "-107px" : 0,
    }
  }
});

const getItemStyles = (props: Partial<UpCarouselProps>, selectedItem: UpCarouselItem, item : UpCarouselItem) : NestedCSSProperties => ({
    backgroundColor: item.color,
    opacity:1,
    borderRadius: "10px",
    padding: "20px",
    overflow: "hidden",
    cursor: "pointer",
    width: "225px",
    height:`${selectedItem && selectedItem.key === item.key ? "250px" : "126px"}`,
    flex: `${selectedItem && selectedItem.key === item.key ? "440px" : "225px"} 0 0`,
    marginRight: "5px",
    marginTop: `${selectedItem && selectedItem.key === item.key ? "-62px" : "0px"}`,
    $nest : {
      "li:lastChild" : {
        marginRight: "0px",  
      },
  }
});


export type GetterStyle = (props: Partial<UpCarouselProps>, currentItem: CarouselItemProps) => NestedCSSProperties

const defaultRenderItem = (isOpen : boolean, item: UpCarouselItem) => {
  return <div>
    <h3>{item.title}</h3>
    {isOpen &&
      <p>{item.description}</p>
    }
  </div>
}

export interface UpCarouselCustomStyles {
  list? : GetterStyle;
  title? : GetterStyle;
  item? : GetterStyle;
}

const Item = ({ item, currentItem, setCurrentItem, customStyles, renderItem, ...props }) => {
  const isOpen = currentItem && item.key === currentItem.key;

  const handlers = useHoverIntent(
    () => setCurrentItem(item),
    () => isOpen && setCurrentItem(null),
    !currentItem
  );

  const currentRenderItem = renderItem || defaultRenderItem ;

  return (
    <motion.li
      animate
      transition={{ duration: 0.4, ease: [0.37, 0.04, 0.2, 1] }}
      className={classnames("up-carousel-item", style({...getItemStyles({customStyles}, currentItem, item), ...getCustomStyle('item', {customStyles},  currentItem, item)}))}
      {...props}
      {...handlers}
      onClick={(e) => item.action(item)}
    >{currentRenderItem(isOpen, item)}
    </motion.li>
  );
}   

const UpCarousel = (props: UpCarouselProps) => {
  const [currentItem, setCurrentItem] = React.useState<CarouselItemProps>(null);

  return (
    <ul className={classnames("up-carousel", style({...getListStyles(props, currentItem), ...getCustomStyle('list', props,  currentItem)}))}>
      {props.items.map(item => (
        <Item
          key={item.color}
          item={item}
          currentItem={currentItem}
          customStyles={props.customStyles}
          setCurrentItem={setCurrentItem}
          renderItem={props.renderItem}
        />
      ))}
    </ul>
  );
}

export default UpCarousel;
// Imports
import * as React from 'react';
import * as classnames from 'classnames';
import useHoverIntent from '../../../Common/hooks/useHoverIntent';
import { motion } from "framer-motion";
import { NestedCSSProperties } from 'typestyle/lib/types';
import { style } from 'typestyle';

function getCustomStyle(key : keyof UpCarouselCustomStyles, props : Partial<UpCarouselProps>, selectedItem: CarouselItempProps, item?: CarouselItempProps) : NestedCSSProperties {
  if(props.customStyles && props.customStyles[key]) {
      return props.customStyles[key](props, selectedItem) ;
  }
  return {}
}

export interface UpCarouselProps {
  customStyles?: UpCarouselCustomStyles;
  items: CarouselItempProps[];
}

export interface CarouselItempProps {
  color: string;
  currentItem?:CarouselItempProps;
  setCurrentItem?: (item:CarouselItempProps) => void;
  customStyles?: UpCarouselCustomStyles;
}

const getListStyles = (props: Partial<UpCarouselProps>, selectedItem: CarouselItempProps, item? :CarouselItempProps) : NestedCSSProperties => ({
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

const getItemStyles = (props: Partial<UpCarouselProps>, selectedItem: CarouselItempProps, item : CarouselItempProps) : NestedCSSProperties => ({
    backgroundColor: item.color,
    opacity:1,
    borderRadius: "10px",
    padding: "20px",
    overflow: "hidden",
    cursor: "pointer",
    width: "225px",
    height:`${selectedItem && selectedItem.color === item.color ? "250px" : "126px"}`,
    flex: `${selectedItem && selectedItem.color === item.color ? "440px" : "225px"} 0 0`,
    marginRight: "5px",
    marginTop: `${selectedItem && selectedItem.color === item.color ? "-62px" : "0px"}`,
    $nest : {
      "li:lastChild" : {
        marginRight: "0px",  
      },
  }
});


export type GetterStyle = (props: Partial<UpCarouselProps>, currentItem: CarouselItempProps) => NestedCSSProperties

export interface UpCarouselCustomStyles {
  list? : GetterStyle;
  title? : GetterStyle;
  item? : GetterStyle;
}

const Item = ({ color, currentItem, setCurrentItem, customStyles, ...props }) => {
  const isOpen = currentItem && color === currentItem.color;

  const handlers = useHoverIntent(
    () => setCurrentItem({ color }),
    () => isOpen && setCurrentItem(null),
    !currentItem
  );

  return (
    <motion.li
      animate
      transition={{ duration: 0.4, ease: [0.37, 0.04, 0.2, 1] }}
      className={classnames("up-carousel-item", style({...getItemStyles({customStyles}, currentItem, {color}), ...getCustomStyle('item', {customStyles},  currentItem, {color})}))}
      {...props}
      {...handlers}
    />
  );
}   

const UpCarousel = (props: UpCarouselProps) => {
  const [currentItem, setCurrentItem] = React.useState<CarouselItempProps>(null);

  return (
    <ul className={classnames("up-carousel", style({...getListStyles(props, currentItem), ...getCustomStyle('list', props,  currentItem)}))}>
      {props.items.map(item => (
        <Item
          key={item.color}
          {...item}
          currentItem={currentItem}
          customStyles={props.customStyles}
          setCurrentItem={setCurrentItem}
        />
      ))}
    </ul>
  );
}

export default UpCarousel;
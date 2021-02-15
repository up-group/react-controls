// Imports
import * as React from 'react';
import * as classnames from 'classnames';
import useHoverIntent from '../../../Common/hooks/useHoverIntent';
import { motion } from "framer-motion";
import { style } from 'typestyle';
import { CarouselItemProps, UpCarouselItem, UpCarouselProps } from './types';
import { getCustomStyle, getItemStyles, getListStyles } from './styles';

const defaultRenderItem = (isOpen: boolean, item: UpCarouselItem) => {
    return <div>
        <h3>{item.title}</h3>
        {isOpen && <p>{item.description}</p>
        }
    </div>
};

const Item = ({ item, currentItem, setCurrentItem, customStyles, renderItem, ...props }) => {
    const isOpen = currentItem && item.key === currentItem.key;

    const handlers = useHoverIntent(
        () => setCurrentItem(item),
        () => isOpen && setCurrentItem(null),
        !currentItem
    );

    const currentRenderItem = renderItem || defaultRenderItem;

    return (
        <motion.li
            animate
            transition={{ duration: 0.4, ease: [0.37, 0.04, 0.2, 1] }}
            className={classnames("up-carousel-item", style({ ...getItemStyles({ customStyles }, currentItem, item), ...getCustomStyle('item', { customStyles }, currentItem, item) }))}
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
        <ul className={classnames("up-carousel", style({ ...getListStyles(props, currentItem), ...getCustomStyle('list', props, currentItem) }))}>
            {props.items && props.items.map(item => (
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
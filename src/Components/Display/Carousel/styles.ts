import { CarouselItemProps, UpCarouselCustomStyles, UpCarouselItem, UpCarouselProps } from './types';
import { NestedCSSProperties } from 'typestyle/lib/types';
import { toRem } from '../../../Common/theming/utils';

export const getCustomStyle = (key: keyof UpCarouselCustomStyles, props: Partial<UpCarouselProps>, selectedItem: CarouselItemProps, item?: CarouselItemProps): NestedCSSProperties => {
    if (props.customStyles && props.customStyles[key]) {
        return props.customStyles[key](props, selectedItem);
    }
    return {};
};

export const getListStyles = (props: Partial<UpCarouselProps>, selectedItem: CarouselItemProps, item?: CarouselItemProps): NestedCSSProperties => ({
    borderRadius: toRem(25),
    display: "flex",
    flexDirection: "row",
    listStyle: "none",
    height: toRem(126),
    padding: 0,
    width: "100%",
    marginLeft: toRem(20),
    $nest: {
        "ul.up-carousel li:first-child": {
            marginLeft: selectedItem != null ? toRem(-107) : 0,
        }
    }
});

export const getItemStyles = (props: Partial<UpCarouselProps>, selectedItem: UpCarouselItem, item: UpCarouselItem): NestedCSSProperties => ({
    backgroundColor: item.color,
    opacity: 1,
    borderRadius: toRem(10),
    padding: toRem(20),
    overflow: "hidden",
    cursor: "pointer",
    width: toRem(225),
    height: `${selectedItem && selectedItem.key === item.key ? toRem(250) : toRem(126)}`,
    flex: `${selectedItem && selectedItem.key === item.key ? toRem(440) : toRem(225)} 0 0`,
    marginRight: "5px",
    marginTop: `${selectedItem && selectedItem.key === item.key ? toRem(-62) : 0}`,
    $nest: {
        "li:lastChild": {
            marginRight: 0,
        },
    }
});
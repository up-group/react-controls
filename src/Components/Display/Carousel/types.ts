import { NestedCSSProperties } from 'typestyle/lib/types';

export interface UpCarouselItem {
  key: string;
  title: string;
  logo?: string | unknown;
  color?: string;
  description?: string;
  action?: (item: UpCarouselItem) => Promise<unknown>;
  parameters?: unknown;
}

export type GetterStyle = (props: Partial<UpCarouselProps>, currentItem: CarouselItemProps) => NestedCSSProperties;

export interface UpCarouselCustomStyles {
  list?: GetterStyle;
  title?: GetterStyle;
  item?: GetterStyle;
}

export interface UpCarouselProps {
  customStyles?: UpCarouselCustomStyles;
  items: UpCarouselItem[];
  renderItem?: (isOpen: boolean, item: UpCarouselItem) => JSX.Element;
}

export interface CarouselItemProps {
  item: UpCarouselItem;
  currentItem?: UpCarouselItem;
  setCurrentItem?: (item: UpCarouselItem) => void;
  customStyles?: UpCarouselCustomStyles;
}

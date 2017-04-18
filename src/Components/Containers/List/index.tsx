import * as React from 'react';
import { UnorderedListStyled, ListItemStyled } from './styles';
import { HeadlineSize, FontWeight, ListDisposition } from './types';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import { Margin } from "../../Display/Paragraph/types";
import { FilterProps } from "../../../Common/utils/types";
import { ThemeInterface } from "../../../Common/theming/types";

export interface PropsStyled  {
  color?: string;
  textAlign?: string;
  fontSize?: HeadlineSize;
  fontWeight?: FontWeight;
  margin?: Margin;
  sortable?:boolean;
  type?:string;
  disposition?:ListDisposition;
  theme? : ThemeInterface;
  border?:boolean;
}

export interface Item {
  text:string;
  icon?:string;
  link?:string;
  index?:number;
}

export interface PropsItem extends PropsStyled {}

interface ChangeOrderEvent {
  oldIndex:number;
  newIndex:number;
}
export interface PropsComponent extends PropsStyled { 
  items:Array<Item>;
  onSortEnd?:(event:ChangeOrderEvent) => void;
}

const defaultPropsStyled : PropsStyled = {
    color: '#000000',
    textAlign: 'center',
    fontSize: 'medium',
    fontWeight: 400,
    margin: 'medium',
    type: 'none',
    border:true,
    disposition:'vertical'
  };
interface SortableProps {
  item:Item;
  props:PropsStyled;
}

const SortableItem = SortableElement((couple: SortableProps) => {
  const {text} = couple.item;
  return <ListItemStyled {...couple.props}>{text}</ListItemStyled>
});

const SortableList = SortableContainer((props:PropsComponent) => {

  const {items, ...rest} = props;
  const propsStyled = FilterProps<PropsStyled>(rest, defaultPropsStyled) ;
  
  return (
    <UnorderedListStyled>
      {items.map((value, index) => (
        <SortableItem key={`item-${index}`} index={index} item={value} props={propsStyled} />
      ))}
    </UnorderedListStyled>
  );
});

class List extends React.Component<PropsComponent, undefined> {
  public static defaultProps: PropsComponent = {
    color: defaultPropsStyled.color,
    textAlign: defaultPropsStyled.textAlign,
    fontSize: defaultPropsStyled.fontSize,
    fontWeight: defaultPropsStyled.fontWeight,
    margin: defaultPropsStyled.margin,
    type: defaultPropsStyled.type,
    disposition:defaultPropsStyled.disposition,
    border:defaultPropsStyled.border,
    items:[]
  };

  constructor(props:PropsComponent) {
    super(props) ;
    this.onSortEnd = this.onSortEnd.bind(this);
  }

  public render() {
    const {items, ...rest} = this.props;
    const Items = items.map( (item:Item, index:number) => {
      return <ListItem key={`item-${index}`} index={index} {...item}  />
    } ) 
    
    // const ItemsSort = items.map( (item:Item, index:number) => {
    //   return <SortableItem key={`item-${index}`} index={index} value={item.text}  />
    // } )

    {/*<SortableContainer onSortEnd={this.onSortEnd}>
          {ItemsSort}
        </SortableContainer>*/}
    const propsStyled = FilterProps<PropsStyled>(rest, defaultPropsStyled) ;
   
    if(this.props.sortable) {
      return (
        <SortableList items={items} onSortEnd={this.onSortEnd} {...propsStyled}/>
      );
    } else {
        return (
            <UnorderedListStyled {...propsStyled}>
            {Items}
            </UnorderedListStyled>
      );
    }
  }

  onSortEnd(e:ChangeOrderEvent) {
    if(typeof this.props.onSortEnd == "function")
      this.props.onSortEnd(e) ;
  };
}

class ListItem extends React.Component<Item, undefined> {
  public static defaultProps: Item = {
    text:""
  };

  public render() {
      return (
        <ListItemStyled>
          {this.props.text}
        </ListItemStyled>
      )
  }
}

export default List;

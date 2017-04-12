import * as React from 'react';
import { UnorderedListStyled, ListItemStyled } from './styles';
import { Margin } from '../Paragraph/types';
import { HeadlineSize, FontWeight, ListType, ListDisposition } from './types';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import {FilterProps} from '../utils/types'

export interface PropsStyled {
  color?: string;
  textAlign?: string;
  fontSize?: HeadlineSize;
  fontWeight?: FontWeight;
  margin?: Margin;
  sortable?:boolean;
  type?:ListType;
  disposition?:ListDisposition;
}

export interface Item {
  id?: number;
  text:string;
  icon?:string;
  link?:string;
  sortable?:boolean;
  index?:number;
}

export interface PropsItem extends PropsStyled { 
  
}
interface ChangeOrderEvent {
  oldIndex:number;
  newIndex:number;
}
export interface PropsComponent extends PropsStyled { 
  items:Array<Item>;
  onSortEnd?:(event:ChangeOrderEvent) => void;
}

class List extends React.Component<PropsComponent, undefined> {
  public static defaultProps: PropsComponent = {
    color: '#000000',
    textAlign: 'center',
    fontSize: 'medium',
    fontWeight: 400,
    margin: 'medium',
    type: 'default',
    disposition:'vertical',
    items:[]
  };

  constructor(props:PropsComponent) {
    super(props) ;
    this.onSortEnd = this.onSortEnd.bind(this);
  }

  public render() {
    const { children, sortable, items, ...rest } = this.props;
    const Items = items.map( (item:Item, index:number) => {
      return <ListItem key={`item-${index}`} index={index} sortable={sortable} {...item}  />
    } )
    const propsStyled = FilterProps<PropsStyled>(rest) ;
    if(this.props.sortable) {
      return (
        <SortableContainer onSortEnd={this.onSortEnd}>
          <UnorderedListStyled {...propsStyled}>
          {Items}
          </UnorderedListStyled>
        </SortableContainer>
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
    this.props.onSortEnd(e) ;
  };
}

class ListItem extends React.Component<Item, undefined> {
  public static defaultProps: Item = {
    text:""
  };

  public render() {
    if(this.props.sortable) {
      return <SortableElement><ListItemStyled>
        {this.props.text}
    </ListItemStyled></SortableElement>
    } else {
      return <ListItemStyled>
      {this.props.text}
    </ListItemStyled>
    }
  }
}

export default List;

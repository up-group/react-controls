import React from 'react';
import Item from './Item';
// import ItemGroup from './ItemGroup'

import { _get, arraysEqual, keyBy } from '../utils';

const canResizeLeft = (item, canResize) => {
  const value = _get(item, 'canResize') !== undefined ? _get(item, 'canResize') : canResize;
  return value === 'left' || value === 'both';
};

const canResizeRight = (item, canResize) => {
  const value = _get(item, 'canResize') !== undefined ? _get(item, 'canResize') : canResize;
  return value === 'right' || value === 'both' || value === true;
};

export interface ItemsProps {
  groups: any[];
  items: any[];

  canvasTimeStart: number;
  canvasTimeEnd: number;
  canvasWidth: number;
  lineHeight: number;

  dragSnap: number;
  minResizeWidth: number;
  selectedItem: string | number;

  canChangeGroup: boolean;
  canMove: boolean;
  canResize: boolean | 'left' | 'right' | 'both';
  canSelect: boolean;

  keys: any;

  moveResizeValidator: Function;
  itemSelect: Function;
  itemDrag: Function;
  itemDrop: Function;
  itemResizing: Function;
  itemResized: Function;

  onItemDoubleClick: Function;
  onItemContextMenu: Function;
  dimensionItems;

  useResizeHandle;
  topOffset;
  groupHeights;
  groupTops;
}

interface ItemsState {}

export default class Items extends React.Component<any, any> {
  constructor(p, c) {
    super(p, c);
  }
  render() {
    const { canvasTimeStart, canvasTimeEnd, dimensionItems } = this.props;
    const { itemIdKey, itemGroupKey } = this.props.keys;

    const groupOrders = this.getGroupOrders();
    const visibleItems = this.getVisibleItems(canvasTimeStart, canvasTimeEnd, groupOrders);
    const sortedDimensionItems = keyBy(dimensionItems, 'id');

    return (
      <div className={'rct-items'}>
        {visibleItems
          .filter(item => sortedDimensionItems[_get(item, itemIdKey)])
          .map(item => (
            <Item
              key={_get(item, itemIdKey)}
              item={item}
              keys={this.props.keys}
              order={groupOrders[_get(item, itemGroupKey)]}
              dimensions={sortedDimensionItems[_get(item, itemIdKey)].dimensions}
              selected={this.props.selectedItem === _get(item, itemIdKey)}
              canChangeGroup={
                _get(item, 'canChangeGroup') !== undefined ? _get(item, 'canChangeGroup') : this.props.canChangeGroup
              }
              canMove={_get(item, 'canMove') !== undefined ? _get(item, 'canMove') : this.props.canMove}
              canResizeLeft={canResizeLeft(item, this.props.canResize)}
              canResizeRight={canResizeRight(item, this.props.canResize)}
              canSelect={_get(item, 'canSelect') !== undefined ? _get(item, 'canSelect') : this.props.canSelect}
              useResizeHandle={this.props.useResizeHandle}
              topOffset={this.props.topOffset}
              groupHeights={this.props.groupHeights}
              groupTops={this.props.groupTops}
              canvasTimeStart={this.props.canvasTimeStart}
              canvasTimeEnd={this.props.canvasTimeEnd}
              canvasWidth={this.props.canvasWidth}
              lineHeight={this.props.lineHeight}
              dragSnap={this.props.dragSnap}
              minResizeWidth={this.props.minResizeWidth}
              onResizing={this.props.itemResizing}
              onResized={this.props.itemResized}
              moveResizeValidator={this.props.moveResizeValidator}
              onDrag={this.props.itemDrag}
              onDrop={this.props.itemDrop}
              onItemDoubleClick={this.props.onItemDoubleClick}
              onContextMenu={this.props.onItemContextMenu}
              onSelect={this.props.itemSelect}
            />
          ))}
      </div>
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !(
      arraysEqual(nextProps.groups, this.props.groups) &&
      arraysEqual(nextProps.items, this.props.items) &&
      nextProps.keys === this.props.keys &&
      nextProps.canvasTimeStart === this.props.canvasTimeStart &&
      nextProps.canvasTimeEnd === this.props.canvasTimeEnd &&
      nextProps.canvasWidth === this.props.canvasWidth &&
      nextProps.selectedItem === this.props.selectedItem &&
      nextProps.lineHeight === this.props.lineHeight &&
      nextProps.dragSnap === this.props.dragSnap &&
      nextProps.minResizeWidth === this.props.minResizeWidth &&
      nextProps.canChangeGroup === this.props.canChangeGroup &&
      nextProps.canMove === this.props.canMove &&
      nextProps.canResize === this.props.canResize &&
      nextProps.canSelect === this.props.canSelect &&
      nextProps.dimensionItems === this.props.dimensionItems &&
      nextProps.topOffset === this.props.topOffset
    );
  }

  getGroupOrders() {
    const { groupIdKey } = this.props.keys;

    const groupOrders = {};

    for (let i = 0; i < this.props.groups.length; i++) {
      groupOrders[_get(this.props.groups[i], groupIdKey)] = i;
    }

    return groupOrders;
  }

  getVisibleItems(canvasTimeStart, canvasTimeEnd, groupOrders) {
    const { itemTimeStartKey, itemTimeEndKey } = this.props.keys;

    return this.props.items.filter(item => {
      return _get(item, itemTimeStartKey) <= canvasTimeEnd && _get(item, itemTimeEndKey) >= canvasTimeStart;
    });
  }
}

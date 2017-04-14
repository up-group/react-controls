"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("./styles");
const react_sortable_hoc_1 = require("react-sortable-hoc");
const types_1 = require("../../../Common/utils/types");
const defaultPropsStyled = {
    color: '#000000',
    textAlign: 'center',
    fontSize: 'medium',
    fontWeight: 400,
    margin: 'medium',
    type: 'none',
    border: true,
    disposition: 'vertical'
};
const SortableItem = react_sortable_hoc_1.SortableElement((couple) => {
    const { text } = couple.item;
    return React.createElement(styles_1.ListItemStyled, Object.assign({}, couple.props), text);
});
const SortableList = react_sortable_hoc_1.SortableContainer((props) => {
    const { items } = props, rest = __rest(props, ["items"]);
    const propsStyled = types_1.FilterProps(rest, defaultPropsStyled);
    return (React.createElement(styles_1.UnorderedListStyled, null, items.map((value, index) => (React.createElement(SortableItem, { key: `item-${index}`, index: index, item: value, props: propsStyled })))));
});
class List extends React.Component {
    constructor(props) {
        super(props);
        this.onSortEnd = this.onSortEnd.bind(this);
    }
    render() {
        const _a = this.props, { items } = _a, rest = __rest(_a, ["items"]);
        const Items = items.map((item, index) => {
            return React.createElement(ListItem, Object.assign({ key: `item-${index}`, index: index }, item));
        });
        {
        }
        const propsStyled = types_1.FilterProps(rest, defaultPropsStyled);
        if (this.props.sortable) {
            return (React.createElement(SortableList, Object.assign({ items: items, onSortEnd: this.onSortEnd }, propsStyled)));
        }
        else {
            return (React.createElement(styles_1.UnorderedListStyled, Object.assign({}, propsStyled), Items));
        }
    }
    onSortEnd(e) {
        if (typeof this.props.onSortEnd == "function")
            this.props.onSortEnd(e);
    }
    ;
}
List.defaultProps = {
    color: defaultPropsStyled.color,
    textAlign: defaultPropsStyled.textAlign,
    fontSize: defaultPropsStyled.fontSize,
    fontWeight: defaultPropsStyled.fontWeight,
    margin: defaultPropsStyled.margin,
    type: defaultPropsStyled.type,
    disposition: defaultPropsStyled.disposition,
    border: defaultPropsStyled.border,
    items: []
};
class ListItem extends React.Component {
    render() {
        return (React.createElement(styles_1.ListItemStyled, null, this.props.text));
    }
}
ListItem.defaultProps = {
    text: ""
};
exports.default = List;
//# sourceMappingURL=index.js.map
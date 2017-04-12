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
class List extends React.Component {
    constructor(props) {
        super(props);
        this.onSortEnd = this.onSortEnd.bind(this);
    }
    render() {
        const _a = this.props, { children, sortable, items } = _a, rest = __rest(_a, ["children", "sortable", "items"]);
        const Items = items.map((item, index) => {
            return React.createElement(ListItem, Object.assign({ key: `item-${index}`, index: index, sortable: sortable }, item));
        });
        if (this.props.sortable) {
            return (React.createElement(react_sortable_hoc_1.SortableContainer, { onSortEnd: this.onSortEnd },
                React.createElement(styles_1.UnorderedListStyled, Object.assign({}, rest), Items)));
        }
        else {
            return (React.createElement(styles_1.UnorderedListStyled, Object.assign({}, rest), Items));
        }
    }
    onSortEnd(e) {
        this.props.onSortEnd(e);
    }
    ;
}
List.defaultProps = {
    color: '#000000',
    textAlign: 'center',
    fontSize: 'medium',
    fontWeight: 400,
    margin: 'medium',
    type: 'default',
    disposition: 'vertical',
    items: []
};
class ListItem extends React.Component {
    render() {
        if (this.props.sortable) {
            return React.createElement(react_sortable_hoc_1.SortableElement, null,
                React.createElement(styles_1.ListItemStyled, null, this.props.text));
        }
        else {
            return React.createElement(styles_1.ListItemStyled, null, this.props.text);
        }
    }
}
ListItem.defaultProps = {
    text: ""
};
exports.default = List;
//# sourceMappingURL=index.js.map
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var React = require("react");
var styles_1 = require("./styles");
var react_sortable_hoc_1 = require("react-sortable-hoc");
var types_1 = require("../../../Common/utils/types");
var defaultPropsStyled = {
    color: '#000000',
    textAlign: 'center',
    fontSize: 'medium',
    fontWeight: 400,
    margin: 'medium',
    type: 'none',
    border: true,
    disposition: 'vertical'
};
var SortableItem = react_sortable_hoc_1.SortableElement(function (couple) {
    var text = couple.item.text;
    return React.createElement(styles_1.ListItemStyled, __assign({}, couple.props), text);
});
var SortableList = react_sortable_hoc_1.SortableContainer(function (props) {
    var items = props.items, rest = __rest(props, ["items"]);
    var propsStyled = types_1.FilterProps(rest, defaultPropsStyled);
    return (React.createElement(styles_1.UnorderedListStyled, null, items.map(function (value, index) { return (React.createElement(SortableItem, { key: "item-" + index, index: index, item: value, props: propsStyled })); })));
});
var List = (function (_super) {
    __extends(List, _super);
    function List(props) {
        var _this = _super.call(this, props) || this;
        _this.onSortEnd = _this.onSortEnd.bind(_this);
        return _this;
    }
    List.prototype.render = function () {
        var _a = this.props, items = _a.items, rest = __rest(_a, ["items"]);
        var Items = items.map(function (item, index) {
            return React.createElement(ListItem, __assign({ key: "item-" + index, index: index }, item));
        });
        {
        }
        var propsStyled = types_1.FilterProps(rest, defaultPropsStyled);
        if (this.props.sortable) {
            return (React.createElement(SortableList, __assign({ items: items, onSortEnd: this.onSortEnd }, propsStyled)));
        }
        else {
            return (React.createElement(styles_1.UnorderedListStyled, __assign({}, propsStyled), Items));
        }
    };
    List.prototype.onSortEnd = function (e) {
        if (typeof this.props.onSortEnd == "function")
            this.props.onSortEnd(e);
    };
    ;
    return List;
}(React.Component));
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
var ListItem = (function (_super) {
    __extends(ListItem, _super);
    function ListItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListItem.prototype.render = function () {
        return (React.createElement(styles_1.ListItemStyled, null, this.props.text));
    };
    return ListItem;
}(React.Component));
ListItem.defaultProps = {
    text: ""
};
exports.default = List;
//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var styleUtils_1 = require("./styleUtils");
exports.BoxStyles = (_a = ["\n  display: flex;\n  background-color: ", ";\n  justify-content: ", ";\n  align-items: ", ";\n  flex-direction: ", ";\n  flex-wrap: ", ";\n  padding: ", ";\n  margin: ", ";\n  width: ", ";\n  height: ", ";\n  flex-basis: auto;\n  min-height: ", ";\n  min-width: ", ";\n  cursor: ", ";\n"], _a.raw = ["\n  display: flex;\n  background-color: ", ";\n  justify-content: ", ";\n  align-items: ", ";\n  flex-direction: ", ";\n  flex-wrap: ", ";\n  padding: ", ";\n  margin: ", ";\n  width: ", ";\n  height: ", ";\n  flex-basis: auto;\n  min-height: ", ";\n  min-width: ", ";\n  cursor: ", ";\n"], styled_components_1.css(_a, function (_a) {
    var backgroundColor = _a.backgroundColor;
    return backgroundColor || 'transparent';
}, function (_a) {
    var justifyContent = _a.justifyContent;
    return justifyContent || 'flex-start';
}, function (_a) {
    var alignItems = _a.alignItems;
    return alignItems || 'flex-start';
}, function (_a) {
    var flexDirection = _a.flexDirection;
    return flexDirection || 'column';
}, function (_a) {
    var flexWrap = _a.flexWrap, reverse = _a.reverse;
    return styleUtils_1.calculateFlexWrap(flexWrap, reverse);
}, function (_a) {
    var pad = _a.pad;
    return styleUtils_1.sizeToString(pad);
}, function (_a) {
    var margin = _a.margin;
    return styleUtils_1.sizeToString(margin);
}, function (_a) {
    var boxSize = _a.boxSize;
    return styleUtils_1.boxSizeToStyle(boxSize).width;
}, function (_a) {
    var boxSize = _a.boxSize;
    return styleUtils_1.boxSizeToStyle(boxSize).height;
}, function (_a) {
    var full = _a.full;
    return styleUtils_1.calculateFullStyle(full, 'vh');
}, function (_a) {
    var full = _a.full;
    return styleUtils_1.calculateFullStyle(full, 'vw');
}, function (_a) {
    var selectable = _a.selectable;
    return selectable ? 'pointer' : 'inherit';
}));
exports.default = (_b = ["\n  ", "\n"], _b.raw = ["\n  ", "\n"], styled_components_1.default.div(_b, exports.BoxStyles));
var _a, _b;
//# sourceMappingURL=styles.js.map
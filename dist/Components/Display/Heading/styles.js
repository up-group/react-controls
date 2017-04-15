"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var styles_1 = require("../Paragraph/styles");
var styleUtils_1 = require("./styleUtils");
var truncateCss = function (truncate) {
    if (truncate) {
        return (_a = ["\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    "], _a.raw = ["\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    "], styled_components_1.css(_a));
    }
    return '';
    var _a;
};
var textTransformCss = function (upcase) {
    if (upcase) {
        return (_a = ["\n      text-transform: uppercase;\n    "], _a.raw = ["\n      text-transform: uppercase;\n    "], styled_components_1.css(_a));
    }
    return '';
    var _a;
};
var HeadingStyles = (_a = ["\n  font-size: ", ";\n  text-align: ", ";\n  color: ", ";\n  ", ";\n  ", ";\n  ", ";\n"], _a.raw = ["\n  font-size: ", ";\n  text-align: ", ";\n  color: ", ";\n  ", ";\n  ", ";\n  ", ";\n"], styled_components_1.css(_a, function (props) { return styleUtils_1.calculateSize(props.tag); }, function (props) { return props.textAlign; }, function (props) { return props.color; }, function (props) { return truncateCss(props.truncate); }, function (props) { return textTransformCss(props.upcase); }, function (props) { return styles_1.marginCss(props.margin); }));
exports.H1 = (_b = ["\n  ", "\n"], _b.raw = ["\n  ", "\n"], styled_components_1.default.h1(_b, HeadingStyles));
exports.H2 = (_c = ["\n  ", "\n"], _c.raw = ["\n  ", "\n"], styled_components_1.default.h2(_c, HeadingStyles));
exports.H3 = (_d = ["\n  ", "\n"], _d.raw = ["\n  ", "\n"], styled_components_1.default.h3(_d, HeadingStyles));
exports.H4 = (_e = ["\n  ", "\n"], _e.raw = ["\n  ", "\n"], styled_components_1.default.h4(_e, HeadingStyles));
exports.H5 = (_f = ["\n  ", "\n"], _f.raw = ["\n  ", "\n"], styled_components_1.default.h5(_f, HeadingStyles));
var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=styles.js.map
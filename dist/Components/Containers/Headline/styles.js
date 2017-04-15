"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styleUtils_1 = require("./styleUtils");
var styled_components_1 = require("styled-components");
var styles_1 = require("../../Display/Paragraph/styles");
exports.HeadlineStyled = (_a = ["\n  text-align: center;\n  font-size: ", ";\n  text-align: ", ";\n  color: ", ";\n  font-weight: ", ";\n  ", ";\n"], _a.raw = ["\n  text-align: center;\n  font-size: ", ";\n  text-align: ", ";\n  color: ", ";\n  font-weight: ", ";\n  ", ";\n"], styled_components_1.default.h1(_a, function (props) { return styleUtils_1.default(props.fontSize); }, function (props) { return props.textAlign; }, function (props) { return props.color; }, function (props) { return props.fontWeight; }, function (props) { return styles_1.marginCss(props.margin); }));
var _a;
//# sourceMappingURL=styles.js.map
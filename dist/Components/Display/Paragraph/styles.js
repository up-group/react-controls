"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var styleUtils_1 = require("./styleUtils");
var defaultProps = {
    color: '#fff',
    textAlign: 'center',
    paragraphSize: 'medium',
    margin: 'medium',
};
function marginCss(margin) {
    return (_a = ["\n    margin-top: ", ";\n    margin-bottom: ", ";\n  "], _a.raw = ["\n    margin-top: ", ";\n    margin-bottom: ", ";\n  "], styled_components_1.css(_a, styleUtils_1.calculateMargin(margin), styleUtils_1.calculateMargin(margin)));
    var _a;
}
exports.marginCss = marginCss;
;
exports.style = (_a = ["\n  max-width: 630px;\n  text-align: ", ";\n  color: ", ";\n  ", ";\n  font-size: ", ";\n"], _a.raw = ["\n  max-width: 630px;\n  text-align: ", ";\n  color: ", ";\n  ", ";\n  font-size: ", ";\n"], styled_components_1.css(_a, function (props) { return props.textAlign || defaultProps.textAlign; }, function (props) { return props.color || defaultProps.color; }, function (props) { return marginCss(props.margin || defaultProps.margin); }, function (props) { return styleUtils_1.default(props.paragraphSize || defaultProps.paragraphSize); }));
exports.default = exports.style;
var _a;
//# sourceMappingURL=styles.js.map
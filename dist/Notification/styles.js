"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var Box_1 = require("../Box");
var colorMap_1 = require("../theming/colorMap");
var backgroundColor = function (status) {
    return (_a = ["\n  background-color: ", ";\n"], _a.raw = ["\n  background-color: ", ";\n"], styled_components_1.css(_a, colorMap_1.default[status] || colorMap_1.default.offwhite));
    var _a;
};
exports.default = (_a = ["\n  ", "\n"], _a.raw = ["\n  ", "\n"], styled_components_1.default(Box_1.default)(_a, function (props) { return backgroundColor(props.status); }));
var _a;
//# sourceMappingURL=styles.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var maps_1 = require("./maps");
var default_1 = require("./default");
var styled_components_1 = require("styled-components");
var propsToSize = function (_a) {
    var size = _a.size;
    var imageSize = size || 'medium';
    var px = maps_1.default[imageSize];
    var rem = utils_1.default(px);
    return (_b = ["\n    width: ", ";\n    min-height: ", ";\n  "], _b.raw = ["\n    width: ", ";\n    min-height: ", ";\n  "], styled_components_1.css(_b, rem, rem));
    var _b;
};
exports.AvatarStyle = (_a = ["\n  background: url(", ");\n  background-size: cover;\n  background-position: center;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  padding: 4px;\n  line-height: 1.42857143;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 50%;\n  ", "\n"], _a.raw = ["\n  background: url(", ");\n  background-size: cover;\n  background-position: center;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n  padding: 4px;\n  line-height: 1.42857143;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 50%;\n  ", "\n"], styled_components_1.css(_a, function (_a) {
    var src = _a.src;
    return src || default_1.default;
}, propsToSize));
var _a;
//# sourceMappingURL=styles.js.map
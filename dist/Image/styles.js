"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var utils_1 = require("../utils");
var imageSizeMap = {
    thumb: 50,
    xxsmall: 100,
    xsmall: 200,
    small: 300,
    medium: 400,
    large: 500,
    xlarge: 600,
    full: 1200,
};
exports.imageStyle = function (_a) {
    var imageSize = _a.imageSize;
    var sizeWithDefault = imageSize || 'small';
    var px = imageSizeMap[sizeWithDefault];
    var rem = utils_1.default(px);
    if (sizeWithDefault === 'full') {
        return (_b = ["\n      width: 100vw;\n      height: auto;\n    "], _b.raw = ["\n      width: 100vw;\n      height: auto;\n    "], styled_components_1.css(_b));
    }
    if (sizeWithDefault === 'thumb') {
        return (_c = ["\n      width: ", ";\n      height: ", ";\n      flex: 0 0 auto;\n      object-fit: cover;\n    "], _c.raw = ["\n      width: ", ";\n      height: ", ";\n      flex: 0 0 auto;\n      object-fit: cover;\n    "], styled_components_1.css(_c, rem, rem));
    }
    return (_d = ["\n    max-width: 100%;\n    height: auto;\n    min-height: ", ";\n    max-height: ", ";\n    display: block;\n  "], _d.raw = ["\n    max-width: 100%;\n    height: auto;\n    min-height: ", ";\n    max-height: ", ";\n    display: block;\n  "], styled_components_1.css(_d, rem, rem));
    var _b, _c, _d;
};
exports.Img = (_a = ["\n  ", "\n"], _a.raw = ["\n  ", "\n"], styled_components_1.default.img(_a, function (props) { return exports.imageStyle(props); }));
var _a;
//# sourceMappingURL=styles.js.map
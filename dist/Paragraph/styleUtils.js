"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const sizeMap = {
    small: 14,
    medium: 16,
    large: 24,
    xlarge: 32,
};
const marginSizeMap = {
    none: 0,
    small: 12,
    medium: 24,
    large: 48,
};
function calculateMargin(margin) {
    return utils_1.default(marginSizeMap[margin]);
}
exports.calculateMargin = calculateMargin;
;
function calculateSize(size) {
    return utils_1.default(sizeMap[size]);
}
exports.default = calculateSize;
;
//# sourceMappingURL=styleUtils.js.map
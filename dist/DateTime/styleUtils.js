"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var sizeMap = {
    small: 30,
    medium: 48,
    large: 60,
    xlarge: 72,
};
function calculateSize(size) {
    return utils_1.default(sizeMap[size]);
}
exports.default = calculateSize;
;
//# sourceMappingURL=styleUtils.js.map
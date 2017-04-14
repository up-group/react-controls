"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../../../Common/utils");
const sizeMap = {
    xsmall: 10,
    small: 30,
    medium: 48,
    large: 60,
    xlarge: 72,
};
function calculateSize(size) {
    if (typeof sizeMap[size] != "undefined")
        return utils_1.default(sizeMap[size]);
    else
        return size;
}
exports.default = calculateSize;
;
//# sourceMappingURL=styleUtils.js.map
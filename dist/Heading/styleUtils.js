"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("../utils");
var sizeMap = {
    h1: 36,
    h2: 30,
    h3: 24,
    h4: 18,
    h5: 16,
};
exports.calculateSize = function (tag) { return utils_1.default(sizeMap[tag]); };
//# sourceMappingURL=styleUtils.js.map
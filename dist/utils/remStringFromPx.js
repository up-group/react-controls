"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const rootRem = 16;
const calculateRem = (px) => (px / rootRem);
exports.default = (px) => `${calculateRem(px)}rem`;
//# sourceMappingURL=remStringFromPx.js.map
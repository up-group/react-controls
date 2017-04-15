"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rootRem = 16;
var calculateRem = function (px) { return (px / rootRem); };
exports.default = function (px) { return calculateRem(px) + "rem"; };
//# sourceMappingURL=remStringFromPx.js.map
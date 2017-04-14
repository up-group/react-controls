"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fileList = require.context('../../src/theming/icons', true, /[\s\S]*$/);
var dictionary = {};
fileList.keys().forEach(function (x) {
    x = x.replace('./', '');
    dictionary[x.replace('.svg', '')] = require("../../src/theming/icons/" + x);
});
exports.default = dictionary;
//# sourceMappingURL=_getIcons.js.map
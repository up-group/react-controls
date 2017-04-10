"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let fileList = require.context('icons', true, /[\s\S]*$/);
let dictionary = {};
fileList.keys().forEach(x => {
    x = x.replace('./', '');
    dictionary[x.replace('.svg', '')] = require(`icons/${x}`);
});
exports.default = dictionary;
//# sourceMappingURL=_getIcons.js.map
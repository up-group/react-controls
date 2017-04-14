"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let fileList = require.context('../../../Common/theming/icons', true, /[\s\S]*$/);
let dictionary = {};
fileList.keys().forEach(x => {
    x = x.replace('./', '');
    dictionary[x.replace('.svg', '')] = require(`../../../Common/theming/icons/${x}`);
});
exports.default = dictionary;
//# sourceMappingURL=_getIcons.js.map
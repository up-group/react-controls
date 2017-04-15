"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function FilterProps(refObject, propsObject) {
    var persistableO1 = {};
    Object.keys(propsObject).forEach(function (key) {
        if (Object.keys(refObject).indexOf(key) >= 0) {
            persistableO1[key] = refObject[key];
        }
    });
    return persistableO1;
}
exports.FilterProps = FilterProps;
;
//# sourceMappingURL=types.js.map
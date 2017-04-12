"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function FilterProps(object) {
    let persistableO1 = {};
    Object.keys(object).forEach(key => {
        if (Object.keys(persistableO1).indexOf(key) >= 0) {
            persistableO1[key] = object[key];
        }
    });
    return persistableO1;
}
exports.FilterProps = FilterProps;
;
//# sourceMappingURL=types.js.map
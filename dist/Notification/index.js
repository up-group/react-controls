"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styles_1 = require("./styles");
var _1 = require("../");
function Notification(_a) {
    var message = _a.message, status = _a.status, rest = __rest(_a, ["message", "status"]);
    return (React.createElement(styles_1.default, { boxSize: { horizontal: 'medium' }, pad: "small", alignItems: "center", selectable: true },
        React.createElement(_1.Paragraph, { paragraphSize: "large", color: "white" }, message)));
}
exports.default = Notification;
;
//# sourceMappingURL=index.js.map
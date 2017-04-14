"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var _1 = require("../");
var styles_1 = require("./styles");
function Article(_a) {
    var content = _a.content, children = _a.children, rest = __rest(_a, ["content", "children"]);
    return (React.createElement(styles_1.default, __assign({}, rest, { className: "markdown-body" }),
        content && typeof content === 'string' &&
            React.createElement(_1.Markdown, { content: content }),
        children));
}
exports.default = Article;
//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styles_1 = require("./styles");
var ReactMarkdown = require("react-markdown");
require("github-markdown-css/github-markdown.css");
function Markdown(_a) {
    var content = _a.content;
    return (React.createElement(styles_1.default, { className: "markdown-body" },
        React.createElement(ReactMarkdown, { source: content })));
}
exports.default = Markdown;
//# sourceMappingURL=index.js.map
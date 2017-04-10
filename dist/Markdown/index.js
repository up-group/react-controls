"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styles_1 = require("./styles");
const react_markdown_1 = require("react-markdown");
require("github-markdown-css/github-markdown.css");
function Markdown({ content, }) {
    return (React.createElement(styles_1.default, { className: "markdown-body" },
        React.createElement(react_markdown_1.default, { source: content })));
}
exports.default = Markdown;
//# sourceMappingURL=index.js.map
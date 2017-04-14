"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var draft_js_1 = require("draft-js");
var styled_components_1 = require("styled-components");
var DraftStyled = (_a = ["\n .RichEditor-root {\n  background: #fff;\n  border: 1px solid #ddd;\n  font-family: 'Georgia', serif;\n  font-size: 14px;\n  padding: 15px;\n}\n\n .RichEditor-editor {\n  border-top: 1px solid #ddd;\n  cursor: text;\n  font-size: 16px;\n  margin-top: 10px;\n}\n\n .RichEditor-editor .public-DraftEditorPlaceholder-root {\n  margin: 0 -15px -15px;\n  padding: 15px;\n}\n .RichEditor-editor .public-DraftEditor-content {\n  margin: 0 -15px -15px;\n  padding: 15px;\n}\n\n .RichEditor-editor .public-DraftEditor-content {\n  min-height: 100px;\n}\n\n .RichEditor-hidePlaceholder .public-DraftEditorPlaceholder-root {\n  display: none;\n}\n\n .RichEditor-editor .RichEditor-blockquote {\n  border-left: 5px solid #eee;\n  color: #666;\n  font-family: 'Hoefler Text', 'Georgia', serif;\n  font-style: italic;\n  margin: 16px 0;\n  padding: 10px 20px;\n}\n\n .RichEditor-editor .public-DraftStyleDefault-pre {\n  background-color: rgba(0, 0, 0, 0.05);\n  font-family: 'Inconsolata', 'Menlo', 'Consolas', monospace;\n  font-size: 16px;\n  padding: 20px;\n}\n\n .RichEditor-controls {\n  font-family: 'Helvetica', sans-serif;\n  font-size: 14px;\n  margin-bottom: 5px;\n  user-select: none;\n}\n\n .RichEditor-styleButton {\n  color: #999;\n  cursor: pointer;\n  margin-right: 2px;\n  padding: 2px 4px;\n  display: inline-block;\n  border-radius:3px;\n  border:1px solid #999;\n  background-color:#EFEFEF;\n\n  &:hover {\n    color: #EFEFEF;\n    background-color:#999;\n  }\n}\n\n.RichEditor-activeButton {\n  color: #5890ff;\n}"], _a.raw = ["\n .RichEditor-root {\n  background: #fff;\n  border: 1px solid #ddd;\n  font-family: 'Georgia', serif;\n  font-size: 14px;\n  padding: 15px;\n}\n\n .RichEditor-editor {\n  border-top: 1px solid #ddd;\n  cursor: text;\n  font-size: 16px;\n  margin-top: 10px;\n}\n\n .RichEditor-editor .public-DraftEditorPlaceholder-root {\n  margin: 0 -15px -15px;\n  padding: 15px;\n}\n .RichEditor-editor .public-DraftEditor-content {\n  margin: 0 -15px -15px;\n  padding: 15px;\n}\n\n .RichEditor-editor .public-DraftEditor-content {\n  min-height: 100px;\n}\n\n .RichEditor-hidePlaceholder .public-DraftEditorPlaceholder-root {\n  display: none;\n}\n\n .RichEditor-editor .RichEditor-blockquote {\n  border-left: 5px solid #eee;\n  color: #666;\n  font-family: 'Hoefler Text', 'Georgia', serif;\n  font-style: italic;\n  margin: 16px 0;\n  padding: 10px 20px;\n}\n\n .RichEditor-editor .public-DraftStyleDefault-pre {\n  background-color: rgba(0, 0, 0, 0.05);\n  font-family: 'Inconsolata', 'Menlo', 'Consolas', monospace;\n  font-size: 16px;\n  padding: 20px;\n}\n\n .RichEditor-controls {\n  font-family: 'Helvetica', sans-serif;\n  font-size: 14px;\n  margin-bottom: 5px;\n  user-select: none;\n}\n\n .RichEditor-styleButton {\n  color: #999;\n  cursor: pointer;\n  margin-right: 2px;\n  padding: 2px 4px;\n  display: inline-block;\n  border-radius:3px;\n  border:1px solid #999;\n  background-color:#EFEFEF;\n\n  &:hover {\n    color: #EFEFEF;\n    background-color:#999;\n  }\n}\n\n.RichEditor-activeButton {\n  color: #5890ff;\n}"], styled_components_1.default.div(_a));
var UpDraft = (function (_super) {
    __extends(UpDraft, _super);
    function UpDraft(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { editorState: draft_js_1.EditorState.createEmpty() };
        _this.onChange = _this.onChange.bind(_this);
        _this.handleKeyCommand = _this.handleKeyCommand.bind(_this);
        _this.onTab = _this.onTab.bind(_this);
        _this.toggleBlockType = _this.toggleBlockType.bind(_this);
        _this.toggleInlineStyle = _this.toggleInlineStyle.bind(_this);
        return _this;
    }
    UpDraft.prototype.focus = function () {
    };
    UpDraft.prototype.onChange = function (editorState) {
        this.setState({ editorState: editorState });
    };
    UpDraft.prototype.handleKeyCommand = function (command) {
        var editorState = this.state.editorState;
        var newState = draft_js_1.RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
            this.onChange(newState);
            return true;
        }
        return false;
    };
    UpDraft.prototype.onTab = function (e) {
        var maxDepth = 4;
        this.onChange(draft_js_1.RichUtils.onTab(e, this.state.editorState, maxDepth));
    };
    UpDraft.prototype.toggleBlockType = function (blockType) {
        this.onChange(draft_js_1.RichUtils.toggleBlockType(this.state.editorState, blockType));
    };
    UpDraft.prototype.toggleInlineStyle = function (inlineStyle) {
        this.onChange(draft_js_1.RichUtils.toggleInlineStyle(this.state.editorState, inlineStyle));
    };
    UpDraft.prototype.render = function () {
        var editorState = this.state.editorState;
        var className = 'RichEditor-editor';
        var contentState = editorState.getCurrentContent();
        if (!contentState.hasText()) {
            if (contentState.getBlockMap().first().getType() !== 'unstyled') {
                className += ' RichEditor-hidePlaceholder';
            }
        }
        return (React.createElement(DraftStyled, null,
            React.createElement("div", { className: "RichEditor-root" },
                React.createElement(BlockStyleControls, { editorState: editorState, onToggle: this.toggleBlockType }),
                React.createElement(InlineStyleControls, { editorState: editorState, onToggle: this.toggleInlineStyle }),
                React.createElement("div", { className: className, onClick: this.focus },
                    React.createElement(draft_js_1.Editor, { blockStyleFn: getBlockStyle, customStyleMap: styleMap, editorState: editorState, handleKeyCommand: this.handleKeyCommand, onChange: this.onChange, onTab: this.onTab, placeholder: "Tell a story...", ref: "editor", spellCheck: true })))));
    };
    return UpDraft;
}(React.Component));
exports.default = UpDraft;
var styleMap = {
    CODE: {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: 16,
        padding: 2,
    },
};
function getBlockStyle(block) {
    switch (block.getType()) {
        case 'blockquote': return 'RichEditor-blockquote';
        default: return null;
    }
}
var StyleButton = (function (_super) {
    __extends(StyleButton, _super);
    function StyleButton(props) {
        var _this = _super.call(this, props) || this;
        _this.onToggle = _this.onToggle.bind(_this);
        return _this;
    }
    StyleButton.prototype.onToggle = function (e) {
        e.preventDefault();
        this.props.onToggle(this.props.style);
    };
    StyleButton.prototype.render = function () {
        var className = 'RichEditor-styleButton';
        if (this.props.active) {
            className += ' RichEditor-activeButton';
        }
        return (React.createElement("span", { className: className, onMouseDown: this.onToggle }, this.props.label));
    };
    return StyleButton;
}(React.Component));
var BLOCK_TYPES = [
    { label: 'H1', style: 'header-one' },
    { label: 'H2', style: 'header-two' },
    { label: 'H3', style: 'header-three' },
    { label: 'H4', style: 'header-four' },
    { label: 'H5', style: 'header-five' },
    { label: 'H6', style: 'header-six' },
    { label: 'Blockquote', style: 'blockquote' },
    { label: 'UL', style: 'unordered-list-item' },
    { label: 'OL', style: 'ordered-list-item' },
    { label: 'Code Block', style: 'code-block' },
];
var BlockStyleControls = function (props) {
    var editorState = props.editorState;
    var selection = editorState.getSelection();
    var blockType = editorState
        .getCurrentContent()
        .getBlockForKey(selection.getStartKey())
        .getType();
    return (React.createElement("div", { className: "RichEditor-controls" }, BLOCK_TYPES.map(function (type) {
        return React.createElement(StyleButton, { key: type.label, active: type.style === blockType, label: type.label, onToggle: props.onToggle, style: type.style });
    })));
};
var INLINE_STYLES = [
    { label: 'Bold', style: 'BOLD' },
    { label: 'Italic', style: 'ITALIC' },
    { label: 'Underline', style: 'UNDERLINE' },
    { label: 'Monospace', style: 'CODE' },
];
var InlineStyleControls = function (props) {
    var currentStyle = props.editorState.getCurrentInlineStyle();
    return (React.createElement("div", { className: "RichEditor-controls" }, INLINE_STYLES.map(function (type) {
        return React.createElement(StyleButton, { key: type.label, active: currentStyle.has(type.style), label: type.label, onToggle: props.onToggle, style: type.style });
    })));
};
var _a;
//# sourceMappingURL=UpDraft.js.map
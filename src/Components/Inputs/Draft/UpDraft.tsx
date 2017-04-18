import * as React from "react"
import {Editor, EditorState, RichUtils} from 'draft-js';
import styled from 'styled-components'

const DraftStyled = styled.div`
 .RichEditor-root {
  background: #fff;
  border: 1px solid #ddd;
  font-family: 'Georgia', serif;
  font-size: 14px;
  padding: 15px;
}

 .RichEditor-editor {
  border-top: 1px solid #ddd;
  cursor: text;
  font-size: 16px;
  margin-top: 10px;
}

 .RichEditor-editor .public-DraftEditorPlaceholder-root {
  margin: 0 -15px -15px;
  padding: 15px;
}
 .RichEditor-editor .public-DraftEditor-content {
  margin: 0 -15px -15px;
  padding: 15px;
}

 .RichEditor-editor .public-DraftEditor-content {
  min-height: 100px;
}

 .RichEditor-hidePlaceholder .public-DraftEditorPlaceholder-root {
  display: none;
}

 .RichEditor-editor .RichEditor-blockquote {
  border-left: 5px solid #eee;
  color: #666;
  font-family: 'Hoefler Text', 'Georgia', serif;
  font-style: italic;
  margin: 16px 0;
  padding: 10px 20px;
}

 .RichEditor-editor .public-DraftStyleDefault-pre {
  background-color: rgba(0, 0, 0, 0.05);
  font-family: 'Inconsolata', 'Menlo', 'Consolas', monospace;
  font-size: 16px;
  padding: 20px;
}

 .RichEditor-controls {
  font-family: 'Helvetica', sans-serif;
  font-size: 14px;
  margin-bottom: 5px;
  user-select: none;
}

 .RichEditor-styleButton {
  color: #999;
  cursor: pointer;
  margin-right: 2px;
  padding: 2px 4px;
  display: inline-block;
  border-radius:3px;
  border:1px solid #999;
  background-color:#EFEFEF;

  &:hover {
    color: #EFEFEF;
    background-color:#999;
  }
}

.RichEditor-activeButton {
  color: #5890ff;
}`;


export default class UpDraft extends React.Component<any, any> {
      constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = this.onChange.bind(this);
        this.handleKeyCommand = this.handleKeyCommand.bind(this);
        this.onTab = this.onTab.bind(this);
        this.toggleBlockType = this.toggleBlockType.bind(this);
        this.toggleInlineStyle = this.toggleInlineStyle.bind(this);
      }

      focus() {
        //this.refs.editor.focus();
      }

      onChange(editorState:any) {
        this.setState({editorState});
      }

      handleKeyCommand(command) {
        const {editorState} = this.state;
        const newState = RichUtils.handleKeyCommand(editorState, command);
        if (newState) {
          this.onChange(newState);
          return true;
        }
        return false;
      }

      onTab(e) {
        const maxDepth = 4;
        this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
      }

      toggleBlockType(blockType) {
        this.onChange(
          RichUtils.toggleBlockType(
            this.state.editorState,
            blockType
          )
        );
      }

      toggleInlineStyle(inlineStyle) {
        this.onChange(
          RichUtils.toggleInlineStyle(
            this.state.editorState,
            inlineStyle
          )
        );
      }

      render() {
        const {editorState} = this.state;

        // If the user changes block type before entering any text, we can
        // either style the placeholder or hide it. Let's just hide it now.
        let className = 'RichEditor-editor';
        var contentState = editorState.getCurrentContent();
        if (!contentState.hasText()) {
          if (contentState.getBlockMap().first().getType() !== 'unstyled') {
            className += ' RichEditor-hidePlaceholder';
          }
        }

        return (
          <DraftStyled>
          <div className="RichEditor-root">
            <BlockStyleControls
              editorState={editorState}
              onToggle={this.toggleBlockType}
            />
            <InlineStyleControls
              editorState={editorState}
              onToggle={this.toggleInlineStyle}
            />
            <div className={className} onClick={this.focus}>
              <Editor blockStyleFn={getBlockStyle} customStyleMap={styleMap} editorState={editorState} handleKeyCommand={this.handleKeyCommand} onChange={this.onChange} onTab={this.onTab}
                placeholder="Tell a story..."
                ref="editor"
                spellCheck={true}
              />
            </div>
          </div>
          </DraftStyled>
        );
      }
    }

      // Custom overrides for "code" style.
      const styleMap = {
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

      class StyleButton extends React.Component<any, any> {
        constructor(props) {
          super(props);
          this.onToggle = this.onToggle.bind(this);
        }
        onToggle(e:any) {
          e.preventDefault();
          this.props.onToggle(this.props.style);
        }

        render() {
          let className = 'RichEditor-styleButton';
          if (this.props.active) {
            className += ' RichEditor-activeButton';
          }

          return (
            <span className={className} onMouseDown={this.onToggle}>
              {this.props.label}
            </span>
          );
        }
      }

      const BLOCK_TYPES = [
        {label: 'H1', style: 'header-one'},
        {label: 'H2', style: 'header-two'},
        {label: 'H3', style: 'header-three'},
        {label: 'H4', style: 'header-four'},
        {label: 'H5', style: 'header-five'},
        {label: 'H6', style: 'header-six'},
        {label: 'Blockquote', style: 'blockquote'},
        {label: 'UL', style: 'unordered-list-item'},
        {label: 'OL', style: 'ordered-list-item'},
        {label: 'Code Block', style: 'code-block'},
      ];

      const BlockStyleControls = (props) => {
        const {editorState} = props;
        const selection = editorState.getSelection();
        const blockType = editorState
          .getCurrentContent()
          .getBlockForKey(selection.getStartKey())
          .getType();

        return (
          <div className="RichEditor-controls">
            {BLOCK_TYPES.map((type) =>
              <StyleButton
                key={type.label}
                active={type.style === blockType}
                label={type.label}
                onToggle={props.onToggle}
                style={type.style}
              />
            )}
          </div>
        );
      };

      var INLINE_STYLES = [
        {label: 'Bold', style: 'BOLD'},
        {label: 'Italic', style: 'ITALIC'},
        {label: 'Underline', style: 'UNDERLINE'},
        {label: 'Monospace', style: 'CODE'},
      ];

      const InlineStyleControls = (props) => {
        var currentStyle = props.editorState.getCurrentInlineStyle();
        return (
          <div className="RichEditor-controls">
            {INLINE_STYLES.map(type =>
              <StyleButton
                key={type.label}
                active={currentStyle.has(type.style)}
                label={type.label}
                onToggle={props.onToggle}
                style={type.style}
              />
            )}
          </div>
        );
      };

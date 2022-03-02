// Imports
import * as React from "react"
import { BaseControlComponent } from "../_Common/BaseControl/BaseControl"
import defaultTheme from '../../../Common/theming'

import { UpRichTextProps } from "./types";

import * as CKEditor from '@ckeditor/ckeditor5-react';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import * as Font from '@ckeditor/ckeditor5-font/src/font';
import * as FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import { eventFactory } from "../../../Common/utils/eventListener";

// Exports
export default class UpRichText extends BaseControlComponent<UpRichTextProps, string> {
    public static defaultProps:UpRichTextProps = {
        width: 'xlarge',
        showError: true,
        configRTE: {
            language: 'fr',
            enterMode: 2,
            shiftEnterMode: 1,
            // plugins: [ FontFamily, Font ],
            toolbar: [ 'heading', 'bold', 'italic', 'fontFamily', 'fontSize', '|', 'link', 'blockQuote', 'numberedList', 'bulletedList', 'undo', 'redo'  ]
        },
        theme:defaultTheme
    }
    
    constructor(p, c) {
        super(p, c);
        this.getValue = this.getValue.bind(this) ;
        this.state = {
            value:p.value
        }
    }
    
    showError() {
        return this.props.showError !== undefined
            ? typeof this.props.showError === "function" ? (this.props.showError as Function)(this.state) : this.props.showError === true
            : this.hasError;
    }

    showSuccess() {
        return this.props.showSuccess
    }

    renderControl(): JSX.Element {
        const { configRTE } = this.props ;
        return (
            <CKEditor
                editor={ ClassicEditor }
                data={this.state.value || ''}
                name={this.props.name}
                config={this.props.configRTE}
                disabled={this.props.disabled}
                onInit={ editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log( 'Editor is ready to use!', editor );
                }}
                tabIndex={this.props.tabIndex}
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    this.handleChangeEvent(eventFactory(this.props.name, data), data) ;
                }}
            />
        );
    }

    getValue(event: any) {
        return (event != null && event.target != null) ? event.target.value : event ;
    }
}
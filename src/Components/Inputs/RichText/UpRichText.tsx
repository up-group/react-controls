// Imports
import * as React from "react"
import { BaseControlComponent } from "../_Common/BaseControl/BaseControl"
import defaultTheme from '../../../Common/theming'
import CKEditor from "./CKEditor"
import { UpRichTextProps } from "./types";
import { getStyles } from "./styles";

// Exports
export default class UpText extends BaseControlComponent<UpRichTextProps, string> {
    public static defaultProps:UpRichTextProps = {
        width: 'xlarge',
        showError: true,
        configRTE: {
            language: 'fr',
            enterMode: 2,
            shiftEnterMode: 1,
            height: 60,
            skin: 'office2013',
            resize_enabled: false,
            toolbarCanCollapse: true,
            toolbarStartupExpanded: false,
            autoGrow_onStartup: true,
            autoGrow_minHeight: 60,
            autoGrow_maxHeight: 600,
            autoGrow_bottomSpace: 10,
            startupFocus: false,
            removePlugins: 'elementspath',
            toolbar:
                    [
                        ['Cut', 'Copy', 'Paste', '-', 'Undo', 'Redo'],
                        ['TextColor', 'BGColor'],
                        ['HorizontalRule', 'SpecialChar'],
                        ['Bold', '-', 'Italic', '-', 'Underline', '-', 'Strike', '-', 'Subscript', '-', 'Superscript', '-', 'RemoveFormat'],
                        ['JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
                        ['NumberedList', 'BulletedList', '-', 'Table']
                    ]
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
    
    renderControl(): JSX.Element {
        const {configRTE} = this.props ;
        return (
            <CKEditor config={configRTE} className={getStyles(this.props)} content={this.state.value} onChange={this.handleChangeEvent} />
        );
    }

    getValue(event: any) {
        return (event != null && event.target != null) ? event.target.value : event ;
    }
}
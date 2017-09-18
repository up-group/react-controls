// Imports
import * as React from "react"
import { BaseControlComponent } from "../_Common/BaseControl/BaseControl"
import { TexAreatStyled } from "./styles";
import { UpTextProps } from './'
import defaultTheme from '../../../Common/theming'
import CKEditor from "react-ckeditor-component"

// Exports
export default class UpText extends BaseControlComponent<UpTextProps, string> {
    public static defaultProps:UpTextProps = {
        width: 'xlarge',
        showError: true,
        enableRTE:false,
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
        const {value, onChange, readonly, tooltip, enableRTE, configRTE, ...others} = this.props ;
        if(enableRTE===true) {
            return (
                <CKEditor config={configRTE} activeClass="p10" content={this.state.value} onChange={this.handleChangeEvent} />
            );         
        } else {
            return (<TexAreatStyled value={this.state.value} hasError={this.hasError()} onChange={this.handleChangeEvent} {...others} />)           
        }
    }

    getValue(event: any) {
        return (event != null && event.target != null) ? event.target.value : event ;
    }
}
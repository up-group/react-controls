import * as React from 'react';
import { InputStyled } from './styles';
import { InputBaseComponent } from "../_Common/BaseControl/BaseControl";

import { UpInputProps } from './';

export default class UpInput extends InputBaseComponent<UpInputProps, any> {
    public static defaultProps: UpInputProps = {
    };

    constructor(p, c) {
        super(p, c);
        this.state = {
            value:p.value
        }
    }

    onChange(event: any) {
        return event.target.value;
    }

    public componentWillReceiveProps(nextProps: UpInputProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({value: nextProps.value });
        }
    }

    renderControl() {
        const {type, onChange, onError, value, ...others } = this.props;
        return (
            <InputStyled
                value={this.state.value}
                type={type || "text"}
                {...others}
                onChange={this.handleChangeEvent}>
                {this.props.children}
            </InputStyled>
        );
    }
}

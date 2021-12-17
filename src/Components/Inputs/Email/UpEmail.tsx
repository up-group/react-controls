import * as React from 'react';
import { BaseControlState } from '../_Common/BaseControl/BaseControl';
import { UpInputProps } from '../Input/types';
import UpInput from '../Input';
import * as _ from 'lodash';

export default class UpEmail extends React.Component<UpInputProps, BaseControlState<string>> {
  public static defaultProps: UpInputProps = {
    showError: true,
    defaultValue: '',
    validation: [
      {
        pattern:
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        errorMessage: 'Le champ doit être un courriel',
      },
    ],
  };

  constructor(p, c) {
    super(p, c);
    this.state = {};
  }

  emailHandleChangeEvent = (event, value, error) => {
    this.setState({ value, error }, () => {
      if (this.props.onChange) {
        this.props.onChange(event, value, error);
      }
    });
  };

  get isControlled() {
    return this.props.value !== undefined;
  }

  get currentValue() {
    return this.isControlled ? this.props.value : this.state.value;
  }

  get currentError() {
    return this.isControlled ? this.props.error : this.state.error;
  }

  render() {
    return (
      <UpInput
        {...this.props}
        iconName="email"
        value={this.currentValue}
        onChange={this.emailHandleChangeEvent}
        error={this.currentError}
        hasError={!_.isEmpty(this.currentError)}
      />
    );
  }
}

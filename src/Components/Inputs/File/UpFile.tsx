import * as React from 'react';
import { UpFileStyleProps, UpFileProps } from './types';
import { getStyles } from './styles';

const BaseFileComponent: React.StatelessComponent<UpFileStyleProps> = props => {
  const { className, value } = props;
  return (
    <input className={className} type="file" value={value} accept={props.fileExtension} onChange={props.onChange} />
  );
};

export default class UpFile extends React.Component<UpFileProps, any> {
  constructor(p, c) {
    super(p, c);
    this.state = {
      value: p.value,
    };
  }

  componentWillReceiveProps(nextProps: UpFileProps) {
    if (nextProps.value !== this.props.value) {
      this.setState({ value: nextProps.value });
    }
  }

  render() {
    if (!FileReader) {
      return <span>Non support du navigateur</span>;
    }
    const { onChange, onError, value, ...others } = this.props;
    return (
      <div className={getStyles(this.props as UpFileStyleProps)}>
        <BaseFileComponent value={this.state.value} {...others} onChange={this.onChange} />
      </div>
    );
  }

  get maxSizeb() {
    return 1048576 * this.maxSizeMb;
  }
  get maxSizeMb() {
    return this.props.maxSize || 5;
  }

  onChange = event => {
    if (!FileReader) {
      return null;
    }
    if (event.target.files.length == 0) {
      this.props.onChange([]);
      return;
    }

    const size = event.target.files[0].size;
    if (size > this.maxSizeb) {
      this.props.onError('Plus de ' + this.maxSizeMb + 'M');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      if (Array.isArray(reader.result)) {
        const array = new Uint8Array(reader.result);
        const a = [];
        for (let i = 0; i < array.length; i++) {
          a.push(array[i]);
        }
        this.props.onChange(a);
      }
    };
    reader.readAsArrayBuffer(event.target.files[0]);
  };
}

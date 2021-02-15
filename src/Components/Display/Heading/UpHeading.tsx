import * as React from 'react';
import * as classnames from 'classnames';
import { getStyles } from './styles';
import { UpHeadingProps } from './types';

export default class UpHeading extends React.Component<UpHeadingProps> {

    public static defaultProps: UpHeadingProps = {
        color: 'rgba(0, 0, 0, 0.87)',
        textAlign: 'center',
        tag: 'h1',
        truncate: false,
        upcase: false,
        margin: 'medium',
    };

    public render() {
        const { children, tag, className } = this.props;

        return React.createElement(tag, {
            className: classnames(getStyles(this.props), className),
        }, children);
    }
};

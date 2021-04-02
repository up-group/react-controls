import * as React from 'react';
import * as classnames from 'classnames';
import { getStyles } from './styles';
import { UpHeadingProps } from './types';

const UpHeading: React.FunctionComponent<UpHeadingProps> = props => {
    const {
        children,
        tag,
        className
    } = props;

    return (
        React.createElement(
            tag,
            { className: classnames(getStyles(props), className) },
            children
        )
    )
};

UpHeading.defaultProps = {
    color: 'rgba(0, 0, 0, 0.87)',
    textAlign: 'center',
    tag: 'h1',
    truncate: false,
    upcase: false,
    margin: 'medium',
};

export default UpHeading;
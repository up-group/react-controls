// Imports
import * as React from 'react';
//import { H1, H2, H3, H4, H5 } from './styles';
import { UpHeadingProps } from './'

export default class UpHeading extends React.Component<UpHeadingProps, undefined> {
    public static defaultProps: UpHeadingProps = {
        color: '#007acc',
        textAlign: 'center',
        tag: 'h1',
        truncate: false,
        upcase: false,
        //margin: 'medium',
    };
    public render() {
        const { children, tag, ...others } = this.props;
        switch (tag) {
            case 'h2':
                return (
                    <h2 {...others}>
                        {children}
                    </h2>
                );
            case 'h3':
                return (
                    <h3  {...others}>
                        {children}
                    </h3>
                );
            case 'h4':
                return (
                    <h4 {...others}>
                        {children}
                    </h4>
                );
            case 'h5':
                return (
                    <h5  {...others}>
                        {children}
                    </h5>
                );
            default:
                return (
                    <h1 {...others}>
                        {children}
                    </h1>
                );
        }
    }
}

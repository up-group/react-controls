import * as React from 'react';
import { ThemeInterface } from "./types";
import UpDefaultTheme from './';

export interface ThemeProviderProps {
    theme?: ThemeInterface,
}

export class ThemeProvider extends React.Component<ThemeProviderProps> {
    static childContextTypes = {
      theme: React.PropTypes.object,
    };

    static defaultProps = {
        theme:UpDefaultTheme,
    };

    constructor(props, context) {
        super(props, context);
    };

    getChildContext() {
      return {theme: this.props.theme};
    };
    
    render() {
        return React.Children.only(this.props.children);
    }
}

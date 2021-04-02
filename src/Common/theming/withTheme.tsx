import * as React from 'react'
import { ThemeInterface } from './types';

import * as PropTypes  from 'prop-types';

export type WithThemeProps = {
 theme?:ThemeInterface;
}

type HTMLElementProps = WithThemeProps & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> ;
// Temp fix any
const withTheme = function <P extends object>(WrappedComponent: React.ComponentType<P & any>) {
    return class ComponentWithTheme extends React.Component<P & WithThemeProps> {
        
        static displayName = `WithTheme(${getDisplayName(WrappedComponent)})`;
        //static displayName = `${getDisplayName(WrappedComponent)}`;
    
        /* 
            contexTypes is a required static property to declare 
            what you want from the context
        */
        static contextTypes = {
            theme: PropTypes.object
        };

        constructor(props, context) {
            super(props, context);
        }

        render() {
            const {theme} = this.context ;
            const {children, ...others} = this.props ;
            return <WrappedComponent theme={theme} {...others}>{children}</WrappedComponent>
        }
    }
}

function getDisplayName(WrappedComponent) {
    return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withTheme ;

import React from 'react';
import { ThemeInterface } from './types';

import * as PropTypes from 'prop-types';

export type WithThemeProps = {
  theme?: ThemeInterface;
};

const withTheme = function <P extends React.PropsWithChildren<WithThemeProps>>(
  WrappedComponent: React.ComponentType<P>
) {
  return class ComponentWithTheme extends React.Component<Omit<P, keyof React.PropsWithChildren<WithThemeProps>>> {
    static displayName = `WithTheme(${getDisplayName(WrappedComponent)})`;
    //static displayName = `${getDisplayName(WrappedComponent)}`;
    /* 
      contexTypes is a required static property to declare 
      what you want from the context
    */
    static contextTypes = {
      theme: PropTypes.object,
    };

    constructor(props, context) {
      super(props, context);
    }

    render(): JSX.Element {
      const { theme } = this.context;
      const { children, ...others } = this.props;

      return (
        <WrappedComponent theme={theme} {...(others as P)}>
          {children}
        </WrappedComponent>
      );
    }
  };
};

function getDisplayName(WrappedComponent): string {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default withTheme;

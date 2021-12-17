import * as React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';

import { getHocComponentName } from 'utils';
import { ToggleableComponentProps } from './Toggleable';

type OwnProps = Pick<ToggleableComponentProps, 'show'>;

type State = {
  show: boolean;
};
type InjectedProps = {
  onClick(event: React.MouseEvent<HTMLElement>): void;
};

export const withTogglleable = <OriginalProps extends object>(
  UnwrappedComponent: React.ComponentType<OriginalProps & InjectedProps>
) => {
  type Props = Omit<OriginalProps, keyof InjectedProps> & OwnProps;
  class WithToggle extends React.Component<Props, State> {
    static displayName: string = getHocComponentName(WithToggle.name, UnwrappedComponent);
    static WrappedComponent = UnwrappedComponent;
    state = { show: false };
    render() {
      const { show } = this.state;
      const { children, ...rest } = this.props as any;
      return (
        <>
          <UnwrappedComponent {...rest} onClick={this.toggle} />
          {show ? children : null}
        </>
      );
    }
    private toggle = (event: React.MouseEvent<HTMLElement>) => this.setState(prevState => ({ show: !prevState.show }));
  }

  return hoistNonReactStatics(WithToggle, UnwrappedComponent as any) as React.ComponentType<Props>;
};

export { InjectedProps as WithToggleInjectedProps };

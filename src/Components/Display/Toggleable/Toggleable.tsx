import * as React from 'react'
import { isFunction } from 'utils';

type DefaultProps<P extends object = object> = { props : P }

type RenderCallback = (args : ToggleableComponentProps ) => JSX.Element;

const initialState = { show : false } ;

type ToggleableState = Readonly<typeof initialState> ;
type ToggleableProps<P extends object = object> = Partial<
  {
    children: RenderCallback | React.ReactNode;
    render: RenderCallback;
    component: React.ComponentType<ToggleableComponentProps<P>>;
    stateReducer?: (state : ToggleableState, changes : Partial<ToggleableState>) => ToggleableState;
    onToggle?: (on: boolean) => void;
  } & DefaultProps<P>
>

type Callback = () => void;
type GetNewState = (state: ToggleableState) => ToggleableState

export type ToggleableComponentProps<P extends object = object> = ReturnType<Toggleable['getApi']> & P;

export class Toggleable<T extends object = object> extends React.Component<ToggleableProps<T>, ToggleableState> {
    readonly state : ToggleableState = initialState ;
    
    reset = () => this.internalSetState(initialState, () => {})

    private getApi = () => {
        return { show : this.state.show, toggle: this.toggle };
    }

    private internalSetState = (changes : ToggleableState | GetNewState, callback: Callback) => {
        this.setState( (state:ToggleableState) => {
            const changesObject = typeof changes === 'function' ? changes(state) : changes ;
            const reducedChanges = this.props.stateReducer ? this.props.stateReducer(state, changesObject) : changesObject ;
            return reducedChanges;
        }, callback) ;
    }

    render() {
        const { 
            component: InjectedComponent,
            children, 
            render,
            props,
         } = this.props ;
        
         const renderProps = this.getApi();
        
        if (InjectedComponent) {
            return (
              <InjectedComponent {...props} {...renderProps}>
                {children}
              </InjectedComponent>
            )
        }

        if(render) {
            return render(renderProps);
        }

        if(children != null && isFunction(children)) {
            const childrenAsFunction = children as (value : ToggleableComponentProps) => JSX.Element ;
            return childrenAsFunction(renderProps) ;
        }

        return null ;
    }

    private toggle = (event: React.MouseEvent<HTMLElement>) => this.internalSetState(updateShowState, () => this.props.onToggle ? this.props.onToggle(this.state.show) : null ) ;
}

const updateShowState = (prevState: ToggleableState) => ({ show : !prevState.show }) ;
import * as React from 'react';
import classNames from 'classnames';
import assign from 'object-assign';

export interface UpContextMenuItemProps {
    attributes?: object;
    data: object;
    disabled?: boolean;
    preventClose?: boolean;
    onClick: (event) => void;
}

export interface UpContextMenuItemState {
    
}

export default class UpContextMenuItem extends React.PureComponent<UpContextMenuItemProps, UpContextMenuItemState> {
    
    public static defaultProps = {
        disabled: false,
        data: {},
        attributes: {}
    };

    handleClick = (event) => {
        event.preventDefault();

        if (this.props.disabled) return;

        // callIfExists(
        //     this.props.onClick,
        //     event,
        //     assign({}, this.props.data, store.data),
        //     store.target
        // );

        if (this.props.preventClose) return;

        //hideMenu();
    }

    render() {
        const { disabled, children, attributes } = this.props;
        //const menuItemClassNames = classNames(cssClasses.menuItem, attributes && attributes.className);

        // const linkClasses = cx(cssClasses.menuLink, {
        //     [cssClasses.menuLinkDisabled]: disabled
        // });

        return (
            <div {...attributes} /*className={menuItemClassNames}*/>
                <a href='#' /*className={linkClasses}*/ onClick={this.handleClick}>
                    {children}
                </a>
            </div>
        );
    }
}
import * as React from 'react';
import * as classNames from 'classnames';
import * as assign from 'object-assign';

import { callIfExists } from '../../../Common/utils/helpers'

import {MENU_HIDE, MENU_SHOW, hideMenu, showMenu} from './actions'

export interface UpContextMenuItemProps {
    attributes?: object;
    data: object;
    disabled?: boolean;
    preventClose?: boolean;
    onClick: (event, data) => void;
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
        
        hideMenu() ;

        callIfExists(
            this.props.onClick,
            event,
            assign({}, this.props.data, {}),
            null
        );

        if (this.props.preventClose) return;
    }

    render() {
        const { disabled, children, attributes } = this.props;
        var classNameLink = 'up-contextmenu-link'
        
        var classNameLinkMenuItem= 'up-contextmenu-item'
        if(disabled)
            classNameLinkMenuItem = 'up-contextmenu-item up-contextmenu-item--disabled'

        return (
            <div {...attributes} className={classNameLinkMenuItem}>
                <a href='#' className={classNameLink} onClick={this.handleClick}>
                    {children}
                </a>
            </div>
        );
    }
}
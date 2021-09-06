import * as React from 'react';
import classnames from 'classnames';
import * as assign from 'object-assign';
import { callIfExists } from '../../../Common/utils/helpers';
import { MENU_HIDE, MENU_SHOW, hideMenu, showMenu } from './actions';
import { UpContextMenuItemProps } from './types';

export default class UpContextMenuItem extends React.PureComponent<UpContextMenuItemProps> {

    public static defaultProps = {
        disabled: false,
        data: {},
        attributes: {}
    };

    handleClick = (event) => {
        event.preventDefault();

        if (this.props.disabled) return;

        hideMenu();

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
        let classNameLink = 'up-contextmenu-link'

        let classNameLinkMenuItem = 'up-contextmenu-item'
        if (disabled) classNameLinkMenuItem = 'up-contextmenu-item up-contextmenu-item--disabled'

        return (
            <div {...attributes} className={classNameLinkMenuItem}>
                <a
                    href='#'
                    className={classNameLink}
                    onClick={this.handleClick}
                >
                    {children}
                </a>
            </div>
        );
    }
};
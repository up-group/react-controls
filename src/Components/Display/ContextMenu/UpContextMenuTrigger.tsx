import * as React from 'react';
import classnames from 'classnames';
import * as assign from 'object-assign';

import { callIfExists } from '../../../Common/utils/helpers'

import {MENU_HIDE, MENU_SHOW, hideMenu, showMenu} from './actions'

export interface UpContextMenuTriggerProps {
    id: string;
    attributes?: object;
    collect?: () => void;
    holdToDisplay?: number;
    renderTag?: any;
    rightClick?: boolean;
}

export class UpContextMenuTrigger extends React.PureComponent<UpContextMenuTriggerProps> {

    element : HTMLElement;
    mouseDown : boolean = false ;

    public static defaultProps = {
        attributes: {},
        holdToDisplay: null,
        renderTag: 'div',
        rightClick: true,
    };

    isHandledEvent = (event) => {
        return (this.props.rightClick  && (event.which === 3 || event.button === 2))
        ||  (!this.props.rightClick && event.button === 0) ;
    }

    handleMouseDown = (event) => {
        if ( this.isHandledEvent(event) ) {
            this.mouseDown = true;
            this.handleContextClick(event);
        }
    }

    handleMouseUp = (event) => {
        if ( this.isHandledEvent(event) ) {
            this.mouseDown = false;
        }
    }

    handleContextClick = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const x = event.clientX;
        const y = event.clientY;

        hideMenu() ;

        showMenu({
            position: {x, y},
            target: this.element,
            id: this.props.id,
            data: callIfExists(this.props.collect, this.props)
        });
    }

    setElement = (element) => {
        this.element = element;
    }

    render() {
        const { renderTag, attributes, children } = this.props;
        const newAttrs = assign({}, attributes, {
            //className: classnames(cssClasses.menuWrapper, attributes.className),
            onContextMenu: this.handleContextClick,
            onMouseDown: this.handleMouseDown,
            onMouseUp: this.handleMouseUp,
            ref: this.setElement
        });

        return React.createElement(renderTag, newAttrs, children);
    }
}

export class UpTouchContextMenuTrigger extends React.PureComponent<UpContextMenuTriggerProps> {
    element : HTMLElement;
    mouseDown : boolean = false ;

    public static defaultProps = {
        attributes: {},
        holdToDisplay: 1000,
        renderTag: 'div'
    };

    handleMouseDown = (event) => {
        if (this.props.holdToDisplay >= 0 && event.button === 0) {
            event.persist();

            this.mouseDown = true;
            setTimeout(() => {
                if (this.mouseDown) this.handleContextClick(event);
            }, this.props.holdToDisplay);
        }
    }

    handleMouseUp = (event) => {
        if (event.button === 0) {
            this.mouseDown = false;
        }
    }

    handleTouchstart = (event) => {
        if (this.props.holdToDisplay >= 0) {
            event.persist();

            this.mouseDown = true;
            setTimeout(() => {
                if (this.mouseDown) this.handleContextClick(event);
            }, this.props.holdToDisplay);
        }
    }

    handleTouchEnd = (event) => {
        event.preventDefault();
        this.mouseDown = false;
    }

    handleContextClick = (event) => {
        event.preventDefault();
        event.stopPropagation();

        const x = event.clientX || (event.touches && event.touches[0].pageX);
        const y = event.clientY || (event.touches && event.touches[0].pageY);

        hideMenu();

        showMenu({
            position: {x, y},
            target: this.element,
            id: this.props.id,
            data: callIfExists(this.props.collect, this.props)
        });
    }

    setElement = (element) => {
        this.element = element;
    }

    render() {
        const { renderTag, attributes, children } = this.props;
        const newAttrs = assign({}, attributes, {
            //className: classnames(cssClasses.menuWrapper, attributes.className),
            onContextMenu: this.handleContextClick,
            onMouseDown: this.handleMouseDown,
            onMouseUp: this.handleMouseUp,
            onTouchStart: this.handleTouchstart,
            onTouchEnd: this.handleTouchEnd,
            onMouseOut: this.handleMouseUp,
            ref: this.setElement
        });

        return React.createElement(renderTag, newAttrs, children);
    }
}

var hasTouch = false;
try {
    document.createEvent('TouchStart');
    hasTouch = true;
}
catch (e) {}

export default !hasTouch ? UpContextMenuTrigger : UpTouchContextMenuTrigger;

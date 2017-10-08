import * as React  from 'react'
import { callIfExists } from '../../../Common/utils/helpers'
import GlobalEventListener from '../../../Common/utils/eventListener'
import {cssRaw} from 'typestyle'
import * as assign from 'object-assign'
import * as classNames from 'classnames'

import {MENU_HIDE, MENU_SHOW} from './actions'

export interface UpContextMenuProps {
    id:string;
    onHide?:() => void;
    onShow?:() => void;
}

export interface UpContextMenuState {
    x:number;
    y:number;
    top:number;
    left:number;
    isVisible:boolean;
}

cssRaw(`
.up-contextmenu {
    min-width: 160px;
    padding: 5px 0;
    margin: 2px 0 0;
    font-size: 16px;
    color: #373a3c;
    text-align: left;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0,0,0,.15);
    border-radius: .25rem;
    outline: none;
    opacity: 0;
    pointer-events: none;
}

.up-contextmenu.up-contextmenu--visible {
    opacity: 1;
    pointer-events: auto;
}

.up-contextmenu-link {
    display: inline-block;
    width: 100%;
    padding: 3px 20px;
    clear: both;
    font-weight: 400;
    line-height: 1.5;
    color: #373a3c;
    text-align: inherit;
    white-space: nowrap;
    background: 0 0;
    border: 0;
}

.up-contextmenu-link.active,
.up-contextmenu-link:hover {
    color: #fff;
    background-color: #0275d8;
    border-color: #0275d8;
    text-decoration: none;
}
.up-contextmenu-item.submenu > a {
    padding-right: 27px;
}

.up-contextmenu-item.submenu > a:after {
    content: "▶";
    display: inline-block;
    position: absolute;
    right: 7px;
}
`)

export default class UpContextMenu extends React.PureComponent<UpContextMenuProps, UpContextMenuState> {

    menu:HTMLElement;
    listenerId : string;

    public static defaultProps = {

    }

    constructor(props) {
        super(props);
        this.state = {
            x: 0,
            y: 0,
            top:0, 
            left:0,
            isVisible: false
        };
    }

    setMenu = (element) => {
        this.menu = element;
    }

    getMenuPosition = (x, y) => {
        const { scrollTop: scrollX, scrollLeft: scrollY } = document.documentElement;
        const { innerWidth, innerHeight } = window;
        const rect = this.menu.getBoundingClientRect();
        const menuStyles = {
            top: y + scrollY,
            left: x + scrollX
        };

        if (y + rect.height > innerHeight) {
            menuStyles.top -= rect.height;
        }

        if (x + rect.width > innerWidth) {
            menuStyles.left -= rect.width;
        }

        if (menuStyles.top < 0) {
            menuStyles.top = (rect.height < innerHeight) ? (innerHeight - rect.height) / 2 : 0;
        }

        if (menuStyles.left < 0) {
            menuStyles.left = (rect.width < innerWidth) ? (innerWidth - rect.width) / 2 : 0;
        }

        return menuStyles;
    }

    componentDidMount() {
        var callbacks = {} ;
        callbacks[MENU_SHOW] = this.handleShow ;
        callbacks[MENU_HIDE] = this.handleHide ;
        
        this.listenerId = GlobalEventListener.register(callbacks);
    }

    componentDidUpdate() {
        if (this.state.isVisible) {
            const wrapper = window.requestAnimationFrame || setTimeout;

            wrapper(() => {
                const {x, y} = this.state;

                const {top, left} = this.getMenuPosition(x, y);

                wrapper(() => {
                    this.menu.style.top = `${top}px`;
                    this.menu.style.left = `${left}px`;
                    
                });
            });
        } else {

        }
    }

    componentWillUnmount() {
        if (this.listenerId) {
            GlobalEventListener.unregister(this.listenerId);
        }
    }

    handleShow = (e) => {
        console.log('handleShow') ;
        console.log(e) ;
        if (e.detail.id !== this.props.id) return;

        const { x, y } = e.detail.position;

        this.setState({isVisible: true, x, y});
        document.addEventListener('mousedown', this.handleOutsideClick);
        document.addEventListener('ontouchstart', this.handleOutsideClick);
        document.addEventListener('scroll', this.handleHide);
        document.addEventListener('contextmenu', this.handleHide);
        window.addEventListener('resize', this.handleHide);
        callIfExists(this.props.onShow, e);
    }

    handleHide = (e) => {
        console.log('handleHide') ;
        console.log(e) ;
        document.removeEventListener('mousedown', this.handleOutsideClick);
        document.removeEventListener('ontouchstart', this.handleOutsideClick);
        document.removeEventListener('scroll', this.handleHide);
        document.removeEventListener('contextmenu', this.handleHide);
        window.removeEventListener('resize', this.handleHide);

        this.setState({isVisible: false});
        callIfExists(this.props.onHide, e);
    }

    handleOutsideClick = (e) => {
        if (!this.menu.contains(e.target)) this.hideMenu({}, e.target);
    }

    hideMenu = (opts = {}, target) => {
        GlobalEventListener.dispatchGlobalEvent(MENU_HIDE, assign({}, opts, {type: MENU_HIDE}), target);
    }

    render() {
        const { children } = this.props;
        const { top, left } = this.state;
        const style = {position: "fixed" as "fixed", top: top, left: left};

        var MenuStyle = 'up-contextmenu'
        if(this.state.isVisible) 
            MenuStyle = classNames(MenuStyle , 'up-contextmenu--visible') ;

        return (
            <nav ref={this.setMenu} style={style} onContextMenu={this.handleHide} className={MenuStyle}>
                {children}
            </nav>
        );
    }
}
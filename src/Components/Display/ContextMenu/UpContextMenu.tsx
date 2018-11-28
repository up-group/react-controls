import * as React  from 'react'
import { callIfExists } from '../../../Common/utils/helpers'
import GlobalEventListener from '../../../Common/utils/eventListener'
import {style} from 'typestyle'
import * as assign from 'object-assign'
import * as classNames from 'classnames'

import {MENU_HIDE, MENU_SHOW} from './actions'
import withTheme, { WithThemeProps } from '../../../Common/theming/withTheme';
import { NestedCSSProperties } from 'typestyle/lib/types';

import defaultTheme from '../../../Common/theming' ;

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

class UpContextMenu extends React.PureComponent<UpContextMenuProps & WithThemeProps, UpContextMenuState> {

    menu:HTMLElement;
    listenerId : string;

    public static defaultProps: Partial<UpContextMenuProps> & WithThemeProps = {
        theme: defaultTheme,
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
        }
    }

    componentWillUnmount() {
        if (this.listenerId) {
            GlobalEventListener.unregister(this.listenerId);
        }
    }

    handleShow = (e) => {
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
        const { children, theme } = this.props;
        const { top, left } = this.state;
        
        const MenuStyle = style({
                position: "fixed", 
                top: top, 
                left: left,
                minWidth: '160px',
                padding: '5px 0',
                margin: '2px 0 0',
                fontSize: '16px',
                color: theme.colorMap.primaryFg,
                textAlign: 'left',
                backgroundColor: '#fff',
                backgroundClip: 'padding-box',
                border: '1px solid rgba(0,0,0,.15)',
                borderRadius: '.25rem',
                outline: 'none',
                opacity: this.state.isVisible ? 1 : 0,
                pointeEvents: this.state.isVisible ? 'auto' : 'none',
                $nest : {
                    '& .up-contextmenu-link' : {
                        display: 'inline-block',
                        width: '100%',
                        padding: '3px 20px',
                        clear: 'both',
                        fontWeight: 400,
                        lineHeight: 1.5,
                        color: theme.colorMap.primary,
                        textAlign: 'inherit',
                        whiteSpace: 'nowrap',
                        background: 'transparent',
                        border: 0,
                        textDecoration: 'none',
                    },
                    '& .up-contextmenu-link.active,& .up-contextmenu-link:hover' : {
                        color: theme.colorMap.primaryFg,
                        backgroundColor: theme.colorMap.primary,
                        borderColor: theme.colorMap.primaryDark,
                        textDecoration: 'none',
                    },
                    '& .up-contextmenu-item.submenu > a' : {
                        paddingRight: '27px',
                    },
                    '& .up-contextmenu-item.submenu > a:after' : {
                        content: "▶",
                        display: 'inline-block',
                        position: 'absolute',
                        right: '7px',
                    }
                }
            } as NestedCSSProperties) ;

        return (
            <nav ref={this.setMenu} onContextMenu={this.handleHide} className={MenuStyle}>
                {children}
            </nav>
        );
    }
}

export default withTheme<UpContextMenuProps>(UpContextMenu)
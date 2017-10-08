import * as React  from 'react'
// import listener from './globalEventListener';
// import { hideMenu } from './actions';
// import { cssClasses, callIfExists } from './helpers';

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

export default class UpContextMenu extends React.PureComponent<UpContextMenuProps, UpContextMenuState> {

    menu:HTMLElement;

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
        //this.listenId = listener.register(this.handleShow, this.handleHide);
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
                    //this.menu.classList.add(cssClasses.menuVisible);
                });
            });
        } else {
            //this.menu.classList.remove(cssClasses.menuVisible);
        }
    }

    componentWillUnmount() {
        // if (this.listenId) {
        //     listener.unregister(this.listenId);
        // }
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
        //callIfExists(this.props.onShow, e);
    }

    handleHide = (e) => {
        document.removeEventListener('mousedown', this.handleOutsideClick);
        document.removeEventListener('ontouchstart', this.handleOutsideClick);
        document.removeEventListener('scroll', this.handleHide);
        document.removeEventListener('contextmenu', this.handleHide);
        window.removeEventListener('resize', this.handleHide);

        this.setState({isVisible: false});
        //callIfExists(this.props.onHide, e);
    }

    handleOutsideClick = (e) => {
        //if (!this.menu.contains(e.target)) hideMenu();
    }

    render() {
        const { children } = this.props;
        const { top, left } = this.state;
        const style = {position: "fixed" as "fixed", top: top, left: left};

        return (
            <nav ref={this.setMenu} style={style} onContextMenu={this.handleHide} /*className={cssClasses.menu}*/>
                {children}
            </nav>
        );
    }
}
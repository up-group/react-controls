import * as React from 'react';
import { callIfExists } from '../../../Common/utils/helpers';
import GlobalEventListener from '../../../Common/utils/eventListener';
import * as assign from 'object-assign';
import { MENU_HIDE, MENU_SHOW } from './actions';
import withTheme, { WithThemeProps } from '../../../Common/theming/withTheme';
import defaultTheme from '../../../Common/theming';
import { UpContextMenuProps, UpContextMenuState } from './types';
import { MenuStyle } from './styles';

class UpContextMenu extends React.PureComponent<UpContextMenuProps & WithThemeProps, UpContextMenuState> {
  menu: HTMLElement;
  listenerId: string;

  public static defaultProps: Partial<UpContextMenuProps> & WithThemeProps = {
    theme: defaultTheme,
  };

  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      top: 0,
      left: 0,
      isVisible: false,
    };
  }

  setMenu = element => {
    this.menu = element;
  };

  getMenuPosition = (x, y) => {
    const { scrollTop: scrollX, scrollLeft: scrollY } = document.documentElement;
    const { innerWidth, innerHeight } = window;
    const rect = this.menu.getBoundingClientRect();
    const menuStyles = {
      top: y + scrollY,
      left: x + scrollX,
    };

    if (y + rect.height > innerHeight) {
      menuStyles.top -= rect.height;
    }

    if (x + rect.width > innerWidth) {
      menuStyles.left -= rect.width;
    }

    if (menuStyles.top < 0) {
      menuStyles.top = rect.height < innerHeight ? (innerHeight - rect.height) / 2 : 0;
    }

    if (menuStyles.left < 0) {
      menuStyles.left = rect.width < innerWidth ? (innerWidth - rect.width) / 2 : 0;
    }

    return menuStyles;
  };

  componentDidMount() {
    const callbacks = {};
    callbacks[MENU_SHOW] = this.handleShow;
    callbacks[MENU_HIDE] = this.handleHide;

    this.listenerId = GlobalEventListener.register(callbacks);
  }

  componentDidUpdate() {
    if (this.state.isVisible) {
      const wrapper = window.requestAnimationFrame || setTimeout;

      wrapper(() => {
        const { x, y } = this.state;

        const { top, left } = this.getMenuPosition(x, y);

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

  handleShow = e => {
    if (e.detail.id !== this.props.id) return;

    const { x, y } = e.detail.position;

    this.setState({ isVisible: true, x, y });
    document.addEventListener('mousedown', this.handleOutsideClick);
    document.addEventListener('ontouchstart', this.handleOutsideClick);
    document.addEventListener('scroll', this.handleHide);
    document.addEventListener('contextmenu', this.handleHide);
    window.addEventListener('resize', this.handleHide);
    callIfExists(this.props.onShow, e);
  };

  handleHide = e => {
    document.removeEventListener('mousedown', this.handleOutsideClick);
    document.removeEventListener('ontouchstart', this.handleOutsideClick);
    document.removeEventListener('scroll', this.handleHide);
    document.removeEventListener('contextmenu', this.handleHide);
    window.removeEventListener('resize', this.handleHide);

    this.setState({ isVisible: false });
    callIfExists(this.props.onHide, e);
  };

  handleOutsideClick = e => {
    if (this.state.isVisible && !this.menu.contains(e.target)) {
      this.setState(prevState => ({
        isVisible: !prevState.isVisible,
      }));
      this.hideMenu({}, e.target);
    }
  };

  hideMenu = (opts = {}, target) => {
    GlobalEventListener.dispatchGlobalEvent(MENU_HIDE, assign({}, opts, { type: MENU_HIDE }), target);
  };

  render() {
    const { children, theme } = this.props;

    return (
      <nav ref={this.setMenu} onContextMenu={this.handleHide} className={MenuStyle(theme, this.state)}>
        {this.state.isVisible && children}
      </nav>
    );
  }
}

export { UpContextMenu };
export default withTheme<UpContextMenuProps>(UpContextMenu);

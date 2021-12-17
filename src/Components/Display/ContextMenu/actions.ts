import * as assign from 'object-assign';
import GlobalEventListener from '../../../Common/utils/eventListener';

export const MENU_SHOW = 'UP_CONTEXTMENU_SHOW';
export const MENU_HIDE = 'UP_CONTEXTMENU_HIDE';

export const showMenu = (opts?, target?) => {
  if (opts == null) opts = {};

  GlobalEventListener.dispatchGlobalEvent(MENU_SHOW, assign({}, opts, { type: MENU_SHOW }), target);
};

export const hideMenu = (opts?, target?) => {
  if (opts == null) opts = {};

  GlobalEventListener.dispatchGlobalEvent(MENU_HIDE, assign({}, opts, { type: MENU_HIDE }), target);
};

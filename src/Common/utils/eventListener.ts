
import assign from 'object-assign';

export default class GlobalEventListener {
    callbacks: object;

    constructor() {
        this.callbacks = {};
    }

    register = (action, handler) => {
        window.addEventListener(action, handler);
    }

    unregister = (action) => {
        window.removeEventListener(action);
    }

    dispatchGlobalEvent(eventName, opts, target = window) {
        // Compatibale with IE
        // @see http://stackoverflow.com/questions/26596123/internet-explorer-9-10-11-event-constructor-doesnt-work
        let event;

        if (typeof window['CustomEvent'] === 'function') {
            event = new window['CustomEvent'](eventName, { detail: opts });
        } else {
            event = document.createEvent('Event');
            event.initEvent(eventName, false, true, opts);
        }

        if (target) {
            target.dispatchEvent(event);
        }
    }
}
/* eslint-disable react/no-deprecated */
/* eslint-disable react/no-find-dom-node */
/* eslint-disable prefer-rest-params */
/* eslint-disable @typescript-eslint/no-this-alias */
import React from 'react';
import ReactDOM from 'react-dom';

import { UpVisibilitySensorProps, UpVisibilitySensorState, Offset, VisibilityRect } from './';

function throttle(callback, limit) {
  let wait = false;
  return function () {
    if (!wait) {
      wait = true;
      setTimeout(function () {
        callback();
        wait = false;
      }, limit);
    }
  };
}

function debounce(func, wait) {
  let timeout;
  return function () {
    const context = this,
      args = arguments;
    const later = function () {
      timeout = null;
      func.apply(context, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export default class UpVisibilitySensor extends React.Component<UpVisibilitySensorProps, UpVisibilitySensorState> {
  public static defaultProps = {
    active: true,
    partialVisibility: false,
    minTopValue: 0,
    scrollCheck: false,
    scrollDelay: 250,
    scrollThrottle: -1,
    resizeCheck: false,
    resizeDelay: 250,
    resizeThrottle: -1,
    intervalCheck: true,
    intervalDelay: 100,
    delayedCall: false,
    offset: {},
    containment: null,
    children: React.createElement('span'),
  };

  debounceCheck: any;
  node: Element | Text;
  interval: any;

  constructor(props: UpVisibilitySensorProps) {
    super(props);
    this.state = {
      isVisible: false,
      visibilityRect: {} as VisibilityRect,
    };
  }

  componentDidMount() {
    this.node = ReactDOM.findDOMNode(this);
    if (this.props.active) {
      this.startWatching();
    }
  }

  componentWillUnmount() {
    this.stopWatching();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.active) {
      this.startWatching();
    } else {
      this.stopWatching();
    }

    if (nextProps.forceCheck) {
      this.check();
    }
  }

  getContainer = () => {
    return this.props.containment || window;
  };

  isVisibleWithOffset = (offset, rect, containmentRect) => {
    const offsetDir = offset.direction;
    const offsetVal = offset.value;

    // Rules for checking different kind of offsets. In example if the element is
    // 90px below viewport and offsetTop is 100, it is considered visible.
    switch (offsetDir) {
      case 'top':
        return (
          containmentRect.top + offsetVal < rect.top &&
          containmentRect.bottom > rect.bottom &&
          containmentRect.left < rect.left &&
          containmentRect.right > rect.right
        );

      case 'left':
        return (
          containmentRect.left + offsetVal < rect.left &&
          containmentRect.bottom > rect.bottom &&
          containmentRect.top < rect.top &&
          containmentRect.right > rect.right
        );

      case 'bottom':
        return (
          containmentRect.bottom - offsetVal > rect.bottom &&
          containmentRect.left < rect.left &&
          containmentRect.right > rect.right &&
          containmentRect.top < rect.top
        );

      case 'right':
        return (
          containmentRect.right - offsetVal > rect.right &&
          containmentRect.left < rect.left &&
          containmentRect.top < rect.top &&
          containmentRect.bottom > rect.bottom
        );
    }
  };
  addEventListener = (target, event, delay, throttle) => {
    if (!this.debounceCheck) {
      this.debounceCheck = {};
    }

    let timeout;
    let func;

    const later = function () {
      timeout = null;
      this.check();
    }.bind(this);

    if (throttle > -1) {
      func = function () {
        if (!timeout) {
          timeout = setTimeout(later, throttle || 0);
        }
      };
    } else {
      func = function () {
        clearTimeout(timeout);
        timeout = setTimeout(later, delay || 0);
      };
    }

    const info = {
      target: target,
      fn: func,
      getLastTimeout: function () {
        return timeout;
      },
    };

    target.addEventListener(event, info.fn);
    this.debounceCheck[event] = info;
  };

  startWatching = () => {
    if (this.debounceCheck || this.interval) {
      return;
    }

    if (this.props.intervalCheck) {
      this.interval = setInterval(this.check, this.props.intervalDelay);
    }

    if (this.props.scrollCheck) {
      this.addEventListener(this.getContainer(), 'scroll', this.props.scrollDelay, this.props.scrollThrottle);
    }

    if (this.props.resizeCheck) {
      this.addEventListener(window, 'resize', this.props.resizeDelay, this.props.resizeThrottle);
    }

    // if dont need delayed call, check on load ( before the first interval fires )
    !this.props.delayedCall && this.check();
  };

  stopWatching = () => {
    if (this.debounceCheck) {
      // clean up event listeners and their debounce callers
      for (const debounceEvent in this.debounceCheck) {
        if (this.debounceCheck.hasOwnProperty(debounceEvent)) {
          const debounceInfo = this.debounceCheck[debounceEvent];

          clearTimeout(debounceInfo.getLastTimeout());
          debounceInfo.target.removeEventListener(debounceEvent, debounceInfo.fn);

          this.debounceCheck[debounceEvent] = null;
        }
      }
    }
    this.debounceCheck = null;

    if (this.interval) {
      this.interval = clearInterval(this.interval);
    }
  };

  /**
   * Check if the element is within the visible viewport
   */
  check = () => {
    const el = this.node;
    let containmentRect;
    // if the component has rendered to null, dont update visibility
    if (!el) {
      return this.state;
    }
    // We assert that our el is a Element
    const rect = (el as Element).getBoundingClientRect();

    if (this.props.containment) {
      const containmentDOMRect = this.props.containment.getBoundingClientRect();
      containmentRect = {
        top: containmentDOMRect.top,
        left: containmentDOMRect.left,
        bottom: containmentDOMRect.bottom,
        right: containmentDOMRect.right,
      };
    } else {
      containmentRect = {
        top: 0,
        left: 0,
        bottom: window.innerHeight || document.documentElement.clientHeight,
        right: window.innerWidth || document.documentElement.clientWidth,
      };
    }

    // Check if visibility is wanted via offset?
    const offset = this.props.offset || ({} as Offset);
    const hasValidOffset = typeof offset === 'object';
    if (hasValidOffset) {
      containmentRect.top += offset.top || 0;
      containmentRect.left += offset.left || 0;
      containmentRect.bottom -= offset.bottom || 0;
      containmentRect.right -= offset.right || 0;
    }

    const visibilityRect = {
      top: rect.top >= containmentRect.top,
      left: rect.left >= containmentRect.left,
      bottom: rect.bottom <= containmentRect.bottom,
      right: rect.right <= containmentRect.right,
    };

    let isVisible = visibilityRect.top && visibilityRect.left && visibilityRect.bottom && visibilityRect.right;

    // Check for partial visibility
    if (this.props.partialVisibility) {
      let partialVisible =
        rect.top <= containmentRect.bottom &&
        rect.bottom >= containmentRect.top &&
        rect.left <= containmentRect.right &&
        rect.right >= containmentRect.left;

      // account for partial visibility on a single edge
      if (typeof this.props.partialVisibility === 'string') {
        partialVisible = visibilityRect[this.props.partialVisibility];
      }

      // if we have minimum top visibility set by props, lets check, if it meets the passed value
      // so if for instance element is at least 200px in viewport, then show it.
      isVisible = this.props.minTopValue
        ? partialVisible && rect.top <= containmentRect.bottom - this.props.minTopValue
        : partialVisible;
    }

    let state = this.state;
    // notify the parent when the value changes
    if (this.state.isVisible !== isVisible || (isVisible && this.props.forceCheck)) {
      state = {
        isVisible: isVisible,
        visibilityRect: visibilityRect,
      };
      this.setState(state);
      this.props.onChange(isVisible, visibilityRect);
    }

    return state;
  };
  render() {
    return React.Children.only(this.props.children);
  }
}

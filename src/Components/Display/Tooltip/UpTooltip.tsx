import React from 'react';
import { Component } from 'react';
import classnames from 'classnames';
import ReactTooltip from 'react-tooltip';
import { generateId, isFunction, isEmpty } from '../../../Common/utils';
import { getStyles, upToolTipWrapper } from './styles';
import UpDefaultTheme, { withTheme } from '../../../Common/theming';
import { UpTooltipProps } from './types';

class UpTooltip extends Component<UpTooltipProps> {
  public static defaultProps: UpTooltipProps = {
    content: '',
    place: 'right',
    effect: 'float',
    type: 'light',
    multiline: false,
    html: false,
    delayHide: 500,
    delayShow: 500,
    disable: false,
    theme: UpDefaultTheme,
  };

  constructor(props: UpTooltipProps) {
    super(props);
  }

  componentDidUpdate() {
    ReactTooltip.rebuild();
  }

  getContent = () => {
    return (
      <div className="up-tooltip-content">
        {this.props.title != null && <div className="up-tooltip-header">{this.props.title}</div>}
        <div className="up-tooltip-body">{this.props.content}</div>
      </div>
    );
  };

  render() {
    const { id, children, content, type, ...others } = this.props;

    let tooltipId = id;
    if (!tooltipId) {
      tooltipId = generateId();
    }

    let childrenWithProps = null;
    let childrenAsFunction = null;

    if (children != null && isFunction(children)) {
      childrenAsFunction = children as (value: UpTooltipProps) => JSX.Element;
    } else {
      childrenWithProps = React.Children.map(children, function (child) {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, {
            dataFor: tooltipId,
            // ,'data-event': 'click',
            // 'data-event-off': 'dblclick'
          });
        } else {
          return child;
        }
      });
    }

    const renderChildren = (
      <>
        {childrenWithProps && childrenWithProps}
        {childrenAsFunction &&
          childrenAsFunction({
            id: tooltipId,
          })}
      </>
    );

    if (isEmpty(content)) {
      return renderChildren;
    }

    return (
      <div className={upToolTipWrapper}>
        {renderChildren}
        <ReactTooltip
          offset={this.props.place === 'bottom' ? { right: 85, top: 5 } : {}}
          className={classnames('up-tooltip', getStyles(this.props))}
          id={tooltipId}
          getContent={this.getContent}
          eventOff="click"
          globalEventOff="click"
          {...others}
        />
      </div>
    );
  }
}

export { UpTooltip };
export default withTheme<UpTooltipProps>(UpTooltip);

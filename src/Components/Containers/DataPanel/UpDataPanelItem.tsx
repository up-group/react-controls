import React from 'react';
import classnames from 'classnames';
import UpButton from '../../Inputs/Button/UpButton';
import UpSvgIcon from '../../Display/SvgIcon';
import UpTooltip from '../../Display/Tooltip/UpTooltip';
import UpLigne from '../../Display/Ligne/UpLigne';
import * as _ from 'lodash';
import { TitleFormatter, PanelItemProps } from './types';
import { getStyles } from './styles';

const UpDataPanelItem = (props: PanelItemProps) => {
  const { panelData, className, title, displayMode, columns, showOnlyNotEmptyValue, getColumnCustomClassName } = props;

  const Tooltip = props => (
    <UpTooltip title={props.tooltip.title} place="bottom" content={props.tooltip.content}>
      <UpLigne>
        <UpSvgIcon width={16} height={16} iconName="info" className="col-tooltip" />
      </UpLigne>
    </UpTooltip>
  );

  return (
    <div className={classnames('panel-container', className, getStyles(props))}>
      {title && (
        <div className="panel-title">
          <span className="panel-title-general">
            {_.isFunction((title.general as TitleFormatter).format) &&
              (title.general as TitleFormatter).format(panelData)}
            {_.isString(title.general) && title.general}
          </span>
          {title.specific && (
            <span className="panel-title-specific">
              {_.isFunction((title.specific as TitleFormatter).format) &&
                (title.specific as TitleFormatter).format(panelData)}
              {_.isString(title.specific) && title.specific}
            </span>
          )}
        </div>
      )}
      <div className="panel-body">
        {columns.map((element, index) => {
          const customClassName = (getColumnCustomClassName && getColumnCustomClassName(element.field)) || '';
          return (panelData && panelData[element.field] && showOnlyNotEmptyValue) ||
            (element.field && !showOnlyNotEmptyValue) ? (
            <React.Fragment key={index}>
              <div className={classnames(`panel-col ${customClassName}`)}>
                <span className="panel-col-label">
                  {element.label}
                  {displayMode === 'row' ? ': ' : null}
                </span>
                {element.formatter ? (
                  element.formatter.format(
                    panelData,
                    element,
                    element.getFormatterProps
                      ? element.getFormatterProps(panelData ? panelData[element.field] : null)
                      : {}
                  )
                ) : (
                  <span className="panel-col-value">{panelData && panelData[element.field]}</span>
                )}
                {element.tooltip && <Tooltip tooltip={element.tooltip} />}
              </div>
            </React.Fragment>
          ) : null;
        })}
        {props.actions && (
          <div className="panel-actions">
            {props.actions.map((element, index) => (
              <UpButton
                key={`panel-action-${index}`}
                actionType={element.type}
                intent={element.intent}
                width="icon"
                borderless
                onClick={() =>
                  element.action({
                    value: { ...panelData },
                  })
                }
              ></UpButton>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

UpDataPanelItem.defaultProps = {
  displayMode: 'row',
  showOnlyNotEmptyValue: false,
};

export default UpDataPanelItem;

import * as React from 'react';
import classnames from 'classnames';
import UpButton from '../../Inputs/Button/UpButton';
import UpSvgIcon from '../../Display/SvgIcon';
import UpTooltip from '../../Display/Tooltip/UpTooltip';
import UpLigne from '../../Display/Ligne/UpLigne';
import { toRem } from '../../../Common/theming/utils';
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
    <div className={classnames('panel-container', className, getStyles(props, columns, panelData))}>
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
          const getFormatterPropsStyle = element.getFormatterProps
          ? element.getFormatterProps(panelData ? panelData[element.field] : null)
          : {};
          const colAlternativeStyle = getFormatterPropsStyle && getFormatterPropsStyle.backgroundColor 
          ? { 
            color: 'white',
            fontWeight: 'bold',
            paddingLeft: toRem(20),
            paddingRight: toRem(28),
            paddingBottom: toRem(8),
            paddingTop: toRem(14),
            backgroundColor: getFormatterPropsStyle.backgroundColor,
            backgroundClip: 'padding-box',
            borderRadius: '3px'
          }
          : {
            paddingLeft: toRem(20),
            paddingRight: toRem(28),
            paddingBottom: toRem(8),
            paddingTop: toRem(14)
          }; 
          const labelAltrnativeStyle = colAlternativeStyle.backgroundColor ? {} : {color: '#979797'}
          const valueAlternativeStyle = colAlternativeStyle.backgroundColor ? {} : {color: 'black'}
          return (panelData && panelData[element.field] && showOnlyNotEmptyValue) ||
            (element.field && !showOnlyNotEmptyValue) ? (
            <React.Fragment key={index}>
              <div className={classnames(`panel-col ${customClassName}`)} style={colAlternativeStyle}>
                <span className="panel-col-label" style={labelAltrnativeStyle}>
                  {element.label}
                  {displayMode === 'row' ? ': ' : null}
                </span>
                {element.formatter ? (
                  element.formatter.format(
                    panelData,
                    element,
                    getFormatterPropsStyle
                  )
                ) : (
                  <span className="panel-col-value" style={valueAlternativeStyle}>{panelData && panelData[element.field]}</span>
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

import * as React from 'react';
import * as classnames from 'classnames';
import UpButton from '../../Inputs/Button/UpButton';
import UpSvgIcon from '../../Display/SvgIcon';
import UpTooltip from '../../Display/Tooltip/UpTooltip';
import UpLigne from '../../Display/Ligne/UpLigne';
import { style } from 'typestyle';

import { CSSProperties } from 'typestyle/lib/types';

import {
  DisplayType,
  Action,
  Column,
  TitleFormatter
} from './UpDataPanel';

export interface PanelItemProps {
  className?: string;
  title?: {
    general: string;
    specific?: string;
    formatter?: TitleFormatter;
  };
  displayMode?: DisplayType;
  actions?: Array<Action>;
  panelData: {};
  columns: Array<Column>;
  showOnlyNotEmptyValue: boolean;
}

const getStyle = props => {
  const tooltipStyle: CSSProperties =
    props.displayMode === 'row'
      ? { position: 'absolute', bottom: '15px' }
      : { position: 'absolute', top: '-5px', right: '-20px' };
  return style({
    border: '1px solid #DEDDDD',
    borderRadius: '4px',
    padding: '25px 29.15px 13.5px 50px',
    $nest: {
      '& .panel-body': {
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: '14px',
        position: 'relative'
      },
      '& .panel-col': {
        display: 'flex',
        flexDirection: `${props.displayMode}`,
        marginRight: '37px',
        marginBottom: '8px',
        position: 'relative'
      },
      '& .panel-col-label': {
        color: props.theme.colorMap.gray6
      },
      '& .panel-col-value': {
        color: props.theme.colorMap.grey,
        marginLeft: props.displayMode === 'row' ? '2px' : ''
      },
      '& .panel-title': {
        marginBottom: '30px'
      },
      '& .panel-title-general': {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#4B5C59'
      },
      '& .panel-title-specific': {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#4B5C59',
        marginLeft: '4px'
      },
      '& .col-tooltip': {
        ...tooltipStyle
      },
      '& .panel-actions': {
        position: 'absolute',
        right: 0,
        alignSelf: 'center'
      }
    }
  });
};

const UpDataPanelItem = (props: PanelItemProps) => {
  const {
    panelData,
    className,
    title,
    displayMode,
    columns,
    showOnlyNotEmptyValue
  } = props;

  const Tooltip = props => (
    <UpTooltip
      title={props.tooltip.title}
      content={props.tooltip.content}>
      <UpLigne>
        <UpSvgIcon
          width={16}
          height={16}
          iconName="info"
          className="col-tooltip"
        />
      </UpLigne>
    </UpTooltip>
  );

  return (
    <div
      className={classnames(
        'panel-container',
        className,
        getStyle(props)
      )}>
      {title && (
        <div className="panel-title">
          <span className="panel-title-general">{title.general}</span>
          {title.formatter ? (
            title.formatter.format(title.specific)
          ) : (
            <span className="panel-title-specific">
              {title.specific}
            </span>
          )}
        </div>
      )}
      <div className="panel-body">
        {columns.map((element, index) => (
          <React.Fragment key={index}>
            <div className="panel-col">
              {(panelData[element.field] && showOnlyNotEmptyValue) ||
              !showOnlyNotEmptyValue ? (
                <span className="panel-col-label">
                  {element.label}
                  {displayMode === 'row' ? ': ' : null}
                </span>
              ) : null}
              {element.formatter ? (
                element.formatter.format(panelData, element)
              ) : (
                <span className="panel-col-value">
                  {panelData && panelData[element.field]}
                </span>
              )}
              {element.tooltip && (
                <Tooltip tooltip={element.tooltip} />
              )}
            </div>
          </React.Fragment>
        ))}
        {props.actions && (
          <div className="panel-actions">
            {props.actions.map((element, index) => (
              <UpButton
                key={`panel-action-${index}`}
                actionType={element.type}
                intent={element.intent}
                onClick={() => element.action(panelData)}></UpButton>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
UpDataPanelItem.defaultProps = {
  displayMode: 'row',
  showOnlyNotEmptyValue: false
};

export default UpDataPanelItem;

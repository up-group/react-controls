import * as React from 'react';
import { media, style } from 'typestyle';
import classnames from 'classnames';
import UpButtonGroup from '../ButtonGroup';
import UpButton from '../../Inputs/Button/UpButton';
import { NestedCSSProperties } from 'typestyle/lib/types';
import { isEmpty } from '../../../Common/utils';
import { WithThemeProps } from '../../../Common/theming/withTheme';
import { IntentType } from '../../../Common/theming/types';
import { ActionType } from '../../Inputs/Button/types';
import UpLoadingIndicator from '../../Display/LoadingIndicator';
import { DeviceSmartphones } from '../../../Common/utils/device';

interface ActionDataGrid {
  label: string;
  actionType?: ActionType;
  onClick?: (rows: []) => Promise<any>;
}

interface ActionsDataGrid {
  groupLabel: string;
  validationLabel: string;
  intent?: IntentType;
  actions?: ActionDataGrid[];
  confirmationMessage?: string;
}

export interface UpDataGridFooterProps {
  pagination?: React.ReactElement;
  actionsDataGrid?: ActionsDataGrid;
  isPaginationEnabled?: boolean;
  data?: Array<any>;
  isDataFetching?: boolean;
}

const getStyle = (props: UpDataGridFooterProps & WithThemeProps) => {
  const position: NestedCSSProperties = props.actionsDataGrid ? {} : { position: 'absolute', right: 0 };
  return style(
    {
      display: 'flex',
      marginTop: '5px',
      width: '100%',
      minHeight: '40px',
      flexDirection: 'row',
      $nest: {
        '&.up-data-grid-footer .up-buttons-wrapper': {
          alignItems: 'normal',
          flexGrow: 1,
        },
        '&.up-data-grid-footer .up-btn-wrapper': {
          marginRight: '6px',
        },
        '&.up-data-grid-footer .pagination-container': {
          ...position,
        },
        '&.up-data-grid-footer .up-icon-wrapper svg path': {
          fill: props.actionsDataGrid && props.theme.colorMap.disabledFg,
        },
      },
    },
    media(DeviceSmartphones, {
      flexDirection: 'column',
    })
  );
};

const UpDataGridFooter: React.FC<UpDataGridFooterProps & WithThemeProps> = props => {
  const { pagination, actionsDataGrid, isPaginationEnabled, data, isDataFetching } = props;

  const { actions, validationLabel, groupLabel, intent } = actionsDataGrid || {};

  const [selectedAction, selectAction] = React.useState(null);
  const selectedData = data.filter(element => element.isSelected);

  React.useEffect(() => {
    if (actions && actions.length === 1) {
      selectAction(actions[0]);
    } else if (selectedData.length < 1) {
      selectAction(null);
    }
  }, [selectedData]);

  const buttonAction =
    !isEmpty(actions) &&
    actions.map(({ label, ...rest }) => ({
      libelle: label,
      onClick: () => {
        selectAction({ label, ...rest });
      },
    }));

  const handleValidation = () => {
    selectedAction.onClick(selectedData);
  };

  return (
    <div className={classnames('up-data-grid-footer', getStyle(props))}>
      {actions && (
        <UpButtonGroup isAddOn="right" gutter={1} align={'h'}>
          {actions.length === 1 ? (
            <>
              <UpButton intent="primary" disabled={!(selectedData.length >= 1)} onClick={handleValidation}>
                {actions[0].label}
              </UpButton>
            </>
          ) : (
            <>
              <UpButton
                dropDown="down"
                intent="primary"
                extraActions={buttonAction || []}
                disabled={!(selectedData.length >= 1)}
              >
                {(selectedAction && selectedAction.label) || groupLabel}
              </UpButton>
              <UpButton onClick={handleValidation} intent={intent} disabled={!selectedAction}>
                {validationLabel}
              </UpButton>
            </>
          )}
        </UpButtonGroup>
      )}
      {isDataFetching && <UpLoadingIndicator />}
      {isPaginationEnabled && !isDataFetching && pagination}
    </div>
  );
};

export default UpDataGridFooter;

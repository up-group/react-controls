import * as React from 'react';
import classnames from 'classnames';

import UpButtonGroup from '../../ButtonGroup';
import UpButton from '../../../Inputs/Button/UpButton';
import { isEmpty } from '../../../../Common/utils';
import { WithThemeProps } from '../../../../Common/theming/withTheme';
import UpLoadingIndicator from '../../../Display/LoadingIndicator';
import { ActionsDataGrid } from './UpDataGridFooter.types';
import { getStyle } from './UpDataGridFooter.style';

export interface UpDataGridFooterProps {
  pagination?: React.ReactElement;
  actionsDataGrid?: ActionsDataGrid;
  isPaginationEnabled?: boolean;
  data?: Array<any>;
  isDataFetching?: boolean;
}

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

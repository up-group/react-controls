import * as React from 'react'
import { style } from "typestyle"
import classnames from 'classnames'
import UpButtonGroup from '../ButtonGroup'
import UpButton from '../../Inputs/Button/UpButton'
import { NestedCSSProperties } from 'typestyle/lib/types'
import { isEmpty } from '../../../Common/utils'
import { WithThemeProps }  from '../../../Common/theming/withTheme'
import { IntentType } from '../../../common/theming/types'
import { ActionType } from '../../Inputs/Button'

interface ActionDataGrid {
    label : string;
    actionType?: ActionType;
    onClick?: (rows:[]) => Promise<any>;
}

interface ActionsDataGrid {
    label : string;
    intent?: IntentType;
    actions?: ActionDataGrid[] ;
}

export interface FooterProps {
  actionsButtonText?: string;
  pagination?: React.ReactElement;
  actionsDataGrid?: ActionsDataGrid;
  isPaginationEnabled?: boolean;
  data?: Array<any>;
}

const getStyle = (props : FooterProps & WithThemeProps) => {
    const position: NestedCSSProperties = props.actionsDataGrid ? {} : { position: 'absolute', right: 0 }
    return style({
        display: 'flex',
        marginTop: '5px',
        width: '100%',
        $nest: {
            '&.up-data-grid-footer .up-buttons-wrapper': {
                alignItems: 'normal',
                flexGrow: 1
            },
            '&.up-data-grid-footer .up-btn-wrapper': {
                marginRight: '6px',
            },
            '&.up-data-grid-footer .pagination-container': {
                ...position
            },
            '&.up-data-grid-footer .up-icon-wrapper svg path': {
               fill: props.actionsDataGrid && props.theme.colorMap.disabledFg
            },
        }
    })
}


const UpDataGridFooter = (props: FooterProps & WithThemeProps) => {
    
    const {
        pagination,
        actionsDataGrid: {actions,label,intent},
        actionsButtonText,
        isPaginationEnabled,
        data,
    } = props

    const [selectedAction ,selectAction] = React.useState(null)
    const selectedData = data.filter(element => element.isSelected)


    React.useEffect(() => {
      if (selectedData.length < 2) {
        selectAction(null);
      }
    }, [selectedData]);


    const buttonAction =
      actions &&
      !isEmpty(actions) &&
      actions.map(({ label, ...rest}) => ({
        libelle: label,
        onClick: () => {
          selectAction({label,...rest});
        },
      }));

      const handleValidation = () => {
        selectedAction.onClick(selectedData) 
      }


    return (
        <div className={classnames('up-data-grid-footer', getStyle(props))}>
            {actions &&
                <UpButtonGroup  isAddOn='right' gutter={1} align={"h"}>
                    <UpButton
                        dropDown="down"
                        intent="primary"
                        extraActions={buttonAction || []}
                        disabled={!(selectedData.length >= 2)}
                    >
                        {(selectedAction && selectedAction.label) || actionsButtonText}
                    </UpButton>
                    <UpButton
                        onClick={handleValidation}
                        intent={intent}
                        disabled={!selectedAction}
                    >
                        {label}
                    </UpButton>
                </UpButtonGroup>
            }
            {isPaginationEnabled && pagination}
        </div>
    )
}


export default UpDataGridFooter;
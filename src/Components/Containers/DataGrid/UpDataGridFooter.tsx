import * as React from 'react'
import { style } from "typestyle"
import classnames from 'classnames'
import UpButtonGroup from '../ButtonGroup'
import UpButton from '../../Inputs/Button/UpButton'
import { NestedCSSProperties } from 'typestyle/lib/types'
import { isEmpty } from '../../../Common/utils'

export interface FooterProps {
    showActionsButtons?: boolean,
    actionsButtonText?: string,
    validationButtonText?: string,
    pagination?: React.ReactElement,
    actions?: any
    isPaginationEnabled?: boolean
}

const getStyle = props => {
    const position: NestedCSSProperties = props.showActionsButtons ? {} : { position: 'absolute', right: 0 }
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
            }
        }
    })
}


const UpDataGridFooter = (props: FooterProps) => {
    const {
        showActionsButtons,
        pagination,
        actions,
        validationButtonText,
        actionsButtonText,
        isPaginationEnabled,
    } = props

    const buttonAction = !isEmpty(actions) && actions.map(({ description, action }) => ({
        libelle: description,
        onClick: action,
    }))

    return (
        <div className={classnames('up-data-grid-footer', getStyle({ showActionsButtons }))}>
            {showActionsButtons &&
                <UpButtonGroup isAddOn='right' gutter={1} align={"h"}>
                    <UpButton
                        dropDown="down"
                        intent="primary"
                        extraActions={buttonAction || []}
                    >
                        {actionsButtonText}
                    </UpButton>
                    <UpButton
                        onClick={() => {/* to discuss */ }}
                        intent="primary"
                    >
                        {validationButtonText}
                    </UpButton>
                </UpButtonGroup>}
            {isPaginationEnabled && pagination && pagination}
        </div>
    )
}


export default UpDataGridFooter;
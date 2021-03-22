import * as React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import UpDataPanel, { UpDataPanel as UpDataPanelComponent } from './UpDataPanel';
import { getRootContainer } from '../../../Common/stories';
import { style } from 'typestyle';
import UpBadge from '../../Display/Badge/UpBadge';

export default {
    title: 'Components/Containers/UpDataPanel',
    decorators: [
        withKnobs,
        getRootContainer('UpDataPanel')
    ],
    component: UpDataPanelComponent,
};

const data = [
    {
        first_label: 'value 1',
        second_label: 'value 2',
        third_label: 'value 3',
        fourth_label: 'Value 4',
        fifth_label: 'value 5',
        sixth_label: 'value6',
    },
    {
        first_label: 'second value 1',
        second_label: 'second value 2',
        third_label: ' second value 3',
        fourth_label: 'second Value 4',
        fifth_label: 'second value 5',
        sixth_label: 'second value 6',
    }
];

const columns = [
    {
        field: 'first_label',
        label: 'First Label',
    },
    {
        field: 'second_label',
        label: 'Second Label',
        tooltip: { content: 'Explication status activation monétique quand on clique sur le picto' }
    },
    {
        field: 'third_label',
        label: 'Third Label'
    },
    {
        field: 'fourth_label',
        label: 'Forth Label'
    },
    {
        field: 'fifth_label',
        label: 'Fifth Label'
    },
    {
        field: 'sixth_label',
        label: 'Sixth Label'
    },
    {
        field: 'seventh_label',
        label: 'Seventh Label'
    },
];

const titleFormatter = {
    format: (data) => (
        <span
            style={{
                color: data['first_label'] == 'value 1' ? 'orange' : 'red',
                fontWeight: 'bold',
                marginLeft: '4px'
            }}>
            {data['first_label']}
        </span>
    )
};

export const RowDisplayMode =
    () => (
        <UpDataPanel
            data={data}
            columns={columns}
            title={{ general: 'Gestion technique', specific: titleFormatter }}
            displayMode='row'
            className={style({
                $nest: {
                    '&.panel-container': {
                        marginTop: '25px'
                    }
                }
            })}
            actions={[
                {
                    action: e => console.log(e),
                    type: 'arrow-right',
                    intent: 'primary'
                }
            ]}
        />
    );

export const ColumnDisplayMode =
    () => (
        <UpDataPanel
            data={data}
            columns={columns}
            displayMode='column'
            className={style({
                $nest: {
                    '&.panel-container': {
                        marginTop: '25px'
                    }
                }
            })}
        />
    );

export const HideEmptyColumns =
    () => (
        <UpDataPanel
            data={data}
            columns={columns}
            displayMode='column'
            showOnlyNotEmptyValue={true}
            className={style({
                $nest: {
                    '&.panel-container': {
                        marginTop: '25px'
                    }
                }
            })}
        />
    );

export const ColumnModeWithFormatter =
    () => {
        const formatter = {
            format: (item, column) => (
                <span
                    className={style({
                        color: 'orange',
                    })}>
                    {item[column.field]}
                </span>
            )
        };
        return (
            <UpDataPanel
                data={data}
                columns={columns.map((e, i) =>
                    i === 0 ? { ...e, formatter } : { ...e }
                )}
                showOnlyNotEmptyValue={true}
                displayMode='column'
                className={style({
                    $nest: {
                        '&.panel-container': {
                            marginTop: '25px'
                        }
                    }
                })}
            />
        );
    };

ColumnModeWithFormatter.storyName = 'Display Columns In Column Mode Display With Formatter';

export const RowModeWithTitleFormatter =
    () => {
        const secondformatter = {
            format: (item, column) => (
                <UpBadge
                    text={item[column.field]}
                    className={style({
                        $nest: {
                            '&.up-badge': {
                                padding: '2px 15px',
                                fontWeight: 'normal',
                                marginLeft: '10px'
                            }
                        }
                    })}
                    intent='success'
                />
            )
        };
        const thirdformatter = {
            format: (item, column) => (
                <UpBadge
                    text=''
                    className={style({
                        $nest: {
                            '&.up-badge': {
                                height: '20px',
                                width: '20px',
                                marginLeft: '10px'
                            }
                        }
                    })}
                    intent='success'
                    rounded
                />
            )
        };
        return (
            <UpDataPanel
                data={data}
                columns={columns.map((e, i) =>
                    i === 0
                        ? { ...e, formatter: secondformatter }
                        : i === 1
                            ? { ...e, formatter: thirdformatter }
                            : i === 2
                                ? { ...e, formatter: secondformatter }
                                : { ...e }
                )}
                title={{
                    general: 'Gestion Technique',
                    specific: titleFormatter,
                }}
                showOnlyNotEmptyValue={true}
                displayMode='row'
                className={style({
                    $nest: {
                        '&.panel-container': {
                            marginTop: '25px'
                        }
                    }
                })}
                actions={[
                    {
                        action: e => console.log(e),
                        type: 'arrow-right',
                        intent: 'primary'
                    }
                ]}
            />
        );
    };

RowModeWithTitleFormatter.storyName = 'Display Columns In Row Mode Display With Title Formatter';

export const CustomClassColumn =
    () => (
        <UpDataPanel
            data={[data[0]]}
            columns={columns}
            displayMode='column'
            getColumnCustomClassName={(field) => {
                if (field === 'seventh_label') return style({ marginLeft: 'auto', background: 'orange' });
            }}
        />
    );

CustomClassColumn.storyName = 'Add Custom ClassName To A Specific Column Of Panel';
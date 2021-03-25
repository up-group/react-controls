import * as React from 'react';
import { render, fireEvent, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import UpDataPanel from '../UpDataPanel';
import { ThemeProvider as UpThemeProvider } from '../../../../Common/theming/ThemeProvider';
import UpDefaultTheme from '../../../../Common/theming';
import { style } from 'typestyle';

const whithTheme = component => (
    <UpThemeProvider
        theme={UpDefaultTheme}>
        {component}
    </UpThemeProvider>
);
const renderComponent = component => render(whithTheme(component));

afterEach(cleanup);

const data = [
    {
        first_label: 'value 1',
        second_label: 'value 2',
        third_label: 'value 3',
        fourth_label: 'Value 4',
        fifth_label: 'value 5',
        sixth_label: 'value 6',
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

describe('Tests for UpPanel', () => {

    it('should show the expected number of columns', () => {
        const { container } = renderComponent(
            <UpDataPanel
                data={data}
                columns={columns}
            />
        );

        expect(container.querySelectorAll('.panel-col')).toHaveLength(7);
    });

    it('should not display empty columns', () => {
        const { container } = renderComponent(
            <UpDataPanel
                data={data}
                columns={columns}
                showOnlyNotEmptyValue={true}
            />
        );

        expect(container.querySelectorAll('.panel-col')).toHaveLength(6);
    });

    it('should not show title by default', () => {
        const { container } = renderComponent(
            <UpDataPanel
                data={data}
                columns={columns}
            />
        );

        expect(container.querySelector('.panel-title')).not.toBeInTheDocument();
    });

    it('should show a customized title', () => {
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

        const { container } = renderComponent(
            <UpDataPanel
                data={data}
                columns={columns}
                title={{ general: 'Gestion technique', specific: titleFormatter }}
            />
        );

        expect(container.querySelector('.panel-title')).toBeInTheDocument();
        expect(container.querySelector('.panel-title-general')).toHaveTextContent('Gestion technique');
        expect(container.querySelector('.panel-title-specific')).toContainHTML('<span style="color: orange; font-weight: bold; margin-left: 4px;">value 1</span>');
    });

    it('should apply a customized style on specific column', () => {
        renderComponent(
            <UpDataPanel
                data={data}
                columns={columns}
                getColumnCustomClassName={(field) => {
                    if (field === 'first_label') return style({ display: 'none' });
                }}
            />
        );

        const element = screen.getByText('value 1').parentElement.className;
        const lengthOfClassName = element.split(' ').length;
        expect(lengthOfClassName).toBe(2);
    });

    it('should call action when clicking on the icon', () => {
        const onClose = jest.fn();
        const { container } = renderComponent(
            <UpDataPanel
                data={data}
                columns={columns}
                actions={[
                    {
                        action: () => onClose(),
                        type: 'arrow-right',
                        intent: 'primary'
                    }
                ]}
            />
        );

        const actionButton = container.querySelector('button');
        fireEvent.click(actionButton);
        expect(onClose).toHaveBeenCalled();
    });

    it('should display multiple actions', () => {
        const { container } = renderComponent(
            <UpDataPanel
                data={data}
                columns={columns}
                actions={[
                    {
                        action: () => console.log(),
                        type: 'arrow-right',
                        intent: 'primary'
                    },
                    {
                        action: () => console.log(),
                        type: 'arrow-right',
                        intent: 'primary'
                    }
                ]}
            />
        );

        const actionsButtons = container.querySelectorAll('button');
        expect(actionsButtons).toHaveLength(2);
    });

    it('should display customized column', () => {
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

        renderComponent(
            <UpDataPanel
                data={data}
                columns={columns.map((e, i) =>
                    i === 0 ? { ...e, formatter } : { ...e }
                )}
            />
        );

        const element = screen.getByText('value 1');
        expect(element.className).not.toBe('panel-col-value');
    });

    it('should display a tooltip for a specific column', () => {
        //Tooltip in column 2
        renderComponent(
            <UpDataPanel
                data={data}
                columns={columns}
            />
        );

        const element = screen.getByText('value 2').parentNode;
        expect(element.querySelector('.col-tooltip')).toBeInTheDocument();
    });
});
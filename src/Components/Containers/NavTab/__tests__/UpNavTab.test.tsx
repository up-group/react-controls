import * as React from 'react';
import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import UpNavTab from '../UpNavTab';

const tabs = [
    {
        content: <p>UpNavTab content</p>,
        head: 'Tab 1'
    },
    {
        content: <p>UpNavTab content</p>,
        head: 'Tab 2'
    }, {
        content: <p>UpNavTab content</p>,
        head: 'Tab 3'
    }
];

describe('Tests for UpNavTab', () => {

    it('should render 3 tabs', () => {
        const { container, getAllByText } = render(
            <UpNavTab
                tabs={tabs}
            />
        );

        expect(container.querySelectorAll('.up-nav-tab-item')).toHaveLength(3);
        expect(getAllByText('UpNavTab content')).toHaveLength(3);
    });

    it('should render titles', () => {
        const { container } = render(
            <UpNavTab
                tabs={tabs}
            />
        );

        const upNavTabItem = container.querySelectorAll('.up-nav-tab-item');
        expect(upNavTabItem[0]).toHaveTextContent('Tab 1');
        expect(upNavTabItem[1]).toHaveTextContent('Tab 2');
        expect(upNavTabItem[2]).toHaveTextContent('Tab 3');
    });

    it('should display the wanted tab if selectedTabOnLoad is provided ', () => {
        const { getByText } = render(
            <UpNavTab
                tabs={tabs}
                selectedTabOnLoad={2}
            />
        );

        const className = 'up-nav-tab-item__selected';
        expect(getByText('Tab 3').classList).toContain(className);
        expect(getByText('Tab 2').classList).not.toContain(className);
        expect(getByText('Tab 1').classList).not.toContain(className);
    });

    it('should change tab after navTab click ', () => {
        const { getByText, container } = render(
            <UpNavTab
                tabs={tabs}
            />
        );

        const className = 'up-nav-tab-item__selected';
        const upNavTab = container.querySelectorAll('.up-nav-tab-item');
        expect(getByText('Tab 1').classList).toContain(className);

        fireEvent.click(upNavTab[2]);
        expect(getByText('Tab 3').classList).toContain(className);
    });

    it('should call onSelectedTabChanged callback', () => {
        const onClose = jest.fn((selectTabKey, tab) => `You are in tab ${selectTabKey}`);

        render(
            <UpNavTab
                tabs={tabs}
                onSelectedTabChanged={(selectTabKey, tab) => onClose(selectTabKey, tab)}
            />
        );

        expect(onClose).toHaveBeenCalled();
        expect(onClose).toHaveBeenCalledWith(0, { "content": <p>UpNavTab content</p>, "head": "Tab 1" });
        expect(onClose.mock.results[0].value).toBe('You are in tab 0');
    });

    it('should select onLoad mode by default : show tabs in different containers ', () => {
        const { container } = render(
            <UpNavTab
                tabs={tabs}
            />
        );
        
        expect(container.querySelector('.up-nav-tab').parentNode.childElementCount).toBe(4);
    });

    it('should show tabs in one container if loadType is onShow', () => {
        const { container } = render(
            <UpNavTab
                tabs={tabs}
                loadType={'onShow'}
            />
        );

        expect(container.querySelector('.up-nav-tab').parentNode.childElementCount).toBe(2);
    });
});
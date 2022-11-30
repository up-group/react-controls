import React from 'react';
import { render, screen } from '@testing-library/react';
import { UpTag, Props } from './UpTag';

const onChange = jest.fn();

let props: Props = {
    id: '1',
    text: 'Mono',
    onChange
};

const create = () => render(<UpTag {...props} />);

describe("Tag", () => {
    it("should test if component render content correctly", () => {
        create();

        const text = screen.getByText('Mono');
        const id = screen.getByTestId(`tag-${props.id}`);

        expect(text).toBeDefined();
        expect(id).toBeDefined();
    });
});

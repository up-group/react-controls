import * as React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import UpHeading from '../UpHeading';

describe('Tests for UpHeading', () => {

    it('should render title in h1 tag', () => {
        const { getByText } = render(
            <UpHeading
                tag={'h1'}
            >
                H1 Title
            </UpHeading>
        );

        expect(getByText('H1 Title').nodeName).toBe('H1');
    });

    it('should render title in h2 tag', () => {
        const { getByText } = render(
            <UpHeading
                tag={'h2'}
            >
                H2 Title
            </UpHeading>
        );

        expect(getByText('H2 Title').nodeName).toBe('H2');
    });

    it('should render title in h3 tag', () => {
        const { getByText } = render(
            <UpHeading
                tag={'h3'}
            >
                H3 Title
            </UpHeading>
        );

        expect(getByText('H3 Title').nodeName).toBe('H3');
    });

    it('should render title in h4 tag', () => {
        const { getByText } = render(
            <UpHeading
                tag={'h4'}
            >
                H4 Title
            </UpHeading>
        );

        expect(getByText('H4 Title').nodeName).toBe('H4');
    });

    it('should render title in h5 tag', () => {
        const { getByText } = render(
            <UpHeading
                tag={'h5'}
            >
                H5 Title
            </UpHeading>
        );

        expect(getByText('H5 Title').nodeName).toBe('H5');
    });

    it('should render title in h6 tag', () => {
        const { getByText } = render(
            <UpHeading
                tag={'h6'}
            >
                H6 Title
            </UpHeading>
        );

        expect(getByText('H6 Title').nodeName).toBe('H6');
    });
});
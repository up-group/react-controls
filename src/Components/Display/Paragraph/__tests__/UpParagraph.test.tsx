import * as React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UpParagraph from '../UpParagraph';
import { style } from 'typestyle';


describe('Tests for UpPanel', () => {

    it('should render Text in p tag', () => {
        render(
            <UpParagraph>
                UpParagraph Content
            </UpParagraph>
        );

        expect(screen.getByText('UpParagraph Content').nodeName).toBe('P');
    });

    it('should add default className', () => {
        render(
            <UpParagraph>
                UpParagraph Content
            </UpParagraph>
        );

        expect(screen.getByText('UpParagraph Content').classList.length).toBe(1);
    });

    it('should pass className through props', () => {
        render(
            <UpParagraph
                className={style({
                    borderWidth: '10px'
                })}
            >
                UpParagraph Content
            </UpParagraph>
        );

        expect(screen.getByText('UpParagraph Content').classList.length).toBe(2);
    });
});
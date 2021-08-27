import * as React from 'react';
import UpParagraph from './UpParagraph';
import { getRootContainer } from '../../../Common/stories';
import { withKnobs } from '@storybook/addon-knobs';
import { style } from 'typestyle';
import classnames from 'classnames';

export default {
    title: 'Components/Display/UpParagraph',
    decorators: [withKnobs, getRootContainer('UpParagraph')],
    component: UpParagraph
};

const paragraphStyle = style({
    border: '1px solid #F59100'
});

export const General =
    () => (
        <>
            <UpParagraph
                paragraphSize={'xlarge'}
                margin={'none'}
                textAlign={'left'}
                className={paragraphStyle}
            >
                Paragraph in XLarge Text Size And no Margin
            </UpParagraph>
            <UpParagraph
                paragraphSize={'large'}
                margin={'small'}
                textAlign={'center'}
                className={paragraphStyle}
            >
                Centred Paragraph, in large Text Size And small Margin
            </UpParagraph>
            <UpParagraph
                paragraphSize={'medium'}
                margin={'medium'}
                textAlign={'right'}
                className={paragraphStyle}
            >
                Paragraph Text to Right, in medium Text Size And small Margin
            </UpParagraph>
            <UpParagraph
                paragraphSize={'small'}
                margin={'large'}
                textAlign={'justify'}
                color={'#F59100'}
                className={classnames(paragraphStyle, style({
                    fontWeight: 'bold'
                }))}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </UpParagraph>
        </>
    );


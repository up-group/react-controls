import * as React from 'react';
import UpTile from './UpTile';
import { withKnobs } from '@storybook/addon-knobs';
import { getRootContainer } from '../../../Common/stories';

export default {
    title: 'Components/Containers/UpTile',
    decorators: [withKnobs, getRootContainer('UpTile')],
    component: UpTile
};

export const GeneralUse =
    () => (
        <UpTile title="UpTile title">Content</UpTile>
    );

export const ContentWithFooter =
    () => (
        <UpTile
            title="UpTile title"
            footer="This is the footer"
        >
            Content
        </UpTile>
    );

export const ContentWithMaxHeight =
    () => (
        <UpTile
            title="UpTile title"
            maxHeight="200"
        >
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
            <p>Content</p>
        </UpTile>
    );
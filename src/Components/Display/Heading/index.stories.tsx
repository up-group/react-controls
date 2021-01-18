import * as React from 'react';
import UpHeading from './';
import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

export default {
    title: 'Components/Display/UpHeading',
    decorators: [withKnobs, getRootContainer('UpHeading')],
    component: UpHeading
};

export const General =
    () => (
        <>
            <UpHeading tag='h1'>H1</UpHeading>
            <UpHeading tag='h2'>H2</UpHeading>
            <UpHeading tag='h3'>H3</UpHeading>
            <UpHeading tag='h4'>H4</UpHeading>
            <UpHeading tag='h5'>H5</UpHeading>
        </>
    );

export const UpHeadWithTruncateAndLeftTextAlign =
    () => (
        <div style={{ width: '350px' }}>
            <UpHeading
                tag='h1'
                textAlign='left'
                truncate={true}
            >
                Présentation du composant UpHeading
            </UpHeading>
        </div>
    );

export const UpHeadWithUpCaseAndRedColor =
    () => (
        <UpHeading
            tag='h1'
            upcase={true}
            color={'red'}
        >
            Titre h1
        </UpHeading>
    );
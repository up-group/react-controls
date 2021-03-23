
import * as React from 'react';
import UpLink, { UpLink as UpLinkComponent } from './UpLink';
import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { UpTooltip } from '../../..';

export default {
    title: 'Components/Display/UpLink',
    decorators: [withKnobs, getRootContainer('UpLink')],
    component: UpLinkComponent
};

export const General =
    () => (
        <UpLink
            href={'https://up.coop/'}
            label={'My link'}
        />
    );

export const UnderlineProperties =
    () => (
        <UpLink
            label={'My link'}
            plain={true}
        />
    );

UnderlineProperties.storyName = 'Show Link without Underline Properties';

export const onClickCallback =
    () => (
        <UpLink
            label={'My link'}
            onClick={(e) => alert(`Link cliqued`)}
        />
    );

onClickCallback.storyName = 'Call OnClick Callback';

export const TargetProperty =
    () => (
        <UpLink
            href={'https://up.coop/'}
            label={'My link'}
            target={'_blank'}
        />
    );

TargetProperty.storyName = 'Open Link In New Tab';

export const ColorProperty =
    () => (
        <UpLink
            label={'My link'}
            color={'#000'}
        />
    );

TargetProperty.storyName = 'Change Link Color';

const TooltipRenderer = 'Tooltip content';
export const WithTooltip =
    () => (
        <UpTooltip
            id={'Tooltip'}
            title={'Details'}
            content={TooltipRenderer}
        >
            <UpLink
                label={'My link'}
                dataFor={'Tooltip'}
            >
                My Link
            </UpLink>
        </UpTooltip>
    );

TargetProperty.storyName = 'Show Tooltip On Link Hover';
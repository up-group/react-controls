import * as React from 'react';
import update from 'react-addons-update';
import UpTooltip, { UpTooltip as UpTooltipComponent } from './UpTooltip';
import UpLigne from '../Ligne';
import UpPanel from '../../Containers/Panel';
import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { UpSvgIcon } from '../../..';
import { UpLink } from '../Link/UpLink';
import { style } from 'typestyle';
import { UpButton } from '../../..';
import UpParagraph from '../Paragraph';

export default {
    title: 'Components/Display/UpTooltip',
    decorators: [withKnobs, getRootContainer('UpTooltip')],
    component: UpTooltipComponent
};

const TooltipRenderer = (
    <UpParagraph
        className={style({ padding: '10px' })}
        margin={'none'}
        paragraphSize={'small'}
    >
        For more info, please visit our product website...
    </UpParagraph>
);

const UpLigneStyleContent = style({
    fontWeight: 'bold',
    color: '#fff !important',
    backgroundColor: '#F59100',
    padding: '5px',
    margin: '5px'
});

export const General =
    () => (
        <>
            <UpPanel type={'primary'}>
                Panel Type is Light (Default Type)
                <UpTooltip
                    title={'Details'}
                    content={TooltipRenderer}
                    type={'light'}
                >
                    <UpLigne className={UpLigneStyleContent} >
                        UpTooltip
                    </UpLigne>
                </UpTooltip>
            </UpPanel>
            <UpPanel type={'danger'}>
                Panel Type is Danger
                <UpTooltip
                    title={'Details'}
                    content={TooltipRenderer}
                    type={'danger'}
                >
                    <UpLigne className={UpLigneStyleContent} >
                        UpTooltip
                    </UpLigne>
                </UpTooltip>
            </UpPanel>
            <UpPanel type={'default'}>
                Panel Type is Default
                <UpTooltip
                    title={'Details'}
                    content={TooltipRenderer}
                    type={'default'}
                >
                    <UpLigne className={UpLigneStyleContent} >
                        UpTooltip
                    </UpLigne>
                </UpTooltip>
            </UpPanel>
            <UpPanel type={'error'}>
                Panel Type is Error
                <UpTooltip
                    title={'Details'}
                    content={TooltipRenderer}
                    type={'error'}
                >
                    <UpLigne className={UpLigneStyleContent} >
                        UpTooltip
                    </UpLigne>
                </UpTooltip>
            </UpPanel>
            <UpPanel type={'info'}>
                Panel Type is Info
                <UpTooltip
                    title={'Details'}
                    content={TooltipRenderer}
                    type={'info'}
                >
                    <UpLigne className={UpLigneStyleContent} >
                        UpTooltip
                    </UpLigne>
                </UpTooltip>
            </UpPanel>
            <UpPanel type={'primary'}>
                Panel Type is Primary
                <UpTooltip
                    title={'Details'}
                    content={TooltipRenderer}
                    type={'primary'}
                >
                    <UpLigne className={UpLigneStyleContent} >
                        UpTooltip
                    </UpLigne>
                </UpTooltip>
            </UpPanel>
            <UpPanel type={'success'}>
                Panel Type is Success
                <UpTooltip
                    title={'Details'}
                    content={TooltipRenderer}
                    type={'success'}
                >
                    <UpLigne className={UpLigneStyleContent} >
                        UpTooltip
                    </UpLigne>
                </UpTooltip>
            </UpPanel>
            <UpPanel type={'warning'}>
                Panel Type is Warning
                <UpTooltip
                    title={'Details'}
                    content={TooltipRenderer}
                    type={'warning'}
                >
                    <UpLigne className={UpLigneStyleContent} >
                        UpTooltip
                    </UpLigne>
                </UpTooltip>
            </UpPanel>
        </>
    );

export const PlaceProperty =
    () => (
        <>
            <UpPanel type={'primary'}>
                Tooltip with top position
                <UpTooltip
                    title={'Details'}
                    content={TooltipRenderer}
                    place={'top'}
                >
                    <UpLigne className={UpLigneStyleContent} >
                        UpTooltip
                    </UpLigne>
                </UpTooltip>
            </UpPanel>
            <UpPanel type={'primary'}>
                Tooltip with bottom position
                <UpTooltip
                    title={'Details'}
                    content={TooltipRenderer}
                    place={'bottom'}
                >
                    <UpLigne className={UpLigneStyleContent} >
                        UpTooltip
                    </UpLigne>
                </UpTooltip>
            </UpPanel>
            <UpPanel type={'primary'}>
                Tooltip with left position
                <UpTooltip
                    title={'Details'}
                    content={TooltipRenderer}
                    place={'left'}
                >
                    <UpLigne className={UpLigneStyleContent} >
                        UpTooltip
                    </UpLigne>
                </UpTooltip>
            </UpPanel>
            <UpPanel type={'primary'}>
                Tooltip with right position
                <UpTooltip
                    title={'Details'}
                    content={TooltipRenderer}
                    place={'right'}
                >
                    <UpLigne className={UpLigneStyleContent} >
                        UpTooltip
                    </UpLigne>
                </UpTooltip>
            </UpPanel>
        </>
    );

PlaceProperty.storyName = 'Change Position By Modifying Place Property';

export const EffectProperty =
    () => (
        <UpPanel type={'primary'}>
            Fixed Tooltip that does not follow mouse cursor
            <UpTooltip
                title={'Details'}
                content={TooltipRenderer}
                effect={'solid'}
            >
                <UpLigne className={UpLigneStyleContent} >
                    UpTooltip
                </UpLigne>
            </UpTooltip>
        </UpPanel>
    );

EffectProperty.storyName = 'Display Fix Tooltip';

export const WithCSSBreakLines =
    () => {
        const TooltipContent = 'Text that ends with a new line.\n Text that ends with a new line.\n Text that ends with a new line';

        return (
            <UpTooltip
                title={'Details'}
                content={TooltipContent}
            >
                Example of use of the UpTooltip component on Icon
                <UpSvgIcon
                    width={25}
                    height={25}
                    iconName={'warning-sign'}
                    color={'red'}
                    style={{ cursor: 'pointer' }}
                />
            </UpTooltip>
        )
    };

WithCSSBreakLines.storyName = 'Lines Break By Adding \\n Between Sentences ';

export const MultilinePropertyLinesBreak =
    () => {
        const TooltipContent = (
            <UpParagraph
                margin={'none'}
                paragraphSize={'small'}
            >
                Text that ends with a new line.<br /> Text that ends with a new line.<br /> Text that ends with a new line
            </UpParagraph>
        );

        return (
            <UpTooltip
                title={'Details'}
                content={TooltipContent}
                multiline={true}
            >
                Example of use of the UpTooltip component on button {' '}
                <UpButton
                    intent={'primary'}
                >
                    Button
                </UpButton>
            </UpTooltip>
        )
    };

MultilinePropertyLinesBreak.storyName = 'Lines Break By Passing Truthy Multiline Property';

export const DisableTooltip =
    () => (
        <UpPanel type={'primary'}>
            Disable
            <UpTooltip
                title={'Details'}
                content={TooltipRenderer}
                disable={true}
            >
                <UpLigne className={UpLigneStyleContent} >
                    UpTooltip
                </UpLigne>
            </UpTooltip>
        </UpPanel>
    );

export const DelayShowHideProperties =
    () => (
        <UpPanel type={'primary'}>
            Show And Hide Tooltip Without Delay
            <UpTooltip
                title={'Details'}
                content={TooltipRenderer}
                delayHide={0}
                delayShow={0}
            >
                <UpLigne className={UpLigneStyleContent} >
                    UpTooltip
                </UpLigne>
            </UpTooltip>
        </UpPanel>
    );

DelayShowHideProperties.storyName = 'Show And Hide Tooltip Without Delay';

export const OnTextAsFunction =
    () => (
        <UpPanel type={'primary'}>
            Example of use of the UpTooltip component on Text
            <UpTooltip
                title={'Details'}
                content={TooltipRenderer}
            >
                {
                    ({ id }) => (
                        <UpLigne
                            data-for={id}
                            data-tip='tooltip'
                            className={UpLigneStyleContent}
                        >
                            UpTooltip
                        </UpLigne>
                    )
                }
            </UpTooltip>
        </UpPanel>
    );

export const OnLink =
    () => (
        <UpPanel>
            Example of use of the UpTooltip component {' '}
            <UpTooltip
                id={'Tooltip'}
                title={'Details'}
                content={TooltipRenderer}
            >
                on Link
            </UpTooltip>
        </UpPanel>
    );



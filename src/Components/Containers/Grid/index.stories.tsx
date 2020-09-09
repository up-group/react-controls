import * as React from 'react';
import UpDefaultTheme from '../../../Common/theming';
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider';
import { UpGrid, UpRow, UpCol } from './';
import { UpGrid as UpGridComponent } from './UpGrid';
import UpPanel from '../../Containers/Panel';
import { getRootContainer } from '../../../Common/stories';
import { withKnobs } from '@storybook/addon-knobs';
import { background } from 'csx';

export default {
    title: 'Components/Containers/UpGrid',
    decorators: [
        withKnobs,
        getRootContainer('UpGrid')
    ],
    component: UpGridComponent,
};

export const GeneralUse =
    () => (
        <UpGrid gutter={30} rowSpacing={20}>
            <UpRow>
                <UpCol xs={24} sm={12} md={8} lg={12} xl={8}>
                    <UpPanel type={'primary'} title={'Mon Panel'} />
                </UpCol>
                <UpCol xs={24} sm={12} md={8} lg={6} xl={8}>
                    <UpPanel type={'default'} title={'Mon Panel'} />
                </UpCol>
                <UpCol xs={24} sm={12} md={8} lg={6} xl={8}>
                    <UpPanel type={'info'} title={'Mon Panel'} />
                </UpCol>
            </UpRow>
        </UpGrid>
    );

GeneralUse.decorators = [(GeneralUse) => (
    <UpThemeProvider theme={UpDefaultTheme}>
        <GeneralUse />
    </UpThemeProvider>
)];

export const PushPullCol =
    () => (
        <UpGrid gutter={30} rowSpacing={20}>
            <UpRow>
                <UpCol md={{ 'span': 12, 'push': 12 }} lg={{ 'span': 8, 'push': 12 }}>
                    <UpPanel type={'primary'} title={'Mon Panel'} message={'First'} />
                </UpCol>
                <UpCol md={{ 'span': 12, 'pull': 12 }} lg={{ 'span': 12, 'pull': 8 }}>
                    <UpPanel type={'default'} title={'Mon Panel'} message={'Second'} />
                </UpCol>
            </UpRow>
        </UpGrid>
    );

PushPullCol.storyName = 'Change Order With Pull And Push Up Col Properties';

PushPullCol.decorators = [(PushPullCol) => (
    <UpThemeProvider theme={UpDefaultTheme}>
        <PushPullCol />
    </UpThemeProvider>
)];

export const OrderCol =
    () => (
        <UpGrid gutter={30} rowSpacing={20}>
            <UpRow>
                <UpCol md={{ 'span': 8, 'order': 3 }} lg={{ 'span': 8, 'order': 3 }}>
                    <UpPanel type={'primary'} title={'Mon Panel'} message={'First'} />
                </UpCol>
                <UpCol md={{ 'span': 8, 'order': 3 }} lg={{ 'span': 8, 'order': 2 }}>
                    <UpPanel type={'default'} title={'Mon Panel'} message={'Second'} />
                </UpCol>
                <UpCol md={{ 'span': 8, 'order': 3 }} lg={{ 'span': 8, 'order': 1 }}>
                    <UpPanel type={'info'} title={'Mon Panel'} message={'Third'} />
                </UpCol>
            </UpRow>
        </UpGrid>
    );

OrderCol.storyName = 'Change Order With Order Property';

OrderCol.decorators = [(OrderOffestCol) => (
    <UpThemeProvider theme={UpDefaultTheme}>
        <OrderOffestCol />
    </UpThemeProvider>
)];


export const OffsetCol =
    () => (
        <UpGrid gutter={30} rowSpacing={20}>
            <UpRow>
                <UpCol md={{ 'span': 12, 'offset': 2 }} lg={{ 'span': 8, 'offset': 3 }}>
                    <UpPanel type={'primary'} title={'Mon Panel'} message={'First'} />
                </UpCol>
                <UpCol md={{ 'span': 8, 'offset': 2 }} lg={{ 'span': 8, 'offset': 3 }}>
                    <UpPanel type={'default'} title={'Mon Panel'} message={'Second'} />
                </UpCol>
            </UpRow>
        </UpGrid>
    );

OffsetCol.storyName = 'Add Offset To Col';

OffsetCol.decorators = [(OffsetCol) => (
    <UpThemeProvider theme={UpDefaultTheme}>
        <OffsetCol />
    </UpThemeProvider>
)];
// align rowSpacing gutter justify
export const RowProperties =
    () => (
        <UpGrid gutter={30}>
            <UpRow align='bottom' justify='end' style={{ height: '200px', backgroundColor: 'khaki' }} >
                <UpCol xs={6} sm={6} md={6} lg={6} xl={6}>
                    <UpPanel type={'primary'} title={'Mon Panel'} />
                </UpCol>
                <UpCol xs={6} sm={6} md={6} lg={6} xl={6}>
                    <UpPanel type={'default'} title={'Mon Panel'} />
                </UpCol>
                <UpCol xs={6} sm={6} md={6} lg={6} xl={6}>
                    <UpPanel type={'info'} title={'Mon Panel'} />
                </UpCol>
            </UpRow>
        </UpGrid>
    );

OffsetCol.decorators = [(RowProperties) => (
    <UpThemeProvider theme={UpDefaultTheme}>
        <RowProperties />
    </UpThemeProvider>
)];

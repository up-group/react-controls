import * as React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import UpFormGroup, { UpFormGroup as FormGroupComponent } from './UpFormGroup';
import { getRootContainer } from '../../../Common/stories';

export default {
    title: 'Components/Containers/FormGroup',
    decorators: [
        withKnobs,
        getRootContainer('FormGroup')
    ],
    component: FormGroupComponent,
};

export const GeneralUse =
    () => (
        <UpFormGroup
            title={'FormGroup title'}
        >
            <p>Content</p>
        </UpFormGroup>
    );

export const WithSeperatorTitle =
    () => (
        <UpFormGroup
            withTitleSeparator={true}
            title={'FormGroup title'}
        >
            <p>Content</p>
        </UpFormGroup>
    );
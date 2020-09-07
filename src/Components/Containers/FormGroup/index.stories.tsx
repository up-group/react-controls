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
export const FormGroupGeneralUse =
    () => (
        <UpFormGroup withTitleSeparator={true} title={'FormGroup title'}>
            <p>Content</p>
        </UpFormGroup>
    );

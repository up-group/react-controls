import * as React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import FormGroup from './UpFormGroup';
import { getRootContainer } from '../../../Common/stories';

export default {
  title: 'Components/Containers/FormGroup',
  decorators: [withKnobs, getRootContainer('FormGroup')]
};
export const FormGroupGeneric = () => (
  <FormGroup withTitleSeparator={boolean('withTitleSeparator',true) as boolean} title={'FormGroup title'}>
    generic form group
  </FormGroup>
);

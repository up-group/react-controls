import * as React from 'react'

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider'

import UpPhone from './UpPhone'

import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

export default { 
  title: 'Components/Inputs/UpPhone',
  decorators : [withKnobs, getRootContainer('UpPhone')]
};

export const General =
   () => (
    <UpThemeProvider theme={UpDefaultTheme}> 
        <div style={{padding:"30px"}}>
          <UpPhone floatingLabel={"Phone"} />
        </div>
    </UpThemeProvider>
  );

export const IsRequired =
   () => (
    <UpThemeProvider theme={UpDefaultTheme}> 
        <div style={{padding:"30px"}}>
          <UpPhone floatingLabel={"Phone"} isRequired={true} />
        </div>
    </UpThemeProvider>
  );

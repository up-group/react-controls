import * as React from 'react'

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider'

import { withKnobs, text, number } from '@storybook/addon-knobs';
import UpToast from './'

import { getRootContainer } from '../../../Common/stories';
import UpParagraph from '../Paragraph';
import { IntentType } from 'theming/types';

export default { 
  title: 'Components|Display/UpToast',
  decorators : [withKnobs, getRootContainer('UpToast')]
};

export const General =
   () => {
    const intent = text('intent', 'success');
    const message = text('message', 'Succès');

    return <UpThemeProvider theme={UpDefaultTheme}>
      <UpToast intent={intent as IntentType} message={message} />
    </UpThemeProvider>
   }

export const ToastWithTitle =
() => {
 const intent = text('intent', 'success');
 const message = text('message', 'Succès');

 return <UpThemeProvider theme={UpDefaultTheme}>
   <UpToast intent={intent as IntentType} title={"Opération"}  message={message} />
 </UpThemeProvider>
}

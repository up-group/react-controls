import * as React from 'react'
import { storiesOf } from '@storybook/react'

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider'

import { withKnobs, text, number } from '@storybook/addon-knobs';
import UpToast from './'

import { getRootContainer } from '../../../Common/stories';
import UpParagraph from '../Paragraph';
const stories = storiesOf('Display/UpToast', module) ;
stories.addDecorator(withKnobs);
stories.addDecorator(getRootContainer('UpToast'));

stories.add('Simple usage',
   () => {
    const intent = text('intent', 'primary');
    const message = text('message', 'Succès');

    return <UpThemeProvider theme={UpDefaultTheme}>
      <UpToast intent={intent}>
        <UpParagraph>{message}</UpParagraph>
      </UpToast>
    </UpThemeProvider>
   }, {info: 'Utilisation du composant en lui passant les données à afficher'}
);
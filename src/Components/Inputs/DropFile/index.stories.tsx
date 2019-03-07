import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider'

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import UpButton from './UpDropFile'
import UpBox from '../../Containers/Box';
import UpNotification from '../../Display/Notification';
import UpParagraph from '../../Display/Paragraph';
import UpDropFile from './UpDropFile';
import { style } from 'typestyle';

const stories = storiesOf('Inputs/UpDropFile', module) ;

stories.addDecorator(withKnobs);
stories.add('Simple usage',
() => {

 return <UpThemeProvider theme={UpDefaultTheme}>
   <UpBox style={{margin:"40px 30px"}}>
     <UpNotification intent={"info"}>
         Le composant <code>UpDropFile</code> permet de définir ...
     </UpNotification>
     <UpParagraph className={style({width:'100%'})}>
       <UpDropFile label={'File'} name={'file'} maxImgWidth={600}>
         Add
        </UpDropFile>
     </UpParagraph>
   </UpBox>
 </UpThemeProvider>
 
}, { info : "Utilisation du composant en lui passant les données à afficher" }
)
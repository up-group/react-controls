import React from 'react'
import { storiesOf } from '@storybook/react'

import UpDefaultTheme from '../../../Common/theming'
import {IntentType} from '../../../Common/theming/types'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/themedComponents'

import UpInput from './UpInput'
import UpLabel from '../../Display/Label'

var onOptionChange = () => {}

var state = {
}

storiesOf('UpInput', module)
  .addWithInfo('Text input', 'Utilisation simple',
   () => (
    <UpThemeProvider theme={UpDefaultTheme}> 
    <div style={{padding:"30px"}}>
        <UpInput type={"text"} />
        </div>
    </UpThemeProvider>
  )).addWithInfo('Search Input', 'Champ de recherche',
   () => (
    <UpThemeProvider theme={UpDefaultTheme}> 
    <div style={{padding:"30px"}}>
        <UpInput type={"search"} />
        </div>
    </UpThemeProvider>
  )).addWithInfo('Email Input', 'Champ email',
   () => (
    <UpThemeProvider theme={UpDefaultTheme}> 
        <div style={{padding:"30px"}}>
        <UpInput type={"email"} />
        </div>
    </UpThemeProvider>
  )).addWithInfo('Phone Input', 'Champ phone',
  () => (
   <UpThemeProvider theme={UpDefaultTheme}>
        <div style={{padding:"30px"}}>
           <UpInput type={"phone"} />
        </div>
   </UpThemeProvider>
 )).addWithInfo('Required Input', 'Champ requis',
 () => (
  <UpThemeProvider theme={UpDefaultTheme}>
       <div style={{padding:"30px"}}>
          <UpInput isRequired={true} type={"email"} />
       </div>
  </UpThemeProvider>
)) ;
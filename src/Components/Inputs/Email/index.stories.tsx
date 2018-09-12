import * as React from 'react'
import { storiesOf } from '@storybook/react'


import UpEmail from './UpEmail'

storiesOf('UpEmail', module)
  .addWithInfo('Email input', 'Utilisation simple',
   () => (
     
        <div style={{padding:"30px"}}>
          <UpEmail  />
        </div>
   
  )).addWithInfo('Email Input Required', 'Avec valeur requise',
   () => (
     
        <div style={{padding:"30px"}}>
          <UpEmail required={true} />
        </div>
   
  )) ;
import * as React from 'react'
import { storiesOf } from '@storybook/react'


import UpDate from './UpDate'
import UpLabel from '../../Display/Label'

storiesOf('UpDate', module)
  .addWithInfo('Simple usage', 'Utilisation simple',
   () => (
    
        <div style={{margin:"30px"}}>
            <UpDate onChange={(value, event) => {console.log(event);console.log(value)}} />
        </div>
   
  )).addWithInfo('Date requise', 'La date est requise',
  () => (
   
        <div style={{margin:"30px"}}>
            <UpDate isRequired={true} onChange={(value, event) => {console.log(event);console.log(value)}} />
        </div>
  
 )) ;
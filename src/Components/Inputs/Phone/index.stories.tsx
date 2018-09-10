import * as React from 'react'
import { storiesOf } from '@storybook/react'


import UpPhone from './UpPhone'
import UpLabel from '../../Display/Label'

storiesOf('UpPhone', module)
  .addWithInfo('Phone input', 'Utilisation simple',
   () => (
     
        <div style={{padding:"30px"}}>
          <UpPhone />
        </div>
   
  )).addWithInfo('Phone Input Required', 'Avec valeur requise',
   () => (
     
        <div style={{padding:"30px"}}>
          <UpPhone isRequired={true} />
        </div>
   
  )) ;
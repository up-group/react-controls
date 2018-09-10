import * as React from 'react'
import { storiesOf } from '@storybook/react'


import UpNumber from './UpNumber'
import UpLabel from '../../Display/Label'

storiesOf('UpNumber', module)
  .addWithInfo('Simple usage', 'Utilisation avec plusieurs options',
   () => (
    
        <UpLabel textAlign={"left"} inline={false} width="small" text="Number :">
            <UpNumber />
            </UpLabel>
   
  )).addWithInfo('Integer', 'Only greather than 0',
  () => (
   
       <UpLabel textAlign={"left"} inline={true} width="small" text="Number :">
           <UpNumber min={0} />
           </UpLabel>
  
 )) ;
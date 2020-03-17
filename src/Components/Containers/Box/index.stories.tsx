import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import UpBox from './'
import { getRootContainer } from '../../../Common/stories';

const stories = storiesOf('Components|Containers/UpBox', module) ;

stories.addDecorator(getRootContainer('UpBox'));

stories.add('UpBox : center',
   () => (
    <div style={{margin:"30px"}}>
     <UpBox alignItems={'center'} backgroundColor={'#369'} 
            color={'white'}
            pad={'small'} 
            margin={{horizontal:'small', vertical:'small'}}>
        <p>Alignement des élément au centre</p>
     </UpBox>
    </div>
  ), { info : 'Alignement des éléments au centre'})
  .add('UpBox : baseline',
  () => (
    <div style={{margin:"30px"}}>
    <UpBox alignItems={'baseline'} backgroundColor={'#369'} 
            color={'white'}
            pad={'small'} 
            margin={{horizontal:'small', vertical:'small'}}>
      <p>Alignement des élément baseline : position 1 </p>
      <p>Alignement des élément baseline : position 2 </p>
      <p>Alignement des élément baseline : position 3 </p>
    </UpBox>
  </div>
 ), { info : 'Alignement des éléments baseline'})
  .add('UpBox : flex-end',
 () => (
  <div style={{margin:"30px"}}>
   <UpBox alignItems={'flex-end'} backgroundColor={'#369'} 
            color={'white'}
            pad={'small'} 
            margin={{horizontal:'small', vertical:'small'}}>
      <p>Alignement des élément flex-end : position 1 </p>
      <p>Alignement des élément flex-end : position 2 </p>
      <p>Alignement des élément flex-end : position 3 </p>
   </UpBox>
  </div>
), { info : 'Alignement des éléments à droite'})
.add('UpBox : flex-start',
() => (
  <div style={{margin:"30px"}}>
    <UpBox alignItems={'flex-start'} backgroundColor={'#369'} 
            color={'white'}
            pad={'small'} 
            margin={{horizontal:'small', vertical:'small'}}>
        <p>Alignement des élément flex-start : position 1 </p>
        <p>Alignement des élément flex-start : position 2 </p>
        <p>Alignement des élément flex-start : position 3 </p>
    </UpBox>
  </div>
), { info : 'Alignement des éléments à gauche'})
  .add('UpBox : stretch',
() => (
  <div style={{margin:"30px"}}>
    <UpBox  alignItems={'stretch'} 
            backgroundColor={'#369'} 
            color={'white'}
            pad={'small'} 
            margin={{horizontal:'small', vertical:'small'}}>
      <p>Alignement des élément stretch : position 1 </p>
      <p>Alignement des élément stretch : position 2 </p>
      <p>Alignement des élément stretch : position 3 </p>
  </UpBox>
  </div>
), { info : 'Alignement des éléments stretch'}) ;
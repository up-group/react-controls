import * as React from 'react'
import UpBox from './'
import { getRootContainer } from '../../../Common/stories';

export default { 
  title: 'Components|Containers/UpBox',
  decorators : [getRootContainer('UpBox')]
};

export const Center =
   () => (
    <div style={{margin:"30px"}}>
     <UpBox alignItems={'center'} backgroundColor={'#369'} 
            color={'white'}
            pad={'small'} 
            margin={{horizontal:'small', vertical:'small'}}>
        <p>Alignement des élément au centre</p>
     </UpBox>
    </div>
  )

export const Baseline =
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
 )

export const FlexEnd =
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
)

export const FlexStart =
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
  )

export const Stretch =
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
  )
import * as React from 'react'
import { storiesOf } from '@storybook/react'

import UpBox from './'
import UpNotification from '../../Display/Notification/UpNotification';
import { UpThemeProvider, UpDefaultTheme } from '../../..';

import { storybookMainBodyStyles } from '../../../../stories/styles' ;

const stories = storiesOf('UpBox', module) ;

const RootContainer = (storyFn) => (
  <UpThemeProvider theme={UpDefaultTheme}>
    <div style={storybookMainBodyStyles}>
      <UpNotification>
        Présentation du composant <code>UpBox</code>
      </UpNotification>
      { storyFn() }
    </div>
  </UpThemeProvider>
);

stories.addDecorator(RootContainer);

stories.addWithInfo('UpBox : center', 'Alignement des éléments au centre',
   () => (
    <div style={{margin:"30px"}}>
     <UpBox alignItems={'center'} backgroundColor={'#369'} 
            color={'white'}
            pad={'small'} 
            margin={{horizontal:'small', vertical:'small'}}>
        <p>Alignement des élément au centre</p>
        <p>Alignement des élément au centre</p>
        <p>Alignement des élément au centre</p>
        <p>Alignement des élément au centre</p>
     </UpBox>
    </div>
  )).addWithInfo('UpBox : baseline', 'Alignement des éléments baseline',
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
 )).addWithInfo('UpBox : flex-end', 'Alignement des éléments à droite',
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
)).addWithInfo('UpBox : flex-start', 'Alignement des éléments à gauche',
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
)).addWithInfo('UpBox : stretch', 'Alignement des éléments stretch',
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
)) ;
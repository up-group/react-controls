import React from 'react'
import { storiesOf } from '@storybook/react'

import UpDefaultTheme from '../../../Common/theming'
import {IntentType} from '../../../Common/theming/types'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/themedComponents'

import UpPagination from './UpPagination'
import UpDataGrid from './UpDataGrid'

storiesOf('UpPagination', module)
  .addWithInfo('Simple usage', 'Utilisation du composant en lui passant le nombre d\'élément à afficher',
   () => (
    <UpThemeProvider theme={UpDefaultTheme}>
      <UpPagination count={100} onPageChange={(page, take, skip) => {
        console.log(page, take, skip) ;
    }} />
    </UpThemeProvider>
  )) ;

storiesOf('UpDataGrid', module)
  .addWithInfo('Simple usage', 'Utilisation du composant de grid sans pagination',
   () => (
    <UpThemeProvider theme={UpDefaultTheme}>
      <UpDataGrid columns={
          [{
              label:'Col 1',
              field:'c1',
              isSortable:true
          },{
              label:'Col 2',
              field:'c2',
              isSortable:true
          },{
              label:'Col 3',
              field:'c3',
              isSortable:true
          },{
              label:'Col 4',
              field:'c4',
              isSortable:true
          }]
      }  data={[
          {'c1' : 'Value 1', 'c2' : 'Value 2', 'c3' : 'Value 3', 'c4' : 'Value 4'}
      ]} />
    </UpThemeProvider>
  )).addWithInfo('Avec actions', 'Utilisation d\'un jeux d\'action commun à toutes les lignes',
   () => (
    <UpThemeProvider theme={UpDefaultTheme}>
      <UpDataGrid 
      actions={
          [{
              role:'add',
              intent: 'primary',
              type:'add',
              description:'Ajouter un lien'
          },{
              role:'edit',
              intent: 'primary',
              type:'edit',
              description:'Modifier'
          },{
              role:'delete',
              intent: 'danger',
              type:'delete',
              description:'Supprimer'
          }]
      }
      columns={
          [{
              label:'Col 1',
              field:'c1',
              isSortable:true
          },{
              label:'Col 2',
              field:'c2',
              isSortable:true
          },{
              label:'Col 3',
              field:'c3',
              isSortable:true
          },{
              label:'Col 4',
              field:'c4',
              isSortable:true
          }]
      }  data={[
          {'c1' : 'Value 1', 'c2' : 'Value 2', 'c3' : 'Value 3', 'c4' : 'Value 4'}
      ]} />
    </UpThemeProvider>
  )) ;
import React from 'react'
import { storiesOf } from '@storybook/react'

import UpDefaultTheme from '../../../Common/theming'
import {IntentType} from '../../../Common/theming/types'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/themedComponents'

import UpPagination from './UpPagination'
import UpDataGrid from './UpDataGrid'
import RowTemplate from './templates/UpDataGridRowWithStatus'

var data = [
          {'c1' : 'Value 1', 'c2' : 'Value 2', 'c3' : 'Value 3', 'c4' : {Libelle : 'Suivi', Couleur :'#369'}},
          {'c1' : 'Value 1', 'c2' : 'Value 2', 'c3' : 'Value 3', 'c4' : {Libelle : 'Suivi', Couleur :'#369'}},
          {'c1' : 'Value 1', 'c2' : 'Value 2', 'c3' : 'Value 3', 'c4' : {Libelle : 'Suivi', Couleur :'#369'}},
          {'c1' : 'Value 1', 'c2' : 'Value 2', 'c3' : 'Value 3', 'c4' : {Libelle : 'Suivi', Couleur :'#369'}},
          {'c1' : 'Value 1', 'c2' : 'Value 2', 'c3' : 'Value 3', 'c4' : {Libelle : 'Suivi', Couleur :'#369'}},
          {'c1' : 'Value 1', 'c2' : 'Value 2', 'c3' : 'Value 3', 'c4' : {Libelle : 'Suivi', Couleur :'#369'}},
          {'c1' : 'Value 1', 'c2' : 'Value 2', 'c3' : 'Value 3', 'c4' : {Libelle : 'Suivi', Couleur :'#369'}},
          {'c1' : 'Value 1', 'c2' : 'Value 2', 'c3' : 'Value 3', 'c4' : {Libelle : 'Suivi', Couleur :'#369'}},
          {'c1' : 'Value 1', 'c2' : 'Value 2', 'c3' : 'Value 3', 'c4' : {Libelle : 'Suivi', Couleur :'#369'}},
          {'c1' : 'Value 1', 'c2' : 'Value 2', 'c3' : 'Value 3', 'c4' : {Libelle : 'Suivi', Couleur :'#369'}},
          {'c1' : 'Value 1', 'c2' : 'Value 2', 'c3' : 'Value 3', 'c4' : {Libelle : 'Suivi', Couleur :'#369'}},
          {'c1' : 'Value 1', 'c2' : 'Value 2', 'c3' : 'Value 3', 'c4' : {Libelle : 'Suivi', Couleur :'#369'}},
          {'c1' : 'Value 1', 'c2' : 'Value 2', 'c3' : 'Value 3', 'c4' : {Libelle : 'Suivi', Couleur :'#369'}},
          {'c1' : 'Value 1', 'c2' : 'Value 2', 'c3' : 'Value 3', 'c4' : {Libelle : 'Suivi', Couleur :'#369'}},
          {'c1' : 'Value 1', 'c2' : 'Value 2', 'c3' : 'Value 3', 'c4' : {Libelle : 'Suivi', Couleur :'#369'}},
          {'c1' : 'Value 1', 'c2' : 'Value 2', 'c3' : 'Value 3', 'c4' : {Libelle : 'Suivi', Couleur :'#369'}},
          {'c1' : 'Value 1', 'c2' : 'Value 2', 'c3' : 'Value 3', 'c4' : {Libelle : 'Suivi', Couleur :'#369'}},
          {'c1' : 'Value 1', 'c2' : 'Value 2', 'c3' : 'Value 3', 'c4' : {Libelle : 'Suivi', Couleur :'#369'}},
          {'c1' : 'Value 1', 'c2' : 'Value 2', 'c3' : 'Value 3', 'c4' : {Libelle : 'Suivi', Couleur :'#369'}},
          {'c1' : 'Value 1', 'c2' : 'Value 2', 'c3' : 'Value 3', 'c4' : {Libelle : 'Suivi', Couleur :'#369'}}
      ];

storiesOf('UpPagination', module)
  .addWithInfo('Simple usage', 'Utilisation du composant en lui passant le nombre d\'élément à afficher',
   () => (
    <UpThemeProvider theme={UpDefaultTheme}>
      <UpPagination total={100} onPageChange={(page, take, skip) => {
        console.log(page, take, skip) ;
    }} />
    </UpThemeProvider>
  )) ;

storiesOf('UpDataGrid', module)
  .addWithInfo('Simple usage', 'Utilisation du composant de grid sans pagination et sans sélection',
   () => (
    <UpThemeProvider theme={UpDefaultTheme}>
      <UpDataGrid 
      isPaginationEnabled={false}
      isSelectionEnabled={false}
      isSortEnabled={false}
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
      }  data={data} />
    </UpThemeProvider>
  )).addWithInfo('Avec sélection', 'Utilisation du composant de grid avec sélection',
   () => (
    <UpThemeProvider theme={UpDefaultTheme}>
      <UpDataGrid 
      isPaginationEnabled={false}
      isSelectionEnabled={true}
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
      }  data={data} />
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
      }  data={data} />
    </UpThemeProvider>
  )).addWithInfo('Avec template', 'Utilisation d\'un template spécifique pour les lignes',
   () => (
    <UpThemeProvider theme={UpDefaultTheme}>
      <UpDataGrid 
      rowTemplate={RowTemplate}
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
      }  data={data} />
    </UpThemeProvider>
  )).addWithInfo('Avec source externe', 'Utilisation d\'une source externe spécifique pour les lignes',
   () => (
    <UpThemeProvider theme={UpDefaultTheme}>
      <UpDataGrid 
        dataSource = {{
            query:"https://jsonplaceholder.typicode.com/posts"
        }}
        columns={
          [{
              label:'Id',
              field:'id',
              isSortable:true
          },{
              label:'Titre',
              field:'title',
              isSortable:true
          },{
              label:'Texte',
              field:'body',
              isSortable:true
          },{
              label:'Auteur',
              field:'userId',
              isSortable:true
          }]
      } />
    </UpThemeProvider>
  )).addWithInfo('Avec source externe et pagination', 'Utilisation d\'une source externe spécifique pour les lignes avec activation de la pagination',
   () => (
    <UpThemeProvider theme={UpDefaultTheme}>
      <UpDataGrid 
        dataSource = {{
            query:"https://jsonplaceholder.typicode.com/posts"
        }}
        isPaginationEnabled={true}
        columns={
          [{
              label:'Id',
              field:'id',
              isSortable:true
          },{
              label:'Titre',
              field:'title',
              isSortable:true
          },{
              label:'Texte',
              field:'body',
              isSortable:true
          },{
              label:'Auteur',
              field:'userId',
              isSortable:true
          }]
      } />
    </UpThemeProvider>
  )) ;
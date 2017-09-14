import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/themedComponents'

import UpSelect from './'

storiesOf('UpSelect', module)
  .addWithInfo('Simple usage', 'Utilisation du composant en lui passant les données à afficher',
   () => (
    <UpThemeProvider theme={UpDefaultTheme}>
      <UpSelect width="normal" tooltip="Civilité" data={[
        {id:1,text:'M.'},
        {id:2,text:'Mme'},
        {id:3,text:'Mlle'},
        {id:4,text:'Dr'},
      ]} onChange={action('Sélection')} />
    </UpThemeProvider>
  ))
  .addWithInfo('Ajax', 'Utilisation du composant lié à une source de donnée',
   () => (
    <UpThemeProvider theme={UpDefaultTheme}>
        <UpSelect autoload={false}
                    isRequired={false}
                    allowClear={true}
                    default={null}
                    multiple={false}
                    tooltip="Votre ville de naissance"
                    minimumInputLength={3}
                    dataSource={{
                        query: "https://jsonplaceholder.typicode.com/todos",
                        text: "title"
                    }}
                    onChange={action('Sélection')} />
    </UpThemeProvider>
  ))
  .addWithInfo('Required', 'Utilisation du composant avec valeur requise',
   () => (
    <UpThemeProvider theme={UpDefaultTheme}>
        <div style={{margin:"30px"}}>
          <UpSelect isRequired={true}
                    allowClear={true}
                    default={null}
                    multiple={false}
                    tooltip="Votre ville de naissance" 
                    data={[
                      {id:1,text:'M.'},
                      {id:2,text:'Mme'},
                      {id:3,text:'Mlle'},
                      {id:4,text:'Dr'},
                    ]}
                    onChange={action('Sélection')} />
        </div>
    </UpThemeProvider>
  ))
  .addWithInfo('Return Id Value', 'Utilisation du composant en retournant la valeur de l\'identifiant et non plus l\'objet sélectionné',
   () => (
    <UpThemeProvider theme={UpDefaultTheme}>
        <div style={{margin:"30px"}}>
          <UpSelect isRequired={true}
                    allowClear={true}
                    default={null}
                    multiple={false}
                    returnType={"keyId"}
                    valueKey= {"id"}
                    tooltip="Votre ville de naissance" 
                    data={[
                      {id:1,text:'M.'},
                      {id:2,text:'Mme'},
                      {id:3,text:'Mlle'},
                      {id:4,text:'Dr'},
                    ]}
                    onChange={action('Sélection') } />
        </div>
    </UpThemeProvider>
  ))
  .addWithInfo('Size', 'Utilisation du composant en retournant la valeur de l\'identifiant et non plus l\'objet sélectionné',
   () => (
    <UpThemeProvider theme={UpDefaultTheme}>
        <div style={{margin:"30px"}}>
          <UpSelect isRequired={true}
                    allowClear={true}
                    width={'auto'}
                    default={null}
                    multiple={false}
                    returnType={"keyId"}
                    valueKey= {"id"}
                    tooltip="Votre ville de naissance" 
                    data={[
                      {id:1,text:'M.'},
                      {id:2,text:'Mme'},
                      {id:3,text:'Mlle'},
                      {id:4,text:'Dr'},
                    ]}
                    onChange={action('Sélection') } />
          <UpSelect isRequired={true}
                    allowClear={true}
                    width={'full'}
                    default={null}
                    multiple={false}
                    returnType={"keyId"}
                    valueKey= {"id"}
                    tooltip="Votre ville de naissance" 
                    data={[
                      {id:1,text:'M.'},
                      {id:2,text:'Mme'},
                      {id:3,text:'Mlle'},
                      {id:4,text:'Dr'},
                    ]}
                    onChange={action('Sélection') } />

          <UpSelect isRequired={true}
                    allowClear={true}
                    width={'xsmall'}
                    default={null}
                    multiple={false}
                    returnType={"keyId"}
                    valueKey= {"id"}
                    tooltip="Votre ville de naissance" 
                    data={[
                      {id:1,text:'M.'},
                      {id:2,text:'Mme'},
                      {id:3,text:'Mlle'},
                      {id:4,text:'Dr'},
                    ]}
                    onChange={action('Sélection') } />

          <UpSelect isRequired={true}
                    allowClear={true}
                    width={'small'}
                    default={null}
                    multiple={false}
                    returnType={"keyId"}
                    valueKey= {"id"}
                    tooltip="Votre ville de naissance" 
                    data={[
                      {id:1,text:'M.'},
                      {id:2,text:'Mme'},
                      {id:3,text:'Mlle'},
                      {id:4,text:'Dr'},
                    ]}
                    onChange={action('Sélection') } />

          <UpSelect isRequired={true}
                    allowClear={true}
                    width={'normal'}
                    default={null}
                    multiple={false}
                    returnType={"keyId"}
                    valueKey= {"id"}
                    tooltip="Votre ville de naissance" 
                    data={[
                      {id:1,text:'M.'},
                      {id:2,text:'Mme'},
                      {id:3,text:'Mlle'},
                      {id:4,text:'Dr'},
                    ]}
                    onChange={action('Sélection') } />

          <UpSelect isRequired={true}
                    allowClear={true}
                    width={'large'}
                    default={null}
                    multiple={false}
                    returnType={"keyId"}
                    valueKey= {"id"}
                    tooltip="Votre ville de naissance" 
                    data={[
                      {id:1,text:'M.'},
                      {id:2,text:'Mme'},
                      {id:3,text:'Mlle'},
                      {id:4,text:'Dr'},
                    ]}
                    onChange={action('Sélection') } />
        </div>
    </UpThemeProvider>
  )) ;
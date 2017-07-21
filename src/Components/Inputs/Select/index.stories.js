import React from 'react'
import { storiesOf } from '@storybook/react'

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/themedComponents'

import UpSelect from './'

var onSelectionChange = (data) => {
    console.log(data) ;
}

storiesOf('UpSelect', module)
  .addWithInfo('Simple usage', 'Utilisation du composant en lui passant les données à afficher',
   () => (
    <UpThemeProvider theme={UpDefaultTheme}>
      <UpSelect width="normal" tooltip="Civilité" data={[
        {id:1,text:'M.'},
        {id:2,text:'Mme'},
        {id:3,text:'Mlle'},
        {id:4,text:'Dr'},
      ]} />
    </UpThemeProvider>
  ))
  .addWithInfo('Ajax', 'Utilisation du composant lié à une source de donnée',
   () => (
    <UpThemeProvider theme={UpDefaultTheme}>
        <UpSelect autoload={false}
                    isRequired={true}
                    allowClear={true}
                    default={null}
                    multiple={false}
                    tooltip="Votre ville de naissance"
                    minimumInputLength={3}
                    dataSource={{
                        query: "https://jsonplaceholder.typicode.com/todos",
                        text: "title"
                    }}
                    onChange={onSelectionChange} />
    </UpThemeProvider>
  )) ;



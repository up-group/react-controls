import React from 'react'
import { storiesOf } from '@storybook/react'

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/themedComponents'

import UpPagination from './UpPagination'

storiesOf('UpPagination', module)
  .addWithInfo('Simple usage', 'Utilisation du composant en lui passant le nombre d\'élément à afficher',
   () => (
    <UpThemeProvider theme={UpDefaultTheme}>
      <UpPagination count={100} onPageChange={(page, take, skip) => {
        console.log(page, take, skip) ;
    }} />
    </UpThemeProvider>
  )) ;
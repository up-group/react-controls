import * as React from 'react'
import { storiesOf } from '@storybook/react'


import UpLigne from './'

storiesOf('UpLigne', module)
  .addWithInfo('Simple usage', 'Utilisation du composant en lui passant les données à afficher',
   () => (
      <UpLigne className={"up-indication"} color={"red"}>
        Mon message
      </UpLigne>
  ));
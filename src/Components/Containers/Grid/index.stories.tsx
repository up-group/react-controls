import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/themedComponents'

import {UpGrid, UpRow, UpCol} from './'
import UpPanel from '../../Containers/Panel'


storiesOf('UpGrid', module)
  .addWithInfo('Simple usage', 'Utilisation du composant en lui passant les données à afficher',
   () => (
    <UpThemeProvider theme={UpDefaultTheme}>
      <div style={{"margin": "30px"}}>
      <UpGrid>
        <UpRow>
          <UpCol span={10}>
            <UpPanel type={"primary"} title={"Mon Panel"} />
          </UpCol>
          <UpCol span={4}>
            <UpPanel type={"default"} title={"Mon Panel"} />
          </UpCol>
          <UpCol span={10}>
            <UpPanel type={"info"} title={"Mon Panel"} />
          </UpCol>
        </UpRow>
        <UpRow>
          <UpCol span={4} xs={24} sm={18} md={8} lg={4}>
            <UpPanel type={"primary"} title={"Mon Panel"} />
          </UpCol>
          <UpCol span={8} xs={24} sm={18} md={12} lg={8}>
            <UpPanel type={"default"} title={"Mon Panel"} />
          </UpCol>
          <UpCol span={12} xs={24} sm={18} md={16} lg={12}>
            <UpPanel type={"info"} title={"Mon Panel"} />
          </UpCol>
        </UpRow>
      </UpGrid>
      </div>
    </UpThemeProvider>
  ));
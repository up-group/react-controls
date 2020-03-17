import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider'

import {UpGrid, UpRow, UpCol} from './'
import UpPanel from '../../Containers/Panel'

import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

const stories = storiesOf('Components|Containers/UpGrid', module) ;

stories.addDecorator(withKnobs)
stories.addDecorator(getRootContainer('UpGrid'));

stories.add('Simple usage',
   () => {
    const gutter = number('gutter', 0);

    return <UpThemeProvider theme={UpDefaultTheme}>
      <div style={{"margin": "30px"}}>
      <UpGrid gutter={gutter}>
        <UpRow>
          <UpCol xs={24} sm={12} md={8} lg={6} >
            <UpPanel type={"primary"} title={"Mon Panel"} />
          </UpCol>
          <UpCol xs={24} sm={12} md={8} lg={6}>
            <UpPanel type={"default"} title={"Mon Panel"} />
          </UpCol>
          <UpCol xs={24} sm={12} md={8} lg={6}>
            <UpPanel type={"info"} title={"Mon Panel"} />
          </UpCol>
        </UpRow>
        <UpRow>
          <UpCol xs={24} sm={12} md={8} lg={6}>
            <UpPanel type={"primary"} title={"Mon Panel"} />
          </UpCol>
          <UpCol xs={24} sm={12} md={8} lg={6}>
            <UpPanel type={"default"} title={"Mon Panel"} />
          </UpCol>
          <UpCol xs={24} sm={12} md={8} lg={6}>
            <UpPanel type={"info"} title={"Mon Panel"} />
          </UpCol>
        </UpRow>
      </UpGrid>
      </div>
    </UpThemeProvider>
   }, { info : 'Utilisation du composant en lui passant les données à afficher'}
);

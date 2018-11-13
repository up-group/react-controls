import * as React from 'react'
import { storiesOf } from '@storybook/react'

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider'

import UpInput from './UpInput'

import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import UpLabel from '../../Display/Label';
import { UpGrid, UpRow, UpCol } from '../../Containers/Grid'

const stories = storiesOf('Inputs/UpInput', module) ;

stories.addDecorator(withKnobs)
stories.addDecorator(getRootContainer('UpInput'));

stories.add('Text input',
   () => (
    <UpGrid>
      <UpRow>
        <UpCol span={6}> 
          <UpLabel text={'Nom :'} required={true} inline={true}>
            <UpInput type={"text"} />
          </UpLabel>
        </UpCol>
      </UpRow>
    </UpGrid>
  ), {info : 'Utilisation simple'}
).add('Search Input',
   () => (
    <UpGrid>
      <UpRow>
        <UpCol span={6}> 
          <UpLabel text={'Recherche :'} required={true} inline={true}>
            <UpInput type={"search"} />
          </UpLabel>
        </UpCol>
      </UpRow>
    </UpGrid>
  ), {info : 'Champ de recherche'}
).add('Email Input',
   () => (
    <UpGrid>
      <UpRow>
        <UpCol span={6}> 
          <UpLabel text={'Email :'} required={true} inline={true}>
            <UpInput type={"email"} iconPosition={'left'} />
          </UpLabel>
        </UpCol>
      </UpRow>
    </UpGrid>
  ), {info : 'Champ email'}
).add('Phone Input',
  () => (
    <UpGrid>
      <UpRow>
        <UpCol span={6}> 
          <UpLabel text={'Phone :'} required={true} inline={true}>
            <UpInput type={"phone"} />
          </UpLabel>
        </UpCol>
      </UpRow>
    </UpGrid>
  ), {info : 'Champ phone'}
).add('Required Input',
 () => (
  <UpGrid>
    <UpRow>
      <UpCol span={6}> 
        <UpLabel text={'Email :'} required={true} inline={true}>
          <UpInput isRequired={true} type={"email"} />
        </UpLabel>
      </UpCol>
    </UpRow>
  </UpGrid>
  ), {info : 'Champ requis'}
) ;

import * as React from 'react'
import { storiesOf } from '@storybook/react'

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider'

import UpPassword from './UpPassword'

import { getRootContainer } from '../../../Common/stories';
import { withKnobs } from '@storybook/addon-knobs';

const stories = storiesOf('Inputs/UpPassword', module) ;

stories.addDecorator(withKnobs)
stories.addDecorator(getRootContainer('UpPassword'));

const ControlledPassword = (props) => {
  const [value, setValue] = React.useState('') ;
  return <UpPassword value={value} onChange={(e,v) => setValue(v)} />;
}

stories.add('Password input',
   () => (
        <div style={{padding:"30px"}}>
          <ControlledPassword />
        </div>
  ), { info :  'Utilisation simple' }
);
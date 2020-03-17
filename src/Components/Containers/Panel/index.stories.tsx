import * as React from 'react'
import { storiesOf } from '@storybook/react'

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider'

import UpPanel from './UpPanel'

import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

const Title = (
    <div style={{ borderBottom: "1px dotted white" }}>Mon JSX Panel</div>
);

const stories = storiesOf('Components|Containers/UpPanel', module) ;

stories.addDecorator(withKnobs)
stories.addDecorator(getRootContainer('UpPanel'));

stories.add('Simple usage',
   () =>  (<UpThemeProvider theme={UpDefaultTheme}>
        <div style={{"margin": "30px"}}>
          <UpPanel type={"primary"} title={"Mon Panel"} />
          <UpPanel type={"default"} title={"Mon Panel"} />
          <UpPanel type={"info"} title={"Mon Panel"} />
          <UpPanel type={"warning"} title={"Mon Panel"} />
          <UpPanel type={"danger"} title={Title} />
        </div>
      </UpThemeProvider>
      ), { info : 'Utilisation du composant en lui passant les données à afficher'}
) ;

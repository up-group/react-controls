import * as React from 'react'
import { storiesOf, ReactiveVar} from '@storybook/react'

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/themedComponents'

import UpPanel from './UpPanel'

const Title = (
  <div style={{borderBottom:"1px dotted white"}}>Mon JSX Panel</div>
)

storiesOf('UpPanel', module)
  .addWithInfo('Simple usage', 'Utilisation du composant en lui passant les données à afficher',
   () =>  (<UpThemeProvider theme={UpDefaultTheme}>
        <div style={{"margin": "30px"}}>
          <UpPanel type={"primary"} title={"Mon Panel"} />
          <UpPanel type={"default"} title={"Mon Panel"} />
          <UpPanel type={"info"} title={"Mon Panel"} />
          <UpPanel type={"warning"} title={"Mon Panel"} />
          <UpPanel type={"danger"} title={Title} />
        </div>
      </UpThemeProvider>)
) ;
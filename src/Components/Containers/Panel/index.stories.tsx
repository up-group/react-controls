import * as React from 'react'

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider'

import UpPanel from './UpPanel'

import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

const Title = (
    <div style={{ borderBottom: "1px dotted white" }}>Mon JSX Panel</div>
);

export default { 
  title: 'Components|Containers/UpPanel',
  decorators : [withKnobs, getRootContainer('UpPanel')]
};

export const General =
  () =>  (<UpThemeProvider theme={UpDefaultTheme}>
    <div style={{"margin": "30px"}}>
      <UpPanel type={"primary"} title={"Mon Panel"} />
      <UpPanel type={"default"} title={"Mon Panel"} />
      <UpPanel type={"info"} title={"Mon Panel"} />
      <UpPanel type={"warning"} title={"Mon Panel"} />
      <UpPanel type={"danger"} title={Title} />
    </div>
  </UpThemeProvider>
  )

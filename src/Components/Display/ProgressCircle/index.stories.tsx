import * as React from 'react'
import { storiesOf } from '@storybook/react'

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

import UpBox from '../../Containers/Box';
import UpNotification from '../../Display/Notification';
import UpParagraph from '../../Display/Paragraph';
import UpSvgIcon from '../SvgIcon';
import { IconNames } from '../../../Common/theming/icons';

import { getRootContainer } from '../../../Common/stories';
import UpProgessCircle from '.';
import { bool } from 'prop-types';
const stories = storiesOf('Components|Display/UpProgessCircle', module) ;
stories.addDecorator(withKnobs);
stories.addDecorator(getRootContainer('UpProgessCircle'));

stories.add('Index',
   () => {
    const color = text('color', '#369');
    const value = number('value', 32);
    const size = number('size', 120);
    const clockWise = boolean('clockWise', true);
    const shadow = boolean('shadow', true);
    const thickness = number('thickness', 8);
    
    return <UpThemeProvider theme={UpDefaultTheme}>
      <UpBox style={{margin:"40px 30px"}}>
        <UpParagraph>
          <UpBox flexDirection={'row'} flexWrap={true}>
            <dl style={{margin : '10px'}}>
              <dt style={{color : color, marginBottom : '10px'}}>{ }</dt>
              <dd>
                <UpProgessCircle value={value} clockWise={clockWise} shadow={shadow}
                    size={size} thickness={thickness} completedColor={color} />
              </dd>
            </dl>
          </UpBox>
        </UpParagraph>
      </UpBox>
    </UpThemeProvider>
   }, {info: 'Utilisation du composant en lui passant les données à afficher'}
);
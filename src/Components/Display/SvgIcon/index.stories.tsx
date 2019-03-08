import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider'

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import UpButton from './UpSvgIcon'
import UpBox from '../../Containers/Box';
import UpNotification from '../../Display/Notification';
import UpParagraph from '../../Display/Paragraph';
import UpSvgIcon from './UpSvgIcon';
import { icon } from '../Notification/styles';
import { IconNames } from '../../../Common/theming/icons';

import { getRootContainer } from '../../../Common/stories';
import UpHeading from '../Heading';
import { MentorNames } from "../../../Common/theming/mentors";
import { IllustrationNames } from "../../../Common/theming/illustrations";

const stories = storiesOf('Display/UpSvgIcon', module) ;
stories.addDecorator(withKnobs);
stories.addDecorator(getRootContainer('UpSvgIcon'));

const logoPng = require('./logo-up-square.svg');

stories.add('Simple usage',
   () => {
    const color = text('color', '#369');
    const width = number('width', 32);
    const height = number('height', 32);

    return (
      <UpThemeProvider theme={UpDefaultTheme}>
        <UpBox style={{ margin: "40px 30px" }}>
          <UpParagraph>
            <UpHeading tag={"h2"}>Icons</UpHeading>
            <UpBox flexDirection={"row"} flexWrap={true}>
              {IconNames.map(icon => (
                <dl style={{ margin: "10px" }}>
                  <dt
                    style={{ color: color, marginBottom: "10px" }}
                  >{`${icon}`}</dt>
                  <dd>
                    <UpSvgIcon
                      iconName={icon}
                      color={color}
                      width={width}
                      height={height}
                    />
                  </dd>
                </dl>
              ))}
              </UpBox>
              <UpHeading tag={"h2"}>Mentors</UpHeading>
              <UpBox flexDirection={"row"} flexWrap={true}>
              {MentorNames.map(icon => (
                <dl style={{ margin: "10px" }}>
                  <dt
                    style={{ color: color, marginBottom: "10px" }}
                  >{`${icon}`}</dt>
                  <dd>
                    <UpSvgIcon
                      iconName={icon}
                      color={color}
                      width={width}
                      height={height}
                    />
                  </dd>
                </dl>
              ))}
              </UpBox>
              <UpHeading tag={"h2"}>Illustrations</UpHeading>
              <UpBox flexDirection={"row"} flexWrap={true}>
              {IllustrationNames.map(icon => (
                <dl style={{ margin: "10px" }}>
                  <dt
                    style={{ color: color, marginBottom: "10px" }}
                  >{`${icon}`}</dt>
                  <dd>
                    <UpSvgIcon
                      iconName={icon}
                      color={color}
                      width={width}
                      height={height}
                    />
                  </dd>
                </dl>
              ))}
            </UpBox>
          </UpParagraph>
        </UpBox>
      </UpThemeProvider>
    );
   }, {info: 'Utilisation du composant en lui passant les données à afficher'}
).add('Set html directly',
() => {
 const color = text('color', '#369');
 const width = number('width', 32);
 const height = number('height', 32);

 return <UpThemeProvider theme={UpDefaultTheme}>
   <UpBox style={{margin:"40px 30px"}}>
     <UpParagraph>
        <UpBox flexDirection={'row'} flexWrap={true}>
          <UpSvgIcon iconHtml={logoPng} width={width} height={height} />
       </UpBox>
     </UpParagraph>
   </UpBox>
 </UpThemeProvider>
}, {info: 'Utilisation du composant en lui passant les données à afficher'}
)
import * as React from 'react'

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider'

import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { UpSvgIconSparkles } from './UpSvgIcon'
import UpBox from '../../Containers/Box';
import UpParagraph from '../../Display/Paragraph';
import UpSvgIcon from './UpSvgIcon';
import { IconNames } from '../../../Common/theming/icons';

import { getRootContainer } from '../../../Common/stories';
import UpHeading from '../Heading';
import { MentorNames } from "../../../Common/theming/mentors";
import { IllustrationNames } from "../../../Common/theming/illustrations";

export default { 
  title: 'Components|Display/UpSvgIcon',
  decorators : [withKnobs, getRootContainer('UpSvgIcon')]
};

const logoPng = require('./logo-up-square.svg');

export const General =
   () => {
    const color = text('color', '#369');
    const width = number('width', 32);
    const height = number('height', 32);

    return (
      <UpThemeProvider theme={UpDefaultTheme}>
        <UpBox style={{ margin: "40px 30px" }}>
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
                      width={48}
                      height={48}
                    />
                  </dd>
                </dl>
              ))}
            </UpBox>
            <UpHeading tag={"h2"}>Mentors with Sparkles</UpHeading>
            <UpBox flexDirection={"row"} flexWrap={true}>
              {MentorNames.map(icon => {if(icon!="sparkles") return(
                <dl style={{ margin: "10px" }}>
                  <dt
                    style={{ color: color, marginBottom: "15px" }}
                  >{`${icon}`}</dt>
                  <dd>
                    <UpSvgIconSparkles
                      iconName={icon}
                      color={color}
                      width={48}
                      height={48}
                    />
                  </dd>
                </dl>
              )})}
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
                      width={115}
                      height={115}
                    />
                  </dd>
                </dl>
              ))}
            </UpBox>
        </UpBox>
      </UpThemeProvider>
    );
}

export const SetHtmlDirectly =
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
  }
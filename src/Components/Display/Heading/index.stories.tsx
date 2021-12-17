import * as React from 'react';
import UpHeading from './';
import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { UpBox } from '../../..';
import { style } from 'typestyle';

export default {
  title: 'Components/Display/UpHeading',
  decorators: [withKnobs, getRootContainer('UpHeading')],
  component: UpHeading,
};

export const General = () => (
  <>
    <UpHeading tag="h1">H1</UpHeading>
    <UpHeading tag="h2">H2</UpHeading>
    <UpHeading tag="h3">H3</UpHeading>
    <UpHeading tag="h4">H4</UpHeading>
    <UpHeading tag="h5">H5</UpHeading>
  </>
);

export const TruncateAndTextAlignProperties = () => (
  <UpBox className={style({ width: '350px' })} alignItems={'normal'}>
    <UpHeading tag="h1" textAlign="left" truncate={true}>
      Présentation du composant UpHeading
    </UpHeading>
  </UpBox>
);

TruncateAndTextAlignProperties.storyName = 'Use Truncate And TextAlign Properties';

export const UpCaseAndColorProperties = () => (
  <UpHeading tag="h2" upcase={true} color={'red'}>
    Titre h2
  </UpHeading>
);

UpCaseAndColorProperties.storyName = 'Use UppCase And Color Properties';

export const UseMarginProperties = () => (
  <UpHeading tag="h1" margin={'large'}>
    Titre H1
  </UpHeading>
);

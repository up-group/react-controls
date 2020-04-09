import * as React from 'react'

import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import UpCarousel from '../Carousel';
import { style } from 'typestyle';

export default { 
  title: 'Components|Display/UpCarousel',
  decorators : [withKnobs, getRootContainer('UpCarousel')]
}

const wrapperBoxesStyle = style({
  $nest : {
    '& > div' : {
      margin : '10px 0px',
    },
  },
});

export const General =
   () => (
      <div className={wrapperBoxesStyle}>
        <UpCarousel items={["#22cc88", "#ffcc00", "#0099ff", "#ff0055"].map(color => ({color}))} />
      </div>
  )
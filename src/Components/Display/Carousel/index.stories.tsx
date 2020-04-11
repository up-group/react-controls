import * as React from 'react'

import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import UpCarousel from '../Carousel';
import { style } from 'typestyle';
import UpButton from '../../Inputs/Button/UpButton';

export default { 
  title: 'Components|Display/UpCarousel',
  decorators : [withKnobs, getRootContainer('UpCarousel')]
}

const wrapperBoxesStyle = style({
  margin: '80px',
  $nest : {
    '& > div' : {
      margin : '10px 0px',
    },
  },
});

export const General =
   () => (
      <div className={wrapperBoxesStyle}>
        <UpCarousel items={["#22cc88", "#ffcc00", "#0099ff", "#ff0055"].map(color => ({key: color, title: 'Title', color}))} />
      </div>
  )

export const WithRenderItem =
() => (
   <div className={wrapperBoxesStyle}>
     <UpCarousel renderItem={(isOpen, item) => {
       return <div style={{display: 'flex', height : '100%', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'space-between'}}>
          <em style={{ fontWeight : isOpen ? 700 : 500}}>{item.title}</em>
          <UpButton intent={'secondary'} className={style({$nest : {'& .up-btn' : {
            border: '0 !important', color : 'white !important', background: 'transparent'
          }
        }})} onClick={(e) => item.action(item) }>...</UpButton>
         </div>
     }} items={["#22cc88", "#ffcc00", "#0099ff", "#ff0055"].map(color => (
        { key: color,
          action: (item) => new Promise((resolve, reject) => resolve(console.log(item))), 
          title: 'Title',
          color}))
        } />
   </div>
)
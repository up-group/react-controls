import * as React from 'react'

import UpDefaultTheme from '../../../Common/theming'
import {IntentType} from '../../../Common/theming/types'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider'

import UpNumber, { UpNumberProps } from './UpNumber'
import UpLabel from '../../Display/Label'

import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

export default { 
  title: 'Components/Inputs/UpNumber',
  decorators : [withKnobs, getRootContainer('UpNumber')]
};

const NumberWrapper = (props: UpNumberProps) => {
  const [number, setNumber] = React.useState(0) ;
  return <UpLabel textAlign={"left"} inline={true} width="small" text="Number :">
    <UpNumber min={0} value={number} onChange={ (e, value) => {
      console.log(value);
      setNumber(value as number)
    }} />
  </UpLabel>
}

export const General =
   () => (
    <UpThemeProvider theme={UpDefaultTheme}>
        <UpLabel textAlign={"left"} inline={false} width="small" text="Number :" >
            <UpNumber min={0} maxLength={2}/>
        </UpLabel>
    </UpThemeProvider>
  )

  // export const WithFloatingLabel =
  //    () => (
  //     <UpThemeProvider theme={UpDefaultTheme}>
  //           <UpNumber floatingLabel={"Number"} />
  //     </UpThemeProvider>
  //   )

// export const Integer =
//   () => (
//     <>
//     <UpThemeProvider theme={{...UpDefaultTheme, inputBorderLess: false}}>
//        <UpLabel textAlign={"left"} inline={true} width="small" text="Number :">
//            <UpNumber min={0} decimalPlace={2} placeholder={'0,00'}/>
//         </UpLabel>
//    </UpThemeProvider>
   
//    <UpThemeProvider theme={UpDefaultTheme}>
//        <NumberWrapper />
//    </UpThemeProvider>
//    </>
//   );

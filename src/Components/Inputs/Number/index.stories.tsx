import * as React from 'react';
import UpDefaultTheme from '../../../Common/theming';
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider';
import UpNumber, { UpNumber as UpNumberComponent } from './UpNumber';
import UpLabel from '../../Display/Label';
import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { UpNumberProps } from './types';

export default {
  title: 'Components/Inputs/UpNumber',
  decorators: [
    withKnobs,
    getRootContainer('UpNumber'),
    UpNumber => (
      <UpThemeProvider theme={UpDefaultTheme}>
        <UpNumber />
      </UpThemeProvider>
    ),
  ],
  component: UpNumberComponent,
};

const NumberWrapper = (props: UpNumberProps) => {
  const [number, setNumber] = React.useState(0);

  return (
    <UpLabel textAlign={'left'} inline={true} width="small" text="Number :">
      <UpNumber
        min={0}
        value={number}
        onChange={(e, value) => {
          console.log(value);
          setNumber(value as number);
        }}
      />
    </UpLabel>
  );
};

export const General = () => (
  <UpLabel textAlign={'left'} inline={false} width="small" text="Number :">
    <UpNumber />
  </UpLabel>
);

export const WithFloatingLabel = () => <UpNumber floatingLabel={'Number'} />;

export const WithHiddenButtons = () => <UpNumber hideButtons={true} />;

export const Integer = () => (
  <>
    <UpThemeProvider theme={{ ...UpDefaultTheme, inputBorderLess: false }}>
      <UpLabel textAlign={'left'} inline={true} width="small" text="Number :">
        <UpNumber min={0} decimalPlace={2} placeholder={'0,00'} />
      </UpLabel>
    </UpThemeProvider>
    <br />
    <NumberWrapper />
  </>
);

export const WithSeparator = () => (
  <>
    <UpThemeProvider theme={{ ...UpDefaultTheme, inputBorderLess: false }}>
      <UpLabel textAlign={'left'} inline={true} width="small" text="Number :">
        <UpNumber seperatorForDecimalNumbers={'comma'} />
      </UpLabel>
    </UpThemeProvider>
    <br />
    <NumberWrapper />
  </>
);

WithSeparator.storyName = 'Only Comma Is Accepted As Separator';

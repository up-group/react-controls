import * as React from 'react';
import { storiesOf } from '@storybook/react';
import UpCurrency from './UpCurrency';

import { getRootContainer } from '../../../Common/stories';

export default {
  title: 'Components/Display/UpCurrency',
  decorators: [getRootContainer('UpCurrency')],
  component: UpCurrency,
};

export const SimpleUsage = () => (
  <div>
    <UpCurrency value={50.99} integerFontSize={50} decimalFontSize={20} />
    <label>{'Empty Value :'}</label>
    <UpCurrency value={0} integerFontSize={50} decimalFontSize={20} />
    <label>{'With unit :'}</label>
    <UpCurrency value={50.99} integerFontSize={50} decimalFontSize={20} unit={'€'} />
    <label>{'Empty Value with unit :'}</label>
    <UpCurrency value={0} integerFontSize={50} decimalFontSize={20} unit={'€'} />
  </div>
);

export const CustomStyling = () => (
  <UpCurrency
    value={50.99}
    integerFontSize={80}
    decimalFontSize={30}
    integerLineHeight={100}
    decimalLineHeight={50}
    integerFontWeight={300}
    color={'#ff8c1a'}
    secondColor={'#994d00'}
    unit={'$'}
  />
);

export const WithAnimation = () => (
  <div>
    <label>{'With no delay :'}</label>
    <UpCurrency value={250.99} integerFontSize={50} decimalFontSize={20} unit={'€'} animate />
    <label>{'With 2 seconds delay :'}</label>
    <UpCurrency value={250.99} integerFontSize={50} decimalFontSize={20} unit={'€'} animate delay={2} />
    <label>{'With 4 seconds delay :'}</label>
    <UpCurrency value={250.99} integerFontSize={50} decimalFontSize={20} unit={'€'} animate delay={4} />
    <label>{'With negative decimal value'}</label>
    <UpCurrency value={-250.99} integerFontSize={50} decimalFontSize={20} unit={'€'} delay={4} />
    <label>{'With negative decimal value > -1'}</label>
    <UpCurrency value={-0.99} integerFontSize={50} decimalFontSize={20} unit={'€'} delay={4} />
  </div>
);

import * as React from 'react';
import UpDefaultTheme from '../../../Common/theming';
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider';
import { withKnobs } from '@storybook/addon-knobs';
import UpBox from '../../Containers/Box';
import { getRootContainer } from '../../../Common/stories';
import UpProgressBar from './UpProgressBar';

const mockData = (data = {}) => {
  return {
    type: '2',
    campaignType: 'STEP OR BASKET OR PERCENT OR STANDARD',
    visible: false,
    values: [
      {
        step: '0',
        isFirstStep: true,
        success: true,
      },
      {
        step: 40,
        success: true,
      },
      {
        step: 60,
        success: false,
      },
      {
        step: 80,
        success: false,
      },
    ],
    ...data,
  };
};

export default {
  title: 'Components/Display/UpProgressBar',
  decorators: [withKnobs, getRootContainer('UpProgressBar')],
  component: UpProgressBar,
};

export const General = () => {
  const props = mockData({ visible: true });
  return (
    <UpThemeProvider theme={UpDefaultTheme}>
      <UpBox style={{ margin: '40px 30px' }}>
        <UpBox flexDirection={'row'} flexWrap={true}>
          <UpProgressBar {...props} />
        </UpBox>
      </UpBox>
    </UpThemeProvider>
  );
};

export const WithPercentOnTile = () => {
  const props = mockData({
    stepOnTile: true,
    size: 0,
    type: '1',
    value: 100,
    maxValue: 100,
    values: [
      {
        step: '3',
        success: true,
      },
      {
        step: '100',
        success: false,
      },
    ],
  });
  return (
    <UpThemeProvider theme={UpDefaultTheme}>
      <UpBox style={{ margin: '40px 30px' }}>
        <UpBox flexDirection={'row'} flexWrap={true}>
          <UpProgressBar {...props} />
        </UpBox>
      </UpBox>
    </UpThemeProvider>
  );
};

export const WithoutFirstSteps = () => {
  const props = mockData({
    values: [
      {
        step: 20,
        success: true,
      },
      {
        step: 40,
        success: false,
      },
    ],
  });

  return (
    <UpThemeProvider theme={UpDefaultTheme}>
      <UpBox style={{ margin: '40px 30px' }}>
        <UpBox flexDirection={'row'} flexWrap={true}>
          <UpProgressBar {...props} />
        </UpBox>
      </UpBox>
    </UpThemeProvider>
  );
};

export const WithFirstStepAndLastStep = () => {
  const props = mockData({
    values: [
      {
        step: 0,
        success: false,
        isFirstStep: true,
      },
      {
        step: 40,
        success: false,
        isLastStep: true,
      },
    ],
  });

  return (
    <UpThemeProvider theme={UpDefaultTheme}>
      <UpBox style={{ margin: '40px 30px' }}>
        <UpBox flexDirection={'row'} flexWrap={true}>
          <UpProgressBar {...props} />
        </UpBox>
      </UpBox>
    </UpThemeProvider>
  );
};

import * as React from 'react';

import UpDefaultTheme from '../../../Common/theming';
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider';

import { withKnobs, text, number } from '@storybook/addon-knobs';
import UpToast from './';
import UpButton from '../../Inputs/Button/UpButton';
import { getRootContainer } from '../../../Common/stories';
import { IntentType } from 'theming/types';
import UpDataGrid from '../../Containers/DataGrid';

export default {
  title: 'Components|Display/UpToast',
  decorators: [withKnobs, getRootContainer('UpToast')]
};
type properties = Array<{
  property: string; 
  propType: Object | string; 
  required: 'true' | 'false';
  description: string; 
  defaultValue: any; 
}>;

export const CustomTableComponent = () => {
  return (
    <div
      style={{
        minHeight: '50px',
        width: '100%',
        border: '1px dashed #ccc',
        padding: '10px'
      }}>
      <UpDataGrid
        data={
          [
            {
              property: 'message',
              description: 'Message to display',
              required: 'false',
              propType: 'string',
              defaultValue: 'none'
            },
            {
              property: 'intent',
              description: 'intent of the UpToast',
              required: 'false',
              propType: 'string',
              defaultValue: 'default'
            },
            {
              property: 'autoDismissable',
              description: "Close the UpToast after the end of the provided  duration",
              required: 'false',
              propType: 'boolean',
              defaultValue: 'true'
            },
            {
              property: 'duration',
              description: 'Duration  before it disapears',
              required: 'false',
              propType: 'number',
              defaultValue: '3000'
            },
            {
              property: 'title',
              description: 'Title',
              required: 'false',
              propType: 'string | JSX',
              defaultValue: 'none'
            },
            {
              property: 'children',
              description: 'children to display',
              required: 'false',
              propType: 'string | JSX',
              defaultValue: 'none'
            },
            {
              property: 'onClose',
              description: 'Function to execute when you close the UpToast',
              required: 'false',
              propType: 'function',
              defaultValue: 'none'
            }
          ] as properties
        }
        columns={[
          {
            label: 'Props',
            field: 'property'
          },
          {
            label: 'Description',
            field: 'description'
          },
          {
            label: 'Type',
            field: 'propType'
          },
          {
            label: 'Required ?',
            field: 'required'
          },
          {
            label: 'Default Value',
            field: 'defaultValue'
          }
        ]}
      />
    </div>
  );
};
const useShowButton = () => {
  const [duration, resetDuration] = React.useState(5000);
  const newDuration = new Number(duration) as number;
  const Button = (
    <UpButton
      intent={'primary'}
      onClick={() => {
        resetDuration(newDuration);
      }}>
      Show toast
    </UpButton>
  );

  return [newDuration, Button];
};

export const General = () => {
  const intent = text('intent', 'success');
  const message = text('message', 'Succès');
  const [duration, Button] = useShowButton();
  return (
    <div style={{ marginTop: '100px' }}>
      {Button}
      <UpThemeProvider theme={UpDefaultTheme}>
        <UpToast
          intent={intent as IntentType}
          message={message}
          duration={duration as number}
          autoDismissable={true}
        />
      </UpThemeProvider>
    </div>
  );
};

export const ToastWithTitle = () => {
  const intent = text('intent', 'success');
  const message = text('message', 'Succès');
  const [duration, Button] = useShowButton();

  return (
    <div style={{ marginTop: '100px' }}>
      {Button}
      <UpThemeProvider theme={UpDefaultTheme}>
        <UpToast
          intent={intent as IntentType}
          title={'Opération'}
          autoDismissable={true}
          message={message}
          duration={duration as number}
        />
      </UpThemeProvider>
    </div>
  );
};

import * as React from 'react';
import UpDefaultTheme from '../../../Common/theming';
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/ThemeProvider';
import { withKnobs } from '@storybook/addon-knobs';
import UpToast, { UpToast as UpToastComponent } from './UpToast';
import UpButton from '../../Inputs/Button/UpButton';
import { getRootContainer } from '../../../Common/stories';
import UpLigne from '../../Display/Ligne';

export default {
  title: 'Components/Display/UpToast',
  decorators: [
    withKnobs,
    getRootContainer('UpToast'),
    UpToast => (
      <div style={{ height: '40vh' }}>
        <UpThemeProvider theme={UpDefaultTheme}>
          <UpToast />
        </UpThemeProvider>
      </div>
    ),
  ],
  component: UpToastComponent,
};

const useShowButton = () => {
  const [duration, resetDuration] = React.useState(5000);
  const newDuration = new Number(duration) as number;
  const Button = (
    <UpButton
      intent={'primary'}
      onClick={() => {
        resetDuration(newDuration);
      }}
    >
      Show toast
    </UpButton>
  );

  return [newDuration, Button];
};

export const General = () => {
  const [duration, Button] = useShowButton();

  return (
    <>
      {Button}
      <UpToast intent={'info'} message={'Infos'} duration={duration as number} autoDismissable={true} />
    </>
  );
};

export const ToastWithTitle = () => {
  const [duration, Button] = useShowButton();

  return (
    <>
      {Button}
      <UpToast
        intent={'success'}
        title={'Opération'}
        autoDismissable={true}
        message={'Succès'}
        duration={duration as number}
      />
    </>
  );
};

export const FalsyAutoDismissable = () => {
  const [duration, Button] = useShowButton();

  return (
    <>
      {Button}
      <UpToast intent={'danger'} autoDismissable={false} message={'Danger'} duration={duration as number} />
    </>
  );
};

FalsyAutoDismissable.storyName = 'Close Manually If Falsy AutoDismissable';

export const OnCloseCallBack = () => {
  const [duration, Button] = useShowButton();

  return (
    <>
      {Button}
      <UpToast
        intent={'primary'}
        autoDismissable={true}
        message={'A message is displayed in the console once UpToast is closed'}
        duration={duration as number}
        onClose={() => console.log('UpToast is closed')}
      />
    </>
  );
};

OnCloseCallBack.storyName = 'Call OnClose CallBack When UpToast Closed';

export const MultiLines = () => {
  const [duration, Button] = useShowButton();

  return (
    <>
      {Button}
      <UpToast intent={'success'} autoDismissable={true} duration={duration as number}>
        <UpLigne>{'Message 1 \n Message 2'}</UpLigne>
      </UpToast>
    </>
  );
};

MultiLines.storyName = 'Add Line Breaks Between Messages';

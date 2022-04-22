import React from 'react';
import UpBadge, { UpBadge as UpBadgeComponent } from './UpBadge';
import UpBox from '../../Containers/Box';
import UpLigne from '../../Display/Ligne';
import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

export default {
  title: 'Components/Display/UpBadge',
  decorators: [withKnobs, getRootContainer('UpBadge')],
  component: UpBadgeComponent,
};

export const General = () => (
  <>
    <UpBox margin={'small'}>
      <UpLigne color={'#000'}>
        Badge <b>intent</b> is <b>primary</b>
      </UpLigne>
      <UpBadge text="1" rounded={true} intent="primary" />
    </UpBox>
    <UpBox margin={'small'}>
      <UpLigne color={'#000'}>
        Badge <b>intent</b> is <b>info</b>
      </UpLigne>
      <UpBadge text="2" rounded={true} intent="info" />
    </UpBox>
    <UpBox margin={'small'}>
      <UpLigne color={'#000'}>
        Badge <b>intent</b> is <b>default</b>
      </UpLigne>
      <UpBadge text="3" rounded={true} intent="default" />
    </UpBox>
    <UpBox margin={'small'}>
      <UpLigne color={'#000'}>
        Badge <b>intent</b> is <b>warning</b>
      </UpLigne>
      <UpBadge text="4" rounded={true} intent="warning" />
    </UpBox>
    <UpBox margin={'small'}>
      <UpLigne color={'#000'}>
        Badge <b>intent</b> is <b>danger</b>
      </UpLigne>
      <UpBadge text="5" rounded={true} intent="danger" />
    </UpBox>
    <UpBox margin={'small'}>
      <UpLigne color={'#000'}>
        Badge <b>intent</b> is <b>error</b>
      </UpLigne>
      <UpBadge text="6" rounded={true} intent="error" />
    </UpBox>
    <UpBox margin={'small'}>
      <UpLigne color={'#000'}>
        Badge <b>intent</b> is <b>light</b>
      </UpLigne>
      <UpBadge text="7" rounded={true} intent="light" />
    </UpBox>
  </>
);

export const ColorBackgroundProperties = () => (
  <UpBox margin={'small'}>
    <UpLigne color={'#000'}>
      Set Badge <b>background</b> and <b>color</b>
    </UpLigne>
    <UpBadge text="1" rounded={true} background="yellow" color="red" />
  </UpBox>
);

ColorBackgroundProperties.storyName = 'Specify Background And Color Badge';

export const CallbacksProperties = () => (
  <UpBox margin={'small'}>
    <UpBadge
      text="1"
      rounded={true}
      intent="danger"
      onClick={() => alert('The badge is clicked')}
      onMouseEnter={() => console.log('event', 'onMouseEnter is fired')}
      onMouseLeave={() => console.log('event', 'onMouseLeave is fired')}
    />
  </UpBox>
);

CallbacksProperties.storyName = 'Pass CallBacks Events';

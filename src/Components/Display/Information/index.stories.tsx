import React from 'react';
import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import UpLoadingIndicator from '../LoadingIndicator';
import { style } from 'typestyle';
import UpInformation from './UpInformation';

export default {
  title: 'Components/Display/UpInformation',
  decorators: [withKnobs, getRootContainer('UpInformation')],
  component: UpInformation,
};

export const General = () => (
  <UpInformation
    iconName={'wink-grey'}
    title={'Information'}
    content={"Bienvenue sur votre nouvel espace de suivi de l'activité de ..."}
  ></UpInformation>
);

export const ShowActionButton = () => (
  <UpInformation
    iconName={'wink-grey'}
    title={'Information'}
    content={"Bienvenue sur votre nouvel espace de suivi de l'activité de ..."}
    action={{
      libelle: 'Validate',
      onClick: () => new Promise((resolve, reject) => setTimeout(resolve, 2000)),
      intent: 'success',
      actionType: 'validate',
      tooltip: 'Click To Confirm',
    }}
  ></UpInformation>
);

ShowActionButton.storyName = 'Show Action Button Withe Some Properties';

export const customizedIcon = () => (
  <UpInformation
    iconName={'warning'}
    iconSize={60}
    iconColor={'orange'}
    title={'Warning'}
    content={"Bienvenue sur votre nouvel espace de suivi de l'activité de ..."}
  >
    <UpLoadingIndicator isLoading={true} displayMode={'inline'} />
  </UpInformation>
);

customizedIcon.storyName = 'Show Customized Icon';

export const customizeUpInformationBlocks = () => (
  <UpInformation
    iconName={'wink-grey'}
    iconSize={40}
    title={'Warning'}
    content={"Bienvenue sur votre nouvel espace de suivi de l'activité de ..."}
    action={{
      libelle: 'Validate',
      onClick: () => new Promise((resolve, reject) => setTimeout(resolve, 2000)),
      intent: 'primary',
    }}
    customStyles={{
      title: () => ({
        fontWeight: 'bold',
        color: 'white',
      }),
      content: () => ({
        fontWeight: 'bold',
        color: 'black',
      }),
      contentWrapper: () => ({
        padding: '10px 20px 20px !important',
        backgroundColor: 'yellow !important',
      }),
      informationWrapper: () => ({
        backgroundColor: 'orange !important',
      }),
      button: () => ({
        marginRight: '200px',
      }),
    }}
  ></UpInformation>
);

customizeUpInformationBlocks.storyName = 'Customize UpInformation Blocks with customStyles property';

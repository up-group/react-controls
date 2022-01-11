import * as React from 'react';
import UpBulle, { UpBulle as UpBulleComponent } from './UpBulle';
import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { style } from 'typestyle';

export default {
  title: 'Components/Display/UpBulle',
  decorators: [withKnobs, getRootContainer('UpBulle')],
  component: UpBulleComponent,
};

export const General = () => {
  const defaultBulle = style({
    marginBottom: '25px',
    width: '228px',
  });

  return (
    <>
      <UpBulle
        icon={'chat'}
        value={1}
        backgroundImage={'linear-gradient(102deg, #cd0649, #ff54a0)'}
        message={'messages non-lus'}
        className={defaultBulle}
      />

      <UpBulle
        icon={'cake'}
        value={2}
        backgroundImage={'linear-gradient(282deg, #bddf3d, #5cbc15'}
        message={'anniversaire client à venir'}
        className={defaultBulle}
      />

      <UpBulle
        icon={'list2'}
        value={3}
        backgroundImage={'linear-gradient(282deg, #fcd333, #f89225)'}
        message={"clients en liste d'attente"}
        className={defaultBulle}
      />

      <UpBulle
        icon={'clip'}
        value={4}
        backgroundImage={'linear-gradient(102deg, #f00001, #ff4f32)'}
        message={'dossiers avec \n piéces manquantes'}
        className={defaultBulle}
      />

      <UpBulle
        icon={'profile'}
        value={5}
        backgroundImage={'linear-gradient(282deg, #21d7ff, #158fd8)'}
        message={'clients absents'}
        className={defaultBulle}
      />

      <UpBulle
        icon={'profile'}
        value={6}
        backgroundImage={'linear-gradient(282deg, #21aeff, #1161e3)'}
        message={'salariés absents '}
        className={defaultBulle}
      />

      <UpBulle
        icon={'go-back'}
        value={7}
        backgroundImage={'linear-gradient(282deg, #16f4a9, #14bfac)'}
        message={"retours d'absence"}
        className={defaultBulle}
      />
    </>
  );
};

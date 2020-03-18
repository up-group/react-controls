import * as React from 'react'
import UpBulle from './UpBulle'

import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { style } from 'typestyle';

export default { 
    title: 'Components|Display/UpBulle',
    decorators : [withKnobs, getRootContainer('UpBulle')]
  };

const defaultBulle = style({
        margin: "0px 25px 25px 0px",
        width: '228px',
})

export const General = () => (
        <div>
            <UpBulle 
                backgroundImage={"linear-gradient(102deg, #cd0649, #ff54a0)"}
                message={"messages non-lus"}
                icon={"chat"}
                className={defaultBulle}
                value={1}> 
            </UpBulle>

            <UpBulle
                backgroundImage={"linear-gradient(282deg, #bddf3d, #5cbc15"}
                message={"anniversaire client à venir"}
                icon={"cake"}
                className={defaultBulle}
                value={2}>
            </UpBulle>
            <UpBulle
                backgroundImage={"linear-gradient(282deg, #fcd333, #f89225)"}
                message={"clients en liste d'attente"}
                icon={"list2"}
                className={defaultBulle}
                value={3}> 
            </UpBulle>
            <UpBulle
                backgroundImage={"linear-gradient(102deg, #f00001, #ff4f32)"}
                message={"dossiers avec \n piéces manquantes"}
                icon={"clip"}
                className={defaultBulle}
                value={4}>
            </UpBulle>
            <UpBulle
                backgroundImage={"linear-gradient(282deg, #21d7ff, #158fd8)"}
                message={"clients absents"}
                icon={"profile"}
                className={defaultBulle}
                value={5}>
            </UpBulle>
            <UpBulle 
                backgroundImage={"linear-gradient(282deg, #21aeff, #1161e3)"}
                message={"salariés absents "}
                icon={"profile"}
                className={defaultBulle}
                value={6} >
            </UpBulle> 
            <UpBulle
                backgroundImage={"linear-gradient(282deg, #16f4a9, #14bfac)"}
                message={"retours d'absence"}
                icon={"go-back"}
                className={defaultBulle}
                value={7} >
            </UpBulle>
          </div>
    )
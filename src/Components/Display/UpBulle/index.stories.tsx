import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { style } from "typestyle"
import SvgIcon from "../SvgIcon/index"
import icons, { IconName, IconNames } from "../SvgIcon/icons"
import UpBulle from './UpBulle'
import { Icon } from '@blueprintjs/core';
import { iconClass } from '@blueprintjs/core/dist/common/classes';

storiesOf('UpBulle', module)
    .addWithInfo('Simple usage 2', 'Utilisation du composant en lui passant les données à afficher',
    () => (
        <div>
            <UpBulle BackgroundImage={"linear-gradient(102deg, #cd0649, #ff54a0)"}
                    Message={"messages non-lus"}
                    icon={"chat"}
                    Valeur={1}> 
            </UpBulle>
            <UpBulle
                    BackgroundImage={"linear-gradient(282deg, #bddf3d, #5cbc15"}
                    Message={"anniversaire client à venir"}
                    icon={"cake"}
                    Valeur={2}>
            </UpBulle>
            <UpBulle
                BackgroundImage={"linear-gradient(282deg, #fcd333, #f89225)"}
                Message={"clients en liste d'attente"}
                icon={"list2"}
                Valeur={3}> 
            </UpBulle>
            <UpBulle
                    BackgroundImage={"linear-gradient(102deg, #f00001, #ff4f32)"}
                    Message={"dossiers avec \n piéces manquantes"}
                icon={"clip"}
                    Valeur={4}>
            </UpBulle>
            <UpBulle
                    BackgroundImage={"linear-gradient(282deg, #21d7ff, #158fd8)"}
                    Message={"clients absents"}
                    icon={"profile"}
                    Valeur={5}>
            </UpBulle>
            <UpBulle BackgroundImage={"linear-gradient(282deg, #21aeff, #1161e3)"}
                    Message={"salariés absents "}
                icon={"profile"}
                    Valeur={6} >
            </UpBulle> 
            <UpBulle
                    BackgroundImage={"linear-gradient(282deg, #16f4a9, #14bfac)"}
                    Message={"retours d'absence"}
                    icon={"go-back"}
                    Valeur={7} >
            </UpBulle>
          </div>
    ));

import * as React from 'react'
import UpPicture from './UpPicture'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import UpBox from '../../Containers/Box';
import { getRootContainer } from "../../../Common/stories";

export default { 
    title: 'Components|Inputs/UpPicture',
    decorators : [withKnobs, getRootContainer('UpPicture')]
  };

export const General =
        () => (
            <UpBox style={{ margin: "40px 30px" }}>
                <UpPicture />
            </UpBox>
        )
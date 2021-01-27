import * as React from 'react';
import UpRating, { UpRating as UpRatingComponent } from './UpRating';
import { withKnobs } from '@storybook/addon-knobs';
import { getRootContainer } from '../../../Common/stories';

export default {
    title: 'Components/Inputs/UpRating',
    decorators: [withKnobs, getRootContainer('UpRating')],
    component: UpRatingComponent
};

export const General =
    () => (
        <UpRating
            onChange={console.log}
            name={"rating"}
            numberOfStars={5}
            max={5}
        />
    );

General.decorators = [(General) => <div style={{ padding: "30px" }}><General /></div>];

export const DisabledStars =
    () => (
        <UpRating
            onChange={console.log}
            name={"rating"}
            numberOfStars={5}
            max={5}
            disabled
        />
    );

DisabledStars.decorators = [(DisabledStars) => <div style={{ padding: "30px" }}><DisabledStars /></div>];
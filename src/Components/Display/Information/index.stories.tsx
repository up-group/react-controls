import * as React from 'react'
import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import UpLoadingIndicator from '../LoadingIndicator';
import { style } from 'typestyle';
import UpInformation from './UpInformation';

export default {
    title: 'Components/Display/UpInformation',
    decorators: [withKnobs, getRootContainer('UpInformation')],
    component: UpInformation
};

const wrapperBoxesStyle = style({
    $nest: {
        '& > div': {
            margin: '10px 0px',
        },
    },
});

export const General =
    () => (
        <UpInformation
            iconName={'wink-grey'}
            iconSize={40}
            iconColor={'#F59100'}
            title={"Information"}
            content={"Bienvenue sur votre nouvel espace de suivi de l'activité de ..."}
            action={{
                libelle: "Continuer",
                onClick: () => new Promise((resolve, reject) => setTimeout(resolve, 2000))
            }}>
            <UpLoadingIndicator
                isLoading={true}
                displayMode={'inline'}
            />
        </UpInformation>
    );

General.decorators = [(General) => <div className={wrapperBoxesStyle}><General /></div>];
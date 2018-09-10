import * as React from 'react'
import { storiesOf } from '@storybook/react'


import UpInput from './UpInput'
import UpLabel from '../../Display/Label'

storiesOf('UpInput', module)
    .addWithInfo('Text input', 'Utilisation simple',
        () => (
            <div style={{ padding: "30px" }}>
                <UpInput type={"text"} />
            </div>

        )).addWithInfo('Search Input', 'Champ de recherche',
            () => (

                <div style={{ padding: "30px" }}>
                    <UpInput type={"search"} />
                </div>

            )).addWithInfo('Email Input', 'Champ email',
                () => (

                    <div style={{ padding: "30px" }}>
                        <UpInput type={"email"} />
                    </div>

                )).addWithInfo('Phone Input', 'Champ phone',
                    () => (

                        <div style={{ padding: "30px" }}>
                            <UpInput type={"phone"} />
                        </div>

                    )).addWithInfo('Required Input', 'Champ requis',
                        () => (

                            <div style={{ padding: "30px" }}>
                                <UpInput isRequired={true} type={"email"} />
                            </div>

                        ));
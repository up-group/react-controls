import * as React from 'react'
import { storiesOf } from '@storybook/react'

import UpTreeView from './UpTreeView'


storiesOf('UpTreeView', module)
    .addWithInfo('Simple usage', 'Utilisation du composant en lui passant les données à afficher',
    () => {
        return <UpTreeView
            onBranchClick={console.log}
            childMenuItems={[
            {
                id: "1",
                text: "Test 1",
            },
            {
                id: "2",
                text: "Test 2",
                childMenuItems: [
                    {
                        id: "3",
                        text: "Test 3",
                    },
                    {
                        id: "24",
                        text: "Test 4",
                    }
                ]
            }
        ]} />
    })

    .addWithInfo('Show invisible', 'Utilisation du composant en lui passant les données à afficher',
    () => {
        return <UpTreeView
            onBranchClick={console.log}
            showInvisible={true}
            childMenuItems={[
                {
                    id: "1",
                    text: "Test 1",
                },
                {
                    isVisible: false,
                    id: "2",
                    text: "Test 2",
                    childMenuItems: [
                        {
                            id: "3",
                            text: "Test 3",
                        },
                        {
                            id: "24",
                            text: "Test 4",
                        }
                    ]
                }
            ]} />
    })
    ;

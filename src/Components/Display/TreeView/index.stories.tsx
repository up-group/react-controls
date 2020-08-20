import * as React from 'react'

import UpTreeView from './UpTreeView'

import { getRootContainer } from '../../../Common/stories';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

export default { 
    title: 'Components/Display/UpTreeView',
    decorators : [withKnobs, getRootContainer('UpTreeView')]
  };

  export const General =
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
    }
export const ShowInvisible =
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
    }

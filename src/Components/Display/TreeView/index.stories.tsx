import * as React from 'react'
import { storiesOf } from '@storybook/react'

import UpTreeView from './UpTreeView'


storiesOf('UpTreeView', module)
    .addWithInfo('Simple usage', 'Utilisation du composant en lui passant les données à afficher',
()=>{
   return <UpTreeView childMenuItems={[
        {
            id: "1",
            text: "Test 1",
          
            // childMenuItems?: MenuItemData[];
        },
        {
            id: "2",
            text: "Test 2",
          
            childMenuItems: [
                {
                    id: "3",
                    text: "Test 3",
                   
                    // childMenuItems?: MenuItemData[];

                },
                {
                    id: "24",
                    text: "Test 4",
                 
                    // childMenuItems?: MenuItemData[];
                }
            ]
        }
    ]} />

}

    );

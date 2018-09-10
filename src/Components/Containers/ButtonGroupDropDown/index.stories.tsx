import * as React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions';


import UpButtonGroupDropDown from './UpButtonGroupDropDown'

storiesOf('UpButtonGroupDropDown', module)
    .addWithInfo('Simple usage', 'Utilisation du composant en lui passant les données à afficher',
    () => (
            <div style={{ "margin": "30px" }}>
                <UpButtonGroupDropDown onClick={null} buttons={[{ name: "Option 1", onClick: action("Option 1") }]} text={"Add"} />
            </div>
    ))
    .addWithInfo('Boutton large', 'Utilisation du composant en lui passant les données à afficher',
    () => (
            <div style={{ "margin": "30px" }}>
                <UpButtonGroupDropDown  width="auto" onClick={null} buttons={[{ name: "Etiam sit amet felis vel arcu tempus semper non vitae leo", onClick: action("Option 1") }, { name: "Vestibulum posuere leo eu quam dignissim, nec dapibus risus tempus. Cras ac dignissim neque, at egestas nisi. Praesent vel nisl a orci molestie rutrum vel non augue", onClick: action("Option 2") }]} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"} />
            </div>
    )) ;
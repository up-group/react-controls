import * as React from 'react'
import { storiesOf } from '@storybook/react'

import * as Icons from "./Icons"


storiesOf('UpIcons', module)
    .addWithInfo('IconLoading', '',  
        () => (
            <div>
                <Icons.IconLoading />
                <br/><br/>
                <Icons.IconLoading IconSize="7" />
                <br/><br/>
                <Icons.IconLoading BackgroundColor="blue" Color="red" IconSize="20" />
                <br/><br/>
                <Icons.IconLoading onClick={() => alert("bonjour")} > click me !</Icons.IconLoading>
                <br/><br/>
                <Icons.IconLoading AvecCercle={true} > With circle</Icons.IconLoading>
                <br/><br/>
                <Icons.IconLoading IconSize="60em" > 60em</Icons.IconLoading>
                <br/><br/>
                <Icons.IconLoading IconSize="1in" > 1in</Icons.IconLoading>
                <br/><br/>
                <Icons.IconLoading IconSize="8cm" BackgroundColor="grey" > 8cm</Icons.IconLoading>
            </div>
        )
    )
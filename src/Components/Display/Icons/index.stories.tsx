import * as React from 'react'
import { storiesOf } from '@storybook/react'

import * as Icons from "./Icons"
import * as IconsM from "./materialinear"


var alertFont = { fontSize: "36px", color: "green", }


storiesOf('UpIcons', module)
    .addWithInfo('font load', '',
        () => (
            <div style={{ padding: "16px" }} >
                <IconsM.RestaurantMenu color="red" onClick={() => { alert(0) }} />
                <br /><br />
                <IconsM.RestaurantMenu color="blue" fontWeight="bold" onClick={() => { alert(0) }} />
                <br /><br />
                <IconsM.RestaurantMenu AvecCercle={true} color="blue" fontWeight="normal" onClick={() => { alert(0) }} />
                <br /><br />
                <IconsM.RestaurantMenu AlertNumber={5} AlertCircle={{ Active: true, Color: "red" }} color="blue" fontWeight="normal" onClick={() => { alert(0) }} />
                <br /><br />
            </div>
        )
    )

    .addWithInfo('IconLoading', '',
        () => (
            <div style={{ padding: "16px" }} >
                <Icons.IconLoading AlertNumber={9} />
                <br /><br />
                <Icons.IconLoading IconSize="7" />
                <br /><br />
                <Icons.IconLoading BackgroundColor="blue" Color="red" IconSize="20" AlertNumber={4} AlertCircle={{ Active: true, Color: "red" }} />
                <br /><br />
                <Icons.IconLoading onClick={() => alert("bonjour")} > click me !</Icons.IconLoading>
                <br /><br />
                <Icons.IconLoading AvecCercle={true} > With circle</Icons.IconLoading>
                <br /><br />
                <Icons.IconLoading IconSize="60em" > 60em</Icons.IconLoading>
                <br /><br />
                <Icons.IconLoading IconSize="1in" > 1in</Icons.IconLoading>
                <br /><br />
                <Icons.IconLoading IconSize="8cm" BackgroundColor="grey" > 8cm</Icons.IconLoading>
            </div>
        )
    )
    .addWithInfo('IconAlertes', '',
        () => (
            <div>
                <Icons.IconAlertes />
                <br /><br />
                <Icons.IconAlertes IconSize="7px" />
                <br /><br />
                <Icons.IconAlertes BackgroundColor="gray" Color="red" IconSize="20px" />
                <br /><br />
                <Icons.IconAlertes BackgroundColor="gray" Color="red" IconSize="40px" />

                <br /><br />
                <Icons.IconAlertes AlertNumber={3} />
                <br /><br />
                <Icons.IconAlertes AlertNumber={36} IconSize="7px" />
                <br /><br />
                <Icons.IconAlertes AlertNumber={36} BackgroundColor="gray" Color="red" IconSize="20px" />
                <br /><br />
                <Icons.IconAlertes AlertNumber={36} BackgroundColor="gray" Color="red" IconSize="40px" />

                <br /><br />
                <Icons.IconAlertes AlertNumber={3} AlertCircle={{ Active: true, Color: "#f44336" }} />
                <br /><br />
                <Icons.IconAlertes AlertNumber={36} AlertCircle={{ Active: true, Color: "#f44336" }} IconSize="7px" />
                <br /><br />
                <Icons.IconAlertes AlertNumber={36} AlertCircle={{ Active: true, Color: "#f44336" }} BackgroundColor="gray" Color="red" IconSize="20px" />
                <br /><br />
                <Icons.IconAlertes AlertNumber={36} AlertCircle={{ Active: true, Color: "#f44336" }} BackgroundColor="gray" Color="red" IconSize="40px" />

                <br /><br />
                <Icons.IconAlertes AlertNumber={3} AlertCircle={{ Active: true, Color: "#f44336" }} AlertFont={alertFont} />
                <br /><br />
                <Icons.IconAlertes AlertNumber={36} AlertCircle={{ Active: true, Color: "#f44336" }} AlertFont={alertFont} IconSize="7px" />
                <br /><br />
                <Icons.IconAlertes AlertNumber={36} AlertCircle={{ Active: true, Color: "#f44336" }} AlertFont={alertFont} BackgroundColor="gray" Color="red" IconSize="20px" />
                <br /><br />
                <Icons.IconAlertes AlertNumber={36} AlertCircle={{ Active: true, Color: "#f44336" }} AlertFont={alertFont} BackgroundColor="gray" Color="red" IconSize="40px" />
            </div>
        )
    )
    .addWithInfo('Icone LSWA - Perceval', '',
        () => (
            <div style={{ padding: "16px" }} >
                <Icons.IconLswaLink IconSize="20" AlertNumber={3} AlertCircle={{ Active: true, Color: "red" }} />
                <br />
                <Icons.IconLswaLink IconSize="32" AlertNumber={3} AlertCircle={{ Active: true, Color: "red" }} />
                <br />
                <Icons.IconLswaLink IconSize="150" AlertNumber={3} AlertCircle={{ Active: true, Color: "red" }} />

                <br /><br />
                <Icons.IconPercevalLink IconSize="20" AlertNumber={3} AlertCircle={{ Active: true, Color: "red" }} />
                <br />
                <Icons.IconPercevalLink IconSize="32" AlertNumber={3} AlertCircle={{ Active: true, Color: "red" }} />
                <br />
                <Icons.IconPercevalLink IconSize="150" AlertNumber={3} AlertCircle={{ Active: true, Color: "red" }} />
            </div>
        )
    )
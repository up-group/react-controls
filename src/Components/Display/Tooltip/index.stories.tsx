import * as React from 'react'
import * as update from 'react-addons-update'

import { storiesOf } from '@storybook/react'

import UpTooltip from './'

import UpLigne from '../Ligne'
import UpPanel from '../../Containers/Panel'

import UpDefaultTheme from '../../../Common/theming'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/themedComponents'

const TooltipRenderer = (<div>
    <p>
        Pour plus d'info, veuillez consulter le site de notre produit...
    </p>
</div>) ;

storiesOf('UpTooltip', module)
.addWithInfo('Simple usage', 'Utilisation du composant en lui passant les données à afficher',
 () => (
    <UpThemeProvider theme={UpDefaultTheme}>
        <div style={{margin:"10px"}}>
            <UpPanel type={"primary"}>
                Exemple d'utilisation du composant <code>UpTooltip</code> sur du texte.
            </UpPanel>   
            <UpTooltip title={"Détails"} content={TooltipRenderer}>
                <UpLigne>Placer la souris dessus</UpLigne>
            </UpTooltip>
        </div>
    </UpThemeProvider>
))
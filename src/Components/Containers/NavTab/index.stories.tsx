import * as React from 'react'
import { storiesOf, ReactiveVar} from '@storybook/react'


import UpNavTap from './UpNavTap'
import UpPanel from '../../Containers/Panel'

const tab1 = <UpPanel /*type="info" */message="Information sur ..." />
const tab2 = <UpPanel /*type="warning"*/ message="Attention sur ..." />
const tab3 = <UpPanel /*type="danger"*/ message="Erreur sur ..." />

storiesOf('UpNavTap', module)
  .addWithInfo('Simple usage', 'Utilisation du composant en lui passant les données à afficher',
    () => (
        
        <div style={{"margin" : "30px"}}>
        <UpNavTap tabs={[{
          content: tab1,
          head:"Tab 1"
        },{
          content: tab2,
          head:"Tab 2"
        },{
          content: tab3,
          head:"Tab 3"
        }]} />
        </div>
      )
) ;
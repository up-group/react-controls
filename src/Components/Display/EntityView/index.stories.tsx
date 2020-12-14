import * as React from "react";
import UpPanel from "../../Containers/Panel";

import { getRootContainer } from "../../../Common/stories";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import UpEntityView from "./";


export default { 
  title: 'Components/Display/UpEntityView',
  decorators : [withKnobs, getRootContainer('UpEntityView')]
};

export const General =
    () => (
      <UpPanel type={"primary"}>
        Exemple d'utilisation du composant
        entity view.
        <UpEntityView 
        title={'Informations'}
         icon={'cadhoc-check'} 
         informations={[
          {key:'Code Client', value: 'CLT23232323'},
          {key:'Raison sociale', value:'Sté Dupond'},
          {key:'Email utilisateur', value:'jean.dupont@up.coop'},
          {key:'Date de création', value:'18/02/2020'},
          {key:'N° Commande', value:'CMD1234567'},
          {key:'Montant', value:'3456,46 €'}
        ]}
         />
      </UpPanel>
    )

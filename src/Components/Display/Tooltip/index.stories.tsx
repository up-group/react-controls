import * as React from "react";
import * as update from "react-addons-update";

import UpTooltip from "./";

import UpLigne from "../Ligne";
import UpPanel from "../../Containers/Panel";

import { getRootContainer } from "../../../Common/stories";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

const TooltipRenderer = (
  <div>
    <p style={{ padding: "10px" }}>
      Pour plus d'info, veuillez consulter le site de notre produit...
    </p>
  </div>
);

export default { 
  title: 'Components|Display/UpTooltip',
  decorators : [withKnobs, getRootContainer('UpTooltip')]
};

export const General =
    () => (
      <UpPanel type={"primary"}>
        Exemple d'utilisation du composant
        <UpTooltip title={"Détails"} content={TooltipRenderer}>
          <UpLigne>
            &nbsp;
            <code>&lt;UpTooltip /&gt;</code>
            &nbsp;
          </UpLigne>
        </UpTooltip>{" "}
        sur du texte.
      </UpPanel>
    )

export const OnALink = () => (
      <UpPanel>
        Exemple d'utilisation du composant
        <UpTooltip id={"Tooltip"} title={"Détails"} content={TooltipRenderer}>
          <a data-for={"Tooltip"} data-tip="React-tooltip">
            ◕‿‿◕
          </a>
        </UpTooltip>{" "}
        sur du texte.
      </UpPanel>
    )

import * as React from "react";
import * as update from "react-addons-update";

import { storiesOf } from "@storybook/react";

import UpTooltip from "./";

import UpLigne from "../Ligne";
import UpPanel from "../../Containers/Panel";

import UpDefaultTheme from "../../../Common/theming";
import { ThemeProvider as UpThemeProvider } from "../../../Common/theming/ThemeProvider";

import { getRootContainer } from "../../../Common/stories";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

const TooltipRenderer = (
  <div>
    <p style={{ padding: "10px" }}>
      Pour plus d'info, veuillez consulter le site de notre produit...
    </p>
  </div>
);

const stories = storiesOf("Components|Display/UpTooltip", module);

stories.addDecorator(withKnobs);
stories.addDecorator(getRootContainer("UpTooltip"));

stories.add(
    "Simple usage",
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
    ), { info : "Utilisation du composant en lui passant les données à afficher" }
  )
  .add(
    "Sur un lien",
    () => (
      <UpPanel>
        Exemple d'utilisation du composant
        <UpTooltip id={"Tooltip"} title={"Détails"} content={TooltipRenderer}>
          <a data-for={"Tooltip"} data-tip="React-tooltip">
            ◕‿‿◕
          </a>
        </UpTooltip>{" "}
        sur du texte.
      </UpPanel>
    ), { info : "Utilisation du composant en lui passant les données à afficher" }
  );

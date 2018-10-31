import * as React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import UpButtonGroup from "./";
import { getRootContainer } from "../../../Common/stories";

import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { UpButton } from "../../..";

const stories = storiesOf("Containers/UpButtonGroup", module);

stories.addDecorator(withKnobs);
stories.addDecorator(getRootContainer("UpButtonGroup"));

stories
  .addWithInfo(
    "DropDown",
    "Utilisation du composant en lui passant les données à afficher",
    () => (
      <div>
        <UpButtonGroup gutter={0} align={"h"}>
          <UpButton
            onClick={action("Main")}
            actionType={"add"}
            intent={"primary"}
          >
            Add
          </UpButton>
          <UpButton
            onClick={action("OnClick")}
            dropDown="down"
            extraActions={[{ libelle: "Option 1", onClick: action('Option 1') }, { libelle: "Option 2", onClick: action('Option 2') }, { size: 2 }, { libelle: "Option 3", onClick: action("Option 3") }]}
          />
        </UpButtonGroup>

        <UpButtonGroup gutter={0} align={"h"}>
          <UpButton onClick={action("Main")} actionType={"add"} />
          <UpButton
            onClick={action("OnClick")}
            dropDown="down"
            extraActions={[{ libelle: "Option 1", onClick: action('Option 1') }, { libelle: "Option 2", onClick: action('Option 2') }, { size: 2 }, { libelle: "Option 3", onClick: action("Option 3") }]}
          />
        </UpButtonGroup>
      </div>
    )
  )
  .addWithInfo(
    "Multi Button",
    "Utilisation du composant en lui passant les données à afficher",
    () => (
      <div style={{ margin: "30px" }}>
        <UpButtonGroup gutter={0} align={"h"}>
          <UpButton onClick={action("Add")} width={"normal"} actionType={"add"}>
            Add
          </UpButton>
          <UpButton
            onClick={action("Edit")}
            width={"normal"}
            intent={'primary'}
            actionType={"edit"}
          >
            Edit
          </UpButton>
          <UpButton
            onClick={action("Delete")}
            width={"normal"}
            intent={'danger'}
            actionType={"delete"}
          >
            Remove
          </UpButton>
        </UpButtonGroup>

        <UpButtonGroup gutter={5} align={"h"}>
          <UpButton 
              intent={'primary'}
              onClick={action("Add")} width={"normal"} actionType={"add"}>
            Add
          </UpButton>
          <UpButton
            onClick={action("Edit")}
            width={"normal"}
            intent={'primary'}
            actionType={"edit"}
          >
            Edit
          </UpButton>
          <UpButton
            onClick={action("Edit")}
            width={"normal"}
            intent={'info'}
            actionType={"info-sign"}
          >
            Info
          </UpButton>
          <UpButton
            onClick={action("Edit")}
            width={"normal"}
            intent={'warning'}
            actionType={"help"}
          >
            Aide
          </UpButton>
          <UpButton
            onClick={action("Delete")}
            width={"normal"}
            intent={'danger'}
            actionType={"delete"}
          >
            Remove
          </UpButton>
        </UpButtonGroup>
      </div>
    )
  );

import * as React from "react";
import { storiesOf } from "@storybook/react";

import UpDefaultTheme from "../../../Common/theming";
import { IntentType } from "../../../Common/theming/types";
import { ThemeProvider as UpThemeProvider } from "../../../Common/theming/ThemeProvider";

import UpPagination from "./UpPagination";
import UpDataGrid from "./UpDataGrid";
import { ICellFormatter } from "./UpDefaultCellFormatter";
import RowTemplate from "./templates/UpDataGridRowWithStatus";
import { getRootContainer } from "../../../Common/stories";

import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";

var data = [];
var data2 = [];

for (var i = 0; i < 50; i++) {
  data.push({
    c1: "Value " + i,
    c2: false,
    c3: "Value 3",
    c4: { Libelle: "Suivi", Couleur: "#369" }
  });
}
for (var i = 0; i < 20; i++) {
  data2.push({
    c1: "Value 2 " + i,
    c2: false,
    c3: "Value 3",
    c4: { Libelle: "Suivi", Couleur: "#369" }
  });
}

class SpecifiqueCellFormatter {
  format(item, column) {
    return <p style={{ color: "red" }}>{item[column.field]}</p>;
  }
}

const storiesPagination = storiesOf("Containers/UpPagination", module);

storiesPagination.addDecorator(withKnobs);
storiesPagination.addDecorator(getRootContainer("UpPagination"));
storiesPagination.addWithInfo(
  "Simple usage",
  "Utilisation du composant en lui passant le nombre d'élément à afficher",
  () => (
    <UpPagination
      total={100}
      onPageChange={(page, take, skip) => {
        console.log(page, take, skip);
      }}
    />
  )
);

const stories = storiesOf("Containers/UpDataGrid", module);
stories.addDecorator(withKnobs);
stories.addDecorator(getRootContainer("UpDataGrid"));

stories
  .addWithInfo(
    "Simple usage",
    "Utilisation du composant de grid sans pagination et sans sélection",
    () => (
      <UpDataGrid
        isPaginationEnabled={false}
        isSelectionEnabled={false}
        isSortEnabled={false}
        columns={[
          {
            label: "Col 1",
            field: "c1",
            isSortable: true
          },
          {
            label: "Col 2",
            field: "c2",
            type: "boolean",
            isSortable: true
          },
          {
            label: "Col 3",
            field: "c3",
            isSortable: true
          },
          {
            label: "Col 4",
            field: "c4",
            isSortable: true
          }
        ]}
        data={data}
      />
    )
  )
  .addWithInfo(
    "Export csv",
    "Utilisation du composant de grid sans pagination et sans sélection",
    () => (
      <UpDataGrid
        exportCsv={{ fileName: "export.csv", textButton: "Exporter" }}
        columns={[
          { label: "Col 1", field: "c1", isSortable: true },
          { label: "Col 2", field: "c2", type: "boolean", isSortable: true },
          { label: "Col 3", field: "c3", isSortable: true },
          { label: "Col 4", field: "c4", isSortable: true }
        ]}
        data={data}
      />
    )
  )
  .addWithInfo(
    "Avec sélection",
    "Utilisation du composant de grid avec sélection",
    () => (
      <UpDataGrid
        onSelectionChange={(a, b) => {
          console.log(a, b);
        }}
        isPaginationEnabled={false}
        isSelectionEnabled={true}
        columns={[
          {
            label: "Col 1",
            field: "c1",
            isSortable: true
          },
          {
            label: "Col 2",
            field: "c2",
            isSortable: true
          },
          {
            label: "Col 3",
            field: "c3",
            isSortable: true
          },
          {
            label: "Col 4",
            field: "c4",
            isSortable: true
          }
        ]}
        data={data}
      />
    )
  )
  .addWithInfo(
    "Avec actions",
    "Utilisation d'un jeux d'action commun à toutes les lignes",
    () => (
      <UpDataGrid
        actions={[
          {
            action: () => {},
            type: "add",
            description: "Ajouter un lien"
          },
          {
            action: () => {},
            type: "edit",
            description: "Modifier"
          },
          {
            action: () => {},
            type: "delete",
            description: "Supprimer"
          }
        ]}
        columns={[
          {
            label: "Col 1",
            field: "c1",
            isSortable: true
          },
          {
            label: "Col 2",
            field: "c2",
            isSortable: true
          },
          {
            label: "Col 3",
            field: "c3",
            isSortable: true
          },
          {
            label: "Col 4",
            field: "c4",
            isSortable: true
          }
        ]}
        data={data}
      />
    )
  )
  .addWithInfo(
    "Avec template",
    "Utilisation d'un template spécifique pour les lignes",
    () => (
      <UpDataGrid
        rowTemplate={RowTemplate}
        actions={[
          {
            action: () => {},
            type: "add",
            description: "Ajouter un lien"
          },
          {
            action: () => {},
            type: "edit",
            description: "Modifier"
          },
          {
            action: () => {},
            type: "delete",
            description: "Supprimer"
          }
        ]}
        columns={[
          {
            label: "Col 1",
            field: "c1",
            isSortable: true
          },
          {
            label: "Col 2",
            field: "c2",
            isSortable: true
          },
          {
            label: "Col 3",
            field: "c3",
            isSortable: true
          },
          {
            label: "Col 4",
            field: "c4",
            isSortable: true
          }
        ]}
        data={data}
      />
    )
  )
  .addWithInfo(
    "Avec source externe",
    "Utilisation d'une source externe spécifique pour les lignes",
    () => (
      <UpDataGrid
        dataSource={{
          query: "https://jsonplaceholder.typicode.com/posts"
        }}
        columns={[
          {
            label: "Id",
            field: "id",
            isSortable: true
          },
          {
            label: "Titre",
            field: "title",
            isSortable: true
          },
          {
            label: "Texte",
            field: "body",
            isSortable: true
          },
          {
            label: "Auteur",
            field: "userId",
            isSortable: true
          }
        ]}
      />
    )
  )
  .addWithInfo(
    "Avec source externe et pagination",
    "Utilisation d'une source externe spécifique pour les lignes avec activation de la pagination",
    () => (
      <UpDataGrid
        dataSource={{
          query: "https://jsonplaceholder.typicode.com/posts"
        }}
        isPaginationEnabled={true}
        columns={[
          {
            label: "Id",
            field: "id",
            isSortable: true
          },
          {
            label: "Titre",
            field: "title",
            isSortable: true
          },
          {
            label: "Texte",
            field: "body",
            isSortable: true
          },
          {
            label: "Auteur",
            field: "userId",
            isSortable: true
          }
        ]}
      />
    )
  )
  .addWithInfo(
    "Avec source externe et pagination en bas",
    "Utilisation d'une source externe spécifique pour les lignes avec activation de la pagination",
    () => (
      <UpDataGrid
        dataSource={{
          query: "https://jsonplaceholder.typicode.com/posts"
        }}
        paginationPosition="bottom"
        isPaginationEnabled={true}
        columns={[
          {
            label: "Id",
            field: "id",
            isSortable: true
          },
          {
            label: "Titre",
            field: "title",
            isSortable: true
          },
          {
            label: "Texte",
            field: "body",
            isSortable: true
          },
          {
            label: "Auteur",
            field: "userId",
            isSortable: true
          }
        ]}
      />
    )
  )
  .addWithInfo(
    "Avec source externe et pagination haut et bas",
    "Utilisation d'une source externe spécifique pour les lignes avec activation de la pagination",
    () => (
      <UpDataGrid
        paginationPosition="both"
        dataSource={{
          query: "https://jsonplaceholder.typicode.com/posts"
        }}
        isPaginationEnabled={true}
        columns={[
          {
            label: "Id",
            field: "id",
            isSortable: true
          },
          {
            label: "Titre",
            field: "title",
            isSortable: true
          },
          {
            label: "Texte",
            field: "body",
            isSortable: true
          },
          {
            label: "Auteur",
            field: "userId",
            isSortable: true
          }
        ]}
      />
    )
  )
  .addWithInfo(
    "Avec cell formatter",
    "Utilisation d'une source externe spécifique pour les lignes avec formattage spécifique des cellules",
    () => (
      <UpDataGrid
        paginationPosition="both"
        dataSource={{
          query: "https://jsonplaceholder.typicode.com/posts"
        }}
        isPaginationEnabled={true}
        columns={[
          {
            label: "Id",
            field: "id",
            isSortable: true,
            formatter: new SpecifiqueCellFormatter()
          },
          {
            label: "Titre",
            field: "title",
            isSortable: true
          },
          {
            label: "Texte",
            field: "body",
            isSortable: true
          },
          {
            label: "Auteur",
            field: "userId",
            isSortable: true
          }
        ]}
      />
    )
  )
  .addWithInfo("Injection de ligne", "", () => (
    <UpDataGrid
      injectRow={(previous, next, col) => {
        if (
          next == null ||
          (previous &&
            previous.value &&
            previous.value.c1 &&
            previous.value.c1.indexOf("2") != -1)
        ) {
          return <div style={{ color: "red" }}>Injected row</div>;
        }
        return null;
      }}
      isPaginationEnabled={false}
      isSelectionEnabled={false}
      isSortEnabled={false}
      columns={[
        {
          label: "Col 1",
          field: "c1",
          isSortable: true
        },
        {
          label: "Col 2",
          field: "c2",
          type: "boolean",
          isSortable: true
        },
        {
          label: "Col 3",
          field: "c3",
          isSortable: true
        },
        {
          label: "Col 4",
          field: "c4",
          isSortable: true
        }
      ]}
      data={data}
    />
  ))
  .addWithInfo("Test props modification", "", () => <Test />);

export interface testProps {}

export interface testState {
  val: any;
  page: number;
  skip: number;
  total: number;
  lastChange?: any;
}

export class Test extends React.Component<testProps, testState> {
  public static defaultProps: testProps = {};

  constructor(p, c) {
    super(p, c);
    this.state = {
      val: data,
      page: 2,
      skip: 50,
      total: 250
    };
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ val: data, total: 250 });
          }}
        >
          set data
        </button>
        <button
          onClick={() => {
            this.setState({ val: data2, total: 20 });
          }}
        >
          set data2
        </button>
        <UpDataGrid
          onSelectionChange={console.log}
          isPaginationEnabled={true}
          isSelectionEnabled={true}
          defaultPage={this.state.page}
          defaultSkip={this.state.skip}
          defaultTake={50}
          total={this.state.total}
          columns={[
            {
              label: "Col 1",
              field: "c1",
              isSortable: true
            },
            {
              label: "Col 2",
              field: "c2",
              isSortable: true
            },
            {
              label: "Col 3",
              field: "c3",
              isSortable: true
            },
            {
              label: "Col 4",
              field: "c4",
              isSortable: true
            }
          ]}
          data={this.state.val}
        />
      </div>
    );
  }
}

import * as React from "react";
import * as classnames from 'classnames' ;

import { storiesOf } from "@storybook/react";

import UpDefaultTheme, { UpThemeInterface } from "../../../Common/theming";
import { IntentType, WithThemeProps } from "../../../Common/theming/types";
import { ThemeProvider as UpThemeProvider } from "../../../Common/theming/ThemeProvider";

import UpPagination from "./UpPagination";
import UpDataGrid from "./UpDataGrid";
import { ICellFormatter } from "./UpDefaultCellFormatter";
import { getRootContainer } from "../../../Common/stories";

import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { style } from "typestyle";

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
storiesPagination.add(
  "Simple usage",
  () => (
    <UpPagination
      total={100}
      onPageChange={(page, take, skip) => {
        console.log(page, take, skip);
      }}
    />
  ), { info : 'Utilisation du composant en lui passant les données à afficher'}
);

const stories = storiesOf("Containers/UpDataGrid", module);
stories.addDecorator(withKnobs);
stories.addDecorator(getRootContainer("UpDataGrid"));

const paginationCounterStyle = (props: WithThemeProps) => style({
  margin: "0px 0px",
  color: props.theme.colorMap.primary,
  backgroundColor: props.theme.colorMap.primaryFg,
  borderRadius: "4px",
  padding: "6px 12px",
  lineHeight: "1.43",
  textDecoration: "none",
  border: `1px solid ${props.theme.colorMap.primary}`,
  float: "right",
  cursor: "pointer",
});

stories
  .add(
    "Simple usage",
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
    ),
    {
      info: "Utilisation du composant de grid sans pagination et sans sélection"
    }
  )
  .add(
    "Export csv",
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
    ),
    {
      info: "Utilisation du composant de grid sans pagination et sans sélection"
    }
  )
  .add(
    "Avec sélection",
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
    ),
    { info: "Utilisation du composant de grid avec sélection" }
  )
  .add(
    "Avec actions",
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
    ),
    { info: "Utilisation d'un jeux d'action commun à toutes les lignes" }
  )
  /*.add(
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
  )*/
  .add(
    "Avec source externe",
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
    ),
    { info: "Utilisation d'une source externe spécifique pour les lignes" }
  )
  .add(
    "Avec source externe et pagination",
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
    ),
    {
      info:
        "Utilisation d'une source externe spécifique pour les lignes avec activation de la pagination"
    }
  )
  .add(
    "Avec source externe et pagination en bas",
    () => (
      <UpDataGrid
        dataSource={{
          query: "https://jsonplaceholder.typicode.com/posts"
        }}
        className={style({
          $nest: {
            "&.up-data-grid-container .up-pagination-nav li a": {
              border: 0,
              fontSize: "10pt"
            },
            "&.up-data-grid-container .up-pagination-result-message": {
              border: 0,
              color: "black",
              fontSize: "10pt"
            },
            "& .up-pagination-takes": {
              display: "none"
            },
            "& .up-pagination-page a": {
              textDecoration: "underline",
              color: "black",
              minWidth: "auto",
              padding: "4px"
            },
            "& .up-pagination-page:hover a, & .up-pagination-page.active:hover a, & .up-pagination-page:hover span": {
              background: "transparent",
              color: UpDefaultTheme.colorMap.primary
            },
            "& .up-pagination-page.disabled a": {
              textDecoration: "none"
            },
            "& .up-pagination-page.disabled:hover a, & .up-pagination-page.disabled:hover span": {
              color: UpDefaultTheme.colorMap.disabledFg
            },
            "& .up-pagination-page.active a": {
              background: "transparent",
              color: UpDefaultTheme.colorMap.primary
            }
          }
        })}
        paginationProps={{
          previousLabel: "Précédent",
          nextLabel: "Suivant",
          renderResultMessage: (
            theme: UpThemeInterface,
            from: number,
            to: number,
            total: number
          ) => (
            <span
              className={classnames(
                "up-pagination-result-message",
                paginationCounterStyle({ theme })
              )}
            >
              {total == 0 && <span>Aucun résultat</span>}
              {total != 0 && (
                <span>
                  <span>R&eacute;sultat(s)&nbsp;</span>
                  <span>{from}</span>
                  <span> &agrave; </span>
                  <span>{to}</span>
                  <span> sur </span>
                  <span>{total}</span>
                </span>
              )}
            </span>
          )
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
    ),
    {
      info:
        "Utilisation d'une source externe spécifique pour les lignes avec activation de la pagination"
    }
  )
  .add(
    "Avec source externe et pagination haut et bas",
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
    ),
    {
      info:
        "Utilisation d'une source externe spécifique pour les lignes avec activation de la pagination"
    }
  )
  .add(
    "Avec cell formatter",
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
    ),
    {
      info:
        "Utilisation d'une source externe spécifique pour les lignes avec formattage spécifique des cellules"
    }
  )
  .add(
    "Injection de ligne",
    () => (
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
    ),
    { info: "Injection de lignes" }
  )
  .add("Test props modification", () => <Test />, {
    info: "With test de modification de props"
  });

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
          paginationProps={{
            page : this.state.page,
            skip : this.state.skip,
            take : 50,
            total: this.state.total,
          }}
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

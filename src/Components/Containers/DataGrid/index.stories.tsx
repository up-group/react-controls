import * as React from "react";
import classnames from "classnames";

import UpDefaultTheme, { UpThemeInterface } from "../../../Common/theming";
import { WithThemeProps } from "../../../Common/theming/types";

import UpPagination from "./UpPagination";
import UpDataGrid from "./UpDataGrid";
import { getRootContainer } from "../../../Common/stories";

import { withKnobs } from "@storybook/addon-knobs";
import { style } from "typestyle";
import { UpParagraph, UpBox, UpHeading, UpCodeViewer,UpButton  } from "../../../Components";
export default {
  title: 'Components|Containers/UpDataGrid',
  decorators : [withKnobs, getRootContainer('UpDataGrid')]
};

const simpleDataGrid =
  `const data = [];
  for (var i = 0; i < 50; i++) {
        data.push({
        c1: "Value " + i,
        c2: false,
        c3: "Value 3",
        c4: { Libelle: "Suivi", Couleur: "#369" }
      });
  }
<UpDataGrid  
isPaginationEnabled = { false } 
isSelectionEnabled = { false } 
isSortEnabled = { false } 
columns = { 
    [
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
  data = { data } />`;

var data = [];
var data2 = [];

for (var i = 0; i < 5; i++) {
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

const paginationCounterStyle = (props: WithThemeProps) =>
  style({
    margin: "0px 0px",
    color: props.theme.colorMap.primary,
    backgroundColor: props.theme.colorMap.primaryFg,
    borderRadius: "4px",
    padding: "6px 12px",
    lineHeight: "1.43",
    textDecoration: "none",
    border: `1px solid ${props.theme.colorMap.primary}`,
    float: "right",
    cursor: "pointer"
  });


export const General =
    () => (
      <>
      <UpParagraph className={style({
        borderLeft: '4px solid #F59100',
        padding : '10px',
      })} textAlign={'left'} color={'#111'}>
        Le composant <code>UpDataGrid</code> fournit un ensemble de fonctionnalités telles la pagination, le tri ou le filtre des données parmi tant d'autres.
      </UpParagraph>
      <UpBox className={style({
        margin: '10px'
      })}>
        <UpHeading>Liste des ...</UpHeading>
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
          <UpHeading>Code</UpHeading>
          <UpParagraph className={style({
                borderLeft: '4px solid #F59100',
                padding: '10px',
              })} textAlign={'left'} color={'#111'}>
                Pour afficher le composant <code>UpDataGrid</code> en lui injectant les données à afficher sans modifier les autres props :
          </UpParagraph>
          <UpCodeViewer code={simpleDataGrid}></UpCodeViewer>
        </UpBox>
      </>
    )

export const WithSelection =
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

export const WithActions =
    () => (
      <UpDataGrid
        onRowClick={(i, row) => console.log(i, row)}
        rowActions={[
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

export const WithExternalSource =
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

export const WithExternalSourceAndPaginationTop =
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

export const WithExternalSourceAndPaginationBottom =
    () => (
      <UpDataGrid
        dataSource={{
          query: "https://jsonplaceholder.typicode.com/posts"
        }}
        displayRowActionsWithinCell={true}
        isSelectionEnabled={true}
        onSelectionChange={(a, b) => {
          console.log(a, b);
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
            },
            "& .up-row-flex": {
              textAlign: "end",
              flexDirection: "row-reverse"
            }
          }
        })}
        paginationProps={{
          paginationNavigationSeparator: "...",
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
        rowActions={[
          {
            action: (values) => {
              console.log(values)
            },
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

        paginationPosition="bottom"
        isPaginationEnabled={true}
        columns={[
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
        footerProps={{
          isPaginationEnabled: true,
          actionsButtonText: 'Groupe actions',
          showActionsButtons: true,
          validationButtonText: 'Validate'
        }}
        headerProps={{
          title: 'Titre du tableau',
          buttons: <><UpButton intent='secondary'>Bouton 1</UpButton><UpButton intent='secondary'>Bouton 2</UpButton></>
        }}
      />
    )

export const WithExternalSourceAndPaginationTopAndBottom =
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

export const WithCellFormatter =
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

  export const  WithRowInsertion =
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
    )

export interface TestProps {}

interface TestState {
  val: any;
  page: number;
  skip: number;
  total: number;
  lastChange?: any;
}

class Test extends React.Component<TestProps, TestState> {
  public static defaultProps: TestProps = {};

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
            page: this.state.page,
            skip: this.state.skip,
            take: 50,
            total: this.state.total
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

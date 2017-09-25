import * as React from 'react'
import { storiesOf } from '@storybook/react'

import UpDefaultTheme from '../../../Common/theming'
import { IntentType } from '../../../Common/theming/types'
import { ThemeProvider as UpThemeProvider } from '../../../Common/theming/themedComponents'

import UpPagination from './UpPagination'
import UpDataGrid from './UpDataGrid'
import { ICellFormatter } from "./UpDefaultCellFormatter"
import RowTemplate from './templates/UpDataGridRowWithStatus'

var data = [];

for (var i = 0; i < 15; i++) {
    data.push({ 'c1': 'Value ' + i, 'c2': false, 'c3': 'Value 3', 'c4': { Libelle: 'Suivi', Couleur: '#369' } })
}

class SpecifiqueCellFormatter {
    format(item, column) {
        return (
            <p style={{ color: "red" }}>{item[column.field]}</p>
        );
    }
}

storiesOf('UpPagination', module)
    .addWithInfo('Simple usage', 'Utilisation du composant en lui passant le nombre d\'élément à afficher',
    () => (
        <UpThemeProvider theme={UpDefaultTheme}>
            <UpPagination total={100} onPageChange={(page, take, skip) => {
                console.log(page, take, skip);
            }} />
        </UpThemeProvider>
    ));

storiesOf('UpDataGrid', module)
    .addWithInfo('Simple usage', 'Utilisation du composant de grid sans pagination et sans sélection',
    () => (
        <UpThemeProvider theme={UpDefaultTheme}>
            <UpDataGrid
                isPaginationEnabled={false}
                isSelectionEnabled={false}
                isSortEnabled={false}
                columns={
                    [{
                        label: 'Col 1',
                        field: 'c1',
                        isSortable: true
                    }, {
                        label: 'Col 2',
                        field: 'c2',
                        type: 'boolean',
                        isSortable: true
                    }, {
                        label: 'Col 3',
                        field: 'c3',
                        isSortable: true
                    }, {
                        label: 'Col 4',
                        field: 'c4',
                        isSortable: true
                    }]
                } data={data} />
        </UpThemeProvider>
    )).addWithInfo('Avec sélection', 'Utilisation du composant de grid avec sélection',
    () => (
        <UpThemeProvider theme={UpDefaultTheme}>
            <UpDataGrid
                isPaginationEnabled={false}
                isSelectionEnabled={true}
                columns={
                    [{
                        label: 'Col 1',
                        field: 'c1',
                        isSortable: true
                    }, {
                        label: 'Col 2',
                        field: 'c2',
                        isSortable: true
                    }, {
                        label: 'Col 3',
                        field: 'c3',
                        isSortable: true
                    }, {
                        label: 'Col 4',
                        field: 'c4',
                        isSortable: true
                    }]
                } data={data} />
        </UpThemeProvider>
    )).addWithInfo('Avec actions', 'Utilisation d\'un jeux d\'action commun à toutes les lignes',
    () => (
        <UpThemeProvider theme={UpDefaultTheme}>
            <UpDataGrid
                actions={
                    [{
                        action: () => { },
                        intent: 'primary',
                        type: 'add',
                        description: 'Ajouter un lien'
                    }, {
                        action: () => { },
                        intent: 'primary',
                        type: 'edit',
                        description: 'Modifier'
                    }, {
                        action: () => { },
                        intent: 'danger',
                        type: 'delete',
                        description: 'Supprimer'
                    }]
                }
                columns={
                    [{
                        label: 'Col 1',
                        field: 'c1',
                        isSortable: true
                    }, {
                        label: 'Col 2',
                        field: 'c2',
                        isSortable: true
                    }, {
                        label: 'Col 3',
                        field: 'c3',
                        isSortable: true
                    }, {
                        label: 'Col 4',
                        field: 'c4',
                        isSortable: true
                    }]
                } data={data} />
        </UpThemeProvider>
    )).addWithInfo('Avec template', 'Utilisation d\'un template spécifique pour les lignes',
    () => (
        <UpThemeProvider theme={UpDefaultTheme}>
            <UpDataGrid
                rowTemplate={RowTemplate}
                actions={
                    [{
                        action: () => { },
                        intent: 'primary',
                        type: 'add',
                        description: 'Ajouter un lien'
                    }, {
                        action: () => { },
                        intent: 'primary',
                        type: 'edit',
                        description: 'Modifier'
                    }, {
                        action: () => { },
                        intent: 'danger',
                        type: 'delete',
                        description: 'Supprimer'
                    }]
                }
                columns={
                    [{
                        label: 'Col 1',
                        field: 'c1',
                        isSortable: true
                    }, {
                        label: 'Col 2',
                        field: 'c2',
                        isSortable: true
                    }, {
                        label: 'Col 3',
                        field: 'c3',
                        isSortable: true
                    }, {
                        label: 'Col 4',
                        field: 'c4',
                        isSortable: true
                    }]
                } data={data} />
        </UpThemeProvider>
    )).addWithInfo('Avec source externe', 'Utilisation d\'une source externe spécifique pour les lignes',
    () => (
        <UpThemeProvider theme={UpDefaultTheme}>
            <UpDataGrid
                dataSource={{
                    query: "https://jsonplaceholder.typicode.com/posts"
                }}
                columns={
                    [{
                        label: 'Id',
                        field: 'id',
                        isSortable: true
                    }, {
                        label: 'Titre',
                        field: 'title',
                        isSortable: true
                    }, {
                        label: 'Texte',
                        field: 'body',
                        isSortable: true
                    }, {
                        label: 'Auteur',
                        field: 'userId',
                        isSortable: true
                    }]
                } />
        </UpThemeProvider>
    )).addWithInfo('Avec source externe et pagination', 'Utilisation d\'une source externe spécifique pour les lignes avec activation de la pagination',
    () => (
        <UpThemeProvider theme={UpDefaultTheme}>
            <UpDataGrid
                dataSource={{
                    query: "https://jsonplaceholder.typicode.com/posts"
                }}
                isPaginationEnabled={true}
                columns={
                    [{
                        label: 'Id',
                        field: 'id',
                        isSortable: true
                    }, {
                        label: 'Titre',
                        field: 'title',
                        isSortable: true
                    }, {
                        label: 'Texte',
                        field: 'body',
                        isSortable: true
                    }, {
                        label: 'Auteur',
                        field: 'userId',
                        isSortable: true
                    }]
                } />
        </UpThemeProvider>
    )).addWithInfo('Avec source externe et pagination en bas', 'Utilisation d\'une source externe spécifique pour les lignes avec activation de la pagination',
    () => (
        <UpThemeProvider theme={UpDefaultTheme}>
            <UpDataGrid
                dataSource={{
                    query: "https://jsonplaceholder.typicode.com/posts"
                }}
                paginationPosition="bottom"
                isPaginationEnabled={true}
                columns={
                    [{
                        label: 'Id',
                        field: 'id',
                        isSortable: true
                    }, {
                        label: 'Titre',
                        field: 'title',
                        isSortable: true
                    }, {
                        label: 'Texte',
                        field: 'body',
                        isSortable: true
                    }, {
                        label: 'Auteur',
                        field: 'userId',
                        isSortable: true
                    }]
                } />
        </UpThemeProvider>
    )).addWithInfo('Avec source externe et pagination haut et bas', 'Utilisation d\'une source externe spécifique pour les lignes avec activation de la pagination',
    () => (
        <UpThemeProvider theme={UpDefaultTheme}>
            <UpDataGrid
                paginationPosition="both"
                dataSource={{
                    query: "https://jsonplaceholder.typicode.com/posts"
                }}
                isPaginationEnabled={true}
                columns={
                    [{
                        label: 'Id',
                        field: 'id',
                        isSortable: true
                    }, {
                        label: 'Titre',
                        field: 'title',
                        isSortable: true
                    }, {
                        label: 'Texte',
                        field: 'body',
                        isSortable: true
                    }, {
                        label: 'Auteur',
                        field: 'userId',
                        isSortable: true
                    }]
                } />
        </UpThemeProvider>
    )).addWithInfo('Avec cell formatter', 'Utilisation d\'une source externe spécifique pour les lignes avec formattage spécifique des cellules',
    () => (
        <UpThemeProvider theme={UpDefaultTheme}>
            <UpDataGrid
                paginationPosition="both"
                dataSource={{
                    query: "https://jsonplaceholder.typicode.com/posts"
                }}
                isPaginationEnabled={true}
                columns={
                    [{
                        label: 'Id',
                        field: 'id',
                        isSortable: true,
                        formatter: new SpecifiqueCellFormatter()
                    }, {
                        label: 'Titre',
                        field: 'title',
                        isSortable: true
                    }, {
                        label: 'Texte',
                        field: 'body',
                        isSortable: true
                    }, {
                        label: 'Auteur',
                        field: 'userId',
                        isSortable: true
                    }]
                } />
        </UpThemeProvider>
    ))
    .addWithInfo('Injection de ligne', '',
    () => (
        <UpThemeProvider theme={UpDefaultTheme}>
            <UpDataGrid
                injectRow={(previous, next, col) => {
                    if (next == null || previous && previous.value && previous.value.c1 && previous.value.c1.indexOf("2") != -1) {
                        return <div style={{ color: "red" }}>Injected row</div>;
                    }
                    return null;
                }}
                isPaginationEnabled={false}
                isSelectionEnabled={false}
                isSortEnabled={false}
                columns={
                    [{
                        label: 'Col 1',
                        field: 'c1',
                        isSortable: true
                    }, {
                        label: 'Col 2',
                        field: 'c2',
                        type: 'boolean',
                        isSortable: true
                    }, {
                        label: 'Col 3',
                        field: 'c3',
                        isSortable: true
                    }, {
                        label: 'Col 4',
                        field: 'c4',
                        isSortable: true
                    }]
                } data={data} />
        </UpThemeProvider>
    ))
    ;